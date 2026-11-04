import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Certifications — GOTS, OEKO-TEX Class II, China Organic & Compliance",
  description:
    "Our local mill in Yizhou holds GOTS, OEKO-TEX STANDARD 100 Class II, China Organic and quality-system certification, including GOTS-certified organic silk. Prop 65 and EU destination-market compliance reviewed before order approval.",
  keywords: [
    "OEKO-TEX 100 silk fabric",
    "GOTS certified silk fabric B2B",
    "organic silk GOTS certified",
    "China Organic silk certification",
    "silk fabric Prop 65 compliance",
    "silk fabric quality inspection",
    "Yizhou silk certification",
  ],
};

export default function CertificatesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h1 className="font-display text-4xl font-medium text-jade-deep md:text-5xl">
          Certifications & compliance
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Silk that meets the standards your buyers require — verified by
          certificates held by our local mill in Yizhou.
        </p>

        <div className="mt-12 space-y-6">
          <div className="border border-line p-8">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              OEKO-TEX® STANDARD 100 (Class II)
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Confirms the fabric has been tested for harmful substances and is
              safe for direct skin contact — relevant for apparel, bridal and
              couture applications.
            </p>
            <p className="mt-3 text-sm font-medium text-gold">
              Certificate number provided on quotation and shipping documents.
            </p>
          </div>

          <div className="border border-line p-8">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              GOTS (Global Organic Textile Standard)
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Covers the organic status and processing of our mulberry silk,
              from fibre to finished fabric — including 100% organic silk
              processed through boiling, pre-treatment, spinning and weaving,
              supplied as raw silk, greige yarns and greige fabrics.
            </p>
            <p className="mt-3 text-sm font-medium text-gold">
              Certificate number and license details provided on quotation.
            </p>
          </div>

          <div className="border border-line p-8">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              China Organic &amp; quality-system files
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              China Organic certification and quality-system files are also
              available for qualified buyer review, alongside GOTS and
              OEKO-TEX Standard 100 Class II. Each file is shared within its
              own listed document scope.
            </p>
            <p className="mt-3 text-sm font-medium text-gold">
              Available for qualified buyer review within each document's
              listed scope.
            </p>
          </div>

          <div className="border border-line p-8">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              Destination-market compliance
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              California Proposition 65, EU textile-safety and other
              destination-market requirements are reviewed against
              product-specific test reports, and confirmed in writing before
              order approval — so the certification position for your market is
              clear before you commit.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Quality inspection
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Every order is inspected for grade, denier/momme, width and hand
            before shipment. We confirm specification against current mill
            availability before quotation — so what you order is what ships.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-jade px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-jade-deep"
          >
            Request certificates with quotation
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
