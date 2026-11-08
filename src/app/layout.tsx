import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { pageOpenGraph, pageTwitter } from "@/lib/seo-metadata";
import Analytics from "@/components/Analytics";
import { buildOrganizationSchema } from "@/lib/organization-schema";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-inter", // 复用变量名，避免大量改动
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2c5a45",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Christopher Bu | Raw Silk & Fabrics from Yizhou — Couture House Behind Red-Carpet Silk Gowns",
    template: "%s | Christopher Bu",
  },
  description: siteConfig.tagline,
  keywords: [
    "raw silk supplier",
    "mulberry silk yarn",
    "greige silk fabric",
    "dupioni silk",
    "douppioni silk",
    "satin silk fabric",
    "jacquard silk fabric",
    "organic silk",
    "GOTS certified silk",
    "georgette silk",
    "habotai silk",
    "habutai silk",
    "pongee silk",
    "china silk fabric",
    "silk charmeuse",
    "satin charmeuse",
    "crepe-back satin",
    "douppioni silk",
    "doupion silk",
    "stretch silk fabric",
    "silk spandex satin",
    "silk cotton blend",
    "silk linen blend",
    "Yizhou silk",
    "filature silk",
    "silk fabric B2B",
    "China silk export",
    "20/22 denier silk",
    "Christopher Bu silk fabric supplier",
    "Yizhou silk fabric export",
    "Yizhou mulberry silk supplier",
    "silk fabric export China",
    "silk fabric wholesale China",
    "Yizhou silk supply chain B2B",
    "traceable mulberry silk supplier",
  ],
  // Open Graph / Twitter Card 基础设置。
  // 这里刻意不写死 title / description：Next.js 会自动取各页自身的 title / description，
  // 写死会让全站分享卡片都显示首页标题。各页的 url / type 由 pageOpenGraph 输出，
  // 该函数会一并带上完整的图片与站点字段（openGraph 在子页是整体替换，不能只给 url）。
  openGraph: pageOpenGraph("/"),
  twitter: pageTwitter(),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:bg-jade-deep focus:px-4 focus:py-2 focus:text-sm focus:text-ivory focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gold"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildOrganizationSchema()),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
