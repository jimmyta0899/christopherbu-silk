import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Silk Products — Raw Silk, Greige, Dupioni, Satin, Jacquard, Georgette & More",
  description:
    "Browse Christopher Bu × Yizhou Silk B2B product range: mulberry raw silk (20/22D, dupion, luxury & GOTS-certified organic), greige fabric, dupioni, satin, jacquard luo, georgette, pongee, stretch and blended silk, sourced from Yizhou, China.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-display text-4xl font-medium text-jade-deep md:text-5xl">
          Silk supply from Yizhou, for the global textile industry.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Nine core silk categories, sourced from local mills and curated under the design eye of the Christopher Bu couture house.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group border border-line p-8 transition-colors hover:border-jade"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gold">
                  {p.featured ? "Core supply" : "On request"}
                </p>
              </div>
              <h2 className="font-display mt-4 text-2xl font-medium text-jade-deep group-hover:text-jade">
                {p.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {p.introAnswer}
              </p>
              <span className="mt-5 inline-block text-sm font-medium text-gold transition-transform group-hover:translate-x-1">
                View details →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
