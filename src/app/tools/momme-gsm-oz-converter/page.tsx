import type { Metadata } from "next";
import Link from "next/link";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/hub-utils";
import { SpecTable } from "@/components/AnswerBlock";
import { ToolShell } from "@/components/ToolShell";
import {
  GSM_PER_MOMME,
  GSM_PER_OZ_YD2,
  MOMME_REFERENCE,
} from "@/lib/silk-units";
import { MommeConverter } from "./Converter";

const UPDATED = "2026-11-14";

export const metadata: Metadata = {
  title: "Momme to GSM Converter (Silk): mm, g/m² and oz/yd²",
  description:
    "Convert momme to g/m² and oz/yd² instantly: 1 momme = 4.34 g/m², so 19 momme is 82.5 g/m². Three-way converter plus the full silk weight ladder by weave.",
  keywords: [
    "momme to gsm",
    "momme to gsm converter",
    "silk weight converter",
    "19 momme to gsm",
    "22 momme to gsm",
    "momme calculator",
    "silk momme to grams per square meter",
    "gsm to momme",
    "momme to oz",
  ],
  alternates: { canonical: "/tools/momme-gsm-oz-converter" },
  openGraph: pageOpenGraph("/tools/momme-gsm-oz-converter"),
};

const faq = [
  {
    q: "How many g/m² is 19 momme silk?",
    a: "19 momme is 82.5 g/m² (19 × 4.34). It is the standard weight for silk satin and pillowcases: heavy enough to be opaque in a garment, light enough to drape. For comparison, 16 momme is 69.4 g/m² and 22 momme is 95.5 g/m².",
  },
  {
    q: "Is momme the same as millimetres?",
    a: "No. Momme is abbreviated mm in the trade, but it measures weight, not thickness — 19 momme silk is not 19 millimetres thick. One momme is 4.340 g/m², defined historically as the weight in pounds of a piece of silk 45 inches wide and 100 yards long.",
  },
  {
    q: "Why do two suppliers quote different g/m² for the same momme?",
    a: "Usually because one number is greige and the other is finished. Raw silk contains 25–30% sericin gum, and degumming removes up to 25% of the weight, so a greige cloth quoted at 19 momme can finish closer to 14–15 momme. Always ask which state the weight was measured in.",
  },
  {
    q: "How do I measure momme without a lab?",
    a: "Weigh one metre of fabric in grams on a kitchen scale, divide by the width in metres to get g/m², then divide by 4.34. A metre of 137 cm silk weighing 112 g is 112 ÷ 1.37 = 82 g/m², which is 82 ÷ 4.34 ≈ 19 momme.",
  },
  {
    q: "Is a higher momme always better?",
    a: "No. Momme is a weight, not a quality grade. Above roughly 25 momme a cloth becomes too dense for summer wear and costs more for no benefit, while 6–12 momme is correct for chiffon, georgette and linings. Match the weight to the weave and the end use.",
  },
];

const related = [
  {
    href: "/silk-momme-guide",
    label: "Silk momme guide",
    note: "What momme measures, and the greige-versus-finished gap",
  },
  { href: "/products/satin", label: "Satin silk fabric", note: "10–30 momme, 114/140 cm" },
  {
    href: "/products/habotai",
    label: "Habotai (pongee) silk",
    note: "6–16 momme plain weave for linings",
  },
  { href: "/products/dupioni", label: "Dupioni silk", note: "16/19 momme, slubbed surface" },
  {
    href: "/tools/silk-order-weight-calculator",
    label: "Order weight calculator",
    note: "Turn metres and momme into kilograms",
  },
];

