import Section from "@/components/pixel/Section";
import { EDUCATION } from "@/data/resume";

function EducationCard({ ed, feature }) {
  return (
    <article className={`px-box flex flex-col bg-paper ${feature ? "lg:row-span-2" : ""}`}>
      <header className={`border-b-[3px] border-ink px-5 py-4 bg-${ed.color}`}>
        <span className="px-chip bg-paper text-sm">{ed.kind}</span>
        <h3 className={`mt-3 font-display uppercase leading-relaxed ${feature ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-xl"}`}>
          {ed.school}
        </h3>
        <p className="mt-1 font-term text-lg leading-tight">
          {ed.location} · {ed.dates}
        </p>
      </header>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className={`font-semibold leading-snug ${feature ? "text-2xl" : "text-xl"}`}>{ed.degree}</p>
            {ed.concentration && <p className="text-lg text-ink-soft">{ed.concentration}</p>}
          </div>
          {ed.gpa && (
            <div className={`px-box-sm px-3 py-2 text-center bg-${ed.color}-soft`}>
              <p className="font-display text-xl leading-none sm:text-2xl">{ed.gpa}</p>
              <p className="mt-1 font-term text-base leading-none">{ed.gpaLabel}</p>
            </div>
          )}
        </div>

        {ed.honors.length > 0 && (
          <div className={feature ? "mt-auto" : ""}>
            {feature && <h4 className="font-display text-base uppercase sm:text-lg">Honors</h4>}
            <ul className={`flex flex-wrap gap-2 ${feature ? "mt-3" : ""}`}>
              {ed.honors.map((h) => (
                <li key={h} className={`px-box-sm px-3 py-1.5 text-base leading-snug ${feature ? "bg-sun-soft" : "bg-sun"}`}>
                  ★ {h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}

export default function EducationSection() {
  const [main, ...rest] = EDUCATION;
  return (
    <Section id="education" title="Education" accent="bg-azure" className="bg-azure-soft">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <EducationCard ed={main} feature />
        {rest.map((ed) => (
          <EducationCard key={ed.school} ed={ed} />
        ))}
      </div>
    </Section>
  );
}
