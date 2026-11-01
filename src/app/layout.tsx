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
  themeColor: "#1d3a2f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Christopher Bu × Yizhou Silk | Raw Silk, Greige & Douppioni B2B Supplier",
    template: "%s | Christopher Bu × Yizhou Silk",
  },
  description: siteConfig.tagline,
  keywords: [
    "raw silk supplier",
    "mulberry silk yarn",
    "greige silk fabric",
    "douppioni silk",
    "Yizhou silk",
    "filature silk",
    "silk fabric B2B",
    "China silk export",
    "20/22 denier silk",
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
