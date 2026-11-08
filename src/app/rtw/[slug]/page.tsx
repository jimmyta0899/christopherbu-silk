import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRtwSeason, rtwSeasons, bigImageFor } from "@/lib/rtw";
import { rtwDimensions } from "@/lib/rtw-dimensions";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";
import { SeasonViewer } from "./SeasonViewer";

const toWebp = (p: string) => p.replace(/\.(jpe?g)$/i, ".webp");

// 服务端按当前赛季裁剪尺寸清单与大图映射，避免 2423 条整包 manifest 进入客户端 JS。
function buildSeasonPayload(season: NonNullable<ReturnType<typeof getRtwSeason>>) {
  const dims: Record<string, [number, number]> = {};
  const bigMap: Record<string, string> = {};
  for (const img of season.images) {
    const thumb = `/rtw/${season.folder}/${toWebp(img)}`;
    if (rtwDimensions[thumb]) dims[thumb] = rtwDimensions[thumb];
    const big = `/rtw/${season.folder}/${toWebp(bigImageFor(img, season.folder))}`;
    if (rtwDimensions[big]) dims[big] = rtwDimensions[big];
    bigMap[thumb] = big;
  }
  const idx = rtwSeasons.findIndex((s) => s.slug === season.slug);
  const prev =
    idx > 0 ? { slug: rtwSeasons[idx - 1].slug, name: rtwSeasons[idx - 1].name } : null;
  const next =
    idx >= 0 && idx < rtwSeasons.length - 1
      ? { slug: rtwSeasons[idx + 1].slug, name: rtwSeasons[idx + 1].name }
      : null;
  return { dims, bigMap, prev, next };
}

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rtwSeasons.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const season = getRtwSeason(slug);
  if (!season) return {};
  // 布局的 titleTemplate 已追加 "| Christopher Bu"，这里不能再带品牌名，
  // 否则出现 "… | Christopher Bu | Christopher Bu"。联名赛季名里的
  // "× Christopher Bu" 一并去掉，只留联名方与年份。
  const seasonLabel = season.name
    .replace(/×\s*Christopher Bu\s*/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  return {
    title: `${seasonLabel} Ready-to-Wear — Runway Archive`,
    description: `The complete ${seasonLabel} ready-to-wear collection, from the couture house behind Fan Bingbing's red-carpet looks. ${season.count} runway looks.`,
    alternates: { canonical: `/rtw/${season.slug}` },
    openGraph: pageOpenGraph(`/rtw/${season.slug}`),
  };
}

export default async function RtwSeasonPage({ params }: Props) {
  const { slug } = await params;
  const season = getRtwSeason(slug);
  if (!season) notFound();

  const { dims, bigMap, prev, next } = buildSeasonPayload(season);

  // 这 25 个系列页此前没有任何结构化数据——它们是最强的「高定屋 + 红毯」
  // 证据链，值得让 Google 明确读到层级与合辑身份。
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ready-to-wear archive",
        item: `${siteConfig.url}/rtw/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: season.name,
        item: `${siteConfig.url}/rtw/${season.slug}/`,
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Christopher Bu ${season.name} Ready-to-Wear Collection`,
    url: `${siteConfig.url}/rtw/${season.slug}/`,
    description: `The complete Christopher Bu ${season.name} ready-to-wear collection, ${season.count} runway looks.`,
    about: { "@type": "Brand", name: siteConfig.name },
    isPartOf: {
      "@type": "CollectionPage",
      name: "Christopher Bu runway archive",
      url: `${siteConfig.url}/rtw/`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <SeasonViewer season={season} dims={dims} bigMap={bigMap} prev={prev} next={next} />
    </>
  );
}
