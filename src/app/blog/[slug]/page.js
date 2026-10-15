import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/app/lib/getPosts";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const { metadata, content } = getPostBySlug(slug);
  const processed = await remark().use(html).process(content);

  return (
    <div className="min-h-screen border-b-4 border-ink bg-azure-soft bg-dots">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link href="/blog" className="px-chip bg-paper">
          ◀ All build logs
        </Link>
        <article className="px-box mt-8 bg-paper">
          <header className="border-b-[3px] border-ink bg-sun px-6 py-5">
            <h1 className="font-display text-base uppercase leading-relaxed sm:text-xl">{metadata.title}</h1>
            <p className="mt-2 font-term text-xl">{metadata.date}</p>
          </header>
          <div
            className="prose prose-lg max-w-none px-6 py-8 prose-headings:font-display prose-headings:text-sm prose-headings:uppercase prose-headings:leading-relaxed prose-headings:text-ink prose-p:text-ink prose-li:text-ink prose-strong:text-ink"
            dangerouslySetInnerHTML={{ __html: processed.toString() }}
          />
        </article>
      </div>
    </div>
  );
}
