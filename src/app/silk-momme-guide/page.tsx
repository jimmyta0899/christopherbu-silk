import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { pageOpenGraph } from "@/lib/seo-metadata";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  type HubFaq,
} from "@/lib/hub-utils";
import {
  KeyTakeaways,
  SourcesBlock,
  type HubSource,
} from "@/components/HubEditorial";

const HUB_UPDATED = "2026-11-07";

const sources: HubSource[] = [
  {
    publisher: "Materials (MDPI)",
    title:
      "Historical Silk: A Novel Method to Evaluate Degumming with Non-Invasive Infrared Spectroscopy and Spectral Deconvolution",
    year: "2023",
    url: "https://www.mdpi.com/2154760",
    supports:
      "Sericin accounts for 25–30% of raw silk weight, and degumming removes up to 25% of the weight, which is the basis for the greige-versus-finished gap on this page.",
  },
  {
    publisher: "Standardization Administration of China",
    title: "GB/T 1797-2008 生丝 (Raw silk)",
    year: "2008",
    url: "https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7764FD3A7E05397BE0A0AB82A",
    supports:
      "The grading and denier notation used when a quotation states a raw silk specification alongside a fabric weight.",
  },
  {
    publisher: "Yizhou District Government",
    title: "Yizhou district profile",
    year: "2023",
    url: "http://www.hcyzq.gov.cn/zjyz/yzgk/t4682604.shtml",
    supports:
      "The reeling capacity behind the mulberry silk used for the weights discussed here.",
  },
];

export const metadata: Metadata = {
  title:
    "Silk Momme Guide: What Momme Measures and the Degumming Gap",
  description:
    "Momme is weight (1 mm = 4.34 g/m²); a greige-cloth momme overstates finished weight by 22–28%. Conversion table, use-case bands, five supplier questions.",
  keywords: [
    "momme silk",
    "silk momme guide",
    "22 momme silk",
    "19 momme silk",
    "what is momme",
    "silk gsm to momme",
    "momme vs denier",
    "silk weight guide",
  ],
  alternates: { canonical: "/silk-momme-guide" },
  openGraph: pageOpenGraph("/silk-momme-guide"),
  authors: [{ name: "Christopher Bu", url: "/about/" }],
};

/** 1 momme = 4.3406 g/m²。表中 gsm 由该系数换算并取一位小数。 */
const weightTable = [
  { momme: "5", gsm: "21.7", cloth: "Chiffon, light habotai", use: "Veils, linings, overlays" },
  { momme: "8", gsm: "34.7", cloth: "Habotai, georgette", use: "Scarves, linings, light blouses" },
  { momme: "10", gsm: "43.4", cloth: "Habotai, light georgette", use: "Linings, summer shirts" },
  { momme: "12", gsm: "52.1", cloth: "Georgette, light crepe", use: "Blouses, fluid dresses" },
  { momme: "14", gsm: "60.8", cloth: "Stretch satin (light end), twill", use: "Soft tailoring, scarves" },
  { momme: "16", gsm: "69.4", cloth: "Dupioni (light), satin", use: "Dresses, shirts, large scarves" },
  { momme: "19", gsm: "82.5", cloth: "Dupioni, satin, stretch satin", use: "Structured dresses, bridal" },
  { momme: "22", gsm: "95.5", cloth: "Heavy satin, 22 momme dupioni", use: "Gowns, premium bedding" },
  { momme: "25", gsm: "108.5", cloth: "Heavy satin, faille", use: "Ball gowns, structured bodices" },
  { momme: "30", gsm: "130.2", cloth: "Mikado, heavy duchesse", use: "Sculpted bridal, couture" },
  { momme: "40", gsm: "173.6", cloth: "Upholstery weight, canvas", use: "Interiors, structural pieces" },
];

