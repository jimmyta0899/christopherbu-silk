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

          (function () {
            // Internal-traffic MARKER, not authentication.
            // This script ships to every visitor (and lives in a PUBLIC repo):
            // TOKEN is only a low-entropy guard against accidental self-tagging,
            // never a secret. GA4 filtering is done at report level, so a
            // mis-tagged browser loses no data and can be switched back instantly.
            var KEY = 'cb_internal';
            var TOKEN = 'K7m2p9Qx';
            var url = new URL(window.location.href);
            var q = url.searchParams.get('cbteam');

            if (q !== null) {
              if (q === TOKEN) {
                document.cookie = KEY + '=1; path=/; max-age=31536000; SameSite=Lax; Secure';
                try { window.localStorage.setItem(KEY, '1'); } catch (e) {}
              } else if (q === 'clear') {
                document.cookie = KEY + '=; path=/; max-age=0; SameSite=Lax; Secure';
                try { window.localStorage.removeItem(KEY); } catch (e) {}
              }
              // Strip the query BEFORE config so the token never lands in
              // page_location, browser history, or a copy-pasted team URL.
              url.searchParams.delete('cbteam');
              window.history.replaceState(null, '', url.pathname + url.search + url.hash);
            }

            function isInternal() {
              // No regex here: escaping inside a template literal is error-prone.
              if (('; ' + document.cookie).indexOf('; ' + KEY + '=1') !== -1) return true;
              // Safari ITP shortens JS-written cookies; localStorage is the fallback.
              try { return window.localStorage.getItem(KEY) === '1'; } catch (e) { return false; }
            }

            if (isInternal()) {
              // 'set' before 'config' => every later event inherits traffic_type,
              // including generate_lead from the ga4-lead-events block.
              gtag('set', { traffic_type: 'internal' });
              gtag('config', '${gaId}', { traffic_type: 'internal' }); // first page_view too
            } else {
              gtag('config', '${gaId}', {});
            }
          })();
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
