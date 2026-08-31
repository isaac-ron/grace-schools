/**
 * Icon pipeline.
 *
 * The favicon is the school crest itself, taken straight from `public/logo.jpg`
 * and reduced. Everything is derived from that one file, so re-running this
 * after the logo is ever replaced keeps the tab, the home screen and the
 * masthead showing the same artwork.
 *
 * Two things are done to the source before scaling:
 *
 *   - The tagline is cropped off. In the original it sits as its own band of
 *     ink at rows 1030-1070, well clear of the crest, and at 16px a line of
 *     type is indistinguishable from dirt. The crest keeps its own banner.
 *   - The crop is squared on the crest, because a favicon is square and letting
 *     the browser fit a 992x1235 portrait into one would letterbox the artwork
 *     down to roughly half the tab's height.
 *
 * Outputs:
 *
 *   src/app/favicon.ico     16 + 32 + 48, browser tabs and Windows
 *   src/app/icon.png        192, modern browsers and Android
 *   src/app/apple-icon.png  180, iOS home screen
 *
 * Run `npm run icons` after any change to the logo.
 */

import sharp from "sharp";
import { writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const APP = join(ROOT, "src", "app");
const LOGO = join(ROOT, "public", "logo.jpg");

// Crest bounds within logo.jpg, measured by scanning for bands of non-white
// pixels: rows 88-985, columns 46-908. Squared and given a little air so the
// shield does not touch the edge of the tile.
const CREST = { left: 17, top: 71, size: 930 };

/** The crest, squared and flattened onto white. JPEG has no alpha, and iOS
 *  composites a transparent icon onto black, so white is made explicit. */
const source = () =>
  sharp(LOGO)
    .extract({ left: CREST.left, top: CREST.top, width: CREST.size, height: CREST.size })
    .flatten({ background: "#ffffff" });

/**
 * Scaling a crest this detailed down to tab size loses definition no matter
 * what, so: lanczos3 to keep the edges as clean as the kernel allows, then a
 * light sharpen to hold the shield outline and the gold rules together. The
 * palette encoder is what keeps these files at a few hundred bytes rather than
 * a few kilobytes; the artwork is flat colour, so it costs nothing visually.
 */
const scaled = (size) =>
  source()
    .resize(size, size, { kernel: "lanczos3", fit: "fill" })
    .sharpen({ sigma: size <= 48 ? 0.6 : 0.4 });

const png = async (size) =>
  scaled(size).png({ palette: true, compressionLevel: 9, effort: 10 }).toBuffer();

/**
 * ICO members specifically must be RGBA. Next's image decoder rejects an ICO
 * built from palette PNGs outright ("The PNG is not in RGBA format!") and fails
 * the build, so these are encoded without the palette and with alpha forced on.
 * At 16-48px the difference is a few hundred bytes.
 */
const pngRgba = async (size) =>
  scaled(size).ensureAlpha().png({ palette: false, compressionLevel: 9 }).toBuffer();

/**
 * Pack PNGs into an ICO container. sharp has no .ico encoder, and PNG-compressed
 * ICO entries are understood by every browser in use and by Windows since Vista.
 */
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = icon
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + images.length * 16;
  const entries = [];

  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // 0 encodes 256
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(
  icoSizes.map(async (size) => ({ size, data: await pngRgba(size) })),
);

// A leftover icon.svg would be emitted alongside icon.png as a second <link>.
await rm(join(APP, "icon.svg"), { force: true });

const favicon = ico(icoImages);
const icon = await png(192);
const apple = await png(180);

await writeFile(join(APP, "favicon.ico"), favicon);
await writeFile(join(APP, "icon.png"), icon);
await writeFile(join(APP, "apple-icon.png"), apple);

const kb = (b) => (b.length / 1024).toFixed(1) + " KB";
console.log(`favicon.ico     ${icoSizes.join(" + ")}   ${kb(favicon)}`);
console.log(`icon.png        192        ${kb(icon)}`);
console.log(`apple-icon.png  180        ${kb(apple)}`);
