import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";
import {
  absUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  type HubFaq,
} from "@/lib/hub-utils";

export const metadata: Metadata = {
  title:
    "Yizhou Raw Silk: The World's Largest Raw Silk Origin | Christopher Bu",
  description:
    "Yizhou, Guangxi is the largest raw silk producing county in China — 5,463 tonnes of raw silk a year, 13.4% of national output, twenty years at number one. The official figures, the reeling process, and what it means when you buy.",
  keywords: [
    "yizhou raw silk",
    "yizhou mulberry silk",
    "yizhou silk supplier",
    "guangxi raw silk",
    "china raw silk origin",
    "world's largest raw silk origin",
    "mulberry silk producing region",
    "yizhou silk",
  ],
  alternates: { canonical: "/yizhou-raw-silk" },
  openGraph: pageOpenGraph("/yizhou-raw-silk"),
};

/**
 * 官方数据表。每条都必须带「主体」和「口径」两道定语 ——
 * 宜州 ≠ 河池，规上茧丝绸加工产值 ≠ 全行业蚕桑加工业产值。
 * 数字来源见页面末尾 Sources。
 */
const officialFigures = [
  {
    figure: "39.6 万亩 / 396,000 mu",
    label: "Mulberry plantations in Yizhou",
    note: "Yizhou district only — not the wider Hechi prefecture, which reports 96.6 万亩.",
  },
  {
    figure: "10.9 万吨 / 109,000 t",
    label: "Fresh cocoon output, annual",
    note: "Yizhou district.",
  },
  {
    figure: "20 years",
    label: "Ranked first among all Chinese counties for sericulture scale",
    note: "Consecutive years, per the district government's 2026 statement.",
  },
  {
    figure: "5,463 t",
    label: "Raw silk output, annual",
    note: "13.4% of national raw silk output.",
  },
  {
    figure: "15+ years",
    label: "Ranked first nationally for raw silk output",
    note: "Official sources differ between 15 and 16 years depending on the data year cited; we state it as 15 years or more rather than pick one.",
  },
  {
    figure: "30,000 mu",
    label: "Organic mulberry plantation",
    note: "Certified under China Organic in 2024.",
  },
  {
    figure: "20",
    label: "Silk enterprises above designated size",
    note: "Of 277 sericulture businesses and individuals in the district; 4 hold export qualifications.",
  },
  {
    figure: "¥3.262 bn",
    label: "Silk processing output, 2024",
    note: "Above-designated-size silk processing only, up 11.3% year on year. Not the same measure as the district's total cocoon value of roughly ¥6 bn.",
  },
];

/** 从茧到纱：缫丝的六个环节 */
const reelingSteps = [
  {
    n: "01",
    t: "Cocoon selection",
    d: "Cocoons are graded before anything else. Double cocoons, thin-shelled cocoons and stained cocoons go to different streams — the double cocoons are what later become dupion yarn, which is why dupion is not a defect but a sorted grade.",
  },
  {
    n: "02",
    t: "Stifling and drying",
    d: "Heat stops the pupa from developing and drives moisture out of the shell. Moisture control here is the difference between a yarn that keeps its denier through shipping and one that gains weight and loses strength.",
  },
  {
    n: "03",
    t: "Cocoon cooking",
    d: "Hot water softens the sericin gum so the filament can unwind without breaking. Under-cooked cocoons break; over-cooked ones lose cohesion. This is a feel-and-timing skill, not a setpoint.",
  },
  {
    n: "04",
    t: "Reeling (filature)",
    d: "Six to nine filaments are drawn off together and twisted into a single thread. That grouping is what produces 20/22 denier — a range rather than an exact figure, because cocoon shells vary and the reeler is continuously adjusting.",
  },
  {
    n: "05",
    t: "Rewinding",
    d: "The reeled silk is transferred to bobbins or books, inspected for slubs and breaks, and graded. Evenness, cleanness and neatness are assessed here — the three measures behind a 4A, 5A or 6A grade.",
  },
  {
    n: "06",
    t: "Packing",
    d: "Yarn is packed into export bales with moisture content controlled below 11%, marked by lot so a batch can be traced back to its reeling run.",
  },
];

