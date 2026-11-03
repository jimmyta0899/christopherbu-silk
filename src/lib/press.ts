// 首页 Press 板块：精选明星/产地相关博客摘要
// 四格对应四篇博客，展示 title + summary，点击进入博客详情
// 顺序（用户指定）：① 宜州产地篇 → ② Paz Vega 手绣篇 → ③ 紫禁城提花篇 → ④ 双宫丝范冰冰篇

import { blogPosts } from "@/lib/blog";

export type PressItem = {
  slug: string; // 博客 slug
  title: string; // 博客标题
  summary: string; // 博客摘要（metaDescription）
  type: string; // 博客分类标签
  publishDate: string; // 发布日期
};

// 四个格子对应的博客 slug（按展示顺序）
const pressSlugs = [
  "yizhou-mulberry-silk-longevity-to-world",
  "paz-vega-hand-embroidered-silk-oscars",
  "forbidden-city-silk-jacquard-fan-bingbing",
  "christopher-bu-couture-house-profile",
];

export const pressItems: PressItem[] = pressSlugs
  .map((slug) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return null;
    return {
      slug: post.slug,
      title: post.title,
      summary: post.metaDescription,
      type: post.type,
      publishDate: post.publishDate,
    };
  })
  .filter((item): item is PressItem => item !== null);
