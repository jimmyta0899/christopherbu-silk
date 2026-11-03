import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sustainability & Traceability — OEKO-TEX & GOTS Silk",
  description:
    "Christopher Bu × Yizhou Silk supplies traceable mulberry raw silk and greige fabric with OEKO-TEX Standard 100 and GOTS certification available on request from local mills.",
  keywords: [
    "sustainable silk fabric B2B",
    "traceable mulberry silk supplier",
    "GOTS certified silk fabric",
    "OEKO-TEX 100 silk fabric",
  ],
};

export default function SustainabilityPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-display max-w-3xl text-4xl font-medium text-jade-deep md:text-5xl">
          Traceable silk, from origin to shipment.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Mulberry silk is a fully biodegradable natural fiber, and Yizhou&apos;s
          sericulture supports over a million farming households. We prioritize
          traceable sourcing and verifiable certification.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="border border-line p-8">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              {siteConfig.certifications.oekoTex.label}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Ensures textile products are free from harmful substances and safe
              for health and the environment.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              {siteConfig.certifications.oekoTex.note}
            </p>
          </div>
          <div className="border border-line p-8">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              {siteConfig.certifications.gots.label}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              The leading standard for organic textiles, covering environmental
              and social criteria along the supply chain.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              {siteConfig.certifications.gots.note}
            </p>
          </div>
        </div>

        <section className="mt-14 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Frequently asked questions
          </h2>
          <div className="mt-5 space-y-4">
            {[
              {
                q: "Is mulberry silk sustainable?",
                a: "Yes — mulberry silk is fully biodegradable, produces no microplastic pollution, and mulberry cultivation supports carbon fixation and soil protection in Yizhou.",
              },
              {
                q: "Can you provide OEKO-TEX or GOTS certification?",
                a: "Certification is held by our local mills. The certificate number is provided with your quotation, so you can verify it independently before ordering.",
              },
              {
                q: "Is the silk traceable to origin?",
                a: "We source from local mills and can provide origin documentation and records aligned to your order, subject to destination-market requirements.",
              },
            ].map((f) => (
              <div key={f.q} className="border border-line p-6">
                <h3 className="text-base font-semibold text-jade-deep">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
