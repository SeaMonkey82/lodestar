import {mapValues} from "@lodestar/utils";
import {GossipType} from "../../gossip/interface.js";
import {LinearGossipQueue} from "./linear.js";

export enum QueueType {
  FIFO = "FIFO",
  LIFO = "LIFO",
}

export enum DropType {
  count = "count",
  ratio = "ratio",
}

type DropOpts =
  | {
      type: DropType.count;
      count: number;
    }
  | {
      type: DropType.ratio;
      start: number;
      step: number;
    };

/**
 * Numbers from https://github.com/sigp/lighthouse/blob/b34a79dc0b02e04441ba01fd0f304d1e203d877d/beacon_node/network/src/beacon_processor/mod.rs#L69
 */
const gossipQueueOpts: {
  [K in GossipType]: GossipQueueOpts;
} = {
  // validation gossip block asap
  [GossipType.beacon_block]: {maxLength: 1024, type: QueueType.FIFO, dropOpts: {type: DropType.count, count: 1}},
  // gossip length for blob is beacon block length * max blobs per block = 4096
  [GossipType.blob_sidecar]: {
    maxLength: 4096,
    type: QueueType.FIFO,
    dropOpts: {type: DropType.count, count: 1},
  },
  // lighthoue has aggregate_queue 4096 and unknown_block_aggregate_queue 1024, we use single queue
  [GossipType.beacon_aggregate_and_proof]: {
    maxLength: 5120,
    type: QueueType.LIFO,
    dropOpts: {type: DropType.count, count: 1},
  },
  // lighthouse has attestation_queue 16384 and unknown_block_attestation_queue 8192, we use single queue
  // this topic may cause node to be overload and drop 100% of lower priority queues
  // so we want to drop it by ratio until node is stable enough (queue is empty)
  // start with dropping 1% of the queue, then increase 1% more each time. Reset when queue is empty
  [GossipType.beacon_attestation]: {
    maxLength: 24576,
    type: QueueType.LIFO,
    dropOpts: {type: DropType.ratio, start: 0.01, step: 0.01},
  },
  [GossipType.voluntary_exit]: {maxLength: 4096, type: QueueType.FIFO, dropOpts: {type: DropType.count, count: 1}},
  [GossipType.proposer_slashing]: {maxLength: 4096, type: QueueType.FIFO, dropOpts: {type: DropType.count, count: 1}},
  [GossipType.attester_slashing]: {maxLength: 4096, type: QueueType.FIFO, dropOpts: {type: DropType.count, count: 1}},
  [GossipType.sync_committee_contribution_and_proof]: {
    maxLength: 4096,
    type: QueueType.LIFO,
    dropOpts: {type: DropType.count, count: 1},
  },
  [GossipType.sync_committee]: {maxLength: 4096, type: QueueType.LIFO, dropOpts: {type: DropType.count, count: 1}},
  [GossipType.light_client_finality_update]: {
    maxLength: 1024,
    type: QueueType.FIFO,
    dropOpts: {type: DropType.count, count: 1},
  },
  [GossipType.light_client_optimistic_update]: {
    maxLength: 1024,
    type: QueueType.FIFO,
    dropOpts: {type: DropType.count, count: 1},
  },
  // lighthouse has bls changes queue set to their max 16384 to handle large spike at capella
  [GossipType.bls_to_execution_change]: {
    maxLength: 16384,
    type: QueueType.FIFO,
    dropOpts: {type: DropType.count, count: 1},
  },
};

type GossipQueueOpts = {
  type: QueueType;
  maxLength: number;
  dropOpts: DropOpts;
};


/**
 * Wraps a GossipValidatorFn with a queue, to limit the processing of gossip objects by type.
 *
 * A queue here is essential to protect against DOS attacks, where a peer may send many messages at once.
 * Queues also protect the node against overloading. If the node gets bussy with an expensive epoch transition,
 * it may buffer too many gossip objects causing an Out of memory (OOM) error. With a queue the node will reject
 * new objects to fit its current throughput.
 *
 * Queues may buffer objects by
 *  - topic '/eth2/0011aabb/beacon_attestation_0/ssz_snappy'
 *  - type `GossipType.beacon_attestation`
 *  - all objects in one queue
 *
 * By topic is too specific, so by type groups all similar objects in the same queue. All in the same won't allow
 * to customize different queue behaviours per object type (see `gossipQueueOpts`).
 */
export function createGossipQueues<T>(): {[K in GossipType]: LinearGossipQueue<T>} {
  return mapValues(gossipQueueOpts, (opts) => {
    return new LinearGossipQueue<T>(opts);
  });
}
