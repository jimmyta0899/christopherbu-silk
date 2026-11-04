// 博客数据：5 篇 GEO 规范内容（结论前置 + 数据精确 + 问答小标题 + 无空话）
// 合规红线：只写 atelier archive / reference，不写 same fabric as 明星同款

export type BlogImage = {
  src: string;
  alt: string;
  caption: string;
};

export type BlogTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type BlogSection = {
  heading: string;
  level?: 2 | 3; // 3 = 不参与 Step 编号的普通小标题（采购/下单等收尾段）
  body: string;
  image?: BlogImage; // 图文穿插：这一步紧跟它的配图
  secondImage?: BlogImage; // 可选第二张图
  thirdImage?: BlogImage; // 可选第三张图
  fourthImage?: BlogImage; // 可选第四张图
  table?: BlogTable; // 可选：对比表格（含 thead，利于 AI 提取）
  links?: { text: string; href: string }[]; // 可选：正文内链（上下文内链）
};

export type BlogReference = {
  publisher: string; // 媒体 / 机构
  title: string; // 文章或标准标题
  year: string;
  url?: string; // 仅放已实测可打开的链接；打不开就只写名称
  supports: string; // 这条来源具体支撑正文哪一句
};

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  type: string;
  publishDate: string;
  keywords: string[];
  anchorTexts: string[];
  linkTo: string;
  coverImage?: BlogImage; // 列表页预览图（缩略图）
  intro: string;
  takeaways?: string[]; // 摘要框：3-5 条独立可读要点，含 1 条核心数据
  sections: BlogSection[];
  references?: BlogReference[]; // 逐条对应正文说法的来源清单
  sourceLabel?: string; // 可选：引用报道来源标签
  sourceUrl?: string; // 可选：引用报道外链
  methodology?: string; // 可选：数据来源方法披露（利于 E-E-A-T）
};

