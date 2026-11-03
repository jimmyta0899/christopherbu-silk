import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

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
      "Christopher Bu × Yizhou Silk | Raw Silk, Greige, Dupioni, Satin & Jacquard B2B Supplier",
    template: "%s | Christopher Bu × Yizhou Silk",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Christopher Bu × Yizhou Silk — Raw Silk & Greige B2B Supplier",
    description: siteConfig.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Bu × Yizhou Silk — Raw Silk & Greige B2B Supplier",
    description: siteConfig.tagline,
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
