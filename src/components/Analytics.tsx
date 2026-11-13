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
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          (function () {
            // Internal-traffic MARKER, not authentication.
            // This script ships to every visitor (and lives in a PUBLIC repo):
            // TOKEN is only a low-entropy guard against accidental self-tagging,
            // never a secret.
            var KEY = 'cb_internal';
            var TOKEN = 'K7m2p9Qx';
            var GA_ID = '${gaId}';
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
              // Strip the query so the token never lands in page_location,
              // browser history, or a copy-pasted team URL.
              url.searchParams.delete('cbteam');
              window.history.replaceState(null, '', url.pathname + url.search + url.hash);
            }

            function isInternal() {
              // No regex here: escaping inside a template literal is error-prone.
              if (('; ' + document.cookie).indexOf('; ' + KEY + '=1') !== -1) return true;
              // Safari ITP shortens JS-written cookies; localStorage is the fallback.
              try { return window.localStorage.getItem(KEY) === '1'; } catch (e) { return false; }
            }

            // Internal browsers do not load Google Analytics AT ALL.
            //
            // Why not tag-and-filter instead: GA4 encodes traffic_type as the
            // 'tt' collect parameter, and it is ONLY attached when the value is
            // passed as an explicit per-event argument. gtag('set', ...) and
            // gtag('config', id, {traffic_type}) both fail to attach it to the
            // automatic page_view, so a tag-and-filter setup silently sends
            // nothing and every internal visit stays in the reports.
            //
            // Loading nothing is strictly stronger: internal visits produce no
            // data at all, so there is nothing to filter out of any report,
            // now or in future. No data filter is needed and none should ever
            // be set to Active. Restore reporting with ?cbteam=clear.
            if (isInternal()) return;

            window.dataLayer = window.dataLayer || [];
            function gtag(){ window.dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', GA_ID, {});

            // Load the external tag after window.load, preserving the previous
            // lazyOnload timing so this change does not affect LCP.
            function loadGtag() {
              var s = document.createElement('script');
              s.async = true;
              s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
              document.head.appendChild(s);
            }
            if (document.readyState === 'complete') loadGtag();
            else window.addEventListener('load', loadGtag);
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
