import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/hub-utils";
import { SpecTable } from "@/components/AnswerBlock";
import { ToolShell } from "@/components/ToolShell";
import { yarnCountFrom } from "@/lib/silk-units";
import { YarnCountConverter } from "./Converter";

const UPDATED = "2026-11-14";

export const metadata: Metadata = {
  title: "Silk Yarn Count Converter: Denier, Tex, dtex, Nm, Ne",
  description:
    "Convert silk yarn counts between denier, tex, dtex, Nm and Ne. 20/22D is 2.3 tex and about 435 Nm. Formulas, a reference table and the ISO/ASTM basis.",
  keywords: [
    "yarn count converter",
    "denier to tex",
    "denier to nm",
    "silk denier converter",
    "tex to denier",
    "yarn count conversion formula",
    "20/22 denier in tex",
    "ne to nm",
    "silk yarn numbering",
  ],
  alternates: { canonical: "/tools/silk-yarn-count-converter" },
  openGraph: pageOpenGraph("/tools/silk-yarn-count-converter"),
};

const REFERENCE_DENIERS = [13, 20, 21, 22, 27, 42, 63, 84, 126, 210];

const faq = [
  {
    q: "What is 20/22 denier in tex and Nm?",
    a: "20/22 denier covers 20 to 22 denier, so 2.22 to 2.44 tex, or roughly 410 to 450 Nm. Denier divided by 9 gives tex; 1,000 divided by tex gives Nm. The slash notation means a range, not a fraction — the lot averages somewhere inside it.",
  },
  {
    q: "Why is silk measured in denier and cloth measured in momme?",
    a: "They answer different questions. Denier weighs yarn (grams per 9,000 m), so it describes the filament you buy on a cone. Momme weighs woven cloth (grams per square metre), so it describes the fabric you buy on a roll. One does not convert into the other without knowing the weave density.",
  },
  {
    q: "Does a higher denier mean better silk?",
    a: "No. Denier is thickness, not grade. Finer denier means a finer filament, which lets a mill weave lighter, smoother cloth — but grade (4A, 5A, 6A) is what states evenness and cleanness. A coarse yarn can be top grade, and a fine yarn can be poor.",
  },
  {
    q: "What does 2/20/22D mean?",
    a: "Two plies of 20/22 denier yarn twisted together. The effective linear density is doubled: about 42 denier, 4.7 tex, roughly 215 Nm. Ply notation is written ply-count then count — 2/20/22D is two ends, not one end of 42 denier.",
  },
  {
    q: "Why do Nm and Ne give approximate answers?",
    a: "Nm and Ne are indirect counts — they measure length per fixed weight, so they depend on moisture regain and twist level as well as thickness. Denier, dtex and tex are direct weight-per-length measures and convert exactly. Treat any filament-to-spun conversion as a comparison, not a specification.",
  },
];

const related = [
  {
    href: "/products/raw-silk",
    label: "Raw silk yarn 20/22D",
    note: "White, dupion, luxury and GOTS organic",
  },
  {
    href: "/raw-silk-specs",
    label: "Raw silk specification sheet",
    note: "Denier, 4A/5A/6A grades, HS 5002, packing",
  },
  {
    href: "/tools/momme-gsm-oz-converter",
    label: "Momme to GSM converter",
    note: "The cloth-side counterpart to this page",
  },
  {
    href: "/silk-fabrics",
    label: "Silk fabric directory",
    note: "Nine weaves with momme and width",
  },
];

export default function YarnCountPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools/" },
    { name: "Yarn count converter", path: "/tools/silk-yarn-count-converter/" },
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
              headline: "Silk Yarn Count Converter",
              description:
                "Convert silk yarn counts between denier, tex, dtex, Nm and Ne, with the ISO 1144 and ASTM D2260 basis.",
              path: "/tools/silk-yarn-count-converter/",
              datePublished: UPDATED,
              dateModified: UPDATED,
            }),
          ),
        }}
      />

      <ToolShell
        h1="Silk Yarn Count Converter"
        answer="Divide denier by 9 to get tex, and 1,000 by tex to get Nm. So 20/22D silk is 2.22–2.44 tex, about 410–450 Nm, and roughly 20–22 Ne. Denier, dtex and tex convert exactly; Nm and Ne are nominal."
        updated={UPDATED}
        methodSources={[
          {
            publisher: "ISO",
            title:
              "ISO 1144 — Textiles: universal system for designating linear density (tex)",
            year: "2016",
          },
          {
            publisher: "ASTM International",
            title:
              "ASTM D2260 — Standard tables of conversion factors for yarn numbering systems",
          },
          {
            publisher: "GB/T 1797-2008",
            title: "生丝 (Raw silk) — the Chinese standard for the 20/22D notation",
            year: "2008",
            url: "https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7764FD3A7E05397BE0A0AB82A",
          },
        ]}
        faq={faq}
        related={related}
        method={
          <>
            <p>
              There are two opposite ways to number a yarn, and almost every
              conversion mistake comes from mixing them. Direct systems measure
              weight per fixed length — a bigger number is a thicker yarn.
              Indirect systems measure length per fixed weight — a bigger number
              is a finer yarn.
            </p>
            <p>
              Denier, dtex and tex are direct. Nm and Ne are indirect. Everything
              converts cleanly through tex:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>tex = denier ÷ 9 (denier is g/9,000 m; tex is g/1,000 m)</li>
              <li>dtex = tex × 10</li>
              <li>Nm = 1,000 ÷ tex (metres per gram)</li>
              <li>Ne = 590.5 ÷ tex (840-yard hanks per pound)</li>
              <li>Nm ≈ Ne × 1.693</li>
            </ul>
            <p>
              The 590.5 constant is the general one used for man-made and
              blended staple. Pure cotton uses 583.1, which is why a cotton
              count converted here can differ in the third digit from a cotton
              mill&apos;s figure. For silk filament — which is what this page is
              for — denier and tex are the numbers that matter, and those are
              exact.
            </p>
          </>
        }
      >
        <YarnCountConverter />

        <section className="mt-12">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Reference table: denier in every unit
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Rows cover the deniers that come up in silk sourcing, including the
            20/22D range at both ends.
          </p>
          <div className="mt-5">
            <SpecTable
              caption="Silk yarn counts converted from denier into tex, dtex, Nm and Ne"
              rows={REFERENCE_DENIERS.map((d) => {
                const c = yarnCountFrom(d, "denier");
                return {
                  label: `${d}D`,
                  value: (
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1 tabular-nums">
                      <span>{c.tex.toFixed(2)} tex</span>
                      <span className="text-ink-muted">
                        {c.dtex.toFixed(1)} dtex · {c.nm.toFixed(0)} Nm ·{" "}
                        {c.ne.toFixed(1)} Ne
                      </span>
                    </span>
                  ),
                };
              })}
              note="Denier / tex / dtex are exact. Nm and Ne are nominal equivalents using the general Ne constant 590.5."
            />
          </div>
        </section>

        <section className="mt-12 border-l-2 border-jade pl-5">
          <h2 className="font-display text-xl font-medium text-jade-deep">
            Denier is not momme
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            A quotation that mixes them up is worth questioning. 20/22D
            describes the yarn on the cone; 19 momme describes the woven cloth
            on the roll. Converting between them needs the weave density, which
            is why no honest converter offers a direct button.
          </p>
        </section>
      </ToolShell>
    </>
  );
}