export default function MommeConverterPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools/" },
    { name: "Momme converter", path: "/tools/momme-gsm-oz-converter/" },
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
              headline: "Momme to GSM Converter (Silk)",
              description:
                "Three-way silk weight converter between momme, g/m² and oz/yd², with the full momme ladder by weave.",
              path: "/tools/momme-gsm-oz-converter/",
              datePublished: UPDATED,
              dateModified: UPDATED,
            }),
          ),
        }}
      />

      <ToolShell
        h1="Momme to GSM Converter"
        answer="Multiply momme by 4.34 to get grams per square metre: 19 momme is 82.5 g/m², 22 momme is 95.5 g/m² and 30 momme is 130 g/m². Divide g/m² by 33.906 for ounces per square yard. Momme is a weight, not a thickness."
        updated={UPDATED}
        methodSources={[
          {
            publisher: "Wikipedia",
            title: "Units of textile measurement — momme definition",
            url: "https://en.wikipedia.org/wiki/Units_of_textile_measurement",
          },
          {
            publisher: "ISO",
            title: "ISO 1144 — Textiles: universal system for designating linear density (tex)",
            year: "2016",
          },
          {
            publisher: "ASTM International",
            title: "ASTM D2260 — Standard tables of conversion factors for yarn numbering",
          },
        ]}
        faq={faq}
        related={related}
        method={
          <>
            <p>
              Momme is a weight. The historical definition is the weight in
              pounds of a piece of silk 45 inches wide and 100 yards long:
              45 in × 100 yd is 104.5 m², and one pound is 453.6 g, so
              453.6 ÷ 104.5 gives 4.340 g/m² per momme. The name comes from the
              Japanese <em>monme</em>, a unit of mass fixed at 3.75 g — which is
              why momme and millimetres share the abbreviation but measure
              different things entirely.
            </p>
            <p>
              Because both g/m² and oz/yd² are area weights, the three-way
              conversion is a single division each way:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>g/m² = momme × {GSM_PER_MOMME}</li>
              <li>momme = g/m² ÷ {GSM_PER_MOMME}</li>
              <li>oz/yd² = g/m² ÷ {GSM_PER_OZ_YD2}</li>
            </ul>
            <p>
              One caveat this converter cannot fix: the arithmetic is exact, but
              the <em>input</em> is often not. Weight measured on greige cloth
              includes sericin that degumming will remove, so a greige
              &ldquo;19 momme&rdquo; can finish two to five momme lighter. Ask
              which state the figure was measured in before you compare two
              quotations.
            </p>
          </>
        }
      >
        <MommeConverter />

        <section className="mt-12">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            The momme ladder, by weave
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            g/m² and oz/yd² are computed from momme. The weave and end-use
            columns are the standard bands the trade works to, not conversions.
          </p>
          <div className="mt-5">
            <SpecTable
              caption="Silk weights in momme, g/m² and oz/yd², with the typical weave and end use for each"
              rows={MOMME_REFERENCE.map((row) => ({
                label: `${row.momme} momme`,
                value: (
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="tabular-nums">
                      {row.gsm.toFixed(1)} g/m² · {row.oz.toFixed(2)} oz/yd²
                    </span>
                    <span className="text-xs text-ink-muted">
                      {row.weave} — {row.use}
                    </span>
                  </span>
                ),
              }))}
              note="Weave bands follow the standard momme range per construction (habotai 5–16, chiffon 6–8, crepe de chine 12–16, organza 4–6, charmeuse 12–30). g/m² and oz/yd² are arithmetic conversions of the momme column."
            />
          </div>
        </section>

        <section className="mt-12 border-l-2 border-jade pl-5">
          <h2 className="font-display text-xl font-medium text-jade-deep">
            Converting the other way: denier is yarn, momme is cloth
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            If you are buying yarn rather than cloth, the unit is denier and
            momme does not apply — 20/22D describes the filament, not the woven
            weight. Use the yarn count converter for denier, tex, Nm and Ne.
          </p>
          <Link
            href="/tools/silk-yarn-count-converter"
            className="mt-3 inline-block text-sm font-medium text-jade hover:underline"
          >
            Open the yarn count converter →
          </Link>
        </section>
      </ToolShell>
    </>
  );
}
