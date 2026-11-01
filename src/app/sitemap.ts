import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes = [
    "",
    "/products",
    "/samples",
    "/trade-terms",
    "/about",
    "/sustainability",
    "/contact",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p.featured ? 0.9 : 0.5,
  }));

  return [...staticRoutes, ...productRoutes];
}
