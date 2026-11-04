import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const products = [
  { href: "/products/raw-silk", label: "Raw Silk Yarn", external: false },
  { href: "/products/greige-fabric", label: "Greige Fabric", external: false },
  { href: "/products/satin", label: "Satin", external: false },
  { href: "/products/jacquard-luo", label: "Jacquard Luo", external: false },
  { href: "/products/organic-silk", label: "Organic Silk", external: false },
  { href: "/products/georgette", label: "Georgette", external: false },
  { href: "/products/pongee", label: "Pongee", external: false },
  { href: "/products/stretch-silk", label: "Silk Stretch Satin", external: false },
  { href: "/products/blended-silk", label: "Silk Blend", external: false },
  { href: "/products/dupioni", label: "Dupioni", external: false },
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
  { href: "/", label: "Home" },
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

          {/* 社交图标：Chat with us + WhatsApp + Instagram（真实品牌色） */}
          <div className="ml-auto flex items-center gap-3">
            <span className="text-sm text-ivory/90">Chat with us</span>
            <a
              href={`https://wa.me/${siteConfig.social.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Contact Christopher Bu on WhatsApp"
              className="transition-opacity hover:opacity-80"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="#25D366"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Christopher Bu on Instagram"
              className="transition-opacity hover:opacity-80"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <defs>
                  <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#FEDA75" />
                    <stop offset="0.25" stopColor="#FA7E1E" />
                    <stop offset="0.5" stopColor="#D62976" />
                    <stop offset="0.75" stopColor="#962FBF" />
                    <stop offset="1" stopColor="#4F5BD5" />
                  </linearGradient>
                </defs>
                <rect x="2.2" y="2.2" width="19.6" height="19.6" rx="5.5" stroke="url(#ig-grad)" strokeWidth="2" />
                <circle cx="12" cy="12" r="4.2" stroke="url(#ig-grad)" strokeWidth="2" />
                <circle cx="17.2" cy="6.8" r="1.3" fill="url(#ig-grad)" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
