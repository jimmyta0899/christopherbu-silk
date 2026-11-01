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
  category: "raw-silk" | "greige-fabric" | "douppioni";
  featured: boolean;
  // 长尾关键词（落地到 meta keywords + 内链锚文本）
  keywords: string[];
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
      "Christopher Bu Mulberry Raw Silk Yarn 20/22D 5A for Weaving & Embroidery — Swatch Book MOQ FOB Qinzhou Yizhou Silk Supplier",
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
      "Dyeing and finishing plants",
      "Textile manufacturers",
      "Luxury brand sourcing teams",
    ],
    faq: [
      {
        q: "What grade of raw silk do you supply?",
        a: "We supply 4A, 5A and 6A grade mulberry raw silk, with the majority at 5A and above — sourced from Yizhou partner mills whose output regularly reaches 5A/6A quality.",
      },
      {
        q: "What is the minimum order quantity for raw silk?",
        a: "Raw silk is sold by weight. MOQ varies by denier and grade; contact our B2B team with your target volume for a tailored quotation.",
      },
      {
        q: "Can I get a sample before bulk ordering?",
        a: "Yes. Order our $25 sample book to verify hand, grade and color, or request a raw silk sample — the sample fee is credited against your first bulk order.",
      },
    ],
  },
  {
    slug: "greige-fabric",
    name: "Greige Silk Fabric",
    title:
      "Christopher Bu Greige Silk Double Crepe 19mm 140cm for Couture & Bridal — Custom Dye MOQ FOB Shanghai Yizhou Silk B2B",
    h1: "Greige Silk Double Crepe 19mm for Couture & Bridal",
    metaDescription:
      "Source undyed greige mulberry silk fabric from Yizhou, China for custom dyeing, printing and finishing. Bulk supply with OEKO-TEX & GOTS available on request.",
    introAnswer:
      "We supply undyed greige mulberry silk fabric from Yizhou partner mills, ideal for brands and mills that want full control over dyeing, printing and finishing.",
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
    specs: [
      { label: "Type", value: "Greige (undyed) mulberry silk fabric" },
      { label: "Weave", value: "Crepe de chine, charmeuse, habotai (by request)" },
      { label: "Momme", value: "12 / 16 / 19 / 30 mm" },
      { label: "Width", value: "114 cm / 140 cm" },
      { label: "Finish", value: "Greige (ready for dyeing/printing)" },
      { label: "MOQ", value: "50–200 m by item — contact for quotation" },
    ],
    useCases: [
      "Custom dyeing & printing",
      "Garment manufacturing",
      "Luxury home textiles",
      "Brands developing signature colors",
    ],
    faq: [
      {
        q: "What is greige silk fabric?",
        a: "Greige (or grey) fabric is undyed, unfinished silk cloth straight off the loom. It gives you full control over color, printing and finishing for your own production.",
      },
      {
        q: "What width and weight is available?",
        a: "Standard widths are 114 cm and 140 cm, in 16–22 momme. Weave and weight can be confirmed with our team against current mill availability.",
      },
      {
        q: "Can you match a specific color or finish?",
        a: "Greige fabric is supplied undyed. For custom dyeing, printing or finishing, contact us — we can route the request to our partner network.",
      },
    ],
  },
  {
    slug: "douppioni",
    name: "Douppioni Silk",
    title:
      "Christopher Bu Greige Silk Douppioni 19mm 140cm for Evening Gowns & Sculptural Tailoring — Swatch Book FCA Yizhou Silk Supplier",
    h1: "Douppioni Silk 19mm for Gowns & Sculptural Tailoring",
    metaDescription:
      "Source douppioni silk with its signature slub texture from Yizhou, China. Available in 19/23/30/40 momme, 114/140cm. Ideal for evening gowns, bridal and structured couture. B2B bulk supply.",
    introAnswer:
      "Douppioni silk is a textured mulberry silk with a distinctive slubbed surface, widely used for evening gowns, bridal wear and structured couture garments. Available in 19, 23, 30 and 40 momme.",
    category: "douppioni",
    featured: true,
    keywords: [
      "douppioni silk",
      "douppioni silk for evening gowns",
      "19 momme douppioni",
      "silk douppioni wholesale",
      "slub silk fabric",
      "douppioni for bridal",
      "textured silk for couture",
      "Yizhou douppioni supplier",
    ],
    specs: [
      { label: "Type", value: "Douppioni (double-cocoon) mulberry silk" },
      { label: "Momme", value: "19 / 23 / 30 / 40 mm" },
      { label: "Width", value: "90 cm / 114 cm / 140 cm" },
      { label: "Texture", value: "Slubbed, textured surface" },
      { label: "Finish", value: "Greige or dyed (on request)" },
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
        q: "What is douppioni silk used for?",
        a: "Douppioni's slubbed, textured character makes it a favorite for evening gowns, bridal wear and structured garments where the fabric itself is a design feature.",
      },
      {
        q: "Is douppioni available in color?",
        a: "Douppioni is typically supplied greige; dyed options can be arranged on request through our partner network.",
      },
    ],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
