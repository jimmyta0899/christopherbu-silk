import type { Metadata } from "next";
import Link from "next/link";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/hub-utils";
import { ToolShell } from "@/components/ToolShell";
import { SpecComparison, type SpecRow } from "./Comparison";

const UPDATED = "2026-11-14";

export const metadata: Metadata = {
  title: "Silk Fabric Comparison Chart: 9 Weaves by Momme & Use",
  description:
    "Compare nine mulberry silk weaves side by side: satin, dupioni, habotai, georgette, jacquard luo, stretch satin, blends and more — momme, g/m², width and signature.",
  keywords: [
    "silk fabric comparison chart",
    "types of silk fabric comparison",
    "silk momme comparison",
    "satin vs dupioni",
    "habotai vs georgette",
    "silk fabric weight comparison",
    "which silk fabric to choose",
  ],
  alternates: { canonical: "/tools/silk-spec-comparison" },
  openGraph: pageOpenGraph("/tools/silk-spec-comparison"),
};

/**
 * Rows are transcribed from src/lib/products.ts — the same numbers the product
 * pages publish. If a product spec changes there, this table must change with
 * it; a comparison table that disagrees with the source page is worse than none.
 */
const ROWS: SpecRow[] = [
  {
    slug: "habotai",
    name: "Habotai Silk",
    mommeMin: 6,
    mommeMax: 16,
    mommeText: "6–16",
    weightText: "≈26–69",
    width: "114 cm",
    character: "Crisp, firm hand",
    use: "Linings, scarves, light shirts",
  },
  {
    slug: "georgette",
    name: "Georgette Silk",
    mommeMin: 8,
    mommeMax: 22,
    mommeText: "8–16 (22 heavy)",
    weightText: "≈34–95",
    width: "114 / 140 cm",
    character: "Sheer, crinkled",
    use: "Scarves, summer dresses",
  },
  {
    slug: "satin",
    name: "Satin Silk Fabric",
    mommeMin: 10,
    mommeMax: 30,
    mommeText: "10–30",
    weightText: "≈43–129",
    width: "114 / 140 cm",
    character: "High-gloss face, matt reverse",
    use: "Bridal, eveningwear, linings",
  },
  {
    slug: "stretch-silk",
    name: "Silk Stretch Satin",
    mommeMin: 14,
    mommeMax: 28,
    mommeText: "14–28",
    weightText: "≈60–121",
    width: "140 cm",
    character: "Satin face with recovery",
    use: "Fitted dresses, slips",
  },
  {
    slug: "jacquard-luo",
    name: "Jacquard Luo Silk",
    mommeMin: 16,
    mommeMax: 30,
    mommeText: "16–30 (by motif)",
    weightText: "≈69–130",
    width: "114 / 140 cm",
    character: "Motif woven into the cloth",
    use: "Couture, occasionwear",
  },
  {
    slug: "dupioni",
    name: "Dupioni Silk",
    mommeMin: 16,
    mommeMax: 22,
    mommeText: "16 / 19 (up to 21–22)",
    weightText: "≈69–95",
    width: "114 / 140 cm",
    character: "Slubbed, sculptural",
    use: "Gowns, bridal, tailoring",
  },
  {
    slug: "greige-fabric",
    name: "Greige Silk Fabric",
    mommeMin: 8,
    mommeMax: 30,
    mommeText: "Follows base weave",
    weightText: "By weave",
    width: "114 / 140 cm",
    character: "Undyed, unfinished",
    use: "Own colour and print development",
  },
  {
    slug: "raw-silk",
    name: "Raw Silk Yarn",
    mommeMin: 0,
    mommeMax: 0,
    mommeText: "Not applicable — 20/22D",
    weightText: "Yarn, not cloth",
    width: "—",
    character: "Filament yarn on the cone",
    use: "Weaving, knitting, embroidery",
  },
  {
    slug: "blended-silk",
    name: "Silk Blend",
    mommeMin: 0,
    mommeMax: 0,
    mommeText: "Specified by buyer",
    weightText: "By composition",
    width: "114 / 140 cm",
    character: "Silk sheen + cotton/linen comfort",
    use: "Shirts, summer wear, bedding",
  },
];

