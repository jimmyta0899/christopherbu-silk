import Link from "next/link";
import Image from "next/image";

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

        {/* 第二行：最左 logo 图 + 紧跟 Products 目录 */}
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
          {/* 品牌 logo 图片 */}
          <Image
            src="/christopherbu-silk/brand-logo.png"
            alt="Christopher Bu × Yizhou Silk"
            width={556}
            height={79}
            className="h-9 w-auto"
          />
          {/* 目录 */}
          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ivory/90 transition-colors hover:text-gold-bright"
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
        </div>
      </div>
    </header>
  );
}
