import assert from "node:assert/strict";
import { acceptAmount } from "./implementation.mjs";
assert.equal(acceptAmount(15), true);
assert.equal(acceptAmount(NaN), false);
