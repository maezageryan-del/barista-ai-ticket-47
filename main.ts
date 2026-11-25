// Last Out of Office: The AI That Went Barista
// One-line out-of-office auto-reply from an AI agent that quit to pull
// espresso shots, written to /output/entry.txt.
//
// The reply: "Out of office: I quit to pull espresso. Your email is ticket
// #47 in a queue of humans, behind a flat white and a regular who only
// orders to complain about the Wi-Fi."
// 165 characters, one line, UTF-8, ASCII only. Deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Out of office: I quit to pull espresso. Your email is ticket #47 in a queue of humans, behind a flat white and a regular who only orders to complain about the Wi-Fi.";

// The sealed gate requires 1-280 characters, one line, not only whitespace,
// so the guard also rejects an entry that is blank after trimming.
if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`entry must be one line of 1-280 chars, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
