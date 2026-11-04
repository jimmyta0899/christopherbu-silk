// 站点全局配置：品牌信息、贸易条款、联系方式等
// 单一数据源，便于维护与 SEO/GEO 一致

export const siteConfig = {
  name: "Christopher Bu",
  shortName: "Christopher Bu",
  domain: "christopherbu.com",
  // 当前部署到 GitHub Pages 项目页；绑定 christopherbu.com 自定义域名后改回 https://christopherbu.com
  url: "https://jimmyta0899.github.io/christopherbu-silk",
  // 品牌定位（canonical 描述，用于 GEO 实体消歧，全渠道一致）
  tagline:
    "Premium mulberry raw silk, greige fabric and dupioni sourced from Yizhou, China, the world's largest raw silk origin, and curated under the design eye of the Christopher Bu couture house.",
  // 一句话定位
  oneLiner:
    "From the world's raw silk capital of Yizhou, for the global textile, couture and fashion industry.",
  // 联系方式
  email: "info@christopherbu.com",
  // 法律实体（真实公司信息，用于知识图谱实体关联与信任）
  legalEntity: {
    name: "Beijing Qingshanyimu Trading Co., Ltd.",
    role: "Export & sourcing operations",
  },
  // 商标（用于实体背书，诚实标注）
  trademarks: {
    brand: "Christopher Bu",
    rtwLabel: "Chris by Christopher Bu",
  },
  // 实体信息（展示用）
  entities: {
    china: {
      name: "Beijing Qingshanyimu Trading Co., Ltd.",
      role: "Export & sourcing operations",
    },
  },
  // 认证/证书口径（诚实：由本地工厂持有，报价时提供）
  certifications: {
    oekoTex: {
      label: "OEKO-TEX® STANDARD 100 (Class II)",
      note: "held by local mill; certificate number provided on quotation",
    },
    gots: {
      label: "GOTS (Global Organic Textile Standard)",
      note: "held by local mill; certificate number provided on quotation",
    },
    gotsOrganic: {
      label: "GOTS-Certified Organic Silk",
      note: "certified 100% organic; license number and validity provided on quotation",
    },
    chinaOrganic: {
      label: "China Organic",
      note: "available for qualified buyer review within the document's listed scope",
    },
    destinationMarket: {
      label: "Destination-market compliance",
      note: "California Prop 65, EU textile-safety and other market requirements reviewed against product-specific test reports and confirmed in writing before order approval",
    },
  },
  // 贸易条款
  trade: {
    sampleShipping: "FOB Shanghai, 5–7 days (DHL worldwide, 5 business days)",
    bulkShipping: "FOB Qinzhou / FCA Yizhou (preferred), 20–25 days",
    payment: "T/T 30% deposit, 70% against B/L",
  },
  // 样品服务政策
  samplePolicy: {
    freeSwatches:
      "Mini fabric swatches may be supplied without a material charge after availability is confirmed; buyers bear all courier, customs and related international shipping costs (usually DHL) or designated couriers.",
    chargeableSamples:
      "Full-size silk fabrics and finished apparel are chargeable. Any sample-fee credit against a later bulk order applies only when stated in the written quotation or pro forma invoice.",
  },
  // 社交媒体
  social: {
    instagram: "https://www.instagram.com/christopherbu_official",
    whatsapp: "+1-202-579-8256",
  },
} as const;

export type SiteConfig = typeof siteConfig;
