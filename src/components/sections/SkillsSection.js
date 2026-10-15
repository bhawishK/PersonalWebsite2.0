import Section from "@/components/pixel/Section";
import { CERTIFICATIONS, SKILLS } from "@/data/resume";

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills" accent="bg-leaf" className="bg-paper">
      <div className="grid gap-6 md:grid-cols-2">
        {SKILLS.map((s) => (
          <div key={s.group} className="px-box bg-paper">
            <h3 className={`border-b-[3px] border-ink px-4 py-2 font-display text-[10px] uppercase bg-${s.color}`}>
              {s.group}
            </h3>
            <ul className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3">
              {s.items.map((item) => (
                <li key={item} className={`border-2 border-ink px-2 py-1.5 text-center text-base bg-${s.color}-soft`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="px-box mt-8 bg-paper-deep p-5">
        <h3 className="font-display text-[10px] uppercase">Certifications</h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {CERTIFICATIONS.map((c) => (
            <li key={c} className="flex gap-2 text-base leading-snug">
              <span className="text-leaf [text-shadow:1px_1px_0_#1D1A2F]">✔</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
