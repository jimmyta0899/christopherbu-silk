// 产品数据：生丝、坯绸、双宫丝（主推三个，其余品类以后再加）
// 规格为行业通用值占位，上线前与工厂核对真实值
// title 按 6 段公式：品牌背书 + 品类 + 规格 + 场景 + 采购意图 + 产地/贸易条款 + silk fabric supplier

export type Product = {
  slug: string;
  name: string;
  // SEO/GEO
  title: string;
  h1: string;
  metaDescription: string;
  introAnswer: string; // 40-60 字直接答案（GEO 关键）
  category: "raw-silk" | "greige-fabric" | "dupioni";
  featured: boolean;
  // 长尾关键词（落地到 meta keywords + 内链锚文本）
  keywords: string[];
  // 正文段落（自然融入长尾词，GEO/SEO 深度落地）
  body: string[];
  // 产品图（测试占位图，正式上线前需替换为自有/授权图）
  image: string;
  imageAlt: string; // 长尾词 alt 文本
  // 规格字段
  specs: { label: string; value: string }[];
  // 应用场景
  useCases: string[];
  // FAQ
  faq: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: "raw-silk",
    name: "Mulberry Raw Silk (Filature Silk)",
    title:
      "Christopher Bu Mulberry Raw Silk Yarn 20/22D 5A for Weaving & Embroidery — Swatch MOQ FOB Qinzhou Yizhou Silk Supplier",
    h1: "Mulberry Raw Silk Yarn 20/22D for Weaving & Embroidery",
    metaDescription:
      "Source 20/22 denier mulberry raw silk (filature silk), 4A–6A grade, from Yizhou — the world's largest raw silk origin. OEKO-TEX & GOTS available on request. B2B bulk supply.",
    introAnswer:
      "We supply 20/22 denier mulberry raw silk (filature silk) in 4A, 5A and 6A grades, sourced directly from Yizhou, China — the world's largest raw silk producing region.",
    category: "raw-silk",
    featured: true,
    keywords: [
      "mulberry raw silk yarn",
      "20/22 denier silk",
      "filature silk supplier",
      "white raw silk 5A 6A",
      "raw silk for weaving",
      "silk fabric for fashion designer",
      "raw silk yarn export China",
      "Yizhou raw silk supplier",
    ],
    body: [
      "As a Yizhou raw silk supplier, we ship 20/22 denier mulberry raw silk — also called filature silk or white raw silk — directly to weaving and knitting mills and textile manufacturers worldwide. The 5A and 6A grades we source are the same tiers demanded by luxury fashion houses for warp and weft that must hold tension and take colour evenly.",
      "If you are a fashion designer or brand sourcing raw silk for weaving, hand and evenness are what separate a smooth production run from a costly one. Our raw silk yarn export from China is graded to GB/T 1797-2008, with moisture controlled below 11% and packaging sized for containerised, export-ready bales.",
    ],
    image: "/christopherbu-silk/products/raw-silk2.webp",
    imageAlt:
      "20/22 denier mulberry raw silk yarn hanks in natural white from Yizhou raw silk supplier",
    specs: [
      { label: "Type", value: "Mulberry raw silk / white filature silk" },
      { label: "Denier", value: "20/22D (13/15D, 27/29D on request)" },
      { label: "Grade", value: "4A / 5A / 6A (majority 5A and above)" },
      { label: "Standard", value: "GB/T 1797-2008" },
      { label: "Color", value: "Natural undyed white" },
      { label: "Moisture", value: "Max 11%" },
      { label: "Packaging", value: "Export cartons / bales (60 kg per bale typical)" },
      { label: "MOQ", value: "By order — contact for quotation" },
    ],
    useCases: [
      "Silk weaving & knitting mills",
      "Textile manufacturers",
      "Luxury brand sourcing teams",
    ],
    faq: [
      {
        q: "What grade of mulberry raw silk yarn do you supply?",
        a: "We supply 4A, 5A and 6A grade mulberry raw silk, with the majority at 5A and above — sourced from local mills whose output regularly reaches 5A/6A quality.",
      },
      {
        q: "What is the minimum order quantity (MOQ) for raw silk yarn export?",
        a: "Raw silk is sold by weight, not by the meter. MOQ varies by denier and grade; contact our B2B team with your target volume for a tailored FOB Qinzhou quotation.",
      },
      {
        q: "Can I get a 20/22 denier raw silk sample before bulk ordering?",
        a: "Yes. Order our $25 sample to verify hand, grade and color, or request a raw silk sample — the sample fee is credited against your first bulk order.",
      },
    ],
  },
  {
    slug: "greige-fabric",
    name: "Greige Silk Fabric",
    title:
      "Christopher Bu Greige Silk Double Crepe 19mm 140cm for Couture & Bridal — Swatch MOQ FOB Shanghai Yizhou Silk B2B",
    h1: "Greige Silk Double Crepe 19mm for Couture & Bridal",
    metaDescription:
      "Source undyed greige mulberry silk fabric from Yizhou, China — the blank canvas for your own colour and finish. Bulk supply with OEKO-TEX & GOTS available on request.",
    introAnswer:
      "We supply undyed greige mulberry silk fabric from local mills, ideal for brands and mills that want full control over colour and finishing in their own production.",
    category: "greige-fabric",
    featured: true,
    keywords: [
      "greige silk fabric",
      "19 momme mulberry silk fabric",
      "140cm width silk fabric",
      "custom dyed silk fabric bulk",
      "silk fabric for bridal atelier",
      "silk double crepe 19mm",
      "undyed silk fabric wholesale",
      "silk fabric for custom dyeing",
    ],
    body: [
      "Greige silk fabric is undyed mulberry silk straight off the loom — the blank canvas brands, ateliers and finishing houses use for their own colour, print and finish development. We supply 19 momme mulberry silk fabric, including double crepe (crepe de chine), in a 140 cm width that suits garment cutting and bridal atelier work alike.",
      "For designers who develop signature colours in-house, undyed silk fabric wholesale gives you full control over the finished shade. Our greige silk double crepe 19mm is a favorite for couture and bridal because it drapes cleanly and holds its hand. Every batch is supplied ready for your own dye house or finishing partner.",
    ],
    image: "/christopherbu-silk/products/greige-fabric.webp",
    imageAlt:
      "Greige silk double crepe 19mm 140cm width undyed fabric for custom dyeing wholesale",
    specs: [
      { label: "Type", value: "Greige (undyed) mulberry silk fabric" },
      { label: "Weave", value: "Crepe de chine, charmeuse, habotai (by request)" },
      { label: "Momme", value: "12 / 16 / 19 / 30 mm" },
      { label: "Width", value: "114 cm / 140 cm" },
      { label: "Finish", value: "Greige (undyed, ready for your own finishing)" },
      { label: "MOQ", value: "50–200 m by item — contact for quotation" },
    ],
    useCases: [
      "Garment manufacturing",
      "Luxury home textiles",
      "Brands developing signature colours",
    ],
    faq: [
      {
        q: "What is greige silk fabric, and why buy it undyed?",
        a: "Greige (or grey) fabric is undyed, unfinished silk cloth straight off the loom. Buying 19 momme mulberry silk fabric greige gives you full control over colour, print and finishing for your own production.",
      },
      {
        q: "What width and weight is your double crepe available in?",
        a: "Standard widths are 114 cm and 140 cm, in 12, 16, 19 and 30 momme. Our greige silk double crepe 19mm is the most-requested for couture and bridal.",
      },
      {
        q: "Can you match a specific colour or finish?",
        a: "Greige fabric is supplied undyed, ready for your own colour and finishing. We do not offer dyeing — this keeps full control of the finished shade in your hands.",
      },
    ],
  },
  {
    slug: "dupioni",
    name: "Dupioni Silk",
    title:
      "Christopher Bu Greige Silk Dupioni 19mm 140cm for Evening Gowns & Sculptural Tailoring — Swatch FCA Yizhou Silk Supplier",
    h1: "Dupioni Silk 19mm for Gowns & Sculptural Tailoring",
    metaDescription:
      "Source dupioni silk with its signature slub texture from Yizhou, China. Available in 19/23/30/40 momme, 114/140cm. Ideal for evening gowns, bridal and structured couture. B2B bulk supply.",
    introAnswer:
      "Dupioni silk is a textured mulberry silk with a distinctive slubbed surface, widely used for evening gowns, bridal wear and structured couture garments. Available in 19, 23, 30 and 40 momme.",
    category: "dupioni",
    featured: true,
    keywords: [
      "dupioni silk",
      "douppioni silk",
      "dupioni silk for evening gowns",
      "19 momme dupioni",
      "silk dupioni wholesale",
      "slub silk fabric",
      "dupioni for bridal",
      "textured silk for couture",
      "Yizhou dupioni supplier",
    ],
    body: [
      "Dupioni silk is a textured mulberry silk woven from irregular double-cocoon filaments, giving it the distinctive slubbed surface designers prize. We supply 19 momme dupioni — the most-requested weight for evening gowns and bridal — alongside 23, 30 and 40 momme options in 90, 114 and 140 cm widths.",
      "Because the slub is part of the weave rather than a flaw, dupioni for bridal and structured couture reads as deliberately luxurious. As a Yizhou dupioni supplier, we ship greige as standard, with shrinkage around 5% accounted for in cutting.",
    ],
    image: "/christopherbu-silk/products/dupioni2.webp",
    imageAlt:
      "Dupioni silk fabric 19 momme with slub texture for evening gowns and bridal",
    specs: [
      { label: "Type", value: "Dupioni (double-cocoon) mulberry silk" },
      { label: "Momme", value: "19 / 23 / 30 / 40 mm" },
      { label: "Width", value: "90 cm / 114 cm / 140 cm" },
      { label: "Texture", value: "Slubbed, textured surface" },
      { label: "Finish", value: "Greige (undyed)" },
      { label: "Shrinkage", value: "Approx. 5%" },
      { label: "MOQ", value: "50–200 m by item — contact for quotation" },
    ],
    useCases: [
      "Evening gowns",
      "Bridal & occasion wear",
      "Structured couture",
      "Jackets & tailored pieces",
    ],
    faq: [
      {
        q: "What is dupioni silk used for?",
        a: "Dupioni's slubbed, textured character makes it a favorite for evening gowns, bridal wear and structured garments where the fabric itself is a design feature.",
      },
      {
        q: "Is dupioni silk for evening gowns available in colour?",
        a: "Dupioni is supplied greige (undyed), ready for your own colour and finishing. We do not offer dyeing; this keeps full control of the finished shade in your hands.",
      },
      {
        q: "What weights does 19 momme dupioni come in?",
        a: "Dupioni is woven in 19, 23, 30 and 40 momme. The 19 momme dupioni is the standard entry weight for gowns; heavier weights suit tailored jackets and structured couture.",
      },
    ],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
