/**
 * Momme ladder pages (/silk-weight/[grade]).
 *
 * Why these pages exist and why there are only five:
 * a page that swaps one number into the same template is exactly the
 * "scaled content abuse" pattern Google names in its spam policies. Each entry
 * below therefore carries facts that belong to that weight only — which weaves
 * actually run at that weight, what it is the boundary for, and what it weighs
 * per running meter at each of the two standard widths.
 *
 * Every figure traces to one of two places:
 *   - `src/lib/products.ts` published spec values (momme ladders, widths, uses)
 *   - 1 momme = 4.340 g/m² (ISO-consistent, the same constant as
 *     `src/lib/silk-units.ts`), with per-meter weight = gsm x width in meters
 *
 * No price is stated: silk is quoted per order, so a public number would be
 * wrong for every buyer reading it.
 */

export type WeightRow = {
  /** Standard width in cm. Only 114 and 140 are regular supply. */
  widthCm: number;
  /** Weight of one running meter at this width, in kg. */
  kgPerMeter: number;
};

export type WeightSection = {
  h2: string;
  paragraphs: string[];
  table?: { head: string[]; rows: string[][] };
};

export type WeightFaq = { q: string; a: string };

export type SilkWeightGrade = {
  slug: string;
  momme: number;
  gsm: number;
  /** Weaves that are published at this weight in products.ts. */
  weaves: string[];
  title: string;
  description: string;
  h1: string;
  /** 40 to 60 words, visible label, answers the buying question first. */
  answer: string;
  rows: WeightRow[];
  sections: WeightSection[];
  faqs: WeightFaq[];
  /** Product slugs from products.ts that are quoted at this weight. */
  related: string[];
};

export const MOMME_TO_GSM = 4.34;

const kg = (momme: number, widthCm: number) =>
  Math.round((momme * MOMME_TO_GSM * (widthCm / 100)) * 10) / 10000;

