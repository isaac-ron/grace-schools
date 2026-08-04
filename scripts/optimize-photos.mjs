/**
 * Photo pipeline.
 *
 * `next.config.ts` sets `images.unoptimized: true` because this is a static
 * export on shared cPanel with no image server. That means whatever sits in
 * `public/` is exactly what a parent downloads. The originals were camera files
 * up to 26 MB each, roughly 300 MB in total, shipped as-is to families paying
 * for mobile data by the megabyte.
 *
 * So optimisation happens here, at build-prep time, instead:
 *
 *   originals ->  photo-originals/          (kept, never deployed)
 *   deployed  ->  public/student-photos/    (max 1800px, mozjpeg, stripped)
 *
 * Run `npm run photos` after adding new pictures. Safe to re-run: it always
 * rebuilds from the originals, so quality never degrades through repeat passes.
 */

import sharp from "sharp";
import { mkdir, readdir, rename, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ORIGINALS = "photo-originals";
const DEPLOYED = path.join("public", "student-photos");

const MAX_WIDTH = 1800;
const QUALITY = 76;

const isPhoto = (f) => /\.(jpe?g|png)$/i.test(f);
const mb = (n) => (n / 1024 / 1024).toFixed(1);

/** First run: move whatever is already in public/ out to the originals folder. */
async function migrateOriginals() {
  if (!existsSync(DEPLOYED)) return;
  await mkdir(ORIGINALS, { recursive: true });

  const existing = new Set(await readdir(ORIGINALS));
  const deployed = (await readdir(DEPLOYED)).filter(isPhoto);

  let moved = 0;
  for (const file of deployed) {
    if (existing.has(file)) continue;
    await rename(path.join(DEPLOYED, file), path.join(ORIGINALS, file));
    moved++;
  }
  if (moved) console.log(`Moved ${moved} original(s) to ${ORIGINALS}/\n`);
}

async function main() {
  await migrateOriginals();

  if (!existsSync(ORIGINALS)) {
    console.error(`No ${ORIGINALS}/ directory and nothing to migrate. Nothing to do.`);
    process.exit(1);
  }

  await mkdir(DEPLOYED, { recursive: true });

  const files = (await readdir(ORIGINALS)).filter(isPhoto).sort();
  if (!files.length) {
    console.error(`${ORIGINALS}/ is empty.`);
    process.exit(1);
  }

  let before = 0;
  let after = 0;

  for (const file of files) {
    const from = path.join(ORIGINALS, file);
    const to = path.join(DEPLOYED, file.replace(/\.png$/i, ".jpg"));

    const source = await stat(from);
    const buffer = await sharp(from)
      .rotate() // honour EXIF orientation before the metadata is stripped
      .resize(MAX_WIDTH, null, { withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();

    await writeFile(to, buffer);

    before += source.size;
    after += buffer.length;
    console.log(
      `${file.padEnd(46)} ${mb(source.size).padStart(6)} MB -> ${mb(buffer.length).padStart(5)} MB`,
    );
  }

  const saved = ((1 - after / before) * 100).toFixed(1);
  console.log(
    `\n${files.length} photos: ${mb(before)} MB -> ${mb(after)} MB (${saved}% smaller)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
