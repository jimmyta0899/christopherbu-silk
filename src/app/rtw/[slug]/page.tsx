import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRtwSeason, rtwSeasons } from "@/lib/rtw";
import { pageOpenGraph } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";
import { SeasonViewer } from "./SeasonViewer";

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
      <SeasonViewer season={season} />
    </>
  );
}
