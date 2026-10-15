import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiFileText } from "react-icons/fi";
import Photo from "@/components/pixel/Photo";
import { MEDIA } from "@/data/media";
import { PROJECTS } from "@/data/resume";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  return { title: project ? `${project.title} · Bhawish Kumar` : "Project · Bhawish Kumar" };
}

const LINK_META = {
  github: { label: "GitHub", Icon: FaGithub },
  demo: { label: "Live demo", Icon: FiExternalLink },
  paper: { label: "Paper", Icon: FiFileText },
};

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const cover = MEDIA[project.cover];
  const gallery = project.gallery
    .map((g) => MEDIA[g.media] && { ...MEDIA[g.media], caption: g.caption ?? MEDIA[g.media].caption })
    .filter(Boolean);
  const links = Object.entries(project.links ?? {}).filter(([, url]) => url);

  return (
    <article className="min-h-screen border-b-4 border-ink bg-paper">
      <div className="relative h-[55vh] min-h-[360px] border-b-4 border-ink">
        <Photo src={cover?.src} alt={cover?.alt ?? project.title} sizes="100vw" priority fit="contain" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-5xl px-4 pb-6 sm:px-6">
            <div className="px-box inline-block max-w-3xl bg-paper p-5">
              <span className={`px-chip bg-${project.color}`}>{project.category}</span>
              <h1 className="mt-3 font-display text-2xl uppercase leading-relaxed sm:text-3xl md:text-4xl">{project.title}</h1>
              <p className="mt-1 font-term text-xl leading-tight text-ink-soft">{project.tech.join(" · ")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">
        <Link href="/projects" className="px-chip bg-paper">
          ◀ All projects
        </Link>

        <section className="mt-8 grid gap-8 md:grid-cols-[1fr_260px]">
          <div className="space-y-8">
            <p className="text-2xl leading-snug">{project.summary}</p>
            <ul className="space-y-3">
              {project.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-lg leading-snug">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-ink" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
            {project.details.length > 0 && (
              <div className="space-y-4 text-lg leading-relaxed">
                {project.details.map((d) => (
                  <p key={d}>{d}</p>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-4">
            {(project.metric || project.highlight) && (
              <div className={`px-box space-y-2 p-4 bg-${project.color}-soft`}>
                {project.metric && <p className="font-display text-lg uppercase leading-relaxed sm:text-xl">{project.metric}</p>}
                {project.highlight && <p className="text-lg leading-snug">{project.highlight}</p>}
              </div>
            )}
            {links.length > 0 && (
              <ul className="space-y-2">
                {links.map(([key, url]) => {
                  const { label, Icon } = LINK_META[key] ?? { label: key, Icon: FiExternalLink };
                  return (
                    <li key={key}>
                      <a href={url} target="_blank" rel="noopener noreferrer" className="px-btn w-full bg-sun">
                        <Icon aria-hidden /> {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </aside>
        </section>

        {gallery.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-2xl uppercase leading-relaxed sm:text-3xl">Gallery</h2>
            <div className="mt-5 grid auto-rows-[220px] gap-4 sm:grid-cols-2 sm:auto-rows-[260px]">
              {gallery.map((g, i) => (
                <figure
                  key={`${g.src}-${i}`}
                  className={`px-box relative overflow-hidden bg-paper ${i === 0 && gallery.length % 2 === 1 ? "sm:col-span-2" : ""}`}
                >
                  <Photo src={g.src} alt={g.alt} />
                  {g.caption && (
                    <figcaption className="absolute bottom-0 left-0 border-r-[3px] border-t-[3px] border-ink bg-paper px-3 py-1 font-term text-lg">
                      {g.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        <div className="mt-14 flex justify-end">
          <Link href={`/projects/${next.slug}`} className="px-btn bg-paper">
            Next: {next.title.length > 28 ? `${next.title.slice(0, 28)}…` : next.title} ▶
          </Link>
        </div>
      </div>
    </article>
  );
}
