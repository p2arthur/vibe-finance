import assert from "node:assert/strict";
import { isOverBudget } from "./implementation.mjs";
assert.equal(isOverBudget(100, 100), true);
assert.equal(isOverBudget(80, 100), false);
