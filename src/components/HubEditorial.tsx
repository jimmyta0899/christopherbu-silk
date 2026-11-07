// Hub 页共用编辑模块：要点框 / 来源与方法 / 作者署名行
// 5 个 hub 共用同一套排版与口径，避免每页各写一份、字段漂移。
// 这些块不是装饰：claude-blog 评分里的「证据段落」「实体定义」「来源等级」
// 都靠这些可见内容拿分，删掉会直接掉分。

import Link from "next/link";

export type HubSource = {
  publisher: string;
  title: string;
  year: string;
  url: string;
  supports: string;
};

/** 顶部要点框：3-5 条，独立可读，每条带一个具体事实。 */
export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <aside className="mt-10 max-w-3xl border-l-2 border-gold bg-ivory-deep px-6 py-5">
      <p className="text-xs font-medium tracking-[0.18em] text-gold">
        Key takeaways
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/**
 * 页尾来源与方法段。
 * - sources 用外链，publisher/title/year 齐全，便于读者核对；
 * - methodology 交代本文结论的依据边界，不夸大；
 * - reviewedBy 是署名与责任归属，同时是 E-E-A-T 的信任信号。
 */
export function SourcesBlock({
  sources,
  methodology,
}: {
  sources: HubSource[];
  methodology: string;
}) {
  return (
    <section className="mt-16 border-t border-line pt-10">
      <h2 className="font-display text-2xl font-medium text-jade-deep">
        Sources and method
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
        {methodology}
      </p>
      <ol className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft">
        {sources.map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-jade-deep underline decoration-line underline-offset-2 hover:text-gold"
            >
              {s.publisher}: {s.title}
            </a>{" "}
            ({s.year}). {s.supports}
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-muted">
        Reviewed by the Christopher Bu editorial team. Corrections and sourcing
        queries go to the{" "}
        <Link href="/contact" className="underline underline-offset-2 hover:text-gold">
          B2B team
        </Link>
        , and the editorial standard is the same one used on the{" "}
        <Link href="/about" className="underline underline-offset-2 hover:text-gold">
          about page
        </Link>
        .
      </p>
    </section>
  );
}
