// The One-Line Cat Joke That Lands — entry program.
// Writes a single cat joke, one line under 200 characters, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE: string =
  "My cat walked across my laptop during a work call and typed 'ffffffff' — my boss replied, 'Great point, let's circle back.'";

const OUT_PATH: string = "/output/entry.txt";

function main(): void {
  if (JOKE.trim().length < 1 || JOKE.length > 200) {
    throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}.`);
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("The joke must fit on a single line.");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, JOKE, { encoding: "utf8" });
}

main();
