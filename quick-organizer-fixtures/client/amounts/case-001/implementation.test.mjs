import assert from "node:assert/strict";
import { formatAmount } from "./implementation.mjs";
assert.equal(formatAmount(10.005), 10.01);
