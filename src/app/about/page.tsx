import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { pressItems } from "@/lib/press";

export const metadata: Metadata = {
  title: "About — Christopher Bu × Yizhou Silk",
  description:
    "Christopher Bu × Yizhou Silk bridges a couture house's red-carpet heritage with Yizhou, China — the world's largest raw silk origin — to supply raw silk, greige and douppioni to the global textile industry.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-display max-w-3xl text-4xl font-medium text-jade-deep md:text-5xl">
          A couture heritage, rooted in the world&apos;s silk capital.
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
            greige fabric and douppioni from Yizhou partner mills — for textile
            mills, brands and designers worldwide.
          </p>
        </div>

        {/* 品牌背书 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Recognized on the world stage
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {pressItems.map((item) => (
              <div key={item.name} className="border-l-2 border-gold pl-6">
                <p className="text-sm font-medium text-ink-muted">
                  {item.role} · {item.year}
                </p>
                <h3 className="font-display mt-2 text-2xl font-medium text-jade-deep">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">{item.event}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                <p className="mt-3 text-xs text-ink-muted">
                  As reported by: {item.sources.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 价值观 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            How we work
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                t: "Source-first",
                d: "We source directly from Yizhou partner mills, not through layers of intermediaries — for verifiable origin and consistent quality.",
              },
              {
                t: "Designer's eye",
                d: "Couture-grade judgment on hand, grade and finish, applied to raw material sourcing.",
              },
              {
                t: "Transparent trade",
                d: "Clear terms, verifiable certification, and honest specifications — no retail, B2B only.",
              },
            ].map((v) => (
              <div key={v.t} className="border border-line p-7">
                <h3 className="font-display text-xl font-medium text-jade-deep">
                  {v.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