const useBands = [
  {
    band: "5–8 momme",
    d: "Light and semi-sheer. Fine as a lining that has to disappear, or a veil layer. Below 14 momme the cloth is fragile under repeated abrasion — a lining at 5 momme will wear through at the armhole before the outer cloth shows any sign of use.",
  },
  {
    band: "10–16 momme",
    d: "The blouse and scarf zone. Fluid, opaque enough for a single layer, and forgiving to cut. Most silk scarves sit at 12–16 momme; anything lighter reads as tissue and anything heavier will not knot.",
  },
  {
    band: "16–19 momme",
    d: "Where cloth starts to hold a line. This is the working range for dresses that need structure without weight — and the range where a supplier's honesty about greige versus finished measurement changes what you actually receive.",
  },
  {
    band: "19–22 momme",
    d: "Bridal and gown territory, and the band buyers most often ask for by number. At 19 momme a dupioni holds a bodice edge; at 22 it carries a sculpted seam without interfacing.",
  },
  {
    band: "25–40 momme",
    d: "Architectural. Heavy satins, mikado, duchesse, upholstery. These cloths do not drape so much as stand, and they require different construction — heavier needles, longer stitch, and seams that are pressed rather than eased.",
  },
];

/** 站内 9 个 SKU 的克重区间（与 products.ts 一致） */
const skuWeights = [
  { name: "Habotai", href: "/products/habotai", range: "5–12 momme" },
  { name: "Georgette", href: "/products/georgette", range: "8–16 momme" },
  { name: "Satin", href: "/products/satin", range: "10–30 momme" },
  { name: "Silk stretch satin", href: "/products/stretch-silk", range: "14–28 momme" },
  { name: "Dupioni", href: "/products/dupioni", range: "16–19 standard, up to 21–22 on request" },
  { name: "Jacquard Luo", href: "/products/jacquard-luo", range: "Follows the base cloth" },
  { name: "Silk blend", href: "/products/blended-silk", range: "Follows the blend" },
  { name: "Greige fabric", href: "/products/greige-fabric", range: "Follows the base weave, undyed" },
  { name: "Raw silk yarn", href: "/products/raw-silk", range: "Measured in denier — 20/22D — not momme" },
];

const faqs: HubFaq[] = [
  {
    q: "What does momme mean in silk?",
    a: "Momme (mm) is a Japanese weight unit used for silk cloth. One momme equals 4.34 grams per square metre, so a 19 momme satin weighs roughly 82 g/m². It is a measure of the woven cloth, not of the fibre quality — grade (4A, 5A, 6A) describes the filament, momme describes the fabric.",
  },
  {
    q: "What is 22 momme silk used for?",
    a: "22 momme is a heavy, high-end weight used for gowns, structured bridal and premium bedding. It sits above the general apparel range and below the architectural cloths: a dress at 22 momme holds its own shape, whereas the same dress at 16 momme follows the body. It is also the weight where buyers most often discover they were quoted a greige figure that finishes several momme lighter.",
  },
  {
    q: "Why does momme change between greige and finished fabric?",
    a: "Raw silk is coated in sericin, a gum protein that holds the filament together during reeling. Degumming removes it, and it accounts for roughly 22–28% of the cloth's weight. So a fabric described as 22 momme in greige can finish at around 16–17 momme once the gum is out. A supplier quoting a greige figure without saying so is not lying, but the number does not describe what you will cut.",
  },
  {
    q: "Is higher momme always better?",
    a: "No. Momme is a fit question before it is a quality question. A 30 momme satin makes a poor scarf because it will not knot; a 6 momme habotai makes a poor ball gown because it will not hold a seam. Higher momme costs more because it uses more silk per square metre — which is a price fact, not a quality verdict.",
  },
  {
    q: "How do I convert momme to GSM?",
    a: "Multiply momme by 4.34. So 19 momme is about 82 g/m², 22 momme about 95 g/m², and 30 momme about 130 g/m². The reverse — GSM divided by 4.34 — gives momme. Note that GSM measured on greige and GSM measured on finished cloth are different numbers for the same fabric.",
  },
  {
    q: "What is the difference between momme and denier?",
    a: "Denier measures yarn; momme measures cloth. 20/22 denier describes the thickness of the raw silk filament before it is woven. Momme describes how much the finished woven fabric weighs per unit area. Raw silk yarn is sold in denier, and woven silk is sold in momme — a supplier who quotes woven fabric in denier is using the wrong unit.",
  },
  {
    q: "What should I ask a supplier about momme?",
    a: "Five things. Whether the figure is measured on greige or finished cloth. The tolerance band rather than a single number. The test method used. Whether the figure holds after dyeing. And what the width is, since momme and width are usually quoted together and a narrow roll at the same momme costs more per running metre.",
  },
];

