import {HashComputationMeta, toHexString} from "@chainsafe/ssz";
import {SignedBeaconBlock, SignedBlindedBeaconBlock, Slot, ssz} from "@lodestar/types";
import {SLOTS_PER_EPOCH} from "@lodestar/params";
import {BeaconStateTransitionMetrics, onPostStateMetrics, onStateCloneMetrics} from "./metrics.js";
import {beforeProcessEpoch, EpochTransitionCache, EpochTransitionCacheOpts} from "./cache/epochTransitionCache.js";
import {
  CachedBeaconStateAllForks,
  CachedBeaconStatePhase0,
  CachedBeaconStateAltair,
  CachedBeaconStateBellatrix,
  CachedBeaconStateCapella,
} from "./types.js";
import {computeEpochAtSlot} from "./util/index.js";
import {verifyProposerSignature} from "./signatureSets/index.js";
import {
  processSlot,
  upgradeStateToAltair,
  upgradeStateToBellatrix,
  upgradeStateToCapella,
  upgradeStateToDeneb,
} from "./slot/index.js";
import {processBlock} from "./block/index.js";
import {EpochTransitionStep, processEpoch} from "./epoch/index.js";
import {BlockExternalData, DataAvailableStatus, ExecutionPayloadStatus} from "./block/externalData.js";
import {ProcessBlockOpts} from "./block/types.js";

// Multifork capable state transition

// NOTE DENEB: Mandatory BlockExternalData to decide if block is available or not
export type StateTransitionOpts = BlockExternalData &
  EpochTransitionCacheOpts &
  ProcessBlockOpts & {
    verifyStateRoot?: boolean;
    verifyProposer?: boolean;
    verifySignatures?: boolean;
    dontTransferCache?: boolean;
  };

/**
 * `state.clone()` invocation source tracked in metrics
 */
export enum StateCloneSource {
  stateTransition = "stateTransition",
  processSlots = "processSlots",
}

/**
 * `state.hashTreeRoot()` invocation source tracked in metrics
 */
export enum StateHashTreeRootSource {
  stateTransition = "state_transition",
  blockTransition = "block_transition",
  prepareNextSlot = "prepare_next_slot",
  prepareNextEpoch = "prepare_next_epoch",
  computeNewStateRoot = "compute_new_state_root",
}

/**
 * Implementation Note: follows the optimizations in protolambda's eth2fastspec (https://github.com/protolambda/eth2fastspec)
 */
export function stateTransition(
  state: CachedBeaconStateAllForks,
  signedBlock: SignedBeaconBlock | SignedBlindedBeaconBlock,
  options: StateTransitionOpts = {
    // Assume default to be valid and available
    executionPayloadStatus: ExecutionPayloadStatus.valid,
    dataAvailableStatus: DataAvailableStatus.available,
  },
  metrics?: BeaconStateTransitionMetrics | null
): CachedBeaconStateAllForks {
  const {verifyStateRoot = true, verifyProposer = true} = options;

  const block = signedBlock.message;
  const blockSlot = block.slot;

  // .clone() before mutating state in state transition
  let postState = state.clone(options.dontTransferCache);

  if (metrics) {
    onStateCloneMetrics(postState, metrics, StateCloneSource.stateTransition);
  }

  // State is already a ViewDU, which won't commit changes. Equivalent to .setStateCachesAsTransient()
  // postState.setStateCachesAsTransient();

  // Process slots (including those with no blocks) since block.
  // Includes state upgrades
  postState = processSlotsWithTransientCache(postState, blockSlot, options, metrics);

  // Verify proposer signature only
  if (verifyProposer) {
    if (!verifyProposerSignature(postState, signedBlock)) {
      throw new Error("Invalid block signature");
    }
  }

  // Process block
  const fork = state.config.getForkSeq(block.slot);

  // Note: time only on success
  const processBlockTimer = metrics?.processBlockTime.startTimer();

  processBlock(fork, postState, block, options, options);

  // if we call hashTreeRoot(), we'll not able to measure commit() time vs hashTreeRoot() time
  const processBlockCommitTimer = metrics?.processBlockCommitTime.startTimer();
  const hashComps: HashComputationMeta = {
    byLevel: [],
    offset: 0,
    bottomNodes: [],
  };
  postState.commit(hashComps);
  processBlockCommitTimer?.();

  const hashTreeRootTimer = metrics?.stateHashTreeRootTime.startTimer({
    source: StateHashTreeRootSource.stateTransition,
  });
  // hashTreeRoot() logic goes here
  postState.type.executeHashComputationMeta(hashComps);
  // this does not take time
  const stateRoot = postState.hashTreeRoot();
  hashTreeRootTimer?.();

  // Note: time only on success. Include processBlock and commit
  processBlockTimer?.();

  if (metrics) {
    onPostStateMetrics(postState, metrics);
  }

  // Verify state root
  if (verifyStateRoot) {
    if (!ssz.Root.equals(block.stateRoot, stateRoot)) {
      throw new Error(
        `Invalid state root at slot ${block.slot}, expected=${toHexString(block.stateRoot)}, actual=${toHexString(
          stateRoot
        )}`
      );
    }
  }

  return postState;
}

