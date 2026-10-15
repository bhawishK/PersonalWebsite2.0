"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BitmapText from "@/components/pixel/BitmapText";
import Lightbox from "@/components/pixel/Lightbox";
import { MEDIA } from "@/data/media";
import { HERO_COLOR_SHARE, HERO_PHOTOS } from "@/data/hero";
import { PROFILE } from "@/data/resume";

const COLORS = ["#FF5D5D", "#FF9F1C", "#FFD23F", "#7BD389", "#2EC4B6", "#FFF6E5", "#8338EC", "#FF5CA8"];
const GAP = 6;
const PHOTO_ZOOM = 3.2;
const COLOR_ZOOM = 1.5;

// Transform origin (0 / 50 / 100 %) along one axis so a zoomed cell stays inside
// the field, trying the preferred direction first.
function pickOrigin(start, size, total, grow, prefer) {
  const fits = (o) => start - (grow * o) / 100 >= 0 && start + size + grow * (1 - o / 100) <= total;
  const order = [prefer, 50, 0, 100];
  return order.find(fits) ?? (start < total / 2 ? 0 : 100);
}

// Deterministic per-cell randomness so the layout is stable across renders.
function rand(seed) {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export default function PixelHero() {
  const fieldRef = useRef(null);
  const panelRef = useRef(null);
  const nodeRefs = useRef([]);
  const cellsRef = useRef([]);
  const frame = useRef(0);
  const [cells, setCells] = useState([]);
  const [active, setActive] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const photos = useMemo(
    () => HERO_PHOTOS.map((key) => MEDIA[key]).filter((m) => m?.src).map((m) => ({ ...m })),
    []
  );

  const build = useCallback(() => {
    const field = fieldRef.current;
    const panel = panelRef.current;
    if (!field || !panel) return;

    const W = field.clientWidth;
    const H = field.clientHeight;
    const size = W < 640 ? 40 : W < 1024 ? 54 : 64;
    const step = size + GAP;
    const cols = Math.floor((W - GAP) / step);
    const rows = Math.floor((H - GAP) / step);
    const offX = (W - (cols * step - GAP)) / 2;
    const offY = (H - (rows * step - GAP)) / 2;

    const fr = field.getBoundingClientRect();
    const pr = panel.getBoundingClientRect();
    const keepOut = {
      x0: pr.left - fr.left - GAP,
      x1: pr.right - fr.left + GAP,
      y0: pr.top - fr.top - GAP,
      y1: pr.bottom - fr.top + GAP,
    };

    const grow = size * (PHOTO_ZOOM - 1);
    const out = [];
    let cursor = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = offX + c * step;
        const y = offY + r * step;
        if (x < keepOut.x1 && x + size > keepOut.x0 && y < keepOut.y1 && y + size > keepOut.y0) continue;
        const seed = r * 131 + c * 7;
        const isColor = !photos.length || rand(seed) < HERO_COLOR_SHARE;
        // Grow away from the name panel when the cell sits beside it.
        const inPanelCols = x + size > keepOut.x0 - grow && x < keepOut.x1 + grow;
        const inPanelRows = y + size > keepOut.y0 - grow && y < keepOut.y1 + grow;
        const preferY = inPanelCols && y + size <= keepOut.y0 ? 100 : inPanelCols && y >= keepOut.y1 ? 0 : 50;
        const preferX = inPanelRows && x + size <= keepOut.x0 ? 100 : inPanelRows && x >= keepOut.x1 ? 0 : 50;
        out.push({
          x,
          y,
          size,
          photo: isColor ? null : (cursor++ + r * 3) % photos.length,
          color: COLORS[Math.floor(rand(seed + 999) * COLORS.length)],
          ox: pickOrigin(x, size, W, grow, preferX),
          oy: pickOrigin(y, size, H, grow, preferY),
        });
      }
    }
    cellsRef.current = out;
    nodeRefs.current = [];
    setActive(null);
    setCells(out);
  }, [photos.length]);

  useEffect(() => {
    build();
    const ro = new ResizeObserver(build);
    ro.observe(fieldRef.current);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, [build]);

  const magnify = useCallback((mx, my) => {
    const list = cellsRef.current;
    let hit = null;
    list.forEach((c, i) => {
      if (mx >= c.x && mx <= c.x + c.size && my >= c.y && my <= c.y + c.size) hit = i;
    });

    list.forEach((c, i) => {
      const node = nodeRefs.current[i];
      if (!node) return;
      const d = Math.hypot(mx - (c.x + c.size / 2), my - (c.y + c.size / 2));
      let scale = 1 + Math.max(0, 1 - d / (c.size * 2.6)) ** 2 * 0.35;
      if (i === hit) scale = c.photo === null ? COLOR_ZOOM : PHOTO_ZOOM;
      node.style.transform = `scale(${scale.toFixed(3)})`;
      node.style.zIndex = i === hit ? "50" : scale > 1.01 ? "20" : "";
    });
    setActive(hit !== null && list[hit].photo !== null ? hit : null);
  }, []);

  const reset = useCallback(() => {
    cancelAnimationFrame(frame.current);
    nodeRefs.current.forEach((node) => {
      if (!node) return;
      node.style.transform = "";
      node.style.zIndex = "";
    });
    setActive(null);
  }, []);

  const onPointerMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const fr = fieldRef.current.getBoundingClientRect();
    const mx = e.clientX - fr.left;
    const my = e.clientY - fr.top;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => magnify(mx, my));
  };

  const activeCell = active !== null ? cells[active] : null;
  const label = activeCell
    ? (() => {
        const w = activeCell.size * PHOTO_ZOOM;
        const grow = w - activeCell.size;
        return {
          left: activeCell.x - (grow * activeCell.ox) / 100,
          top: activeCell.y - (grow * activeCell.oy) / 100 + w,
          width: w,
          text: photos[activeCell.photo]?.caption,
        };
      })()
    : null;

  return (
    <section id="top" className="relative w-full border-b-4 border-ink bg-azure">
      <h1 className="sr-only">{PROFILE.name}</h1>
      <div
        ref={fieldRef}
        className="relative h-[620px] w-full overflow-hidden md:h-[clamp(560px,78vh,780px)]"
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
      >
        {cells.map((c, i) => {
          const photo = c.photo !== null ? photos[c.photo] : null;
          const style = {
            left: c.x,
            top: c.y,
            width: c.size,
            height: c.size,
            transformOrigin: `${c.ox}% ${c.oy}%`,
            backgroundColor: photo ? undefined : c.color,
          };
          return photo ? (
            <button
              key={`${c.x}-${c.y}`}
              ref={(el) => (nodeRefs.current[i] = el)}
              style={style}
              onClick={() => setLightbox(c.photo)}
              className="hero-bit absolute overflow-hidden border-2 border-ink bg-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-sun"
              aria-label={photo.caption}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt="" className="h-full w-full object-cover" draggable={false} />
            </button>
          ) : (
            <div
              key={`${c.x}-${c.y}`}
              ref={(el) => (nodeRefs.current[i] = el)}
              style={style}
              className="hero-bit absolute border-2 border-ink"
              aria-hidden
            />
          );
        })}

        {label?.text && (
          <span
            className="pointer-events-none absolute z-[55] -translate-y-full border-2 border-ink bg-paper px-2 py-0.5 font-term text-lg leading-tight"
            style={{ left: label.left, top: label.top, maxWidth: label.width }}
          >
            {label.text}
          </span>
        )}

        <div
          ref={panelRef}
          className="px-box absolute left-1/2 top-1/2 z-40 flex w-[min(620px,calc(100%-24px))] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 bg-paper px-5 py-7 text-center md:px-10 md:py-9"
        >
          <BitmapText text="Bhawish Kumar" className="hidden w-full max-w-[520px] md:block" />
          <div className="flex w-full flex-col items-center gap-2 md:hidden">
            <BitmapText text="Bhawish" className="w-[72%]" title="Bhawish Kumar" />
            <BitmapText text="Kumar" className="w-[52%]" title="" />
          </div>
          <div className="space-y-1">
            <p className="text-xl font-semibold leading-snug md:text-2xl">{PROFILE.headline}</p>
            <p className="font-term text-xl leading-tight text-ink-soft">{PROFILE.roles.join(" · ")}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#profile" className="px-btn bg-sun">
              About me
            </a>
            <a href={PROFILE.resumePdf} target="_blank" rel="noopener noreferrer" className="px-btn bg-paper">
              Resume
            </a>
          </div>
        </div>
      </div>

      <Lightbox items={photos} index={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
    </section>
  );
}
