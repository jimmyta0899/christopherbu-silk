"use client";

import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  {
    src: "/hero/met-gala-illustration.webp",
    alt: "Illustration of a gold sequin gown with a green silk jacquard cape, inspired by Christopher Bu at the 2015 Met Gala",
  },
  {
    src: "/hero/cannes-illustration.webp",
    alt: "Illustration of an ivory embroidered mermaid gown with floral motifs, inspired by Christopher Bu at the Cannes Film Festival",
  },
  {
    src: "/hero/oscars-illustration.webp",
    alt: "Illustration of a white gown with plum-blossom embroidery and a sweeping cape, inspired by Christopher Bu at the Oscars",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const total = slides.length;

  const go = (dir: number) => setActive((a) => (a + dir + total) % total);

  // 自动轮播
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % total), 4500);
    return () => clearInterval(t);
  }, [total]);

  return (
    <div className="relative ml-auto w-full max-w-md">
      <div className="relative aspect-[3/4] min-h-[380px] w-full overflow-hidden border border-gold/40 sm:min-h-[520px]">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={900}
            height={1206}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* 左右箭头 */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous illustration"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white/80 transition-colors hover:bg-black/60 hover:text-white"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next illustration"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white/80 transition-colors hover:bg-black/60 hover:text-white"
      >
        ›
      </button>

      {/* 指示点 */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to illustration ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${
              i === active ? "w-5 bg-gold-bright" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
