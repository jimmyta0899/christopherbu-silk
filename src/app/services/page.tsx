import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — Private Label & Custom Silk Supply | Christopher Bu",
  description:
    "Custom mulberry silk supply from Yizhou, China: private-label OEM, custom width, color and pattern development, full QC and a 9-step sourcing process for global B2B buyers.",
  keywords: [
    "custom silk supply",
    "private label silk OEM",
    "silk ODM supplier China",
    "custom dyed silk fabric",
    "silk fabric custom width",
    "jacquard pattern development",
    "Yizhou silk sourcing",
  ],
};

const audience = [
  {
    t: "Raw-material distributors",
    d: "Buyers sourcing raw silk and silk fabric in volume for redistribution.",
  },
  {
    t: "Private-label brands",
    d: "Brands building their own silk product lines under their own label.",
  },
  {
    t: "Corporate-gift suppliers",
    d: "Suppliers developing premium silk gifts and branded pieces.",
  },
  {
    t: "Designers & ateliers",
    d: "Fashion houses and couture ateliers sourcing couture-grade silk.",
  },
];

const productMatrix = [
  {
    name: "Mulberry Raw Silk",
    href: "/products/raw-silk",
    desc: "Four varieties in 4A–6A grade: 20/22D white, natural dupion, luxury and GOTS-certified organic silk — supplied by weight for weaving and embroidery.",
  },
  {
    name: "Greige Silk Fabric",
    href: "/products/greige-fabric",
    desc: "Undyed silk double crepe in 12–30 momme, 114/140 cm — for your own color and finish development.",
  },
  {
    name: "Dupioni Silk",
    href: "/products/dupioni",
    desc: "Slubbed, textured silk in 19–40 momme for gowns, bridal and structured couture.",
  },
  {
    name: "Satin Silk",
    href: "/products/satin",
    desc: "Lustrous satin in 16–30 momme for bridal, eveningwear and luxury linings.",
  },
  {
    name: "Jacquard Luo Silk",
    href: "/products/jacquard-luo",
    desc: "Silk with motifs woven into the cloth, including custom pattern development.",
  },
  {
    name: "Georgette Silk",
    href: "/products/georgette",
    desc: "Sheer, crinkled silk in 8–12 momme for scarves and flowing summer garments.",
  },
  {
    name: "Pongee Silk",
    href: "/products/pongee",
    desc: "Plain-weave silk with a crisp hand for linings, scarves and light shirts.",
  },
  {
    name: "Silk Stretch Satin",
    href: "/products/stretch-silk",
    desc: "Satin-weave silk-spandex blend (90–95% silk) in 16–19 momme for comfort and fit.",
  },
  {
    name: "Silk Blend",
    href: "/products/blended-silk",
    desc: "Silk-cotton and silk-linen weaves pairing silk sheen with natural-fiber breathability.",
  },
];

const customDimensions = [
  { label: "Width", value: "Custom widths by weave (standard 114 cm / 140 cm)" },
  { label: "Color", value: "Greige or dyed to order — standard shade card or custom color matching" },
  { label: "Pattern", value: "Custom jacquard motif development (from ~200 m)" },
  { label: "Weight", value: "12–40 momme across the silk range" },
  { label: "Grade", value: "4A / 5A / 6A for raw silk" },
];

const qcSteps = [
  { t: "Raw material inspection", d: "Screen silk against the confirmed material specification before production." },
  { t: "Semi-finished in-line inspection", d: "Real-time check of weave integrity, texture and details during processing." },
  { t: "Finished goods inspection", d: "Appearance, size, color and workmanship checks against the agreed acceptance criteria." },
  { t: "Pre-shipping final audit", d: "Final recheck before delivery, with inspection records prepared for buyer review." },
];

const process = [
  { t: "Inquiry", d: "Share the product, quantity, target market and custom specifications." },
  { t: "Customized solutions", d: "We recommend the material, construction, branding and packaging route for written confirmation." },
  { t: "Price quotation", d: "Formal quotation with reference MOQ, lead time and service charges." },
  { t: "Sample proofing", d: "Physical sample produced for buyer confirmation." },
  { t: "Sales contract", d: "Approved specifications, tolerances and commercial terms locked in signed documents." },
  { t: "Production", d: "Bulk production against the confirmed material, approved sample and workmanship standard." },
  { t: "Inspection", d: "Comprehensive inspection of quality and all details." },
  { t: "Payment", d: "Deposit and balance settled under the verified pro forma invoice or contract." },
  { t: "Delivery", d: "Packed and dispatched under the confirmed route, Incoterm and schedule." },
];

