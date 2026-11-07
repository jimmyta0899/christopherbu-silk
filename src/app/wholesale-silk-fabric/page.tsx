import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
  type HubFaq,
} from "@/lib/hub-utils";

export const metadata: Metadata = {
  title:
    "Wholesale Silk Fabric from China: How a Bulk Order Runs | Christopher Bu",
  description:
    "Wholesale silk fabric from Yizhou, China — nine standing constructions, dyed to order on a standard shade card or a custom match, with sampling, QC and FOB or FCA terms set out step by step.",
  keywords: [
    "silk fabric wholesale",
    "wholesale silk fabric china",
    "silk fabric supplier china",
    "silk fabric manufacturer",
    "bulk silk fabric supplier",
    "silk fabric export china",
    "silk fabric dyed to order",
    "silk fabric distributor",
  ],
  alternates: { canonical: "/wholesale-silk-fabric" },
  openGraph: pageOpenGraph("/wholesale-silk-fabric"),
};

const matrix = [
  {
    name: "Mulberry raw silk yarn",
    href: "/products/raw-silk",
    spec: "20/22D, dupion, luxury, GOTS organic; 4A–6A",
    colour: "Natural white, or dyed",
  },
  {
    name: "Greige silk fabric",
    href: "/products/greige-fabric",
    spec: "Undyed, momme follows the base weave",
    colour: "Greige — buyer finishes",
  },
  {
    name: "Dupioni",
    href: "/products/dupioni",
    spec: "16 and 19 momme standard; up to 21–22 on request",
    colour: "Shade card or custom match",
  },
  {
    name: "Satin",
    href: "/products/satin",
    spec: "10–30 momme",
    colour: "Shade card or custom match",
  },
  {
    name: "Jacquard Luo",
    href: "/products/jacquard-luo",
    spec: "Motif woven in; custom pattern development",
    colour: "Yarn-dyed or piece-dyed",
  },
  {
    name: "Georgette",
    href: "/products/georgette",
    spec: "8–16 momme",
    colour: "Shade card or custom match",
  },
  {
    name: "Habotai",
    href: "/products/habotai",
    spec: "5–12 momme",
    colour: "Shade card or custom match",
  },
  {
    name: "Silk stretch satin",
    href: "/products/stretch-silk",
    spec: "14–28 momme with elastane",
    colour: "Shade card or custom match",
  },
  {
    name: "Silk blend",
    href: "/products/blended-silk",
    spec: "Silk–cotton, silk–linen",
    colour: "Shade card or custom match",
  },
];

const steps = [
  {
    n: "01",
    t: "Enquiry and specification",
    d: "Send the garment or end use, the construction you have in mind, quantity, target market and any test requirements. If you only know the garment, say so — matching a construction to a silhouette is the part we are better at than a price list is.",
  },
  {
    n: "02",
    t: "Construction matching",
    d: "We come back with the weave, the momme band measured on finished cloth, the width, and an honest note on what will not work at your quantity. This is where most orders are actually saved — a construction that cannot hold your seam is cheaper to reject now than after bulk.",
  },
  {
    n: "03",
    t: "Sampling",
    d: "Mini fabric samples are supplied without a material charge once availability is confirmed; the buyer bears courier, customs and related international shipping costs. Full-size fabric and finished garments are chargeable, and any sample-fee credit against a later bulk order applies only when stated in the written quotation.",
  },
  {
    n: "04",
    t: "Quotation",
    d: "The quotation states grade, momme measured on the finished side, width, colour route, quantity, unit price, lead-time estimate and the trade term. If any of those is missing, ask — a quotation without a width or a momme basis is not comparable to another supplier's.",
  },
  {
    n: "05",
    t: "Colour approval",
    d: "Two routes: a standard shade from the colour card, or a custom match to a submitted sample or reference. Custom matching needs an approved lab dip before bulk, and the approved dip is what QC checks against — not the original reference.",
  },
  {
    n: "06",
    t: "Bulk production and QC",
    d: "15–25 working days is a planning estimate for eligible regular bulk orders, counted after sample, specification, deposit and material availability are confirmed. Inspection runs in four stages from raw material to pre-shipping final audit, with records prepared for buyer review.",
  },
  {
    n: "07",
    t: "Shipping and documents",
    d: "FOB Nansha, Yantian or Qinzhou, or FCA Yizhou, which is our preferred term because it keeps the inland leg visible. Export documentation, packing list and inspection records travel with the shipment.",
  },
];

