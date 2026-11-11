#!/usr/bin/env node
/**
 * Copies the Pages Functions source into the static export before deployment.
 *
 * `next build` emits `out/` (static assets only); Cloudflare Pages expects the
 * functions to live inside the deployed directory as `out/functions/`. Wrangler
 * then compiles them at upload time. Kept as a script instead of a `public/`
 * copy so `out/` stays a pure build artifact.
 *
 * Usage: node scripts/sync-functions.mjs   (runs automatically in `npm run deploy`)
 */
import { cp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(projectRoot, 'functions');
const target = join(projectRoot, 'out', 'functions');

if (!existsSync(source)) {
  console.error('[sync-functions] No functions/ directory found — nothing to do.');
  process.exit(1);
}

await rm(target, { recursive: true, force: true });
await cp(source, target, { recursive: true });
console.log(`[sync-functions] Copied ${source} -> ${target}`);
