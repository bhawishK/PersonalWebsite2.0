import Section from "@/components/pixel/Section";
import { EDUCATION } from "@/data/resume";

export default function EducationSection() {
  return (
    <Section id="education" title="Education" accent="bg-azure" className="bg-azure-soft">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        {EDUCATION.map((ed) => (
          <article key={ed.school} className="px-box flex flex-col bg-paper">
            <header className={`border-b-[3px] border-ink px-5 py-4 bg-${ed.color}`}>
              <h3 className="font-display text-[11px] uppercase leading-relaxed sm:text-xs">{ed.school}</h3>
              <p className="mt-1 font-term text-lg leading-tight">
                {ed.location} · {ed.dates}
              </p>
            </header>

            <div className="flex flex-1 flex-col gap-4 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xl font-semibold leading-snug">{ed.degree}</p>
                  {ed.concentration && <p className="text-lg text-ink-soft">{ed.concentration}</p>}
                </div>
                <div className={`px-box-sm px-3 py-2 text-center bg-${ed.color}-soft`}>
                  <p className="font-display text-sm leading-none">{ed.gpa}</p>
                  <p className="mt-1 font-term text-base leading-none">{ed.gpaLabel}</p>
                </div>
              </div>

              {ed.honors.length > 0 && (
                <div>
                  <h4 className="font-display text-[10px] uppercase">Honors</h4>
                  <ul className="mt-3 space-y-2">
                    {ed.honors.map((h) => (
                      <li key={h} className="flex gap-3 text-lg leading-snug">
                        <span className="mt-2 h-2 w-2 shrink-0 bg-sun ring-2 ring-ink" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
