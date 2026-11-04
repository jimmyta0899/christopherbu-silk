import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact B2B Team — Christopher Bu × Yizhou Silk",
  description:
    "Contact the Christopher Bu × Yizhou Silk B2B team for raw silk, greige fabric and dupioni sourcing. Tell us your MOQ, deadline and destination.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-display max-w-3xl text-4xl font-medium text-jade-deep md:text-5xl">
          Talk to our B2B sourcing team.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Need a custom weave or color? Tell us your MOQ, deadline and destination — we&apos;ll respond with a tailored quotation.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <section>
            <form
              action={`mailto:${siteConfig.email}`}
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" required />
                <Field label="Company" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" type="email" required />
                <Field label="Country" required />
              </div>
              <div>
                <label className="text-sm font-medium text-ink-soft">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirement: product, denier/momme, grade, MOQ, deadline, destination..."
                  className="mt-1.5 w-full rounded-none border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-jade"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-jade px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-jade-deep"
              >
                Send Inquiry
              </button>
            </form>
          </section>

          <section className="space-y-6">
            <div className="border border-line bg-ivory-deep p-6">
              <h2 className="font-display text-xl font-medium text-jade-deep">
                Email
              </h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-block text-sm text-jade hover:text-jade-deep"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="border border-line bg-ivory-deep p-6">
              <h2 className="font-display text-xl font-medium text-jade-deep">
                Entity
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>
                  <strong className="text-ink">{siteConfig.entities.china.name}</strong>{" "}
                  — {siteConfig.entities.china.role}
                </li>
                <li>
                  <strong className="text-ink">{siteConfig.trademarks.brand}</strong>{" "}
                  and{" "}
                  <strong className="text-ink">{siteConfig.trademarks.rtwLabel}</strong>{" "}
                  are registered trademarks of the company.
                </li>
              </ul>
            </div>
            <div className="border border-line bg-ivory-deep p-6">
              <h2 className="font-display text-xl font-medium text-jade-deep">
                Prefer samples first?
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                Mini fabric swatches are supplied free of material charge after
                availability is confirmed; full-size samples are chargeable.
              </p>
              <a
                href="/samples"
                className="mt-3 inline-block text-sm font-medium text-gold hover:text-jade"
              >
                Request Sample →
              </a>
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
}: {
  label: string;
  type?: string;
  required?: boolean;
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
        className="mt-1.5 w-full rounded-none border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-jade"
      />
    </div>
  );
}
