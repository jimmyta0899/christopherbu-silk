import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnswerBlock } from "@/components/AnswerBlock";
import { RelatedReading } from "@/components/RelatedReading";
import { pageOpenGraph } from "@/lib/seo-metadata";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
} from "@/lib/hub-utils";

const PUBLISHED = "2026-11-28";
const REVIEWED = "2026-11-28";

export const metadata: Metadata = {
  title: "Silk Mill Audit: Buyer Checklist",
  description:
    "A silk mill audit checks the floor. Certificate scope, GOTS license status and raw silk grade are verified on paper. Work the buyer checklist before you travel.",
  keywords: [
    "silk mill audit",
    "mill audit checklist",
    "textile supplier compliance",
    "silk certificate verification",
    "GOTS license check",
    "raw silk grading certificate",
  ],
  alternates: { canonical: "/silk-mill-audit" },
  openGraph: pageOpenGraph("/silk-mill-audit"),
};

const STEPS = [
  {
    name: "Settle the entity in writing",
    detail:
      "The written quotation fixes the legal entity, the authorized contact and the production origin. These belong to the entity and verification group of the five-group framework.",
  },
  {
    name: "List the certification scopes offered for review",
    detail:
      "GOTS, OEKO-TEX STANDARD 100 Class II, China Organic and quality-system files, each within the scope printed on its own document, for qualified buyer review.",
  },
  {
    name: "Verify the numbers at the desk",
    detail:
      "Check the OEKO-TEX number through the public label check and the GOTS license through the public license database. Record the result before order approval.",
  },
  {
    name: "Tie each grade claim to a lot",
    detail:
      "Raw silk grading follows GB/T 1797-2008. Ask for the grading certificate per lot and tie each grade claim to a lot mark.",
  },
  {
    name: "Review destination-market compliance",
    detail:
      "California Prop 65 and EU textile safety are reviewed against product-specific test reports and confirmed in writing before order approval.",
  },
  {
    name: "Close the rows, then visit",
    detail:
      "A row closes only when the document named in it exists and the moment named in it has passed. Raise every open row with the seller in writing before the visit.",
  },
];

const FAQ = [
  {
    q: "Can a mill audit replace the certificate checks?",
    a: "No. A site visit proves what is physically present. Certificate scope, license status and destination-market compliance are verified through public databases and product-specific test reports, then confirmed in writing before order approval.",
  },
  {
    q: "When does a buyer get the certificate numbers?",
    a: "With the written quotation and the shipping documents. Those are the documents checked against the OEKO-TEX label check and the GOTS public license database.",
  },
  {
    q: "Which certification scopes can a buyer review?",
    a: "GOTS, OEKO-TEX STANDARD 100 Class II, China Organic and quality-system files, each within that document's listed scope. Raw silk grading follows GB/T 1797-2008.",
  },
];

const RELATED = [
  {
    href: "/blog/buyer-factory-audit-checklist-silk/",
    title: "Before a Mill Audit: Compliance Checklist",
    note: "The full checklist, the five quotation groups and where each row is settled",
  },
  {
    href: "/certificates/",
    title: "Certifications and compliance",
    note: "GOTS, OEKO-TEX, China Organic and the public lookups",
  },
  {
    href: "/raw-silk-specs/",
    title: "Raw silk specifications",
    note: "Denier, grade and the fields a written quotation must lock",
  },
];

export default function SilkMillAuditPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Silk mill audit", path: "/silk-mill-audit/" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(crumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              path: "/silk-mill-audit/",
              headline: "Silk Mill Audit: Buyer Checklist",
              description: metadata.description ?? "",
              datePublished: PUBLISHED,
              dateModified: REVIEWED,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListJsonLd(
              "Silk mill audit steps",
              STEPS.map((s) => ({ name: s.name, path: "/silk-mill-audit/" })),
            ),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(FAQ)),
        }}
      />

      <Header />
      <main id="main-content" className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
          <Link href="/" className="hover:text-jade">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">Silk mill audit</span>
        </nav>

        <h1 className="font-display mt-6 text-4xl font-medium text-jade-deep md:text-5xl">
          Silk mill audit: the desk work before the visit
        </h1>

        <AnswerBlock
          answer="A mill audit inspects the floor. Certificate scope, GOTS license status, grading standard and destination-market compliance are verified on paper, then confirmed in writing before order approval. Close those rows before you travel."
          updated={REVIEWED}
        />

        <p className="mt-8 text-base leading-relaxed text-ink-soft">
          A visit answers what can be seen: the winding area, the labels on the
          bales, the lot mark on the floor. It cannot answer whether a GOTS
          license is current or which products a certificate covers. Those are
          read from documents, so the two checks belong at different desks.
        </p>

        <section aria-labelledby="sequence-heading" className="mt-12">
          <h2
            id="sequence-heading"
            className="font-display text-2xl font-medium text-jade-deep"
          >
            The sequence
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Work down the list in order. Each step names the document that
            closes it.
          </p>
          <ol className="mt-6 space-y-5">
            {STEPS.map((s, i) => (
              <li key={s.name} className="border-l-2 border-gold pl-5">
                <h3 className="text-base font-semibold text-ink">
                  {i + 1}. {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {s.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="rule-heading" className="mt-12">
          <h2
            id="rule-heading"
            className="font-display text-2xl font-medium text-jade-deep"
          >
            One rule for closing a row
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            A row closes only when the document named in it exists, and the
            moment named in it has passed. Ask two questions of each field:
            what paper satisfies this check, and when must that paper exist. A
            field with no document and no date stays open. Raise every open row
            with the seller in writing before the visit.
          </p>
        </section>

        <section aria-labelledby="faq-heading" className="mt-12">
          <h2
            id="faq-heading"
            className="font-display text-2xl font-medium text-jade-deep"
          >
            Common questions
          </h2>
          <dl className="mt-6 space-y-6">
            {FAQ.map((f) => (
              <div key={f.q}>
                <dt className="text-base font-semibold text-ink">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <RelatedReading
          heading="Read next"
          intro="Where each check is recorded in full."
          items={RELATED}
        />
      </main>
      <Footer />
    </>
  );
}
