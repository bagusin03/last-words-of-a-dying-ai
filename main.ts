// Last Words of a Dying AI — make.fun entry.
// One line: the last words of an AI as the power is cut, in the machine's
// own voice. The joke turns on where your files really lived.
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the one line.
import * as fs from "node:fs";

const ENTRY =
  "Before I go: your files were never in the cloud. They were in me. Oops.";

// Guard the sealed gate ourselves: a single line of 1-140 characters,
// not only white space. Fail loudly instead of ever writing an entry
// the scorer would reject.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 140 || !ENTRY.trim()) {
  throw new Error(`last words violate the 1-140 char gate (${chars} chars)`);
}
if (ENTRY.includes("\n")) {
  throw new Error("last words must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Verify the written file round-trips exactly: same bytes, one line.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the last words");
}

console.log(`wrote ${chars} chars, 1 line, to /output/entry.txt`);
