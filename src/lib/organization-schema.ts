// 全站组织实体 JSON-LD（知识图谱实体关联，供 AI / 搜索引擎 / 大模型直接读取）
// 复用 site-config 中已确认的 email / 社媒；实体真实字段除 legalName 外一律待用户提供。
// ⚠️ 红线：未由用户提供的字段一律不输出（不写 "TODO" 占位符，避免占位值被当成真实数据抓取）。
//   已完备：foundingDate / telephone / identifier / 地址 / contactPoint。
import { siteConfig } from "./site-config";

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;

/**
 * 构建 Organization 结构化数据。
 * 已知值（来自 site-config，非本次编造）：name / url / email / social / legalName。
 * 用户 2026-11-06 提供：telephone / 地址；2026-11-22 提供 Derrick Tang、宜州固话。
 * 2026-11-22 从公开工商登记核实：统一社会信用代码 911101050513783106、成立日 2012-08-07、
 * 注册地址官方全称含「东邵渠镇集中办公区」。identifier 已回填，不再有省略字段。
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
    // === 以下字段：用户提供 + 2026-11-22 工商公开登记核对 ===
    // 成立日期：工商登记 2012-08-07（企查查 / 启信宝 / 百度百科三源一致）。
    //   用户 2026-11-06 口头给的是「2012年10月」，与登记日不符；法人主体的 foundingDate
    //   按工商登记日取 2012-08，不取口头月份。
    foundingDate: "2012-08",
    // 电话按用户原文照录，未改格式（北京手机）
    telephone: "+86-18612933714",
    // identifier = 统一社会信用代码。2026-11-22 从公开工商登记核实：
    //   911101050513783106（企查查 / 启信宝 / 百度百科三源一致；工商注册号 110105015146113）
    identifier: "911101050513783106",
    // 地址：用户 2026-11-22 拍板改用实际办公地（朝阳柏悦春天），不用密云注册地址。
    //   中文原文：北京市朝阳区高碑店文化艺术新街1704号柏悦春天（2025 年报通信地址）
    //   邮编 100124 = 该门牌的官方邮编，出处：中国艺术研究院油画院官网联系页
    //     https://www.opcn.org.cn/zh_about/contact/ ——「北京市朝阳区高碑店文化艺术新街1704号院，邮编 100124」
    //     （柏悦春天位于该院内；高碑店地区通用码 100022 不用于此门牌）
    //   柏悦春天为楼宇名，无官方英文，用拼音；不译 Park Hyatt（那是酒店品牌，与此处无关）。
    address: {
      "@type": "PostalAddress",
      streetAddress: "Baiyue Chuntian, No. 1704 Culture and Art New Street, Gaobeidian",
      addressLocality: "Chaoyang District",
      addressRegion: "Beijing",
      postalCode: "100124",
      addressCountry: "CN",
    },
    // contactPoint 表达销售联系。Derrick Tang / Export Manager 为用户 2026-11-22 提供。
    // 第二个为 Yizhou 产区运营固话（+86-778 为广西河池区号，宜州属河池），用户 2026-11-22 提供。
    contactPoint: [
      {
        "@type": "ContactPoint",
        name: "Derrick Tang",
        telephone: siteConfig.social.whatsapp,
        contactType: "sales",
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        name: "Derrick Tang",
        telephone: "+86-778-3180018",
        contactType: "sales",
        areaServed: "Worldwide",
      },
    ],
  };
}
