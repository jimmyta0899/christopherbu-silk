import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";
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
    publisher: "Standardization Administration of China",
    title: "GB/T 1797-2008 生丝 (Raw silk)",
    year: "2008",
    url: "https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7764FD3A7E05397BE0A0AB82A",
    supports:
      "The grade scale quoted in a raw silk price, which is measured on the yarn and not on the finished cloth.",
  },
  {
    publisher: "International Chamber of Commerce",
    title: "Incoterms 2020 rules",
    year: "2020",
    url: "https://iccwbo.org/business-solutions/incoterms-rules/",
    supports:
      "The delivery terms that decide which costs sit inside a quoted price and which arrive later as landed cost.",
  },
  {
    publisher: "Yizhou District Government",
    title: "Yizhou district profile",
    year: "2023",
    url: "http://www.hcyzq.gov.cn/zjyz/yzgk/t4682604.shtml",
    supports:
      "The reeling base behind the raw material that sets the floor of a fabric price.",
  },
];

export const metadata: Metadata = {
  title:
    "Silk Fabric Price per Meter: What Moves It and How to Compare",
  description:
    "Why identical silk names get quotes that differ by a multiple: grade, momme basis, width, colour route, quantity, testing. Six drivers, RFQ check.",
  keywords: [
    "silk fabric price per yard",
    "silk fabric price per meter",
    "how much is silk fabric",
    "silk fabric cost",
    "wholesale silk fabric price",
    "why is silk expensive",
    "silk fabric quotation",
  ],
  alternates: { canonical: "/silk-fabric-price-guide" },
  openGraph: pageOpenGraph("/silk-fabric-price-guide"),
  authors: [{ name: "Christopher Bu", url: "/about" }],
};

const drivers = [
  {
    n: "01",
    t: "Fibre grade",
    d: "4A, 5A and 6A are not marketing tiers — they are measured properties of the filament. Higher grade means fewer defects per unit length, which means more cocoons rejected at reeling and a higher cost per kilo of yarn. The price difference is real and it lands in the cloth: a 6A yarn dyes evenly on the first attempt, a lower grade often needs a second lot to fix banding.",
    direction: "Up with grade",
  },
  {
    n: "02",
    t: "Weight in momme",
    d: "More silk per square metre is more fibre per metre of cloth. Moving from 16 to 22 momme is roughly a third more material in the same yard. This is the most predictable driver on the page, provided both quotations measure momme on the same side of degumming.",
    direction: "Up with momme",
  },
  {
    n: "03",
    t: "Construction complexity",
    d: "A plain-weave habotai runs off a loom at speed. A jacquard runs slower because every pick is selected, and pattern development adds a separate cost before a metre is woven. Structured cloths that need tight sett and heavy reed pressure also raise the loom time per metre.",
    direction: "Up with complexity",
  },
  {
    n: "04",
    t: "Colour route",
    d: "Four routes with different economics. Greige is the cheapest because nothing is dyed. A standard shade card amortises the dye lot setup over many orders. A custom match adds a lab dip plus a dedicated dye lot. Yarn-dyed or jacquard colour introduces the colour before weaving. A custom match on a small quantity is where quotations diverge most.",
    direction: "Greige < card < custom",
  },
  {
    n: "05",
    t: "Quantity and width",
    d: "Setup costs — loom dressing, dye lot, lab dip, inspection — are spread across the run. A narrow width at the same momme costs more per running metre because there is less cloth in the metre. Both effects are non-linear: the step from 300 m to 1,000 m usually matters more than 1,000 m to 3,000 m.",
    direction: "Down with volume",
  },
  {
    n: "06",
    t: "Testing and documentation",
    d: "OEKO-TEX, GOTS, destination-market testing, inspection records and export documentation each carry a cost. They are also the first thing a quotation quietly drops when a price looks unusually low. If you need them, say so before quoting — not after.",
    direction: "Up with scope",
  },
];

