import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo-metadata";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sample Service Policy | Free Fabric Swatches & Chargeable Full-Size Samples",
  description:
    "Our sample service policy: mini fabric swatches supplied free of material charge (buyers cover shipping), and full-size silk fabrics and finished apparel are chargeable. B2B worldwide.",
  keywords: [
    "silk fabric swatch",
    "free silk swatch",
    "silk fabric hand feel sample",
    "silk sample Yizhou",
    "silk sample service policy",
  ],
  alternates: { canonical: "/samples" },
  openGraph: pageOpenGraph("/samples"),
};

export default function SamplesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-display text-4xl font-medium text-jade-deep md:text-5xl">
          Sample service policy
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          A silk fabric hand-feel sample is the only way to judge drape, slub and luster before you commit to bulk. Here is how our sampling works.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="border border-line bg-ivory-deep p-8">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              Free fabric swatches
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {siteConfig.samplePolicy.freeSwatches}
            </p>
          </div>
          <div className="border border-line bg-ivory-deep p-8">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              Chargeable full-size samples
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {siteConfig.samplePolicy.chargeableSamples}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* 表单 */}
          <section>
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              Request your swatches
            </h2>
            <form
              action={`mailto:${siteConfig.email}`}
              method="post"
              encType="text/plain"
              className="mt-6 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" required />
                <Field label="Brand / Company" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Country" required />
                <Field label="Email" type="email" required />
              </div>
              <div>
                <label className="text-sm font-medium text-ink-soft">
                  Intended use
                </label>
                <input
                  className="mt-1.5 w-full rounded-none border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-jade"
                  placeholder="e.g. evening gowns, custom dyeing, weaving"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-ink-soft">
                  Select fabrics
                </label>
                <div className="mt-2 flex flex-wrap gap-3">
                  {products.map((p) => (
                    <label
                      key={p.slug}
                      className="flex cursor-pointer items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink-soft"
                    >
                      <input type="checkbox" className="accent-jade" />
                      {p.name}
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Est. quantity" placeholder="e.g. 100 kg / 300 m" />
                <Field label="Target market" placeholder="e.g. EU, USA, Middle East" />
              </div>
              <button
                type="submit"
                className="rounded-full bg-jade px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-jade-deep"
              >
                Submit Swatch Request
              </button>
            </form>
          </section>

          {/* 说明 */}
          <section className="space-y-6">
            <div className="border border-line bg-ivory-deep p-6">
              <h3 className="font-display text-xl font-medium text-jade-deep">
                What you receive
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                <li>• Mini swatches by product, weight and finish</li>
                <li>• Hand, weight and color verification before production</li>
                <li>• Full-size samples on request (chargeable)</li>
                <li>• Global DHL shipping</li>
              </ul>
            </div>
            <div className="border border-line bg-ivory-deep p-6">
              <h3 className="font-display text-xl font-medium text-jade-deep">
                Shipping
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                {siteConfig.trade.sampleShipping}
              </p>
            </div>
            <div className="border border-line bg-ivory-deep p-6">
              <h3 className="font-display text-xl font-medium text-jade-deep">
                Prefer to talk first?
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                Contact our B2B team to discuss specifications, MOQ and
                certification before ordering samples.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm font-medium text-gold hover:text-jade"
              >
                Contact B2B Team →
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink-soft">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-none border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-jade"
      />
    </div>
  );
}
