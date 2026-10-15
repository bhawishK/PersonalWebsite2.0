"use client";
import { useEffect } from "react";
import Image from "next/image";

// items: [{ src, alt, caption }]
export default function Lightbox({ items, index, onClose, onChange }) {
  const open = index !== null && index !== undefined && items[index];

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, index, items.length, onClose, onChange]);

  if (!open) return null;
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption || item.alt}
      onClick={onClose}
    >
      <figure className="px-box relative w-full max-w-4xl bg-paper" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b-[3px] border-ink bg-sun px-3 py-1.5">
          <span className="font-term text-lg">
            {index + 1} / {items.length}
          </span>
          <button onClick={onClose} className="px-chip bg-coral text-paper" aria-label="Close">
            X
          </button>
        </div>
        <div className="relative h-[70vh] w-full bg-ink">
          <Image src={item.src} alt={item.alt} fill sizes="(min-width: 896px) 896px, 100vw" className="object-contain" />
        </div>
        <figcaption className="flex items-center justify-between gap-3 border-t-[3px] border-ink px-3 py-2">
          <button
            onClick={() => onChange((index - 1 + items.length) % items.length)}
            className="px-chip bg-paper"
            aria-label="Previous image"
          >
            ◀
          </button>
          <span className="text-center text-lg">{item.caption}</span>
          <button
            onClick={() => onChange((index + 1) % items.length)}
            className="px-chip bg-paper"
            aria-label="Next image"
          >
            ▶
          </button>
        </figcaption>
      </figure>
    </div>
  );
}