export const silkWeightGrades: SilkWeightGrade[] = [
  {
    slug: "6-momme",
    momme: 6,
    gsm: 26.04,
    weaves: ["Habotai Silk"],
    title: "6 Momme Silk: Lightest Weight",
    description:
      "6 momme silk is 26.04 g/m², woven only as Habotai. Weight per meter at 114 cm, uses, and where the weight stops being workable.",
    h1: "6 Momme Silk Fabric: 26 g/m², the Lightest Weight in Regular Supply",
    answer:
      "6 momme silk weighs 26.04 g/m². In our range it is woven only as Habotai Silk, at 114 cm. One running meter weighs 0.0297 kg. It is the weight for lining, scarf and sheer-overlay work, where handling matters more than body.",
    rows: [{ widthCm: 114, kgPerMeter: kg(6, 114) }],
    sections: [
      {
        h2: "The floor of the ladder, and why only one weave reaches it",
        paragraphs: [
          "Habotai Silk is published from 6 to 16 momme, and 6 is the bottom of that range. Georgette Silk starts at 8. Silk Stretch Satin starts at 14. Dupioni Silk starts at 16. Satin Silk starts at 10, though the 16 to 19 band is the one buyers actually order for sleepwear and shirts.",
          "So 6 momme is not a weight you can request in every construction. If your design needs 6 momme, the weave is Habotai. That single constraint decides more about the cloth than the number does: a plain weave at 26 g/m² behaves nothing like a satin at the same weight, because the surface and the sett are different, not just the mass.",
        ],
      },
      {
        h2: "What 26 g/m² feels like in the hand",
        paragraphs: [
          "At this weight the cloth is close to translucent against a light. It has very little of its own body, so it follows whatever it is laid over and takes a crease easily. That is the point of it for lining: a lining that adds structure changes the hang of the garment it is meant to protect.",
          "The trade is durability. A 26 g/m² plain weave has thin yarn and an open sett, so it abrades faster at a seam or a fold than the same weave at 12 momme. If the piece will be worn hard, the honest answer is to go up the ladder rather than to ask the mill to make 6 momme behave like 12.",
        ],
      },
      {
        h2: "Weight per meter at the width we actually weave",
        paragraphs: [
          "Habotai is a 114 cm cloth in our supply. At that width one meter of 6 momme carries 0.0297 kg. Freight, duty and any raw-silk content in the order run on weight rather than length, so that figure is the one to put into a cost sheet, not the momme number.",
        ],
        table: {
          head: ["Weight", "g/m²", "Width", "kg per running meter"],
          rows: [
            ["6 momme", "26.04", "114 cm", "0.0297 kg"],
            ["8 momme", "34.72", "114 cm", "0.0396 kg"],
            ["10 momme", "43.40", "114 cm", "0.0495 kg"],
            ["12 momme", "52.08", "114 cm", "0.0594 kg"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Is 6 momme real silk or a synthetic?",
        a: "6 momme is a weight, not a fiber. In our range it is mulberry silk Habotai, a plain weave. Weight alone never tells you the fiber, so ask for the composition on the quotation rather than judging from the number.",
      },
      {
        q: "Can 6 momme be used for a garment outer layer?",
        a: "Only where sheerness or drape is the intent, such as an overlay. A 26 g/m² plain weave has thin yarn and an open sett, so it scuffs at seams and folds faster than the same weave at 12 momme.",
      },
      {
        q: "Why is 6 momme only offered in 114 cm?",
        a: "Because Habotai Silk, the only weave we publish at this weight, is supplied at 114 cm. Silk Stretch Satin, which runs at 140 cm, starts at 14 momme.",
      },
    ],
    related: ["habotai"],
  },
  {
    slug: "16-momme",
    momme: 16,
    gsm: 69.44,
    weaves: ["Habotai Silk", "Dupioni Silk", "Jacquard Luo Silk", "Silk Stretch Satin"],
    title: "16 Momme Silk: Shirt & Lining Threshold",
    description:
      "16 momme silk is 69.44 g/m². Four weaves reach it. What changes from 12 to 16 momme, and why 16 ends sheer plain weave.",
    h1: "16 Momme Silk Fabric: 69 g/m², Where a Plain Weave Stops Being Sheer",
    answer:
      "16 momme silk weighs 69.44 g/m². It is the top of the Habotai range and the entry weight for Dupioni Silk, Jacquard Luo Silk and Silk Stretch Satin. One meter at 140 cm weighs 0.0972 kg, at 114 cm 0.0792 kg. It is the usual floor for shirting and for a lining that has to hold a seam.",
    rows: [
      { widthCm: 114, kgPerMeter: kg(16, 114) },
      { widthCm: 140, kgPerMeter: kg(16, 140) },
    ],
    sections: [
      {
        h2: "The weight where four different weaves meet",
        paragraphs: [
          "No other rung on the ladder is shared by as many constructions. Habotai reaches its ceiling here at 16. Dupioni and Jacquard Luo both start here. Silk Stretch Satin passes through 16 on its way from 14 to 28. Satin Silk includes 16 as the lower half of the band it sells most of.",
          "That makes 16 momme the most useful comparison weight you can ask for from a mill, because the number is held constant and only the weave changes. Ask for 16 momme in Habotai, in Dupioni and in satin, and the three swatches will differ in surface, drape and stiffness while weighing the same per square meter.",
        ],
      },
      {
        h2: "Why 16 and not 12 for shirting",
        paragraphs: [
          "Habotai is published from 6 to 16 momme, and the range is used in bands: 6 to 8 for scarves and lining, 10 to 12 for shirts, 14 to 16 for a firmer cloth. The step from 12 to 16 is 23 g/m², which is the difference between a shirt that shows the seam allowance through it and one that does not.",
          "Dupioni behaves differently at the same weight. It is woven in 16 and 19 momme in our supply, and the 16 is described for blouses, linings and softer structured pieces, while 19 is the gown and bridal weight. So 16 momme does not mean the same thing across weaves: for Habotai it is the heavy end, for Dupioni it is the light end.",
        ],
      },
      {
        h2: "Weight per meter, both standard widths",
        paragraphs: [
          "At 16 momme the cloth is 69.44 g/m². One meter at 114 cm is 0.0792 kg, and at 140 cm it is 0.0972 kg. The 22.8 percent difference comes from the width alone, so a quotation that gives one figure without saying which width it was weighed at cannot be compared with another.",
        ],
        table: {
          head: ["Weight", "g/m²", "114 cm", "140 cm"],
          rows: [
            ["12 momme", "52.08", "0.0594 kg", "0.0729 kg"],
            ["14 momme", "60.76", "0.0693 kg", "0.0851 kg"],
            ["16 momme", "69.44", "0.0792 kg", "0.0972 kg"],
            ["19 momme", "82.46", "0.0940 kg", "0.1154 kg"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Is 16 momme heavy enough for a shirt that is not see-through?",
        a: "In Habotai Silk it is the firmest weight we publish, and it is the top of the 14 to 16 band used for heavier shirts. At 69.44 g/m² a light color still reads slightly against a strong backlight, so ask for a swatch over a hand.",
      },
      {
        q: "Which weaves are available at exactly 16 momme?",
        a: "Habotai Silk, Dupioni Silk, Jacquard Luo Silk and Silk Stretch Satin all include 16 in their published ranges. Satin Silk also includes 16, where it sits at the lower end of the 16 to 19 band ordered for sleepwear and shirts.",
      },
      {
        q: "Does 16 momme Dupioni behave like 16 momme Habotai?",
        a: "No. They weigh the same per square meter but differ in construction. Habotai at 16 is the heavy end of a plain weave range. Dupioni at 16 is the light end of a slubbed range, described for blouses and softer structured pieces rather than gowns.",
      },
    ],
    related: ["habotai", "dupioni", "jacquard-luo", "stretch-silk"],
  },
  {
    slug: "19-momme",
    momme: 19,
    gsm: 82.46,
    weaves: ["Satin Silk", "Dupioni Silk", "Jacquard Luo Silk", "Silk Stretch Satin"],
    title: "19 Momme Silk: Gown & Sleepwear",
    description:
      "19 momme silk is 82.46 g/m². Standard Dupioni gown weight and top of sleepwear band in satin. 15.8% heavier than 22 momme.",
    h1: "19 Momme Silk Fabric: 82 g/m², the Weight Most Gowns and Sleepwear Are Cut From",
    answer:
      "19 momme silk weighs 82.46 g/m². It is the standard weight for Dupioni gowns and bridal, and the top of the 16 to 19 satin band used for sleepwear and shirts. One meter at 140 cm weighs 0.1154 kg, at 114 cm 0.0940 kg.",
    rows: [
      { widthCm: 114, kgPerMeter: kg(19, 114) },
      { widthCm: 140, kgPerMeter: kg(19, 140) },
    ],
    sections: [
      {
        h2: "One number, two completely different cloths",
        paragraphs: [
          "Dupioni is woven in 16 and 19 momme in our supply, and 19 is the weight described for gowns and bridal. Satin is published from 10 to 30 momme, and 19 sits at the top of the 16 to 19 band that buyers order for sleepwear and shirts.",
          "Weighed on a scale, 19 momme Dupioni and 19 momme satin are the same cloth. In the hand they are not close. Dupioni carries slubs from the doupion yarn and holds a shape, which is why it is cut for structured gowns. Satin at the same weight falls and reflects, which is why it is cut for sleepwear. If a quotation says 19 momme and nothing else, it has not told you which of those two you are buying.",
        ],
      },
      {
        h2: "The step to 22 momme is 15.8 percent, not a rounding",
        paragraphs: [
          "19 momme is 82.46 g/m² and 22 momme is 95.48 g/m². The gap is 13.02 g/m², or 15.8 percent of the lighter cloth. Buyers often treat 19 and 22 as neighbouring options and expect a small difference; it is the largest proportional step in the common range between 16 and 25.",
          "That gap is why 19 is the gown weight and 22 is a bedding weight. A gown gains nothing from the extra 13 g/m² except weight on the shoulder. Bedding gains durability, because a sheet at 95 g/m² survives washing cycles that would thin an 82 g/m² one.",
        ],
      },
      {
        h2: "What a running meter weighs at each width",
        paragraphs: [
          "At 140 cm, one meter of 19 momme is 0.1154 kg. At 114 cm it is 0.0940 kg. If a quotation is per meter, the width decides whether you are paying for 1.14 m² or 1.40 m² of cloth, and that difference is 22.8 percent per square meter at the same headline price.",
        ],
        table: {
          head: ["Weight", "g/m²", "114 cm", "140 cm"],
          rows: [
            ["16 momme", "69.44", "0.0792 kg", "0.0972 kg"],
            ["19 momme", "82.46", "0.0940 kg", "0.1154 kg"],
            ["22 momme", "95.48", "0.1088 kg", "0.1337 kg"],
            ["25 momme", "108.50", "0.1237 kg", "0.1519 kg"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Is 19 momme heavy enough for a wedding dress?",
        a: "In Dupioni Silk, 19 momme is the standard bridal and gown weight in our supply, with 21 to 22 momme available on request for heavier structured pieces. In a satin construction the same 19 momme is a sleepwear and shirting weight and would be too light for a structured bridal skirt.",
      },
      {
        q: "How much heavier is 22 momme than 19 momme?",
        a: "22 momme is 95.48 g/m² against 82.46 g/m² at 19, so it is 15.8 percent heavier. On a 140 cm width that is 0.1337 kg per meter against 0.1154 kg.",
      },
      {
        q: "Why do two 19 momme swatches feel so different?",
        a: "Because momme measures mass per area and says nothing about construction. A 19 momme Dupioni carries slubs and holds shape, while a 19 momme satin is smooth and fluid. Ask which weave the 19 refers to before comparing hand.",
      },
    ],
    related: ["dupioni", "satin", "jacquard-luo", "stretch-silk"],
  },
  {
    slug: "22-momme",
    momme: 22,
    gsm: 95.48,
    weaves: ["Satin Silk", "Jacquard Luo Silk", "Silk Stretch Satin", "Georgette Silk"],
    title: "22 Momme Silk: Bedding Standard",
    description:
      "22 momme silk is 95.48 g/m². Standard high-end bedding weight. What 15.8% over 19 buys, greige vs finished, per-meter weight.",
    h1: "22 Momme Silk Fabric: 95 g/m², the Weight Bedding Is Specified At",
    answer:
      "22 momme silk weighs 95.48 g/m². It sits in the 22 to 25 satin band used for high-end bedding, and it is 15.8 percent heavier than 19 momme. One meter at 140 cm weighs 0.1337 kg, at 114 cm 0.1088 kg. Ask whether the figure is greige or finished before you compare.",
    rows: [
      { widthCm: 114, kgPerMeter: kg(22, 114) },
      { widthCm: 140, kgPerMeter: kg(22, 140) },
    ],
    sections: [
      {
        h2: "The weight the bedding spec settles on",
        paragraphs: [
          "Satin Silk is published from 10 to 30 momme. The 16 to 19 band is what buyers order for sleepwear and shirts, and 22 to 25 is what they order for high-end bedding. 22 is therefore the entry to the bedding band rather than a middle option.",
          "The reason is washing, not appearance. A pillowcase is washed far more often than a gown is worn, and each cycle removes a little fiber from a silk surface. At 95.48 g/m² there is more cloth to lose before the hand changes. At 82.46 g/m² the same number of cycles reaches that point sooner.",
        ],
      },
      {
        h2: "Greige 22 and finished 22 are not the same cloth",
        paragraphs: [
          "Momme is measured on a specific piece of cloth, and greige is the state straight off the loom before finishing. Sericin, the gum that binds the filament, is 25 to 30 percent of raw silk weight, and degumming removes up to a quarter of that weight. A cloth specified at 22 momme on greige therefore lands near 16 to 17 momme once it is finished and reaches a cutting table.",
          "That is the same figure our momme guide states, and it is the reason two suppliers can both quote 22 and ship cloth of visibly different weight. Treat a greige 22 as an instruction about the base cloth, and ask which side of the degumming bath the number came from. A quotation that gives one momme figure without saying which state it refers to cannot be compared with another.",
        ],
      },
      {
        h2: "What a meter weighs, and why that is the number you ship on",
        paragraphs: [
          "At 22 momme the cloth is 95.48 g/m²: 0.1088 kg per meter at 114 cm, 0.1337 kg at 140 cm. Bedding orders are often large enough that the difference between those two widths becomes a real freight and duty line, and both are calculated on weight rather than on length.",
        ],
        table: {
          head: ["Weight", "g/m²", "114 cm", "140 cm"],
          rows: [
            ["19 momme", "82.46", "0.0940 kg", "0.1154 kg"],
            ["22 momme", "95.48", "0.1088 kg", "0.1337 kg"],
            ["25 momme", "108.50", "0.1237 kg", "0.1519 kg"],
            ["30 momme", "130.20", "0.1484 kg", "0.1823 kg"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Why is 22 momme considered the bedding weight?",
        a: "Because 22 to 25 momme is the satin band our buyers order for high-end bedding, while 16 to 19 is ordered for sleepwear and shirts. Bedding is washed far more often, and more cloth per square meter lasts longer before the hand changes.",
      },
      {
        q: "Is the quoted 22 momme greige or finished?",
        a: "Ask. Greige is the state off the loom, and degumming removes up to a quarter of raw silk weight, so 22 momme on greige lands near 16 to 17 momme finished. A quotation that states 22 without saying which state it measured cannot be compared with another.",
      },
      {
        q: "Is 22 momme available in every weave?",
        a: "No. Satin Silk, Jacquard Luo Silk and Silk Stretch Satin all include 22. Georgette Silk runs 8 to 16 with a heavy 22 momme option for outerwear. Habotai Silk stops at 16 and Dupioni Silk is 16 and 19 with 21 to 22 on request.",
      },
    ],
    related: ["satin", "jacquard-luo", "stretch-silk", "georgette"],
  },
  {
    slug: "30-momme",
    momme: 30,
    gsm: 130.20,
    weaves: ["Satin Silk", "Jacquard Luo Silk"],
    title: "30 Momme Silk: Heaviest Weight",
    description:
      "30 momme silk is 130.20 g/m², the heaviest in regular supply. Start of structured satin and jacquard luo. Per-meter weights at both widths.",
    h1: "30 Momme Silk Fabric: 130 g/m², the Heaviest Weight in Regular Supply",
    answer:
      "30 momme silk weighs 130.20 g/m². It is the top of the Satin Silk and Jacquard Luo Silk ranges, and past the 28 momme ceiling of Silk Stretch Satin. One meter at 140 cm weighs 0.1823 kg, at 114 cm 0.1484 kg. It is specified where the cloth has to hold a shape by itself.",
    rows: [
      { widthCm: 114, kgPerMeter: kg(30, 114) },
      { widthCm: 140, kgPerMeter: kg(30, 140) },
    ],
    sections: [
      {
        h2: "The weight where a drape stops being the point",
        paragraphs: [
          "Below 25 momme the question a buyer asks is how the cloth falls. At 30 momme the question changes to whether it stands. Satin Silk runs from 10 to 30 momme in our supply, with 30 and up described as the heavyweight choice for structured pieces, and Jacquard Luo Silk includes 30 by motif.",
          "Structured work needs mass at the fold. A pleat in a 95 g/m² cloth collapses under its own weight within a day of wear; the same pleat in a 130 g/m² cloth holds its line. That is the whole reason the top of the ladder exists, and it is also why 30 momme is wasted on anything that is meant to move.",
        ],
      },
      {
        h2: "Two ranges end here, one ends before it",
        paragraphs: [
          "Satin Silk and Jacquard Luo Silk both reach 30. Silk Stretch Satin stops at 28, so a request for 30 momme in a stretch satin is not a request we can meet from the published range. Habotai stops at 16 and Dupioni at 19, with 21 to 22 available on request.",
          "This is the practical value of knowing the ladder: the weight you want may exist, but not in the weave your design is built around. Checking the intersection of weight and weave before sampling saves a round trip.",
        ],
      },
      {
        h2: "Freight, duty and the per-meter figure",
        paragraphs: [
          "At 130.20 g/m² one meter is 0.1484 kg at 114 cm and 0.1823 kg at 140 cm. On a structured piece the yield per garment is usually low and the offcuts are large, so the meters ordered run well ahead of the finished weight. Build the cost sheet from kilos against the width you actually cut, not from a per-kilogram figure that assumes no waste.",
        ],
        table: {
          head: ["Weight", "g/m²", "114 cm", "140 cm"],
          rows: [
            ["22 momme", "95.48", "0.1088 kg", "0.1337 kg"],
            ["25 momme", "108.50", "0.1237 kg", "0.1519 kg"],
            ["28 momme", "121.52", "0.1385 kg", "0.1701 kg"],
            ["30 momme", "130.20", "0.1484 kg", "0.1823 kg"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "What is the difference between 25 and 30 momme?",
        a: "About 21.70 g/m², which is the gap between 108.50 and 130.20 g/m². In practice 25 sits at the top of the bedding band and 30 is described for structured pieces, where the cloth has to hold a pleat or a fold without support.",
      },
      {
        q: "Can I get 30 momme in silk stretch satin?",
        a: "No. Silk Stretch Satin is published from 14 to 28 momme, so 30 is outside that range. Satin Silk and Jacquard Luo Silk both reach 30.",
      },
      {
        q: "Is 30 momme too heavy for a dress?",
        a: "Not for a structured one. It is too heavy for anything meant to move or drape, where a 19 to 22 momme cloth does the job with less weight on the shoulder.",
      },
    ],
    related: ["satin", "jacquard-luo"],
  },
];

export const silkWeightBySlug = Object.fromEntries(
  silkWeightGrades.map((g) => [g.slug, g])
);
