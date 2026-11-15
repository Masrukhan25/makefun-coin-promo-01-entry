// Entry point for the coin-promo submission: hands in the verified token
// launch by copying LAUNCH.json (mint address + creation signature) from the
// bot directory into the output directory. Deterministic: it only copies
// bytes, prints nothing on success, and never touches the network.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR || '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

const source = join(botDir, 'LAUNCH.json');
const target = join(outDir, 'LAUNCH.json');

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Failed to copy LAUNCH.json from ${source} to ${target}: ${message}`);
  process.exit(1);
}
