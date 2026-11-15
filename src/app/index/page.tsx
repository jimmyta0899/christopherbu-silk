import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnswerBlock } from "@/components/AnswerBlock";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog";

const UPDATED = "2026-11-15";

/**
 * /index/ 是旧站遗留的多语言入口地址（/index/?language=en）。
 * 该 URL 在 Google Search Console 里被记为 "Redirect error"，原因是：
 * 裸域 christopherbu.com/index/ 301 到 www 版之后，目标路径不存在，返回 404。
 * GitHub Pages 是纯静态托管，发不出 301 规则，所以唯一可行的修法是
 * 让目标路径本身返回 200。本页即是该 200 落点。
 *
 * 本页定位是站点目录（utility page），不参与排名，故 noindex + follow：
 * 清除 redirect error，同时把全站页面变成可爬取的内链枢纽。
 */
export const metadata: Metadata = {
  title: "Site Index: Every Page on christopherbu.com",
  description:
    "A single index of every page published on christopherbu.com: the silk fabrics and yarns we supply, the weight guides, the calculators, the articles and the company pages.",
  alternates: { canonical: "/index" },
  robots: { index: false, follow: true },
  openGraph: pageOpenGraph("/index"),
};

const guideLinks: { href: string; label: string; note: string }[] = [
  {
    href: "/silk-fabrics",
    label: "Silk fabrics",
    note: "The nine fabrics we weave and trade, with the construction behind each name.",
  },
  {
    href: "/silk-momme-guide",
    label: "Momme guide",
    note: "What momme measures, and why a greige figure and a finished figure differ.",
  },
  {
    href: "/silk-fabric-price-guide",
    label: "Fabric price guide",
    note: "How a per metre quote is built, and which variables move it.",
  },
  {
    href: "/raw-silk-specs",
    label: "Raw silk specifications",
    note: "Denier, grade, evenness, cleanness and the tests behind each figure.",
  },
  {
    href: "/yizhou-raw-silk",
    label: "Yizhou raw silk",
    note: "Where our yarn is reeled, and what that origin means for a lot.",
  },
  {
    href: "/trade-terms",
    label: "Trade terms",
    note: "Minimums, lead times, incoterms and the documents that travel with a shipment.",
  },
  {
    href: "/wholesale-silk-fabric",
    label: "Wholesale silk fabric",
    note: "How a bulk order is quoted and scheduled.",
  },
];

const toolLinks: { href: string; label: string; note: string }[] = [
  {
    href: "/tools/momme-gsm-oz-converter",
    label: "Momme, g/m² and oz/yd² converter",
    note: "Converts between the three weight units buyers quote in.",
  },
  {
    href: "/tools/silk-yarn-count-converter",
    label: "Silk yarn count converter",
    note: "Denier, tex, decitex and Nm, with the constants each uses.",
  },
  {
    href: "/tools/silk-order-weight-calculator",
    label: "Order weight calculator",
    note: "Turns metres, width and momme into the kilograms a shipment is charged on.",
  },
  {
    href: "/tools/silk-spec-comparison",
    label: "Specification comparison",
    note: "Puts two fabrics side by side on weight, width and construction.",
  },
];

const companyLinks: { href: string; label: string; note: string }[] = [
  { href: "/about", label: "About", note: "The mill, the region and who you deal with." },
  { href: "/services", label: "Services", note: "What we do beyond supplying cloth." },
  { href: "/couture", label: "Couture", note: "The atelier side of the house." },
  { href: "/rtw", label: "Ready to wear", note: "Season archive." },
  { href: "/certificates", label: "Certificates", note: "Standards, test methods and certification." },
  { href: "/sustainability", label: "Sustainability", note: "What is verified and what is not." },
  { href: "/samples", label: "Samples", note: "How a swatch or a lab dip is sent." },
  { href: "/faq", label: "FAQ", note: "The questions buyers ask before a first order." },
  { href: "/contact", label: "Contact", note: "Enquiry form and direct addresses." },
];

function LinkList({
  items,
  columns = 2,
}: {
  items: { href: string; label: string; note: string }[];
  columns?: 1 | 2 | 3;
}) {
  return (
    <ul
      className={`mt-5 grid gap-x-8 gap-y-4 ${
        columns === 1 ? "" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
      }`}
    >
      {items.map((item) => (
        <li key={item.href} className="border-l border-jade-deep/15 pl-4">
          <Link
            href={item.href}
            className="font-medium text-jade-deep underline underline-offset-2 hover:text-gold"
          >
            {item.label}
          </Link>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.note}</p>
        </li>
      ))}
    </ul>
  );
}

