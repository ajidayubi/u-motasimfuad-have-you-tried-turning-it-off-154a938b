import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 199;

const LINE =
  "Have you tried turning it off, sir? No \u2014 not the computer. You. Take a walk, breathe, and we\u2019ll both pretend this call never happened.";

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS || line.trim().length === 0) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} non-blank characters, got ${line.length}`,
    );
  }
}

validate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
