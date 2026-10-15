"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import { NAV } from "@/data/resume";

function navIndex(pathname) {
  return NAV.findIndex(({ href }) => pathname === href || pathname.startsWith(`${href}/`));
}

export default function NextSection() {
  const pathname = usePathname();
  const index = navIndex(pathname);

  // Home: advance into the first nav section.
  const next =
    pathname === "/"
      ? NAV[0]
      : index >= 0 && index < NAV.length - 1
        ? NAV[index + 1]
        : null;

  // Last nav section, or pages outside the nav (blog, etc.): contact footer.
  if (!next) return <Footer />;

  return (
    <nav aria-label="Next section" className="border-b-4 border-ink bg-paper-deep">
      <div className="mx-auto flex max-w-6xl justify-end px-4 py-8 sm:px-6">
        <Link href={next.href} className="px-btn group flex items-center gap-3 bg-sun">
          <span>{next.label}</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            ▶
          </span>
        </Link>
      </div>
    </nav>
  );
}
