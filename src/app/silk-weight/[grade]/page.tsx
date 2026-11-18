import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnswerBlock } from "@/components/AnswerBlock";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/hub-utils";
import { silkWeightGrades, silkWeightBySlug } from "@/lib/silk-weight";
import { products } from "@/lib/products";

/**
 * Only the five published grades exist. `dynamicParams = false` keeps the
 * export static and makes /silk-weight/31-momme a real 404 instead of an
 * on-demand render, which is the difference between a data page and a
 * doorway template.
 */
export const dynamicParams = false;

type Props = {
  params: Promise<{ grade: string }>;
};

export function generateStaticParams() {
  return silkWeightGrades.map((g) => ({ grade: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { grade } = await params;
  const entry = silkWeightBySlug[grade];
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `/silk-weight/${entry.slug}` },
    openGraph: pageOpenGraph(`/silk-weight/${entry.slug}`),
  };
}

const productName = (slug: string) =>
  products.find((p) => p.slug === slug)?.name ?? slug;

export default async function SilkWeightPage({ params }: Props) {
  const { grade } = await params;
  const entry = silkWeightBySlug[grade];
  if (!entry) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Silk weight", path: "/silk-weight" },
    { name: entry.h1.replace(/:.*$/, ""), path: `/silk-weight/${entry.slug}` },
  ];

  const jsonLd = [
    articleJsonLd({
      headline: entry.h1,
      description: entry.description,
      path: `/silk-weight/${entry.slug}`,
      image: "/og-cover.png",
      datePublished: "2026-11-15",
      dateModified: "2026-11-15",
    }),
    breadcrumbJsonLd(crumbs),
    faqJsonLd(entry.faqs),
  ];

  const lighter = silkWeightGrades[silkWeightGrades.indexOf(entry) - 1];
  const heavier = silkWeightGrades[silkWeightGrades.indexOf(entry) + 1];

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
          <Link href="/silk-weight" className="hover:text-gold">
            Silk weight
          </Link>
          <span className="mx-2">/</span>
          <span>{entry.momme} momme</span>
        </nav>

        <h1 className="font-display mt-6 text-4xl font-medium text-jade-deep md:text-5xl">
          {entry.h1}
        </h1>

        <p className="mt-4 text-sm text-ink-muted">
          {entry.momme} momme = {entry.gsm.toFixed(2)} g/m² · woven in our range
          as {entry.weaves.join(", ")} · last checked 15 November 2026
        </p>

        <AnswerBlock answer={entry.answer} label="Quick answer" updated="2026-11-15" />

        {/* Weight per meter: the number the cost sheet needs. */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            What one running meter weighs
          </h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-left text-sm">
              <caption className="pb-3 text-xs text-ink-muted">
                Weight of one running meter of {entry.momme} momme silk at each
                standard width, derived from {entry.gsm.toFixed(2)} g/m². Freight
                and duty run on these figures, not on the momme number.
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
                    Width
                  </th>
                  <th scope="col" className="py-2 font-semibold text-jade-deep">
                    kg per meter
                  </th>
                </tr>
              </thead>
              <tbody>
                {entry.rows.map((r) => (
                  <tr key={r.widthCm} className="border-b border-jade-deep/10">
                    <td className="py-2 pr-4">{entry.momme} momme</td>
                    <td className="py-2 pr-4">{entry.gsm.toFixed(2)}</td>
                    <td className="py-2 pr-4">{r.widthCm} cm</td>
                    <td className="py-2">{r.kgPerMeter.toFixed(4)} kg</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
            Need the other weights at this width, or the conversion in the
            direction you are working? The{" "}
            <Link href="/tools/momme-gsm-oz-converter" className="underline underline-offset-2 hover:text-gold">
              momme to g/m² converter
            </Link>{" "}
            works both ways, and the{" "}
            <Link href="/tools/silk-order-weight-calculator" className="underline underline-offset-2 hover:text-gold">
              order weight calculator
            </Link>{" "}
            turns meters, width and momme into the kilograms a shipment will be
            charged on.
          </p>
        </section>

        {entry.sections.map((s) => (
          <section key={s.h2} className="mt-14">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              {s.h2}
            </h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            {s.table ? (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <caption className="pb-3 text-xs text-ink-muted">
                    Neighbouring weights, shown as g/m² and as the weight of one
                    running meter at each standard width. Silk is quoted per meter
                    or yard; only raw silk yarn is sold by weight.
                  </caption>
                  <thead>
                    <tr className="border-b border-jade-deep/20">
                      {s.table.head.map((h) => (
                        <th key={h} scope="col" className="py-2 pr-4 font-semibold text-jade-deep">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((row) => (
                      <tr key={row[0]} className="border-b border-jade-deep/10">
                        {row.map((cell, i) => (
                          <td key={i} className="py-2 pr-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </section>
        ))}

        <section className="mt-14">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Questions buyers ask about {entry.momme} momme
          </h2>
          <dl className="mt-6 space-y-6">
            {entry.faqs.map((f) => (
              <div key={f.q} className="border-l-2 border-gold pl-5">
                <dt className="font-medium text-jade-deep">{f.q}</dt>
                <dd className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14 border border-jade-deep/15 bg-ivory-deep p-6 md:p-8">
          <h2 className="font-display text-xl font-medium text-jade-deep">
            Weaves we quote at {entry.momme} momme
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {entry.related.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/products/${slug}`}
                  className="inline-block border border-jade-deep/20 px-4 py-2 text-sm text-jade-deep transition hover:border-gold hover:text-gold"
                >
                  {productName(slug)}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-muted">
            Color and finish are confirmed per order: greige, dyed to order from
            a standard shade card, or a custom color. Values on this page are
            published specifications; the written quotation settles the rest.
          </p>
        </section>

        <nav className="mt-12 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
          <Link href="/silk-weight" className="hover:text-gold">
            All five weights
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/silk-momme-guide" className="hover:text-gold">
            What momme measures, and greige versus finished
          </Link>
          {lighter ? (
            <>
              <span aria-hidden="true">·</span>
              <Link href={`/silk-weight/${lighter.slug}`} className="hover:text-gold">
                Lighter: {lighter.momme} momme
              </Link>
            </>
          ) : null}
          {heavier ? (
            <>
              <span aria-hidden="true">·</span>
              <Link href={`/silk-weight/${heavier.slug}`} className="hover:text-gold">
                Heavier: {heavier.momme} momme
              </Link>
            </>
          ) : null}
        </nav>
      </main>
      <Footer />
    </>
  );
}
