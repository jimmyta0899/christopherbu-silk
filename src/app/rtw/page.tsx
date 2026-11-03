import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { rtwSeasonsSorted } from "@/lib/rtw";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Christopher Bu Ready-to-Wear Collections — Fashion Archive 2013–2020 | RTW Runway",
  description:
    "Browse the complete Christopher Bu ready-to-wear archive — 25 runway collections from Spring/Summer 2013 to Resort 2020, worn on red carpets worldwide.",
  alternates: { canonical: "/rtw" },
};

export default function RtwPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Christopher Bu Ready-to-Wear Collections",
    description:
      "The complete ready-to-wear runway archive of the Christopher Bu couture house, from Spring/Summer 2013 to Resort 2020.",
    isPartOf: { "@type": "WebSite", name: siteConfig.name },
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 面包屑 */}
        <nav className="text-sm text-ink-muted">
          <Link href="/" className="hover:text-jade">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">Ready-to-Wear</span>
        </nav>

        {/* 标题 */}
        <div className="mt-8">
          <h1 className="font-display max-w-3xl text-4xl font-medium text-jade-deep md:text-5xl">
            Ready-to-Wear Collections
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            The couture house of Christopher Bu has dressed the red carpet for
            over a decade. This is the complete ready-to-wear archive — 25
            collections from Spring/Summer 2013 to Resort 2020.
          </p>
        </div>

        {/* 季度网格 */}
        <section className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rtwSeasonsSorted.map((season) => (
              <Link
                key={season.slug}
                href={`/rtw/${season.slug}`}
                className="group overflow-hidden border border-line transition-colors hover:border-jade"
              >
                <div className="aspect-[2/3] overflow-hidden bg-ivory-deep">
                  {season.images[0] && (
                    <img
                      src={`/christopherbu-silk/rtw/${season.folder}/${season.images[0]}`}
                      alt={`${season.name} — Christopher Bu ready-to-wear collection`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-5">
                  <h2 className="font-display text-xl font-medium text-jade-deep group-hover:text-jade">
                    {season.name}
                  </h2>
                  <p className="mt-1 text-sm text-ink-muted">
                    {season.nameZh} · {season.count} looks
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
