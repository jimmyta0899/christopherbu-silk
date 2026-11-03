import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ — Sourcing Mulberry Silk from Yizhou",
  description:
    "Answers on sourcing mulberry raw silk, greige fabric and douppioni from Yizhou, China: MOQ, export terms, lead times and OEKO-TEX & GOTS certification.",
  keywords: [
    "bulk silk fabric MOQ",
    "silk fabric export China",
    "custom silk fabric MOQ",
    "silk fabric quality inspection",
    "sustainable silk fabric B2B",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <h1 className="font-display text-4xl font-medium text-jade-deep md:text-5xl">
          Sourcing silk from Yizhou, answered.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          The questions our B2B buyers ask most, with direct answers. For
          anything else, contact our team.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="border border-line p-6">
              <h2 className="text-base font-semibold text-jade-deep">{f.q}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
