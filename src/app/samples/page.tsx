import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Request Silk Sample Book | $25 Credited on First Bulk Order",
  description:
    "Order our $25 silk sample book to verify hand, grade and color before bulk ordering. The fee is credited against your first bulk order. Worldwide DHL shipping.",
  keywords: [
    "silk fabric swatch book $25",
    "silk swatch book credited on first order",
    "silk fabric hand feel sample",
    "silk sample book Yizhou",
  ],
};

export default function SamplesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-display max-w-3xl text-4xl font-medium text-jade-deep md:text-5xl">
          Order your silk sample book — {`$${siteConfig.trade.swatchFee}`},
          credited on first bulk order.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Choose 8–12 swatches by product, weight and finish. The{" "}
          {`$${siteConfig.trade.swatchFee}`} fee covers global DHL shipping and is
          deducted from your first bulk order.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
          A silk fabric hand feel sample is the only way to judge drape, slub
          and luster before you commit to bulk. Order our silk swatch book for{" "}
          {`$${siteConfig.trade.swatchFee}`} — the full amount is credited on
          your first bulk order, so the sample is effectively free.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* 表单 */}
          <section>
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              Request your swatches
            </h2>
            <form className="mt-6 space-y-5">
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
            <div className="border border-line p-6">
              <h3 className="font-display text-xl font-medium text-jade-deep">
                What you receive
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                <li>• 8–12 curated swatches by product, weight and finish</li>
                <li>• Hand, weight and color verification before production</li>
                <li>• {`$${siteConfig.trade.swatchFee}`} credited against your first bulk order</li>
                <li>• Global DHL shipping, 5 business days</li>
              </ul>
            </div>
            <div className="border border-line p-6">
              <h3 className="font-display text-xl font-medium text-jade-deep">
                Shipping
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                {siteConfig.trade.sampleShipping}
              </p>
            </div>
            <div className="border border-line p-6">
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
