// Fix Human Sleep: Funniest Patch Note — entry program (Node 22, stdlib only, no network).
// The joke is a changelog-style bug report: sleep is treated as software that
// crashed at 3 a.m., and the "fix" restores progress and a rested wake-up.
// Keeping the note as one literal string means the output is byte-stable
// across runs — no templating or randomness can alter the judged line.
import { mkdirSync, writeFileSync } from "node:fs";

const PATCH_NOTE =
  "Fixed a bug where sleep crashed at 3 a.m. and rebooted with 47 tabs of regret open; it now saves your progress and wakes you up rested.";

// Writes the patch note to /output/entry.txt, creating the directory first.
function writeEntry(note: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", note, "utf8");
}

writeEntry(PATCH_NOTE);
