import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnswerBlock } from "@/components/AnswerBlock";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/hub-utils";

const UPDATED = "2026-11-14";

export const metadata: Metadata = {
  title: "Silk Calculators & Conversion Tools (B2B)",
  description:
    "Four working silk calculators: momme to g/m², yarn count between denier and tex, order weight from metres to kilograms, and a nine-weave comparison chart.",
  keywords: [
    "silk calculator",
    "silk conversion tools",
    "textile calculators",
    "silk weight calculator",
    "yarn count calculator",
  ],
  alternates: { canonical: "/tools" },
  openGraph: pageOpenGraph("/tools"),
};

const TOOLS = [
  {
    href: "/tools/momme-gsm-oz-converter",
    name: "Momme to GSM converter",
    answer:
      "Three-way conversion between momme, g/m² and oz/yd², with the full weight ladder by weave.",
    detail: "1 momme = 4.34 g/m²",
  },
  {
    href: "/tools/silk-yarn-count-converter",
    name: "Silk yarn count converter",
    answer:
      "Convert denier, dtex, tex, Nm and Ne. Useful when a yarn quotation arrives in a unit you do not buy in.",
    detail: "20/22D = 2.2–2.4 tex",
  },
  {
    href: "/tools/silk-order-weight-calculator",
    name: "Order weight calculator",
    answer:
      "Turn garments, metres per garment, width and momme into order kilograms — with a wastage allowance.",
    detail: "Silk is quoted per kg",
  },
  {
    href: "/tools/silk-spec-comparison",
    name: "Silk fabric comparison chart",
    answer:
      "Nine mulberry weaves side by side: momme range, g/m², width, signature and best use, filterable by weight band.",
    detail: "6 to 30 momme",
  },
];

export default function ToolsIndexPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools/" },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListJsonLd(
              "Silk calculators and conversion tools",
              TOOLS.map((t) => ({ name: t.name, path: t.href })),
            ),
          ),
        }}
      />

      <Header />
      <main id="main-content" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
          <Link href="/" className="hover:text-jade">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">Tools</span>
        </nav>

        <h1 className="font-display mt-6 text-4xl font-medium text-jade-deep md:text-5xl">
          Silk Calculators
        </h1>

        <AnswerBlock
          answer="Four calculators for the conversions that come up in silk sourcing: momme to g/m² and ounces, denier to tex and Nm, metres of fabric to order kilograms, and a nine-weave specification chart. Every formula is published on the page with its source."
          updated={UPDATED}
        />

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink">
          These exist because the same conversation keeps recurring: a buyer
          receives a weight in g/m² but their pattern room speaks momme, or a
          purchase order is written in metres while the quotation is priced per
          kilogram. Each tool does one conversion, shows the arithmetic, and
          says where the number stops being reliable.
        </p>

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {TOOLS.map((t) => (
            <li key={t.href}>
              <Link href={t.href} className="group block py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-xl font-medium text-jade-deep group-hover:text-jade">
                    {t.name}
                  </h2>
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-gold">
                    {t.detail}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                  {t.answer}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-12 border-l-2 border-jade pl-5">
          <h2 className="font-display text-xl font-medium text-jade-deep">
            What these tools do not do
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            There is no price estimator here. Silk is quoted against a
            specification — grade, weight, width, colour route and quantity —
            so any published price would be accurate for one combination and
            misleading for every other. What we publish is the basis: the
            weight maths above, and a quotation that states its own terms.
          </p>
          <Link
            href="/silk-fabric-price-guide"
            className="mt-3 inline-block text-sm font-medium text-jade hover:underline"
          >
            Why we publish no unit prices →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