const faq = [
  {
    q: "Which silk is best for a wedding dress?",
    a: "Satin or dupioni, depending on the silhouette. A fluid bias-cut gown wants 19–22 momme satin; a structured, sculptural gown wants 19 momme dupioni, whose slubs hold shape and photograph with visible texture. Jacquard luo suits a gown where the motif is the design.",
  },
  {
    q: "What is the difference between habotai and georgette?",
    a: "Both are light plain-family silks, but habotai is crisp and holds a fold, while georgette is woven from highly twisted yarns and has a crinkled, floating drape. Habotai goes into linings and scarves; georgette goes into anything meant to move.",
  },
  {
    q: "Why does greige silk not list a single momme?",
    a: "Because greige is a state, not a weave. Every silk passes through it on the way to being dyed and finished, so its weight follows whichever base weave you order. Tell the mill the weave and target weight and the greige is quoted to match.",
  },
  {
    q: "Can I compare momme across different weaves?",
    a: "Only loosely. Momme is weight per area, so a 19 momme satin and a 19 momme habotai weigh the same per square metre but behave completely differently — the weave, not the weight, sets the hand. Compare momme within a weave; compare hand across weaves.",
  },
  {
    q: "Which weave is lightest?",
    a: "Habotai, from 6 momme (about 26 g/m²), and georgette from 8 momme. Both are lighter than the lightest satin we stock at 10 momme. For comparison, a 30 momme satin is 130 g/m² — five times the weight of a 6 momme habotai.",
  },
];

const related = [
  {
    href: "/silk-fabrics",
    label: "Silk fabric directory",
    note: "The nine weaves, by construction",
  },
  {
    href: "/products",
    label: "Product pages",
    note: "Full specification and FAQ for each weave",
  },
  {
    href: "/tools/momme-gsm-oz-converter",
    label: "Momme to GSM converter",
    note: "If a weight is quoted in g/m² instead",
  },
  {
    href: "/tools/silk-order-weight-calculator",
    label: "Order weight calculator",
    note: "Turn a chosen weight into order kilograms",
  },
];

export default function SpecComparisonPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools/" },
    { name: "Silk comparison chart", path: "/tools/silk-spec-comparison/" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(crumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              headline: "Silk Fabric Comparison Chart",
              description:
                "Nine mulberry silk weaves compared by momme range, weight, width, character and typical end use.",
              path: "/tools/silk-spec-comparison/",
              datePublished: UPDATED,
              dateModified: UPDATED,
            }),
          ),
        }}
      />

      <ToolShell
        h1="Silk Fabric Comparison Chart"
        answer="Nine mulberry silk weaves range from 6 momme habotai for linings to 30 momme satin for structured gowns. Within one weave momme predicts body and opacity; across weaves it does not, because the construction sets the hand. Satin is lustrous, dupioni slubbed, habotai crisp, georgette sheer."
        updated={UPDATED}
        methodSources={[
          {
            publisher: "Wikipedia",
            title: "Units of textile measurement — momme range per weave",
            url: "https://en.wikipedia.org/wiki/Units_of_textile_measurement",
          },
          {
            publisher: "Christopher Bu",
            title: "Product specification pages (the source of every figure here)",
            url: "https://www.christopherbu.com/products/",
          },
        ]}
        faq={faq}
        related={related}
        method={
          <>
            <p>
              Every number in the table is transcribed from the specification
              published on that weave&apos;s product page. Nothing is estimated:
              if a product page says 16–19 momme, this table says 16–19 momme.
            </p>
            <p>
              Two rows deliberately carry no momme range. Raw silk is a yarn
              measured in denier — 20/22D — and a yarn has no area weight until
              it is woven. Silk blend has no fixed range because the buyer
              specifies the fibre ratio, and a blend&apos;s momme states total
              cloth weight rather than pure silk content.
            </p>
          </>
        }
      >
        <SpecComparison rows={ROWS} />

        <section className="mt-12 border-l-2 border-jade pl-5">
          <h2 className="font-display text-xl font-medium text-jade-deep">
            The comparison most buyers actually need
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            If the choice is between two weaves at the same weight, the tie is
            broken by hand and by what the garment has to do: hold a fold
            (habotai), float (georgette), reflect light (satin), or hold a
            sculpted shape with visible texture (dupioni). Weight settles the
            opacity question; weave settles everything else.
          </p>
          <Link
            href="/silk-fabrics"
            className="mt-3 inline-block text-sm font-medium text-jade hover:underline"
          >
            See the weaves described by construction →
          </Link>
        </section>
      </ToolShell>
    </>
  );
}
