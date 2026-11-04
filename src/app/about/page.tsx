import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { pressItems } from "@/lib/press";

export const metadata: Metadata = {
  title: "About Us — Christopher Bu × Yizhou Silk",
  description:
    "Christopher Bu × Yizhou Silk bridges a couture house's red-carpet heritage with Yizhou, China — the world's largest raw silk origin — to supply raw silk, greige and dupioni to the global textile industry.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-display max-w-3xl text-4xl font-medium text-jade-deep md:text-5xl">
          About Christopher Bu × Yizhou Silk
        </h1>

        <div className="mt-12 max-w-3xl space-y-6 text-base leading-relaxed text-ink-soft">
          <p>
            Christopher Bu is the couture house behind some of the most
            memorable red-carpet silk gowns of the past decade — including the
            &ldquo;Forbidden City&rdquo;-inspired series whose jacquard and silk
            craftsmanship was worn at the Academy Awards and celebrated by
            international media.
          </p>
          <p>
            The house&apos;s founder was born in Yizhou, Guangxi — the region
            known as the world&apos;s largest raw silk origin, where mulberry
            sericulture has thrived for centuries and raw silk regularly reaches
            the highest 5A and 6A grades.
          </p>
          <p>
            Christopher Bu × Yizhou Silk brings these two threads together:
            couture-grade design judgment, applied to the sourcing of raw silk,
            greige fabric and dupioni from local mills — for textile
            mills, brands and designers worldwide.
          </p>
        </div>

        {/* 品牌背书 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Recognized on the world stage
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {pressItems.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group block border border-line bg-ivory p-8 transition-colors hover:border-gold"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full border border-gold/40 px-3 py-1 font-medium text-gold">
                    {item.type}
                  </span>
                  <span className="text-ink-muted">{item.publishDate}</span>
                </div>
                <h3 className="font-display mt-4 text-xl font-medium text-jade-deep group-hover:text-jade">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.summary}
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-gold transition-transform group-hover:translate-x-1">
                  Read article →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* How we work — 9 步合作流程 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            How we work
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Nine steps keep specifications, commercial terms, sampling, bulk
            production and delivery aligned.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Inquiry", d: "Share the product, quantity, target market and custom specifications." },
              { t: "Customized solutions", d: "We recommend the material, construction, branding and packaging route for written confirmation." },
              { t: "Price quotation", d: "Formal quotation with reference MOQ, lead time and service charges." },
              { t: "Sample proofing", d: "Physical sample produced for buyer confirmation." },
              { t: "Sales contract", d: "Approved specifications, tolerances and commercial terms locked in signed documents." },
              { t: "Production", d: "Bulk production against the confirmed material, approved sample and workmanship standard." },
              { t: "Inspection", d: "Comprehensive inspection of quality and all details." },
              { t: "Payment", d: "Deposit and balance settled under the verified pro forma invoice or contract." },
              { t: "Delivery", d: "Packed and dispatched under the confirmed route, Incoterm and schedule." },
            ].map((step, i) => (
              <li key={step.t} className="border border-line p-6">
                <p className="text-xs font-medium text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-lg font-medium text-jade-deep">
                  {step.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}
