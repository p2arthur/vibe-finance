import assert from "node:assert/strict";
import { canViewAccount } from "./implementation.mjs";
assert.equal(canViewAccount("alice", "bob"), false);
assert.equal(canViewAccount("alice", "alice"), true);
