import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts, getPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

// 渲染 body 里的 **加粗** 标记（实体定义）与 [n] 引用序号上标，过滤内部注释标记
function renderInline(text: string) {
  const cleaned = text
    .replace(/<!--.*?-->/g, "")
    .replace(/\[(?:ORIGINAL DATA|UNIQUE INSIGHT|PERSONAL EXPERIENCE)\]/gi, "");
  // 先把 [n] 引用序号占位，避免与 ** 分割冲突
  const parts = cleaned.split(/(\*\*[^*]+\*\*|\[\d+\])/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (/^\[\d+\]$/.test(part)) {
      return (
        <sup key={i} className="text-gold">
          {part.slice(1, -1)}
        </sup>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 面包屑 */}
        <nav className="text-sm text-ink-muted">
          <Link href="/" className="hover:text-jade">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-jade">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-soft">{post.type}</span>
        </nav>

        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full border border-gold/40 px-3 py-1 font-medium text-gold">
              {post.type}
            </span>
            <span className="text-ink-muted">{post.publishDate}</span>
          </div>
          <h1 className="font-display mt-4 text-4xl font-medium text-jade-deep md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            {post.intro}
          </p>
        </div>

        {/* 摘要框（Key Takeaways） */}
        {post.takeaways && post.takeaways.length > 0 && (
          <aside className="mt-10 rounded-lg border border-gold/30 bg-ivory-deep p-6">
            <h2 className="font-display text-sm font-medium uppercase tracking-wide text-jade-deep">
              Key takeaways
            </h2>
            <ul className="mt-4 space-y-2.5">
              {post.takeaways.map((t) => (
                <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-0.5 text-gold">›</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <div className="mt-12 space-y-12">
          {post.sections.map((s) => (
            <section key={s.heading}>
              {s.level === 3 ? (
                <h3 className="font-display border-t border-line pt-8 text-xl font-medium text-jade-deep">
                  {s.heading}
                </h3>
              ) : (
                <h2 className="font-display text-2xl font-medium text-jade-deep">
                  {s.heading}
                </h2>
              )}
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {renderInline(s.body)}
              </p>

              {/* 对比表格（含 thead，利于 AI 提取） */}
              {s.table && (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        {s.table.headers.map((h) => (
                          <th
                            key={h}
                            className="border border-line bg-ivory-deep px-4 py-2.5 text-left font-medium text-jade-deep"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className="border border-line px-4 py-2.5 text-ink-soft"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {s.table.caption && (
                    <p className="mt-2 text-xs text-ink-muted">{s.table.caption}</p>
                  )}
                </div>
              )}

              {/* 上下文内链 */}
              {s.links && s.links.length > 0 && (
                <p className="mt-4 text-sm text-ink-muted">
                  Related:{" "}
                  {s.links.map((l, i) => (
                    <span key={l.href}>
                      {i > 0 && " · "}
                      <Link
                        href={l.href}
                        className="font-medium text-gold transition-colors hover:text-jade"
                      >
                        {l.text}
                      </Link>
                    </span>
                  ))}
                </p>
              )}

              {/* 图文穿插：这一步紧跟它的配图 */}
              {(s.image || s.secondImage || s.thirdImage || s.fourthImage) && (
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {[s.image, s.secondImage, s.thirdImage, s.fourthImage]
                    .filter((img): img is NonNullable<typeof img> => Boolean(img))
                    .map((img) => (
                      <figure key={img.src} className="overflow-hidden border border-line">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="h-auto w-full object-cover"
                        />
                        <figcaption className="border-t border-line bg-ivory-deep px-4 py-3 text-xs text-ink-muted">
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* 来源清单：序号与正文 [n] 上标一一对应 */}
        {post.references && post.references.length > 0 && (
          <section className="mt-14 border-t border-line pt-8">
            <h2 className="font-display text-sm font-medium uppercase tracking-wide text-jade-deep">
              Sources
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-ink-muted">
              Each bracketed number in the text points to the source below that backs it.
            </p>
            <ol className="mt-5 space-y-4">
              {post.references.map((r, i) => (
                <li key={r.title} className="flex gap-3 text-xs leading-relaxed">
                  <span className="mt-0.5 shrink-0 font-mono text-jade-deep">[{i + 1}]</span>
                  <div>
                    <p className="text-ink-soft">
                      <span className="font-medium text-jade-deep">{r.publisher}</span>
                      {" — "}
                      <span className="italic">{r.title}</span>
                      {` (${r.year})`}
                      {r.url && (
                        <>
                          {" "}
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="text-gold underline decoration-gold/40 underline-offset-2 hover:text-jade"
                          >
                            open
                          </a>
                        </>
                      )}
                    </p>
                    <p className="mt-1 text-ink-muted">{r.supports}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* 内链 CTA */}
        <div className="mt-14 border-t border-line pt-8">
          {post.methodology && (
            <p className="mb-6 text-xs leading-relaxed text-ink-muted">
              {post.methodology}
            </p>
          )}
          {post.sourceUrl && (
            <p className="mb-6 text-sm text-ink-muted">
              Source:{" "}
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold underline decoration-gold/40 underline-offset-2 hover:text-jade"
              >
                {post.sourceLabel ?? post.sourceUrl}
              </a>
            </p>
          )}
          <p className="text-sm text-ink-muted">
            Related:{" "}
            <Link
              href={post.linkTo}
              className="font-medium text-gold transition-colors hover:text-jade"
            >
              {post.anchorTexts[0]} →
            </Link>
          </p>
          <Link
            href="/samples"
            className="mt-6 inline-block rounded-full bg-jade px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-jade-deep"
          >
            Request a $25 swatch book
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
