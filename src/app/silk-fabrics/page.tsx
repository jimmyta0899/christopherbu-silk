import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";
import {
  absUrl,
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
  type HubFaq,
} from "@/lib/hub-utils";
import {
  KeyTakeaways,
  SourcesBlock,
  type HubSource,
} from "@/components/HubEditorial";

export const metadata: Metadata = {
  title:
    "Silk Fabric Types: 22 Constructions and How to Choose One",
  description:
    "A working guide to silk fabric types — 22 constructions by weave, momme and use, from habotai lining at 5 momme to structured mikado at 30. Which of them we supply from Yizhou, and which are woven to order.",
  keywords: [
    "silk fabric types",
    "types of silk fabric",
    "different types of silk fabric",
    "silk fabric guide",
    "silk weave types",
    "silk fabric by the yard",
    "silk fabric wholesale",
    "dupioni satin georgette habotai jacquard",
  ],
  alternates: { canonical: "/silk-fabrics" },
  authors: [{ name: "Christopher Bu", url: "/about" }],
  openGraph: pageOpenGraph("/silk-fabrics"),
};

const HUB_UPDATED = "2026-11-07";

const sources: HubSource[] = [
  {
    publisher: "Standardization Administration of China",
    title: "GB/T 1797-2008 生丝 (Raw silk)",
    year: "2008",
    url: "https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7764FD3A7E05397BE0A0AB82A",
    supports:
      "The national standard that defines raw silk grades and the denier notation used in the weight discussion on this page.",
  },
  {
    publisher: "Yizhou District Government",
    title: "Yizhou district profile",
    year: "2023",
    url: "http://www.hcyzq.gov.cn/zjyz/yzgk/t4682604.shtml",
    supports:
      "The mulberry acreage and reeling capacity behind the origin statement, and the county's sericulture record.",
  },
  {
    publisher: "Hechi Civil Affairs Bureau",
    title: "Hechi place names: Yizhou",
    year: "2025",
    url: "http://mzj.hechi.gov.cn/zwdt/t27808607.shtml",
    supports:
      "Mulberry field area and cocoon output for the district, used to describe supply scale rather than a mill's capacity.",
  },
  {
    publisher: "Haiwainet",
    title: "Fan Bingbing's Forbidden City look wins praise",
    year: "2015",
    url: "https://huaren.haiwainet.cn/n/2015/0507/c232657-28706443-5.html",
    supports:
      "Records the 2015 Met Gala gown as pure silk, with colours taken from the palace bracket paintings.",
  },
  {
    publisher: "Global Times",
    title: "Chinese designers look to change Chinese fashion industry",
    year: "2018",
    url: "https://www.globaltimes.cn/page/201803/1095803.shtml",
    supports:
      "Names the Snow Plum Blossom gown worn at the 2018 Academy Awards and places it in the Forbidden City couture series.",
  },
];

/* ------------------------------------------------------------------ */
/* 22 种织法：availability 只有三态，且必须与 products.ts 的真实 SKU 一致 */
/* in-stock = 站内有独立产品页；to-order = 本地工厂可织，仅索样；         */
/* on-request = 需先确认可供性，不承诺库存、MOQ 或价格                    */
/* ------------------------------------------------------------------ */
type Availability = "in-stock" | "to-order" | "on-request";

const AVAILABILITY_LABEL: Record<Availability, string> = {
  "in-stock": "In stock — see product page",
  "to-order": "Woven to order — sample on request",
  "on-request": "Sample on request",
};

