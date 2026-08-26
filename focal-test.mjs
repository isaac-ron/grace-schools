import sharp from "sharp";
import { mkdirSync } from "node:fs";

const OUT = String.raw`C:\Users\ADMINI~1\AppData\Local\Temp\claude\c--Users-Administrator-Desktop-thegraceschools\de03addd-77c8-4669-8e41-5c67443d1592\scratchpad\focal`;
mkdirSync(OUT, { recursive: true });

/** Emulates CSS object-fit:cover + object-position: {xPct} {yPct}. */
async function coverCrop(src, outW, outH, xPct, yPct, dest) {
  const { width: sw, height: sh } = await sharp(src).metadata();
  const scale = Math.max(outW / sw, outH / sh);
  const rw = Math.round(sw * scale);
  const rh = Math.round(sh * scale);
  await sharp(src)
    .resize(rw, rh)
    .extract({
      left: Math.round((rw - outW) * xPct),
      top: Math.round((rh - outH) * yPct),
      width: outW,
      height: outH,
    })
    .jpeg({ quality: 72 })
    .toFile(dest);
}

// Final desktop banner ratio: 12/5 = 2.4:1
const W = 960;
const H = 400;

const plan = [
  ["director-addressing-grad", 0.5, 0.2],
  ["staff-and-students-at-grad-ceremony", 0.5, 0.35],
  ["graduating-students-1", 0.5, 0.35],
  ["kindergarteners-studying", 0.5, 0.5],
  ["students-class-activity-1", 0.5, 0.5],
  ["students-assembly", 0.5, 0.5],
];

for (const [name, x, y] of plan) {
  await coverCrop(
    `public/student-photos/${name}.jpg`,
    W, H, x, y,
    `${OUT}/final-${name}.jpg`,
  );
  console.log(`${name.padEnd(40)} object-position ${x * 100}% ${y * 100}%`);
}
