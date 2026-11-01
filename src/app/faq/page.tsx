import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

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

const faqs = [
  {
    q: "Where is the fabric sourced?",
    a: "All mulberry silk fabric is sourced from Yizhou, Guangxi, China — known as the world's raw silk capital, with 30+ years of sericulture and degumming expertise.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Swatch books start at $25 (credited on your first order). Bulk MOQ ranges from 50m for plain weaves to 200m for custom jacquard.",
  },
  {
    q: "What are the export terms?",
    a: "Swatches ship FOB Shanghai (5–7 days). Bulk orders ship FOB Qinzhou or FCA Yizhou (20–25 days). Payment is T/T 30% deposit, 70% against Bill of Lading.",
  },
  {
    q: "Are OEKO-TEX or GOTS certifications available?",
    a: "Yes, held by our partner mill in Yizhou. Certificate numbers are provided with your quotation and shipping documents.",
  },
  {
    q: "What products do you supply?",
    a: "Three core products: mulberry raw silk (filature silk) in 20/22 denier, greige silk fabric (undyed, ready for your own dyeing and finishing), and douppioni silk with its signature slub texture.",
  },
  {
    q: "Do you sell retail?",
    a: "No. We are a B2B supplier only — we serve mills, brands and ateliers, not end consumers. Bulk orders below 50m are not accepted (swatch books excepted).",
  },
];

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
