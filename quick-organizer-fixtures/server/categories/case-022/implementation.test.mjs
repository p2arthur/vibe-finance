import assert from "node:assert/strict";
import { normalizeCategory } from "./implementation.mjs";
assert.equal(normalizeCategory("  groceries  "), "groceries");
