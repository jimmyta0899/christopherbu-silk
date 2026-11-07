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
      {/* 外部 GTM 放到 window.load 之后。内联桩先就位，事件会入 dataLayer，
          等 GTM 到达后统一处理，因此留资事件不会因为延迟加载而丢失。 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
      <Script id="ga4-lead-events" strategy="afterInteractive">
        {`
          (function () {
            function fire(source) {
              if (typeof window.gtag !== 'function') return;
              window.gtag('event', 'generate_lead', {
                lead_source: source,
                page_path: window.location.pathname
              });
            }
            document.addEventListener('submit', function (e) {
              var f = e.target;
              if (!f || !f.getAttribute) return;
              var s = f.getAttribute('data-lead');
              if (s) fire(s);
            }, true);
            document.addEventListener('click', function (e) {
              var t = e.target;
              if (!t || !t.closest) return;
              var a = t.closest('a[data-lead]');
              if (a) fire(a.getAttribute('data-lead'));
            }, true);
          })();
        `}
      </Script>
    </>
  );
}
