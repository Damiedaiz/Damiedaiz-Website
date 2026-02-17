import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/page-shell';
import { getAllPostsMeta, getPostBySlug, getRelatedPosts } from '@/lib/blog';

export async function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPostsMeta().find((entry) => entry.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exists = getAllPostsMeta().some((entry) => entry.slug === slug);

  if (!exists) {
    notFound();
  }

  const { meta, content, readingTime } = await getPostBySlug(slug);
  const related = getRelatedPosts(slug, meta.tags);

  return (
    <PageShell>
      <article className="rounded-xl border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-500">
          {meta.date} · {readingTime} min read · {meta.author}
        </p>
        <h1 className="mt-2 text-4xl font-bold">{meta.title}</h1>
        <div className="prose-custom mt-8">{content}</div>
      </article>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Related posts</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {related.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand">
              <p className="font-semibold">{post.title}</p>
              <p className="mt-2 text-sm text-slate-600">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
