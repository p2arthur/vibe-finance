import assert from "node:assert/strict";
import { exportColumns } from "./implementation.mjs";
assert.deepEqual(exportColumns(), ["date", "category", "amount", "currency"]);