const traps = [
  {
    t: "Momme measured on greige, quoted as finished",
    d: "The cloth is 22 momme before degumming and about 16–17 after. Both are true statements. Only one describes what you receive. This alone can explain a wide gap between two quotes for the same fabric name.",
  },
  {
    t: "A lower grade sold under the same construction name",
    d: "&ldquo;Dupioni&rdquo; describes a weave and a yarn source, not a grade. A 4A dupioni and a 6A dupioni are the same fabric name at different prices, and the difference shows up after dyeing, not on the swatch.",
  },
  {
    t: "A narrower width",
    d: "Quoting per metre without stating the width is the most common way to make a quote look competitive. 114 cm and 140 cm are not interchangeable when you are costing a marker — the narrower roll may need more metres for the same garment.",
  },
  {
    t: "Standard shade presented as custom",
    d: "Or the reverse: a custom match quoted at card price and then delivered as the nearest card shade. Ask which shade, and ask for the dip reference.",
  },
  {
    t: "Testing excluded",
    d: "A price that excludes OEKO-TEX or destination-market testing is not cheaper — it is a price for a different scope. Add the test cost back before comparing.",
  },
  {
    t: "Different trade term",
    d: "EXW, FCA and FOB prices are not comparable. The gap is the inland leg plus export clearance, and on silk it is not trivial. Always compare at the same Incoterm.",
  },
];

const comparison = [
  "Grade (4A / 5A / 6A) stated explicitly",
  "Momme, and whether measured on greige or finished cloth",
  "Momme tolerance band, not a single figure",
  "Width in centimetres",
  "Colour route: greige, shade card reference, or custom match",
  "Quantity the price applies to, and the break points above it",
  "Trade term (EXW / FCA / FOB and the named port)",
  "What testing is included, and who pays for it",
  "Lead time, and the date the clock starts",
  "Inspection scope and who attends",
  "Payment terms",
  "Validity period of the quotation",
];

const faqs: HubFaq[] = [
  {
    q: "How much does silk fabric cost per meter?",
    a: "There is no single answer, and any page that gives you one number is describing one specification. Silk ranges from greige utility cloth at the low end to custom-dyed, high-grade, heavy structured fabric at the top — a multiple apart, not a percentage. The honest way to price a project is to fix six variables first: grade, momme measured on finished cloth, construction, colour route, quantity and width. With those fixed, quotations from different suppliers become comparable. We quote per order for exactly this reason.",
  },
  {
    q: "Why is silk fabric so expensive?",
    a: "Because the raw material is labour-intensive to produce and the yield is low. A single cocoon yields one continuous filament of roughly 600 to 900 metres, and it takes several cocoons reeled together to make one 20/22 denier thread. On top of the fibre there is loom time, dyeing, finishing, inspection and the rejection rate at every stage. Weight compounds it: a 30 momme cloth uses nearly twice the silk of a 16 momme cloth of the same area.",
  },
  {
    q: "Why do two suppliers quote very different prices for the same silk?",
    a: "Almost always because one of the six variables is different and unstated — most often the momme basis (greige versus finished), the grade, the width, or whether testing is included. The fabric name is not a specification. Before assuming one supplier is cheaper, put both quotations side by side on the twelve points listed on this page; the gap usually explains itself.",
  },
  {
    q: "Is Chinese silk cheaper than Italian silk?",
    a: "They are different products in the same chain rather than two prices for one thing. China is the dominant origin for raw silk and greige; Italian mills are known for dyeing, finishing and quality grading, and much of the fibre they process is imported. A comparison only means something at the same specification and the same Incoterm — otherwise you are comparing a raw material price to a finished luxury fabric price.",
  },
  {
    q: "Does a bigger order always get a lower price?",
    a: "Usually, but with diminishing returns. Setup costs — loom dressing, dye lot, lab dip, inspection — are spread over the run, so the first increase in quantity produces the largest drop per metre. Beyond a point the saving flattens, and on custom colours a larger run can even add risk, because you are committing to more metres of a shade that has only been approved as a lab dip.",
  },
  {
    q: "How can I reduce cost without losing quality?",
    a: "Change the specification deliberately rather than hoping the price falls. Move to a standard shade card colour instead of a custom match. Take a slightly lighter momme where the garment allows it. Use a wider width so your marker wastes less. Consolidate several colours into one order to share the setup. For example, moving one lining style from a custom match to the nearest shade card colour removes the lab dip and the dedicated dye lot from the quotation entirely. What does not work is asking for the same specification at a lower price — the difference has to come from somewhere, and it usually comes from grade, weight or testing.",
  },
  {
    q: "Why do you not publish a price list?",
    a: "Because a published number would be true for one combination of grade, weight, width, colour and quantity and misleading for every other. Silk is quoted against a specification, and a price list would push buyers into comparing the wrong things. What we can do is quote quickly and state the basis clearly enough that our quotation can be checked against anyone else's.",
  },
];

