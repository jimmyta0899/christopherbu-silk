// 产品数据：生丝、坯绸、双宫丝（主推三个，其余品类以后再加）
// 规格为行业通用值占位，上线前与工厂核对真实值
// title 按 6 段公式：品牌背书 + 品类 + 规格 + 场景 + 采购意图 + 产地/贸易条款 + silk fabric supplier

// 生丝三分类子条目（用于 raw-silk 等需要细分类别的产品页）
export type SilkYarnVariant = {
  key: string;
  name: string;
  description: string;
  specs: { label: string; value: string }[];
  image: string;
  imageAlt: string;
};

export type Product = {
  slug: string;
  name: string;
  // SEO/GEO
  title: string;
  h1: string;
  metaDescription: string;
  introAnswer: string; // 40-60 字直接答案（GEO 关键）
  category: "raw-silk" | "greige-fabric" | "dupioni" | "satin" | "jacquard-luo" | "organic-silk" | "georgette" | "pongee" | "stretch-silk" | "blended-silk";
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
  // 可选：生丝纱线分类（仅 raw-silk 类产品需要时提供）
  yarnVariants?: SilkYarnVariant[];
};

export const products: Product[] = [
  {
    slug: "raw-silk",
    name: "Raw Silk Yarn (3 Grades)",
    title:
      "Christopher Bu Raw Silk Yarn 20/22D, Dupion & Luxury Silk — 4A/5A Grades for Weaving & Embroidery | Yizhou Silk Supplier",
    h1: "Raw Silk Yarn: 20/22D, Dupion & Luxury Silk",
    metaDescription:
      "Source raw silk yarn from Yizhou, China in three grades — 20/22D white raw silk, natural dupion silk yarn and 1-ply luxury silk yarn, 4A/5A. For weaving, knitting and embroidery. B2B bulk supply.",
    introAnswer:
      "We supply raw silk yarn in three grades — 20/22 denier white raw silk, natural dupion silk yarn and luxury silk yarn — in 4A and 5A grades, sourced from Yizhou, China, the world's largest raw silk region.",
    category: "raw-silk",
    featured: true,
    keywords: [
      "mulberry raw silk yarn",
      "20/22 denier silk",
      "filature silk supplier",
      "white raw silk 5A 6A",
      "raw silk for weaving",
      "dupion silk yarn",
      "luxury silk yarn",
      "1 ply silk yarn",
      "raw silk yarn export China",
      "Yizhou raw silk supplier",
    ],
    body: [
      "As a Yizhou raw silk supplier, we ship mulberry raw silk yarn — also called filature silk or white raw silk — directly to weaving and knitting mills and textile manufacturers worldwide. We stock three grades of raw silk yarn, so you can source the exact yarn your production needs from a single supplier: 20/22 denier white raw silk, natural dupion silk yarn and luxury silk yarn, in 4A and 5A grades.",
      "Raw silk begins with the Bombyx mori silkworm, which feeds only on mulberry leaves and spins a single continuous filament. Each cocoon is boiled to soften the sericin gum, then carefully unwound into a thread of 600 to 900 metres. Multiple filaments are then twisted together into the strong, even yarn we grade and ship — which is why raw silk is measured in denier (20/22D), not momme like woven cloth.",
      "If you are a fashion designer or brand sourcing raw silk for weaving, hand and evenness are what separate a smooth production run from a costly one. Silk is prized for its high breathability, natural moisture-wicking and surprising strength, with low elasticity and little tendency to pill. Our raw silk yarn export from China is graded to GB/T 1797-2008, with moisture controlled below 11% and packaging sized for containerised, export-ready bales.",
    ],
    image: "/christopherbu-silk/products/raw-silk-20-22d.webp",
    imageAlt:
      "20/22 denier mulberry raw silk yarn in natural white from Yizhou raw silk supplier",
    specs: [
      { label: "Type", value: "Mulberry raw silk yarn (filature silk) — 3 grades" },
      { label: "Grades", value: "20/22D white raw silk · Natural dupion silk yarn · Luxury silk yarn" },
      { label: "Origin", value: "Bombyx mori silkworm, mulberry-fed" },
      { label: "Denier", value: "20/22D (13/15D, 27/29D on request)" },
      { label: "Grade", value: "4A / 5A (majority 5A and above)" },
      { label: "Standard", value: "GB/T 1797-2008" },
      { label: "Color", value: "Natural white or natural dupion; dyed to order from a standard shade card or your custom colour" },
      { label: "Moisture", value: "Max 11%" },
      { label: "Character", value: "Highly breathable, moisture-wicking, strong, low elasticity" },
      { label: "Organic", value: "GOTS-certified organic raw silk available (GOTS-30270)" },
      { label: "Packaging", value: "Export cartons / bales (60 kg per bale typical); luxury silk in 5 kg bundles" },
      { label: "MOQ", value: "By order — contact for quotation" },
    ],
    useCases: [
      "Silk weaving & knitting mills",
      "Textile manufacturers",
      "Embroidery & handloom",
      "Sarees & luxury garments",
      "Home textiles",
      "Luxury brand sourcing teams",
    ],
    faq: [
      {
        q: "What grades of raw silk yarn do you supply?",
        a: "We supply three grades of raw silk yarn from a single source: 20/22 denier white raw silk (the precision-graded workhorse for crepe and satin), natural dupion silk yarn (thick, slubbed and unbleached for textured weaving and interior textiles), and luxury silk yarn (1-ply, 20 denier, selected from the finest batches for statement pieces). All are graded 4A or 5A.",
      },
      {
        q: "What is 20/22D white raw silk yarn?",
        a: "20/22D white raw silk is a precision-graded filature silk measured at the 20–22 denier range for ultimate consistency and fineness. It is the standard for silk crepes and satins — weavers value it for creating intricate patterns without adding bulk, and dyers prize its pure white base for accurate colour matching.",
      },
      {
        q: "What is natural dupion silk yarn?",
        a: "Natural dupion silk yarn is the unbleached, un-dyed form of dupion — left in its natural state with a warm, earthy cocoon tone. It is thick and full of character, with prominent slubs that create a beautiful, random pattern when woven. It is the classic choice for interior textiles such as curtains and lampshades.",
      },
      {
        q: "What is luxury silk yarn?",
        a: "Luxury silk yarn is curated from the finest batches of the silk harvest — every strand selected for exceptional length and brilliant white sheen. It is a 1-ply, 20 denier yarn treated with extra care during spinning to preserve the silk proteins, designed for statement pieces where quality and radiance are the point.",
      },
      {
        q: "How is raw silk made?",
        a: "Raw silk comes from the Bombyx mori silkworm, which feeds on mulberry leaves and spins a single continuous filament. Each cocoon is boiled to soften the sericin gum, then unwound into a thread of 600–900 metres. Several filaments are twisted together into the strong, even yarn that is graded and shipped.",
      },
      {
        q: "What is the difference between denier and momme?",
        a: "Denier measures silk yarn weight — our 20/22D raw silk is 20/22 denier. Momme measures the weight of woven silk fabric (e.g. 19 momme). You use denier when buying yarn, and momme when buying cloth.",
      },
      {
        q: "What are the key properties of mulberry raw silk?",
        a: "Mulberry raw silk is highly breathable and naturally moisture-wicking, with surprising tensile strength, low elasticity and little tendency to pill. These properties make it ideal for warp and weft that must hold tension and take colour evenly.",
      },
      {
        q: "What is the minimum order quantity (MOQ) for raw silk yarn export?",
        a: "Raw silk is sold by weight, not by the meter. MOQ varies by denier and grade — dupion silk yarn is typically quoted at a 10 kg minimum, luxury silk yarn at 5 kg. Contact our B2B team with your target volume for a tailored FOB Qinzhou quotation.",
      },
      {
        q: "Can I get a raw silk yarn sample before bulk ordering?",
        a: "Yes. Order our $25 sample to verify hand, grade and color, or request a raw silk sample — the sample fee is credited against your first bulk order.",
      },
    ],
    yarnVariants: [
      {
        key: "20-22d-white",
        name: "20/22D White Raw Silk Yarn",
        description:
          "A precision-graded filature silk measured at the delicate 20–22 denier range for ultimate consistency and fineness. It is the technical benchmark of modern reeling, with every metre checked for uniformity, and the bright, clean white reflects the high-grade mulberry cocoons it is drawn from. Weavers value this specific denier for its ability to create intricate patterns without adding bulk, and it is the secret ingredient in the world's finest silk crepes — a high-performance yarn for the most demanding weaving, knitting, embroidery and saree projects.",
        specs: [
          { label: "Denier", value: "20/22D" },
          { label: "Grade", value: "4A" },
          { label: "Colour", value: "White (bright, clean)" },
          { label: "Usage", value: "Dress material, embroidery, weaving, knitting, sarees, home textile" },
        ],
        image: "/christopherbu-silk/products/raw-silk-20-22d.webp",
        imageAlt:
          "20/22 denier white mulberry raw silk yarn with bright clean colour for weaving and embroidery",
      },
      {
        key: "natural-dupion",
        name: "Natural Dupion Silk Yarn",
        description:
          "The natural, unbleached and un-dyed state of dupion silk, with a warm, earthy tone that reflects the actual colour of the silk cocoon before processing. It is thick and full of character, with prominent slubs that weave into a beautiful, seemingly random pattern. It is the quintessential choice for interior design — especially curtains and lampshades that need to diffuse light — and its natural hue brings a grounding, organic feel to any room, celebrating the imperfections of the natural world.",
        specs: [
          { label: "Material", value: "Dupion silk yarn (mulberry)" },
          { label: "Count", value: "20" },
          { label: "Colour", value: "Natural (unbleached, un-dyed)" },
          { label: "Usage", value: "Knitting, weaving, interior textiles (curtains, lampshades)" },
          { label: "MOQ", value: "10 kg" },
        ],
        image: "/christopherbu-silk/products/dupion-silk-yarn.webp",
        imageAlt:
          "Natural dupion silk yarn skeins in warm earthy unbleached tone for knitting and interior textiles",
      },
      {
        key: "luxury",
        name: "Luxury Silk Yarn",
        description:
          "Curated from the finest batches of the silk harvest for a superior experience, with every strand selected for exceptional length and brilliant white sheen to ensure a high-gloss result. It is treated with extra care during spinning to preserve the integrity of the delicate silk proteins. This yarn is made for statement pieces — garments meant to be noticed for their sheer quality and radiance — draping with a heavy, liquid-like grace that is the hallmark of true high-end luxury silk.",
        specs: [
          { label: "Ply", value: "1 ply" },
          { label: "Count", value: "20" },
          { label: "Denier", value: "20" },
          { label: "Colour", value: "White" },
          { label: "Usage", value: "Weaving, luxury garments, statement pieces" },
          { label: "Packaging", value: "5 kg bundles" },
          { label: "MOQ", value: "5 kg" },
        ],
        image: "/christopherbu-silk/products/luxury-silk-yarn.webp",
        imageAlt:
          "Luxury silk yarn in brilliant white sheen for high-end weaving and statement garments",
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
      { label: "Type", value: "Greige (undyed) mulberry silk fabric — double crepe (crepe de chine)" },
      { label: "Weave", value: "Crepe de chine, charmeuse, habotai (by request)" },
      { label: "Momme", value: "12 / 16 / 19 / 30 mm" },
      { label: "Weight", value: "≈50–129 g/m² by momme (19mm ≈ 82 g/m²)" },
      { label: "Width", value: "114 cm / 140 cm" },
      { label: "Finish", value: "Greige (undyed) or dyed to order (standard shade card / custom colour)" },
      { label: "Shrinkage", value: "Double crepe up to 10% (pre-shrink recommended)" },
      { label: "Colourfastness", value: "Wash 4; rub dry 4 / wet 3 (ISO 105)" },
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
      "Mulberry silk satin fabric with a high-gloss face and fluid drape, shown in deep red",
    specs: [
      { label: "Type", value: "Mulberry silk satin (crepe-back satin, 5-end weave)" },
      { label: "Momme", value: "12 / 16 / 19 / 22 / 25–30 mm" },
      { label: "Weight", value: "≈52–129 g/m² by momme (19mm ≈ 82 g/m²)" },
      { label: "Width", value: "114 cm / 140 cm" },
      { label: "Finish", value: "Greige (undyed) or dyed to order (standard shade card / custom colour)" },
      { label: "Shrinkage", value: "Satin up to 5%" },
      { label: "Colourfastness", value: "Wash 4; rub dry 4 / wet 3 (ISO 105)" },
      { label: "Character", value: "High-gloss face, matt reverse, fluid drape" },
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
      "Jacquard luo silk fabric with tone-on-tone woven scroll motifs in ivory for couture",
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
  {
    slug: "georgette",
    name: "Georgette Silk",
    title:
      "Christopher Bu Georgette Silk Fabric 8–12mm 114/140cm for Scarves & Flowing Garments — Yizhou Silk Supplier",
    h1: "Georgette Silk for Scarves & Flowing Garments",
    metaDescription:
      "Source georgette silk fabric from Yizhou, China — a sheer, crinkled mulberry silk in 8/12 momme, 114/140 cm. Ideal for scarves, summer wear and flowing dresses. B2B bulk supply.",
    introAnswer:
      "Georgette is a sheer, crinkled mulberry silk with a slight crepe texture and flowing drape, supplied greige or dyed to order for scarves, summer wear and airy garments.",
    category: "georgette",
    featured: true,
    keywords: [
      "georgette silk",
      "georgette silk fabric",
      "silk georgette wholesale",
      "8 momme georgette",
      "12 momme georgette",
      "sheer silk fabric",
      "georgette for scarves",
      "crinkled silk fabric",
      "Yizhou georgette supplier",
    ],
    body: [
      "Georgette is a sheer, lightweight mulberry silk woven from highly twisted yarns, which gives it a subtle crinkle and a soft, flowing drape that floats rather than clings. It is the classic choice for scarves, summer dresses and any garment where airy movement is the point.",
      "We supply georgette silk in 8 and 12 momme, with the 12 momme weight offering more body while keeping the characteristic sheerness. Standard widths are 114 cm and 140 cm.",
      "Like all our silk, georgette is supplied greige for your own colour development, or dyed to order from a standard shade card or your custom colour.",
    ],
    image: "/christopherbu-silk/products/georgette.webp",
    imageAlt:
      "Georgette silk fabric in a sheer, semi-transparent black drape for scarves and flowing garments",
    specs: [
      { label: "Type", value: "Mulberry silk georgette" },
      { label: "Momme", value: "8 / 12 mm" },
      { label: "Weight", value: "≈34–52 g/m²" },
      { label: "Width", value: "114 cm / 140 cm" },
      { label: "Finish", value: "Greige (undyed) or dyed to order (standard shade card / custom colour)" },
      { label: "Character", value: "Sheer, crinkled texture, flowing drape" },
      { label: "MOQ", value: "50–200 m by item — contact for quotation" },
    ],
    useCases: [
      "Scarves & shawls",
      "Summer dresses & blouses",
      "Flowing, airy garments",
    ],
    faq: [
      {
        q: "What is georgette silk used for?",
        a: "Georgette's sheer, crinkled texture and flowing drape make it the standard choice for scarves, summer dresses, blouses and any airy garment where movement matters.",
      },
      {
        q: "What momme weights does your georgette come in?",
        a: "Georgette is supplied in 8 and 12 momme. The 8 momme is the classic sheer weight; 12 momme offers more body while keeping the characteristic sheerness.",
      },
      {
        q: "Is your georgette silk available in colour?",
        a: "Yes. Georgette is supplied greige (undyed) or dyed to order — we offer both a standard shade card and custom colour matching.",
      },
    ],
  },
  {
    slug: "pongee",
    name: "Pongee Silk",
    title:
      "Christopher Bu Pongee Silk Fabric 8–15mm 114cm for Linings & Light Shirts — Yizhou Silk Supplier",
    h1: "Pongee Silk for Linings & Light Shirts",
    metaDescription:
      "Source pongee silk fabric from Yizhou, China — a plain-weave mulberry silk in 8/15 momme, 114 cm, with a crisp, firm hand. Ideal for linings, scarves and light shirts. B2B bulk supply.",
    introAnswer:
      "Pongee is a plain-weave mulberry silk with a crisp, firm hand and a subtle texture, supplied greige or dyed to order for linings, scarves and light shirts.",
    category: "pongee",
    featured: true,
    keywords: [
      "pongee silk",
      "pongee silk fabric",
      "silk pongee wholesale",
      "plain weave silk fabric",
      "silk for linings",
      "8 momme pongee",
      "15 momme pongee",
      "crisp silk fabric",
      "Yizhou pongee supplier",
    ],
    body: [
      "Pongee is a plain-weave mulberry silk with a crisp, slightly firm hand and a fine, even surface. Unlike the liquid drape of satin, pongee holds its shape, which makes it the workhorse silk for linings, scarves and light shirts where structure and durability matter more than lustre.",
      "We supply pongee silk in 8 and 15 momme, in a 114 cm width. The 8 momme is the classic lining weight; 15 momme gives a firmer, more durable fabric for light outerwear and shirts.",
      "Pongee is supplied greige for your own colour development, or dyed to order from a standard shade card or your custom colour.",
    ],
    image: "/christopherbu-silk/products/pongee.webp",
    imageAlt:
      "Pongee silk fabric in a light plain weave with soft pearl sheen for linings and light shirts",
    specs: [
      { label: "Type", value: "Mulberry silk pongee (plain weave)" },
      { label: "Momme", value: "8 / 15 mm" },
      { label: "Width", value: "114 cm" },
      { label: "Finish", value: "Greige (undyed) or dyed to order (standard shade card / custom colour)" },
      { label: "Character", value: "Crisp, firm hand, even surface" },
      { label: "MOQ", value: "50–200 m by item — contact for quotation" },
    ],
    useCases: [
      "Linings",
      "Scarves",
      "Light shirts & blouses",
    ],
    faq: [
      {
        q: "What is pongee silk used for?",
        a: "Pongee's crisp, firm hand makes it ideal for linings, scarves and light shirts — anywhere a silk that holds its shape is preferred over a liquid drape.",
      },
      {
        q: "What weights does your pongee come in?",
        a: "Pongee is supplied in 8 and 15 momme, in a 114 cm width. The 8 momme is the classic lining weight; 15 momme is firmer for shirts and light outerwear.",
      },
      {
        q: "Is your pongee silk available in colour?",
        a: "Yes. Pongee is supplied greige (undyed) or dyed to order — we offer both a standard shade card and custom colour matching.",
      },
    ],
  },
  {
    slug: "stretch-silk",
    name: "Silk Stretch Satin",
    title:
      "Christopher Bu Silk Stretch Satin Fabric 16–19mm 114/140cm Silk-Spandex Satin — Yizhou Silk Supplier",
    h1: "Silk Stretch Satin for Comfort & Fit",
    metaDescription:
      "Source silk stretch satin fabric from Yizhou, China — a satin-weave 90–95% mulberry silk, 5–10% spandex blend in 16–19 momme, 114/140 cm. Luminous satin face with comfort stretch. B2B bulk supply.",
    introAnswer:
      "Silk stretch satin is a satin-weave blend of 90–95% mulberry silk with 5–10% spandex, keeping the luminous satin face while adding stretch and recovery, supplied greige or dyed to order in 16–19 momme.",
    category: "stretch-silk",
    featured: true,
    keywords: [
      "silk stretch satin",
      "stretch satin fabric",
      "silk spandex satin",
      "silk elastane satin",
      "stretch satin for dresses",
      "satin silk with stretch",
      "silk lycra satin",
      "comfort stretch satin",
      "Yizhou stretch satin supplier",
    ],
    body: [
      "Silk stretch satin keeps the luminous, glossy face of satin while adding 5–10% spandex for recovery and ease of movement. The satin weave gives it the liquid sheen and fluid drape of classic silk satin; the spandex forgives the cut, so fitted dresses, slips and occasionwear move with the body instead of against it.",
      "We supply silk stretch satin in 16 to 19 momme, in 114 cm and 140 cm widths. The silk content stays dominant at 90–95% so the fabric reads and wears as satin, with the spandex there only to add stretch and recovery.",
      "Silk stretch satin is supplied greige for your own colour development, or dyed to order from a standard shade card or your custom colour.",
    ],
    image: "/christopherbu-silk/products/stretch-silk.webp",
    imageAlt:
      "Silk stretch satin fabric in a soft knit drape with satin sheen and comfort stretch for fitted dresses",
    specs: [
      { label: "Type", value: "Mulberry silk satin + spandex blend" },
      { label: "Weave", value: "Satin (5-end)" },
      { label: "Composition", value: "90–95% silk, 5–10% spandex" },
      { label: "Momme", value: "16 / 19 mm" },
      { label: "Width", value: "114 cm / 140 cm" },
      { label: "Finish", value: "Greige (undyed) or dyed to order (standard shade card / custom colour)" },
      { label: "Character", value: "Satin face, comfort stretch, good recovery" },
      { label: "MOQ", value: "50–200 m by item — contact for quotation" },
    ],
    useCases: [
      "Fitted dresses",
      "Slips & occasionwear",
      "Blouses & tops",
      "Comfort-driven apparel",
    ],
    faq: [
      {
        q: "What is silk stretch satin?",
        a: "Silk stretch satin is a satin-weave blend of 90–95% mulberry silk and 5–10% spandex, keeping the luminous satin face and fluid drape while adding stretch and recovery for ease of movement.",
      },
      {
        q: "What is the composition of your silk stretch satin?",
        a: "Silk stretch satin is 90–95% mulberry silk and 5–10% spandex. The silk content stays dominant so the fabric reads and wears as satin, with spandex added only for stretch and recovery.",
      },
      {
        q: "Is your silk stretch satin available in colour?",
        a: "Yes. Silk stretch satin is supplied greige (undyed) or dyed to order — we offer both a standard shade card and custom colour matching.",
      },
    ],
  },
  {
    slug: "blended-silk",
    name: "Silk Blend (Silk-Cotton / Silk-Linen)",
    title:
      "Christopher Bu Silk Blend Fabric Silk-Cotton & Silk-Linen 114/140cm — Yizhou Silk Supplier",
    h1: "Silk Blend (Silk-Cotton / Silk-Linen)",
    metaDescription:
      "Source blended silk fabric from Yizhou, China — silk-cotton and silk-linen weaves in 114/140 cm. The comfort of cotton or linen with silk's sheen. Ideal for shirts and summer wear. B2B bulk supply.",
    introAnswer:
      "Blended silk combines mulberry silk with cotton or linen, pairing silk's sheen and softness with the comfort and breathability of natural fibers.",
    category: "blended-silk",
    featured: true,
    keywords: [
      "silk cotton blend fabric",
      "silk linen blend fabric",
      "blended silk fabric",
      "silk cotton fabric wholesale",
      "silk linen fabric wholesale",
      "silk blend for shirts",
      "natural fiber blend silk",
      "breathable silk fabric",
      "Yizhou blended silk supplier",
    ],
    body: [
      "Silk blend pairs mulberry silk with cotton or linen, combining silk's sheen and softness with the breathability and matte comfort of natural fibers. Silk-cotton leans soft and easy-care, while silk-linen adds texture and a cool, crisp hand for warm-weather wear.",
      "The blend ratio sets the character. A 70% cotton / 30% silk blend keeps cotton's breathability at the fore with a subtle silk sheen — ideal for summer blouses and dresses. A 50/50 silk-cotton blend balances softness, lustre and durability for premium shirts and scarves, while higher-silk blends (up to 80% silk) give a lighter, more fluid drape for evening wear and sheer layers.",
      "Both silk and cotton are natural, biodegradable fibers, so silk blends offer a more responsible alternative to synthetic mixes — breathable, temperature-regulating and gentle on the skin, with silk's natural sheen removing the need for chemical shine finishes.",
      "Silk blend is supplied greige for your own colour development, or dyed to order from a standard shade card or your custom colour.",
    ],
    image: "/christopherbu-silk/products/silk-blend.webp",
    imageAlt:
      "Silk blend fabric with a soft matte sheen and fine weave for shirts and summer wear",
    specs: [
      { label: "Type", value: "Mulberry silk blended with cotton or linen" },
      { label: "Blends", value: "Silk-cotton, silk-linen (ratio by specification)" },
      { label: "Silk-cotton ratios", value: "70/30, 50/50, up to 80% silk" },
      { label: "Width", value: "114 cm / 140 cm" },
      { label: "Finish", value: "Greige (undyed) or dyed to order (standard shade card / custom colour)" },
      { label: "Character", value: "Silk sheen with cotton/linen breathability, temperature-regulating" },
      { label: "MOQ", value: "50–200 m by item — contact for quotation" },
    ],
    useCases: [
      "Shirts & blouses",
      "Dresses & skirts",
      "Summer wear",
      "Scarves & accessories",
      "Bedding & home textiles",
    ],
    faq: [
      {
        q: "What is silk blend fabric?",
        a: "Silk blend combines mulberry silk with cotton or linen, pairing silk's sheen and softness with the breathability and matte comfort of natural fibers — silk-cotton for softness and easy care, silk-linen for texture and a cool, crisp hand.",
      },
      {
        q: "What blend ratios do you offer?",
        a: "Common silk-cotton ratios are 70% cotton / 30% silk, 50/50, and higher-silk blends of up to 80% silk. The ratio sets the balance of lustre, drape and breathability, and can be specified to suit your collection.",
      },
      {
        q: "What is silk-cotton fabric used for?",
        a: "Silk-cotton is used across apparel, home textiles and accessories: blouses, dresses, shirts and skirts, scarves and wraps, and high-quality bedding and pillowcases. Higher-cotton blends suit everyday wear, while higher-silk blends suit evening and formal pieces.",
      },
      {
        q: "Is silk blend more sustainable than synthetic blends?",
        a: "Yes. Both silk and cotton are natural, biodegradable fibers, so silk blends reduce reliance on synthetic fibers and decompose more readily. Silk's natural sheen also removes the need for chemical finishing to add shine.",
      },
      {
        q: "Is your silk blend available in colour?",
        a: "Yes. Silk blend is supplied greige (undyed) or dyed to order — we offer both a standard shade card and custom colour matching.",
      },
    ],
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
