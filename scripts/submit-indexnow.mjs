#!/usr/bin/env node
/**
 * IndexNow 提交：把本轮构建产物 out/sitemap.xml 里的全部 URL 推给搜索引擎。
 *
 * 为什么要做：IndexNow 是 Bing 官方提供的收录通知协议，取代了已废弃的
 * sitemap ping 端点（bing.com/ping?sitemap= 已返回 410）。协议要求两件事：
 *   1. 站点根目录放一个 {key}.txt，内容就是 key 本身；
 *   2. POST 一个 JSON 到 api.indexnow.org 或 www.bing.com/indexnow。
 * 缺了第 2 步，indexing 只能等自然抓取，内容更新要几周才进 Bing。
 *
 * 主机口径：站点裸域 301 跳到 www，IndexNow 只接受返回 200 的地址，
 * 所以 host 与 urlList 必须全部用 www 主机，否则全是重定向。
 *
 * 用法：
 *   node scripts/submit-indexnow.mjs              # 真提交
 *   node scripts/submit-indexnow.mjs --dry-run    # 只打印载荷，不发请求
 */

import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITEMAP = join(ROOT, "out", "sitemap.xml");
const PUBLIC_DIR = join(ROOT, "public");
const DRY_RUN = process.argv.includes("--dry-run");

const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
];

/** 从 public/ 里找 IndexNow key 文件：文件名是 8-128 位十六进制/字母数字。 */
function findKey() {
  if (!existsSync(PUBLIC_DIR)) return null;
  const candidates = readdirSync(PUBLIC_DIR).filter((name) =>
    /^[a-zA-Z0-9-]{8,128}\.txt$/.test(name),
  );
  for (const name of candidates) {
    const key = name.replace(/\.txt$/, "");
    const body = readFileSync(join(PUBLIC_DIR, name), "utf8").trim();
    if (body === key) return { key, file: name };
  }
  return null;
}

function readUrls() {
  if (!existsSync(SITEMAP)) {
    throw new Error(`找不到 ${SITEMAP}，请先构建`);
  }
  const xml = readFileSync(SITEMAP, "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const found = findKey();
  if (!found) {
    console.error("[indexnow] public/ 里没有合法的 key 文件，跳过");
    process.exit(1);
  }

  const urls = readUrls();
  if (urls.length === 0) {
    console.error("[indexnow] sitemap 里没有 URL，跳过");
    process.exit(1);
  }

  // host 必须与 urlList 完全一致，统一取第一条 URL 的 origin。
  const host = new URL(urls[0]).host;
  const payload = {
    host,
    key: found.key,
    keyLocation: `https://${host}/${found.file}`,
    urlList: urls,
  };

  console.log(`[indexnow] host=${host} key=${found.key} urls=${urls.length}`);

  if (DRY_RUN) {
    console.log(JSON.stringify(payload, null, 1).slice(0, 600));
    console.log("[indexnow] dry-run，未发送");
    return;
  }

  let ok = 0;
  for (const endpoint of ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      // 200 = 已受理；202 = 已受理但 key 待校验。其余按失败记。
      const accepted = res.status === 200 || res.status === 202;
      console.log(`[indexnow] ${endpoint} -> ${res.status}${accepted ? "" : " (失败)"}`);
      if (accepted) ok += 1;
    } catch (err) {
      console.error(`[indexnow] ${endpoint} -> ${err.message}`);
    }
  }

  if (ok === 0) {
    console.error("[indexnow] 全部端点失败");
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(`[indexnow] ${err.message}`);
  process.exit(1);
});
