// Couture（高定）设计灵感展示数据
// 展示 Christopher Bu 高定屋的设计美学，以及真丝面料在礼服上的运用。
// 注：本站商业口径只做胚布（greige），此处为「设计灵感 / 面料应用展示」，
// 不承诺成衣定制或染色能力。

export type CoutureLook = {
  slug: string;
  name: string;
  detail: string;
  image: string;
};

export const coutureLooks: CoutureLook[] = [
  {
    slug: "red-crane-gown",
    name: "Crimson Crane Mermaid Gown",
    detail:
      "A scarlet mermaid gown embroidered with white cranes and oriental floral motifs — an illustration of how premium mulberry silk carries hand embroidery and couture structure.",
    image: "red-crane-gown.webp",
  },
  {
    slug: "green-cape-gown",
    name: "Jade Cape Gown",
    detail:
      "A gold sequin column gown beneath a peacock-green embroidered cape — a study in the drape and lustre that fine silk lends to evening silhouettes.",
    image: "green-cape-gown.webp",
  },
  {
    slug: "white-plum-gown",
    name: "White Plum Cape Gown",
    detail:
      "A strapless white gown with plum-blossom embroidery and a sweeping grid-lined cape — an oriental-inspired take on couture tailoring and silk drape.",
    image: "white-plum-gown.webp",
  },
];

export function getCoutureLook(slug: string): CoutureLook | undefined {
  return coutureLooks.find((l) => l.slug === slug);
}
