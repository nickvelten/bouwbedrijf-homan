#!/usr/bin/env node
/**
 * Compress all images in public/ in-place.
 *  - JPEG/PNG → re-encoded JPEG, max 1920px wide, mozjpeg q=78
 *  - skips files already smaller than 350 KB
 *  - keeps SVG/GIF/AVIF/WEBP untouched
 *
 * Run:  node scripts/compress-public-images.mjs
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public");
const MAX_WIDTH = 1920;
const SKIP_BYTES = 350 * 1024;

let touched = 0;
let savedBytes = 0;
let skipped = 0;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(p);
      continue;
    }
    const ext = path.extname(p).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const stat = await fs.stat(p);
    if (stat.size < SKIP_BYTES) {
      skipped++;
      continue;
    }

    try {
      const input = await fs.readFile(p);
      const img = sharp(input, { failOn: "none" });
      const meta = await img.metadata();
      const resize =
        meta.width && meta.width > MAX_WIDTH ? { width: MAX_WIDTH } : undefined;

      const buf = await sharp(input, { failOn: "none" })
        .rotate()
        .resize(resize)
        .jpeg({ quality: 78, mozjpeg: true })
        .toBuffer();

      // If we'd actually grow the file, leave it alone
      if (buf.length >= stat.size) {
        skipped++;
        continue;
      }

      // Rewrite in place. Convert .png -> .jpg only if no callers rely on the .png path
      // (we keep extension as-is to avoid breaking <Image src="..."> references).
      await fs.writeFile(p, buf);
      const saved = stat.size - buf.length;
      savedBytes += saved;
      touched++;
      console.log(
        `${path.relative(ROOT, p)}  ${(stat.size / 1024).toFixed(0)}KB → ${(buf.length / 1024).toFixed(0)}KB`,
      );
    } catch (err) {
      console.warn(`! skip ${p}: ${err.message}`);
      skipped++;
    }
  }
}

await walk(ROOT);

console.log(
  `\nDone. Touched ${touched} files, skipped ${skipped}. Saved ${(
    savedBytes /
    1024 /
    1024
  ).toFixed(1)} MB.`,
);