const certifications = [
  {
    label: "OEKO-TEX® STANDARD 100 (Class II)",
    note: "Held by the local mill. Certificate number provided on quotation.",
  },
  {
    label: "GOTS (Global Organic Textile Standard)",
    note: "Held by the local mill. License number and validity provided on quotation.",
  },
  {
    label: "GOTS-certified organic silk",
    note: "Certified 100% organic; license number and validity provided on quotation.",
  },
  {
    label: "China Organic",
    note: "Available for qualified buyer review within the document's listed scope.",
  },
  {
    label: "Destination-market compliance",
    note: "California Prop 65, EU textile-safety and other market requirements reviewed against product-specific test reports and confirmed in writing before order approval.",
  },
];

const tradeTerms = [
  { label: "Sample shipping", value: siteConfig.trade.sampleShipping },
  {
    label: "Bulk shipping",
    value: siteConfig.trade.bulkShipping,
  },
  { label: "Payment", value: siteConfig.trade.payment },
  {
    label: "Lead time",
    value:
      "15–25 working days planning estimate for eligible regular bulk orders, after sample, specification, deposit and material availability are confirmed.",
  },
  {
    label: "Binding schedule",
    value: "Stated in the signed order documents.",
  },
];

const faqs: HubFaq[] = [
  {
    q: "What is the minimum order for wholesale silk fabric?",
    a: "There is no universal fixed minimum. Small trial rolls, custom widths and samples may be available subject to material, mill and schedule review. The final minimum depends on the construction, the width and whether the colour is a standard shade or a custom match, and it is confirmed in the written quotation rather than published as a single number.",
  },
  {
    q: "Do you supply free samples?",
    a: "Mini fabric samples can be supplied without a material charge once availability is confirmed. The buyer bears all courier, customs and related international shipping costs, usually by DHL or a designated courier. Full-size silk fabrics and finished apparel are chargeable, and any sample fee credit against a later bulk order applies only when it is stated in the quotation or pro forma invoice.",
  },
  {
    q: "Can you dye silk fabric to a custom colour?",
    a: "Yes, on both tracks — standard shade card colours and custom matching to a submitted sample or specified reference. Custom work requires an approved lab dip before bulk, and the approved dip becomes the reference for inspection. Greige fabric is also supplied undyed for buyers running their own dyehouse. Colour is what we quote for; surface effects beyond dyeing are a separate conversation and we will say plainly whether they are available.",
  },
  {
    q: "Are you a manufacturer or a trading company?",
    a: "We work with local mills in Yizhou, and we are a couture house with its own design and production standard. In practice that means the cloth we quote is the cloth we cut — the specification is written by people who see it on a fitting model, not only on a test report. Our export and sourcing operations run through Beijing Qingshanyimu Trading Co., Ltd.",
  },
  {
    q: "How long does bulk production take?",
    a: "15–25 working days is a planning estimate for eligible regular bulk orders. The clock starts once the sample, specification, deposit and material availability are all confirmed — not at the date of enquiry. Custom weaving, custom colour matching and jacquard pattern development each add their own lead time, and the binding schedule is the one in the signed order documents.",
  },
  {
    q: "Do you supply OEKO-TEX or GOTS certified silk?",
    a: "Yes, and the certificates are held by the local mill rather than issued to us. We provide the certificate number and validity on quotation so you can verify them with the issuing body. We do not display certificate numbers on this website, because a badge you cannot check is worse than no badge.",
  },
  {
    q: "Can you develop a custom weave, width or pattern?",
    a: "Custom width and custom pattern development are available where the weave allows, and jacquard pattern development is part of the jacquard programme. What we will not do is accept a specification the mill cannot hold at your quantity — better to say so at the sampling stage than to ship a roll that fails your cutting room.",
  },
  {
    q: "What are your shipping terms?",
    a: "Bulk orders ship FOB Nansha, Yantian or Qinzhou, or FCA Yizhou, which is our preferred term. Payment is T/T 30% deposit with 70% against the bill of lading. Samples usually move by DHL worldwide or a designated courier.",
  },
];

