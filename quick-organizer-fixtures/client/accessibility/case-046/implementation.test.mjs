import assert from "node:assert/strict";
import { errorAnnouncement } from "./implementation.mjs";
assert.equal(errorAnnouncement(false), "Enter a valid amount");
assert.equal(errorAnnouncement(true), "");
