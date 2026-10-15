import Link from "next/link";
import Section from "@/components/pixel/Section";
import Photo from "@/components/pixel/Photo";
import { MEDIA } from "@/data/media";
import { PROJECTS } from "@/data/resume";

// Repeating bento pattern: a large feature tile, then smaller and wide tiles.
const LAYOUT = ["md:col-span-2 md:row-span-2", "", "", "", "lg:col-span-2"];

function ProjectTile({ project, feature, className }) {
  const cover = MEDIA[project.cover];
  const photoCount = project.gallery.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`px-box px-lift group relative block overflow-hidden bg-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-sun ${className}`}
    >
      <Photo src={cover?.src} alt={cover?.alt ?? project.title} fit="contain" sizes="(min-width: 1024px) 40vw, 100vw" />

      <div className="absolute left-3 right-3 top-3 flex flex-wrap items-start justify-between gap-2">
        <span className={`px-chip bg-${project.color}`}>{project.category}</span>
        {photoCount > 0 && (
          <span className="px-chip bg-paper">
            {photoCount} {photoCount === 1 ? "photo" : "photos"}
          </span>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t-[3px] border-ink bg-paper p-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.metric && <span className="px-chip bg-sun text-sm">{project.metric}</span>}
          {feature && project.highlight && <span className="px-chip bg-grape-soft text-sm">{project.highlight}</span>}
        </div>
        <h3 className={`mt-1 font-bold leading-tight ${feature ? "text-2xl" : "text-lg"}`}>{project.title}</h3>
        <p className="font-term text-lg leading-tight text-ink-soft">{project.tech.join(" · ")}</p>
        <p className={`mt-1 text-base leading-snug ${feature ? "" : "line-clamp-2"}`}>{project.summary}</p>
      </div>
    </Link>
  );
}

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Click a project for the full story, photos and links."
      accent="bg-mint"
      className="bg-mint-soft bg-dots"
    >
      <div className="grid auto-rows-[340px] gap-6 md:grid-cols-2 md:auto-rows-[320px] lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectTile key={p.slug} project={p} feature={i % LAYOUT.length === 0} className={LAYOUT[i % LAYOUT.length]} />
        ))}
      </div>
    </Section>
  );
}
