import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo-metadata";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog — Sourcing Silk from Yizhou",
  description:
    "Practical guides on sourcing mulberry silk from Yizhou, China: lead times, MOQs, export terms, silk specs and the couture jacquard process.",
  alternates: { canonical: "/blog" },
  openGraph: pageOpenGraph("/blog"),
};

export default function BlogPage() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The sourcing journal",
    url: `${siteConfig.url}/blog`,
    publisher: { "@type": "Organization", name: siteConfig.name },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.publishDate,
    })),
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <h1 className="font-display text-4xl font-medium text-jade-deep md:text-5xl">
          The sourcing journal
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          What our buyers need to know about mulberry silk — lead times, specs, export terms and the craft behind it.
        </p>

        <div className="mt-14 space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-6 border border-line bg-ivory-deep p-6 transition-colors hover:border-jade sm:flex-row sm:items-stretch"
            >
              {/* 预览图 */}
              {post.coverImage && (
                <div className="shrink-0 overflow-hidden sm:w-56">
                  <img
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-full"
                  />
                </div>
              )}
              {/* 文字内容 */}
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full border border-gold/40 px-3 py-1 font-medium text-gold">
                    {post.type}
                  </span>
                  <span className="text-ink-muted">{post.publishDate}</span>
                </div>
                <h2 className="font-display mt-4 text-2xl font-medium text-jade-deep group-hover:text-jade">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {post.metaDescription}
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-gold transition-transform group-hover:translate-x-1">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
