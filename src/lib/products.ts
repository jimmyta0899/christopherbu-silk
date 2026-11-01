// 产品数据：生丝、坯绸、双宫丝（主推），定制面料（次要）
// 规格为行业通用值占位，上线前与工厂核对真实值

export type Product = {
  slug: string;
  name: string;
  // SEO/GEO
  title: string;
  h1: string;
  metaDescription: string;
  introAnswer: string; // 40-60 字直接答案（GEO 关键）
  category: "raw-silk" | "greige-fabric" | "douppioni" | "custom";
  featured: boolean;
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
      "Mulberry Raw Silk (Filature Silk) | 20/22D, 4A–6A Grade",
    h1: "Premium Mulberry Raw Silk (Filature Silk) from Yizhou, China",
    metaDescription:
      "Source 20/22 denier mulberry raw silk (filature silk), 4A–6A grade, from Yizhou — the world's largest raw silk origin. OEKO-TEX & GOTS available on request. B2B bulk supply.",
    introAnswer:
      "We supply 20/22 denier mulberry raw silk (filature silk) in 4A, 5A and 6A grades, sourced directly from Yizhou, China — the world's largest raw silk producing region.",
    category: "raw-silk",
    featured: true,
    specs: [
      { label: "Type", value: "Mulberry raw silk / white filature silk" },
      { label: "Denier", value: "20/22D (13/15D, 27/29D on request)" },
      { label: "Grade", value: "4A / 5A / 6A" },
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
      "Greige Silk Fabric (Undyed) | Mulberry Silk",
    h1: "Greige Mulberry Silk Fabric for Dyeing, Printing & Finishing",
    metaDescription:
      "Source undyed greige mulberry silk fabric from Yizhou, China for custom dyeing, printing and finishing. Bulk supply with OEKO-TEX & GOTS available on request.",
    introAnswer:
      "We supply undyed greige mulberry silk fabric from Yizhou partner mills, ideal for brands and mills that want full control over dyeing, printing and finishing.",
    category: "greige-fabric",
    featured: true,
    specs: [
      { label: "Type", value: "Greige (undyed) mulberry silk fabric" },
      { label: "Width", value: "114 cm / 140 cm" },
      { label: "Momme", value: "16–22 mm" },
      { label: "Finish", value: "Greige (ready for dyeing/printing)" },
      { label: "Weave", value: "Plain, twill, satin (by request)" },
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
      "Douppioni Silk Fabric | Slub Texture",
    h1: "Douppioni Silk — Textured Mulberry Silk for Gowns & Eveningwear",
    metaDescription:
      "Source douppioni silk with its signature slub texture from Yizhou, China. Ideal for evening gowns, bridal and structured couture. B2B bulk supply.",
    introAnswer:
      "Douppioni silk is a textured mulberry silk with a distinctive slubbed surface, widely used for evening gowns, bridal wear and structured couture garments.",
    category: "douppioni",
    featured: true,
    specs: [
      { label: "Type", value: "Douppioni (double) mulberry silk" },
      { label: "Texture", value: "Slubbed, textured surface" },
      { label: "Width", value: "114 cm / 140 cm" },
      { label: "Finish", value: "Greige or dyed (on request)" },
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
  {
    slug: "custom",
    name: "Custom & Jacquard (On Request)",
    title:
      "Custom Jacquard & Dyed Silk Fabric | On Request",
    h1: "Custom Jacquard, Dyed & Specialty Silk Fabric — On Request",
    metaDescription:
      "Explore custom jacquard, dyed and specialty silk fabric sourced through our Yizhou partner network. Couture-grade custom weaving on request. Contact our B2B team.",
    introAnswer:
      "Beyond our core raw silk and greige supply, we can source custom jacquard, dyed and specialty silk fabrics through our Yizhou partner network on request.",
    category: "custom",
    featured: false,
    specs: [
      { label: "Type", value: "Custom jacquard, dyed, specialty weaves" },
      { label: "Source", value: "Routed through Yizhou partner network" },
      { label: "Lead time", value: "Confirmed per project" },
      { label: "MOQ", value: "Project-based — contact for quotation" },
    ],
    useCases: [
      "Signature jacquard patterns",
      "Custom color development",
      "Specialty couture fabrics",
    ],
    faq: [
      {
        q: "Can you produce custom jacquard fabric?",
        a: "Yes — as an extension of our core supply. We route custom jacquard, dyed and specialty requests through our Yizhou partner network. Lead time and MOQ are confirmed per project.",
      },
      {
        q: "Is custom fabric a core offering?",
        a: "Our core supply is raw silk, greige fabric and douppioni. Custom and jacquard fabric is available on request for clients with specific requirements.",
      },
    ],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
