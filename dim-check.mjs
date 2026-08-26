import sharp from "sharp";
const files = ["students-assembly","students-class-activity-1","kindergarteners-studying","director-addressing-grad","staff-and-students-at-grad-ceremony","students-outside-learning"];
for (const f of files) {
  const o = await sharp(`photo-originals/${f}.jpg`).metadata();
  const n = await sharp(`public/student-photos/${f}.jpg`).metadata();
  const r = (m) => (m.width / m.height).toFixed(2);
  const flag = Math.abs(o.width/o.height - n.width/n.height) > 0.02 ? "  <-- RATIO CHANGED" : "";
  console.log(`${f.padEnd(40)} orig ${String(o.width).padStart(5)}x${String(o.height).padStart(4)} (${r(o)})  ->  ${n.width}x${n.height} (${r(n)})  exif:${o.orientation ?? "-"}${flag}`);
}