const comparisons = [
  {
    region: "Yizhou, Guangxi",
    role: "Fibre origin",
    d: "Cocoon growing and reeling. The output here is raw silk yarn and greige cloth — the input to weaving, not the finished fashion fabric.",
    ours: true,
  },
  {
    region: "Suzhou, Jiangsu",
    role: "Craft and finishing",
    d: "Embroidery, dyeing, finishing and a long couture tradition. Strong on craft narrative; it is not a raw silk origin in the same sense.",
    ours: false,
  },
  {
    region: "Hangzhou, Zhejiang",
    role: "Weaving and OEM",
    d: "High-volume weaving and garment OEM. The place your fabric is likely woven if it is not woven in Guangxi.",
    ours: false,
  },
  {
    region: "Como, Italy",
    role: "European finishing",
    d: "Dyeing, finishing and quality grading for European luxury houses. Most of the raw fibre it processes is imported — including from China.",
    ours: false,
  },
];

const faqs: HubFaq[] = [
  {
    q: "Is Yizhou really the world's largest raw silk origin?",
    a: "Yizhou is the largest raw silk producing county in China, and China produces the large majority of the world's mulberry silk. So the phrase is accurate as a description of the county's position, but it is worth being precise about what it rests on: 5,463 tonnes of annual raw silk output, 13.4% of national output, and twenty consecutive years ranked first among Chinese counties for sericulture scale. Those are the verifiable figures. Anyone quoting a global percentage should show the denominator.",
  },
  {
    q: "What is the difference between Yizhou silk and Suzhou silk?",
    a: "They sit at different points in the chain. Yizhou grows cocoons and reels raw silk — it is an origin. Suzhou is a weaving, embroidery and finishing centre with a long couture tradition. Suzhou buys fibre; Yizhou produces it. A garment described as Suzhou silk is usually describing where it was made or embroidered, not where the filament came from.",
  },
  {
    q: "Which luxury brands use Yizhou raw silk?",
    a: "The district government's own published account states that the region's high-grade raw silk supplies the raw material chains of Louis Vuitton and Hermès. We report that as the official statement it is, and we do not extend it to brands the source does not name. Being a raw material origin for a luxury house is also not the same as being its named supplier — the fibre usually passes through several hands before it reaches a European atelier.",
  },
  {
    q: "What does 20/22 denier mean?",
    a: "Denier measures the weight of 9,000 metres of filament. 20/22D means the yarn falls in a band between 20 and 22 denier — a range, not a fixed number, because it is reeled from natural cocoons whose shells vary. It is the standard specification for mulberry raw silk in international trade, and it is a different measure from momme, which describes woven cloth.",
  },
  {
    q: "Why does raw silk from one region behave differently from another?",
    a: "Three variables: the mulberry leaf, the climate, and the reeling discipline. Leaf quality drives filament strength and length; heat and humidity through the growing season affect cocoon shell thickness; and reeling practice decides how much of that potential survives into the yarn. Two regions can run the same silkworm breed and produce yarn that breaks at different rates.",
  },
  {
    q: "Can I visit or audit the supply chain?",
    a: "Buyer factory audits are possible and we publish the checklist we work to. If you are arranging a visit, tell us in advance what you need to see — reeling floor, grading records, lot marking, moisture testing — because not every stage happens at the same site and some require the mill to schedule around production.",
  },
];

