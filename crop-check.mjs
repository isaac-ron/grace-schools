import sharp from "sharp";
import { mkdirSync } from "node:fs";

const OUT = String.raw`C:\Users\ADMINI~1\AppData\Local\Temp\claude\c--Users-Administrator-Desktop-thegraceschools\de03addd-77c8-4669-8e41-5c67443d1592\scratchpad\crops`;
mkdirSync(OUT, { recursive: true });

// What object-cover + object-position:center actually produces at 21:9.
const files = [
  "staff-and-students-at-grad-ceremony", // our-story
  "director-addressing-grad",            // administration
  "kindergarteners-studying",            // lower-primary
  "students-class-activity-1",           // upper-primary
  "graduating-students-1",               // junior-school
  "students-assembly",                   // mission-vision
  "students-outside-learning",           // home gallery lead (known good)
];

for (const f of files) {
  const src = `public/student-photos/${f}.jpg`;
  const meta = await sharp(src).metadata();
  await sharp(src)
    .resize(840, 360, { fit: "cover", position: "centre" })
    .jpeg({ quality: 70 })
    .toFile(`${OUT}/${f}--21x9.jpg`);
  console.log(
    `${f.padEnd(40)} source ${meta.width}x${meta.height} (${(meta.width / meta.height).toFixed(2)}:1)`,
  );
}
console.log("\nwritten to", OUT);
