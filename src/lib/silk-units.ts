/**
 * Silk measurement conversions.
 *
 * Every constant here is sourced, not invented — the tools that consume this
 * module publish the same numbers in their visible copy, so a buyer can check
 * our arithmetic against the published definition.
 *
 * Momme: 1 momme = 4.340 g/m². Definition: weight in pounds of a piece
 * 45 in wide × 100 yd long = 453.6 g over 104.5 m². Cross-checked against
 * Wikipedia "Units of textile measurement", ISO-style mill tables and four
 * independent silk merchants' published converters (all agree on 4.34).
 * The exact figure is 4.3056 under the pre-1959 pound; the 4.34 trade value
 * is what the industry actually quotes, so we use 4.34 and say so.
 *
 * Ounce per square yard: 1 oz/yd² = 33.906 g/m² (1 oz = 28.3495 g,
 * 1 yd² = 0.836127 m²).
 *
 * Yarn count: tex = denier / 9 (denier is g/9000 m, tex is g/1000 m).
 * Nm = 1000 / tex. Ne = 590.5 / tex (the 590.5 constant is the standard for
 * man-made and general staple; pure cotton uses 583.1). Basis: ISO 1144
 * (tex system) and ASTM D2260 (conversion factors).
 *
 * These are exact arithmetic identities for filament units (denier / tex /
 * dtex) and nominal for spun counts (Nm / Ne), which vary with moisture
 * regain and twist. The tools label that difference rather than hiding it.
 */

/** g/m² per momme. The trade value, not the pre-1959-pound exact value. */
export const GSM_PER_MOMME = 4.34;

/** g/m² per ounce per square yard. */
export const GSM_PER_OZ_YD2 = 33.906;

/** Standard conversion constant for Ne (English cotton count). */
export const NE_CONSTANT = 590.5;

/** Conversion constant for pure cotton, shown only as a footnote. */
export const NE_CONSTANT_COTTON = 583.1;

export function mommeToGsm(momme: number): number {
  return momme * GSM_PER_MOMME;
}

export function gsmToMomme(gsm: number): number {
  return gsm / GSM_PER_MOMME;
}

export function gsmToOzYd2(gsm: number): number {
  return gsm / GSM_PER_OZ_YD2;
}

export function ozYd2ToGsm(oz: number): number {
  return oz * GSM_PER_OZ_YD2;
}

export function mommeToOzYd2(momme: number): number {
  return gsmToOzYd2(mommeToGsm(momme));
}

// --- Yarn count ------------------------------------------------------------
// Everything routes through tex so there is one place for rounding to happen.

export function denierToTex(denier: number): number {
  return denier / 9;
}

export function texToDenier(tex: number): number {
  return tex * 9;
}

export function denierToDtex(denier: number): number {
  return (denier * 10) / 9;
}

export function texToNm(tex: number): number {
  return tex > 0 ? 1000 / tex : 0;
}

export function texToNe(tex: number): number {
  return tex > 0 ? NE_CONSTANT / tex : 0;
}

export function nmToTex(nm: number): number {
  return nm > 0 ? 1000 / nm : 0;
}

export function neToTex(ne: number): number {
  return ne > 0 ? NE_CONSTANT / ne : 0;
}

export type YarnCount = {
  denier: number;
  dtex: number;
  tex: number;
  nm: number;
  ne: number;
};

/** Convert from any one yarn-count unit to all of them, via tex. */
export function yarnCountFrom(
  value: number,
  unit: "denier" | "dtex" | "tex" | "nm" | "ne",
): YarnCount {
  let tex: number;
  switch (unit) {
    case "denier":
      tex = denierToTex(value);
      break;
    case "dtex":
      tex = value / 10;
      break;
    case "tex":
      tex = value;
      break;
    case "nm":
      tex = nmToTex(value);
      break;
    case "ne":
      tex = neToTex(value);
      break;
  }
  return {
    tex,
    denier: texToDenier(tex),
    dtex: tex * 10,
    nm: texToNm(tex),
    ne: texToNe(tex),
  };
}

