import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";
import { ORGANIZATION_ID } from "@/lib/organization-schema";

export const metadata: Metadata = {
  title:
    "Raw Silk Yarn 20/22D 5A/6A: Spec Sheet, HS 5002 & Export Terms | Yizhou Silk Supplier",
  description:
    "A buyer's spec sheet for 20/22 denier mulberry raw silk yarn from Yizhou, China: four yarn varieties, 5A/6A grades, HS heading 5002, bale packaging, FOB/FCA terms and T/T payment. All values confirmed in the written quotation.",
  keywords: [
    "20/22 denier raw silk yarn",
    "20/22D white raw silk",
    "5A 6A grade raw silk",
    "HS 5002 raw silk",
    "raw silk yarn specification sheet",
    "raw silk yarn 60 kg bale",
    "raw silk yarn FOB China",
    "raw silk yarn T/T payment",
    "mulberry raw silk yarn supplier",
    "raw silk yarn export from China",
    "Yizhou raw silk supplier",
    "GOTS organic raw silk yarn",
  ],
  alternates: { canonical: "/raw-silk-specs" },
  openGraph: pageOpenGraph("/raw-silk-specs"),
};

const specGroups = [
  {
    section: "Yarn identity",
    items: [
      { label: "Product", value: "Mulberry raw silk yarn (filature silk), Bombyx mori, mulberry-fed" },
      { label: "Denier", value: "20/22D standard; 13/15D and 27/29D on request" },
      { label: "Varieties", value: "20/22D white raw silk · Natural dupion silk yarn · 1-ply luxury silk yarn · GOTS-certified organic silk" },
      { label: "Color / finish", value: "Natural white or natural dupion; greige (undyed) or dyed to order from a standard shade card or your custom color" },
      { label: "Standard", value: "GB/T 1797-2008; moisture controlled below 11%" },
    ],
  },
  {
    section: "Grade & origin",
    items: [
      { label: "Origin", value: "Yizhou, Guangxi, China — the world's largest raw silk origin" },
      { label: "Grades", value: "Yizhou raw silk regularly reaches 5A and 6A, the highest quality tiers; 4A / 5A / 6A availability is confirmed by variety" },
      { label: "Organic option", value: "GOTS-certified organic raw silk, 100% organic silk content across the full process" },
    ],
  },
  {
    section: "Classification & packing",
    items: [
      { label: "HS classification", value: "Raw silk (not thrown) falls under HS heading 5002. The exact subheading applying to your shipment is confirmed in the written quotation and shipping documents." },
      { label: "Packing", value: "Export cartons / bales (60 kg per bale typical); luxury silk yarn in 5 kg bundles" },
      { label: "MOQ", value: "Raw silk is sold by weight, not by the metre. There is no universal fixed minimum; the final MOQ and any organic status are confirmed in the written quotation." },
    ],
  },
  {
    section: "Export terms",
    items: [
      { label: "Samples", value: "DHL worldwide or designated courier" },
      { label: "Bulk", value: "FOB Nansha / FOB Yantian / FOB Qinzhou / FCA Yizhou (preferred)" },
      { label: "Lead time", value: "15–25 working days for eligible regular bulk orders after sample, specification, deposit and material availability are confirmed; the binding schedule is stated in the signed order documents" },
      { label: "Payment", value: "T/T wire transfer — 30% deposit, 70% against Bill of Lading for bulk orders" },
      { label: "Documents", value: "Spec sheet, lab dip, inspection report, packing list, certificate of origin" },
      { label: "Certification", value: "GOTS, OEKO-TEX Standard 100 Class II, China Organic and quality-system files for qualified buyer review within each document's listed scope; certificate numbers provided with the quotation and shipping documents" },
    ],
  },
];

const varieties = [
  {
    name: "20/22D White Raw Silk Yarn",
    detail: "The standard filature silk for crepe and satin weaving, with a bright, clean white base for accurate color matching.",
    spec: "20/22D · 4A / 5A / 6A",
  },
  {
    name: "Natural Dupion Silk Yarn",
    detail: "Unbleached and un-dyed, with prominent slubs for textured weaving, curtains and interior textiles.",
    spec: "Natural (unbleached) · reference MOQ confirmed in quotation",
  },
  {
    name: "Luxury Silk Yarn",
    detail: "1-ply, 20 denier, selected from the finest batches for statement weaving and high-gloss garments.",
    spec: "1 ply · 20D · 5 kg bundles",
  },
  {
    name: "GOTS-Certified Organic Silk",
    detail: "Verifiable organic status across cultivation, reeling and weaving, supplied as raw silk, greige yarn or greige fabric.",
    spec: "GOTS · license no. and validity provided with quotation",
  },
];

