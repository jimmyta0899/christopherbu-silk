import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Shipping & Terms | FOB Qinzhou / FCA Yizhou / FOB Shanghai",
  description:
    "Export terms for Christopher Bu × Yizhou Silk B2B supply: FOB Qinzhou / FCA Yizhou for bulk, FOB Shanghai for samples, T/T payment, OEKO-TEX & GOTS available on request.",
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
    section: "Minimum Order",
    items: [
      { label: "Raw silk", value: "By weight (kg) — contact for quotation" },
      { label: "Greige / douppioni", value: "50–200 m by item" },
    ],
  },
  {
    section: "Payment",
    items: [{ label: "Terms", value: "T/T 30% deposit, 70% against B/L" }],
  },
  {
    section: "Certification",
    items: [
      { label: "OEKO-TEX® 100", value: "Held by partner mill; certificate no. on quotation" },
      { label: "GOTS", value: "Held by partner mill; certificate no. on quotation" },
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
          Clear, transparent trade terms for B2B silk sourcing. No retail, no
          online checkout — except the {`$${siteConfig.trade.swatchFee}`} sample
          book.
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
