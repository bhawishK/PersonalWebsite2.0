"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PROFILE } from "@/data/resume";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-ink bg-paper">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center border-[3px] border-ink bg-coral font-display text-xs text-paper shadow-px-sm">
            BK
          </span>
          <span className="hidden font-display text-sm uppercase sm:inline">Bhawish Kumar</span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`border-2 px-2 py-0.5 font-term text-xl leading-tight transition-colors ${
                isActive(pathname, href) ? "border-ink bg-sun" : "border-transparent hover:border-ink hover:bg-paper-deep"
              }`}
            >
              {label}
            </Link>
          ))}
          <a href={PROFILE.resumePdf} target="_blank" rel="noopener noreferrer" className="px-btn ml-2 bg-coral py-1.5 text-paper">
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="px-chip bg-sun xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "X CLOSE" : "≡ MENU"}
        </button>
      </div>

      {open && (
        <div className="border-t-4 border-ink bg-paper xl:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {NAV.map(({ href, label }, i) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 py-2 font-term text-2xl hover:text-coral ${
                    isActive(pathname, href) ? "text-coral" : ""
                  }`}
                >
                  <span className="text-ink-soft">{String(i + 1).padStart(2, "0")}</span> {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a href={PROFILE.resumePdf} target="_blank" rel="noopener noreferrer" className="px-btn bg-coral text-paper">
                ↓ Resume.pdf
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
