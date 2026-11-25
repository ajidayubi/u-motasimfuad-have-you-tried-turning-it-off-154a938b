import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Have you tried turning it off, sir? No \u2014 not the computer. You. Take a walk, breathe, and we\u2019ll both pretend this call never happened.";

if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-199 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