const constructions: {
  name: string;
  weave: string;
  momme: string;
  use: string;
  availability: Availability;
  href?: string;
}[] = [
  {
    name: "Charmeuse",
    weave: "Satin weave, bright face and matte back",
    momme: "16–30",
    use: "Eveningwear, lingerie, shirts, bedding",
    availability: "to-order",
  },
  {
    name: "Chiffon",
    weave: "Plain weave, high twist, sheer",
    momme: "6–12",
    use: "Layering, veils, scarves",
    availability: "to-order",
  },
  {
    name: "Crepe de chine",
    weave: "Plain weave, pebbled matte hand",
    momme: "12–20",
    use: "Shirts, dresses, linings",
    availability: "to-order",
  },
  {
    name: "Georgette",
    weave: "Plain weave, crepe twist, dry and fluid",
    momme: "6–16",
    use: "Blouses, scarves, abaya, layering",
    availability: "in-stock",
    href: "/products/georgette",
  },
  {
    name: "Dupioni",
    weave: "Plain weave from double cocoons, slubbed",
    momme: "16–22",
    use: "Structured gowns, bridal, tailoring",
    availability: "in-stock",
    href: "/products/dupioni",
  },
  {
    name: "Organza",
    weave: "Plain weave, stiff and transparent",
    momme: "6–12",
    use: "Veils, bridal overlays, structure",
    availability: "to-order",
  },
  {
    name: "Satin",
    weave: "Satin weave, high lustre",
    momme: "10–30",
    use: "Bridal, eveningwear, luxury linings",
    availability: "in-stock",
    href: "/products/satin",
  },
  {
    name: "Taffeta",
    weave: "Plain weave, crisp with a rustle",
    momme: "Mid to heavy",
    use: "Ball gowns, structured skirts",
    availability: "to-order",
  },
  {
    name: "Habotai",
    weave: "Plain weave, light and smooth",
    momme: "5–12",
    use: "Linings, scarves, light shirts",
    availability: "in-stock",
    href: "/products/habotai",
  },
  {
    name: "Silk velvet",
    weave: "Pile construction",
    momme: "Heavy",
    use: "Winter eveningwear, interiors",
    availability: "to-order",
  },
  {
    name: "Twill",
    weave: "Twill, diagonal grain",
    momme: "14–17.5",
    use: "Scarves, shirts",
    availability: "to-order",
  },
  {
    name: "Noil / shantung",
    weave: "Short-fibre, nubby and matte",
    momme: "Mid",
    use: "Casual tailoring, texture",
    availability: "to-order",
  },
  {
    name: "Mikado",
    weave: "Heavy, compact, architectural",
    momme: "25–30+",
    use: "Bridal, sculpted silhouettes",
    availability: "on-request",
  },
  {
    name: "Gazar",
    weave: "Double weave, holds shape away from the body",
    momme: "Mid to heavy",
    use: "Ball gowns, couture, portrait collars",
    availability: "on-request",
  },
  {
    name: "Radzimir",
    weave: "Fine rib, semi-matte",
    momme: "Mid to heavy",
    use: "Couture, matte alternative to satin",
    availability: "on-request",
  },
  {
    name: "Faille",
    weave: "Fine cross-rib, crisp and matte",
    momme: "Mid to heavy",
    use: "Dresses, bridal, jackets",
    availability: "on-request",
  },
  {
    name: "Peau de soie",
    weave: "Heavy satin with a faint rib",
    momme: "Heavy",
    use: "Couture gowns, shoes, bags",
    availability: "on-request",
  },
  {
    name: "Jacquard / damask",
    weave: "Motifs woven into the cloth",
    momme: "Follows the base cloth",
    use: "Formalwear, couture, interiors",
    availability: "in-stock",
    href: "/products/jacquard-luo",
  },
  {
    name: "Slipper satin",
    weave: "Very soft, very bright satin",
    momme: "Mid",
    use: "Eveningwear",
    availability: "to-order",
  },
  {
    name: "Shot taffeta",
    weave: "Warp and weft in contrasting colours",
    momme: "Mid",
    use: "Gowns, costume",
    availability: "to-order",
  },
  {
    name: "Stretch satin",
    weave: "Satin weave with elastane",
    momme: "14–28",
    use: "Bodycon eveningwear, abaya",
    availability: "in-stock",
    href: "/products/stretch-silk",
  },
  {
    name: "Silk blend",
    weave: "Silk–cotton or silk–linen",
    momme: "Follows the blend",
    use: "Modern ready-to-wear, light luxury",
    availability: "in-stock",
    href: "/products/blended-silk",
  },
];

