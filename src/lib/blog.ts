// 博客数据：5 篇 GEO 规范内容（结论前置 + 数据精确 + 问答小标题 + 无空话）
// 合规红线：只写 atelier archive / reference，不写 same fabric as 明星同款

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  type: string;
  publishDate: string;
  keywords: string[];
  anchorTexts: string[];
  linkTo: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "couture-jacquard-yizhou-to-red-carpet",
    title:
      "Behind the Seam: How a Couture Jacquard Gets From Yizhou to the Red Carpet",
    metaDescription:
      "How couture jacquard silk travels from Yizhou mills to ateliers in Paris, New York and Dubai — and what sourcing teams should know about MOQ, lead time and FOB terms.",
    type: "Designer case study",
    publishDate: "2026-11-16",
    keywords: [
      "couture jacquard silk fabric B2B",
      "custom jacquard silk for gowns",
      "Yizhou silk fabric export",
    ],
    anchorTexts: ["22mm couture jacquard", "Yizhou jacquard loom", "plum blossom motif"],
    linkTo: "/products/greige-fabric",
    intro:
      "Every red-carpet gown starts with a bolt of cloth no one sees. This is the story of how a plum-blossom jacquard, developed from the Christopher Bu atelier archive in Beijing, gets woven in Yizhou, Guangxi, finished to spec, and shipped to ateliers in Paris, New York and Dubai.",
    sections: [
      {
        heading: "Why Yizhou: the raw silk capital",
        body: "Yizhou in Guangxi is the world's largest raw silk producing region, with 30+ years of sericulture and degumming expertise. This is where high-grade mulberry silk is reeled and woven — the same supply base that feeds couture ateliers worldwide.",
      },
      {
        heading: "From archive motif to loom (custom pattern process)",
        body: "A motif starts as a reference in the atelier archive. It is translated into a jacquard card, then woven on a modern loom. The archive reference is a starting point — not a replica — and each atelier can commission their own variation of pattern, density and yarn.",
      },
      {
        heading: "What ateliers should check before ordering (MOQ 200m, strike-off 15d)",
        body: "Custom jacquard carries a 200m minimum and a strike-off (sample) around 15 days. Confirm the motif file, yarn specs and density before committing — changes after the card is cut are costly.",
      },
      {
        heading: "Export terms that matter (FOB Qinzhou, 25d lead)",
        body: "Bulk orders ship FOB Qinzhou or FCA Yizhou, with a typical lead time of 20–25 days. Payment is T/T 30% deposit, 70% against Bill of Lading. Understanding these terms before you order removes the biggest surprise in cross-border sourcing.",
      },
    ],
  },
  {
    slug: "why-order-silk-swatch-book-before-bulk",
    title: "Why Smart Ateliers Always Order a Silk Swatch Book Before Bulk",
    metaDescription:
      "Why ordering a $25 silk swatch book before your bulk order saves money, time and rework — and exactly what to check when it arrives.",
    type: "Buyer pain point",
    publishDate: "2026-11-19",
    keywords: [
      "silk fabric swatch book $25",
      "silk swatch book credited on first order",
      "silk fabric hand feel sample",
    ],
    anchorTexts: ["silk swatch book", "$25 swatch fee", "lab dip service"],
    linkTo: "/samples",
    intro:
      "Color on a screen is a suggestion. Color in your hand is a decision. Here's what to check when your swatch book arrives — and why $25 now saves $2,500 later.",
    sections: [
      {
        heading: "Hand feel vs. photo: why silk lies on camera",
        body: "Silk's drape and luster do not photograph faithfully. A greige that looks flat on screen can feel heavy and structured in hand. Only a physical swatch tells you how the fabric will behave under a needle and on a body.",
      },
      {
        heading: "Checking drape, weight and weave consistency",
        body: "Lay the swatch flat, let it hang, and run it between your fingers. Confirm the momme, width and weave match the spec sheet — a 19mm double crepe should not feel like a 12mm habotai.",
      },
      {
        heading: "Lab dip and color matching after the swatch",
        body: "Once the hand is right, request a lab dip for custom colors. The dye house confirms color before production starts, so the bulk order matches the approved swatch — not a guess.",
      },
      {
        heading: "How the $25 swatch fee is credited on your first bulk order",
        body: "The $25 swatch book fee is credited against your first bulk order. It is a filter, not a cost: it removes buyers who are not serious and protects the mills that invest in sampling.",
      },
    ],
  },
  {
    slug: "sourcing-silk-for-us-ateliers",
    title: "Sourcing Silk for US Ateliers: Lead Times, MOQs and What Nobody Tells You",
    metaDescription:
      "A practical guide for US couture ateliers sourcing silk from China — lead times, MOQ, FOB Qinzhou, landed cost and why a swatch book is your safest first step.",
    type: "Regional (US)",
    publishDate: "2026-11-22",
    keywords: [
      "silk fabric for US couture atelier",
      "FOB Qinzhou silk fabric",
      "bulk silk fabric MOQ",
    ],
    anchorTexts: ["FOB Qinzhou landed cost", "25-day lead time", "200m MOQ"],
    linkTo: "/trade-terms",
    intro:
      "If you're a small atelier in Los Angeles or New York, ordering 200m of custom jacquard from China sounds risky. Here's exactly how the timeline works, what FOB Qinzhou actually means for your landed cost, and when a swatch book is enough to start.",
    sections: [
      {
        heading: "Lead time reality: 25 days, not 7",
        body: "Bulk silk orders ship in 20–25 days, not a week. Factor in weaving, inspection and ocean freight. Planning around the real timeline is the difference between a gown delivered on time and a missed deadline.",
      },
      {
        heading: "Understanding FOB Qinzhou vs. landed cost",
        body: "FOB Qinzhou means the supplier covers cost and freight to the named port; you cover insurance and onward shipping. Your landed cost adds freight, duty and brokerage — budget for them, and the quote stops surprising you.",
      },
      {
        heading: "MOQ: small batch 50m, custom jacquard 200m",
        body: "Plain weaves start at a 50m small batch. Custom jacquard requires 200m because of the setup involved in cutting a new card. Know your volume before you enquire — it determines what is actually possible.",
      },
      {
        heading: "The swatch book safety net",
        body: "A $25 swatch book (credited on your first order) lets you verify hand, weight and color before committing to a bulk order. It is the cheapest insurance you can buy against a costly rework.",
      },
    ],
  },
  {
    slug: "momme-vs-denier-reading-silk-specs",
    title: "Momme vs Denier: Reading Silk Specs for Couture",
    metaDescription:
      "What momme and denier actually mean for silk fabric weight, hand and end use — a spec sheet for designers.",
    type: "Material explainer",
    publishDate: "2026-11-25",
    keywords: [
      "19 momme mulberry silk fabric",
      "22 momme silk fabric wholesale",
      "what is momme silk",
    ],
    anchorTexts: ["19mm double crepe", "20/22D raw silk yarn", "momme fabric weight"],
    linkTo: "/products/greige-fabric",
    intro:
      "If you're specifying silk for a gown, you need two numbers: momme for fabric weight, denier for yarn thickness. Here's how to read both, and which to pick for what.",
    sections: [
      {
        heading: "What momme measures",
        body: "Momme (mm) is a unit of silk fabric weight — the weight in pounds of a 100-yard × 45-inch bolt. Higher momme means heavier, more structured fabric. A 19mm double crepe holds a silhouette; a 22mm fabric has more presence for gowns.",
      },
      {
        heading: "What denier measures",
        body: "Denier is the yarn's linear density — grams per 9,000 metres. 20/22 denier is the standard mulberry raw silk yarn weight, reeled from cocoons and wound into skeins for weaving.",
      },
      {
        heading: "Matching spec to use (gown / overlay / embroidery base)",
        body: "For a structured gown, choose a heavier momme double crepe or douppioni. For an overlay, a lighter fabric drapes better. For an embroidery base, a stable greige gives the stitching a reliable ground. Match the spec to the end use, and the garment works with you instead of against you.",
      },
    ],
  },
  {
    slug: "forbidden-city-archive-to-loom",
    title: "From the Forbidden City Archive to the Loom: A Jacquard Motif's Journey",
    metaDescription:
      "How an archive motif becomes a customizable jacquard — the Christopher Bu atelier's design process, and what's actually available to order.",
    type: "Provenance / brand",
    publishDate: "2026-11-28",
    keywords: [
      "Christopher Bu atelier silk reference",
      "custom jacquard silk for gowns",
      "Chinese silk fabric supplier",
    ],
    anchorTexts: ["atelier archive motif", "jacquard strike-off", "custom jacquard 200m"],
    linkTo: "/products/douppioni",
    intro:
      "A motif starts as a reference in the atelier archive. This is how it becomes a yarn-dyed jacquard on a loom in Yizhou — and how ateliers can commission their own version.",
    sections: [
      {
        heading: "The archive reference (not a replica)",
        body: "The Christopher Bu atelier holds an archive of motifs drawn from Chinese textile heritage. These are references — starting points for new design work — not replicas of past garments. The archive informs the eye, not the copy.",
      },
      {
        heading: "From sketch to jacquard card",
        body: "A motif is redrawn, assigned to a jacquard card, and woven on a modern loom in Yizhou. Each step — density, yarn, color — is a decision the commissioning atelier makes with the mill.",
      },
      {
        heading: "Customizing pattern, density and yarn",
        body: "You can adjust the pattern scale, the weave density and the yarn weight. A plum-blossom motif can be woven tight for structure or open for drape, in mulberry silk of your chosen denier.",
      },
      {
        heading: "MOQ and strike-off process",
        body: "Custom jacquard carries a 200m minimum and a strike-off around 15 days. The strike-off confirms the motif and density before bulk weaving begins — the point at which corrections are cheap and later changes are not.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
