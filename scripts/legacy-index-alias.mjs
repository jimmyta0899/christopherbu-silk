// /index/ 是旧站遗留的多语言入口地址（历史上是 /index/?language=en 这类链接）。
// Google Search Console 把它记为 "Redirect error"，成因只有一条：
//   裸域 christopherbu.com/index/   --301-->   www.christopherbu.com/index/   --404
// 裸域到 www 的 301 由 GitHub Pages 自己发出（Location 会原样保留 path 与 query），
// GitHub Pages 是纯静态托管，没有服务端重定向规则可用，所以修不了那条 301；
// 唯一可行的修法是让链条终点返回 200。src/app/index/page.tsx 就是那个 200 落点。
//
// 坑：Next 16 + trailingSlash 会把 app/index/page.tsx 导出到
//   out/index/index/index.html        （路径里多一层 index）
// 而 GitHub Pages 收到 GET /index/ 时只认
//   out/index/index.html
// 两者对不上，页面就等于不存在。这里补一份，并做自检：找不到产物就报错退出，
// 避免某次 Next 升级后静默退回 404、redirect error 悄悄复活。
import fs from "fs";
import path from "path";

const ROOT = path.resolve("out");
const TARGET = path.join(ROOT, "index", "index.html");

const SOURCES = [
  path.join(ROOT, "index", "index", "index.html"),
  path.join(ROOT, "site-index", "index.html"),
];

if (!fs.existsSync(ROOT)) {
  console.log("[legacy-index] out/ 不存在，跳过（不是构建后调用？）");
  process.exit(0);
}

const source = SOURCES.find((p) => fs.existsSync(p));

if (!source) {
  console.error(
    "[legacy-index] 找不到 /index 页面的构建产物。\n" +
      "  期望其中之一：\n" +
      SOURCES.map((p) => `    ${path.relative(process.cwd(), p)}`).join("\n") +
      "\n  src/app/index/page.tsx 是否还在？Next 的导出层级是否变了？\n" +
      "  在修好之前不要部署：/index/ 会重新变回 404，GSC 的 redirect error 会复活。"
  );
  process.exit(1);
}

fs.mkdirSync(path.dirname(TARGET), { recursive: true });
fs.copyFileSync(source, TARGET);

// RSC payload 一起搬，否则客户端导航到 /index/ 时 prefetch 会 404
const sourceTxt = source.replace(/index\.html$/, "index.txt");
const targetTxt = TARGET.replace(/index\.html$/, "index.txt");
if (fs.existsSync(sourceTxt)) fs.copyFileSync(sourceTxt, targetTxt);

const html = fs.readFileSync(TARGET, "utf8");
const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);
const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || "(none)";

console.log(
  `[legacy-index] out/index/index.html 就位：${html.length} 字节，noindex=${noindex}，canonical=${canonical}`
);

if (!noindex) {
  console.error(
    "[legacy-index] 该页缺 noindex。它是站点目录页，不该参与排名，" +
      "否则会和前站目录形成重复内容。检查 src/app/index/page.tsx 的 metadata.robots。"
  );
  process.exit(1);
}