const moq = [
  { label: "Reference MOQ", value: "No universal fixed MOQ — small trial rolls, custom widths and swatches may be available subject to material, mill and schedule review." },
  { label: "Final MOQ & organic status", value: "Confirmed in the written quotation and applicable document scope." },
  { label: "Production lead time", value: "15–25 working days is a planning estimate for eligible regular bulk orders after sample, specification, deposit and material availability are confirmed." },
  { label: "Binding schedule", value: "The binding production and delivery schedule is stated in the signed order documents." },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-display max-w-3xl text-4xl font-medium text-jade-deep md:text-5xl">
          Custom silk supply, from raw material to finished cloth.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Private-label OEM and custom development for global B2B buyers —
          custom width, color and pattern, backed by full QC and a clear
          9-step sourcing process.
        </p>

        {/* 服务对象 */}
        <section className="mt-16">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Who we work with
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {audience.map((a) => (
              <div key={a.t} className="border border-line p-7">
                <h3 className="font-display text-xl font-medium text-jade-deep">
                  {a.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {a.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 产品矩阵 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Silk product matrix
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Nine silk categories, each with custom width, color and pattern
            development where the weave allows.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productMatrix.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block border border-line p-7 transition-colors hover:border-gold"
              >
                <h3 className="font-display text-xl font-medium text-jade-deep group-hover:text-jade">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {p.desc}
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-gold transition-transform group-hover:translate-x-1">
                  View product →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 可定制维度 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Customization
          </h2>
          <div className="mt-8 overflow-hidden border border-line">
            <table className="w-full text-sm">
              <tbody>
                {customDimensions.map((item, i) => (
                  <tr
                    key={item.label}
                    className={i % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"}
                  >
                    <th className="w-1/4 px-5 py-3.5 text-left font-medium text-ink-soft">
                      {item.label}
                    </th>
                    <td className="px-5 py-3.5 text-ink">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            Specifications are industry-standard values and are confirmed
            against current mill availability before quotation.
          </p>
        </section>

        {/* QC 流程 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Quality control
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Four inspection stages keep every order within specification, from
            raw material to final shipment.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {qcSteps.map((s, i) => (
              <div key={s.t} className="border border-line p-7">
                <p className="text-xs font-medium text-gold">
                  Stage {i + 1}
                </p>
                <h3 className="font-display mt-2 text-xl font-medium text-jade-deep">
                  {s.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 9 步合作流程 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            How we work
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Nine steps keep specifications, commercial terms, sampling, bulk
            production and delivery aligned.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, i) => (
              <li key={step.t} className="border border-line p-6">
                <p className="text-xs font-medium text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-lg font-medium text-jade-deep">
                  {step.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* MOQ 与交期 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            MOQ &amp; lead time
          </h2>
          <div className="mt-8 overflow-hidden border border-line">
            <table className="w-full text-sm">
              <tbody>
                {moq.map((item, i) => (
                  <tr
                    key={item.label}
                    className={i % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"}
                  >
                    <th className="w-1/3 px-5 py-3.5 text-left font-medium text-ink-soft">
                      {item.label}
                    </th>
                    <td className="px-5 py-3.5 text-ink">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            Figures are planning references; final thresholds and schedules are
            stated in the written quotation or signed order documents.
          </p>
        </section>

        {/* 支付 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Payment
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="border border-line p-7">
              <h3 className="font-display text-xl font-medium text-jade-deep">
                Small orders
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                PayPal, Stripe, Venmo and Zelle are accepted for eligible small
                trial orders.
              </p>
            </div>
            <div className="border border-line p-7">
              <h3 className="font-display text-xl font-medium text-jade-deep">
                Bulk orders
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                T/T wire transfer is used for approved bulk orders, typically
                a deposit against the pro forma invoice and the balance against
                the bill of lading.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Start a custom project
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
            Tell us the product, target volume, specifications and destination.
            Our B2B team will respond with a tailored quotation and available
            certification.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-jade px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-jade-deep"
            >
              Contact B2B Team
            </Link>
            <Link
              href="/samples"
              className="rounded-full border border-jade px-7 py-3.5 text-sm font-medium text-jade transition-colors hover:bg-jade hover:text-ivory"
            >
              Request Sample
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
