import Link from 'next/link';
import { CtaButtons } from '@/components/cta-buttons';
import { PageShell } from '@/components/page-shell';
import { getAllPostsMeta } from '@/lib/blog';
import { siteConfig } from '@/lib/site-config';

export default function HomePage() {
  const posts = getAllPostsMeta().slice(0, 3);

  return (
    <PageShell>
      <section className="space-y-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">Philosopher Systems Architect</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
          Build systems that create predictable outcomes in your business.
        </h1>
        <p className="max-w-2xl text-lg text-slate-700">
          I help entrepreneurs and beginners design practical operating systems, workflows, and automation that make
          growth easier and more consistent.
        </p>
        <CtaButtons />
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold">Social proof</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {['Founder A', 'Creator B', 'Operator C'].map((item) => (
            <article key={item} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold">{item}</p>
              <p className="mt-2 text-sm text-slate-600">“Placeholder testimonial showing measured outcomes.”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold">What I help with</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            'Business operating systems',
            'Automation mapping',
            'Offer structure and delivery',
            'Decision-making frameworks'
          ].map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-4 font-medium">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold">Ecosystem</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {siteConfig.ecosystem.map((item) => (
            <Link key={item.name} href={item.href} className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand">
              {item.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold">Featured insights</h2>
        <div className="mt-5 space-y-4">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">{post.date}</p>
              <Link href={`/blog/${post.slug}`} className="mt-1 block text-lg font-semibold hover:text-brand">
                {post.title}
              </Link>
              <p className="text-sm text-slate-600">{post.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-bold">Ready to install structure in your business?</h2>
        <p className="mt-2 text-slate-300">Start with the call, or grab the kit and implement immediately.</p>
        <CtaButtons className="mt-5" />
      </section>
    </PageShell>
  );
}