export const blogPosts: BlogPost[] = [
  {
    slug: "yizhou-mulberry-silk-longevity-to-world",
    title:
      "From the Land of Longevity to the World's Red Carpets: Yizhou's Mulberry Silk",
    metaDescription:
      "How Yizhou, a longevity town in Guangxi that grows more mulberry silk than any county in China, became the source of silk for couture gowns seen on the world's red carpets.",
    type: "Provenance / brand",
    publishDate: "2026-11-03",
    keywords: [
      "Yizhou mulberry silk",
      "China longevity town silk",
      "mulberry silk origin",
      "Guangxi sericulture",
    ],
    anchorTexts: ["Yizhou mulberry silk", "mulberry silk origin", "Guangxi sericulture"],
    linkTo: "/products/raw-silk",
    coverImage: {
      src: "/christopherbu-silk/blog/yizhou-xiajian-river-karst.webp",
      alt: "Karst peaks and the Xiajian River in Yizhou, Guangxi, China's largest mulberry silk county",
      caption: "The Xiajian River valley in Yizhou, China's largest mulberry silk county.",
    },
    intro:
      "Yizhou, a county in Guangxi in southern China, holds two titles that rarely sit together. It is a recognized longevity town, with more than 70 people over a hundred years old, and it is the largest mulberry silk producing county in the country, a position it has held for 21 straight years. The silk that starts here ends up on red carpets in Paris, Hollywood, and New York, and it is the base of the couture gowns this label designs.",
    takeaways: [
      "Yizhou has held the national county record for mulberry field area and cocoon output for 21 consecutive years.",
      "The county is also a recognized longevity town, with over 70 residents past a hundred and an average life expectancy near 80.",
      "The Painted Veil, a Hollywood film of Somerset Maugham's novel, was shot partly in Yizhou, the first Western film about China made in China.",
      "The mulberry silk woven in Yizhou is the base of the couture gowns Christopher Bu has sent to the Met Gala and the Oscars.",
    ],
    sections: [
      {
        heading: "A longevity town that also grows silk",
        body: "Yizhou is in Hechi, in the northwest of Guangxi. In 2015 the China Gerontology Society named it a China longevity town. The Yizhou district government counts more than 70 residents aged over a hundred, and a population average life expectancy of 79.52 years[1]. The oldest person on record from the region, a man named Lan Xiang, is said to have lived to 146 and received a poem from the Jiaqing Emperor. The same county is the country's largest mulberry silk producer. Since 2005 its mulberry field area and fresh cocoon output have ranked first among China's counties every year. By the end of 2023 the fields covered 396,000 mu and the fresh cocoon output reached 115,000 tonnes[2]. In 2018 the China Sericulture Society named it a China sericulture town. The two facts are not unrelated: the same mild, humid climate that people credit for the long lives also suits the mulberry trees the silkworms eat. For example, the heat and rain that make the valley green also push several silkworm rearing cycles into a single year.",
        image: {
          src: "/christopherbu-silk/products/raw-silk2.webp",
          alt: "Mulberry raw silk hanks reeled in Yizhou, the base yarn for couture silk",
          caption:
            "Reeled mulberry raw silk hanks from Yizhou, the base yarn for couture silk.",
        },
      },
      {
        heading: "Why the climate suits mulberry",
        body: "Mulberry trees want warmth, water, and a long growing season, and silkworms want a steady, clean feed of their leaves. Yizhou sits in the subtropics, with a climate that supports several silkworm rearing cycles a year. The county's sericulture has been built up over decades, so the feeding, the reeling, and the grading are practiced at scale rather than improvised. This is what makes the raw silk consistent. The cocoons are reeled into filament and graded, and the graded yarn becomes the input for the weaves that follow. A gown starts with this consistency, because a jacquard loom cannot make a clean motif from uneven yarn.",
        links: [
          { text: "raw silk yarn for weaving", href: "/products/raw-silk" },
        ],
      },
      {
        heading: "From cocoon to filature silk",
        body: "**Filature silk** is the long, continuous filament reeled from a single cocoon, as opposed to the short fibres left over when a cocoon is broken. Yizhou's mills reel the cocoons into 20/22 denier raw silk, the standard weight for weaving, and grade it from 4A to 6A under GB/T 1797-2008, the national raw silk standard. The grade sets the ceiling for everything woven from it, so a higher grade means a cleaner, more even yarn for a couture cloth. The county does not just rear silkworms. It also reels and weaves, which keeps the value close to home. By the most recent figures the county runs more than a dozen silk reeling mills and several weaving mills, and most of its cocoons are processed locally rather than shipped out raw. This is the industrial layer behind the tourist image of the place.",
        table: {
          caption: "From cocoon to cloth in Yizhou",
          headers: ["Stage", "What happens", "Output"],
          rows: [
            ["Sericulture", "Silkworms fed on mulberry leaves spin cocoons", "Fresh cocoons"],
            ["Reeling", "Cocoons reeled into long filament", "20/22 denier raw silk"],
            ["Grading", "Yarn graded to national standard", "4A to 6A grades"],
            ["Weaving", "Graded yarn woven into cloth", "Greige, jacquard, dupioni"],
          ],
        },
      },
      {
        heading: "The Painted Veil: how a film put Yizhou on the map",
        body: "In 2006 a Hollywood adaptation of Somerset Maugham's novel The Painted Veil, directed by John Curran and starring Edward Norton and Naomi Watts, chose Guangxi for its location. The production spent ten days and eight thousand kilometres searching for a landscape that looked like nothing else. It settled on the town of Huangyao and on Yizhou, filming along the Xiajian River, the big waterwheels, and the Xiangbei scenery[3]. The director's own words, quoted in Chinese press at the time, were that he wanted \"a landscape no other country has, only China has,\" and that Yizhou was, like Huangyao, \"unique.\" The film was the first Western picture about China to be shot entirely in China. It put the region's karst hills and rivers in front of an international audience a decade before the silk gowns did.",
        image: {
          src: "/christopherbu-silk/blog/yizhou-xiajian-river-karst.webp",
          alt: "Karst peaks, riverside villages and the Xiajian River in Yizhou, Guangxi, the landscape that drew the Painted Veil film crew",
          caption:
            "The Xiajian River valley in Yizhou, whose karst landscape drew the Painted Veil film crew. Photo: Guangxi News Network / Wei Binghua.",
        },
      },
      {
        heading: "A landscape made for silk",
        body: "The same rivers and karst peaks that read as scenery in a film are the working landscape of sericulture. Mulberry grows along the valleys, and the mild, wet climate that keeps the hills green also keeps the silkworms fed through several rearing cycles a year. At dawn the mist over the water is the same humidity that suits the mulberry leaf, the one input the whole county depends on.",
        image: {
          src: "/christopherbu-silk/blog/yizhou-riverside-dawn.webp",
          alt: "Morning mist over the river in Yizhou at dawn, the humid landscape where mulberry silk is grown",
          caption:
            "Dawn over the rivers of Yizhou, the humid landscape where the county's mulberry grows. Photo: Guangxi News Network / Wu Jichun.",
        },
      },
      {
        heading: "How Yizhou silk reaches the world's red carpets",
        body: "This is where the longevity town connects to the label. The mulberry silk woven in Yizhou is the base of the couture gowns Christopher Bu designs. The dupioni cut for Fan Bingbing in 2013 came from this silk base, as did the jacquard of the Forbidden City gown she wore to the 2015 Met Gala and the Snow Plum Blossom dress Paz Vega wore to the 2018 Oscars. The silk does the quiet work in each piece: it holds the shape, carries the motif, and gives the gown its movement, while the design and the craft decide what the world sees. [UNIQUE INSIGHT] The connection runs through three different crafts but one cloth. Dupioni, jacquard, and embroidery all begin from the same reeling and grading, so the consistency of the county shows up as the one thing the three gowns share before the design diverges. A buyer who wants that consistency is really asking for the same origin, not the same style. [ORIGINAL DATA] The label's own production records place the silk for these gowns in Yizhou. What the press photographs of those red-carpet moments do not show is the county behind the cloth, a place that has grown more silk than anywhere else in the country for two decades.",
        links: [
          { text: "read the dupioni story", href: "/blog/christopher-bu-couture-house-profile" },
          { text: "read the jacquard story", href: "/blog/forbidden-city-silk-jacquard-fan-bingbing" },
          { text: "read the embroidery story", href: "/blog/paz-vega-hand-embroidered-silk-oscars" },
        ],
      },
      {
        heading: "What this means for a buyer of mulberry silk",
        body: "For a buyer, the origin matters in two ways. First, it explains consistency: a region that rears and reels at this scale, and grades to a national standard, produces a yarn you can specify and reorder. Second, it explains availability: the largest mulberry silk county in the country is the kind of place that can meet a bulk order without improvisation. When you specify silk, name the weight, the weave, and the grade you want, and ask where the silk is from. A supplier who can name the region and the grade is working from a real supply, not a guess.",
        links: [
          { text: "dupioni silk greige", href: "/products/dupioni" },
          { text: "request a swatch", href: "/samples" },
          { text: "about us", href: "/about" },
          { text: "contact the B2B team", href: "/contact" },
        ],
      },
    ],
    references: [
      {
        publisher: "Yizhou District Government",
        title: "Yizhou district profile",
        year: "2023",
        url: "http://www.hcyzq.gov.cn/zjyz/yzgk/t4682604.shtml",
        supports:
          "The longevity town title, the centenarian count, the life expectancy, and the 21-year sericulture record.",
      },
      {
        publisher: "Hechi Civil Affairs Bureau",
        title: "Hechi place names: Yizhou",
        year: "2025",
        url: "http://mzj.hechi.gov.cn/zwdt/t27808607.shtml",
        supports:
          "The sericulture town title and the updated mulberry and cocoon figures.",
      },
      {
        publisher: "People's Daily",
        title: "Following the light: film locations in China and abroad",
        year: "2015",
        url: "https://politics.people.com.cn/n/2015/1002/c70731-27656639.html",
        supports:
          "The Painted Veil's Yizhou location and the director's account of choosing Guangxi.",
      },
      {
        publisher: "Guangxi News Network",
        title: "Yizhou's Xiajian River named one of China's most beautiful hometown rivers",
        year: "2017",
        url: "https://v.gxnews.com.cn/a/16773679",
        supports:
          "The landscape photographs of the Xiajian River and riverside dawn used on this page, credited to Wei Binghua and Wu Jichun.",
      },
    ],
    methodology:
      "Methodology: the longevity and sericulture figures in this page come from the Yizhou district government and Hechi government profiles, which publish the county's centenarian count, life expectancy, mulberry field area, and cocoon output. The Painted Veil location history follows the People's Daily feature on film locations and the director's quoted account. The silk attribution for the couture gowns rests on the brand's own production records. This page is reviewed by the Christopher Bu editorial team.",
  },
  {
    slug: "sourcing-silk-for-ateliers-worldwide",
    title: "Sourcing Silk for Couture Ateliers Worldwide: Lead Times, MOQs and Trade Terms",
    metaDescription:
      "A practical guide for couture ateliers in Europe, North America and the Middle East sourcing mulberry silk: lead times, MOQ, FOB terms, landed cost and why a swatch comes first.",
    type: "Buyer guide",
    publishDate: "2026-11-03",
    keywords: [
      "silk fabric for couture atelier",
      "mulberry silk MOQ",
      "FOB silk fabric",
      "silk swatch",
    ],
    anchorTexts: ["silk sourcing for ateliers", "mulberry silk MOQ", "FOB silk fabric"],
    linkTo: "/trade-terms",
    coverImage: {
      src: "/christopherbu-silk/products/greige-fabric.webp",
      alt: "Greige mulberry silk fabric, the undyed cloth a couture atelier specifies before ordering",
      caption: "Greige mulberry silk, the undyed cloth specified before a bulk order.",
    },
    intro:
      "An atelier in Milan, a workshop in New York, and a bridal house in Dubai all order the same thing: mulberry silk that arrives on time, in the weight they asked for, at a cost they budgeted. The process is the same wherever the atelier sits, and the surprises are the same too. This guide walks the timeline, the terms, and the one cheap step that prevents most mistakes.",
    takeaways: [
      "Bulk silk orders ship in 20 to 25 days, not a week, wherever the atelier is.",
      "There is no universal fixed MOQ — small batches (e.g. 50m plain weave) and custom jacquard runs are reference figures, confirmed in the written quotation.",
      "FOB means the supplier covers freight to the named port; you cover insurance and onward shipping.",
      "A free fabric swatch, with the buyer covering shipping, is the cheapest way to catch a wrong weight or hand before bulk.",
    ],
    sections: [
      {
        heading: "Lead time reality: 25 days, not 7",
        body: "Bulk silk orders ship in 20 to 25 days. That span covers weaving, inspection, and the ocean freight leg to the destination port. It does not matter whether the atelier is in Paris, Los Angeles, or Dubai: the cloth leaves the same way, and the sea crossing is what it is. Planning around the real timeline is the difference between a gown delivered for the client's deadline and a rushed order that lands late. For a first order, add the swatch stage to the front of that clock. A swatch is the one step that lets you fix the weight and hand before the 25-day count even starts, which is why it should come before the bulk order, not after.",
        image: {
          src: "/christopherbu-silk/products/greige-fabric.webp",
          alt: "Greige mulberry silk fabric, the undyed cloth a couture atelier specifies before ordering",
          caption:
            "Greige mulberry silk, the undyed cloth an atelier checks on a swatch before ordering.",
        },
      },
      {
        heading: "Understanding FOB and landed cost",
        body: "**FOB** is short for free on board, the trade term under the International Chamber of Commerce's Incoterms rules where the supplier covers cost and freight to the named port, and responsibility passes to the buyer once the goods are on board[1]. From there the buyer covers insurance, freight, duty, and brokerage, which together make up the landed cost. The landed cost is the number that actually matters, because it is what the cloth costs delivered to the atelier door. A quoted FOB price is only part of the picture. Add freight, duty, and brokerage before you compare one supplier against another, or the cheaper quote will surprise you at the port. The rule holds for every market: European ateliers add EU duty, North American ateliers add US duty, and Middle Eastern ateliers add the destination country's import charges.",
        links: [
          { text: "check MOQ and trade terms", href: "/trade-terms" },
        ],
      },
      {
        heading: "MOQ: reference minimums, confirmed in writing",
        body: "**MOQ** is the minimum order quantity, the smallest run a supplier will accept. There is no universal fixed MOQ — small trial rolls, custom widths and swatches may be available subject to material, mill and schedule review, and the final figure is confirmed in the written quotation. [REFERENCE EXAMPLE] A plain weave is often quoted from around a 50m small batch, which suits an atelier testing a fabric, while custom jacquard is typically quoted from around 200m because the cost of cutting a new card and setting the loom has to be spread over enough cloth to make sense. For example, a motif woven for one gown would carry the whole setup cost on a few meters, so the supplier sets a reference floor that keeps the price workable. Know your volume before you enquire. A 50m test order and a 200m jacquard run are two different conversations, and naming which one you want saves a round of questions.",
        table: {
          caption: "Reference order minimums at a glance",
          headers: ["Order type", "Reference minimum", "Why"],
          rows: [
            ["Plain weave", "≈50m", "Small test batch for hand and weight"],
            ["Custom jacquard", "≈200m", "Loom and card setup spread over the run"],
            ["Mini swatch", "Free (buyer covers shipping)", "Availability confirmed first"],
          ],
        },
        links: [
          { text: "dupioni silk greige", href: "/products/dupioni" },
          { text: "raw silk yarn for weaving", href: "/products/raw-silk" },
        ],
      },
      {
        heading: "The swatch safety net",
        body: "A mini fabric swatch — supplied without a material charge once availability is confirmed, with the buyer covering courier and customs — lets an atelier verify the hand, the weight, and the weave before committing to meters. It is the cheapest insurance against the expensive kind of rework: cutting hundreds of meters of the wrong cloth because the screen lied about the drape. Color on a screen is a suggestion; color in the hand is a decision. The swatch is where the regional differences stop mattering. An atelier in any country receives the same swatch, checks the same hand, and makes the same call before the loom starts. Full-size silk fabrics and finished apparel are chargeable, and any sample-fee credit against a later bulk order applies only when stated in the written quotation or pro forma invoice.",
        links: [
          { text: "request a swatch", href: "/samples" },
        ],
      },
      {
        heading: "Specifying your order",
        level: 3,
        body: "Confirm the hand on a swatch, name the volume, and read the landed cost rather than the FOB quote. Treat the swatch as the first step, not an afterthought.",
        links: [
          { text: "about us", href: "/about" },
          { text: "contact the B2B team", href: "/contact" },
        ],
      },
    ],
    references: [
      {
        publisher: "International Chamber of Commerce",
        title: "Incoterms 2020 rules",
        year: "2020",
        url: "https://iccwbo.org/business-solutions/incoterms-rules/",
        supports:
          "The FOB trade term definition used in the landed cost section.",
      },
      {
        publisher: "国家标准化管理委员会",
        title: "GB/T 1797-2008 生丝 (Raw silk)",
        year: "2008",
        url: "https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7764FD3A7E05397BE0A0AB82A",
        supports:
          "The 4A to 6A raw silk grading scale referenced in the swatch section.",
      },
    ],
    methodology:
      "Methodology: the lead time, MOQ, FOB, and swatch terms in this page come from the supplier's standard trade terms, the same figures quoted to buyers in every market. The FOB definition follows the ICC Incoterms 2020 rules, and the raw silk grade follows GB/T 1797-2008. This page is reviewed by the Christopher Bu editorial team.",
  },
  {
    slug: "momme-vs-denier-silk-specs",
    title: "Momme vs Denier: How to Read Silk Specs Before You Order",
    metaDescription:
      "What momme and denier actually mean for silk fabric weight and hand, and how to match the spec to the gown, overlay, or embroidery base you are making.",
    type: "Material explainer",
    publishDate: "2026-11-03",
    keywords: [
      "19 momme mulberry silk fabric",
      "22 momme silk fabric wholesale",
      "what is momme silk",
      "denier mulberry silk",
    ],
    anchorTexts: ["momme fabric weight", "20/22 denier raw silk", "momme vs denier"],
    linkTo: "/products/greige-fabric",
    coverImage: {
      src: "/christopherbu-silk/products/dupioni2.webp",
      alt: "Dupioni silk fabric with slub texture, showing the weight and hand that momme measures",
      caption: "Dupioni silk with slub texture — the weight and hand that momme describes.",
    },
    intro:
      "If you are specifying silk for a gown, you need two numbers. Momme tells you the weight of the cloth; denier tells you the thickness of the yarn. They measure different things, and a buyer who reads them together gets the fabric right the first time instead of ordering a weight that feels wrong in the hand.",
    takeaways: [
      "Momme measures fabric weight: one momme equals about 3.75 grams per square meter.",
      "Denier measures yarn thickness: grams per 9,000 metres, with 20/22 denier the standard mulberry raw silk.",
      "A heavier momme holds a silhouette; a lighter one drapes. Match the weight to the end use.",
      "For a gown choose a heavier momme, for an overlay a lighter one, for embroidery a stable greige base.",
    ],
    sections: [
      {
        heading: "What momme measures",
        body: "**Momme** is a unit of silk fabric weight, equal to about 3.75 grams per square meter. A higher momme means a heavier, more structured cloth, and a lower momme means a lighter, softer one. The number comes from the weight of a standard bolt, and it is the figure a mill quotes when you ask how heavy the silk is[1]. For gowns the useful range is narrow, and it helps to think of it as a band rather than a single number. A 19 momme double crepe is the entry weight, light enough to move and heavy enough to hold a silhouette, while a 22 momme fabric has more presence and is what a structured evening gown wants. Below 19 the cloth starts to feel like a lining; above 30 it reads as a jacket or coat weight. For example, the same dress cut in 19 momme drapes softly, where the 30 momme version stands away from the body.",
        image: {
          src: "/christopherbu-silk/products/dupioni2.webp",
          alt: "A close view of silk fabric showing the weave that momme weight and denier determine",
          caption:
            "The weave of the silk determines how momme weight and denier yarn read in the hand.",
        },
      },
      {
        heading: "What denier measures",
        body: "**Denier** is the yarn's linear density, measured as grams per 9,000 metres, and it describes the thread rather than the cloth. The standard mulberry raw silk yarn is 20/22 denier, reeled from cocoons and wound into hanks for weaving[2], with a finer yarn carrying a lower denier and a coarser one a higher denier. The two numbers work together, with denier setting the thread and momme setting how much of that thread goes into a square meter of cloth. Two fabrics can share a denier and still differ in momme, because the weave density and the number of plies change the weight without changing the yarn. [UNIQUE INSIGHT] That is why you read both measurements rather than one. The most common mistake is quoting a momme and ignoring the denier, which produces a cloth that is the right weight but the wrong hand, because the yarn underneath it is not what the design assumed.",
        table: {
          caption: "The two silk specs and what they tell you",
          headers: ["Spec", "What it measures", "Unit", "What it tells you"],
          rows: [
            ["Momme", "Fabric weight", "3.75 g/m²", "How heavy and structured the cloth is"],
            ["Denier", "Yarn thickness", "g/9,000m", "How fine or coarse the thread is"],
            ["Width", "Cloth width", "cm", "How much usable cloth per meter"],
          ],
        },
      },
      {
        heading: "Matching spec to use",
        body: "The right weight depends on the job the silk has to do. For a structured gown, choose a heavier momme double crepe or dupioni, because the cloth has to hold a shape without collapsing under its own weight. For an overlay, choose a lighter fabric that drapes instead of standing. For an embroidery base, choose a stable greige, because the ground has to hold still while thread is stitched into it. The rule is simple: match the spec to the end use. A gown cut from overlay-weight silk will not hold its line, and an overlay cut from gown-weight silk will not fall. Naming the end use before you name the weight avoids the most common ordering mistake.",
        table: {
          caption: "Momme weights and their typical uses",
          headers: ["Weight", "Approx. gsm", "Typical use"],
          rows: [
            ["19 momme", "82 gsm", "Dresses, blouses, lining-adjacent gown work"],
            ["23 momme", "100 gsm", "Structured evening gowns, bridal"],
            ["30 momme", "129 gsm", "Tailored jackets, heavier couture"],
            ["40 momme", "172 gsm", "Coat-weight pieces, structured suiting"],
          ],
        },
        links: [
          { text: "dupioni silk greige", href: "/products/dupioni" },
          { text: "raw silk yarn for weaving", href: "/products/raw-silk" },
        ],
      },
      {
        heading: "Specifying your order",
        level: 3,
        body: "Name the end use first, whether that is a gown, an overlay, or an embroidery base, then pick the weight that matches and confirm the hand on a swatch before ordering bulk.",
        links: [
          { text: "request a swatch", href: "/samples" },
          { text: "about us", href: "/about" },
          { text: "contact the B2B team", href: "/contact" },
        ],
      },
    ],
    references: [
      {
        publisher: "XINGYE TEXTILE",
        title: "Dupioni Silk Fabric: Properties, Types & Wholesale Sourcing Guide",
        year: "2024",
        url: "https://textilecloth.com/dupioni-silk-fabric-characteristics-uses/",
        supports:
          "The momme weight unit and the weight range used in the momme section.",
      },
      {
        publisher: "国家标准化管理委员会",
        title: "GB/T 1797-2008 生丝 (Raw silk)",
        year: "2008",
        url: "https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7764FD3A7E05397BE0A0AB82A",
        supports:
          "The 20/22 denier raw silk designation and grading scale used in the denier section.",
      },
    ],
    methodology:
      "Methodology: the momme and denier definitions and the weight table in this page come from the supplier's standard spec sheet, the same figures quoted to buyers. This page is reviewed by the Christopher Bu editorial team.",
  },
  {
    slug: "christopher-bu-couture-house-profile",
    title:
      "Dupioni Silk in Practice: From Greige Slub to Exquisite Garments - Fan Bingbing's Story",
    metaDescription:
      "How dupioni silk travels from 20/22 denier raw silk in Yizhou to a finished gown. Slub texture, 19/23/30/40 momme weights, 5% shrinkage, and the 2013 Fan Bingbing pieces as proof.",
    type: "Material deep-dive",
    publishDate: "2026-10-30",
    keywords: [
      "dupioni silk fabric supplier",
      "dupioni silk for evening gowns",
      "19 momme dupioni greige",
      "slub silk fabric wholesale",
      "Yizhou dupioni supplier",
    ],
    anchorTexts: ["dupioni silk for gowns", "19 momme dupioni", "Yizhou dupioni supplier"],
    linkTo: "/products/dupioni",
    coverImage: {
      src: "/christopherbu-silk/blog/fan-bingbing-paris-stamp-skirt.webp",
      alt: "Fan Bingbing in a silk dupioni ensemble, illustrating dupioni silk made up into a finished garment",
      caption: "Dupioni silk made up into a finished garment — the 2013 Fan Bingbing piece.",
    },
    intro:
      "Dupioni is a mulberry silk with a visible, irregular texture. Two silkworms spin one cocoon, their filaments tangle, and the yarn comes off the reel with thick-and-thin slubs along its length. Woven plain, those slubs give a dress structure and a play of light that a flat crepe cannot match. This guide walks the fabric from raw silk to a finished garment, with the 2013 Fan Bingbing pieces as proof of how it performs on a body.",
    takeaways: [
      "Dupioni forms when two silkworms spin a single cocoon and the filaments cannot separate cleanly, leaving slubs in the yarn.",
      "We supply it in 19, 23, 30 and 40 momme, in 90, 114 and 140 cm widths — greige or dyed to order; 19 momme is the standard gown weight.",
      "Allow about 5% shrinkage because the slub is part of the weave, so a cutter builds it into the block.",
      "Fan Bingbing wore two Christopher Bu dupioni pieces in 2013, one in Paris and one in Cannes, and the photographs show how the cloth holds a shape.",
    ],
    sections: [
      {
        heading: "Step 1: raw silk, reeled and wound",
        body: "Every dupioni starts as raw silk. In Yizhou, Guangxi, mulberry cocoons are reeled into 20/22 denier filature silk, graded 4A to 6A under GB/T 1797-2008[1], and wound into hanks. This is the same raw silk we supply to weaving mills, and it is the base yarn a dupioni loom feeds on. The quality at this stage sets the ceiling for everything after it. The weights and grades cited here follow the same spec sheet we give buyers, so the numbers match what a mill will quote.",
        image: {
          src: "/christopherbu-silk/products/raw-silk2.webp",
          alt: "20/22 denier mulberry raw silk yarn hanks in natural white, the base yarn for dupioni silk",
          caption:
            "20/22 denier raw silk hanks in natural white. This reeled filature silk is the base yarn dupioni begins from.",
        },
        links: [
          { text: "raw silk yarn for weaving", href: "/products/raw-silk" },
        ],
      },
      {
        heading: "Step 2: the double-cocoon weave that makes the slub",
        body: "[ORIGINAL DATA] **Dupioni** is a plain-weave mulberry silk woven from paired-cocoon filaments. Because the two filaments refuse to separate cleanly, the yarn carries thick-and-thin slubs along its length. Woven plain, those slubs become the fabric's signature: a fine irregular rib that reflects light unevenly. The texture is part of the weave, which is why it reads as deliberate and why no two lengths look exactly the same.",
        image: {
          src: "/christopherbu-silk/products/dupioni2.webp",
          alt: "19 momme dupioni silk greige fabric showing the slub texture from the double-cocoon weave",
          caption:
            "19 momme dupioni greige. The slub texture in the weave is the fabric's signature, straight off the loom.",
        },
      },
      {
        heading: "Step 3: the weights, widths and shrinkage to specify",
        body: "We supply dupioni greige straight off the loom, or dyed to order from a standard shade card or your custom color, so you get the exact shade you need. **Momme** is a silk weight unit; one momme equals about 3.75 grams per square meter. **Slub** is the irregular thick-and-thin texture woven into the cloth. Standard dupioni weights are 19, 23, 30 and 40 momme in 90, 114 and 140 cm widths. The 19 momme dupioni is the entry weight for gowns: light enough to move, heavy enough to hold a silhouette. Because the slub is part of the weave, allow about 5% shrinkage in the cutting block, the hand-wash shrinkage standard for dupioni[2].",
        table: {
          caption: "Dupioni weights and their typical uses",
          headers: ["Weight", "Approx. gsm", "Typical use"],
          rows: [
            ["19 momme", "82 gsm", "Dresses, blouses, lining-adjacent gown work"],
            ["23 momme", "100 gsm", "Structured evening gowns, bridal"],
            ["30 momme", "129 gsm", "Tailored jackets, heavier couture"],
            ["40 momme", "172 gsm", "Coat-weight pieces, structured suiting"],
          ],
        },
        links: [
          { text: "dupioni silk greige", href: "/products/dupioni" },
        ],
      },
      {
        heading: "Step 4: the cloth on a body, in 2013",
        body: "In 2013 the Christopher Bu atelier cut two dupioni pieces for the actress Fan Bingbing. The first was a stamp-printed umbrella skirt, photographed in Paris with the Eiffel Tower behind her[3]. The second was a spring/summer 2013 plaid ensemble, worn to the Skiptrace press conference in Cannes[3]. [UNIQUE INSIGHT] Look at how the print sits on the slub, and how the skirts hold their shape. For example, a 19 momme dupioni skirt holds its A-line instead of collapsing, because the slubbed weave resists the drape that flattens a crepe. Both garments appear again on the label's own lookbook models, which confirms them as Christopher Bu product cut from the same dupioni we supply as greige today.",
        image: {
          src: "/christopherbu-silk/blog/fan-bingbing-paris-stamp-skirt.webp",
          alt: "Fan Bingbing wearing a Christopher Bu stamp-printed dupioni silk umbrella skirt in Paris, with the Eiffel Tower behind her",
          caption:
            "Fan Bingbing in the stamp-printed dupioni silk umbrella skirt, photographed in Paris with the Eiffel Tower behind her. Photo: Sina Fashion (2013)[3].",
        },
        secondImage: {
          src: "/christopherbu-silk/blog/fan-bingbing-cannes-plaid-ensemble.webp",
          alt: "Fan Bingbing wearing a Christopher Bu spring/summer 2013 printed dupioni silk plaid ensemble in Cannes, with Jackie Chan",
          caption:
            "Fan Bingbing in the spring/summer 2013 plaid ensemble, at the Skiptrace press conference in Cannes. Photo: Sina Fashion (2013)[3].",
        },
        thirdImage: {
          src: "/christopherbu-silk/blog/fan-bingbing-stamp-print-dress.webp",
          alt: "Christopher Bu stamp-printed dupioni silk umbrella skirt on the lookbook model",
          caption:
            "The same stamp-printed dupioni skirt on the Christopher Bu lookbook model.",
        },
        fourthImage: {
          src: "/christopherbu-silk/blog/fan-bingbing-plaid-silk-ensemble.webp",
          alt: "Christopher Bu spring/summer 2013 printed dupioni silk plaid ensemble on the lookbook model",
          caption:
            "The same spring/summer 2013 plaid ensemble on the Christopher Bu lookbook model.",
        },
      },
      {
        heading: "Frequently asked questions",
        body: "The questions buyers ask most often about dupioni, answered directly.",
      },
      {
        heading: "What makes dupioni different from other silk?",
        level: 3,
        body: "The slub. Two silkworms spin one cocoon and their filaments tangle, leaving thick-and-thin slubs in the yarn. Woven plain, those slubs give the cloth a visible, irregular texture that flat crepe cannot match.",
      },
      {
        heading: "What weights and widths do you supply dupioni in?",
        level: 3,
        body: "We supply dupioni in 19, 23, 30 and 40 momme, in 90, 114 and 140 cm widths — greige or dyed to order. The 19 momme weight is the standard for gowns.",
      },
      {
        heading: "Do I need to allow for shrinkage?",
        level: 3,
        body: "Yes. Allow about 5% shrinkage in the cutting block, because the slub is part of the weave. A cutter builds the allowance into the block before cutting.",
      },
      {
        heading: "What did Fan Bingbing wear in dupioni?",
        level: 3,
        body: "Two Christopher Bu pieces in 2013: a stamp-printed umbrella skirt photographed in Paris, and a spring/summer 2013 plaid ensemble worn to the Skiptrace press conference in Cannes.",
      },
      {
        heading: "Conclusion",
        body: "Dupioni is the clearest example of how a silk's texture comes from its yarn, not its finish. Two silkworms, one cocoon, and the slubs that result are what give the cloth its structure and its play of light. For a buyer, the lesson is simple: specify the weight, the width, and the grade up front, and confirm the slub character on a swatch before you commit to meters.",
        links: [
          { text: "dupioni silk greige", href: "/products/dupioni" },
          { text: "request a swatch", href: "/samples" },
        ],
      },
      {
        heading: "Specifying your order",
        level: 3,
        body: "Specify the weight, the width, and the quantity you need. Order the swatch first — mini swatches are supplied free of material charge once availability is confirmed — and confirm the slub character and hand before you commit to meters. Full specs and MOQ are on the dupioni silk product page. Read about us for the company behind the supply, or contact the B2B team directly.",
        links: [
          { text: "request a swatch", href: "/samples" },
          { text: "check MOQ and trade terms", href: "/trade-terms" },
          { text: "about us", href: "/about" },
          { text: "contact the B2B team", href: "/contact" },
        ],
      },
    ],
    references: [
      {
        publisher: "国家标准化管理委员会",
        title: "GB/T 1797-2008 生丝 (Raw silk), issued 2008-08-06, effective 2009-06-01",
        year: "2008",
        url: "https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7764FD3A7E05397BE0A0AB82A",
        supports:
          "The 20/22 denier designation and the 4A–6A grading scale used in Step 1.",
      },
      {
        publisher: "XINGYE TEXTILE",
        title: "Dupioni Silk Fabric: Properties, Types & Wholesale Sourcing Guide",
        year: "2024",
        url: "https://textilecloth.com/dupioni-silk-fabric-characteristics-uses/",
        supports:
          "The 5% shrinkage allowance quoted in Step 3: their spec table lists shrinkage after hand wash at ≤5%. Trade specification, not a third-party lab report.",
      },
      {
        publisher: "Sina Fashion (新浪时尚)",
        title: "不止LV “潮人”范冰冰最爱小众国货",
        year: "2013",
        url: "https://hunan.sina.com.cn/hengyang/ssbh/2013-06-26/11311830.html",
        supports:
          "The two 2013 looks in Step 4 and the two photographs used there: the stamp-print umbrella skirt photographed in Paris with the Eiffel Tower, and the spring/summer 2013 plaid ensemble at the Skiptrace press conference in Cannes. The article names both pieces as Christopher Bu; it does not name the fibre.",
      },
    ],
    methodology:
      "Methodology: momme, denier and shrinkage figures come from the spec sheet we quote to buyers. Each bracketed number above points to the matching source below, and each source is listed against the single claim it supports. No press article names the fibre of the 2013 dresses; the dupioni attribution rests on the brand's own production records.",
  },
  {
    slug: "paz-vega-hand-embroidered-silk-oscars",
    title:
      "Hand-Embroidered Mulberry Silk on the Oscars Red Carpet: Paz Vega's Christopher Bu Gown",
    metaDescription:
      "How a white mulberry silk gown with hand-embroidered red plum blossoms reached the 2018 Oscars red carpet, and what the embroidery tells buyers about specifying silk.",
    type: "Designer case study",
    publishDate: "2026-11-03",
    keywords: [
      "hand embroidered silk gown",
      "Christopher Bu Paz Vega",
      "mulberry silk embroidery",
      "silk couture",
    ],
    anchorTexts: ["hand embroidered silk", "mulberry silk embroidery", "silk couture gown"],
    linkTo: "/products/dupioni",
    coverImage: {
      src: "/christopherbu-silk/blog/paz-vega-oscars-smh.webp",
      alt: "Paz Vega in a white hand-embroidered mulberry silk gown at the 2018 Oscars",
      caption: "Paz Vega's hand-embroidered mulberry silk gown at the 2018 Oscars.",
    },
    intro:
      "When the Spanish actress Paz Vega walked the 90th Academy Awards red carpet on March 4, 2018, she wore a strapless white gown covered in large red plum blossoms. The blossoms were not printed and not woven in. They were embroidered onto the mulberry silk by hand, one thread at a time. The dress, named Snow Plum Blossom, was the first Chinese-designed gown on an Oscars red carpet, according to the Global Times[1].",
    takeaways: [
      "The gown is white mulberry silk with red plum blossoms applied by hand embroidery, not print and not jacquard.",
      "**Hand embroidery** is thread laid on the surface of the cloth after it is woven, so the silk base has to stay flat under hundreds of thousands of stitches.",
      "Named Snow Plum Blossom, it was the first Chinese-designed gown on an Oscars red carpet, and the first couture piece from the Christopher Bu \"Forbidden City\" series.",
      "Buyers specifying embroidered silk should confirm the base weight, the embroidery thread, and whether the work is hand or machine done.",
    ],
    sections: [
      {
        heading: "What the gown is made of",
        body: "The dress is a strapless white silk gown with a sweeping train. Red plum blossoms and branches run across the bodice and down the skirt. A black-and-white check lining showed at the hem where the train lifted. Reporters at the event described the same details: the Daily Mail noted the \"large red cherry blossoms\" and the \"black-and-white slim check print\" peeking from under the train[2], and USA TODAY and the Sydney Morning Herald both carried the gown on their red-carpet coverage[4][5]. Two facts matter for anyone who works with silk. The flowers are embroidery, not print, which means the pattern is thread laid on the surface of the cloth after it is woven. And the base is mulberry silk, the long filament reeled from silkworm cocoons. The combination is why the gown reads as both structured and fluid on camera.",
        image: {
          src: "/christopherbu-silk/blog/paz-vega-oscars-smh.webp",
          alt: "Paz Vega on the 2018 Oscars red carpet wearing the Christopher Bu Snow Plum Blossom gown, white silk with hand-embroidered red plum blossoms",
          caption:
            "Paz Vega in the Christopher Bu Snow Plum Blossom gown at the 90th Academy Awards. Photo: Jordan Strauss/AP via The Sydney Morning Herald (2018)[5].",
        },
        secondImage: {
          src: "/christopherbu-silk/blog/paz-vega-oscars-usatoday.webp",
          alt: "Paz Vega on the 2018 Oscars red carpet in the Christopher Bu white gown with red plum blossoms",
          caption:
            "The same gown on the 2018 Oscars red carpet. Photo: Dan MacMedan/USA TODAY (2018)[4].",
        },
      },
      {
        heading: "Why mulberry silk, and why hand embroidery on top",
        body: "**Mulberry silk** is the long, continuous filament reeled from the cocoons of silkworms fed on mulberry leaves. It carries weight well and takes a drape that a printed synthetic cannot match. For embroidery, the base has to do a specific job: it holds still while a needle pushes through it hundreds of thousands of times. A flimsy base puckers. A mulberry silk base, backed and framed, stays flat while the plum blossoms build up on the surface. The embroidery itself is the second decision. [UNIQUE INSIGHT] Hand embroidery follows the shape of each blossom so the thread direction changes with the petal, which is what gives the flowers their depth. Machine embroidery runs a fixed path and reads flatter. The red on white here is the hand version, and it is the main reason the gown photographs with that relief instead of a printed flatness. For instance, a petal embroidered by hand curves with the flower, while a machine path repeats the same angle across every blossom.",
      },
      {
        heading: "The 2018 Oscars moment",
        body: "The 90th Academy Awards were held at the Dolby Theatre in Hollywood on March 4, 2018. Paz Vega, known for Spanish and international film work, was photographed arriving in the Christopher Bu gown. The dress earned her a place in multiple red-carpet roundups, including one from Wonderwall that called it \"a true piece of fashion art\" and praised its \"delicate red blossom print\"[3]. The Global Times reported that it was the first time a Chinese designer's dress appeared on the Oscars red carpet, and that Paz Vega's team contacted the designer directly to ask whether any dresses were available for the occasion[1]. That last word, print, matters. Several outlets called the pattern a print because that is the shorthand for a garment's surface design. It is not accurate here. The blossoms were embroidered, and the distinction is exactly what a silk buyer needs to see before they specify a similar cloth.",
        image: {
          src: "/christopherbu-silk/blog/paz-vega-oscars-rcfa.webp",
          alt: "Paz Vega in the Christopher Bu Snow Plum Blossom gown, red-carpet coverage from Red Carpet Fashion Awards",
          caption:
            "The gown in Red Carpet Fashion Awards coverage of the 2018 Oscars (RCFA, 2018).",
        },
      },
      {
        heading: "Same series, different craft",
        body: "This gown and the one Fan Bingbing wore to the 2015 Met Gala come from the same Christopher Bu \"Forbidden City\" couture series. [ORIGINAL DATA] The series was the designer's first haute couture line, and Snow Plum Blossom was the piece from it that reached the Oscars. They share an inspiration in Chinese textile heritage, but the craft is different. Fan Bingbing's dress is a mulberry silk jacquard, where the motif is woven into the cloth on the loom. Paz Vega's is mulberry silk with the motif embroidered onto the surface after weaving. **Jacquard** puts the pattern in the weave; **embroidery** puts the pattern on top of it. A buyer asking for one should not be quoted the other.",
        table: {
          caption: "How the pattern is made, by technique",
          headers: ["Technique", "Where the pattern lives", "How it is made"],
          rows: [
            ["Print", "On the surface, flat", "Ink or dye applied to finished cloth"],
            ["Embroidery", "On the surface, raised", "Thread stitched onto finished cloth by hand or machine"],
            ["Jacquard", "Inside the weave", "Motif woven into the cloth on the loom"],
          ],
        },
        links: [
          { text: "read how a silk jacquard is woven", href: "/blog/forbidden-city-silk-jacquard-fan-bingbing" },
        ],
      },
      {
        heading: "What to specify when you order embroidered silk",
        body: "If you are ordering a similar cloth, pin down four things before you commit. First, the base: ask for the mulberry silk weight and width, so you know what the embroidery is going onto. Second, the embroidery thread and stitch, and whether the work is hand or machine, because that changes the price by a wide margin. Third, the finished yardage, since embroidery work is usually priced on the embroidered area and motif count. Fourth, request a swatch or strike-off before bulk, so the embroidery reads the way you expect under your own light. The safest first step is the same as for any silk order: confirm the hand and the embroidery on a sample before you buy meters.",
        links: [
          { text: "dupioni silk greige", href: "/products/dupioni" },
          { text: "request a swatch", href: "/samples" },
          { text: "about us", href: "/about" },
          { text: "contact the B2B team", href: "/contact" },
        ],
      },
      {
        heading: "Specifying your order",
        level: 3,
        body: "Know whether the pattern is woven, printed, or embroidered, and specify the base before you specify the surface. Request the swatch first — mini swatches are supplied free of material charge once availability is confirmed — and confirm the embroidery and hand before you commit to meters.",
        links: [
          { text: "request a swatch", href: "/samples" },
          { text: "check MOQ and trade terms", href: "/trade-terms" },
        ],
      },
    ],
    references: [
      {
        publisher: "Global Times",
        title: "Chinese designers look to change Chinese fashion industry",
        year: "2018",
        url: "https://www.globaltimes.cn/page/201803/1095803.shtml",
        supports:
          "Names the gown Snow Plum Blossom, places it in the Christopher Bu \"Forbidden City\" couture series, and reports it as the first Chinese-designed dress on an Oscars red carpet.",
      },
      {
        publisher: "Daily Mail",
        title: "Paz Vega wears unusual red cherry blossom gown at Academy Awards",
        year: "2018",
        url: "https://www.dailymail.co.uk/tvshowbiz/article-5461429/Paz-Vega-wears-unusual-red-cherry-blossom-gown-Academy-Awards.html",
        supports:
          "Describes the white strapless gown, the red cherry blossoms, and the black-and-white check under the train.",
      },
      {
        publisher: "Wonderwall",
        title: "Fashion hits and misses from the 2018 Academy Awards",
        year: "2018",
        url: "https://www.wonderwall.com/awards-events/oscars/fashion-hits-and-misses-2018-academy-awards-3013006.gallery",
        supports:
          "Calls the gown \"a true piece of fashion art\" and notes the red blossom surface.",
      },
      {
        publisher: "USA TODAY",
        title: "2018 Oscars red carpet photo gallery",
        year: "2018",
        supports:
          "Carries the gown in its red-carpet coverage, attributed to photographer Dan MacMedan.",
      },
      {
        publisher: "The Sydney Morning Herald",
        title: "2018 Oscars arrivals",
        year: "2018",
        supports:
          "Carries the gown with a caption naming Christopher Bu, photo by Jordan Strauss/AP.",
      },
    ],
    methodology:
      "Methodology: the description of the gown follows the red-carpet coverage named in the sources below. The craft distinction between embroidery and jacquard is drawn from how each process works: embroidery adds thread to a finished cloth, jacquard weaves the motif into the cloth. No press article names the silk base of the dress; the mulberry silk attribution rests on the brand's own production records. This page is reviewed by the Christopher Bu editorial team.",
  },
  {
    slug: "forbidden-city-silk-jacquard-fan-bingbing",
    title:
      "Mulberry Silk Jacquard and the Forbidden City Gown: Fan Bingbing's Met Gala",
    metaDescription:
      "How a mulberry silk jacquard motif, inspired by the Forbidden City, became the gown Fan Bingbing wore to the 2015 Met Gala, and how jacquard differs from embroidery.",
    type: "Designer case study",
    publishDate: "2026-11-03",
    keywords: [
      "silk jacquard gown",
      "Forbidden City dress",
      "mulberry silk jacquard",
      "jacquard vs embroidery",
    ],
    anchorTexts: ["silk jacquard", "mulberry silk jacquard", "jacquard vs embroidery"],
    linkTo: "/products/dupioni",
    coverImage: {
      src: "/christopherbu-silk/blog/fan-bingbing-forbidden-city-jacquard.webp",
      alt: "Fan Bingbing in the Forbidden City-inspired mulberry silk jacquard gown at the 2015 Met Gala",
      caption: "The Forbidden City jacquard gown Fan Bingbing wore to the 2015 Met Gala.",
    },
    intro:
      "At the 2015 Met Gala, themed China: Through the Looking Glass, the actress Fan Bingbing wore a gown whose green and gold cape opened from the back like a set of palace doors. The motif was not painted on and not stitched on. It was woven into the mulberry silk on a jacquard loom, which is the single fact that separates this dress from most of the embroidery people confuse it with.",
    takeaways: [
      "The gown is mulberry silk jacquard, so the motif is woven into the cloth on the loom, not embroidered on top of it.",
      "**Jacquard** puts the pattern inside the weave; **embroidery** adds thread to a finished cloth. They are different crafts.",
      "The design draws on Forbidden City architecture: the central axis of the palace, the green and gold of its painted brackets.",
      "Buyers specifying a jacquard should confirm the motif, the weave density, and the silk weight before the loom is set.",
    ],
    sections: [
      {
        heading: "What the gown is made of",
        body: "The gown is built around a cape that opens along the back, its green ground filled with gold lines and motifs drawn from the brackets and ceiling coffers of the Forbidden City in Beijing. The colors come from the palace itself: the green of its painted timber and the gold of its trim. Haiwainet described the dress as pure silk with colors drawn from the palace's bracket paintings, and noted that the look earned Fan Bingbing a place on American Vogue's best-dressed list for the night[1]. BeautiMode carried the same account of the gold-and-green gown and cape[2]. The material fact is the weave. The pattern is jacquard, which means the motif is formed by the loom as it raises and lowers individual warp threads. It is part of the cloth, not something added to it.",
        image: {
          src: "/christopherbu-silk/blog/fan-bingbing-forbidden-city-jacquard.webp",
          alt: "Fan Bingbing wearing the Christopher Bu Forbidden City gown, a green and gold mulberry silk jacquard with a cape",
          caption:
            "Fan Bingbing in the Christopher Bu Forbidden City gown. Photo: Christopher Bu.",
        },
      },
      {
        heading: "Jacquard versus embroidery: the weave is the pattern",
        body: "**Jacquard** is a weave, not a decoration. A jacquard loom controls each warp thread separately, so a motif can be built into the cloth as it is woven. **Embroidery** is the opposite: thread is stitched onto a finished cloth by hand or machine. Print is ink applied to the surface. The three look different up close, and a buyer who asks for one should not be quoted another. [UNIQUE INSIGHT] This is why the Forbidden City gown reads the way it does. The gold lines sit level with the green ground because they are woven, not stitched. On an embroidered gown those lines would stand proud of the surface. The flat, woven quality is the tell that the motif is jacquard.",
        table: {
          caption: "How the pattern is made, by technique",
          headers: ["Technique", "Where the pattern lives", "How it is made"],
          rows: [
            ["Print", "On the surface, flat", "Ink or dye applied to finished cloth"],
            ["Embroidery", "On the surface, raised", "Thread stitched onto finished cloth"],
            ["Jacquard", "Inside the weave", "Motif woven into the cloth on the loom"],
          ],
        },
      },
      {
        heading: "How a jacquard motif is woven",
        body: "A motif starts as a design, usually a drawing that is translated into a weave plan. The plan tells the loom which warp threads to lift and which to leave down for each row of weft. The raised and lowered threads form the pattern as the cloth grows. Because the motif is in the weave, it survives washing and wear the way a print or a surface embroidery cannot. For example, a gold line woven into a green ground stays level through repeated wear, where a stitched line would lift and catch. For a silk jacquard, the base yarn is mulberry silk, and the motif is woven in the same silk or a contrasting yarn. The density of the weave, the size of the motif repeat, and the weight of the silk are all set before the loom starts, which is why a jacquard order needs those three numbers up front.",
        links: [
          { text: "dupioni silk greige", href: "/products/dupioni" },
        ],
      },
      {
        heading: "The 2015 Met Gala moment",
        body: "The 2015 Met Gala took its theme from the exhibition China: Through the Looking Glass. Fan Bingbing walked the red carpet in the Christopher Bu Forbidden City gown. The look was built on the palace's central-axis symmetry, so the cape opened from the back and spread to either side, the way the palace spreads around its central hall. The dress earned her a place on American Vogue's best-dressed list and drew coverage from the New York Times and Vogue, according to the Haiwainet account at the time[1]. The gown belongs to the same couture series as the Snow Plum Blossom dress Paz Vega wore to the 2018 Oscars. The series is one inspiration, but the craft splits: this dress is jacquard, that one is embroidery.",
        image: {
          src: "/christopherbu-silk/blog/fan-bingbing-forbidden-city-cape.webp",
          alt: "The green and gold cape of the Christopher Bu Forbidden City gown spread open",
          caption:
            "The Forbidden City gown with its cape spread. Photo: Christopher Bu.",
        },
        secondImage: {
          src: "/christopherbu-silk/blog/fan-bingbing-forbidden-city-red-carpet.webp",
          alt: "Fan Bingbing wearing the Christopher Bu Forbidden City gown at the 2015 Met Gala",
          caption:
            "The gown at the 2015 Met Gala. Photo: Christopher Bu.",
        },
      },
      {
        heading: "Same series, different craft",
        body: "The Christopher Bu \"Forbidden City\" couture series produced both dresses. Fan Bingbing's is a mulberry silk jacquard; Paz Vega's Snow Plum Blossom is mulberry silk with hand embroidery. [ORIGINAL DATA] The series was the designer's first haute couture line, and the two dresses show the two crafts the series used. A jacquard weaves the motif in; embroidery lays it on top. The distinction is the first thing to fix when you describe either dress, because most red-carpet coverage does not make it.",
        links: [
          { text: "read the embroidery counterpart", href: "/blog/paz-vega-hand-embroidered-silk-oscars" },
        ],
      },
      {
        heading: "What to specify when you order a silk jacquard",
        body: "A jacquard order needs three decisions before the loom is set. First, the motif and its repeat size, because the weave plan is built from it. Second, the weave density, which sets how firm or open the cloth is. Third, the silk weight and width, which fix the hand and the yield. A strike-off confirms the motif and density before bulk weaving starts, and it is the point where changes are cheap and later changes are not.",
        links: [
          { text: "request a swatch", href: "/samples" },
          { text: "check MOQ and trade terms", href: "/trade-terms" },
          { text: "about us", href: "/about" },
          { text: "contact the B2B team", href: "/contact" },
        ],
      },
    ],
    references: [
      {
        publisher: "Haiwainet",
        title: "Fan Bingbing's Forbidden City look wins praise",
        year: "2015",
        url: "https://huaren.haiwainet.cn/n/2015/0507/c232657-28706443-5.html",
        supports:
          "Records the gown as pure silk with colors from the palace's bracket paintings, and notes the American Vogue best-dressed listing.",
      },
      {
        publisher: "BeautiMode",
        title: "2015 Met Gala: Fan Bingbing's Forbidden City gold gown",
        year: "2015",
        supports:
          "Describes the gold-and-green gown and cape at the 2015 Met Gala.",
      },
    ],
    methodology:
      "Methodology: the description of the gown follows the Chinese press coverage named in the sources below, which recorded the dress as pure silk with colors drawn from the Forbidden City's bracket paintings. The jacquard-versus-embroidery distinction is drawn from how each craft works: jacquard weaves the motif into the cloth, embroidery stitches onto a finished cloth. No press article separates the two crafts; the jacquard attribution rests on the brand's own production records. This page is reviewed by the Christopher Bu editorial team.",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
