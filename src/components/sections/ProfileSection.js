import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import Section from "@/components/pixel/Section";
import Photo from "@/components/pixel/Photo";
import { MEDIA } from "@/data/media";
import { PROFILE, SKILLS } from "@/data/resume";

const languages = SKILLS.find((s) => s.group === "Natural Languages")?.items ?? [];

export default function ProfileSection() {
  const photo = MEDIA[PROFILE.photo];

  return (
    <Section id="profile" title="About" accent="bg-coral" className="bg-paper bg-dots">
      <div className="grid gap-8 md:grid-cols-[300px_1fr] lg:gap-12">
        <aside className="px-box h-fit bg-paper">
          <div className="aspect-[4/5] border-b-[3px] border-ink">
            <Photo src={photo?.src} alt={photo?.alt} />
          </div>
          <div className="space-y-3 p-4">
            <p className="font-display text-xs uppercase leading-relaxed">{PROFILE.name}</p>
            <p className="flex items-center gap-2 font-term text-lg leading-tight">
              <FiMapPin aria-label="Location" /> {PROFILE.location}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {languages.map((l) => (
                <span key={l} className="px-chip bg-sun-soft text-sm">
                  {l}
                </span>
              ))}
            </div>
            <div className="flex gap-2 pt-1">
              <a href={`mailto:${PROFILE.email}`} className="px-chip bg-paper" aria-label="Email">
                <FiMail />
              </a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="px-chip bg-paper" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="px-chip bg-paper" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          <p className="text-xl leading-relaxed">{PROFILE.summary}</p>

          <div className="px-box bg-grape-soft p-5">
            <h3 className="font-display text-[11px] uppercase leading-relaxed">Research interests</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {PROFILE.interests.map((it) => (
                <li key={it} className="flex gap-2 text-lg leading-snug">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-grape" aria-hidden />
                  {it}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {PROFILE.stats.map((s) => (
              <div key={s.label} className={`px-box-sm bg-${s.color} p-4 text-center`}>
                <p className="font-display text-xl leading-none">{s.value}</p>
                <p className="mt-2 font-term text-lg leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
