import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog";
import { rtwSeasons } from "@/lib/rtw";

export const dynamic = "force-static";

/**
 * 内容基线日期：只在页面实质内容更新时手动上调。
 * 用 new Date() 当 lastmod 会让每一页都拿到构建时间，Google 会判定该字段
 * 不可信并整体忽略——等于白给。
 */
const CONTENT_UPDATED = new Date("2026-11-07");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  /**
   * 站点开着 trailingSlash（next.config），线上真实 URL 一律以 / 结尾：
   *   /samples  -> 301 -> /samples/
   * sitemap 里如果写不带斜杠的地址，Google 抓到的是 301，全部归为
   * "Page with redirect"，等于白交一份地图。所以这里统一补斜杠。
   */
  const abs = (path: string) => (path === "" ? `${base}/` : `${base}${path}/`);

  const staticRoutes: {
    path: string;
    priority: number;
    freq: "weekly" | "monthly" | "yearly";
  }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/products", priority: 0.9, freq: "monthly" },
    { path: "/raw-silk-specs", priority: 0.9, freq: "monthly" },
    { path: "/samples", priority: 0.8, freq: "monthly" },
    { path: "/services", priority: 0.8, freq: "monthly" },
    { path: "/couture", priority: 0.8, freq: "monthly" },
    { path: "/trade-terms", priority: 0.7, freq: "monthly" },
    { path: "/about", priority: 0.7, freq: "monthly" },
    { path: "/sustainability", priority: 0.7, freq: "monthly" },
    { path: "/certificates", priority: 0.7, freq: "monthly" },
    { path: "/faq", priority: 0.7, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/contact", priority: 0.6, freq: "monthly" },
    { path: "/rtw", priority: 0.5, freq: "yearly" },
  ];

  const staticEntries = staticRoutes.map((r) => ({
    url: abs(r.path),
    lastModified: CONTENT_UPDATED,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const productRoutes = products.map((p) => ({
    url: abs(`/products/${p.slug}`),
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: p.featured ? 0.9 : 0.6,
  }));

  // 每个系列页都是「高定屋」的证据链，不要漏在 sitemap 之外
  const rtwRoutes = rtwSeasons.map((s) => ({
    url: abs(`/rtw/${s.slug}`),
    lastModified: CONTENT_UPDATED,
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: abs(`/blog/${post.slug}`),
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...productRoutes, ...blogRoutes, ...rtwRoutes];
}
