import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CoutureGallery } from "./CoutureGallery";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Couture Design Inspiration — Christopher Bu × Yizhou Silk | The Art of Silk",
  description:
    "A look at the couture design language of the Christopher Bu house — gowns that show how premium mulberry silk carries embroidery, drape and structure, from Yizhou's raw silk capital.",
  alternates: { canonical: "/couture" },
};

export default function CouturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Christopher Bu Couture Design Inspiration",
    description:
      "Couture design inspiration from the Christopher Bu house, illustrating how premium mulberry silk is used in high-fashion garments.",
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
          <span className="text-ink-soft">Couture</span>
        </nav>

        {/* 标题 */}
        <div className="mt-8">
          <h1 className="font-display max-w-3xl text-4xl font-medium text-jade-deep md:text-5xl">
            Couture Design Inspiration
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            The Christopher Bu house is known for gowns that blend oriental
            embroidery with couture structure. These studies show how the
            drape, lustre and hand of premium mulberry silk — sourced from
            Yizhou, the world&apos;s raw silk capital — carry the art of the
            atelier.
          </p>
        </div>

        {/* 看秀画廊 */}
        <CoutureGallery />

        {/* 引导语：回到产品/面料 */}
        <section className="mt-14 border-t border-line pt-10">
          <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
            Explore the raw material behind these silhouettes — premium mulberry
            raw silk, greige fabric and douppioni, sourced from local mills and
            offered for the global couture and fashion industry.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="border border-jade px-6 py-2.5 text-sm font-medium text-jade transition-colors hover:bg-jade hover:text-ivory"
            >
              View silk products
            </Link>
            <Link
              href="/rtw"
              className="border border-line px-6 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:border-jade hover:text-jade"
            >
              Ready-to-wear archive
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
