// Next 16 的静态导出把 RSC payload 写成目录结构：
//   out/products/__next.products/__PAGE__.txt
//   out/products/raw-silk/__next.products/$d$slug/__PAGE__.txt
// 但浏览器里的 App Router 按点号命名去预取：
//   /products/__next.products.__PAGE__.txt
//   /products/raw-silk/__next.products.$d$slug.__PAGE__.txt
// 两者对不上，于是每个页面在控制台留下 404（Lighthouse 的
// errors-in-console 因此不通过），预取也失效，站内跳转退化成整页请求。
//
// 这里按浏览器的命名补齐别名文件。产物是纯静态文件，别名只是同一份字节
// 的第二个路径，不改变页面行为，也不影响 sitemap 或链接结构。
import fs from "fs";
import path from "path";

const ROOT = path.resolve("out");

function collect(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith("__next.")) acc.push(full);
      collect(full, acc);
    }
  }
  return acc;
}

// 返回 [绝对路径, 相对该目录的点号名字] 列表
function leaves(dir, base = dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      leaves(full, base, acc);
    } else {
      const parts = path.relative(base, full).split(path.sep);
      acc.push([full, parts.join(".")]);
    }
  }
  return acc;
}

if (!fs.existsSync(ROOT)) {
  console.log("rsc-aliases: out/ not found, nothing to do");
  process.exit(0);
}

let created = 0;
for (const dir of collect(ROOT)) {
  const parent = path.dirname(dir);
  const stem = path.basename(dir);
  for (const [source, dotted] of leaves(dir)) {
    const target = path.join(parent, `${stem}.${dotted}`);
    if (fs.existsSync(target)) continue;
    fs.copyFileSync(source, target);
    created += 1;
  }
}

console.log(`rsc-aliases: wrote ${created} alias files`);
