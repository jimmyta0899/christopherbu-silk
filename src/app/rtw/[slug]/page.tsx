import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getRtwSeason, rtwSeasons } from "@/lib/rtw";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rtwSeasons.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const season = getRtwSeason(slug);
  if (!season) return {};
  return {
    title: `Christopher Bu ${season.name} — Ready-to-Wear Collection | Runway Archive`,
    description: `The complete Christopher Bu ${season.name} ready-to-wear collection (${season.nameZh}), from the couture house behind Fan Bingbing's red-carpet looks. ${season.count} runway looks.`,
    alternates: { canonical: `/rtw/${season.slug}` },
  };
}

export default async function RtwSeasonPage({ params }: Props) {
  const { slug } = await params;
  const season = getRtwSeason(slug);
  if (!season) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Christopher Bu ${season.name}`,
    description: `Ready-to-wear collection ${season.name} (${season.nameZh}) by Christopher Bu.`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name },
  };

  // 上一季 / 下一季（按排序）
  const idx = rtwSeasons.findIndex((s) => s.slug === slug);
  const prev = idx > 0 ? rtwSeasons[idx - 1] : null;
  const next = idx >= 0 && idx < rtwSeasons.length - 1 ? rtwSeasons[idx + 1] : null;

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
          <Link href="/rtw" className="hover:text-jade">
            Ready-to-Wear
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">{season.slug}</span>
        </nav>

        {/* 标题 */}
        <div className="mt-8">
          <h1 className="font-display max-w-3xl text-4xl font-medium text-jade-deep md:text-5xl">
            {season.name}
          </h1>
          <p className="mt-3 text-lg text-gold">{season.nameZh}</p>
          <p className="mt-2 text-sm text-ink-muted">
            {season.count} runway looks · Christopher Bu ready-to-wear collection
          </p>
        </div>

        {/* 图片网格 */}
        <section className="mt-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
            {season.images.map((img, i) => (
              <figure key={img} className="overflow-hidden border border-line bg-ivory-deep">
                <img
                  src={`/christopherbu-silk/rtw/${season.folder}/${img}`}
                  alt={`${season.name} look ${i + 1} — Christopher Bu ready-to-wear`}
                  loading="lazy"
                  className="aspect-[2/3] w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </section>

        {/* 上一季 / 下一季 */}
        <nav className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          {prev ? (
            <Link
              href={`/rtw/${prev.slug}`}
              className="text-sm text-ink-soft transition-colors hover:text-jade"
            >
              ← {prev.name}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href="/rtw"
            className="text-sm font-medium text-jade transition-colors hover:text-jade-deep"
          >
            View all collections
          </Link>
          {next ? (
            <Link
              href={`/rtw/${next.slug}`}
              className="text-sm text-ink-soft transition-colors hover:text-jade"
            >
              {next.name} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
      <Footer />
    </>
  );
}
