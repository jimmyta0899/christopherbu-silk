import Link from "next/link";

export type RelatedItem = {
  href: string;
  title: string;
  note: string;
};

/**
 * 站内「继续读」区块。
 *
 * 为什么存在：GA4 的落地页报告里，五个商业页共 59 个会话、0 个 engaged，
 * 平均停留 0 秒；而全站唯一有真实阅读的页面是一篇定价长文。
 * 这些页面不缺 CTA，缺的是「下一步该看什么」的指路。
 *
 * `data-cta-location` 供 GA4 的 cta_click 事件归因，不要删。
 */
export function RelatedReading({
  heading = "Related reading",
  intro,
  items,
  location = "page-end",
}: {
  heading?: string;
  intro?: string;
  items: RelatedItem[];
  location?: string;
}) {
  if (!items.length) return null;

  return (
    <section
      aria-label={heading}
      data-cta-location={location}
      className="mt-14 border-t border-line pt-8"
    >
      <h2 className="font-display text-xl font-medium text-jade-deep">
        {heading}
      </h2>
      {intro ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          {intro}
        </p>
      ) : null}
      <ul className="mt-5 grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block h-full border border-line p-4 transition-colors hover:border-gold"
            >
              <span className="font-display block text-base font-medium text-jade-deep">
                {item.title}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-ink-soft">
                {item.note}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
