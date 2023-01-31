import {
  GENESIS_SLOT,
  GENESIS_EPOCH,
  FAR_FUTURE_EPOCH,
  BASE_REWARDS_PER_EPOCH,
  DEPOSIT_CONTRACT_TREE_DEPTH,
  JUSTIFICATION_BITS_LENGTH,
  BLS_WITHDRAWAL_PREFIX,
  ETH1_ADDRESS_WITHDRAWAL_PREFIX,
  DOMAIN_BEACON_PROPOSER,
  DOMAIN_BEACON_ATTESTER,
  DOMAIN_RANDAO,
  DOMAIN_DEPOSIT,
  DOMAIN_VOLUNTARY_EXIT,
  DOMAIN_SELECTION_PROOF,
  DOMAIN_AGGREGATE_AND_PROOF,
  DOMAIN_SYNC_COMMITTEE,
  DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF,
  DOMAIN_CONTRIBUTION_AND_PROOF,
  DOMAIN_BLS_TO_EXECUTION_CHANGE,
  DOMAIN_APPLICATION_BUILDER,
  TIMELY_SOURCE_FLAG_INDEX,
  TIMELY_TARGET_FLAG_INDEX,
  TIMELY_HEAD_FLAG_INDEX,
  TIMELY_SOURCE_WEIGHT,
  TIMELY_TARGET_WEIGHT,
  TIMELY_HEAD_WEIGHT,
  SYNC_REWARD_WEIGHT,
  PROPOSER_WEIGHT,
  WEIGHT_DENOMINATOR,
  TARGET_AGGREGATORS_PER_COMMITTEE,
  RANDOM_SUBNETS_PER_VALIDATOR,
  EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION,
  ATTESTATION_SUBNET_COUNT,
  TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE,
  SYNC_COMMITTEE_SUBNET_COUNT,
  BLOB_TX_TYPE,
  VERSIONED_HASH_VERSION_KZG,
} from "@lodestar/params";

/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Hand-picked list of constants declared in consensus-spec .md files.
 * This list is asserted to be up-to-date with the test `test/e2e/api/specConstants.test.ts`
 */
export const specConstants = {
  // phase0/beacon-chain.md
  // ## misc
  GENESIS_SLOT,
  GENESIS_EPOCH,
  FAR_FUTURE_EPOCH,
  BASE_REWARDS_PER_EPOCH,
  DEPOSIT_CONTRACT_TREE_DEPTH,
  JUSTIFICATION_BITS_LENGTH,
  ENDIANNESS: "little",
  // ## Withdrawal prefixes
  BLS_WITHDRAWAL_PREFIX,
  ETH1_ADDRESS_WITHDRAWAL_PREFIX,
  // ## Domain types
  DOMAIN_BEACON_PROPOSER,
  DOMAIN_BEACON_ATTESTER,
  DOMAIN_RANDAO,
  DOMAIN_DEPOSIT,
  DOMAIN_VOLUNTARY_EXIT,
  DOMAIN_SELECTION_PROOF,
  DOMAIN_AGGREGATE_AND_PROOF,
  DOMAIN_APPLICATION_BUILDER,

  // phase0/validator.md
  TARGET_AGGREGATORS_PER_COMMITTEE,
  RANDOM_SUBNETS_PER_VALIDATOR,
  EPOCHS_PER_RANDOM_SUBNET_SUBSCRIPTION,
  ATTESTATION_SUBNET_COUNT,

  // altair/beacon-chain.md
  // ## Participation flag indices
  TIMELY_SOURCE_FLAG_INDEX,
  TIMELY_TARGET_FLAG_INDEX,
  TIMELY_HEAD_FLAG_INDEX,
  // ## Incentivization weights
  TIMELY_SOURCE_WEIGHT,
  TIMELY_TARGET_WEIGHT,
  TIMELY_HEAD_WEIGHT,
  SYNC_REWARD_WEIGHT,
  PROPOSER_WEIGHT,
  WEIGHT_DENOMINATOR,
  // ## Domain types
  DOMAIN_SYNC_COMMITTEE,
  DOMAIN_SYNC_COMMITTEE_SELECTION_PROOF,
  DOMAIN_CONTRIBUTION_AND_PROOF,

  // altair/validator.md
  TARGET_AGGREGATORS_PER_SYNC_SUBCOMMITTEE,
  SYNC_COMMITTEE_SUBNET_COUNT,

  // ## Capella domain types
  DOMAIN_BLS_TO_EXECUTION_CHANGE,

  // Deneb types
  BLOB_TX_TYPE,
  VERSIONED_HASH_VERSION_KZG,
};
