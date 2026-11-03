import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Certifications — OEKO-TEX, GOTS & Organic Silk",
  description:
    "Our local mill in Yizhou holds OEKO-TEX STANDARD 100 and GOTS certification, including GOTS-certified organic silk (GOTS-30270, ECOCERT). Certificate numbers provided with quotation.",
  keywords: [
    "OEKO-TEX 100 silk fabric",
    "GOTS certified silk fabric B2B",
    "organic silk GOTS certified",
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
              OEKO-TEX® STANDARD 100
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
              from fibre to finished fabric — for buyers with organic sourcing
              requirements.
            </p>
            <p className="mt-3 text-sm font-medium text-gold">
              Certified by ECOCERT Greenlife SAS — GOTS license no. GOTS-30270,
              valid to 2027-10-19. Certificate number provided on quotation.
            </p>
          </div>

          <div className="border border-line p-8">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              GOTS-Certified Organic Silk
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Our organic mulberry silk is certified 100% organic across the
              full process — boiling, pre-treatment, spinning and weaving —
              supplied as raw silk, greige yarns and greige fabrics.
            </p>
            <p className="mt-3 text-sm font-medium text-gold">
              GOTS license no. GOTS-30270, valid to 2027-10-19. Verify the
              certification on the GOTS public database with the certificate
              number provided on your quotation.
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
