import Link from "next/link";
import Section from "@/components/pixel/Section";
import { PROFILE, PUBLICATIONS } from "@/data/resume";

function Authors({ list }) {
  return (
    <p className="text-lg leading-snug">
      {list.map((a, i) => (
        <span key={a}>
          {a.replace("*", "").trim() === PROFILE.name ? (
            <strong className="bg-sun px-1">{a}</strong>
          ) : (
            a
          )}
          {i < list.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

export default function ResearchSection() {
  return (
    <Section
      id="research"
      title="Research & Publications"
      subtitle="Work on how machines connect language to what cameras see, plus earlier research on data governance in education."
      accent="bg-grape"
      className="bg-grape-soft bg-dots"
    >
      <ol className="space-y-8">
        {PUBLICATIONS.map((p, i) => (
          <li key={p.title} className="px-box grid bg-paper md:grid-cols-[110px_1fr]">
            <div className={`flex items-center justify-center border-b-[3px] border-ink py-4 md:border-b-0 md:border-r-[3px] bg-${p.color}`}>
              <span className="font-display text-3xl text-paper sm:text-4xl [text-shadow:3px_3px_0_#1D1A2F]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="space-y-3 p-5">
              <div className="flex flex-wrap gap-2">
                <span className="px-chip bg-ink text-paper">{p.status}</span>
                {p.note && <span className="px-chip bg-paper-deep">{p.note}</span>}
              </div>
              <h3 className="font-display text-2xl uppercase leading-relaxed sm:text-3xl">“{p.title}”</h3>
              <Authors list={p.authors} />
              <p className="font-term text-xl leading-tight text-ink-soft">{p.venue}</p>
              {p.project && (
                <Link href={`/projects/${p.project}`} className="px-btn bg-sun">
                  View project ▶
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
