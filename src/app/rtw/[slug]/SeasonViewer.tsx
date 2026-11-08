"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { rtwSeasons, getRtwSeason, bigImageFor, type RtwSeason } from "@/lib/rtw";
import { siteConfig } from "@/lib/site-config";

export function SeasonViewer({ season }: { season: RtwSeason }) {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";

  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // 切换季节时重置状态
  useEffect(() => {
    setActive(0);
    setLightbox(null);
  }, [slug]);

  const idx = rtwSeasons.findIndex((s) => s.slug === slug);
  const prev = idx > 0 ? rtwSeasons[idx - 1] : null;
  const next = idx >= 0 && idx < rtwSeasons.length - 1 ? rtwSeasons[idx + 1] : null;

  const images = season.images;
  const total = images.length;

  const go = (dir: number) => setActive((a) => (a + dir + total) % total);

  // 键盘导航
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox !== null) {
        if (e.key === "Escape") setLightbox(null);
        else if (e.key === "ArrowRight")
          setLightbox((l) => (l === null ? l : (l + 1) % total));
        else if (e.key === "ArrowLeft")
          setLightbox((l) => (l === null ? l : (l - 1 + total) % total));
        return;
      }
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, total]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Christopher Bu ${season.name}`,
    description: `Ready-to-wear collection ${season.name} by Christopher Bu.`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name },
  };

  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-10 md:py-14">
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
          <span className="text-ink-soft">{season.name}</span>
        </nav>

        {/* 标题 */}
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-medium text-jade-deep md:text-5xl">
              {season.name}
            </h1>
            <p className="mt-2 text-sm text-ink-muted">
              {total} runway looks · Christopher Bu ready-to-wear collection
            </p>
          </div>
          <div className="text-sm tabular-nums text-ink-muted">
            {active + 1} / {total}
          </div>
        </div>

        {/* 看秀区：横向浏览 + 左右箭头（还原老官网看秀体验） */}
        <section className="mt-8 overflow-hidden bg-jade-deep">
          <div className="relative flex h-[62vh] min-h-[360px] items-center justify-center">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative flex h-full items-center justify-center overflow-hidden transition-opacity duration-500"
                style={{
                  width: i === active ? "auto" : "0px",
                  opacity: i === active ? 1 : 0,
                  pointerEvents: i === active ? "auto" : "none",
                }}
                aria-label={`View look ${i + 1} of ${total}`}
              >
                <img
                  src={`/rtw/${season.folder}/${img}`}
                  alt={`${season.name} look ${i + 1} — Christopher Bu ready-to-wear`}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="h-full w-auto max-w-full cursor-zoom-in object-contain"
                />
                <span className="pointer-events-none absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Click to enlarge
                </span>
              </button>
            ))}

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous look"
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-3xl text-white/80 transition-colors hover:bg-black/60 hover:text-white"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next look"
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-3xl text-white/80 transition-colors hover:bg-black/60 hover:text-white"
            >
              ›
            </button>
          </div>
        </section>

        {/* 缩略图导航条 */}
        <section className="mt-4 overflow-x-auto">
          <div className="flex gap-2 pb-1">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActive(i)}
                className={`shrink-0 border-2 transition-all ${
                  i === active ? "border-jade" : "border-transparent opacity-50 hover:opacity-90"
                }`}
                aria-label={`Go to look ${i + 1}`}
              >
                <img
                  src={`/rtw/${season.folder}/${img}`}
                  alt=""
                  loading="lazy"
                  className="h-20 w-auto"
                />
              </button>
            ))}
          </div>
        </section>

        {/* 上一季 / 下一季 */}
        <nav className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
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

      {/* Lightbox：点图放大显示高清大图 */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full text-5xl text-white/80 transition-colors hover:text-white"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((l) => (l === null ? l : (l - 1 + total) % total));
            }}
            aria-label="Previous"
            className="absolute left-3 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-4xl text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((l) => (l === null ? l : (l + 1) % total));
            }}
            aria-label="Next"
            className="absolute right-3 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-4xl text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          >
            ›
          </button>

          <figure
            className="relative max-h-[90vh] max-w-[92vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/rtw/${season.folder}/${bigImageFor(
                images[lightbox],
                season.folder
              )}`}
              alt={`${season.name} look ${lightbox + 1} — Christopher Bu ready-to-wear`}
              className="max-h-[84vh] max-w-[92vw] object-contain"
              onError={(e) => {
                // 大图缺失时降级到缩略图（如个别老官网死链）
                const el = e.currentTarget;
                const thumb = `/rtw/${season.folder}/${images[lightbox]}`;
                if (el.src !== thumb) el.src = thumb;
              }}
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {season.name} — Look {lightbox + 1} of {total}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
