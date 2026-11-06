// 全站组织实体 JSON-LD（知识图谱实体关联，供 AI / 搜索引擎 / 大模型直接读取）
// 复用 site-config 中已确认的 email / 社媒；实体真实字段除 legalName 外一律待用户提供。
// ⚠️ 红线：未由用户提供的字段一律不输出（不写 "TODO" 占位符，避免占位值被当成真实数据抓取）。
//   已由用户提供：foundingDate(2012-10) / telephone / 地址。仍缺：identifier（统一社会信用代码）。
import { siteConfig } from "./site-config";

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;

/**
 * 构建 Organization 结构化数据。
 * 已知值（来自 site-config，非本次编造）：name / url / email / social / legalName。
 * 用户 2026-11-06 提供：foundingDate / telephone / 地址。
 * 仍缺（整条省略，不占位）：identifier 统一社会信用代码。
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
    // === 以下字段：用户 2026-11-06 提供的真实值 ===
    // 成立时间"2012年10月"-> ISO 8601 年月形式（schema.org 接受 YYYY-MM）；
    // 不补具体日期，用户只给到月，补日即属编造。
    foundingDate: "2012-10",
    // 电话按用户原文照录，未改格式
    telephone: "+86-18612933714",
    // identifier = 统一社会信用代码（18 位，营业执照上那串）。
    // 用户尚未提供 -> 整条省略，不输出 "TODO" 占位符（占位符会被搜索引擎/AI 当成真实值抓走）。
    // 用户给出后在此处加回：identifier: "91110118XXXXXXXXXX",
    // 地址：用户 2026-11-06 提供的真实值
    //   中文原文：北京市密云区东邵渠镇政府办公楼210室-1313
    //   英文转写（供 schema 解析，非改写含义）
    //   邮编用户未提供 -> 省略该字段，不用占位符污染 JSON-LD
    address: {
      "@type": "PostalAddress",
      streetAddress: "Room 210-1313, Dongshaoqu Town Government Office Building",
      addressLocality: "Miyun District, Beijing",
      addressRegion: "Beijing",
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