const supplied = [
  {
    name: "Mulberry raw silk yarn",
    href: "/products/raw-silk",
    desc: "The input, not the cloth: 20/22D white, dupion, luxury and GOTS-certified organic silk in 4A–6A grade, supplied by weight for weaving and embroidery.",
  },
  {
    name: "Greige silk fabric",
    href: "/products/greige-fabric",
    desc: "Undyed cloth straight off the loom, momme following the base weave — for buyers running their own dyeing and finishing.",
  },
  {
    name: "Dupioni",
    href: "/products/dupioni",
    desc: "16 and 19 momme as standard, up to 21–22 on request. Slub, lustre and body — the workhorse of structured bridal.",
  },
  {
    name: "Satin",
    href: "/products/satin",
    desc: "10 to 30 momme, the range that separates a lining from a ball gown. Dyed to order against a standard shade card or your own colour.",
  },
  {
    name: "Jacquard Luo",
    href: "/products/jacquard-luo",
    desc: "Motif woven into the cloth rather than applied to it, with custom pattern development where the weave allows.",
  },
  {
    name: "Georgette",
    href: "/products/georgette",
    desc: "8–16 momme, dry to the hand and opaque enough in layers for abaya and modestwear programmes.",
  },
  {
    name: "Habotai",
    href: "/products/habotai",
    desc: "5–12 momme. The lining cloth, and the reason a gown hangs the way it does.",
  },
  {
    name: "Silk stretch satin",
    href: "/products/stretch-silk",
    desc: "14–28 momme with elastane, for silhouettes that have to recover after wearing.",
  },
  {
    name: "Silk blend",
    href: "/products/blended-silk",
    desc: "Silk–cotton and silk–linen, for buyers who want the hand of silk at a different price and care profile.",
  },
];

const choosePaths = [
  {
    t: "You are cutting a gown that has to hold its shape",
    d: "Start at 19 momme and go up. Dupioni at 19–22, satin at 22–30, or jacquard over a structured base. Below 16 momme the cloth follows the body instead of shaping it — which is correct for a bias slip and wrong for a corseted bodice.",
    links: [
      { label: "Dupioni", href: "/products/dupioni" },
      { label: "Satin", href: "/products/satin" },
    ],
  },
  {
    t: "You are cutting bridal",
    d: "Two different problems. The outer layer needs body and a clean edge — dupioni, satin, jacquard. The underlayers need to disappear — habotai at 5–8 momme, or georgette where you want a softer fall. Most bridal programmes buy both from the same supplier so the dye lots match.",
    links: [
      { label: "Habotai", href: "/products/habotai" },
      { label: "Dupioni", href: "/products/dupioni" },
    ],
  },
  {
    t: "You are cutting modestwear or abaya",
    d: "Weight is not the priority; drape and opacity are. Georgette at 10–16 momme and stretch satin at 14–28 cover most of the category — georgette for layered volume, stretch satin where the garment has to move with the body and still fall closed.",
    links: [
      { label: "Georgette", href: "/products/georgette" },
      { label: "Stretch satin", href: "/products/stretch-silk" },
    ],
  },
  {
    t: "You are cutting qipao, hanfu or ceremonial dress",
    d: "The cloth has to carry a motif. Jacquard does the work that embroidery would otherwise do, at a fraction of the labour, and reads correctly under stage and camera light. Satin and georgette handle the plain panels around it.",
    links: [
      { label: "Jacquard Luo", href: "/products/jacquard-luo" },
      { label: "Satin", href: "/products/satin" },
    ],
  },
];

