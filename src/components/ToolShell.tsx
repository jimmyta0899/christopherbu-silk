import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnswerBlock } from "@/components/AnswerBlock";

export type ToolFaq = { q: string; a: string };

/**
 * ToolShell — shared furniture for the /tools/* pages.
 *
 * Every tool page follows the same shape on purpose: breadcrumb, H1, visible
 * direct answer, the calculator itself above the fold on desktop, then the
 * formula with its source, then FAQ. The order matters — the answer and the
 * working tool both have to be reachable before any explanatory prose, or the
 * page reads as an article with a widget bolted on.
 */
export function ToolShell({
  h1,
  answer,
  updated,
  intro,
  children,
  method,
  methodSources,
  faq,
  related,
}: {
  h1: string;
  /** 40–60 words, no preamble. */
  answer: string;
  /** ISO date the numbers on this page were last checked. */
  updated: string;
  /** One short paragraph of context, after the tool. */
  intro?: ReactNode;
  /** The interactive tool. */
  children: ReactNode;
  /** How the maths works, and what it does not do. */
  method: ReactNode;
  /** Where the constants come from. */
  methodSources: { publisher: string; title: string; year?: string; url?: string }[];
  faq: ToolFaq[];
  /** Cross-links back into the catalogue. */
  related: { href: string; label: string; note: string }[];
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
          <Link href="/" className="hover:text-jade">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/tools" className="hover:text-jade">
            Tools
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">{h1}</span>
        </nav>

        <h1 className="font-display mt-6 text-4xl font-medium text-jade-deep md:text-5xl">
          {h1}
        </h1>

        <AnswerBlock answer={answer} updated={updated} />

        <div className="mt-8">{children}</div>

        {intro ? (
          <div className="mt-10 space-y-4 text-base leading-relaxed text-ink">
            {intro}
          </div>
        ) : null}

        <section className="mt-12 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            How the conversion works
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-soft">
            {method}
          </div>
          <div className="mt-6 border-l-2 border-line pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Constants and basis
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              {methodSources.map((s) => (
                <li key={s.title}>
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-jade"
                    >
                      {s.publisher} — {s.title}
                    </a>
                  ) : (
                    <span>
                      {s.publisher} — {s.title}
                    </span>
                  )}
                  {s.year ? <span className="text-ink-muted"> ({s.year})</span> : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Frequently asked questions
          </h2>
          <div className="mt-5 space-y-4">
            {faq.map((f) => (
              <div key={f.q} className="border border-line p-6">
                <h3 className="text-base font-semibold text-jade-deep">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Where these numbers apply
          </h2>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-base font-medium text-jade-deep group-hover:text-jade">
                    {r.label}
                  </span>
                  <span className="text-sm text-ink-muted sm:text-right">
                    {r.note}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Need a weight confirmed on a real lot?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
            Calculator numbers are definitions, not measurements. Tell us the
            weave and weight you need and we will confirm the measured gsm,
            width and shrinkage of the current lot in writing before quotation.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/samples"
              className="rounded-full bg-jade px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-jade-deep"
            >
              Request a sample
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-jade px-7 py-3.5 text-sm font-medium text-jade transition-colors hover:bg-jade hover:text-ivory"
            >
              Contact B2B team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