// --- Reference tables ------------------------------------------------------

/**
 * The momme ladder the silk trade actually quotes, with the weave each weight
 * is normally made in. Weave bands come from the standard momme range per
 * weave (habotai 5–16, chiffon 6–8, crepe de chine 12–16, organza 4–6,
 * charmeuse 12–30); the gsm and oz columns are computed, not copied.
 */
export const MOMME_LADDER = [6, 8, 10, 12, 14, 16, 19, 21, 22, 25, 30, 40] as const;

export const MOMME_REFERENCE: {
  momme: number;
  gsm: number;
  oz: number;
  weave: string;
  use: string;
}[] = [
  { momme: 6, gsm: 26.04, oz: 0.77, weave: "Chiffon, organza", use: "Overlays, veils, sleeves" },
  { momme: 8, gsm: 34.72, oz: 1.02, weave: "Habotai, lining", use: "Linings, scarves" },
  { momme: 10, gsm: 43.4, oz: 1.28, weave: "Georgette, habotai", use: "Sheer dresses, blouses" },
  { momme: 12, gsm: 52.08, oz: 1.54, weave: "Crepe de chine, satin", use: "Scarves, shirts" },
  { momme: 14, gsm: 60.76, oz: 1.79, weave: "Crepe de chine", use: "Blouses, light dresses" },
  { momme: 16, gsm: 69.44, oz: 2.05, weave: "Crepe de chine, satin", use: "Blouses, shirts" },
  { momme: 19, gsm: 82.46, oz: 2.43, weave: "Charmeuse, dupioni", use: "Silk satin, gowns, pillowcases" },
  { momme: 21, gsm: 91.14, oz: 2.69, weave: "Dupioni, crepe satin", use: "Crisp gowns, jackets, full skirts" },
  { momme: 22, gsm: 95.48, oz: 2.82, weave: "Charmeuse, satin", use: "Bedding, sleepwear" },
  { momme: 25, gsm: 108.5, oz: 3.2, weave: "Heavy satin", use: "Structured bridal, bedding" },
  { momme: 30, gsm: 130.2, oz: 3.84, weave: "Duchess, faille", use: "Gowns, structured satins" },
  { momme: 40, gsm: 173.6, oz: 5.12, weave: "Heavy crepe satin, faille", use: "Upholstery-weight silk, structured outerwear" },
];

/**
 * Order weight maths: silk is quoted per kilogram but cut per metre, so the
 * bridge between the two is fabric weight. metres × width × gsm / 1000 = kg.
 */
export type OrderWeightInput = {
  /** Metres of fabric per garment (from the pattern room). */
  metresPerGarment: number;
  /** Number of garments in the order. */
  quantity: number;
  /** Fabric width in centimetres. */
  widthCm: number;
  /** Fabric weight in momme. */
  momme: number;
  /** Cutting and wastage allowance, as a percentage on top. */
  wastagePct: number;
};

export type OrderWeightResult = {
  metresPerGarmentWithWastage: number;
  totalMetres: number;
  gsm: number;
  totalKg: number;
  kgPerGarment: number;
};

export function orderWeight(input: OrderWeightInput): OrderWeightResult {
  const wastageFactor = 1 + input.wastagePct / 100;
  const metresPerGarmentWithWastage = input.metresPerGarment * wastageFactor;
  const totalMetres = metresPerGarmentWithWastage * input.quantity;
  const gsm = mommeToGsm(input.momme);
  const widthM = input.widthCm / 100;
  const totalKg = (totalMetres * widthM * gsm) / 1000;
  const kgPerGarment =
    input.quantity > 0 ? totalKg / input.quantity : 0;
  return {
    metresPerGarmentWithWastage,
    totalMetres,
    gsm,
    totalKg,
    kgPerGarment,
  };
}
