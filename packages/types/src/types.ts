import {Slot} from "./primitive/types.js";

export * from "./primitive/types.js";
export {ts as phase0} from "./phase0/index.js";
export {ts as altair} from "./altair/index.js";
export {ts as bellatrix} from "./bellatrix/index.js";
export {ts as capella} from "./capella/index.js";
export {ts as deneb} from "./deneb/index.js";

export {ts as allForks} from "./allForks/index.js";

/** Common non-spec type to represent roots as strings */
export type RootHex = string;

/** Handy enum to represent the block production source */
export enum ProducedBlockSource {
  builder = "builder",
  engine = "engine",
}

export type SlotRootHex = {slot: Slot; root: RootHex};
export type SlotOptionalRoot = {slot: Slot; root?: RootHex};

/**
 * [Validator status specification](https://hackmd.io/ofFJ5gOmQpu1jjHilHbdQQ)
 */
export type ValidatorStatus =
  | "pending_initialized"
  | "pending_queued"
  | "active_ongoing"
  | "active_exiting"
  | "active_slashed"
  | "exited_unslashed"
  | "exited_slashed"
  | "withdrawal_possible"
  | "withdrawal_done";
