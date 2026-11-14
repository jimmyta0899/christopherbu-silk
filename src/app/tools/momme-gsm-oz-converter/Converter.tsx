"use client";

import { useMemo, useState } from "react";
import {
  gsmToMomme,
  gsmToOzYd2,
  mommeToGsm,
  mommeToOzYd2,
  ozYd2ToGsm,
} from "@/lib/silk-units";

type Source = "momme" | "gsm" | "oz";

const PRESETS = [6, 8, 12, 16, 19, 22, 25, 30];

function fmt(value: number, digits: number): string {
  if (!Number.isFinite(value)) return "—";
  return value.toFixed(digits);
}

/**
 * Three-way linked converter for silk weight.
 *
 * Only one field is authoritative at a time (whichever the user last edited),
 * and the other two are derived from it. Keeping the raw string in state means
 * a half-typed "1" does not get rewritten to "1.00" mid-keystroke.
 */
export function MommeConverter() {
  const [source, setSource] = useState<Source>("momme");
  const [raw, setRaw] = useState("19");

  const parsed = Number.parseFloat(raw);
  const valid = Number.isFinite(parsed) && parsed > 0;

  const values = useMemo(() => {
    if (!valid) return null;
    if (source === "momme") {
      return {
        momme: parsed,
        gsm: mommeToGsm(parsed),
        oz: mommeToOzYd2(parsed),
      };
    }
    if (source === "gsm") {
      return {
        momme: gsmToMomme(parsed),
        gsm: parsed,
        oz: gsmToOzYd2(parsed),
      };
    }
    return {
      momme: gsmToMomme(ozYd2ToGsm(parsed)),
      gsm: ozYd2ToGsm(parsed),
      oz: parsed,
    };
  }, [parsed, source, valid]);

  function edit(next: Source, value: string) {
    setSource(next);
    setRaw(value);
  }

  function field(
    key: Source,
    label: string,
    unit: string,
    step: string,
    digits: number,
  ) {
    const value =
      values === null
        ? ""
        : key === source
          ? raw
          : fmt(values[key], digits);
    return (
      <div>
        <label
          htmlFor={`weight-${key}`}
          className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted"
        >
          {label}
        </label>
        <div className="mt-2 flex items-baseline gap-2 border border-line bg-ivory px-4 py-3 focus-within:border-jade">
          <input
            id={`weight-${key}`}
            type="number"
            inputMode="decimal"
            min="0"
            step={step}
            value={value}
            onChange={(e) => edit(key, e.target.value)}
            onFocus={() => {
              // Adopt the derived value into the editable field only if the
              // user actually starts typing in it.
              if (values !== null && key !== source) {
                edit(key, fmt(values[key], digits));
              }
            }}
            className="w-full bg-transparent text-2xl font-medium tabular-nums text-jade-deep outline-none"
            aria-describedby={`weight-${key}-unit`}
          />
          <span
            id={`weight-${key}-unit`}
            className="shrink-0 text-sm text-ink-muted"
          >
            {unit}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-line bg-ivory-deep p-5 md:p-7">
      <div className="grid gap-5 sm:grid-cols-3">
        {field("momme", "Momme", "mm", "0.5", 1)}
        {field("gsm", "Grams per m²", "g/m²", "1", 1)}
        {field("oz", "Ounces per yd²", "oz/yd²", "0.01", 2)}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Common weights
        </span>
        {PRESETS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => edit("momme", String(p))}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
              source === "momme" && parsed === p
                ? "border-jade bg-jade text-ivory"
                : "border-line bg-ivory text-ink-soft hover:border-jade hover:text-jade"
            }`}
          >
            {p} mm
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-5 text-sm text-ink-soft">
        {values === null ? (
          "Enter a positive number to convert."
        ) : (
          <>
            <span className="font-medium text-jade-deep">
              {fmt(values.momme, 1)} momme
            </span>{" "}
            = {fmt(values.gsm, 1)} g/m² = {fmt(values.oz, 2)} oz/yd². At a{" "}
            {fmt(values.gsm, 0)} g/m² weight, one metre of 140 cm silk weighs{" "}
            {fmt((values.gsm * 1.4) / 1000, 3)} kg.
          </>
        )}
      </p>
    </div>
  );
}
