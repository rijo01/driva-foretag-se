import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(process.cwd(), "public");
const svgPath = resolve(root, "favicon.svg");
const svg = readFileSync(svgPath);

async function renderPng(size) {
  return sharp(svg, { density: 384 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  pngBuffers.forEach(({ size, data }, i) => {
    const e = entries.subarray(i * 16, (i + 1) * 16);
    e.writeUInt8(size === 256 ? 0 : size, 0);
    e.writeUInt8(size === 256 ? 0 : size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
  });

  return Buffer.concat([header, entries, ...pngBuffers.map((p) => p.data)]);
}

const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map(async (size) => ({ size, data: await renderPng(size) }))
);
writeFileSync(resolve(root, "favicon.ico"), buildIco(pngs));
console.log("wrote favicon.ico");

const apple = await sharp(svg, { density: 768 })
  .resize(180, 180, { fit: "contain", background: { r: 12, g: 35, b: 64, alpha: 1 } })
  .png()
  .toBuffer();
writeFileSync(resolve(root, "apple-touch-icon.png"), apple);
console.log("wrote apple-touch-icon.png");

const icon192 = await renderPng(192);
writeFileSync(resolve(root, "icon-192.png"), icon192);
const icon512 = await renderPng(512);
writeFileSync(resolve(root, "icon-512.png"), icon512);
console.log("wrote icon-192.png and icon-512.png");

const logoSvg = readFileSync(resolve(root, "logo.svg"));
const logoPng = await sharp(logoSvg, { density: 768 })
  .resize(640, 160, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png()
  .toBuffer();
writeFileSync(resolve(root, "logo.png"), logoPng);
console.log("wrote logo.png");