export default function WholesaleSilkFabricPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Wholesale silk fabric</span>
        </nav>

        <h1 className="font-display mt-6 text-4xl font-medium text-jade-deep md:text-5xl">
          Wholesale silk fabric from China: how a bulk order actually runs
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
          Nine standing constructions from local mills in Yizhou, dyed to order
          on either a standard shade card or a custom match, shipped FOB or FCA
          with inspection records. This page sets out the seven steps from
          enquiry to container, the terms we quote, and the questions that
          decide whether two wholesale quotations are actually comparable.
        </p>

        {/* 快速事实 */}
        <section className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Nine constructions",
              d: "Raw silk yarn, greige, dupioni, satin, jacquard, georgette, habotai, stretch satin and silk blends — each with its own specification page.",
            },
            {
              t: "Two colour routes",
              d: "A standard shade card, or a custom match to your sample or reference. Greige is also supplied undyed for buyers with their own dyehouse.",
            },
            {
              t: "FOB or FCA",
              d: "Nansha, Yantian and Qinzhou for FOB; FCA Yizhou preferred, so the inland leg stays visible in your landed cost.",
            },
          ].map((f) => (
            <div key={f.t} className="border border-line bg-ivory-deep p-7">
              <h2 className="font-display text-xl font-medium text-jade-deep">
                {f.t}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.d}</p>
            </div>
          ))}
        </section>

        {/* 批发矩阵 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            What we supply wholesale
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Nine categories, each with its own specification page. Colour is
            quoted per order; the table states the route rather than a price,
            because the same cloth has different economics depending on whether
            your colour is on the card.
          </p>
          <div className="mt-8 overflow-x-auto border border-line">
            <table className="w-full min-w-[680px] text-sm">
              <thead>
                <tr className="bg-jade-deep text-left text-white">
                  <th className="px-4 py-3 font-medium">Product</th>
                  <th className="px-4 py-3 font-medium">Specification</th>
                  <th className="px-4 py-3 font-medium">Colour route</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((m, i) => (
                  <tr
                    key={m.href}
                    className={i % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-left font-medium text-jade-deep"
                    >
                      <Link href={m.href} className="hover:text-gold">
                        {m.name}
                      </Link>
                    </th>
                    <td className="px-4 py-3 text-ink-soft">{m.spec}</td>
                    <td className="px-4 py-3 text-ink-soft">{m.colour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 七步流程 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Seven steps from enquiry to container
          </h2>
          <div className="mt-8 space-y-5">
            {steps.map((s) => (
              <div
                key={s.n}
                className="border border-line bg-ivory-deep p-7 md:flex md:gap-8"
              >
                <p className="font-display shrink-0 text-3xl font-medium text-gold-soft md:w-16">
                  {s.n}
                </p>
                <div className="mt-2 md:mt-0">
                  <h3 className="font-display text-xl font-medium text-jade-deep">
                    {s.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 认证 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Certifications, and what we will not display
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            The certificates behind these claims are held by the local mills,
            not by us, so the verifiable artefact is the number — not a badge on
            a website. We provide numbers on quotation and you can check them
            with the issuing body.
          </p>
          <div className="mt-8 overflow-hidden border border-line">
            <table className="w-full text-sm">
              <tbody>
                {certifications.map((c, i) => (
                  <tr
                    key={c.label}
                    className={i % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"}
                  >
                    <th
                      scope="row"
                      className="w-2/5 px-5 py-3.5 text-left font-medium text-jade-deep"
                    >
                      {c.label}
                    </th>
                    <td className="px-5 py-3.5 text-ink-soft">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 贸易条款 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Terms we quote
          </h2>
          <div className="mt-8 overflow-hidden border border-line">
            <table className="w-full text-sm">
              <tbody>
                {tradeTerms.map((t, i) => (
                  <tr
                    key={t.label}
                    className={i % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"}
                  >
                    <th
                      scope="row"
                      className="w-1/3 px-5 py-3.5 text-left font-medium text-jade-deep"
                    >
                      {t.label}
                    </th>
                    <td className="px-5 py-3.5 text-ink-soft">{t.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            Full terms, including inspection scope and claims handling, are on
            the{" "}
            <Link href="/trade-terms" className="text-gold hover:text-jade">
              trade terms page
            </Link>
            .
          </p>
        </section>

        {/* 为什么从我们这里买 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Why a couture house quotes your fabric
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              Most wholesale silk is quoted by a trading desk that never cuts
              the cloth. We quote fabric we also cut in the atelier, which
              changes what gets flagged. A cloth that passes a test report can
              still photograph grey under flash, crease at the hip after twenty
              minutes of sitting, or lose its edge on a bias seam — and those
              are the failures that cost a production run, not the ones on the
              inspection sheet.
            </p>
            <p>
              It also changes what we refuse. We will tell you when a
              construction your brief calls for cannot hold at your quantity,
              rather than quoting it and letting the sample stage discover the
              problem. That conversation is cheaper for both of us.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                href: "/couture",
                t: "The couture house",
                d: "What the atelier actually makes, and to what standard.",
              },
              {
                href: "/services",
                t: "Custom supply",
                d: "Private label, custom width, colour and pattern development.",
              },
              {
                href: "/blog/buyer-factory-audit-checklist-silk",
                t: "Audit checklist",
                d: "The checklist we work to when a buyer audits the chain.",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group block border border-line bg-ivory-deep p-7 transition-colors hover:border-gold"
              >
                <h3 className="font-display text-lg font-medium text-jade-deep group-hover:text-jade">
                  {l.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {l.d}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-gold">
                  Open →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Wholesale questions
          </h2>
          <div className="mt-8 max-w-3xl space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-line pb-6">
                <h3 className="font-display text-lg font-medium text-jade-deep">
                  {f.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 内链 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Continue through the sourcing guides
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                href: "/silk-fabrics",
                t: "Silk fabric types",
                d: "22 constructions, and which nine we hold as standing products.",
              },
              {
                href: "/yizhou-raw-silk",
                t: "Yizhou raw silk",
                d: "The origin behind the supply, with the official figures.",
              },
              {
                href: "/silk-momme-guide",
                t: "The momme guide",
                d: "Why a greige figure overstates the weight you receive.",
              },
              {
                href: "/silk-fabric-price-guide",
                t: "Price guide",
                d: "Six factors that move the price per metre, and how to compare quotes.",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group block border border-line bg-ivory-deep p-7 transition-colors hover:border-gold"
              >
                <h3 className="font-display text-xl font-medium text-jade-deep group-hover:text-jade">
                  {l.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {l.d}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-gold">
                  Open guide →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 border border-line bg-jade-deep p-10 text-white">
          <h2 className="font-display text-3xl font-medium">
            Start with the garment, not the price
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            Send the end use, quantity, destination market and any test
            requirements. You will get a specification, a sample list and a
            quotation that states its momme basis and width — so it can be
            compared honestly against anyone else&rsquo;s.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-gold-soft px-7 py-3 text-sm font-medium text-jade-deep transition-opacity hover:opacity-90"
            >
              Request a quotation
            </Link>
            <Link
              href="/samples"
              className="border border-white/40 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Request free samples
            </Link>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd([
                { name: "Home", path: "" },
                { name: "Wholesale silk fabric", path: "/wholesale-silk-fabric" },
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              itemListJsonLd(
                "Wholesale silk fabric supplied by Christopher Bu",
                matrix.map((m) => ({ name: m.name, path: m.href })),
              ),
            ),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