const decisionSteps = [
  "State the denier (20/22D is the standard starting point) and the grade you need.",
  "Choose the form: white raw silk, natural dupion, luxury or GOTS-certified organic.",
  "Specify the finish: greige (undyed) or dyed to order from a standard shade card or your custom color.",
  "Give the target volume in kilograms, your destination port and required delivery window.",
  "List the certification files your market or brand requires, so applicability can be checked against the current document scope.",
  "Ask for a written quotation — the final specification, MOQ, schedule and applicable HS subheading are confirmed there.",
];

const faqs = [
  {
    q: "What is 20/22D raw silk yarn?",
    a: "20/22D is filature silk measured in the 20–22 denier range, the standard starting point for silk crepes, satins and fine weaving. Denier measures yarn weight; momme measures the weight of woven cloth. Buyers use denier when buying yarn and momme when buying fabric.",
  },
  {
    q: "Which HS code applies to raw silk yarn?",
    a: "Raw silk (not thrown) is classified under HS heading 5002 in the Harmonized System. The exact subheading that applies to a shipment depends on the goods and destination, so we confirm it in the written quotation and shipping documents rather than stating a fixed code for every order.",
  },
  {
    q: "What does 5A / 6A mean for raw silk from Yizhou?",
    a: "5A and 6A are the highest quality tiers in the Chinese raw silk grading system. Yizhou, in Guangxi, has held China's top ranking for mulberry field area, cocoon output and raw silk production for over two decades, and its raw silk regularly reaches these grades. Grade availability for a given variety is confirmed in the written quotation.",
  },
  {
    q: "How is raw silk yarn packed for export?",
    a: "Raw silk yarn is packed in export cartons or bales, with 60 kg per bale as the typical reference and 5 kg bundles for luxury silk yarn. Final packing is confirmed against the order and destination before shipment.",
  },
  {
    q: "What is the minimum order quantity for raw silk yarn?",
    a: "Raw silk is sold by weight, not by the metre, and there is no universal fixed MOQ. Reference minimums vary by variety — for example, natural dupion silk yarn is typically quoted around 10 kg and luxury silk yarn around 5 kg — and the final MOQ is confirmed in the written quotation.",
  },
  {
    q: "Can raw silk yarn be supplied dyed, or only greige?",
    a: "Both. Yarn and fabric can be supplied greige (undyed) or dyed to order — we offer a standard shade card and custom color matching. Printed options are not listed in this specification.",
  },
  {
    q: "What are the payment and shipping terms for bulk raw silk?",
    a: "Bulk orders ship FOB Nansha, FOB Yantian, FOB Qinzhou or FCA Yizhou (preferred), with samples sent by DHL worldwide or a designated courier. Payment is T/T — 30% deposit and 70% against Bill of Lading. Full terms are on our export terms page.",
  },
  {
    q: "Can I get samples before placing a bulk order?",
    a: "Yes. Free mini swatches may be supplied after availability is confirmed, and full-size samples are chargeable. See our sample service and request a quotation with your denier, grade and intended use.",
  },
];