const faqs: HubFaq[] = [
  {
    q: "How many types of silk fabric are there?",
    a: "There is no fixed number, because a type is defined by three independent things: the weave, the weight and the finish. In commercial practice most mills work with roughly 20 to 30 named constructions. This page covers 22 of them, from habotai at 5 momme to peau de soie at the heavy end. The same yarn can become a chiffon or a mikado depending on how it is woven and finished.",
  },
  {
    q: "What is the difference between silk fabric types and silk grades?",
    a: "Grade describes the fibre — 4A, 5A and 6A refer to evenness, cleanness and neatness of the raw silk filament. Type describes the cloth — how those filaments were woven. A 6A yarn woven into a loose chiffon is still a 6A yarn, and a low-grade yarn woven into a heavy satin is still low grade. Buyers who only ask about momme, or only ask about grade, are each holding half the specification.",
  },
  {
    q: "Which silk fabric is best for evening gowns?",
    a: "For a gown that has to hold a sculpted line, 19 momme and above: dupioni, heavy satin, or a jacquard over a structured base. For a bias-cut gown that should move, 16–19 momme satin or charmeuse. The failure mode in both directions is the same — cloth chosen for how it looks flat on a table rather than how it behaves on a body under light.",
  },
  {
    q: "Can you supply silk fabric in small quantities?",
    a: "Mini fabric samples can be supplied without a material charge once availability is confirmed; the buyer bears courier, customs and related international shipping costs. Full-size fabric and finished garments are chargeable. Bulk minimums depend on the construction, the width and whether the colour is a standard shade or a custom match, and are confirmed in the written quotation rather than quoted as a single number here.",
  },
  {
    q: "Do you sell silk fabric by the yard or by the meter?",
    a: "We quote by the meter for export orders, and the product pages state the width the price refers to. Buyers working in yards should confirm the conversion at quotation stage rather than assuming a 1:1 relationship — a 114 cm width and a 140 cm width are not interchangeable when you are costing a marker.",
  },
  {
    q: "Are gazar, mikado, radzimir, faille and peau de soie available?",
    a: "These are woven to order through the local mills we work with, and we quote them only after confirming the construction, width and colour against current mill capacity. We do not hold them as stock items, and this page does not state a minimum or a price for them. Ask for a sample and we will tell you honestly whether the construction is available for your quantity.",
  },
  {
    q: "Is your silk fabric dyed to order?",
    a: "Yes, on both tracks: standard shade card colours, and custom colour matching to a submitted sample or a specified reference. Greige fabric is also supplied undyed for buyers running their own dyehouse. Colour is what we quote for; surface effects beyond dyeing are a separate conversation and we will say plainly whether they are available.",
  },
];

