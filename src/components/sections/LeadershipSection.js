"use client";
import { useMemo, useState } from "react";
import Section from "@/components/pixel/Section";
import Photo from "@/components/pixel/Photo";
import Lightbox from "@/components/pixel/Lightbox";
import { MEDIA } from "@/data/media";
import { LEADERSHIP } from "@/data/resume";

// First image is the hero shot; the rest fill the 4-column grid without gaps.
function spanFor(i, n) {
  if (i === 0) return n === 1 ? "col-span-2 row-span-2 sm:col-span-4" : "col-span-2 row-span-2";
  if (n === 2) return "col-span-2 sm:row-span-2";
  if (n === 3) return "sm:col-span-2";
  return "";
}

function Gallery({ images, onOpen }) {
  return (
    <div className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[150px] sm:grid-cols-4">
      {images.map((img, i) => (
        <button
          key={`${img.src}-${i}`}
          onClick={() => onOpen(img.flatIndex)}
          className={`group relative overflow-hidden border-[3px] border-ink shadow-px-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-sun ${spanFor(
            i,
            images.length
          )}`}
          aria-label={`Open image: ${img.caption}`}
        >
          <Photo src={img.src} alt={img.alt} />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 border-t-[3px] border-ink bg-paper px-2 py-0.5 text-left font-term text-lg leading-tight">
            {img.caption}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function LeadershipSection() {
  const { featured, others } = LEADERSHIP;
  const [open, setOpen] = useState(null);

  const { initiatives, flat } = useMemo(() => {
    const flat = [];
    const initiatives = featured.initiatives.map((it) => ({
      ...it,
      images: it.images
        .map(({ media, caption }) => {
          const m = MEDIA[media];
          if (!m) return null;
          const entry = { src: m.src, alt: m.alt, caption: caption ?? m.caption, flatIndex: flat.length };
          flat.push(entry);
          return entry;
        })
        .filter(Boolean),
    }));
    return { initiatives, flat };
  }, [featured.initiatives]);

  return (
    <Section
      id="leadership"
      title="Leadership Experience"
      accent="bg-bubble"
      className="bg-bubble-soft bg-dots"
    >
      <article className="px-box bg-paper">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink bg-bubble px-5 py-4">
          <div>
            <h3 className="font-display text-sm uppercase leading-relaxed sm:text-base">{featured.org}</h3>
            <p className="text-lg leading-snug">{featured.role}</p>
          </div>
          <span className="px-chip bg-paper">{featured.dates}</span>
        </header>

        <div className="grid gap-6 border-b-[3px] border-ink p-5 lg:grid-cols-[1.3fr_1fr]">
          <ul className="space-y-2">
            {featured.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-lg leading-snug">
                <span className="mt-2 h-2 w-2 shrink-0 bg-ink" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3">
            {featured.stats.map((s) => (
              <div key={s.label} className="px-box-sm bg-sun-soft p-3 text-center">
                <p className="font-display text-lg leading-none">{s.value}</p>
                <p className="mt-1.5 font-term text-lg leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divide-y-[3px] divide-ink">
          {initiatives.map((it, i) => (
            <section key={it.title} className="grid gap-5 p-5 lg:grid-cols-[280px_1fr]">
              <div>
                <span className={`block h-2 w-16 border-2 border-ink bg-${it.color}`} aria-hidden />
                <h4 className="mt-3 text-2xl font-bold leading-tight">{it.title}</h4>
                <p className="mt-2 text-lg leading-snug text-ink-soft">{it.description}</p>
              </div>
              <Gallery images={it.images} onOpen={setOpen} />
            </section>
          ))}
        </div>
      </article>

      <h3 className="mb-5 mt-14 font-display text-xs uppercase">Other activities</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {others.map((o) => {
          const img = MEDIA[o.media];
          return (
            <article key={o.org} className="px-box grid bg-paper sm:grid-cols-[160px_1fr]">
              <div className="h-48 border-b-[3px] border-ink sm:h-auto sm:border-b-0 sm:border-r-[3px]">
                <Photo src={img?.src} alt={img?.alt} />
              </div>
              <div className="space-y-2 p-4">
                <span className={`px-chip bg-${o.color}-soft`}>{o.dates}</span>
                <h4 className="text-xl font-bold leading-tight">{o.org}</h4>
                <p className="font-term text-lg leading-tight text-ink-soft">{o.role}</p>
                {o.bullets.map((b) => (
                  <p key={b} className="text-base leading-snug">
                    {b}
                  </p>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <Lightbox items={flat} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </Section>
  );
}