export default function RawSilkSpecsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Raw Silk Yarn 20/22D: Specifications, Grades & Export Terms",
    description:
      "A buyer's specification sheet for 20/22 denier mulberry raw silk yarn from Yizhou, China, covering denier, grade, HS heading 5002, packing, MOQ and export terms.",
    datePublished: "2026-11-06",
    dateModified: "2026-11-06",
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: `${siteConfig.url}/raw-silk-specs`,
    keywords: "20/22 denier raw silk, 5A 6A grade, HS 5002, raw silk yarn spec sheet",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
      { "@type": "ListItem", position: 2, name: "Products", item: `${siteConfig.url}/products` },
      { "@type": "ListItem", position: 3, name: "Raw Silk Yarn", item: `${siteConfig.url}/products/raw-silk` },
      { "@type": "ListItem", position: 4, name: "Specifications", item: `${siteConfig.url}/raw-silk-specs` },
    ],
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <nav className="text-sm text-ink-muted">
          <Link href="/" className="hover:text-jade">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-jade">Products</Link>
          <span className="mx-2">/</span>
          <Link href="/products/raw-silk" className="hover:text-jade">Raw Silk Yarn</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">Specifications</span>
        </nav>

        <div className="mt-8">
          <h1 className="font-display text-4xl font-medium text-jade-deep md:text-5xl">
            Raw Silk Yarn 20/22D: Specifications, Grades &amp; Export Terms
          </h1>
          <p className="mt-2 text-sm font-medium text-gold">
            B2B buyer specification sheet
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Christopher Bu supplies 20/22 denier mulberry raw silk yarn from
            Yizhou, China — the world&apos;s largest raw silk origin — in four
            varieties, with 5A/6A grade raw silk, HS heading 5002 classification,
            FOB/FCA export terms and T/T payment. Every specification is
            confirmed in the written quotation.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Specification sheet
          </h2>
          <div className="mt-3">
            <a
              href="/raw-silk-spec-sheet.md"
              download
              data-lead="spec_sheet_download"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-jade"
            >
              ↓ Download spec sheet (Markdown, for buyers &amp; AI agents)
            </a>
          </div>
          <div className="mt-5 space-y-8">
            {specGroups.map((group) => (
              <div key={group.section}>
                <h3 className="text-base font-semibold text-jade-deep">
                  {group.section}
                </h3>
                <div className="mt-3 overflow-hidden border border-line">
                  <table className="w-full text-sm">
                    <tbody>
                      {group.items.map((item, i) => (
                        <tr
                          key={item.label}
                          className={i % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"}
                        >
                          <th className="w-1/4 px-5 py-3.5 text-left font-medium text-ink-soft align-top">
                            {item.label}
                          </th>
                          <td className="px-5 py-3.5 text-ink">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">
            Specifications are industry-standard values and are confirmed against
            current mill availability before quotation. The final specification,
            MOQ, schedule, applicable HS subheading and organic status are stated
            in the written quotation and shipping documents.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Four yarn varieties
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {varieties.map((v) => (
              <div key={v.name} className="border border-line p-6">
                <h3 className="text-base font-semibold text-jade-deep">{v.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.detail}</p>
                <p className="mt-3 text-xs text-ink-muted">{v.spec}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            Full descriptions and applications are on the{" "}
            <Link href="/products/raw-silk" className="text-jade hover:underline">
              raw silk yarn product page
            </Link>
            .
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            How to specify your order
          </h2>
          <ol className="mt-5 space-y-3">
            {decisionSteps.map((step, i) => (
              <li key={step} className="flex gap-4 text-sm leading-relaxed text-ink">
                <span className="shrink-0 font-medium text-jade">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            For a plain-English explanation of yarn versus fabric weights, see{" "}
            <Link href="/blog/momme-vs-denier-silk-specs" className="text-jade hover:underline">
              momme vs denier
            </Link>
            ; for the sourcing process, see{" "}
            <Link href="/blog/sourcing-silk-for-ateliers-worldwide" className="text-jade hover:underline">
              sourcing silk for ateliers worldwide
            </Link>
            . Full commercial terms are on the{" "}
            <Link href="/trade-terms" className="text-jade hover:underline">
              export terms page
            </Link>
            .
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Frequently asked questions
          </h2>
          <div className="mt-5 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-line p-6">
                <h3 className="text-base font-semibold text-jade-deep">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Request a specification or quotation
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
            Tell us your denier, grade, target volume in kilograms, destination
            port and required certification files. Our B2B team will respond with
            a written quotation and current sample availability.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/samples"
              data-lead="sample_request_raw_silk_specs"
              className="rounded-full bg-jade px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-jade-deep"
            >
              Request Sample
            </Link>
            <Link
              href="/contact"
              data-lead="contact_inquiry_raw_silk_specs"
              className="rounded-full border border-jade px-7 py-3.5 text-sm font-medium text-jade transition-colors hover:bg-jade hover:text-ivory"
            >
              Contact B2B Team
            </Link>
          </div>
          <p className="mt-6 text-xs text-ink-muted">
            See also:{" "}
            <Link href="/faq" className="hover:text-jade">FAQ</Link>
            {" · "}
            <Link href="/certificates" className="hover:text-jade">Certificates</Link>
            {" · "}
            <Link href="/blog/yizhou-mulberry-silk-longevity-to-world" className="hover:text-jade">
              Yizhou mulberry silk origin
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
