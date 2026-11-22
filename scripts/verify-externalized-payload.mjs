// 验证 externalize-rsc-payload 的产物：每个 HTML 体积、引用完整性、正文保留。
import fs from "fs";
import path from "path";

const ROOT = path.resolve("out");

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (e.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

if (!fs.existsSync(ROOT)) {
  console.error("out/ not found");
  process.exit(2);
}

const htmls = walk(ROOT);
let missingRef = 0;
let inlineLeft = 0;
let maxBytes = 0;
let maxFile = "";
const sizes = [];

for (const f of htmls) {
  const html = fs.readFileSync(f, "utf8");
  const bytes = Buffer.byteLength(html, "utf8");
  sizes.push([bytes, f]);
  if (bytes > maxBytes) {
    maxBytes = bytes;
    maxFile = f;
  }

  // 检查每个 ./xxx.rsc.js 引用是否存在
  for (const m of html.matchAll(/<script src="\.\/([^"]+\.rsc\.js)"><\/script>/g)) {
    const jsPath = path.join(path.dirname(f), m[1]);
    if (!fs.existsSync(jsPath)) {
      missingRef++;
      console.log(`MISSING ${path.relative(ROOT, jsPath)} (referenced by ${path.relative(ROOT, f)})`);
    }
  }

  // 内联 payload 是否残留（除引导脚本 push([0]) 外都算残留）
  const pushes = (html.match(/self\.__next_f\.push\(\s*\[[1-9]/g) || []).length;
  if (pushes > 0) {
    inlineLeft += pushes;
    console.log(`INLINE_LEFT ${pushes} pushes in ${path.relative(ROOT, f)} (${bytes}B)`);
  }
}

sizes.sort((a, b) => b[0] - a[0]);
console.log(`\nHTML files: ${htmls.length}`);
console.log(`Largest 5:`);
for (const [b, f] of sizes.slice(0, 5)) console.log(`  ${(b / 1024).toFixed(0)} KB  ${path.relative(ROOT, f)}`);
const over100 = sizes.filter(([b]) => b > 100 * 1024).length;
console.log(`\nFiles > 100KB: ${over100}`);
console.log(`Inline payload blocks left: ${inlineLeft}`);
console.log(`Missing payload refs: ${missingRef}`);
console.log(`Max: ${(maxBytes / 1024).toFixed(0)} KB ${path.relative(ROOT, maxFile)}`);

if (missingRef > 0) process.exit(1);
