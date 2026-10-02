import assert from "node:assert/strict";
import { paymentState } from "./implementation.mjs";
assert.equal(paymentState(false), "pending");
