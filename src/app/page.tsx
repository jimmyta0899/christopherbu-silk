import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products } from "@/lib/products";
import { pressItems } from "@/lib/press";
import { faqs } from "@/lib/faq";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.tagline,
    logo: `${siteConfig.url}/brand-logo.png`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CN",
    },
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    founder: {
      "@type": "Person",
      name: "Christopher Bu",
      jobTitle: "Founder & Designer",
    },
    sameAs: [siteConfig.social.instagram],
  };

  const rawSilk = products.find((p) => p.slug === "raw-silk")!;
  const otherProducts = products.filter((p) => p.slug !== "raw-silk");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero：深墨绿 + 金，紫禁城绿金刺绣的意象；左文右图 */}
        <section className="bg-jade-deep text-ivory">
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <h1 className="font-display max-w-3xl text-4xl font-medium leading-[1.15] md:text-6xl">
                  Raw Silk and Fabrics, sourced from the world&apos;s Silk
                  Capital.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80">
                  Christopher Bu is the couture house behind some of the
                  world&apos;s most-watched red-carpet silk gowns. Now the
                  brand brings that same eye for silk to its own line of
                  Yizhou mulberry raw silk, greige fabric and dupioni — for
                  textile mills, brands and designers worldwide.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/70">
                  From our roots in Yizhou — the world&apos;s largest raw silk
                  origin — we offer silk fabric for wholesale and export from
                  China, with OEKO-TEX and GOTS certification available on
                  request.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/samples"
                    className="rounded-full bg-gold-bright px-7 py-3.5 text-sm font-semibold text-jade-deep transition-colors hover:bg-ivory"
                  >
                    Request Sample
                  </Link>
                  <Link
                    href="/products"
                    className="rounded-full border border-gold-bright/60 px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:border-gold-bright hover:text-gold-bright"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
              <div className="relative md:justify-self-end">
                <figure className="w-full max-w-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/christopherbu-silk/blog/fan-bingbing-met-gala-illustration-640.webp"
                    srcSet="/christopherbu-silk/blog/fan-bingbing-met-gala-illustration-640.webp 640w, /christopherbu-silk/blog/fan-bingbing-met-gala-illustration.webp 1080w"
                    sizes="(max-width: 768px) 640px, 1080px"
                    alt="Fan Bingbing wearing a gold sequin gown with a silk jacquard cape by Christopher Bu at the 2015 Met Gala"
                    width={1080}
                    height={1080}
                    className="w-full border border-gold/40 object-cover"
                    fetchPriority="high"
                  />
                  <figcaption className="mt-3 text-base leading-relaxed text-gold-bright">
                    Fan Bingbing in Christopher Bu at the 2015 Met Gala — a
                    gold sequin gown with a silk jacquard cape. Illustration by
                    JiweiJW.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* 核心产品 */}
        <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-medium text-jade-deep md:text-4xl">
              Our Primary Silk Products
            </h2>
            <p className="mt-3 text-base text-ink-soft">
              Our core supply spans the three forms buyers request
              most: raw silk for weaving, greige fabric for finishing, and
              dupioni for structured couture.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              All of it comes from Yizhou, in Guangxi, China — the world&apos;s
              largest raw silk origin, holding the country&apos;s top ranking
              for mulberry field area, cocoon output and raw silk production
              for over two decades. Its raw silk regularly reaches 5A and 6A
              grades, the highest quality tiers.
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              &ldquo;世界桑蚕看中国，中国桑蚕看宜州&rdquo; — World
              sericulture looks to China; China&apos;s sericulture looks to
              Yizhou.
            </p>
          </div>

          {/* raw silk 主推大卡（左图右文）+ 4 绿色统计卡同行 */}
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-stretch">
            <Link
              href="/products/raw-silk"
              className="group flex flex-col overflow-hidden border border-line bg-ivory transition-colors hover:border-gold sm:flex-row"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/christopherbu-silk/products/raw-silk-cocoon.webp"
                alt="White silk cocoons and raw silk skeins on a linen cloth — raw silk from Yizhou"
                className="aspect-[4/3] w-full object-cover sm:w-2/5 sm:aspect-auto"
              />
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-display text-3xl font-medium text-jade-deep group-hover:text-jade">
                  {rawSilk.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {rawSilk.introAnswer}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-gold transition-transform group-hover:translate-x-1">
                  Source raw silk yarn →
                </span>
              </div>
            </Link>
            <div className="grid grid-cols-2 gap-4 lg:w-[340px] lg:self-stretch">
              {[
                { n: "5A / 6A", l: "Raw silk grades achieved" },
                { n: "20+ yrs", l: "No.1 silk county ranking" },
                { n: "20/22D", sub: "and more", l: "Standard raw silk denier" },
                { n: "OEKO-TEX / GOTS", l: "Certification available on request" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="flex h-full min-h-[96px] flex-col justify-center border border-gold/70 bg-jade px-5 py-4 text-ivory"
                >
                  <p className="font-display text-2xl font-semibold text-gold-bright">
                    {s.n}
                    {"sub" in s && s.sub && (
                      <span className="ml-1 align-middle font-sans text-sm font-normal text-ivory/75">
                        {s.sub}
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-sm text-ivory/85">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 下方：左 9 产品两列 + 右 blog 同 level，统一米色底 */}
          <div className="mt-16 bg-ivory-deep p-6 md:p-8">
            <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
              {/* 左：其余 9 个产品，两列 */}
              <div>
                <h3 className="font-display text-2xl font-medium text-jade-deep">
                  Silk Fabrics
                </h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {otherProducts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="group flex flex-col border border-line bg-ivory p-5 transition-colors hover:border-gold"
                    >
                      <h4 className="font-display text-lg font-medium leading-snug text-jade-deep group-hover:text-jade">
                        {p.name}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {p.introAnswer}
                      </p>
                      <span className="mt-auto pt-3 inline-block text-sm font-medium text-gold transition-transform group-hover:translate-x-1">
                        Source →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 右：blog（press 故事），与产品同 level */}
              <aside>
                <h3 className="font-display text-2xl font-medium text-jade-deep">
                  From local looms to the world&apos;s red carpets.
                </h3>
                <p className="mt-3 text-sm text-ink-soft">
                  Stories of the silk we source — from the longevity town that
                  grows it, to the couture gowns that wore it.
                </p>
                <div className="mt-6 flex flex-col gap-5">
                  {pressItems.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="group flex gap-5 border border-line bg-ivory p-4 transition-colors hover:border-gold"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/christopherbu-silk/${item.image}`}
                        alt={item.imageAlt}
                        loading="lazy"
                        className="aspect-[3/4] w-24 shrink-0 self-start object-cover"
                      />
                      <div className="flex min-w-0 flex-col">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="rounded-full border border-gold/40 px-2.5 py-0.5 font-medium text-gold">
                            {item.type}
                          </span>
                          <span className="text-ink-muted">{item.publishDate}</span>
                        </div>
                        <h4 className="font-display mt-2 text-base font-medium leading-snug text-jade-deep group-hover:text-jade">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                          {item.summary}
                        </p>
                        <span className="mt-auto pt-2 inline-block text-sm font-medium text-gold transition-transform group-hover:translate-x-1">
                          Read article →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Why Us：B2B 批发采购核心风险解决方案 */}
        <section className="bg-ivory">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="mb-12">
              <h2 className="font-display max-w-4xl text-3xl font-medium text-jade-deep md:text-4xl">
                Why us: built to solve core B2B wholesale sourcing risks
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
                Five areas address the key wholesale procurement demands:
                coordinated vertical supply, broad product-category coverage,
                applicable certification documentation, ethnic product
                differentiation and responsive custom-order review.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  t: "Unique Supply Chain",
                  d: "Coordinated vertical industrial chain covering mulberry resources, silkworm cocoon sourcing, raw silk reeling, fabric weaving and finishing — all in one local area.",
                },
                {
                  t: "Complete Product Portfolio",
                  d: "Full product portfolio including 6A Grade raw silk, silk fabrics, supporting bulk raw material supply, and finished private label and wholesale orders.",
                },
                {
                  t: "Extensive Industry Immersion",
                  d: "From looms to red carpet, our expertise in textiles, production, fashion design and retail makes us unparalleled in this role.",
                },
                {
                  t: "Documented Compliance Review",
                  d: "Available GOTS, OEKO-TEX Standard 100 Class II, China Organic and ISO files support buyer review within their stated scope and validity. Order applicability is confirmed in writing.",
                },
                {
                  t: "Flexible Cooperation",
                  d: "Diversified flexible cooperation modes: in-stock bulk wholesale, custom private label OEM, full ODM development and high-end limited-edition customized production.",
                },
              ].map((item) => (
                <div
                  key={item.t}
                  className="border border-line bg-ivory-deep p-8 transition-colors hover:border-gold"
                >
                  <h3 className="font-display text-xl font-medium text-jade-deep">
                    {item.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ 索引 */}
        <section className="bg-ivory-deep">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-8">
            <h2 className="font-display text-3xl font-medium text-jade-deep md:text-4xl">
              Sourcing silk from Yizhou, answered.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-ink-soft">
              The questions our B2B buyers ask most — sourcing, MOQ, export
              terms and certification.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <Link
                key={f.q}
                href="/faq"
                className="group border border-line bg-ivory p-6 transition-colors hover:border-gold"
              >
                <h3 className="text-base font-semibold text-jade-deep group-hover:text-jade">
                  {f.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {f.a}
                </p>
              </Link>
            ))}
          </div>
          <Link
            href="/faq"
            className="mt-6 inline-block text-sm font-medium text-gold transition-transform hover:translate-x-1"
          >
            View all FAQs →
          </Link>
          </div>
        </section>

        {/* CTA：深绿底 + 内嵌金边画框 */}
        <section className="bg-jade-deep text-ivory">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="border border-gold/50 px-8 py-12 md:px-14">
              <h2 className="font-display max-w-2xl text-3xl font-medium md:text-4xl">
                Verify hand and color before you commit.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/75">
                Mini fabric swatches are supplied free of material charge after
                availability is confirmed, and full-size samples are
                chargeable. Need a custom weave or color? Tell us your MOQ,
                deadline and destination.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/samples"
                  className="rounded-full bg-gold-bright px-7 py-3.5 text-sm font-semibold text-jade-deep transition-colors hover:bg-ivory"
                >
                  Request Sample
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
