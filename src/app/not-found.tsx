import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center md:py-32">
        <p className="font-display text-7xl font-medium text-jade md:text-8xl">
          404
        </p>
        <h1 className="mt-6 font-display text-3xl font-medium text-jade-deep md:text-4xl">
          This page could not be found.
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
          The page you are looking for may have moved or no longer exists. You
          can return to the homepage, browse our raw silk and greige fabric, or
          read the latest from the Christopher Bu silk house.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="border border-jade bg-jade px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-jade-deep"
          >
            Return home
          </Link>
          <Link
            href="/products"
            className="border border-line bg-ivory px-6 py-3 text-sm font-semibold text-jade-deep transition-colors hover:border-gold"
          >
            Browse silk fabric
          </Link>
          <Link
            href="/contact"
            className="border border-line bg-ivory px-6 py-3 text-sm font-semibold text-jade-deep transition-colors hover:border-gold"
          >
            Contact us
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
