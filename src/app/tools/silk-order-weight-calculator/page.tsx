import type { Metadata } from "next";
import Link from "next/link";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/hub-utils";
import { SpecTable } from "@/components/AnswerBlock";
import { ToolShell } from "@/components/ToolShell";
import { MOMME_REFERENCE } from "@/lib/silk-units";
import { OrderWeightCalculator } from "./Calculator";

const UPDATED = "2026-11-14";

export const metadata: Metadata = {
  title: "Silk Order Weight Calculator: Metres to Kilograms",
  description:
    "Convert metres of silk fabric into kilograms: metres × width × gsm ÷ 1000. Enter garment count, fabric per garment, width and momme for order weight and wastage.",
  keywords: [
    "silk fabric weight calculator",
    "metres to kg fabric",
    "fabric order weight calculator",
    "silk kg per metre",
    "fabric consumption calculator",
    "how much does a metre of silk weigh",
    "silk fabric quantity calculator",
    "fabric wastage calculator",
  ],
  alternates: { canonical: "/tools/silk-order-weight-calculator" },
  openGraph: pageOpenGraph("/tools/silk-order-weight-calculator"),
};

const faq = [
  {
    q: "How much does one metre of silk weigh?",
    a: "It depends on width and weight: one metre of 19 momme silk at 140 cm weighs 82.5 × 1.4 ÷ 1000 = 0.116 kg. The same weight at 114 cm is 0.094 kg. At 22 momme and 140 cm it is 0.134 kg. Width matters as much as momme.",
  },
  {
    q: "Why does one supplier quote per kilogram and another per metre?",
    a: "Two different things are being sold. Silk fabric is normally quoted per metre or per yard, because that is how a garment factory cuts it. Raw silk yarn and greige are quoted per kilogram, because yarn is a material rather than a cloth, and freight and duty run on weight. To compare the two, convert the per-metre figure to a weight using this calculator, then check the widths match — a per-kilogram price at 114 cm and one at 140 cm buy different amounts of cloth.",
  },
  {
    q: "What wastage allowance should I use for silk?",
    a: "Typically 10–15% for plain weaves cut from a clean roll, and higher against a print, a stripe or a one-way nap, where pieces must be nested in one direction. Dupioni and jacquard with visible slubs or motif repeats usually need the upper end, because matching the repeat consumes extra cloth.",
  },
  {
    q: "Does this calculator work for greige fabric?",
    a: "Not directly. Greige silk still carries sericin gum, which is 25–30% of the raw weight, and degumming removes up to 25% of that. A greige order therefore weighs more than the same order at the quoted finished momme. Ask your supplier whether the momme was measured greige or finished.",
  },
  {
    q: "Can I use this to price an order?",
    a: "You can use the weight to compare quotations on the same basis, but this is not a price. Fabric is quoted against a specification — grade, momme, width, colour route and quantity all move the number — which is why we publish no unit price.",
  },
];

const related = [
  {
    href: "/tools/momme-gsm-oz-converter",
    label: "Momme to GSM converter",
    note: "If you know the weight in momme only",
  },
  {
    href: "/silk-fabric-price-guide",
    label: "Silk fabric price guide",
    note: "What a quotation should state, and why we publish no price list",
  },
  {
    href: "/trade-terms",
    label: "Trade terms",
    note: "FOB / FCA, T/T, MOQ and lead time in writing",
  },
  {
    href: "/products",
    label: "All silk products",
    note: "Nine weaves with momme ranges and widths",
  },
];

export default function OrderWeightPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools/" },
    { name: "Order weight calculator", path: "/tools/silk-order-weight-calculator/" },
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
              headline: "Silk Order Weight Calculator",
              description:
                "Convert metres of silk fabric into kilograms using width and momme, including a wastage allowance.",
              path: "/tools/silk-order-weight-calculator/",
              datePublished: UPDATED,
              dateModified: UPDATED,
            }),
          ),
        }}
      />

      <ToolShell
        h1="Silk Order Weight Calculator"
        answer="Order weight in kilograms is metres × width in metres × grams per square metre ÷ 1000. One metre of 19 momme silk at 140 cm weighs 0.116 kg. Add 10–15% for cutting wastage. Fabric is quoted per metre, but freight, duty and any raw-silk component run on weight — this is the number that converts between them."
        updated={UPDATED}
        methodSources={[
          {
            publisher: "Wikipedia",
            title: "Units of textile measurement — momme and g/m²",
            url: "https://en.wikipedia.org/wiki/Units_of_textile_measurement",
          },
          {
            publisher: "Materials (MDPI)",
            title:
              "Historical Silk: A Novel Method to Evaluate Degumming with Non-Invasive Infrared Spectroscopy",
            year: "2023",
            url: "https://www.mdpi.com/2154760",
          },
        ]}
        faq={faq}
        related={related}
        method={
          <>
            <p>
              The maths is area times weight. A metre of fabric covers the
              width in metres times one metre of area, so its mass in grams is
              width × g/m². Divide by 1,000 for kilograms:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>g/m² = momme × 4.34</li>
              <li>kg per metre = width(m) × g/m² ÷ 1000</li>
              <li>order kg = garments × metres per garment × (1 + wastage) × kg per metre</li>
            </ul>
            <p>
              What the tool will not do: it does not lay out a marker, so it
              cannot tell you the true minimum consumption for a pattern. That
              number comes from your pattern room, because it depends on the
              piece shapes, the size ratio you cut and the direction the pieces
              must face. The wastage field is where you enter the difference
              between your marker and the theoretical area.
            </p>
            <p>
              One more thing worth stating plainly: a greige order does not
              weigh what a finished order weighs. Raw silk carries sericin gum
              at 25–30% of its weight, and degumming removes up to a quarter of
              that, so cloth bought greige arrives heavier and finishes lighter.
              If the momme on your quotation was measured on greige cloth, the
              kilograms you receive will exceed this estimate.
            </p>
          </>
        }
      >
        <OrderWeightCalculator />

        <section className="mt-12">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            How much a metre weighs, by weight and width
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Kilograms for one metre of fabric at the two widths we stock most.
          </p>
          <div className="mt-5">
            <SpecTable
              caption="Weight of one metre of silk in kilograms at 114 cm and 140 cm widths, by momme"
              rows={MOMME_REFERENCE.filter((r) => r.momme <= 30).map((r) => ({
                label: `${r.momme} momme`,
                value: (
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1 tabular-nums">
                    <span>
                      {(r.gsm * 1.14) / 1000 < 0.001
                        ? "—"
                        : `${((r.gsm * 1.14) / 1000).toFixed(3)} kg`}
                    </span>
                    <span className="text-ink-muted">
                      at 114 cm · {((r.gsm * 1.4) / 1000).toFixed(3)} kg at 140 cm
                    </span>
                  </span>
                ),
              }))}
              note="Computed as width(m) × gsm ÷ 1000, where gsm = momme × 4.34. Finished-cloth momme; greige cloth is heavier."
            />
          </div>
        </section>

        <section className="mt-12 border-l-2 border-jade pl-5">
          <h2 className="font-display text-xl font-medium text-jade-deep">
            Before you send a PO, ask two questions
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            First: was the momme measured greige or finished? Second: is the
            width the greige width or the finished width, after shrinkage? A
            quotation that answers both is comparable; one that answers neither
            is not, whatever the unit price says.
          </p>
          <Link
            href="/silk-fabric-price-guide"
            className="mt-3 inline-block text-sm font-medium text-jade hover:underline"
          >
            Read the twelve-point quotation checklist →
          </Link>
        </section>
      </ToolShell>
    </>
  );
}
