"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type SpecRow = {
  slug: string;
  name: string;
  mommeMin: number;
  mommeMax: number;
  mommeText: string;
  weightText: string;
  width: string;
  character: string;
  use: string;
};

type SortKey = "momme-asc" | "momme-desc" | "name";

export function SpecComparison({ rows }: { rows: SpecRow[] }) {
  const [sort, setSort] = useState<SortKey>("momme-asc");
  const [band, setBand] = useState<"all" | "light" | "mid" | "heavy">("all");

  const visible = useMemo(() => {
    const filtered = rows.filter((r) => {
      if (band === "all") return true;
      if (band === "light") return r.mommeMax <= 16;
      if (band === "mid") return r.mommeMin <= 22 && r.mommeMax > 16;
      return r.mommeMax > 22;
    });
    const sorted = [...filtered];
    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "momme-asc")
      sorted.sort((a, b) => a.mommeMin - b.mommeMin || a.mommeMax - b.mommeMax);
    else sorted.sort((a, b) => b.mommeMax - a.mommeMax || b.mommeMin - a.mommeMin);
    return sorted;
  }, [rows, sort, band]);

  return (
    <div className="border border-line bg-ivory-deep p-5 md:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Filter by weight band
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {(
              [
                ["all", "All"],
                ["light", "Light ≤16 mm"],
                ["mid", "Mid 17–22 mm"],
                ["heavy", "Heavy >22 mm"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={band === key}
                onClick={() => setBand(key)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  band === key
                    ? "border-jade bg-jade text-ivory"
                    : "border-line bg-ivory text-ink-soft hover:border-jade hover:text-jade"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="spec-sort"
            className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted"
          >
            Sort
          </label>
          <select
            id="spec-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="mt-2 border border-line bg-ivory px-3 py-2 text-sm text-ink-soft focus:border-jade focus:outline-none"
          >
            <option value="momme-asc">Lightest first</option>
            <option value="momme-desc">Heaviest first</option>
            <option value="name">A–Z</option>
          </select>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[46rem] border-collapse text-sm">
          <caption className="sr-only">
            Mulberry silk weaves compared by momme range, weight, width,
            character and typical use
          </caption>
          <thead>
            <tr className="bg-jade-deep text-left text-ivory">
              <th scope="col" className="px-4 py-3 font-medium">
                Weave
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Momme
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                g/m²
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Width
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Signature
              </th>
            </tr>
          </thead>
          <tbody aria-live="polite">
            {visible.map((r, i) => (
              <tr
                key={r.slug}
                className={i % 2 === 0 ? "bg-ivory" : "bg-ivory-deep"}
              >
                <th
                  scope="row"
                  className="px-4 py-3 text-left align-top font-medium"
                >
                  <Link
                    href={`/products/${r.slug}`}
                    className="text-jade-deep underline underline-offset-2 hover:text-jade"
                  >
                    {r.name}
                  </Link>
                  <span className="mt-1 block text-xs font-normal text-ink-muted">
                    {r.use}
                  </span>
                </th>
                <td className="px-4 py-3 align-top tabular-nums text-ink">
                  {r.mommeText}
                </td>
                <td className="px-4 py-3 align-top tabular-nums text-ink-soft">
                  {r.weightText}
                </td>
                <td className="px-4 py-3 align-top text-ink-soft">{r.width}</td>
                <td className="px-4 py-3 align-top text-ink-soft">
                  {r.character}
                </td>
              </tr>
            ))}
            {visible.length === 0 ? (
              <tr className="bg-ivory">
                <td colSpan={5} className="px-4 py-6 text-sm text-ink-soft">
                  No weave in this weight band — widen the filter.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        Showing {visible.length} of {rows.length} weaves. Every figure is taken
        from the specification published on each product page; nothing here is
        inferred. Weight ranges are the finished-cloth values confirmed against
        mill availability before quotation.
      </p>
    </div>
  );
}