export default function SilkMommeGuidePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Momme guide</span>
        </nav>

        <h1 className="font-display mt-6 text-4xl font-medium text-jade-deep md:text-5xl">
          Momme, measured on finished fabric — not on greige
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-soft">
            One momme is 4.34 g/m². That is the whole unit. The complication is
            that momme can be measured before or after degumming, and degumming
            takes 22–28% of the weight out (
            <a
              href="https://www.mdpi.com/2154760"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 hover:text-gold"
            >
              Materials
            </a>
            , 2023). That is why two suppliers can both quote &ldquo;22
            momme&rdquo; and ship you cloth of visibly different weight. This page
            gives the conversion numbers, the use-case bands, and the five
            questions that close the gap.
          </p>

        
        <KeyTakeaways
          items={[
            "One momme is 4.34 g/m² of cloth, and that conversion is exact; the ambiguity sits in when the cloth was weighed, not in the unit.",
            "Sericin, the gum that holds the filament together, is 25–30% of raw silk weight (Materials, 2023), and degumming removes up to a quarter of the weight.",
            "A fabric specified at 22 momme on greige lands near 16–17 momme finished, so the greige figure overstates what you cut.",
            "Momme is not a grade. Grade is measured on the yarn under GB/T 1797-2008; momme is measured on the cloth.",
            "Ask any quotation which side of the degumming bath the figure came from. That question explains most of the gap between two quotes that look identical.",
          ]}
        />

        {/* 核心论点 */}
        <section className="mt-14 border border-gold bg-ivory-deep p-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
            The part most sourcing pages leave out
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink">
            Silk filament is held together by <strong>sericin</strong>, a gum
            protein. It is 22–28% of the raw cloth&rsquo;s weight, and it comes out
            in degumming. A fabric weighed at 22 momme in greige therefore
            finishes near 16–17 momme. Both figures are true; only one describes
            what you will cut. When a quotation states a momme figure, ask which
            side of the degumming bath it was measured on — this single question
            explains most of the price gap between two quotes that look
            identical on paper.
          </p>
        </section>

                <figure className="mt-8 max-w-3xl overflow-hidden border border-line">
          <img src="/products/georgette.webp" alt="Georgette cloth at the lighter end of the momme scale" width="1200" height="800" loading="lazy" decoding="async" className="h-auto w-full object-cover" />
          <figcaption className="border-t border-line bg-ivory-deep px-4 py-3 text-xs text-ink-muted">
            Georgette, 8–16 momme: the blouse and scarf zone where finished-weight figures matter most.
          </figcaption>
        </figure>

