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
  category: "raw-silk" | "greige-fabric" | "dupioni" | "satin" | "jacquard-luo" | "organic-silk";
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
      { label: "Color", value: "Natural white; dyed to order from a standard shade card or your custom colour" },
      { label: "Moisture", value: "Max 11%" },
      { label: "Organic", value: "GOTS-certified organic raw silk available (GOTS-30270)" },
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
      "Source mulberry silk fabric from Yizhou, China — supplied greige (undyed) or dyed to your colour. Bulk supply with OEKO-TEX & GOTS available on request.",
    introAnswer:
      "We supply mulberry silk fabric from local mills, either greige for your own colour development or dyed to order from a standard shade card or your custom colour.",
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
      "dyed silk fabric to order",
    ],
    body: [
      "Greige silk fabric is undyed mulberry silk straight off the loom — the blank canvas brands, ateliers and finishing houses use for their own colour, print and finish development. We supply 19 momme mulberry silk fabric, including double crepe (crepe de chine), in a 140 cm width that suits garment cutting and bridal atelier work alike.",
      "You can take it greige and develop your own signature colours in-house, or have it dyed to order — we offer both a standard shade card and custom colour matching, so the finished shade is exactly what your collection needs. Our greige silk double crepe 19mm is a favorite for couture and bridal because it drapes cleanly and holds its hand.",
    ],
    image: "/christopherbu-silk/products/greige-fabric.webp",
    imageAlt:
      "Greige silk double crepe 19mm 140cm width undyed fabric for custom dyeing wholesale",
    specs: [
      { label: "Type", value: "Greige (undyed) mulberry silk fabric" },
      { label: "Weave", value: "Crepe de chine, charmeuse, habotai (by request)" },
      { label: "Momme", value: "12 / 16 / 19 / 30 mm" },
      { label: "Width", value: "114 cm / 140 cm" },
      { label: "Finish", value: "Greige (undyed) or dyed to order (standard shade card / custom colour)" },
      { label: "Organic", value: "GOTS-certified organic greige fabric available (GOTS-30270)" },
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
        q: "Can you dye the fabric for me?",
        a: "Yes. You can take the fabric greige and finish it yourself, or have it dyed to order — we offer both a standard shade card and custom colour matching. Contact our team with your target colour or Pantone reference for a quotation.",
      },
      {
        q: "What width and weight is your double crepe available in?",
        a: "Standard widths are 114 cm and 140 cm, in 12, 16, 19 and 30 momme. Our greige silk double crepe 19mm is the most-requested for couture and bridal.",
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
      "Silk dupioni is a tightly woven, crisp silk fabric made by pairing a fine standard silk yarn in the warp with an uneven yarn reeled from two or more entangled cocoons in the weft. Those double-cocoon threads — called dupion threads — are thicker and more irregular than standard silk, and that is exactly what creates dupioni's signature look: bold, prominent slubs running across the grain, exceptional body, and a stiff, sculptural drape.",
      "Dupioni is prized for evening wear, bridal gowns and special-occasion garments, as well as light home decorating. Because the weft and warp are often woven in different colours, it carries a natural two-tone iridescence that shifts as the fabric catches light — a subtle luxury that solid-dyed silks cannot match.",
      "Traditional, high-quality dupioni is hand-woven, which adds to its characteristic irregularity and heavier weight; more affordable versions are now machine-woven. The white Thai-style silk is a natural fibre, so a finished piece may carry minor variations and irregularities in the weave. These are a mark of a fine silk yarn, not defects, and should not be treated as such.",
      "We supply 19 momme dupioni — the most-requested weight for gowns and bridal — alongside 23, 30 and 40 momme options in 90, 114 and 140 cm widths. As a Yizhou dupioni supplier, we ship greige as standard, or dyed to order from a standard shade card or your custom colour, with shrinkage around 5% accounted for in cutting.",
    ],
    image: "/christopherbu-silk/products/dupioni2.webp",
    imageAlt:
      "Dupioni silk fabric 19 momme with slub texture for evening gowns and bridal",
    specs: [
      { label: "Type", value: "Dupioni (double-cocoon) mulberry silk" },
      { label: "Momme", value: "19 / 23 / 30 / 40 mm" },
      { label: "Width", value: "90 cm / 114 cm / 140 cm" },
      { label: "Texture", value: "Slubbed, textured surface" },
      { label: "Finish", value: "Greige (undyed) or dyed to order (standard shade card / custom colour)" },
      { label: "Shrinkage", value: "Approx. 5%" },
      { label: "MOQ", value: "50–200 m by item — contact for quotation" },
    ],
    useCases: [
      "Evening gowns",
      "Bridal & occasion wear",
      "Structured couture",
      "Jackets & tailored pieces",
      "Light home decorating (draperies, cushions, upholstery)",
    ],
    faq: [
      {
        q: "What is dupioni silk used for?",
        a: "Dupioni's slubbed, textured character makes it a favorite for evening gowns, bridal wear and special-occasion garments, as well as light home decorating such as draperies, cushions and upholstery — anywhere the fabric's bold slubs and structured drape are part of the design.",
      },
      {
        q: "Why does dupioni silk have a two-tone, iridescent sheen?",
        a: "Dupioni's iridescence comes from the weave itself: the warp and weft are often spun in different colours, so the fabric shimmers and shifts between two tones as it catches light. It is a natural quality of the fabric, not an applied finish.",
      },
      {
        q: "Are the slubs and irregularities in dupioni a defect?",
        a: "No. Dupioni is woven from uneven double-cocoon threads, so minor variations and irregularities are characteristic of a fine silk yarn. They are a signature of the fabric and should not be treated as defects.",
      },
      {
        q: "Is your dupioni hand-woven or machine-woven?",
        a: "Traditional high-quality dupioni is hand-woven, which adds to its irregular, artisanal character and heavier weight; more affordable versions are machine-woven. Contact our team to confirm the weave for the weight you are sourcing.",
      },
      {
        q: "Is dupioni silk for evening gowns available in colour?",
        a: "Yes. Dupioni is supplied greige (undyed) or dyed to order — we offer both a standard shade card and custom colour matching, so you get the exact shade your collection needs.",
      },
      {
        q: "What weights does 19 momme dupioni come in?",
        a: "Dupioni is woven in 19, 23, 30 and 40 momme. The 19 momme dupioni is the standard entry weight for gowns; heavier weights suit tailored jackets and structured couture.",
      },
    ],
  },
  {
    slug: "satin",
    name: "Satin Silk Fabric",
    title:
      "Christopher Bu Satin Silk Fabric 16–30mm 114/140cm for Bridal & Eveningwear — Swatch FOB Shanghai Yizhou Silk Supplier",
    h1: "Satin Silk Fabric for Bridal & Eveningwear",
    metaDescription:
      "Source lustrous satin silk fabric from Yizhou, China, in 16/19/22/30 momme and 114/140 cm widths. Supplied greige or dyed to order. Ideal for bridal, eveningwear and luxury linings. B2B bulk supply.",
    introAnswer:
      "Satin silk is a lustrous, smooth-faced mulberry silk with a soft sheen and fluid drape, supplied greige or dyed to order from a standard shade card or your custom colour.",
    category: "satin",
    featured: true,
    keywords: [
      "satin silk fabric",
      "silk satin wholesale",
      "satin silk fabric supplier",
      "bridal satin silk",
      "charmeuse satin",
      "19 momme satin silk",
      "silk satin for eveningwear",
      "dyed satin silk fabric",
      "Yizhou satin silk supplier",
    ],
    body: [
      "Satin silk is the silk people picture when they think of liquid lustre: a smooth, glossy face with a soft sheen that slides under the hand and catches light as it moves. It is woven so the warp floats over the weft, which is what gives satin its signature high-gloss front and matt reverse — the same drape and shine that make it the default choice for bridal gowns, eveningwear and luxury linings.",
      "We supply satin silk fabric in 16, 19, 22 and 30 momme, with the 19 momme satin the most-requested weight for bridal and eveningwear because it balances sheen, body and drape. Standard widths are 114 cm and 140 cm, which suit both garment cutting and soft furnishings.",
      "Like all our silk, satin is supplied greige for your own colour development, or dyed to order — we offer both a standard shade card and custom colour matching, so the finished shade is exactly what your collection needs.",
    ],
    image: "/christopherbu-silk/products/satin.webp",
    imageAlt:
      "Satin silk fabric rolls in ivory and soft pastel shades for bridal and eveningwear wholesale",
    specs: [
      { label: "Type", value: "Mulberry silk satin (charmeuse)" },
      { label: "Momme", value: "16 / 19 / 22 / 30 mm" },
      { label: "Width", value: "114 cm / 140 cm" },
      { label: "Finish", value: "Greige (undyed) or dyed to order (standard shade card / custom colour)" },
      { label: "Character", value: "High-gloss face, soft sheen, fluid drape" },
      { label: "MOQ", value: "50–200 m by item — contact for quotation" },
    ],
    useCases: [
      "Bridal & evening gowns",
      "Luxury linings",
      "Lingerie & sleepwear",
      "Soft furnishings",
    ],
    faq: [
      {
        q: "What is satin silk fabric used for?",
        a: "Satin silk's high-gloss face and fluid drape make it the standard choice for bridal and evening gowns, luxury linings, lingerie and soft furnishings — anywhere a smooth, lustrous silk surface is part of the design.",
      },
      {
        q: "What momme weights does your satin silk come in?",
        a: "We supply satin silk in 16, 19, 22 and 30 momme. The 19 momme satin is the most-requested for bridal and eveningwear; lighter weights suit linings and lingerie, heavier weights suit structured pieces.",
      },
      {
        q: "Is your satin silk available in colour?",
        a: "Yes. Satin is supplied greige (undyed) or dyed to order — we offer both a standard shade card and custom colour matching, so you get the exact shade your collection needs.",
      },
    ],
  },
  {
    slug: "jacquard-luo",
    name: "Jacquard Luo Silk",
    title:
      "Christopher Bu Jacquard Luo Silk Fabric Custom Woven Motifs 19mm for Couture & Occasionwear — Yizhou Silk Supplier",
    h1: "Jacquard Luo Silk for Couture & Occasionwear",
    metaDescription:
      "Source jacquard luo silk fabric from Yizhou, China — a mulberry silk with motifs woven into the cloth on a jacquard loom. Custom pattern development. Ideal for couture and occasionwear. B2B bulk supply.",
    introAnswer:
      "Jacquard luo is a mulberry silk with motifs woven directly into the cloth on a jacquard loom, supplied greige or dyed to order, with custom pattern development for couture and occasionwear.",
    category: "jacquard-luo",
    featured: true,
    keywords: [
      "jacquard silk fabric",
      "silk jacquard fabric",
      "jacquard luo silk",
      "custom jacquard silk",
      "woven motif silk fabric",
      "mulberry silk jacquard",
      "jacquard fabric for couture",
      "jacquard loom silk supplier",
      "Yizhou jacquard silk",
    ],
    body: [
      "Jacquard luo is silk where the motif is woven into the cloth, not printed or embroidered on top of it. A jacquard loom raises and lowers individual warp threads to form the pattern as the fabric is woven, so the design is part of the cloth itself — which is exactly how the gold-and-green motif of the Forbidden City gown Fan Bingbing wore to the 2015 Met Gala was made.",
      "Because the pattern is in the weave, jacquard luo holds a crisp, dimensional motif that survives wear and does not fade or peel the way a print can. It is the fabric of choice for couture and occasionwear where the motif is the point of the garment.",
      "Custom pattern development is available: we can weave your own motif, from a house motif to a commissioned artwork. Custom jacquard carries a higher minimum because cutting a new card and setting the loom has to be spread over enough cloth — contact our team to discuss your pattern.",
    ],
    image: "/christopherbu-silk/products/jacquard-luo.webp",
    imageAlt:
      "Jacquard luo silk fabric swatches with woven motifs in multiple colourways for couture",
    specs: [
      { label: "Type", value: "Mulberry silk jacquard luo" },
      { label: "Weave", value: "Jacquard (motif woven into the cloth)" },
      { label: "Momme", value: "19 / 22 / 30 mm (by motif)" },
      { label: "Width", value: "114 cm / 140 cm" },
      { label: "Finish", value: "Greige (undyed) or dyed to order (standard shade card / custom colour)" },
      { label: "Pattern", value: "Stock motifs or custom pattern development" },
      { label: "MOQ", value: "200 m for custom jacquard — contact for quotation" },
    ],
    useCases: [
      "Couture & occasionwear",
      "Bridal",
      "Structured garments",
      "Branded woven-motif pieces",
    ],
    faq: [
      {
        q: "What is jacquard luo silk?",
        a: "Jacquard luo is a mulberry silk with the motif woven into the cloth on a jacquard loom, rather than printed or embroidered on top. The pattern is raised and lowered into the warp as the fabric is woven, so it is part of the cloth itself.",
      },
      {
        q: "Can I weave my own custom motif?",
        a: "Yes. We offer custom pattern development — from a house motif to a commissioned artwork. Custom jacquard carries a higher minimum (around 200 m) because cutting a new card and setting the loom has to be spread over enough cloth.",
      },
      {
        q: "How is jacquard different from embroidery?",
        a: "Jacquard puts the motif inside the weave — it is formed by the loom as the cloth is woven. Embroidery adds thread to a finished cloth. A buyer specifying one should not be quoted the other.",
      },
      {
        q: "Is your jacquard silk available in colour?",
        a: "Yes. Jacquard luo is supplied greige (undyed) or dyed to order — we offer both a standard shade card and custom colour matching, including multi-colour jacquard where the motif and ground are woven in different colours.",
      },
    ],
  },
  {
    slug: "organic-silk",
    name: "Organic Silk",
    title:
      "Christopher Bu GOTS-Certified Organic Silk Raw Silk & Greige Fabric — ECOCERT GOTS-30270 Yizhou Silk Supplier",
    h1: "GOTS-Certified Organic Silk",
    metaDescription:
      "Source GOTS-certified organic mulberry silk from Yizhou, China — raw silk and greige fabric, certified organic by ECOCERT Greenlife SAS (GOTS-30270). For brands with organic sourcing requirements. B2B bulk supply.",
    introAnswer:
      "We supply GOTS-certified organic mulberry silk — raw silk and greige fabric — certified by ECOCERT Greenlife SAS under GOTS license no. GOTS-30270, valid to October 2027.",
    category: "organic-silk",
    featured: true,
    keywords: [
      "organic silk",
      "GOTS certified silk",
      "organic mulberry silk",
      "organic raw silk",
      "organic silk fabric wholesale",
      "GOTS certified silk supplier",
      "organic silk yarn",
      "eco silk fabric B2B",
      "Yizhou organic silk",
    ],
    body: [
      "Organic silk is mulberry silk grown and processed to the Global Organic Textile Standard (GOTS), which covers every stage from the organic mulberry cultivation through boiling, spinning and weaving to the finished fabric. It is the silk buyers choose when their brand or market requires verifiable organic status — not just a soft sustainability claim, but a certified one.",
      "Our organic silk is certified by ECOCERT Greenlife SAS under GOTS license no. GOTS-30270, valid to October 2027. The scope covers the full silk process — boiling, pre-treatment, spinning and weaving — and the certified products are 100% organic silk: raw silk, greige yarns and greige fabrics.",
      "We supply organic silk both as raw silk (filature silk for your own weaving) and as greige fabric, supplied undyed or dyed to order from a standard shade card or your custom colour. Certification status is confirmed against the current certificate scope before quotation, so you can verify it independently.",
    ],
    image: "/christopherbu-silk/products/organic-silk.webp",
    imageAlt:
      "GOTS-certified organic mulberry silk cocoons and raw silk hanks from Yizhou",
    specs: [
      { label: "Certification", value: "GOTS (Global Organic Textile Standard)" },
      { label: "License no.", value: "GOTS-30270 (ECOCERT Greenlife SAS)" },
      { label: "Validity", value: "To 2027-10-19" },
      { label: "Scope", value: "Boiling, pre-treatment, spinning, weaving" },
      { label: "Organic content", value: "100% organic silk" },
      { label: "Forms", value: "Raw silk (filature silk), greige yarns, greige fabrics" },
      { label: "Finish", value: "Greige (undyed) or dyed to order (standard shade card / custom colour)" },
      { label: "MOQ", value: "By order — contact for quotation" },
    ],
    useCases: [
      "Brands with organic sourcing requirements",
      "Eco-conscious fashion & ateliers",
      "Private-label organic lines",
      "Textile mills weaving organic silk",
    ],
    faq: [
      {
        q: "What is organic silk?",
        a: "Organic silk is mulberry silk grown and processed to the Global Organic Textile Standard (GOTS), covering organic mulberry cultivation and every processing stage from boiling and spinning to weaving. It carries verifiable organic certification rather than a soft sustainability claim.",
      },
      {
        q: "Is your organic silk GOTS certified?",
        a: "Yes. Our organic silk is certified by ECOCERT Greenlife SAS under GOTS license no. GOTS-30270, valid to October 2027. The certified scope covers boiling, pre-treatment, spinning and weaving, with 100% organic silk content.",
      },
      {
        q: "What forms does your organic silk come in?",
        a: "Organic silk is supplied as raw silk (filature silk), greige yarns and greige fabrics. It is available greige (undyed) or dyed to order from a standard shade card or your custom colour.",
      },
      {
        q: "Can I verify the GOTS certification independently?",
        a: "Yes. The certificate number is provided with your quotation so you can verify the certification, scope and validity on the GOTS public database before ordering.",
      },
    ],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
