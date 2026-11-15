import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnswerBlock } from "@/components/AnswerBlock";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/hub-utils";
import { silkWeightGrades } from "@/lib/silk-weight";

const UPDATED = "2026-11-15";

export const metadata: Metadata = {
  title: "Silk Weight Ladder: 6, 16, 19, 22 and 30 Momme Compared",
  description:
    "Five momme grades with the facts that belong to each one: which weaves reach that weight, what it weighs per running metre at 114 and 140 cm, and which buying decision it settles.",
  keywords: [
    "silk weight chart",
    "19 momme silk",
    "22 momme silk",
    "16 momme silk",
    "30 momme silk",
    "6 momme silk",
    "silk momme by use",
  ],
  alternates: { canonical: "/silk-weight" },
  openGraph: pageOpenGraph("/silk-weight"),
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Silk weight", path: "/silk-weight" },
];

export default function SilkWeightIndex() {
  const jsonLd = [
    breadcrumbJsonLd(crumbs),
    itemListJsonLd(
      "Silk weight ladder",
      silkWeightGrades.map((g) => ({
        name: `${g.momme} momme silk`,
        path: `/silk-weight/${g.slug}`,
      }))
    ),
  ];

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Silk weight</span>
        </nav>

        <h1 className="font-display mt-6 text-4xl font-medium text-jade-deep md:text-5xl">
          Five silk weights, and what each one actually decides
        </h1>

        <p className="mt-4 text-sm text-ink-muted">Last checked {UPDATED}</p>

        <AnswerBlock
          answer="Momme is the weight of woven silk in g/m², and one momme is 4.340 g/m². These five pages cover the weights our range is actually specified at, each with the weaves that reach it and the weight of one running metre at 114 and 140 cm."
          label="Quick answer"
          updated={UPDATED}
        />

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-ink-soft">
          A weight on its own is not a specification. Two cloths can both be 19
          momme and behave nothing alike, because momme measures mass per area and
          says nothing about construction. So each page below leads with the facts
          that belong to that weight only: which weaves are published at it,
          the weight of a running metre at each standard width, and the buying
          question the weight settles. If you want the unit itself explained,
          including why a greige figure and a finished figure are different
          numbers, start with the{" "}
          <Link href="/silk-momme-guide" className="underline underline-offset-2 hover:text-gold">
            momme guide
          </Link>
          .
        </p>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="pb-3 text-xs text-ink-muted">
              The five weights in regular supply, as g/m² and as the weight of one
              running metre at each standard width. Derived from 1 momme = 4.340
              g/m²; widths per published product specifications.
            </caption>
            <thead>
              <tr className="border-b border-jade-deep/20">
                <th scope="col" className="py-2 pr-4 font-semibold text-jade-deep">
                  Weight
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold text-jade-deep">
                  g/m²
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold text-jade-deep">
                  kg/m at 114 cm
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold text-jade-deep">
                  kg/m at 140 cm
                </th>
                <th scope="col" className="py-2 font-semibold text-jade-deep">
                  Weaves in our range
                </th>
              </tr>
            </thead>
            <tbody>
              {silkWeightGrades.map((g) => {
                const at114 = g.rows.find((r) => r.widthCm === 114);
                const at140 = g.rows.find((r) => r.widthCm === 140);
                return (
                  <tr key={g.slug} className="border-b border-jade-deep/10">
                    <td className="py-3 pr-4">
                      <Link
                        href={`/silk-weight/${g.slug}`}
                        className="font-medium text-jade-deep underline underline-offset-2 hover:text-gold"
                      >
                        {g.momme} momme
                      </Link>
                    </td>
                    <td className="py-3 pr-4">{g.gsm.toFixed(2)}</td>
                    <td className="py-3 pr-4">
                      {at114 ? `${at114.kgPerMetre.toFixed(4)} kg` : "not woven"}
                    </td>
                    <td className="py-3 pr-4">
                      {at140 ? `${at140.kgPerMetre.toFixed(4)} kg` : "not woven"}
                    </td>
                    <td className="py-3 text-xs text-ink-soft">
                      {g.weaves.join(", ")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {silkWeightGrades.map((g) => (
            <li key={g.slug} className="border border-jade-deep/15 p-6">
              <Link href={`/silk-weight/${g.slug}`} className="group">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                  {g.momme} momme · {g.gsm.toFixed(2)} g/m²
                </p>
                <p className="font-display mt-2 text-xl font-medium text-jade-deep group-hover:text-gold">
                  {g.h1.replace(/:.*$/, "")}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {g.answer}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-14 border border-gold bg-ivory-deep p-6 md:p-8">
          <h2 className="font-display text-xl font-medium text-jade-deep">
            Turning a weight into an order quantity
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            Fabric is quoted per metre or per yard, and only raw silk yarn is sold
            by weight. The moment a shipment crosses a border, though, the charge
            is calculated on kilograms, so the per-metre figures above are what a
            cost sheet needs. Two tools do the arithmetic:
          </p>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm">
            <li>
              <Link
                href="/tools/momme-gsm-oz-converter"
                className="inline-block border border-jade-deep/20 px-4 py-2 text-jade-deep transition hover:border-gold hover:text-gold"
              >
                Momme to g/m² converter
              </Link>
            </li>
            <li>
              <Link
                href="/tools/silk-order-weight-calculator"
                className="inline-block border border-jade-deep/20 px-4 py-2 text-jade-deep transition hover:border-gold hover:text-gold"
              >
                Order weight calculator
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
