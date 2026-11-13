import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact the B2B Silk Team — Yizhou, China",
  description:
    "Contact the Christopher Bu × Yizhou Silk B2B team for raw silk, greige fabric and dupioni sourcing. Tell us your MOQ, deadline and destination.",
  alternates: { canonical: "/contact" },
  openGraph: pageOpenGraph("/contact"),
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-display text-4xl font-medium text-jade-deep md:text-5xl">
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
              data-lead="contact_inquiry"
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
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-ink-soft"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
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
                data-lead="email_contact"
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
                Want a free sample first?
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                Mini fabric samples carry no material charge once availability
                is confirmed — you cover the courier only. Full-size samples are
                chargeable.
              </p>
              <a
                href="/samples/"
                className="mt-3 inline-block text-sm font-medium text-gold hover:text-jade"
              >
                Request Free Samples →
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
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink-soft">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-none border border-line bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-jade"
      />
    </div>
  );
}