/**
 * Like `processSlots` from the spec but additionally handles fork upgrades
 *
 * Implementation Note: follows the optimizations in protolambda's eth2fastspec (https://github.com/protolambda/eth2fastspec)
 */
export function processSlots(
  state: CachedBeaconStateAllForks,
  slot: Slot,
  epochTransitionCacheOpts?: EpochTransitionCacheOpts & {dontTransferCache?: boolean},
  metrics?: BeaconStateTransitionMetrics | null
): CachedBeaconStateAllForks {
  // .clone() before mutating state in state transition
  let postState = state.clone(epochTransitionCacheOpts?.dontTransferCache);

  if (metrics) {
    onStateCloneMetrics(postState, metrics, StateCloneSource.processSlots);
  }

  // State is already a ViewDU, which won't commit changes. Equivalent to .setStateCachesAsTransient()
  // postState.setStateCachesAsTransient();

  postState = processSlotsWithTransientCache(postState, slot, epochTransitionCacheOpts, metrics);

  // do not commit, hashTreeRoot() should do it
  postState.hashTreeRoot();

  return postState;
}

/**
 * All processSlot() logic but separate so stateTransition() can recycle the caches
 */
function processSlotsWithTransientCache(
  postState: CachedBeaconStateAllForks,
  slot: Slot,
  epochTransitionCacheOpts?: EpochTransitionCacheOpts,
  metrics?: BeaconStateTransitionMetrics | null
): CachedBeaconStateAllForks {
  const {config} = postState;
  if (postState.slot > slot) {
    throw Error(`Too old slot ${slot}, current=${postState.slot}`);
  }

  while (postState.slot < slot) {
    processSlot(postState);

    // Process epoch on the first slot of the next epoch
    if ((postState.slot + 1) % SLOTS_PER_EPOCH === 0) {
      // At fork boundary we don't want to process "next fork" epoch before upgrading state
      const fork = postState.config.getForkSeq(postState.slot);

      const epochTransitionTimer = metrics?.epochTransitionTime.startTimer();

      let epochTransitionCache: EpochTransitionCache;
      {
        const timer = metrics?.epochTransitionStepTime.startTimer({step: EpochTransitionStep.beforeProcessEpoch});
        epochTransitionCache = beforeProcessEpoch(postState, epochTransitionCacheOpts);
        timer?.();
      }

      processEpoch(fork, postState, epochTransitionCache, metrics);

      const {currentEpoch, statuses, balances} = epochTransitionCache;
      metrics?.registerValidatorStatuses(currentEpoch, statuses, balances);

      postState.slot++;

      {
        const timer = metrics?.epochTransitionStepTime.startTimer({step: EpochTransitionStep.afterProcessEpoch});
        postState.epochCtx.afterProcessEpoch(postState, epochTransitionCache);
        timer?.();
      }


      // Note: time only on success. Include beforeProcessEpoch, processEpoch, afterProcessEpoch, commit
      epochTransitionTimer?.();

      // Upgrade state if exactly at epoch boundary
      const stateSlot = computeEpochAtSlot(postState.slot);
      if (stateSlot === config.ALTAIR_FORK_EPOCH) {
        postState = upgradeStateToAltair(postState as CachedBeaconStatePhase0) as CachedBeaconStateAllForks;
      }
      if (stateSlot === config.BELLATRIX_FORK_EPOCH) {
        postState = upgradeStateToBellatrix(postState as CachedBeaconStateAltair) as CachedBeaconStateAllForks;
      }
      if (stateSlot === config.CAPELLA_FORK_EPOCH) {
        postState = upgradeStateToCapella(postState as CachedBeaconStateBellatrix) as CachedBeaconStateAllForks;
      }
      if (stateSlot === config.DENEB_FORK_EPOCH) {
        postState = upgradeStateToDeneb(postState as CachedBeaconStateCapella) as CachedBeaconStateAllForks;
      }
    } else {
      postState.slot++;
    }
  }

  return postState;
}
