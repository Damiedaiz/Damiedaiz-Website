import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/page-shell';
import { getAllPostsMeta } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on systems, structure, and automation for entrepreneurs.'
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <PageShell>
      <h1 className="text-4xl font-bold">Insights</h1>
      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">{post.date}</p>
            <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold hover:text-brand">
              {post.title}
            </Link>
            <p className="mt-2 text-slate-700">{post.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
