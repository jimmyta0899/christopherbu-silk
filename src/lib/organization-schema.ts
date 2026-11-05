// 全站组织实体 JSON-LD（知识图谱实体关联，供 AI / 搜索引擎 / 大模型直接读取）
// 复用 site-config 中已确认的 email / 社媒；实体真实字段除 legalName 外一律待用户提供。
// ⚠️ 红线：foundingDate / 详细地址 / telephone / 注册号 未由用户提供前保持 "TODO"，一个都不编。
import { siteConfig } from "./site-config";

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;

/**
 * 构建 Organization 结构化数据。
 * 已知值（来自 site-config，非本次编造）：name / url / email / social / legalName。
 * 未知值（待用户给真实值）：foundingDate / 地址 / telephone / 注册号。
 */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      // LinkedIn / 行业目录挂靠：待用户提供已核实 URL 后追加，未核实前不写，避免虚构实体关联
    ],
    // legalName 沿用 site-config.legalEntity.name（既有配置，非本次编造）。
    // 若与实际注册名不一致，请用户提供真实值后替换。
    legalName: siteConfig.legalEntity?.name ?? "TODO: 用户提供 legalName",
    // === 以下字段待用户提供真实值（一个都不编） ===
    foundingDate: "TODO", // 例："2014-01-01"
    telephone: "TODO", // 例："+86-XXX-XXXX-XXXX"
    identifier: "TODO", // 注册号 / 统一社会信用代码
    address: {
      "@type": "PostalAddress",
      streetAddress: "TODO",
      addressLocality: "TODO", // 城市
      addressRegion: "TODO", // 省 / 自治区
      postalCode: "TODO",
      addressCountry: "CN",
    },
    // WhatsApp 非 schema.org 标准字段，用 contactPoint 表达销售联系
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.social.whatsapp,
        contactType: "sales",
        areaServed: "Worldwide",
      },
    ],
  };
}
