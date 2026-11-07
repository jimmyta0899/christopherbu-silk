// Hub 页共用工具：FAQ / Breadcrumb / ItemList 的 JSON-LD 生成
// 5 个 hub（/silk-fabrics、/yizhou-raw-silk、/silk-momme-guide、
// /wholesale-silk-fabric、/silk-fabric-price-guide）共用同一套结构化数据口径，
// 避免每页各写一份、字段漂移。
//
// 注意：站点开启 trailingSlash: true，JSON-LD 里的绝对 URL 一律带尾斜杠，
// 否则会与 canonical 不一致（GSC 会当成两个 URL）。

import { siteConfig } from "./site-config";

export type HubFaq = { q: string; a: string };

export type Crumb = { name: string; path: string };

/** 统一拼接绝对 URL（path 为空表示首页）。 */
export function absUrl(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean === "" ? `${siteConfig.url}/` : `${siteConfig.url}/${clean}/`;
}

/** FAQPage 结构化数据。传空数组时调用方应跳过渲染，不要输出空 mainEntity。 */
export function faqJsonLd(faqs: HubFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** BreadcrumbList 结构化数据。 */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  };
}

/**
 * ItemList：用于 hub 页把「下辖的织物/产品/指南」声明成有序集合。
 * 目的不是富媒体摘要（Google 已弱化 ItemList 展示），而是让爬虫明确
 * hub → 子页的从属关系，配合正文列表块加速子页发现。
 */
export function itemListJsonLd(
  name: string,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absUrl(it.path),
    })),
  };
}

/**
 * Article：hub 页的署名与责任归属。
 * 用 Article 而不是 BlogPosting，因为这些页是参考指南、不是时效性博文；
 * author 指到品牌主理人，publisher 指到公司，二者都是可追责的实体。
 */
export function articleJsonLd({
  path,
  headline,
  description,
  image,
  datePublished,
  dateModified,
}: {
  path: string;
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": absUrl(path) },
    ...(image ? { image: `${siteConfig.url}${image}` } : {}),
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: "Christopher Bu",
      url: absUrl("/about"),
      jobTitle: "Founder and creative director",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: absUrl(""),
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand-wordmark.png`,
      },
    },
  };
}
