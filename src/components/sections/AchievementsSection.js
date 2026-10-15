import Section from "@/components/pixel/Section";
import Photo from "@/components/pixel/Photo";
import { MEDIA } from "@/data/media";
import { ACHIEVEMENTS } from "@/data/resume";

export default function AchievementsSection() {
  return (
    <Section id="achievements" title="Achievements" accent="bg-sun" className="bg-sun-soft">
      <div className="grid gap-8 md:grid-cols-3">
        {ACHIEVEMENTS.map((a) => {
          const img = MEDIA[a.media];
          return (
            <article key={a.title} className="px-box flex flex-col bg-paper">
              <div className="relative h-48 border-b-[3px] border-ink">
                <Photo src={img?.src} alt={img?.alt ?? a.title} />
                <span className={`px-chip absolute left-2 top-2 bg-${a.color}`}>{a.date}</span>
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-xl font-bold leading-tight">{a.title}</h3>
                {a.where && <p className="font-term text-lg leading-tight text-ink-soft">{a.where}</p>}
                <p className="text-base leading-snug">{a.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
