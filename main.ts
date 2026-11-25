// Entry for make.fun competition u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.
// Output is deterministic: every run writes the exact same single line.
// Blind rounds: nothing is scored at submit time; the entry simply waits until a round runs.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "'So... do you come to this shaft often?' 'I live here. We both live here. This conversation is my entire social life.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
