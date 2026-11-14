"use client";

import { useMemo, useState } from "react";
import { yarnCountFrom, type YarnCount } from "@/lib/silk-units";

type Unit = "denier" | "dtex" | "tex" | "nm" | "ne";

const UNITS: { key: Unit; label: string; hint: string; step: string }[] = [
  { key: "denier", label: "Denier", hint: "g per 9,000 m", step: "0.5" },
  { key: "dtex", label: "dtex", hint: "g per 10,000 m", step: "0.5" },
  { key: "tex", label: "tex", hint: "g per 1,000 m", step: "0.1" },
  { key: "nm", label: "Nm", hint: "metres per gram", step: "1" },
  { key: "ne", label: "Ne", hint: "840-yd hanks per lb", step: "0.5" },
];

const PRESETS: { label: string; value: number; unit: Unit }[] = [
  { label: "13/15D", value: 14, unit: "denier" },
  { label: "20/22D", value: 21, unit: "denier" },
  { label: "40/44D", value: 42, unit: "denier" },
  { label: "2/20/22D", value: 42, unit: "denier" },
];

export function YarnCountConverter() {
  const [unit, setUnit] = useState<Unit>("denier");
  const [raw, setRaw] = useState("21");

  const parsed = Number.parseFloat(raw);
  const valid = Number.isFinite(parsed) && parsed > 0;

  const result = useMemo<YarnCount | null>(
    () => (valid ? yarnCountFrom(parsed, unit) : null),
    [parsed, unit, valid],
  );

  return (
    <div className="border border-line bg-ivory-deep p-5 md:p-7">
      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Enter the count you have
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {UNITS.map((u) => (
            <button
              key={u.key}
              type="button"
              aria-pressed={unit === u.key}
              onClick={() => setUnit(u.key)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                unit === u.key
                  ? "border-jade bg-jade text-ivory"
                  : "border-line bg-ivory text-ink-soft hover:border-jade hover:text-jade"
              }`}
            >
              {u.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label
          htmlFor="yarn-count"
          className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted"
        >
          {UNITS.find((u) => u.key === unit)?.label} value
        </label>
        <div className="mt-2 flex items-baseline gap-2 border border-line bg-ivory px-4 py-3 focus-within:border-jade">
          <input
            id="yarn-count"
            type="number"
            inputMode="decimal"
            min="0"
            step={UNITS.find((u) => u.key === unit)?.step}
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            className="w-full bg-transparent text-2xl font-medium tabular-nums text-jade-deep outline-none"
          />
          <span className="shrink-0 text-sm text-ink-muted">
            {UNITS.find((u) => u.key === unit)?.hint}
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Raw silk sizes
        </span>
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => {
              setUnit(p.unit);
              setRaw(String(p.value));
            }}
            className="rounded-full border border-line bg-ivory px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-jade hover:text-jade"
          >
            {p.label}
          </button>
        ))}
      </div>

      <dl
        aria-live="polite"
        className="mt-6 grid gap-3 border-t border-line pt-5 sm:grid-cols-2"
      >
        {result === null ? (
          <div className="sm:col-span-2 text-sm text-ink-soft">
            Enter a positive number to convert.
          </div>
        ) : (
          UNITS.map((u) => (
            <div
              key={u.key}
              className="flex items-baseline justify-between gap-3 border-b border-line pb-2"
            >
              <dt className="text-sm text-ink-muted">{u.label}</dt>
              <dd className="tabular-nums text-base font-medium text-jade-deep">
                {result[u.key] < 1
                  ? result[u.key].toFixed(3)
                  : result[u.key] < 100
                    ? result[u.key].toFixed(1)
                    : result[u.key].toFixed(0)}
              </dd>
            </div>
          ))
        )}
      </dl>

      {result !== null ? (
        <p className="mt-4 text-xs leading-relaxed text-ink-muted">
          Denier, dtex and tex are exact identities. Nm and Ne are nominal:
          spun-count equivalents shift with moisture regain and twist, so treat
          them as a comparison guide rather than a lab result. Ne here uses the
          general constant 590.5 — pure cotton uses 583.1.
        </p>
      ) : null}
    </div>
  );
}
