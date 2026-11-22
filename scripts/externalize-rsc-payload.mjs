// 把静态 HTML 内联的 React Server Components flight payload 外置成独立 .js 文件。
//
// 背景：Next 16 + turbopack 的静态导出会把整页组件树序列化成
//   <script>self.__next_f.push([1,"...10 万字符的正文副本..."])</script>
// 直接内联在 HTML 尾部。首页 176KB 里有 118KB 是这段重复数据：浏览器渲染后
// 正文只有 11KB，但 AI 抓取 / 文本提取器拿到的是整份 HTML，会把这段 JSON
// 字符串当作正文的一部分吞进去 —— token 翻倍、解析超时，是 ChatGPT 浏览
// 工具对本站报 "Internal Error" 的站点侧诱因。
//
// 做法：把每页所有 self.__next_f.push(...) 脚本块原样合并写入同目录的
//   rsc-payload.js，用 <script src="./rsc-payload.js"></script> 取代。
// 外置后 HTML 只剩 11KB 正文 + 结构化数据，抓取层读到的是干净页面；
// 浏览器仍按顺序加载同一份 payload，hydration 与交互逻辑一字不改。
// flight payload 是分页的（每页内容不同），因此每页各写一个独立 js。
import fs from "fs";
import path from "path";

const ROOT = path.resolve("out");

// payload 文件名按 HTML 文件名派生（index.html → index.rsc.js）。
// 同一目录下可能有多个 HTML（out/ 根目录就有 index.html 与 404.html），
// 固定名会互相覆盖，派生名天然隔离。
function payloadNameFor(htmlFile) {
  const base = path.basename(htmlFile, ".html");
  return `${base}.rsc.js`;
}

// 匹配任意 <script>...</script>，其 body 含 self.__next_f.push
const SCRIPT_RE = /<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi;

function collectHtml(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectHtml(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

if (!fs.existsSync(ROOT)) {
  console.log("externalize-rsc: out/ not found, nothing to do");
  process.exit(0);
}

let pages = 0;
let blocksMoved = 0;
let bytesSaved = 0;

for (const file of collectHtml(ROOT)) {
  const html = fs.readFileSync(file, "utf8");
  const bodies = [];
  let touched = false;

  const rewritten = html.replace(SCRIPT_RE, (whole, body) => {
    if (!body.includes("self.__next_f.push")) return whole;
    bodies.push(body.trim());
    touched = true;
    return ""; // 先移除，最后统一插入一个外置引用
  });

  if (!touched || bodies.length === 0) continue;

  // 合并所有 push 调用，保持原始顺序。片段之间用换行分隔，JS 语义等价。
  const outName = payloadNameFor(file);
  const payload = bodies.join("\n") + "\n";
  const jsPath = path.join(path.dirname(file), outName);
  fs.writeFileSync(jsPath, payload, "utf8");

  // 在原先最后一段 flight 脚本的位置插入外置引用。简单起见追加到 </body> 前，
  // 保证在所有 chunk <script async> 之后、文档结束前执行，与原顺序一致。
  const rel = "./" + outName;
  const tag = `<script src="${rel}"></script>`;
  let final = rewritten;
  if (/<\/body>/i.test(final)) {
    final = final.replace(/<\/body>/i, `${tag}</body>`);
  } else {
    final = final + tag;
  }

  const before = Buffer.byteLength(html, "utf8");
  const after = Buffer.byteLength(final, "utf8");
  bytesSaved += before - after;
  fs.writeFileSync(file, final, "utf8");
  pages += 1;
  blocksMoved += bodies.length;
}

console.log(
  `externalize-rsc: ${pages} pages, ${blocksMoved} blocks moved, ~${(bytesSaved / 1024).toFixed(0)} KB removed from inline HTML`
);
