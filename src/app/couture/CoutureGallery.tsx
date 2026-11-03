"use client";

import { useEffect, useState } from "react";
import { coutureLooks } from "@/lib/couture";

export function CoutureGallery() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const total = coutureLooks.length;

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

  return (
    <>
      {/* 看秀区：横向大图浏览 + 左右箭头（还原老官网看秀体验） */}
      <section className="mt-8 overflow-hidden bg-jade-deep">
        <div className="relative flex h-[62vh] min-h-[360px] items-center justify-center">
          {coutureLooks.map((look, i) => (
            <button
              key={look.slug}
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
                src={`/christopherbu-silk/couture/${look.image}`}
                alt={`${look.name} — Christopher Bu couture inspiration`}
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
          {coutureLooks.map((look, i) => (
            <button
              key={look.slug}
              type="button"
              onClick={() => setActive(i)}
              className={`shrink-0 border-2 transition-all ${
                i === active ? "border-jade" : "border-transparent opacity-50 hover:opacity-90"
              }`}
              aria-label={`Go to look ${i + 1}`}
            >
              <img
                src={`/christopherbu-silk/couture/${look.image}`}
                alt=""
                loading="lazy"
                className="h-20 w-auto"
              />
            </button>
          ))}
        </div>
      </section>

      {/* 作品文字说明 */}
      <section className="mt-10 border-t border-line pt-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {coutureLooks.map((look, i) => (
            <button
              key={look.slug}
              type="button"
              onClick={() => setActive(i)}
              className="text-left transition-colors"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-gold">
                Look {i + 1}
              </span>
              <h3
                className={`font-display mt-2 text-xl font-medium transition-colors ${
                  i === active ? "text-jade-deep" : "text-ink-soft"
                }`}
              >
                {look.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {look.detail}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox：点图放大 */}
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
              src={`/christopherbu-silk/couture/${coutureLooks[lightbox].image}`}
              alt={`${coutureLooks[lightbox].name} — Christopher Bu couture inspiration`}
              className="max-h-[84vh] max-w-[92vw] object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {coutureLooks[lightbox].name} — Look {lightbox + 1} of {total}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
