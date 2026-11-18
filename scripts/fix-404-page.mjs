#!/usr/bin/env node
/**
 * 修正 404 / not-found 产物的 head。
 *
 * 为什么需要构建后处理：
 * App Router 的 not-found.tsx 不支持导出 metadata（Next 官方限制），
 * 静态导出时 out/404.html 会继承根 layout 的 <title> 和 description，
 * 结果 404 页标题与首页完全相同（verify-release.py 会 FAIL 这一项）。
 * 另外 Next 会在 _not-found/index.html 里同时写 noindex 和 index,follow
 * 两条互相冲突的 robots，两个都会被爬虫读到。
 *
 * 这里只改 head，不动正文。正文的 "404 This page could not be found."
 * 由 app/not-found.tsx 正常渲染，无需干预。
 */
import fs from "node:fs";
import path from "node:path";

const OUT = "out";
const TITLE = "Page Not Found (404) | Christopher Bu";
const DESC =
  "This address does not exist. Browse the silk fabric guides, raw silk specs and the product range instead.";
const TARGETS = ["404.html", "404/index.html", "_not-found/index.html"];

let touched = 0;

for (const rel of TARGETS) {
  const file = path.join(OUT, rel);
  if (!fs.existsSync(file)) continue;
  let html = fs.readFileSync(file, "utf8");
  const before = html;

  // 1. title 只留一个，且必须是 404 专用标题
  if (/<title[^>]*>[\s\S]*?<\/title>/.test(html)) {
    let first = true;
    html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/g, () => {
      if (first) {
        first = false;
        return `<title>${TITLE}</title>`;
      }
      return "";
    });
  }

  // 2. description 换成 404 文案
  if (/<meta\s+name="description"[^>]*>/.test(html)) {
    html = html.replace(/<meta\s+name="description"[^>]*>/g, `<meta name="description" content="${DESC}"/>`);
  }

  // 3. robots：删掉 index,follow，保证恰好一条 noindex
  html = html.replace(/<meta\s+name="robots"\s+content="index,\s*follow"\s*\/?>\s*/gi, "");
  if (!/<meta\s+name="robots"\s+content="[^"]*noindex/.test(html)) {
    html = html.replace(/<\/head>/, `<meta name="robots" content="noindex, follow"/>\n</head>`);
  } else {
    // 统一成 noindex, follow
    html = html.replace(/<meta\s+name="robots"\s+content="[^"]*noindex[^"]*"\s*\/?>/gi,
      `<meta name="robots" content="noindex, follow"/>`);
  }

  // 4. 404 页不该声明 canonical（它不参与索引，指向首页会误导）
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>\s*/gi, "");

  if (html !== before) {
    fs.writeFileSync(file, html, "utf8");
    touched += 1;
    const robots = (html.match(/<meta\s+name="robots"[^>]*>/gi) || []).length;
    console.log(`[fix-404] ${rel}: title/robots 已修正（robots ${robots} 条）`);
  }
}

if (touched === 0) {
  console.log("[fix-404] 没有需要修改的文件（out/ 未构建？）");
} else {
  console.log(`[fix-404] 完成，共修改 ${touched} 个文件`);
}
