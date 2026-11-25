import type { Metadata } from "next";
import Link from "next/link";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnswerBlock } from "@/components/AnswerBlock";
import { siteConfig } from "@/lib/site-config";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ: Sourcing Mulberry Silk from Yizhou",
  description:
    "Answers on sourcing mulberry raw silk, greige fabric and dupioni from Yizhou, China: MOQ, export terms, lead times and OEKO-TEX & GOTS certification.",
  keywords: [
    "bulk silk fabric MOQ",
    "silk fabric export China",
    "custom silk fabric MOQ",
    "silk fabric quality inspection",
    "sustainable silk fabric B2B",
  ],
  alternates: { canonical: "/faq" },
  openGraph: pageOpenGraph("/faq"),
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
      <main id="main-content" className="mx-auto max-w-3xl px-6 py-16 md:py-20">
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

        <AnswerBlock
          label="The short version"
          answer="MOQ is not fixed: small trial rolls, custom widths and samples may be possible subject to material, mill and schedule review. Export runs FOB or FCA against T/T, and OEKO-TEX or GOTS certification is available within the document scope stated in the quotation."
        />

        <p className="mt-6 text-sm leading-relaxed text-ink-soft">
          The numbers behind these answers live on their own pages:{" "}
          <Link href="/products/raw-silk/" className="underline">
            raw silk denier and yarn count
          </Link>
          ,{" "}
          <Link href="/silk-weight/" className="underline">
            the momme-to-gram ladder by fabric weight
          </Link>
          , and the{" "}
          <Link href="/certificates/" className="underline">
            document scope for OEKO-TEX and GOTS
          </Link>
          . The{" "}
          <Link href="/blog/buyer-factory-audit-checklist-silk/" className="underline">
            mill audit checklist
          </Link>{" "}
          lists the documentary rows to close before a visit. Payment, packing and claim wording sits in the{" "}
          <Link href="/trade-terms/" className="underline">
            trade terms
          </Link>
          , and the measurement method behind any grams-per-square-meter figure
          is worked through in{" "}
          <Link
            href="/blog/how-silk-fabric-weight-is-measured/"
            className="underline"
          >
            how silk fabric weight is measured
          </Link>
          .
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="border border-line bg-ivory-deep p-6">
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
