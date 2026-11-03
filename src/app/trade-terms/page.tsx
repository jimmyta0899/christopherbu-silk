import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Shipping & Terms | Reference MOQ & Lead Time, GOTS / OEKO-TEX",
  description:
    "Export terms for Christopher Bu × Yizhou Silk B2B supply: FOB Qinzhou / FCA Yizhou for bulk, FOB Shanghai for samples, T/T payment, reference MOQ and 15–25 day lead time confirmed in writing. GOTS, OEKO-TEX Class II, China Organic and destination-market compliance available.",
  keywords: [
    "FCA Yizhou silk fabric",
    "FOB Qinzhou silk fabric",
    "FOB Shanghai silk swatch",
    "silk fabric lead time 25 days",
    "silk reference MOQ",
    "silk fabric Prop 65 compliance",
  ],
};

const terms = [
  {
    section: "Shipping",
    items: [
      { label: "Samples", value: "FOB Shanghai, 5–7 days (DHL worldwide)" },
      { label: "Bulk", value: "FOB Qinzhou / FCA Yizhou (preferred), 20–25 days" },
    ],
  },
  {
    section: "Reference MOQ",
    items: [
      {
        label: "Minimum order",
        value:
          "No universal fixed MOQ. Small trial rolls, custom widths and fabric swatches may be available subject to material, mill and schedule review.",
      },
      {
        label: "Confirmation",
        value:
          "The final MOQ and any organic status are confirmed in the written quotation and applicable document scope.",
      },
    ],
  },
  {
    section: "Production Lead Time",
    items: [
      {
        label: "Planning estimate",
        value:
          "15–25 working days for eligible regular bulk orders, after the sample, specification, deposit and material availability are confirmed.",
      },
      {
        label: "Binding schedule",
        value:
          "The binding production and delivery schedule is stated in the signed order documents.",
      },
    ],
  },
  {
    section: "Payment",
    items: [
      { label: "Small orders", value: "PayPal, Stripe, Venmo, Zelle for eligible trial orders" },
      { label: "Bulk orders", value: "T/T wire transfer — 30% deposit, 70% against B/L" },
    ],
  },
  {
    section: "Certification",
    items: [
      {
        label: "Available files",
        value:
          "GOTS, OEKO-TEX Standard 100 Class II, China Organic and quality-system files for qualified buyer review within each document's listed scope.",
      },
      {
        label: "Destination market",
        value:
          "California Prop 65, EU textile-safety and other destination-market requirements are reviewed against product-specific test reports and confirmed in writing before order approval.",
      },
    ],
  },
  {
    section: "Documents",
    items: [
      {
        label: "Provided",
        value: "Spec sheet, lab dip, inspection report, packing list, certificate of origin",
      },
    ],
  },
];

export default function TradeTermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-display max-w-3xl text-4xl font-medium text-jade-deep md:text-5xl">
          Export terms: FOB Qinzhou, FCA Yizhou, FOB Shanghai.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Clear, transparent trade terms for silk sourcing — including our
          sample service policy.
        </p>

        <div className="mt-14 space-y-8">
          {terms.map((group) => (
            <section key={group.section}>
              <h2 className="font-display text-2xl font-medium text-jade-deep">
                {group.section}
              </h2>
              <div className="mt-4 overflow-hidden border border-line">
                <table className="w-full text-sm">
                  <tbody>
                    {group.items.map((item, i) => (
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
            </section>
          ))}
        </div>

        <section className="mt-14 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Have a question about terms?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
            Contact our B2B team to discuss your specific shipment,
            destination-market requirements and certification needs.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block rounded-full bg-jade px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-jade-deep"
            >
              Contact B2B Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