const rfqTemplate = `End use / garment:        e.g. structured bridal bodice, AW collection
Construction:             e.g. dupioni (or "open to recommendation")
Grade:                    e.g. 5A minimum
Momme:                    e.g. 19 mm on finished cloth, tolerance +/-1
Width:                    e.g. 140 cm minimum
Colour:                   e.g. custom match to Pantone 19-1532 TCX, or shade card
Quantity:                 e.g. 600 m, with break points at 300 / 1,200 m
Testing required:         e.g. OEKO-TEX Class II, plus EU market requirements
Destination market:       e.g. EU
Trade term:               e.g. FCA Yizhou
Sample needed by:         date
Any deadline constraints: e.g. production must ship before a fixed date`;

export default function SilkFabricPriceGuidePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Price guide</span>
        </nav>

        <h1 className="font-display mt-6 text-4xl font-medium text-jade-deep md:text-5xl">
          What silk fabric costs per meter — and what actually moves the price
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
          Silk pricing is not a list; it is a function of six variables. Two
          suppliers can both quote &ldquo;dupioni&rdquo; at different prices and both be
          correct, because one is quoting 19 momme on finished cloth at 140 cm
          and the other is quoting 22 momme on greige at 114 cm with testing
          excluded. This page sets out the six drivers, the six ways a
          quotation misleads, and a twelve-point comparison that makes two
          quotes actually comparable.
        </p>

        
        <KeyTakeaways
          items={[
            "Six variables drive the number: grade, momme basis, construction, colour route, quantity and width. Fix them and two quotes become comparable.",
            "A momme figure measured on greige describes a heavier cloth than the same figure measured on finished fabric, so the basis belongs in the quotation.",
            "Grade is measured on the yarn under GB/T 1797-2008, which means a price quoted on grade is describing raw material rather than the cloth you cut.",
            "Delivery terms move costs rather than remove them: FOB leaves inland freight and insurance outside the number, and they arrive later as landed cost.",
            "This page publishes no unit prices, because a single number would be accurate for one specification and misleading for every other.",
          ]}
        />

        {/* 为什么不给数字 */}
        <section className="mt-14 border border-gold bg-ivory-deep p-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Why this page contains no prices
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink">
            A single headline number would be accurate for one specification and
            wrong for every other — and it would teach you to compare the wrong
            thing. Silk moves from greige utility cloth to custom-dyed, high-grade
            structured fabric by a <strong>multiple</strong>, not a percentage. So
            instead of a number, this page gives you the structure: fix the six
            variables, and any two quotations become directly comparable. We
            quote per order, and every quotation states its momme basis, grade,
            width and colour route so it can be checked.
          </p>
        </section>

        {/* 术语 */}
        <section className="mt-14 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Three terms that decide what a quote means
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            <strong>Grade</strong> is the quality classification of the raw silk
            yarn. It is set under GB/T 1797-2008 (
            <a
              href="https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7764FD3A7E05397BE0A0AB82A"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 hover:text-gold"
            >
              Standardization Administration of China
            </a>
            , 2008), and it is measured on the yarn rather than on the cloth.{" "}
            <strong>Momme basis</strong> is the point in processing at which the
            weight was taken, greige or finished. It is the single field most
            often missing from a quotation. <strong>Landed cost</strong> is what
            the cloth costs once freight, insurance, duty and inland handling are
            added, which is why two identical FOB numbers can land at different
            totals under different delivery terms (
            <a
              href="https://iccwbo.org/business-solutions/incoterms-rules/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 hover:text-gold"
            >
              International Chamber of Commerce
            </a>
            , 2020).
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            For example, a quote at 19 momme finished and a quote at 19 momme
            greige are not the same cloth. The second finishes lighter, so the
            cheaper number is buying less silk. The same logic applies upward.
            The raw material floor comes from a reeling district that produces
            for export at scale (
            <a
              href="http://www.hcyzq.gov.cn/zjyz/yzgk/t4682604.shtml"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 hover:text-gold"
            >
              Yizhou District Government
            </a>
            , 2023), and a price well below that floor is worth questioning
            rather than celebrating.
          </p>
        </section>

                <figure className="mt-8 max-w-3xl overflow-hidden border border-line">
          <img src="/products/greige-fabric.webp" alt="Greige silk fabric undyed straight from the loom" width="412" height="384" loading="lazy" decoding="async" className="mx-auto h-auto w-full max-w-sm object-cover" />
          <figcaption className="border-t border-line bg-ivory-deep px-4 py-3 text-xs text-ink-muted">
            Greige silk, the cheapest point on the colour-route scale: undyed, straight off the loom.
          </figcaption>
        </figure>

