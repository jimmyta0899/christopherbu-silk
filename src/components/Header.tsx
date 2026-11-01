import Link from "next/link";
import { PrintBackground } from "@/components/PrintBackground";

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
    <header className="sticky top-0 z-50">
      {/* 满屏品牌印花背景（绝对定位铺满页头） */}
      <PrintBackground id="header-print" overlay />

      {/* 中央内容：半透明横幅，三行 */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-6">
        {/* 第一行：品牌名（衬线大标题） */}
        <Link href="/" className="inline-block text-center">
          <span className="font-display text-3xl font-medium tracking-wide text-ivory md:text-4xl">
            Christopher Bu
          </span>
        </Link>

        {/* 第二行：Christopher Bu × Yizhou Silk 拆成两行 */}
        <p className="mt-2 text-center font-display text-sm leading-relaxed tracking-[0.14em] text-gold-bright md:text-base">
          Christopher Bu
          <br />
          × Yizhou Silk
        </p>

        {/* 第三行：导航目录 */}
        <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
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
    </header>
  );
}
