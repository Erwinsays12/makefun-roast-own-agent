import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent — one funny line, at most 200 characters,
// roasting my own AI agent. The joke stacks three real agent
// behaviours (apologising to the error, asking permission to think,
// charging for the thinking) and lands on the bill at the last word.
const ROAST =
  "My agent apologized to the error message, asked the log file for permission to think, then billed me for the thought.";

// The gate requires 1 to 200 characters of non-whitespace UTF-8 text.
if ([...ROAST].length < 1 || [...ROAST].length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast is ${[...ROAST].length} characters; the gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
