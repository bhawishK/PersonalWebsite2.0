import Link from "next/link";
import Section from "@/components/pixel/Section";
import { STUDY_NOTES } from "@/data/resume";

const LEVELS = { 1: "Beginner", 2: "Intermediate", 3: "Advanced" };

function Difficulty({ level }) {
  return (
    <span className="flex items-center gap-1" aria-label={`Difficulty: ${LEVELS[level]}`}>
      {[1, 2, 3].map((n) => (
        <span key={n} className={`h-3 w-3 border-2 border-ink ${n <= level ? "bg-coral" : "bg-paper"}`} />
      ))}
      <span className="ml-1 font-term text-lg leading-none">{LEVELS[level]}</span>
    </span>
  );
}

export default function JuniorsSection() {
  const notes = [...STUDY_NOTES].sort((a, b) => a.level - b.level);

  return (
    <Section
      id="juniors"
      title="For Juniors"
      subtitle="Interested in software development but not sure where to start? These are the notes I wish I had as a first-year. Free to download, ordered from easiest to hardest."
      accent="bg-azure"
      className="bg-azure-soft bg-dots"
    >
      <ol className="grid gap-6 md:grid-cols-2">
        {notes.map((n, i) => (
          <li key={n.topic} className="px-box px-lift flex flex-col bg-paper">
            <div className={`flex items-center justify-between border-b-[3px] border-ink px-4 py-2 bg-${n.color}`}>
              <span className="font-display text-[10px] uppercase">Step {i + 1}</span>
              <span className="font-term text-lg">{n.subject}</span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-2xl font-bold leading-tight">{n.topic}</h3>
              <Difficulty level={n.level} />
              <p className="text-lg leading-snug text-ink-soft">{n.summary}</p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="font-term text-lg text-ink-soft">Updated {n.updatedAt}</span>
                <a href={n.pdf} download className="px-btn bg-sun">
                  ↓ PDF
                </a>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="px-box mt-10 flex flex-col items-start justify-between gap-4 bg-paper p-5 sm:flex-row sm:items-center">
        <p className="text-lg leading-snug">
          Want to see how projects get built step by step? Read the build logs, or email me your questions.
        </p>
        <Link href="/blog" className="px-btn shrink-0 bg-mint">
          Build logs ▶
        </Link>
      </div>
    </Section>
  );
}