export default function YizhouRawSilkPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description:
      "Couture house and silk supplier working with local mills in Yizhou, Guangxi, China.",
  };

  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Yizhou District, Hechi, Guangxi, China",
    url: absUrl("/yizhou-raw-silk"),
    address: {
      "@type": "PostalAddress",
      addressRegion: "Guangxi",
      addressCountry: "CN",
    },
    description:
      "The largest raw silk producing county in China: 5,463 tonnes of annual raw silk output, 13.4% of national output, and twenty consecutive years ranked first among Chinese counties for sericulture scale.",
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Yizhou raw silk</span>
        </nav>

        <h1 className="font-display mt-6 text-4xl font-medium text-jade-deep md:text-5xl">
          Yizhou, Guangxi: the raw silk origin behind the cloth
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
          Yizhou is the largest raw silk producing county in China. It reels
          5,463 tonnes of raw silk a year — 13.4% of national output — and has
          held first place among Chinese counties for sericulture scale for
          twenty consecutive years. The local mills we work with draw from this
          district. What follows is what the official figures actually say,
          where the widely repeated versions of them are wrong, and why the
          origin matters to a buyer specifying cloth rather than a story.
        </p>

        {/* 一句话定位 */}
        <section className="mt-14 border-l-2 border-gold pl-6">
          <p className="text-base leading-relaxed text-ink-soft">
            <span className="font-medium text-jade-deep">
              One clarification before the numbers.
            </span>{" "}
            &ldquo;World&rsquo;s largest raw silk origin&rdquo; is a fair phrase, but it
            rests on a chain of facts rather than a single published ranking:
            China produces the large majority of the world&rsquo;s mulberry silk,
            and Yizhou is the top county within China. We state the domestic
            ranking because it is published and checkable. A supplier who gives
            you a global percentage without a denominator is guessing.
          </p>
        </section>

        {/* 官方数字 */}
        <section className="mt-16">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            The official figures, with their qualifying conditions
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Administrative boundaries and statistical scope matter more than
            most buyers expect. Yizhou district and Hechi prefecture publish
            different numbers for the same thing, and &ldquo;silk processing
            output&rdquo; is not the same measure as &ldquo;total cocoon value&rdquo;.
            Each figure below carries the scope it belongs to.
          </p>
          <div className="mt-8 overflow-x-auto border border-line">
            <table className="w-full min-w-[680px] text-sm">
              <thead>
                <tr className="bg-jade-deep text-left text-white">
                  <th className="px-4 py-3 font-medium">Figure</th>
                  <th className="px-4 py-3 font-medium">What it measures</th>
                  <th className="px-4 py-3 font-medium">Scope</th>
                </tr>
              </thead>
              <tbody>
                {officialFigures.map((f, i) => (
                  <tr
                    key={f.label}
                    className={i % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"}
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-4 py-3 text-left font-medium text-jade-deep"
                    >
                      {f.figure}
                    </th>
                    <td className="px-4 py-3 text-ink">{f.label}</td>
                    <td className="px-4 py-3 text-ink-muted">{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            Sources are listed at the foot of this page. Figures are as
            published by the Yizhou district government and national statistics
            reporting in 2025–2026.
          </p>
        </section>

        {/* 从茧到纱 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            From cocoon to yarn: six stages
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Most sourcing pages describe raw silk as a commodity with a price
            per kilo. It is a manufactured product with six decision points, and
            every one of them shows up later as a defect or a clean run on your
            loom.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reelingSteps.map((s) => (
              <div key={s.n} className="border border-line bg-ivory-deep p-7">
                <p className="text-xs font-medium tracking-[0.18em] text-gold">
                  {s.n}
                </p>
                <h3 className="font-display mt-2 text-xl font-medium text-jade-deep">
                  {s.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 质量三指标 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Why the grade is decided before the yarn is sold
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            A 6A grade is not a marketing tier. It is the outcome of three
            measured properties, each assessed on the reeled yarn:
          </p>
          <div className="mt-8 space-y-5">
            {[
              {
                t: "Evenness",
                d: "Variation in denier along the thread. A yarn that swings between 19 and 24 denier will weave, but the cloth will show it as barré — horizontal bands that only appear after dyeing, when it is far too late to reject the yarn.",
              },
              {
                t: "Cleanness",
                d: "Count of larger defects per unit length — slugs, bad casts, waste. These become slubs in the finished cloth. In dupioni a slub is the point of the fabric; in a habotai lining it is a reject.",
              },
              {
                t: "Neatness",
                d: "Count of smaller imperfections. This is the measure that most often separates 5A from 6A, and it is invisible on a swatch until the cloth is dyed dark.",
              },
            ].map((x) => (
              <div key={x.t} className="border-l-2 border-line-strong pl-6">
                <h3 className="font-display text-lg font-medium text-jade-deep">
                  {x.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-soft">
            Grade covers the fibre only. It says nothing about momme, which
            describes woven cloth, and nothing about weave. Those are separate
            decisions documented in{" "}
            <Link
              href="/silk-momme-guide"
              className="font-medium text-gold hover:text-jade"
            >
              the momme guide
            </Link>{" "}
            and{" "}
            <Link
              href="/silk-fabrics"
              className="font-medium text-gold hover:text-jade"
            >
              the fabric construction index
            </Link>
            .
          </p>
        </section>

        {/* 奢侈品原料 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            The luxury raw-material claim, stated precisely
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              The district government&rsquo;s published account states that
              Yizhou&rsquo;s high-grade raw silk supplies the raw material chains
              of Louis Vuitton and Hermès. That is the claim, and it is a
              meaningful one — it means the top of the local grade range is
              good enough for houses whose rejection standards are brutal.
            </p>
            <p>
              It is also narrower than it is often repeated as. Being an origin
              for a luxury raw material chain is not the same as being a named
              supplier to that house. Fibre moves through reeling, trading,
              weaving and finishing before it reaches an atelier, and the brand
              at the end rarely knows the county. We report the official
              statement as written and stop there — we do not extend it to
              brands the source does not name, and we do not claim a direct
              relationship we cannot evidence.
            </p>
          </div>
        </section>

        {/* 区域对比 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            How Yizhou differs from the regions buyers usually name
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Buyers often ask for &ldquo;Suzhou silk&rdquo; or &ldquo;Como silk&rdquo; when what
            they mean is a quality level or a finishing standard. These are
            different links in one chain, and confusing them is how a
            specification drifts.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {comparisons.map((r) => (
              <div
                key={r.region}
                className={
                  r.ours
                    ? "border border-gold bg-ivory-deep p-7"
                    : "border border-line bg-ivory-deep p-7"
                }
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-medium text-jade-deep">
                    {r.region}
                  </h3>
                  <span className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.14em] text-gold">
                    {r.role}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {r.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 我们的位置 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Where we sit in this
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              We work with local mills in Yizhou rather than describing
              ourselves as a trader who found a good price. That distinction
              matters operationally: it is why we can tell you which reeling run
              a lot came from, why we push back when a specification will not
              survive degumming, and why we refuse to quote a construction the
              mills cannot actually weave at your quantity.
            </p>
            <p>
              The other half of our position is that we are a couture house
              first. Cloth is judged here by what it does on a body under
              movement and light — the standard that produced the{" "}
              <Link
                href="/blog/forbidden-city-silk-jacquard-fan-bingbing"
                className="font-medium text-gold hover:text-jade"
              >
                Forbidden City jacquard cape
              </Link>{" "}
              and the{" "}
              <Link
                href="/blog/paz-vega-hand-embroidered-silk-oscars"
                className="font-medium text-gold hover:text-jade"
              >
                hand-embroidered Oscars gown
              </Link>
              . A mill specification sheet will not tell you that a cloth
              photographs grey under flash, or that it creases at the hip after
              twenty minutes of sitting. We will.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Link
              href="/products/raw-silk"
              className="group block border border-line bg-ivory-deep p-7 transition-colors hover:border-gold"
            >
              <h3 className="font-display text-xl font-medium text-jade-deep group-hover:text-jade">
                Mulberry raw silk yarn
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                20/22D white, dupion, luxury and GOTS-certified organic, in
                4A–6A grade, supplied by weight to weavers and embroiderers.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-gold">
                View specification →
              </span>
            </Link>
            <Link
              href="/products/greige-fabric"
              className="group block border border-line bg-ivory-deep p-7 transition-colors hover:border-gold"
            >
              <h3 className="font-display text-xl font-medium text-jade-deep group-hover:text-jade">
                Greige silk fabric
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Undyed cloth off the loom, for buyers running their own dyeing
                and finishing — and the honest starting point for a momme
                conversation.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-gold">
                View specification →
              </span>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Questions about the origin
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

        {/* Sources */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Sources
          </h2>
          <ul className="mt-5 max-w-3xl space-y-3 text-sm leading-relaxed text-ink-soft">
            <li>
              Yizhou district government, statement published via China Textile
              Economic Information Network, March 2026 — plantation area, cocoon
              and raw silk output, enterprise counts, processing output, luxury
              raw-material statement.
            </li>
            <li>
              National Bureau of Statistics, <em>China Information Daily</em>,
              2026 — Hechi prefecture sericulture scale, white steam filature and
              greige cloth output, local processing rate.
            </li>
            <li>
              People&rsquo;s Daily Guangxi, March 2025 — consecutive-year rankings
              and organic mulberry certification.
            </li>
            <li>
              Yizhou district government portal — reopening of the Guangxi
              all-silk Zhuang brocade production line at Guangxi Jialian Silk.
            </li>
          </ul>
          <p className="mt-4 max-w-3xl text-xs text-ink-muted">
            Where official sources disagree on a year count, this page states
            the conservative version and says so rather than picking the more
            flattering number.
          </p>
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
                href: "/silk-momme-guide",
                t: "The momme guide",
                d: "What weight actually measures, and the degumming gap.",
              },
              {
                href: "/wholesale-silk-fabric",
                t: "Wholesale silk fabric",
                d: "How a bulk order runs, from enquiry to container.",
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
            Ask for the lot records
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            If the origin matters to your customer, ask us for what backs it —
            lot marking, grading certificates, moisture figures and the export
            documents that travel with the bale. Samples carry no material
            charge; you cover the courier.
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
              breadcrumbJsonLd([
                { name: "Home", path: "" },
                { name: "Yizhou raw silk", path: "/yizhou-raw-silk" },
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
            __html: JSON.stringify(placeJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
