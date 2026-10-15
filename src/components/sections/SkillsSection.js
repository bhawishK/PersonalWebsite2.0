import Section from "@/components/pixel/Section";
import { SKILLS } from "@/data/resume";

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills" accent="bg-leaf" className="bg-paper">
      <div className="grid gap-6 md:grid-cols-2">
        {SKILLS.map((s) => (
          <div key={s.group} className="px-box bg-paper">
            <h3 className={`border-b-[3px] border-ink px-4 py-3 font-display text-2xl uppercase leading-relaxed sm:text-3xl bg-${s.color}`}>
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
    </Section>
  );
}
