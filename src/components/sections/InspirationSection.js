import { INSPIRATION } from "@/data/resume";

export default function InspirationSection() {
  return (
    <section id="inspiration" className="scroll-mt-16 border-b-4 border-ink bg-grape-soft py-16 md:py-20">
      <figure className="px-box mx-auto flex max-w-4xl flex-col items-center gap-6 bg-paper p-6 sm:flex-row sm:p-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={INSPIRATION.image}
          alt={INSPIRATION.name}
          className="h-40 w-40 shrink-0 border-[3px] border-ink object-cover shadow-px-sm"
        />
        <div>
          <p className="font-display text-[10px] uppercase text-grape">My inspiration</p>
          <blockquote className="mt-3 text-2xl leading-snug md:text-3xl">“{INSPIRATION.text}”</blockquote>
          <figcaption className="mt-3 text-lg">
            <span className="font-semibold">{INSPIRATION.name}</span>
            <span className="font-term text-xl text-ink-soft"> · {INSPIRATION.note}</span>
          </figcaption>
        </div>
      </figure>
    </section>
  );
}
