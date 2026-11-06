import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProduct, products } from "@/lib/products";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.metaDescription,
    keywords: product.keywords,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: pageOpenGraph(`/products/${product.slug}`),
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.metaDescription,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      priceCurrency: "USD",
      url: `${siteConfig.url}/products/${product.slug}`,
    },
  };

  // FAQ 引用（GEO 关键：让 LLM 抓取结构化问答）
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // 面包屑
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteConfig.url}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${siteConfig.url}/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* 面包屑 */}
        <nav className="text-sm text-ink-muted">
          <Link href="/" className="hover:text-jade">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-jade">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">{product.name}</span>
        </nav>

        {/* 标题 */}
        <div className="mt-8">
          <h1 className="font-display text-4xl font-medium text-jade-deep md:text-5xl">
            {product.h1}
          </h1>
          <p className="mt-2 text-sm font-medium text-gold">
            {product.featured ? "Core supply" : "On request"}
          </p>
          {/* GEO 答案前置 */}
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            {product.introAnswer}
          </p>
        </div>

        {/* 产品图（长尾词 alt） */}
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div className="overflow-hidden border border-line">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* 正文：长尾词自然融入 */}
          <div className="space-y-5">
            {product.body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* 生丝纱线三分类（仅 raw-silk 等有 yarnVariants 的产品） */}
        {product.yarnVariants && product.yarnVariants.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-medium text-jade-deep">
              Three varieties of raw silk yarn
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
              We stock three varieties of raw silk yarn from a single Yizhou
              source, so you can specify the exact yarn your production needs.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {product.yarnVariants.map((v) => (
                <div
                  key={v.key}
                  className="flex flex-col overflow-hidden border border-line"
                >
                  <div className="overflow-hidden border-b border-line">
                    <img
                      src={v.image}
                      alt={v.imageAlt}
                      className="h-44 w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-semibold text-jade-deep">
                      {v.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {v.description}
                    </p>
                    <dl className="mt-4 border-t border-line pt-3 text-sm">
                      {v.specs.map((s) => (
                        <div
                          key={s.label}
                          className="flex justify-between gap-3 py-1"
                        >
                          <dt className="text-ink-muted">{s.label}</dt>
                          <dd className="text-right text-ink">{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 规格表 */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Specifications
          </h2>
          <div className="mt-5 overflow-hidden border border-line">
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"}
                  >
                    <th className="w-1/3 px-5 py-3.5 text-left font-medium text-ink-soft">
                      {spec.label}
                    </th>
                    <td className="px-5 py-3.5 text-ink">{spec.value}</td>
                  </tr>
                ))}
                <tr
                  className={
                    product.specs.length % 2 === 0 ? "bg-ivory-deep" : "bg-ivory"
                  }
                >
                  <th className="w-1/3 px-5 py-3.5 text-left font-medium text-ink-soft">
                    Other specifications
                  </th>
                  <td className="px-5 py-3.5 text-ink">
                    Can be offered on request
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            Specifications are industry-standard values and are confirmed
            against current mill availability before quotation.
          </p>
        </section>

        {/* 生丝参数化规格页入口：仅 raw-silk 产品页显示，避免全品类误链 */}
        {slug === "raw-silk" && (
          <section className="mt-10 border-l-2 border-jade pl-5">
            <h2 className="font-display text-xl font-medium text-jade-deep">
              20/22D spec sheet: HS 5002, 5A/6A, packing &amp; export terms
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
              Need the full buyer specification sheet? It brings together denier
              ranges, 5A/6A grades, HS heading 5002, 60 kg bale packing, MOQ,
              FOB/FCA terms and T/T payment in one structured page.
            </p>
            <Link
              href="/raw-silk-specs"
              className="mt-3 inline-block text-sm font-medium text-jade hover:underline"
            >
              View the raw silk yarn specification sheet →
            </Link>
          </section>
        )}

        {/* 应用场景 */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Applications
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {product.useCases.map((u) => (
              <li
                key={u}
                className="rounded-full border border-line px-4 py-2 text-sm text-ink-soft"
              >
                {u}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Frequently asked questions
          </h2>
          <div className="mt-5 space-y-4">
            {product.faq.map((f) => (
              <div key={f.q} className="border border-line p-6">
                <h3 className="text-base font-semibold text-jade-deep">
                  {f.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 border-t border-line pt-10">
          <h2 className="font-display text-2xl font-medium text-jade-deep">
            Request a quotation
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
            Tell us your denier or momme, target volume, deadline and
            destination. Our B2B team will respond with a tailored quotation and
            available certification.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/samples"
              className="rounded-full bg-jade px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-jade-deep"
            >
              Request Sample
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-jade px-7 py-3.5 text-sm font-medium text-jade transition-colors hover:bg-jade hover:text-ivory"
            >
              Contact B2B Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