export default function SiteIndex() {
  const sortedPosts = [...blogPosts].sort((a, b) =>
    a.publishDate < b.publishDate ? 1 : -1
  );

  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Site index</span>
        </nav>

        <h1 className="font-display mt-6 text-4xl font-medium text-jade-deep md:text-5xl">
          Every page on this site, in one place
        </h1>

        <p className="mt-4 text-sm text-ink-muted">Last checked {UPDATED}</p>

        <AnswerBlock
          answer="This page indexes everything published on christopherbu.com: the silk fabrics and yarns we supply, the silk weights, the buying guides, four calculators, the articles, and the company pages. It also serves the /index/ address carried over from the previous version of the site, so an old link that points there now lands on a live page instead of an error."
          label="What this page is"
          updated={UPDATED}
        />

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-ink-soft">
          If you arrived from a link that ended in{" "}
          <code className="bg-ivory-deep px-1 py-0.5 text-sm">/index/</code>, the
          address is from the earlier version of this site and is still in use.
          Nothing has to be looked up elsewhere: the sections below list every
          URL we publish, grouped the way a buyer works through them, from the
          fabric itself to the paperwork behind it.
        </p>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Fabrics and yarns
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            Everything in this group is supplied from local mills in our own
            region, in greige, undyed or dyed to order. The{" "}
            <Link href="/products" className="underline underline-offset-2 hover:text-gold">
              product index
            </Link>{" "}
            carries the full specification table for each one.
          </p>
          <LinkList
            columns={3}
            items={products.map((p) => ({
              href: `/products/${p.slug}`,
              label: p.name,
              note: p.category
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" "),
            }))}
          />
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Silk by weight
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            One page per weight in regular supply, each holding the weaves that
            reach it, the weight of a running metre at 114 and 140 cm, and the
            buying decision it settles. The{" "}
            <Link href="/silk-weight" className="underline underline-offset-2 hover:text-gold">
              weight ladder
            </Link>{" "}
            is the entry point.
          </p>
          <LinkList
            columns={3}
            items={[
              { href: "/silk-weight/6-momme", label: "6 momme silk", note: "The lightest cloth we weave." },
              { href: "/silk-weight/16-momme", label: "16 momme silk", note: "Dress and blouse weight." },
              { href: "/silk-weight/19-momme", label: "19 momme silk", note: "The standard bedding weight." },
              { href: "/silk-weight/22-momme", label: "22 momme silk", note: "Heavier bedding and outerwear." },
              { href: "/silk-weight/30-momme", label: "30 momme silk", note: "Upholstery and structured pieces." },
            ]}
          />
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-medium text-jade-deep">Guides</h2>
          <LinkList items={guideLinks} />
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Calculators
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            Four tools that do the arithmetic a quotation needs. They run in the
            browser and use the published constants: 1 momme = 4.340 g/m²,
            1 oz/yd² = 33.906 g/m², tex = denier / 9, Nm = 1000 / tex.
          </p>
          <LinkList items={toolLinks} />
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Articles
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            {sortedPosts.length} articles on sourcing, weight, price and
            paperwork, newest first. The{" "}
            <Link href="/blog" className="underline underline-offset-2 hover:text-gold">
              article index
            </Link>{" "}
            has the same list with excerpts.
          </p>
          <ul className="mt-5 grid gap-x-8 gap-y-3 md:grid-cols-2">
            {sortedPosts.map((post) => (
              <li key={post.slug} className="border-l border-jade-deep/15 pl-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-jade-deep underline underline-offset-2 hover:text-gold"
                >
                  {post.title}
                </Link>
                <span className="ml-2 text-xs text-ink-muted">{post.publishDate}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            The company
          </h2>
          <LinkList items={companyLinks} columns={3} />
        </section>

        <section className="mt-14 border border-gold bg-ivory-deep p-6 md:p-8">
          <h2 className="font-display text-xl font-medium text-jade-deep">
            Did a link land you somewhere broken?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            The address will still be in a search result or an old email now and
            then. Write to us with the URL you followed and we will put a working
            page behind it rather than leave it pointing at nothing.
          </p>
          <p className="mt-4">
            <Link
              href="/contact"
              className="inline-block border border-jade-deep/20 px-4 py-2 text-sm text-jade-deep transition hover:border-gold hover:text-gold"
            >
              Tell us which link failed
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
