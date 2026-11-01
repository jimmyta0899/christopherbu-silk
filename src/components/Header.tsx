import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const nav = [
  { href: "/products", label: "Products" },
  { href: "/products/raw-silk", label: "Raw Silk" },
  { href: "/products/greige-fabric", label: "Greige Fabric" },
  { href: "/products/douppioni", label: "Douppioni" },
  { href: "/about", label: "About" },
  { href: "/trade-terms", label: "Trade Terms" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold tracking-tight text-jade-deep">
            Christopher Bu <span className="text-gold">×</span> Yizhou Silk
          </span>
          <span className="text-xs text-ink-muted">
            Raw silk · Greige · Douppioni
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-jade"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/samples"
          className="hidden rounded-full bg-jade px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-jade-deep md:inline-block"
        >
          Request Samples
        </Link>
      </div>
    </header>
  );
}
