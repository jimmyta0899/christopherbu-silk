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

            // Normalize page_location so that the static-hosting fallback
            // '/index' (which serves the homepage without a 301) is reported
            // as '/', preventing a duplicate row in GA4 'Pages and screens'.
            // See: src/app/index/page.tsx and legacy-index-alias.mjs.
            var normalizedPath = url.pathname;
            if (normalizedPath === '/index') normalizedPath = '/';
            var pageLocation = url.origin + normalizedPath + url.search + url.hash;
            gtag('config', GA_ID, { page_location: pageLocation });

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
      <Script id="ga4-site-events" strategy="afterInteractive">
        {`
          (function () {
            function send(name, params) {
              if (typeof window.gtag !== 'function') return;
              window.gtag('event', name, params);
            }
            function path() { return window.location.pathname; }

            // cta_click + quote_request: every route into a sample or a quotation.
            // Delegated on document, so no per-button wiring is needed anywhere.
            var ROUTES = [
              { re: /^\\/(samples|contact)([\\/#?]|$)/, kind: 'sample_or_quote' },
              { re: /^https?:\\/\\/(wa\\.me|api\\.whatsapp\\.com)/, kind: 'whatsapp' },
              { re: /^mailto:/, kind: 'email' }
            ];
            document.addEventListener('click', function (e) {
              var t = e.target;
              if (!t || !t.closest) return;
              var a = t.closest('a[href]');
              if (!a) return;
              var href = a.getAttribute('href') || '';
              var kind = '';
              for (var i = 0; i < ROUTES.length; i++) {
                if (ROUTES[i].re.test(href)) { kind = ROUTES[i].kind; break; }
              }
              if (!kind) return;
              var holder = a.closest('[data-cta-location]');
              send('cta_click', {
                cta_location: holder ? holder.getAttribute('data-cta-location') : 'unspecified',
                cta_kind: kind,
                cta_target: href,
                page_path: path()
              });
              send('quote_request', { lead_channel: kind, page_path: path() });
            }, true);

            // quote_request from an actual form submission.
            document.addEventListener('submit', function (e) {
              var f = e.target;
              if (!f || !f.getAttribute) return;
              send('quote_request', {
                lead_channel: 'form',
                form_id: f.getAttribute('id') || f.getAttribute('name') || 'unnamed',
                page_path: path()
              });
            }, true);

            // spec_table_view: first time a table is half on screen, once per table.
            // Threshold 0.5 keeps a table that flashes past out of the count.
            if ('IntersectionObserver' in window) {
              var tables = Array.prototype.slice.call(document.querySelectorAll('main table, table'));
              var seen = [];
              var io = new IntersectionObserver(function (entries) {
                for (var i = 0; i < entries.length; i++) {
                  var en = entries[i];
                  if (!en.isIntersecting) continue;
                  if (seen.indexOf(en.target) !== -1) continue;
                  seen.push(en.target);
                  send('spec_table_view', {
                    table_index: tables.indexOf(en.target),
                    page_path: path()
                  });
                  io.unobserve(en.target);
                }
              }, { threshold: 0.5 });
              for (var j = 0; j < tables.length; j++) io.observe(tables[j]);
            }

            // calculator_use: once per page view, and only after the reader
            // has actually typed or picked something. A page load is not a use.
            var seg = path().replace(/\\/$/, '').split('/tools/');
            var tool = seg.length > 1 ? (seg[1] || 'tools-index') : '';
            if (tool) {
              var fired = false;
              var timer = null;
              var mark = function () {
                if (fired) return;
                clearTimeout(timer);
                timer = setTimeout(function () {
                  if (fired) return;
                  fired = true;
                  send('calculator_use', { tool_name: tool, page_path: path() });
                }, 1500);
              };
              document.addEventListener('input', mark, true);
              document.addEventListener('change', mark, true);
            }
          })();
        `}
      </Script>
    </>
  );
}
