import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出：生成纯静态文件，可直接部署到 GitHub Pages
  output: "export",
  // 项目页部署在 /christopherbu-silk/ 子路径下（绑定自定义域名后可移除）
  basePath: "/christopherbu-silk",
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
