import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出：生成纯静态文件，可直接部署到 GitHub Pages
  output: "export",
  // 已绑定自定义域名 www.christopherbu.com，部署在站点根路径
  basePath: "",
  // 图片等资源使用相对路径，避免子路径问题
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
