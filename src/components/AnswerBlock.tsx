import type { ReactNode } from "react";

/**
 * AnswerBlock — the "direct answer" layer that sits directly under an H1.
 *
 * Why this exists: FAQ rich results were switched off for all sites in May
 * 2026, so structured data no longer buys a snippet. What still gets quoted by
 * Google and by AI answers is a short, visible, plainly-labelled answer block
 * in the first screenful. This component is that block: 40–60 words, no
 * preamble, a visible label so both readers and parsers can see it is the
 * answer, and a review date so the claim can be aged.
 *
 * It deliberately does not use a heading element — the H1 stays the only H1 and
 * the block should not compete in the heading outline.
 */
export function AnswerBlock({
  answer,
  label = "Quick answer",
  updated,
}: {
  answer: string;
  /** Visible label. Keep it a noun phrase, not a sentence. */
  label?: string;
  /** ISO date the answer was last checked against the sources. */
  updated?: string;
}) {
  return (
    <div className="mt-6 border-l-2 border-gold bg-ivory-deep px-5 py-4 md:px-6 md:py-5">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold">
        {label}
      </p>
      <p className="mt-2 text-lg leading-relaxed text-ink md:text-xl">
        {answer}
      </p>
      {updated ? (
        <p className="mt-2 text-xs text-ink-muted">
          Last reviewed {updated}
        </p>
      ) : null}
    </div>
  );
}

/**
 * SpecTable — label/value pairs rendered as a real <table>.
 *
 * A table element (rather than a definition list or a grid of divs) is what
 * makes the pairs extractable as a table by both search engines and language
 * models, and it is what a buyer expects to be able to read across.
 */
export function SpecTable({
  rows,
  caption,
  note,
}: {
  rows: { label: string; value: ReactNode }[];
  caption?: string;
  note?: string;
}) {
  return (
    <div>
      <div className="overflow-x-auto border border-line">
        <table className="w-full text-sm">
          {caption ? <caption className="sr-only">{caption}</caption> : null}
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"}
              >
                <th
                  scope="row"
                  className="w-1/3 px-5 py-3.5 text-left align-top font-medium text-ink-soft"
                >
                  {row.label}
                </th>
                <td className="px-5 py-3.5 align-top text-ink">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="mt-3 text-xs text-ink-muted">{note}</p> : null}
    </div>
  );
}
