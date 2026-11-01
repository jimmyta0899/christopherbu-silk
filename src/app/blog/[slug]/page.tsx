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

        <div className="mt-12 space-y-10">
          {post.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl font-medium text-jade-deep">
                {s.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </section>
          ))}
        </div>

        {/* 内链 CTA */}
        <div className="mt-14 border-t border-line pt-8">
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
