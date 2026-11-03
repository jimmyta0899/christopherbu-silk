// 首页 Press 板块：精选明星/产地相关博客摘要
// 四格对应四篇博客，展示 title + summary + 预览图，点击进入博客详情
// 顺序（用户指定）：① 宜州产地篇 → ② Paz Vega 手绣篇 → ③ 紫禁城提花篇 → ④ 双宫丝范冰冰篇

import { blogPosts } from "@/lib/blog";

export type PressItem = {
  slug: string; // 博客 slug
  title: string; // 博客标题
  summary: string; // 博客摘要（metaDescription）
  type: string; // 博客分类标签
  publishDate: string; // 发布日期
  image: string; // 预览图路径（相对 public，不带 /christopherbu-silk 前缀）
  imageAlt: string; // 预览图 alt
};

// 四个格子对应的博客 slug + 预览图（按展示顺序）
const pressSlugs: { slug: string; image: string; imageAlt: string }[] = [
  {
    slug: "yizhou-mulberry-silk-longevity-to-world",
    image: "yizhou-riverside-dawn.webp",
    imageAlt:
      "The Xiajian River valley in Yizhou at dawn, the mulberry silk growing region",
  },
  {
    slug: "paz-vega-hand-embroidered-silk-oscars",
    image: "paz-vega-oscars-rcfa.webp",
    imageAlt:
      "Paz Vega in the Christopher Bu Snow Plum Blossom gown on the 2018 Oscars red carpet",
  },
  {
    slug: "forbidden-city-silk-jacquard-fan-bingbing",
    image: "fan-bingbing-forbidden-city-cape.webp",
    imageAlt:
      "Fan Bingbing in the Christopher Bu Forbidden City jacquard cape at the 2015 Met Gala",
  },
  {
    slug: "christopher-bu-couture-house-profile",
    image: "fan-bingbing-met-gala-illustration.webp",
    imageAlt:
      "Fan Bingbing in a gold sequin gown with silk jacquard cape by Christopher Bu at the 2015 Met Gala",
  },
];

export const pressItems: PressItem[] = pressSlugs
  .map(({ slug, image, imageAlt }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return null;
    return {
      slug: post.slug,
      title: post.title,
      summary: post.metaDescription,
      type: post.type,
      publishDate: post.publishDate,
      image,
      imageAlt,
    };
  })
  .filter((item): item is PressItem => item !== null);
