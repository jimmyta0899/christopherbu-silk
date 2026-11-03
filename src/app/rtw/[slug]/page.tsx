import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRtwSeason, rtwSeasons } from "@/lib/rtw";
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
  return {
    title: `Christopher Bu ${season.name} — Ready-to-Wear Collection | Runway Archive`,
    description: `The complete Christopher Bu ${season.name} ready-to-wear collection, from the couture house behind Fan Bingbing's red-carpet looks. ${season.count} runway looks.`,
    alternates: { canonical: `/rtw/${season.slug}` },
  };
}

export default async function RtwSeasonPage({ params }: Props) {
  const { slug } = await params;
  const season = getRtwSeason(slug);
  if (!season) notFound();

  return <SeasonViewer season={season} />;
}