{/* 六个驱动因子 */}
        <section className="mt-16">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            The six drivers
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Each of these raises or lowers the price independently. Change two of
            them at once and the quotes stop being comparable — which is how
            most price confusion starts.
          </p>
          <div className="mt-8 space-y-5">
            {drivers.map((d) => (
              <div key={d.n} className="border border-line bg-ivory-deep p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-medium tracking-[0.18em] text-gold">
                      {d.n}
                    </span>
                    <h3 className="font-display text-xl font-medium text-jade-deep">
                      {d.t}
                    </h3>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-jade">
                    {d.direction}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {d.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 六个陷阱 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Six ways a quotation misleads without lying
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            None of these are dishonest claims. Each is a true statement about a
            different thing, which is harder to catch.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {traps.map((t) => (
              <div key={t.t} className="border border-line bg-ivory-deep p-7">
                <h3 className="font-display text-lg font-medium text-jade-deep">
                  {t.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {t.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 12 点比价 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Twelve points to compare before you compare price
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Put both quotations against this list. In most cases where one looks
            dramatically cheaper, at least one line differs — and once you know
            which, the decision is no longer about price.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="py-3 pr-4 font-medium text-jade-deep">Field</th>
                  <th scope="col" className="py-3 pr-4 font-medium text-jade-deep">What changes the number</th>
                  <th scope="col" className="py-3 font-medium text-jade-deep">What to ask for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-line">
                  <td className="py-3 pr-4 align-top">Grade</td>
                  <td className="py-3 pr-4 align-top">Yarn quality, not cloth quality</td>
                  <td className="py-3 align-top">The grade named in the quotation</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="py-3 pr-4 align-top">Momme</td>
                  <td className="py-3 pr-4 align-top">Greige or finished measurement</td>
                  <td className="py-3 align-top">Basis plus a tolerance band</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="py-3 pr-4 align-top">Width</td>
                  <td className="py-3 pr-4 align-top">Cuttable width, not loom width</td>
                  <td className="py-3 align-top">Centimetres after finishing</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 align-top">Colour route</td>
                  <td className="py-3 pr-4 align-top">Dye lot setup and lab dips</td>
                  <td className="py-3 align-top">Shade card reference or approved dip</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ol className="mt-8 grid gap-3 md:grid-cols-2">
            {comparison.map((c, i) => (
              <li
                key={c}
                className="flex items-start gap-3 border border-line bg-ivory px-4 py-3"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-jade-deep text-[11px] font-medium text-white">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-ink-soft">
                  {c}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* 便宜的代价 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Where the saving comes from
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              When a quotation comes in well below others for a nominally
              identical fabric, the difference has to exist somewhere in the
              physical product. In practice it is one of four places: a lower
              grade, a lighter momme (often measured on greige), a narrower
              width, or reduced testing. Grade is the one worth checking first,
              because it is measured on the yarn against a published scale (
              <a
                href="https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7764FD3A7E05397BE0A0AB82A"
                rel="noopener noreferrer"
                target="_blank"
                className="underline underline-offset-2 hover:text-gold"
              >
                Standardization Administration of China
              </a>
              , 2008), and a downgrade is invisible in a swatch of the same
              weight and colour.
            </p>
            <p>
              None of those is automatically wrong — a lighter cloth at a
              narrower width may be exactly right for a lining programme. The
              problem is only when the saving is invisible, because then it is
              discovered in the cutting room or after dyeing, when the cost of
              discovery is much higher than the saving.
            </p>
          </div>
        </section>

        {/* RFQ 模板 */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            An RFQ template that gets comparable quotes
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Copy this into an email and fill in what you know. Rows you cannot
            answer are useful too — they tell the supplier where to advise rather
            than guess.
          </p>
          <pre className="mt-8 overflow-x-auto border border-line bg-ivory-deep p-6 text-xs leading-relaxed text-ink-soft md:text-sm">
            <code>{rfqTemplate}</code>
          </pre>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
            Send it to{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-gold hover:text-jade"
            >
              {siteConfig.email}
            </a>{" "}
            and you will get a specification response before a price — because
            the specification is what the price depends on.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-3xl font-medium text-jade-deep">
            Price questions buyers actually ask
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
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                href: "/silk-momme-guide",
                t: "The momme guide",
                d: "The weight variable, and why the greige figure overstates it.",
              },
              {
                href: "/silk-fabrics",
                t: "Silk fabric types",
                d: "The construction variable — 22 weaves and what each one costs you in loom time.",
              },
              {
                href: "/wholesale-silk-fabric",
                t: "Wholesale silk fabric",
                d: "How the order runs once the specification is fixed.",
              },
              {
                href: "/blog/what-a-raw-silk-quotation-must-include",
                t: "What a quotation must include",
                d: "The same discipline applied to raw silk yarn.",
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
            Send the specification, get the number
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            Fix the six variables and we will quote them — with the momme basis,
            width, grade and colour route written into the quotation. If you
            only know the garment, send that instead and we will propose the
            rest.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-gold-soft px-7 py-3 text-sm font-medium text-jade-ink transition-opacity hover:opacity-90"
            >
              Request a quotation
            </Link>
            <Link
              href="/samples"
              className="border border-white/40 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Request free samples
            </Link>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd([
                { name: "Home", path: "" },
                { name: "Price guide", path: "/silk-fabric-price-guide" },
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <SourcesBlock
          sources={sources}
          methodology="Methodology: this page publishes no unit prices. Silk is quoted against a specification. A number without grade, momme basis, width, colour route and quantity would be accurate for one combination and misleading for every other. The grade scale follows GB/T 1797-2008, which classifies the yarn rather than the cloth. Delivery terms follow the ICC's published Incoterms rules, because those decide which costs sit inside a quoted figure. The six drivers and the twelve comparison points come from quotations the atelier has reviewed, stated as structure rather than as a price list. Every figure that would depend on a specific mill or season is confirmed on the quotation instead."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              articleJsonLd({
                path: "/silk-fabric-price-guide",
                headline:
                  "Silk fabric price per meter: what moves it, and how to compare quotes",
                description:
                  "Six variables drive silk pricing: grade, momme basis, construction, colour route, quantity and width. Twelve-point comparison and an RFQ template.",
                image: "/products/satin.webp",
                datePublished: HUB_UPDATED,
              }),
            ),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
