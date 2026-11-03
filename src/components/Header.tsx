import Link from "next/link";
import Image from "next/image";

const products = [
  { href: "/products/raw-silk", label: "Raw Silk", external: false },
  { href: "/products/greige-fabric", label: "Greige Fabric", external: false },
  { href: "/products/dupioni", label: "Dupioni", external: false },
  { href: "/products/satin", label: "Satin", external: false },
  { href: "/products/jacquard-luo", label: "Jacquard Luo", external: false },
  { href: "/products/organic-silk", label: "Organic Silk", external: false },
];

// RTW 下拉：站内 /rtw 路由，指向本地迁移的季节系列
const rtwSeasons = [
  { href: "/rtw/SS20", label: "SS20", external: false },
  { href: "/rtw/RE20", label: "RE20", external: false },
  { href: "/rtw/AW19", label: "AW19", external: false },
  { href: "/rtw/PF19", label: "PF19", external: false },
  { href: "/rtw/SS19", label: "SS19", external: false },
  { href: "/rtw/RE19", label: "RE19", external: false },
  { href: "/rtw/AW18", label: "AW18", external: false },
  { href: "/rtw/PF18", label: "PF18", external: false },
  { href: "/rtw/SS18", label: "SS18", external: false },
  { href: "/rtw/RE18", label: "RE18", external: false },
  { href: "/rtw/AW17", label: "AW17", external: false },
  { href: "/rtw/PF17", label: "PF17", external: false },
  { href: "/rtw/SS17", label: "SS17", external: false },
  { href: "/rtw/RE17", label: "RE17", external: false },
  { href: "/rtw/AW16", label: "AW16", external: false },
  { href: "/rtw/PF16", label: "PF16", external: false },
  { href: "/rtw/SS16", label: "SS16", external: false },
  { href: "/rtw/RE16", label: "RE16", external: false },
  { href: "/rtw/CC16", label: "Coca-cola", external: false },
  { href: "/rtw/AW15", label: "AW15", external: false },
  { href: "/rtw/SS15", label: "SS15", external: false },
  { href: "/rtw/AW14", label: "AW14", external: false },
  { href: "/rtw/SS14", label: "SS14", external: false },
  { href: "/rtw/AW13", label: "AW13", external: false },
  { href: "/rtw/SS13", label: "SS13", external: false },
];

// 导航结构
const nav = [
  { href: "/products", label: "Products", children: products },
  { href: "/services", label: "Services" },
  { href: "/couture", label: "Couture" },
  { href: "/rtw", label: "RTW", children: rtwSeasons },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  {
    href: "/contact",
    label: "Contact",
    children: [
      { href: "/samples", label: "Sample", external: false },
      { href: "/trade-terms", label: "Trade Terms", external: false },
      { href: "/faq", label: "FAQ", external: false },
      { href: "/contact", label: "Contact B2B Team", external: false },
    ],
  },
];

export function Header() {
  return (
    <header className="relative z-50">
      {/* 满屏印花背景：直接用品牌印花截图 */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/christopherbu-silk/print-bg.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* 深色遮罩，保证前景文字可读 */}
        <div className="absolute inset-0 bg-jade-deep/70" />
      </div>

      {/* 前景内容 */}
      <div className="relative mx-auto max-w-6xl px-6 py-8">
        {/* 第一行：品牌 logo（金色字标），居中 + 四周留白 */}
        <div className="flex justify-center py-4">
          <Link href="/" className="inline-block" aria-label="Christopher Bu — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/christopherbu-silk/brand-wordmark.png"
              alt="Christopher Bu"
              className="h-9 w-auto md:h-11"
            />
          </Link>
        </div>

        {/* 第二行：完整 logo 图（含品牌名 + 产品词）+ Products 导航目录 */}
        <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-2">
          <Link href="/" className="inline-block">
            <Image
              src="/christopherbu-silk/brand-logo.png"
              alt="Christopher Bu × Yizhou Silk — Raw Silk · Greige Fabric · Dupioni"
              width={454}
              height={82}
              className="h-auto w-56 sm:w-72"
            />
          </Link>
          <span aria-hidden="true" className="hidden h-6 w-px bg-gold-bright/40 sm:inline-block" />
          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
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
                  <div
                    className={`border border-gold-bright/40 bg-jade-deep/95 py-1.5 shadow-lg backdrop-blur ${
                      item.children.length > 12 ? "grid w-[360px] grid-cols-2" : "w-48"
                    }`}
                  >
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        {...(c.external ? { target: "_blank", rel: "noopener noreferrer nofollow" } : {})}
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
                className="text-sm text-ivory/90 transition-colors hover:text-gold-bright"
              >
                {item.label}
              </Link>
            ),
          )}
          </nav>
        </div>
      </div>
    </header>
  );
}
