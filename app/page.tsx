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
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
          Turn scattered effort into a system that consistently produces leads, delivery, and growth.
        </h1>
        <p className="max-w-3xl text-lg text-slate-700">
          I help entrepreneurs and beginners install clear workflows, weekly operating rhythms, and practical
          automation so progress stops depending on motivation.
        </p>
        <CtaButtons />
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-3 py-1">Beginner-friendly execution</span>
          <span className="rounded-full bg-white px-3 py-1">Actionable in 1 week</span>
          <span className="rounded-full bg-white px-3 py-1">No fluff, no tool overload</span>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold">Client wins</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            {
              name: 'Service Founder',
              result: 'Replaced reactive work with a weekly execution system and cut missed deadlines by 60%.'
            },
            {
              name: 'Beginner Creator',
              result: 'Built a simple lead workflow and booked first 5 discovery calls in 30 days.'
            },
            {
              name: 'Small Team Operator',
              result: 'Documented SOPs + automation handoffs that saved 8+ hours every week.'
            }
          ].map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold">{item.name}</p>
              <p className="mt-2 text-sm text-slate-600">{item.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold">What I help with</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            'Design a business operating system you can run weekly',
            'Map and simplify workflows before adding tools',
            'Build delivery and offer systems that scale cleanly',
            'Install decision frameworks to reduce bottlenecks'
          ].map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-4 font-medium">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-bold">New here? Start in this order:</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Download the Systems Starter Kit and implement one workflow this week.</li>
          <li>Read one insight article and apply one change immediately.</li>
          <li>Book a clarity call when you want a custom architecture plan.</li>
        </ol>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold">Ecosystem</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {siteConfig.ecosystem.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-4 hover:border-brand"
            >
              {item.name}
            </a>
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
        <h2 className="text-2xl font-bold">Ready for cleaner execution and better outcomes?</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Choose your next step: start free with the kit, or get direct strategic support on a clarity call.
        </p>
        <CtaButtons className="mt-5" />
      </section>
    </PageShell>
  );
}