{/* 术语定义：三个词必须能被摘出来单独引用 */}
        <section className="mt-12 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Three words, defined
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            <strong>Momme</strong> is a weight unit for silk cloth: one momme is
            4.34 grams per square metre, so the unit itself never varies between
            suppliers. <strong>Sericin</strong> is the gum protein that binds the
            two fibroin filaments in a cocoon, and it accounts for 25–30% of raw
            silk weight (
            <a
              href="https://www.mdpi.com/2154760"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 hover:text-gold"
            >
              Materials
            </a>
            , 2023). <strong>Degumming</strong> is the hot, mildly alkaline bath
            that dissolves that gum, and it is the step where the weight
            disappears.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            For example, a 19 momme dupioni quoted on greige finishes near 14
            momme once the gum is out, which is the difference between a skirt
            that holds its A-line and one that collapses. Weigh the same cloth
            on the two sides of the bath and you have two honest numbers that
            describe different garments.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            For example, a buyer who specifies 16 momme for a bias-cut dress is
            really specifying how the cloth falls. Ask for the finished-weight
            figure and a tolerance band, then cut a trial length before the bulk
            order is confirmed.
          </p>
        </section>

        {/* 换算表 */}
        <section className="mt-16">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Momme to GSM, and what each weight is for
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            GSM is the unit most testing labs report. Momme is the unit the silk
            trade uses. They are the same measurement in different clothes. The
            conversion factor is fixed: 1 momme = 4.3406 g/m², so 19 momme is
            82.5 g/m² and 22 momme is 95.5 g/m².
          </p>
          <div className="mt-8 overflow-x-auto border border-line">
            <table className="w-full min-w-[680px] text-sm">
              <thead>
                <tr className="bg-jade-deep text-left text-white">
                  <th className="px-4 py-3 font-medium">Momme</th>
                  <th className="px-4 py-3 font-medium">Approx. GSM</th>
                  <th className="px-4 py-3 font-medium">Typical cloth</th>
                  <th className="px-4 py-3 font-medium">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {weightTable.map((w, i) => (
                  <tr
                    key={w.momme}
                    className={i % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-left font-medium text-jade-deep"
                    >
                      {w.momme} mm
                    </th>
                    <td className="px-4 py-3 text-ink">{w.gsm}</td>
                    <td className="px-4 py-3 text-ink-soft">{w.cloth}</td>
                    <td className="px-4 py-3 text-ink-soft">{w.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            Conversion: 1 momme = 4.3406 g/m². GSM figures are rounded to one
            decimal and describe nominal cloth, not a specific lot.
          </p>
        </section>

        {/* 用途带 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            The five weight bands, and what fails in each
          </h2>
          <div className="mt-8 space-y-5">
            {useBands.map((b) => (
              <div key={b.band} className="border-l-2 border-line-strong pl-6">
                <h3 className="font-display text-lg font-medium text-jade-deep">
                  {b.band}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {b.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* momme ≠ grade */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Momme is not grade, and grade is not momme
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            These two numbers get used as if one implies the other. They are
            independent, and the combination is what you are actually buying.
            Grade is set on the yarn under GB/T 1797-2008 (
            <a
              href="https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7764FD3A7E05397BE0A0AB82A"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 hover:text-gold"
            >
              Standardization Administration of China
            </a>
            , 2008), which is a different measurement from the cloth weight a
            mill quotes in momme.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="border border-line bg-ivory-deep p-7">
              <h3 className="font-display text-xl font-medium text-jade-deep">
                Grade — 4A / 5A / 6A
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                A property of the filament: evenness, cleanness and neatness.
                Decided at reeling, before any cloth exists. Explains whether
                the finished fabric will show barré, slubs or a dull cast after
                dyeing.
              </p>
            </div>
            <div className="border border-line bg-ivory-deep p-7">
              <h3 className="font-display text-xl font-medium text-jade-deep">
                Momme — 5 to 40
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                A property of the cloth: mass per unit area. Decided at weaving
                and finishing. Explains whether the fabric falls, holds or
                collapses, and how much silk you are paying for per metre.
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-soft">
            A 6A yarn woven at 30 momme is the top of the market. A 6A yarn
            woven at 8 momme still has excellent filament but almost no body. A
            low-grade yarn at 30 momme is heavy and will still band in the dye
            bath. Buyers who specify only one of the two numbers are each
            holding half a specification — the fibre side is covered in{" "}
            <Link
              href="/blog/raw-silk-grade-4a-5a-6a-explained"
              className="font-medium text-gold hover:text-jade"
            >
              the 4A/5A/6A guide
            </Link>
            .
          </p>
        </section>

        {/* 9 SKU 克重 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Where our nine products sit
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            The ranges below are the bands we weave and quote. The figure on
            your quotation should be the band for your specific lot, measured on
            the side of degumming that matches what you will receive.
          </p>
          <div className="mt-8 overflow-hidden border border-line">
            <table className="w-full text-sm">
              <tbody>
                {skuWeights.map((s, i) => (
                  <tr
                    key={s.name}
                    className={i % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"}
                  >
                    <th
                      scope="row"
                      className="w-1/3 px-5 py-3.5 text-left font-medium text-jade-deep"
                    >
                      <Link href={s.href} className="hover:text-gold">
                        {s.name}
                      </Link>
                    </th>
                    <td className="px-5 py-3.5 text-ink-soft">{s.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 五个问题 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Five questions that close the momme gap
          </h2>
          <ol className="mt-8 max-w-3xl space-y-5">
            {[
              "Was this figure measured on greige or on finished cloth?",
              "What is the tolerance band, not the single figure?",
              "Which test method produced it, and is there a report?",
              "Does the figure hold after dyeing and finishing?",
              "What width does the figure refer to?",
            ].map((q, i) => (
              <li key={q} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-jade-deep text-xs font-medium text-white">
                  {i + 1}
                </span>
                <span className="text-base leading-relaxed text-ink-soft">
                  {q}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-soft">
            A supplier who answers all five without irritation is quoting from
            records. A supplier who answers only the first one is quoting from
            memory. The distinction matters most on repeat orders, where weight
            drift usually appears in the second lot.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Momme questions buyers actually ask
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

        {/* 内链 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Continue through the sourcing guides
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                href: "/silk-fabrics",
                t: "Silk fabric types",
                d: "22 constructions by weave, weight and use.",
              },
              {
                href: "/yizhou-raw-silk",
                t: "Yizhou raw silk",
                d: "The origin, the official figures, the reeling process.",
              },
              {
                href: "/silk-fabric-price-guide",
                t: "Price guide",
                d: "What moves the price per metre — momme is one of six factors.",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group block border border-line bg-ivory-deep p-7 transition-colors hover:border-gold"
              >
                <h3 className="font-display text-lg font-medium text-jade-deep group-hover:text-jade">
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
            Ask for the weight on the finished side
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            Tell us the garment and the hand you want, and we will quote the
            weight band measured on finished cloth — with the tolerance and the
            width stated. Samples carry no material charge; you cover the
            courier.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/samples"
              className="bg-gold-soft px-7 py-3 text-sm font-medium text-jade-ink transition-opacity hover:opacity-90"
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
              breadcrumbJsonLd([
                { name: "Home", path: "" },
                { name: "Momme guide", path: "/silk-momme-guide" },
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
              articleJsonLd({
                path: "/silk-momme-guide",
                headline:
                  "Silk momme guide: what momme measures, and the degumming gap",
                description:
                  "Momme is 4.34 g/m². Degumming removes 22–28% of cloth weight, so a greige figure overstates finished momme.",
                image: "/products/dupioni2.webp",
                datePublished: HUB_UPDATED,
              }),
            ),
          }}
        />
        <SourcesBlock
          sources={sources}
          methodology="Methodology: the conversion factor is arithmetic, one momme to 4.34 g/m², and does not depend on a source. The sericin fraction and the degumming weight loss come from the peer-reviewed measurement cited above, and the 22–28% working range is narrower than the published 25–30% sericin share because some gum remains after commercial degumming. The finished-weight examples are stated as arithmetic on that range, not as measurements of a specific roll. Where a figure would depend on a particular mill's process, the page says so rather than presenting it as a constant."
        />

      </main>
      <Footer />
    </>
  );
}
