import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/40 bg-jade-deep text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-ivory">
            Christopher Bu <span className="text-gold-bright">×</span> Yizhou Silk
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">
            {siteConfig.oneLiner}
          </p>
          {/* 可见的官方社交入口：与 Organization.sameAs 相互印证，便于实体关联 */}
          <nav
            aria-label="Official social channels"
            className="mt-4 flex items-center gap-3 text-sm text-ivory/70"
          >
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold-bright"
            >
              Instagram
            </a>
            <span aria-hidden="true" className="text-ivory/40">
              ·
            </span>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold-bright"
            >
              Facebook
            </a>
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold text-gold-bright">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/80">
            <li>
              <Link href="/products" className="transition-colors hover:text-ivory">
                Products
              </Link>
            </li>
            <li>
              <Link href="/products/raw-silk" className="transition-colors hover:text-ivory">
                Raw Silk Yarn
              </Link>
            </li>
            <li>
              <Link href="/products/greige-fabric" className="transition-colors hover:text-ivory">
                Greige Fabric
              </Link>
            </li>
            <li>
              <Link href="/products/dupioni" className="transition-colors hover:text-ivory">
                Dupioni Silk
              </Link>
            </li>
            <li>
              <Link href="/samples" className="transition-colors hover:text-ivory">
                Sample
              </Link>
            </li>
            <li>
              <Link href="/faq" className="transition-colors hover:text-ivory">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-ivory">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-gold-bright">
            Company
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/80">
            <li>
              <Link href="/about" className="transition-colors hover:text-ivory">
                Why Us
              </Link>
            </li>
            <li>
              <Link href="/certificates" className="transition-colors hover:text-ivory">
                Certifications
              </Link>
            </li>
            <li>
              <Link href="/trade-terms" className="transition-colors hover:text-ivory">
                Trade Terms
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="transition-colors hover:text-ivory">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-ivory">
                Contact B2B Team
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-ivory/70 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Sourced from local mills · OEKO-TEX & GOTS available on request
          </p>
        </div>
      </div>
    </footer>
  );
}
