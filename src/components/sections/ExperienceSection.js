import Section from "@/components/pixel/Section";
import { EXPERIENCE } from "@/data/resume";

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" accent="bg-tangerine" className="bg-paper">
      <ol className="relative space-y-10 border-l-4 border-dashed border-ink pl-6 md:pl-10">
        {EXPERIENCE.map((job) => (
          <li key={`${job.org}-${job.role}`} className="relative">
            <span
              className={`absolute -left-[36px] top-5 h-5 w-5 border-[3px] border-ink md:-left-[52px] bg-${job.color}`}
              aria-hidden
            />

            <article className="px-box bg-paper">
              <header className={`flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-ink px-5 py-3 bg-${job.color}-soft`}>
                <div>
                  <h3 className="font-display text-2xl uppercase leading-relaxed sm:text-3xl">{job.role}</h3>
                  <p className="text-lg leading-snug">{job.org}</p>
                </div>
                <div className="text-right font-term text-lg leading-tight">
                  <p>{job.dates}</p>
                  <p className="text-ink-soft">{job.location}</p>
                </div>
              </header>
              <ul className="space-y-2 p-5">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-lg leading-snug">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-ink" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
