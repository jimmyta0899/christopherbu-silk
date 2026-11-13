import type { Metadata } from "next";
import { rtwSeasons } from "@/lib/rtw";
import { siteConfig } from "@/lib/site-config";

/**
 * 旧站遗留 URL 的迁移承接页。
 *
 * 背景：2026-11 重建前的旧站把季别档案放在根路径（/SS15/、/PF18/ …），
 * 新站改到 /rtw/{slug}/。GSC 实测仍有 7 条旧路径在被抓取并返回 404
 * （Crawled - currently not indexed，最后抓取 2026-08 ~ 10），
 * 这些路径可能带着旧站的对外链接，直接 404 会把权重丢掉。
 *
 * GitHub Pages 是纯静态托管，没有服务端 301 能力，所以用
 * 「0 秒 meta refresh + 指向新地址的 canonical」承接：
 *   - 0 秒 refresh Google 按跳转处理；
 *   - canonical 保证任何残余索引都归并到新地址；
 *   - 不加 noindex（和 canonical 冲突），本页也不会独立参与排名。
 *
 * 只为 rtwSeasons 里真实存在的 25 个 slug 生成，其余单段路径照旧 404
 * （dynamicParams = false）。
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return rtwSeasons.map((s) => ({ season: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ season: string }>;
}): Promise<Metadata> {
  const { season } = await params;
  const slug = season.toUpperCase();
  const target = `${siteConfig.url}/rtw/${slug}/`;
  return {
    title: `Archive moved — ${slug}`,
    description: `The ${slug} silhouette archive now lives at ${target}`,
    alternates: { canonical: target },
  };
}

export default async function LegacySeasonRedirect({
  params,
}: {
  params: Promise<{ season: string }>;
}) {
  const { season } = await params;
  const slug = season.toUpperCase();
  const href = `/rtw/${slug}/`;

  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[70dvh] max-w-2xl flex-col items-center justify-center px-6 text-center"
    >
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <p className="font-display text-2xl font-medium text-jade-deep md:text-3xl">
        The {slug} archive has moved
      </p>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
        This address was used before our 2026 rebuild. The {slug} silhouette
        archive now lives at{" "}
        <a href={href} className="underline underline-offset-2 hover:text-gold">
          {href}
        </a>
        .
      </p>
      <a
        href={href}
        className="mt-7 rounded-full bg-jade px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-jade-deep"
      >
        Continue to the {slug} archive
      </a>
    </main>
  );
}
