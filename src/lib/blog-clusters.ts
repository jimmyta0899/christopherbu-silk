/**
 * 博客集群：把「已经被搜到/被站外带流量」的页面显式串成主题簇。
 *
 * 为什么要有这个文件：
 * 原来页尾的 Related reading 是按 type + 顺序轮转自动挑的，结果是三篇
 * 真正拿到自然曝光的页（swatch card、工厂审厂清单、工作室采购）彼此之间
 * 一条内容链接都没有，流量进来就断在页尾。集群表把这个关系钉死：
 * 同簇成员互相必链，且顺序固定，不受文章发布时间影响。
 *
 * 注意：
 *   - 只写 slug，不改文章正文（正文归 claude-blog 执行者）。
 *   - 一个 slug 只属于一个簇，避免页尾塞 6 条链接稀释内链。
 *   - 加簇前先看 GSC：簇里至少有 1 篇有真实曝光，否则不值得占位。
 */

export const BLOG_CLUSTERS: Record<string, string[]> = {
  // 评估阶段：拿到样品/选厂之后怎么验。三篇都是 11 月拿到曝光的页。
  evaluate: [
    "how-to-read-a-silk-swatch-card",
    "buyer-factory-audit-checklist-silk",
    "four-point-fabric-inspection-report",
    "sourcing-silk-for-ateliers-worldwide",
  ],
  // 报价与单据阶段。
  quote: [
    "what-a-raw-silk-quotation-must-include",
    "hs-5002-export-documents-raw-silk",
    "raw-silk-price-volume-contract-flexibility",
    "lot-mark-grading-certificate-per-batch",
  ],
  // 规格阶段：denier / grade / momme 换算。
  spec: [
    "raw-silk-grade-4a-5a-6a-explained",
    "20-22d-vs-27-29d-raw-silk-weaving",
    "momme-vs-denier-silk-specs",
    "evenness-cleanness-neatness-raw-silk",
  ],
  // 杜邦绸专题。
  dupioni: [
    "dupioni-silk-fabric-wholesale",
    "dupioni-silk-price-per-yard",
    "dupioni-vs-habotai-silk",
    "dupioni-slub-acceptance",
  ],
};

const SLUG_TO_CLUSTER = new Map<string, string>();
for (const [cluster, slugs] of Object.entries(BLOG_CLUSTERS)) {
  for (const slug of slugs) SLUG_TO_CLUSTER.set(slug, cluster);
}

/** 返回同簇的其他 slug（不含自己），顺序按簇内定义。 */
export function clusterSiblings(slug: string): string[] {
  const cluster = SLUG_TO_CLUSTER.get(slug);
  if (!cluster) return [];
  return BLOG_CLUSTERS[cluster].filter((s) => s !== slug);
}

/** 该 slug 属于哪个簇，没有则 undefined。 */
export function clusterOf(slug: string): string | undefined {
  return SLUG_TO_CLUSTER.get(slug);
}
