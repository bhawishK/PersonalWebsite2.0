"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PROFILE } from "@/data/resume";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  const href = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-ink bg-paper">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center border-[3px] border-ink bg-coral font-display text-[10px] text-paper shadow-px-sm">
            BK
          </span>
          <span className="hidden font-display text-[10px] uppercase sm:inline">Bhawish Kumar</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={href(id)}
              className={`border-2 px-2 py-0.5 font-term text-xl leading-tight transition-colors ${
                active === id ? "border-ink bg-sun" : "border-transparent hover:border-ink hover:bg-paper-deep"
              }`}
            >
              {label}
            </a>
          ))}
          <a href={PROFILE.resumePdf} target="_blank" rel="noopener noreferrer" className="px-btn ml-2 bg-coral py-1.5 text-paper">
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="px-chip bg-sun lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "X CLOSE" : "≡ MENU"}
        </button>
      </div>

      {open && (
        <div className="border-t-4 border-ink bg-paper lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {NAV.map(({ id, label }, i) => (
              <li key={id}>
                <a
                  href={href(id)}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-2 font-term text-2xl hover:text-coral"
                >
                  <span className="text-ink-soft">{String(i + 1).padStart(2, "0")}</span> {label}
                </a>
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
