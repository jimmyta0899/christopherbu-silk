#!/usr/bin/env node
/**
 * 生成 src/lib/image-dims.json —— 每个 public 图片的真实像素尺寸。
 *
 * 为什么要这一步：
 *   blog/[slug]/page.tsx 里的 <img> 只有 src/alt/class，没有 width/height，
 *   浏览器在图片下载完之前不知道该留多高，正文图片会把下面的内容顶下去（CLS）。
 *   md 里手写的 width="1200" height="800" 与实际文件不符（真实多为 240x360、
 *   720x1080），所以不能直接信 md，必须读文件本身的尺寸。
 *
 * 读取方式为纯 Node，不装任何依赖：
 *   PNG  → IHDR
 *   JPEG → SOFn 段
 *   WebP → VP8X / VP8 / VP8L
 *
 * 用法：node scripts/gen-image-dims.mjs
 */
import fs from "node:fs";
import path from "node:path";

const PUBLIC = "public";
const OUT = "src/lib/image-dims.json";

function pngSize(buf) {
  if (buf.length < 24) return null;
  // IHDR 宽高紧跟 8 字节签名 + 4 字节长度 + 4 字节类型
  return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
}

function jpegSize(buf) {
  let i = 2;
  while (i < buf.length - 1) {
    if (buf[i] !== 0xff) {
      i += 1;
      continue;
    }
    const marker = buf[i + 1];
    // SOF0..SOF15，排除 DHT(C4) DNL(C8) DAC(CC)
    if (
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc
    ) {
      return [buf.readUInt16BE(i + 7), buf.readUInt16BE(i + 5)];
    }
    if (marker === 0xd8 || marker === 0xd9) {
      i += 2;
      continue;
    }
    if (marker >= 0xd0 && marker <= 0xd7) {
      i += 2;
      continue;
    }
    const len = buf.readUInt16BE(i + 2);
    i += 2 + len;
  }
  return null;
}

function webpSize(buf) {
  const tag = buf.toString("ascii", 12, 16);
  if (tag === "VP8 ") {
    return [
      buf.readUInt16LE(26) & 0x3fff,
      buf.readUInt16LE(28) & 0x3fff,
    ];
  }
  if (tag === "VP8L") {
    const b = buf.readUInt32LE(21);
    return [(b & 0x3fff) + 1, ((b >> 14) & 0x3fff) + 1];
  }
  if (tag === "VP8X") {
    const w = buf.readUIntLE(24, 3) + 1;
    const h = buf.readUIntLE(27, 3) + 1;
    return [w, h];
  }
  return null;
}

function dims(file) {
  const buf = fs.readFileSync(file);
  const ext = path.extname(file).toLowerCase();
  if (ext === ".png") return pngSize(buf);
  if (ext === ".jpg" || ext === ".jpeg") return jpegSize(buf);
  if (ext === ".webp") return webpSize(buf);
  return null;
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(png|jpe?g|webp)$/i.test(e.name)) out.push(p);
  }
  return out;
}

const map = {};
let ok = 0;
const failed = [];
for (const file of walk(PUBLIC)) {
  const url = "/" + path.relative(PUBLIC, file).split(path.sep).join("/");
  const d = dims(file);
  if (d && d[0] > 0 && d[1] > 0) {
    map[url] = d;
    ok += 1;
  } else {
    failed.push(url);
  }
}

fs.writeFileSync(OUT, JSON.stringify(map, null, 0) + "\n");
console.log(`写入 ${OUT}: ${ok} 张，失败 ${failed.length} 张`);
if (failed.length) console.log("失败列表:", failed.slice(0, 10));
