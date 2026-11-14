"use client";

import { useMemo, useState } from "react";
import { mommeToGsm, orderWeight } from "@/lib/silk-units";

type Field = "quantity" | "metres" | "width" | "momme" | "wastage";

const DEFAULTS: Record<Field, string> = {
  quantity: "500",
  metres: "2.4",
  width: "140",
  momme: "19",
  wastage: "12",
};

const PRESET_MOMME = [12, 16, 19, 22, 25];
const PRESET_WIDTH = [114, 140];

function num(value: string, fallback: number): number {
  const n = Number.parseFloat(value);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

/**
 * Order weight calculator.
 *
 * The gap this closes: fabric is quoted per metre, but freight, duty and any
 * raw-silk component run on weight, so a purchase order has to be translated
 * before two quotations can be compared on one basis. metres × width(m) ×
 * g/m² ÷ 1000 is the whole of the maths — the tool exists to stop that being
 * done in a spreadsheet with a mistyped width.
 */
export function OrderWeightCalculator() {
  const [values, setValues] = useState<Record<Field, string>>(DEFAULTS);

  function set(field: Field) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
  }

  const result = useMemo(() => {
    const quantity = num(values.quantity, 0);
    const metres = num(values.metres, 0);
    const widthCm = num(values.width, 0);
    const momme = num(values.momme, 0);
    const wastage = num(values.wastage, 0);

    if (quantity <= 0 || metres <= 0 || widthCm <= 0 || momme <= 0) return null;

    return orderWeight({
      quantity,
      metresPerGarment: metres,
      widthCm,
      momme,
      wastagePct: wastage,
    });
  }, [values]);

  const mommeValue = num(values.momme, 0);
  const gsmValue = mommeValue > 0 ? mommeToGsm(mommeValue) : 0;

  function input(
    id: Field,
    label: string,
    suffix: string,
    step: string,
    hint?: string,
  ) {
    return (
      <div>
        <label
          htmlFor={`ow-${id}`}
          className="block text-sm font-medium text-ink-soft"
        >
          {label}
        </label>
        <div className="mt-2 flex items-baseline gap-2 border border-line bg-ivory px-4 py-2.5 focus-within:border-jade">
          <input
            id={`ow-${id}`}
            type="number"
            inputMode="decimal"
            min="0"
            step={step}
            value={values[id]}
            onChange={set(id)}
            className="w-full bg-transparent text-lg font-medium tabular-nums text-jade-deep outline-none"
          />
          <span className="shrink-0 text-sm text-ink-muted">{suffix}</span>
        </div>
        {hint ? (
          <p className="mt-1.5 text-xs text-ink-muted">{hint}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="border border-line bg-ivory-deep p-5 md:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        {input("quantity", "Garments in the order", "pcs", "1")}
        {input(
          "metres",
          "Fabric per garment",
          "m",
          "0.05",
          "From your pattern room, before wastage",
        )}
        {input("width", "Fabric width", "cm", "1")}
        {input("momme", "Fabric weight", "momme", "0.5", gsmValue > 0 ? `= ${gsmValue.toFixed(1)} g/m²` : undefined)}
        {input(
          "wastage",
          "Wastage allowance",
          "%",
          "1",
          "Cutting loss, ends, defects and re-cuts",
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Common weights
        </span>
        {PRESET_MOMME.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() =>
              setValues((prev) => ({ ...prev, momme: String(m) }))
            }
            className="rounded-full border border-line bg-ivory px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-jade hover:text-jade"
          >
            {m} mm
          </button>
        ))}
        <span className="ml-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Width
        </span>
        {PRESET_WIDTH.map((w) => (
          <button
            key={w}
            type="button"
            onClick={() =>
              setValues((prev) => ({ ...prev, width: String(w) }))
            }
            className="rounded-full border border-line bg-ivory px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-jade hover:text-jade"
          >
            {w} cm
          </button>
        ))}
      </div>

      <div
        aria-live="polite"
        className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-3"
      >
        {result === null ? (
          <div className="bg-ivory p-5 text-sm text-ink-soft sm:col-span-3">
            Enter an order quantity, fabric per garment, width and weight to
            calculate.
          </div>
        ) : (
          <>
            <div className="bg-ivory p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Total fabric
              </p>
              <p className="mt-1 text-2xl font-medium tabular-nums text-jade-deep">
                {result.totalMetres.toFixed(0)} m
              </p>
              <p className="mt-1 text-xs text-ink-muted">
                {result.metresPerGarmentWithWastage.toFixed(2)} m per garment
                including wastage
              </p>
            </div>
            <div className="bg-ivory p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Order weight
              </p>
              <p className="mt-1 text-2xl font-medium tabular-nums text-jade-deep">
                {result.totalKg.toFixed(1)} kg
              </p>
              <p className="mt-1 text-xs text-ink-muted">
                {result.kgPerGarment.toFixed(3)} kg per garment
              </p>
            </div>
            <div className="bg-ivory p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Fabric weight
              </p>
              <p className="mt-1 text-2xl font-medium tabular-nums text-jade-deep">
                {result.gsm.toFixed(1)} g/m²
              </p>
              <p className="mt-1 text-xs text-ink-muted">
                Derived from the momme entered
              </p>
            </div>
          </>
        )}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        This is a weight estimate, not a quotation. It assumes the stated momme
        is measured on the finished cloth and that the fabric per garment figure
        is your own pattern-room number. Greige cloth is heavier than it finishes,
        so a greige order weighs more than this calculator says.
      </p>
    </div>
  );
}
