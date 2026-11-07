import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo-metadata";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Free Silk Samples | DHL Worldwide from Yizhou, China",
  description:
    "Free silk samples — no charge for the fabric itself, you cover the courier only. Request mini samples of dupioni, satin, habotai, georgette, jacquard and raw silk yarn from Yizhou, China. Full-size samples are chargeable.",
  keywords: [
    "free silk sample",
    "free silk samples",
    "free sample silk fabric",
    "free fabric sample",
    "silk sample Yizhou",
    "silk fabric sample free shipping",
    "request silk sample",
    "silk sample request",
  ],
  alternates: { canonical: "/samples" },
  openGraph: pageOpenGraph("/samples"),
};

const faqs = [
  {
    q: "Are the samples really free?",
    a: "The sample itself is free — we make no material charge for mini samples once we have confirmed availability of the quality you ask for. The buyer covers courier, customs and related international shipping, normally by DHL or a designated courier.",
  },
  {
    q: "Do I have to pay for the fabric to see it first?",
    a: "No. Silk is judged by hand, weight and luster, which no photograph reproduces. We send mini samples free of material charge so you can verify hand and colour before committing to bulk. Full-size sample yardage and finished apparel are chargeable.",
  },
  {
    q: "How are samples shipped?",
    a: "By DHL worldwide or a designated courier, dispatched once availability is confirmed. Shipping, customs and any related charges are borne by the buyer.",
  },
  {
    q: "Can I request several qualities in one request?",
    a: "Yes. Select every quality you are considering — raw silk yarn, greige fabric, dupioni, satin, stretch satin, jacquard luo, georgette, habotai or silk blends — and we will confirm availability across the set in one reply.",
  },
  {
    q: "Can I get a sample in my own colour?",
    a: "Standard shade card colours are the fastest route. Custom colours are dyed to order, so a dyed sample is quoted separately once we have your reference — Pantone code, lab dip target or a physical sample.",
  },
];

export default function SamplesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
          Free sample service
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium text-jade-deep md:text-5xl">
          Free silk samples, sent worldwide
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          We charge nothing for the sample itself. Tell us which qualities you are
          considering, we confirm what is available, and it ships by DHL from
          Yizhou — you cover the courier only. A silk hand-feel sample is the only
          way to judge drape, slub and luster before you commit to bulk.
        </p>

        {/* 三步 */}
        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Tell us the qualities",
              d: "Pick the fabrics you are weighing up, your intended use, and where it ships.",
            },
            {
              n: "02",
              t: "We confirm availability",
              d: "Samples are free of material charge once the quality you asked for is confirmed in stock.",
            },
            {
              n: "03",
              t: "DHL dispatch",
              d: "Sent worldwide by DHL or a designated courier. You cover shipping and customs only.",
            },
          ].map((s) => (
            <div key={s.n} className="bg-ivory-deep p-8">
              <span className="font-display text-2xl text-gold">{s.n}</span>
              <h2 className="mt-3 font-display text-xl font-medium text-jade-deep">
                {s.t}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
            </div>
          ))}
        </div>

        {/* 免费 vs 收费 */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="border border-jade/40 bg-ivory-deep p-8">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              Free — mini samples
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {siteConfig.samplePolicy.freeSamples}
            </p>
          </div>
          <div className="border border-line bg-ivory-deep p-8">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              Chargeable — full-size samples
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
              Request your free samples
            </h2>
            <form
              action={`mailto:${siteConfig.email}`}
              method="post"
              encType="text/plain"
              data-lead="sample_request"
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
                <label htmlFor="intended_use" className="text-sm font-medium text-ink-soft">
                  Intended use
                </label>
                <input
                  id="intended_use"
                  name="intended_use"
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
                      <input type="checkbox" name="fabrics" value={p.slug} className="accent-jade" />
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
                Request Free Samples
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
                <li>• Mini samples by product, weight and finish</li>
                <li>• Hand, weight and colour verification before production</li>
                <li>• Full-size samples on request (chargeable)</li>
                <li>• Global DHL shipping</li>
              </ul>
            </div>
            <div className="border border-line bg-ivory-deep p-6">
              <h3 className="font-display text-xl font-medium text-jade-deep">
                Shipping
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                {siteConfig.trade.sampleShipping}. Courier, customs and related
                international charges are borne by the buyer — that is the only
                cost of a sample.
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

        {/* FAQ */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Free sample questions
          </h2>
          <dl className="mt-8 grid gap-8 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-lg font-medium text-jade-deep">
                  {f.q}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm text-ink-soft">
            Also see:{" "}
            <Link href="/trade-terms" className="text-gold hover:text-jade">
              Trade terms
            </Link>
            {" · "}
            <Link href="/products" className="text-gold hover:text-jade">
              All products
            </Link>
            {" · "}
            <Link href="/certificates" className="text-gold hover:text-jade">
              Certifications
            </Link>
          </p>
        </section>
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
  const name = label.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink-soft">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-none border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-jade"
      />
    </div>
  );
}
