import Link from "next/link";

const nav = [
  { href: "/products", label: "Products" },
  { href: "/products/raw-silk", label: "Raw Silk" },
  { href: "/products/greige-fabric", label: "Greige Fabric" },
  { href: "/products/douppioni", label: "Douppioni" },
  { href: "/samples", label: "Sample Book" },
  { href: "/about", label: "About" },
  { href: "/trade-terms", label: "Trade Terms" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-jade-deep">
      {/* 第一行：品牌 logo 靠左，凸显品牌 */}
      <div className="border-b border-gold/30">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <Link href="/" className="inline-block">
            <span className="font-display text-2xl font-medium tracking-wide text-ivory md:text-3xl">
              Christopher Bu
            </span>
          </Link>
        </div>
      </div>

      {/* 第二行：品牌 × Yizhou Silk 完整名 */}
      <div className="border-b border-gold/30">
        <div className="mx-auto max-w-6xl px-6 py-2">
          <span className="font-display text-sm tracking-[0.18em] text-gold-bright md:text-base">
            Christopher Bu × Yizhou Silk
          </span>
        </div>
      </div>

      {/* 第三行：导航 */}
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-3.5">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm text-ivory/85 transition-colors hover:text-gold-bright"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="rounded-full border border-gold-bright/70 px-4 py-1.5 text-sm text-gold-bright transition-colors hover:bg-gold-bright hover:text-jade-deep"
        >
          Contact B2B Team
        </Link>
      </nav>
    </header>
  );
}
