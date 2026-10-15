import Link from "next/link";
import { getAllPosts } from "@/app/lib/getPosts";
import { SectionHeader } from "@/components/pixel/Section";

export const metadata = { title: "Build Logs · Bhawish Kumar" };

export default function Blog() {
  const posts = getAllPosts().sort((a, b) => String(b.metadata.date).localeCompare(String(a.metadata.date)));

  return (
    <div className="min-h-screen border-b-4 border-ink bg-azure-soft bg-dots">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <SectionHeader
          title="Build Logs"
          subtitle="Step-by-step write-ups of how my projects were built, for juniors who learn best by seeing the process."
          accent="bg-azure"
        />
        <ol className="space-y-6">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="px-box px-lift flex gap-4 bg-paper p-5">
                <span className="font-display text-lg text-coral">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="font-display text-xl uppercase leading-relaxed sm:text-2xl">{post.metadata.title}</h2>
                  <p className="font-term text-lg text-ink-soft">{post.metadata.date}</p>
                  <p className="mt-2 text-lg leading-snug">{post.metadata.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
        <Link href="/juniors" className="px-btn mt-10 bg-paper">
          ◀ Study notes
        </Link>
      </div>
    </div>
  );
}