export default function SilkFabricsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Silk fabrics</span>
        </nav>

        <h1 className="font-display mt-6 text-4xl font-medium text-jade-deep md:text-5xl">
          Silk fabric types: 22 constructions, and how to choose one
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
          Silk is not one fabric. It is a family of roughly 22 commercial
          constructions that share a fibre and almost nothing else — a 5 momme
          habotai lining and a 30 momme mikado ball gown are the same protein
          and behave like different materials. This page sets out each
          construction by weave, weight and use, states which nine we supply as
          standing products from Yizhou, and is explicit about the ones we only
          quote after confirming mill capacity.
        </p>

        
        <KeyTakeaways
          items={[
            "Silk is a family of about 22 commercial constructions, not one fabric: weight runs from 5 momme habotai lining to 30 momme mikado.",
            "Three numbers decide behaviour: weave, weight in momme, and finish or colour route. The trade name is shorthand for those three.",
            "1 momme is 4.34 g/m². Degumming between greige and finished cloth removes roughly a quarter of the weight, so a greige figure overstates the finished fabric.",
            "Nine constructions are standing products with their own specification pages; the rest are woven or quoted after capacity is confirmed.",
            "Five constructions in the list are quoted only after a mill check, and this page deliberately publishes no minimum and no price for them.",
          ]}
        />

        {/* 三个轴 */}
        <section className="mt-16">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Three axes define any silk fabric
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Buyers new to silk tend to shop by name — &ldquo;I need
            dupioni&rdquo; — and experienced buyers shop by three numbers, because
            the name is only shorthand for them.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Weave",
                d: "Plain, twill, satin, jacquard, pile. This decides lustre, drape direction and whether the cloth can hold an edge. Dupioni and habotai are both plain weave. One is slubbed and stiff, the other smooth and limp, because of the yarn and the finishing, not the interlacing.",
              },
              {
                n: "02",
                t: "Weight in momme",
                d: "1 momme is 4.34 g/m². Weight decides whether the cloth falls, holds or collapses. It is the single number most often misreported, because it can be measured on greige or on finished fabric. Degumming takes away weight in between.",
              },
              {
                n: "03",
                t: "Finish and colour route",
                d: "Greige, dyed to a standard shade, dyed to a custom match, or woven with the colour in the yarn. The same base cloth can differ in price by a wide margin across these routes. The route has to be fixed before a price means anything.",
              },
            ].map((a) => (
              <div key={a.n} className="border border-line bg-ivory-deep p-7">
                <p className="text-xs font-medium tracking-[0.18em] text-gold">
                  {a.n}
                </p>
                <h3 className="font-display mt-2 text-xl font-medium text-jade-deep">
                  {a.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {a.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 术语与标准：三个定义 + 国标来源，供读者核对口径 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            The three terms this page keeps using
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            <strong>Momme</strong> is the weight unit the silk trade quotes, and one
            momme is 4.34 g/m² of cloth. <strong>Greige</strong> is the undyed
            cloth as it leaves the loom, before finishing, dyeing or any change
            in weight. <strong>Dupioni</strong> is a plain-weave silk woven from
            slubbed yarn, which is why its surface is irregular where a
            charmeuse is smooth.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            The gap between a greige figure and a finished figure is not a
            rounding error. Degumming, the process that removes sericin from
            the yarn, takes 22–28% of the greige weight (
            <a
              href="https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7764FD3A7E05397BE0A0AB82A"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 hover:text-gold"
            >
              Standardization Administration of China
            </a>
            , 2008). A cloth sold as 22 momme on greige therefore lands near 16
            to 17 momme finished, and the finished figure is the one that
            decides how a garment hangs.
          </p>
        </section>

                <figure className="mt-8 max-w-3xl overflow-hidden border border-line">
          <img src="/products/dupioni2.webp" alt="Dupioni silk with its characteristic irregular slubs, woven from Yizhou raw silk" width="425" height="567" loading="lazy" decoding="async" className="mx-auto h-auto w-full max-w-sm object-cover" />
          <figcaption className="border-t border-line bg-ivory-deep px-4 py-3 text-xs text-ink-muted">
            Dupioni, the workhorse of structured bridal: 16–19 momme standard, up to 21–22 on request.
          </figcaption>
        </figure>

{/* 22 织法表 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            The 22 constructions
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Weight ranges are commercial ranges, not mill guarantees. A
            supplier quoting &ldquo;16–22 momme dupioni&rdquo; is describing the band
            they can weave. The figure on your quotation should be the band
            for the specific lot you are buying.
          </p>

          <div className="mt-8 overflow-x-auto border border-line">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-jade-deep text-left text-white">
                  <th className="px-4 py-3 font-medium">Construction</th>
                  <th className="px-4 py-3 font-medium">Weave</th>
                  <th className="px-4 py-3 font-medium">Momme</th>
                  <th className="px-4 py-3 font-medium">Typical use</th>
                  <th className="px-4 py-3 font-medium">Availability</th>
                </tr>
              </thead>
              <tbody>
                {constructions.map((c, i) => (
                  <tr
                    key={c.name}
                    className={i % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-left font-medium text-jade-deep"
                    >
                      {c.href ? (
                        <Link href={c.href} className="hover:text-gold">
                          {c.name}
                        </Link>
                      ) : (
                        c.name
                      )}
                    </th>
                    <td className="px-4 py-3 text-ink-soft">{c.weave}</td>
                    <td className="px-4 py-3 text-ink-soft">{c.momme}</td>
                    <td className="px-4 py-3 text-ink-soft">{c.use}</td>
                    <td className="px-4 py-3 text-ink-muted">
                      {AVAILABILITY_LABEL[c.availability]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            &ldquo;In stock&rdquo; means the construction has its own product page
            with a published specification. &ldquo;Woven to order&rdquo; means the
            local mills we work with weave it on request, with no stock
            commitment. &ldquo;Sample on request&rdquo; means we confirm the
            construction, width and colour against current mill capacity before
            quoting, and state no minimum on this page.
          </p>
        </section>

        {/* 9 个在售 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            The nine we supply as standing products
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Nine categories, each with its own specification page. Colour is
            dyed to order on both tracks — standard shade card or your own
            match — and greige is available undyed for buyers running their own
            finishing. The fibre behind them is reeled in the Yizhou area, where
            the district government publishes the mulberry acreage and reeling
            capacity (
            <a
              href="http://www.hcyzq.gov.cn/zjyz/yzgk/t4682604.shtml"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 hover:text-gold"
            >
              Yizhou District Government
            </a>
            , 2023), and the Hechi civil affairs bureau publishes the cocoon
            figures (
            <a
              href="http://mzj.hechi.gov.cn/zwdt/t27808607.shtml"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 hover:text-gold"
            >
              Hechi Civil Affairs Bureau
            </a>
            , 2025).
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supplied.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block border border-line bg-ivory-deep p-7 transition-colors hover:border-gold"
              >
                <h3 className="font-display text-xl font-medium text-jade-deep group-hover:text-jade">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {p.desc}
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-gold transition-transform group-hover:translate-x-1">
                  View specification →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 怎么选 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Choosing by what you are cutting
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            The fastest route through 22 constructions is to start from the
            garment rather than the fabric name. Four routes cover most
            enquiries we receive. For example, a bridal atelier asking for
            structure is routed to mikado or duchesse, while a lining buyer
            asking for slip is routed to habotai at 5 to 8 momme.
          </p>
          <div className="mt-8 space-y-6">
            {choosePaths.map((p) => (
              <div key={p.t} className="border border-line bg-ivory-deep p-7">
                <h3 className="font-display text-xl font-medium text-jade-deep">
                  {p.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {p.d}
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  {p.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-sm font-medium text-gold hover:text-jade"
                    >
                      {l.label} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 红毯信任块 —— 只用站内已上线、可点开的真实案例 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Where these cloths actually end up
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            We are a couture house before we are a supplier, which changes what
            we consider acceptable in a roll. The fabrics on this page are the
            ones we cut in the atelier. The specification is written by people
            who have watched it fail on a fitting model, not only on a test
            report. Both looks below were covered at the time. The 2015 Met
            Gala gown was pure silk, with colours drawn from the palace bracket
            paintings (
            <a
              href="https://huaren.haiwainet.cn/n/2015/0507/c232657-28706443-5.html"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 hover:text-gold"
            >
              Haiwainet
            </a>
            , 2015). The 2018 Academy Awards gown, named Snow Plum Blossom, was
            placed in the Forbidden City couture series (
            <a
              href="https://www.globaltimes.cn/page/201803/1095803.shtml"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 hover:text-gold"
            >
              Global Times
            </a>
            , 2018).
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                img: "/blog/fan-bingbing-forbidden-city-cape.webp",
                alt: "Fan Bingbing in the Christopher Bu Forbidden City jacquard cape at the 2015 Met Gala",
                t: "Jacquard on a museum-scale stage",
                d: "The Forbidden City jacquard cape worn at the 2015 Met Gala. A motif woven into the cloth, not appliquéd onto it. The reason jacquard reads correctly under camera flash at fifty metres.",
                href: "/blog/forbidden-city-silk-jacquard-fan-bingbing",
                label: "Read the jacquard case study",
              },
              {
                img: "/couture/white-plum-gown.webp",
                alt: "White mulberry silk gown with red plum-blossom embroidery from the Christopher Bu atelier",
                t: "Hand embroidery on silk",
                d: "A white mulberry silk gown with red plum-blossom hand embroidery. Cloth at this weight has to carry stitch tension without puckering. The failure is invisible until the light hits it.",
                href: "/blog/paz-vega-hand-embroidered-silk-oscars",
                label: "Read the Oscars case study",
              },
              {
                img: "/blog/yizhou-riverside-dawn.webp",
                alt: "The Xiajian River valley in Yizhou at dawn, the mulberry silk growing region",
                t: "Where the fibre starts",
                d: "Yizhou, Guangxi. The raw silk origin the local mills we work with draw from. The full production record. What the official figures actually say.",
                href: "/yizhou-raw-silk",
                label: "Yizhou raw silk",
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group block border border-line bg-ivory-deep transition-colors hover:border-gold"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-medium text-jade-deep group-hover:text-jade">
                    {c.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {c.d}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-gold">
                    {c.label} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 诚实边界 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            What this page does not claim
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              We do not stock all 22 constructions, and a table that implied
              otherwise would waste your time at the sampling stage. Five
              constructions in the list — mikado, gazar, radzimir, faille and
              peau de soie — are quoted only after we confirm capacity, and we
              deliberately publish no minimum and no price for them here.
            </p>
            <p>
              We also do not publish a price per meter on this page. Silk is
              quoted against a specification: grade, momme measured on finished
              cloth, width, colour route and quantity. A single headline number
              would be true for one combination and misleading for the rest.
              The pricing logic is set out separately in{" "}
              <Link
                href="/silk-fabric-price-guide"
                className="font-medium text-gold hover:text-jade"
              >
                the silk fabric price guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Questions buyers ask before sampling
          </h2>
          <div className="mt-8 max-w-3xl space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-line pb-6">
                <h3 className="font-display text-lg font-medium text-jade-deep">
                  {f.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 内链：其他 hub */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Continue through the sourcing guides
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                href: "/yizhou-raw-silk",
                t: "Yizhou raw silk",
                d: "The origin, the official production figures, and why the fibre behaves the way it does.",
              },
              {
                href: "/silk-momme-guide",
                t: "The momme guide",
                d: "What momme measures, how to convert it, and why a greige figure overstates finished weight by a fifth.",
              },
              {
                href: "/wholesale-silk-fabric",
                t: "Wholesale silk fabric",
                d: "How a bulk order runs from first enquiry to container, including sampling, dyeing and QC.",
              },
              {
                href: "/silk-fabric-price-guide",
                t: "Silk fabric price guide",
                d: "What moves the price and how to compare two quotations that use the same words.",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group block border border-line bg-ivory-deep p-7 transition-colors hover:border-gold"
              >
                <h3 className="font-display text-xl font-medium text-jade-deep group-hover:text-jade">
                  {l.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {l.d}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-gold">
                  Open guide →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 border border-line bg-jade-deep p-10 text-white">
          <h2 className="font-display text-3xl font-medium">
            Send the garment, not the fabric name
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            Tell us what you are cutting — silhouette, season, quantity and the
            hand you want — and we will come back with the construction, the
            weight and a sample list. Mini samples carry no material charge; you
            cover the courier.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/samples"
              className="bg-gold-soft px-7 py-3 text-sm font-medium text-jade-deep transition-opacity hover:opacity-90"
            >
              Request free samples
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Send an enquiry
            </Link>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              articleJsonLd({
                path: "/silk-fabrics",
                headline:
                  "Silk fabric types: 22 constructions, and how to choose one",
                description:
                  "A working guide to silk fabric types — 22 constructions by weave, momme and use, from habotai lining at 5 momme to structured mikado at 30.",
                image: "/blog/fan-bingbing-forbidden-city-cape.webp",
                datePublished: HUB_UPDATED,
              }),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd([
                { name: "Home", path: "" },
                { name: "Silk fabrics", path: "/silk-fabrics" },
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              itemListJsonLd(
                "Silk fabric constructions supplied by Christopher Bu",
                supplied.map((p) => ({ name: p.name, path: p.href })),
              ),
            ),
          }}
        />
        <SourcesBlock
          sources={sources}
          methodology="Methodology: the weight ranges on this page are commercial ranges agreed with the mills, not a mill guarantee for every roll. The finished-weight figure is the one quoted in a written specification. Denier and grade follow GB/T 1797-2008, the national raw silk standard. The origin statements rest on the Yizhou district government and Hechi civil affairs publications. Red-carpet descriptions follow the contemporaneous coverage listed above. The silk attribution for those garments rests on the atelier's own production records. Availability states are checked against the product pages on this site. A construction marked sample on request is not a stock claim."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTermSet",
              name: "Silk fabric constructions",
              url: absUrl("/silk-fabrics"),
              hasDefinedTerm: constructions.map((c) => ({
                "@type": "DefinedTerm",
                name: c.name,
                description: `${c.weave}. ${c.momme} momme. Typical use: ${c.use}.`,
                inDefinedTermSet: absUrl("/silk-fabrics"),
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
