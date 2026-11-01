import Link from "next/link";
import Image from "next/image";

const products = [
  { href: "/products/raw-silk", label: "Raw Silk" },
  { href: "/products/greige-fabric", label: "Greige Fabric" },
  { href: "/products/douppioni", label: "Douppioni" },
];

// 导航结构：Products 下拉、Contact 下拉（Sample Book / Trade Terms）
// Couture 与 RTW 目前为占位链接，待提供 christopherbu.com 实际页面 URL 后替换
const nav = [
  { href: "/products", label: "Products", children: products },
  { href: "/about", label: "Couture", external: false }, // 占位：礼服 blog，待补 URL
  { href: "https://christopherbu.com", label: "RTW", external: true }, // 占位：成衣展示
  { href: "/about", label: "About" },
  {
    href: "/contact",
    label: "Contact",
    children: [
      { href: "/samples", label: "Sample Book" },
      { href: "/trade-terms", label: "Trade Terms" },
      { href: "/contact", label: "Contact B2B Team" },
    ],
  },
];

export function Header() {
  return (
    <header className="relative z-50">
      {/* 满屏印花背景：直接用品牌印花截图 */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/christopherbu-silk/print-bg.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        {/* 深色遮罩，保证前景文字可读 */}
        <div className="absolute inset-0 bg-jade-deep/70" />
      </div>

      {/* 前景内容 */}
      <div className="relative mx-auto max-w-6xl px-6 py-6">
        {/* 第一行：品牌名，靠最左 */}
        <Link href="/" className="inline-block">
          <span className="font-display text-3xl font-medium tracking-wide text-ivory md:text-4xl">
            Christopher Bu
          </span>
        </Link>

        {/* 第二行：品牌 logo 图 + 三个核心产品 */}
        <div className="mt-3 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <Image
            src="/christopherbu-silk/brand-logo.png"
            alt="Christopher Bu × Yizhou Silk"
            width={556}
            height={79}
            className="h-8 w-auto"
          />
          <span className="flex flex-wrap items-center gap-x-2 text-sm tracking-wide text-gold-bright/90">
            {products.map((p, i) => (
              <span key={p.href} className="flex items-center gap-x-2">
                {i > 0 && <span aria-hidden="true" className="text-gold-bright/50">·</span>}
                <Link href={p.href} className="transition-colors hover:text-gold-bright">
                  {p.label}
                </Link>
              </span>
            ))}
          </span>
        </div>

        {/* 第三行：导航目录（Products / Contact 为下拉） */}
        <nav className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-2">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm text-ivory/90 transition-colors hover:text-gold-bright"
                >
                  {item.label}
                  <svg
                    aria-hidden="true"
                    className="h-3 w-3 opacity-70 transition-transform group-hover:rotate-180"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                {/* 下拉菜单 */}
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="w-48 border border-gold-bright/40 bg-jade-deep/95 py-1.5 shadow-lg backdrop-blur">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-2 text-sm text-ivory/90 transition-colors hover:bg-gold-bright/10 hover:text-gold-bright"
                      >
                        {c.label}
                      </Link>
                    ))}
                    {item.href === "/products" && (
                      <Link
                        href="/products"
                        className="block border-t border-gold-bright/20 px-4 py-2 text-xs text-ivory/70 transition-colors hover:bg-gold-bright/10 hover:text-gold-bright"
                      >
                        View all products →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm text-ivory/90 transition-colors hover:text-gold-bright"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
