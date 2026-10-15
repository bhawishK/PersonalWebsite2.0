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
  if (!images.length) return null;
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
          <Photo src={img.src} alt={img.alt} fit="contain" />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 border-t-[3px] border-ink bg-paper px-2 py-0.5 text-left font-term text-lg leading-tight">
            {img.caption}
          </span>
        </button>
      ))}
    </div>
  );
}

function LeadershipEntry({ entry, onOpen }) {
  const stats = entry.stats ?? [];
  return (
    <article className="px-box bg-paper">
      <header className={`flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink px-5 py-4 bg-${entry.color}`}>
        <div>
          <h3 className="font-display text-2xl uppercase leading-relaxed sm:text-3xl">{entry.org}</h3>
          <p className="text-lg leading-snug">{entry.role}</p>
        </div>
        <span className="px-chip bg-paper">{entry.dates}</span>
      </header>

      <div className={`grid gap-6 border-b-[3px] border-ink p-5 ${stats.length ? "lg:grid-cols-[1.3fr_1fr]" : ""}`}>
        <ul className="space-y-2">
          {entry.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-lg leading-snug">
              <span className="mt-2 h-2 w-2 shrink-0 bg-ink" aria-hidden />
              {b}
            </li>
          ))}
        </ul>
        {stats.length > 0 && (
          <div className="grid h-fit grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className={`px-box-sm p-3 text-center bg-${entry.color}-soft`}>
                <p className="font-display text-2xl leading-none sm:text-3xl">{s.value}</p>
                <p className="mt-1.5 font-term text-lg leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="divide-y-[3px] divide-ink">
        {entry.initiatives.map((it) => (
          <section key={it.title} className="grid gap-5 p-5 lg:grid-cols-[280px_1fr]">
            <div>
              <span className={`block h-2 w-16 border-2 border-ink bg-${it.color}`} aria-hidden />
              <h4 className="mt-3 font-display text-2xl uppercase leading-relaxed sm:text-3xl">{it.title}</h4>
              <p className="mt-2 text-lg leading-snug text-ink-soft">{it.description}</p>
            </div>
            <Gallery images={it.images} onOpen={onOpen} />
          </section>
        ))}
      </div>
    </article>
  );
}

export default function LeadershipSection() {
  const [open, setOpen] = useState(null);

  const { entries, flat } = useMemo(() => {
    const flat = [];
    const entries = LEADERSHIP.map((entry) => ({
      ...entry,
      initiatives: entry.initiatives.map((it) => ({
        ...it,
        images: (it.images ?? [])
          .map(({ media, caption }) => {
            const m = MEDIA[media];
            if (!m) return null;
            const item = { src: m.src, alt: m.alt, caption: caption ?? m.caption, flatIndex: flat.length };
            flat.push(item);
            return item;
          })
          .filter(Boolean),
      })),
    }));
    return { entries, flat };
  }, []);

  return (
    <Section id="leadership" title="Leadership Experience" accent="bg-bubble" className="bg-bubble-soft bg-dots">
      <div className="space-y-12">
        {entries.map((entry) => (
          <LeadershipEntry key={entry.org} entry={entry} onOpen={setOpen} />
        ))}
      </div>
      <Lightbox items={flat} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </Section>
  );
}
