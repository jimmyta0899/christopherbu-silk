import type { Metadata } from "next";
import { siteConfig } from "./site-config";

/**
 * 全站共用的分享图。1200×630（1.91:1），符合 Meta / LinkedIn / WhatsApp 规格。
 * 换图必须使用新文件名：Meta 按图片 URL 缓存预览，同名替换不会更新。
 */
export const OG_IMAGE = {
  url: "/og-cover.png",
  width: 1200,
  height: 630,
  alt: "Christopher Bu — mulberry silk, greige, dupioni and jacquard fabrics",
} as const;

/**
 * 生成单页完整的 Open Graph 配置。
 *
 * 注意：Next.js 的 metadata 对 openGraph 是「对象级替换」而非逐字段合并 ——
 * 页面只要声明自己的 openGraph，父 layout 的 images / siteName / locale / type
 * 就会被整个丢弃，分享卡片会缺图。因此每个页面都必须经由此函数输出完整字段。
 * og:title / og:description 由 Next.js 自动取自各页的 title / description，
 * 这里刻意不重复声明，避免子页继承到首页的静态标题。
 */
export function pageOpenGraph(
  path: string,
  type: "website" | "article" = "website",
): NonNullable<Metadata["openGraph"]> {
  return {
    type,
    locale: "en_US",
    siteName: siteConfig.name,
    url: path,
    images: [OG_IMAGE],
  };
}

/** X / Twitter 卡片与 OG 共用同一张图，保证各平台预览一致。 */
export function pageTwitter(): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  };
}
