import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmbroideryBand } from "@/components/EmbroideryBand";
import { featuredProducts } from "@/lib/products";
import { pressItems } from "@/lib/press";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero：深墨绿 + 金，紫禁城绿金刺绣的意象 */}
        <section className="bg-jade-deep text-ivory">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <h1 className="font-display max-w-3xl text-4xl font-medium leading-[1.15] md:text-6xl">
              Raw silk and greige, sourced from the world&apos;s raw silk
              capital.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
              From the couture house that dressed the Oscars red carpet, we
              supply Yizhou mulberry raw silk, greige fabric and douppioni to
              textile mills, brands and designers worldwide. No retail, B2B
              only.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/samples"
                className="rounded-full bg-gold-bright px-7 py-3.5 text-sm font-semibold text-jade-deep transition-colors hover:bg-ivory"
              >
                Request Sample Book (${siteConfig.trade.swatchFee} → credited)
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-gold-bright/60 px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:border-gold-bright hover:text-gold-bright"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </section>

        {/* 品牌刺绣纹样带 */}
        <EmbroideryBand id="band-hero" />

        {/* 核心产品 */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-medium text-jade-deep md:text-4xl">
              Three primary silk products
            </h2>
            <p className="mt-3 max-w-2xl text-base text-ink-soft">
              Our core supply spans the three grades and forms buyers request
              most: raw silk for weaving, greige fabric for finishing, and
              douppioni for structured couture.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group border border-line bg-ivory p-8 transition-colors hover:border-gold"
              >
                <h3 className="font-display text-2xl font-medium text-jade-deep group-hover:text-jade">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {p.introAnswer}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-gold transition-transform group-hover:translate-x-1">
                  View details →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 品牌背书 */}
        <section className="border-y border-gold/40 bg-ivory-deep">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="mb-10">
              <h2 className="font-display max-w-2xl text-3xl font-medium text-jade-deep md:text-4xl">
                Worn on the Oscars red carpet, sourced from Yizhou.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-ink-soft">
                The Christopher Bu couture house has dressed leading names for
                the world&apos;s most-watched red carpets. That same eye for
                silk quality now selects every grade we ship.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {pressItems.map((item) => (
                <div key={item.name} className="border-l-2 border-gold pl-6">
                  <p className="text-sm font-medium text-ink-muted">
                    {item.role} · {item.year}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-medium text-jade-deep">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold">
                    {item.event}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                  <p className="mt-3 text-xs text-ink-muted">
                    As reported by: {item.sources.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 产地背书：绿色块 + 金边 */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-3xl font-medium text-jade-deep md:text-4xl">
                Yizhou: the world&apos;s largest raw silk origin.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                Yizhou, in Guangxi, China, has held the country&apos;s top
                ranking for mulberry field area, cocoon output and raw silk
                production for over two decades. Its raw silk regularly reaches
                5A and 6A grades, the highest quality tiers, and supplies
                leading luxury brands worldwide.
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                &ldquo;世界桑蚕看中国，中国桑蚕看宜州&rdquo; — World
                sericulture looks to China; China&apos;s sericulture looks to
                Yizhou.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "5A / 6A", l: "Raw silk grades achieved" },
                { n: "20+ yrs", l: "No.1 silk county ranking" },
                { n: "20/22D", l: "Standard raw silk denier" },
                { n: "B2B", l: "Trade only, no retail" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="border border-gold/70 bg-jade p-6 text-ivory"
                >
                  <p className="font-display text-3xl font-semibold text-gold-bright">
                    {s.n}
                  </p>
                  <p className="mt-2 text-sm text-ivory/85">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA：深绿底 + 内嵌金边画框 */}
        <section className="bg-jade-deep text-ivory">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="border border-gold/50 px-8 py-12 md:px-14">
              <h2 className="font-display max-w-2xl text-3xl font-medium md:text-4xl">
                Verify hand, grade and color before you commit.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/75">
                Order our ${siteConfig.trade.swatchFee} sample book, the fee is
                credited against your first bulk order. Need a custom weave or
                color? Tell us your MOQ, deadline and destination.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/samples"
                  className="rounded-full bg-gold-bright px-7 py-3.5 text-sm font-semibold text-jade-deep transition-colors hover:bg-ivory"
                >
                  Request Sample Book
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-ivory/40 px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:border-gold-bright hover:text-gold-bright"
                >
                  Contact B2B Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
