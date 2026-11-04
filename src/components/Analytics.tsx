import Script from "next/script";

/**
 * Google Analytics 4 轻量接入。
 * 通过环境变量 NEXT_PUBLIC_GA_ID 注入测量 ID（形如 G-XXXXXXXXXX）。
 * 未配置时组件不渲染任何内容，避免影响本地开发与首屏性能。
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
