import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { pageOpenGraph } from "@/lib/seo-metadata";

/**
 * 旧 URL 的迁移承接页（slug 与内容错配修复，2026-11-21）。
 *
 * 背景：从 2026-10-30 首次引入起，slug `christopher-bu-couture-house-profile`
 * 挂的就是双宫文章（Dupioni Silk in Practice），从来不是高定介绍页。URL 名与
 * 内容错配会误导读者与搜索引擎，因此把 slug 改为 `dupioni-silk-in-practice`。
 *
 * GitHub Pages 是纯静态托管，没有服务端 301 能力，沿用站内 /rtw/ 旧季节路径
 * 的成熟做法：0 秒 meta refresh + 指向新地址的 canonical + noindex,follow。
 *   - 0 秒 refresh：浏览器与 Google 都按跳转处理，旧链接不 404；
 *   - canonical：任何残余索引归并到新地址；
 *   - noindex,follow：本桩不参与排名，但权重继续传到新页面；
 *   - og:url 显式指向新地址，否则会继承根 layout 的 "/"。
 *
 * 本页不在 sitemap 静态路由表里，也不来自 blogPosts，sitemap 不会出现旧地址。
 */
const TARGET_PATH = "/blog/dupioni-silk-in-practice/";
const TARGET_URL = `${siteConfig.url}${TARGET_PATH}`;

export const metadata: Metadata = {
  title: "Article moved: Dupioni Silk in Practice",
  description: `This article now lives at ${TARGET_URL}`,
  alternates: { canonical: TARGET_URL },
  openGraph: pageOpenGraph(TARGET_PATH),
  robots: { index: false, follow: true },
};

export default function LegacyDupioniRedirect() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[70dvh] max-w-2xl flex-col items-center justify-center px-6 text-center"
    >
      <meta httpEquiv="refresh" content={`0; url=${TARGET_PATH}`} />
      <h1 className="font-display text-2xl font-medium text-jade-deep md:text-3xl">
        This article has moved
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
        The dupioni silk article previously at this address now lives at{" "}
        <a href={TARGET_PATH} className="underline underline-offset-2 hover:text-gold">
          {TARGET_PATH}
        </a>
        .
      </p>
      <a
        href={TARGET_PATH}
        className="mt-7 rounded-full bg-jade px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-jade-deep"
      >
        Read the article
      </a>
    </main>
  );
}
