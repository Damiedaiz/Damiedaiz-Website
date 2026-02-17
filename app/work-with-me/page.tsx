import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Work With Me',
  description: 'Choose the support level that fits your stage: DIY, DWY, or DFY.'
};

const offers = [
  {
    name: 'DIY',
    outcomes: 'Build your core operating system with templates and clear implementation steps.',
    forWho: 'Founders who want to execute independently.',
    deliverables: ['Systems Starter Kit', 'Implementation checklist', 'Weekly planning dashboard']
  },
  {
    name: 'DWY',
    outcomes: 'Design your systems with me in guided sessions and accountability loops.',
    forWho: 'Entrepreneurs who need structure and feedback.',
    deliverables: ['Strategy calls', 'Workflow mapping', '90-day execution roadmap']
  },
  {
    name: 'DFY',
    outcomes: 'Install and optimize your operations stack for predictable growth.',
    forWho: 'Teams ready to delegate full systems architecture.',
    deliverables: ['End-to-end systems design', 'Automation setup', 'SOP documentation']
  }
];

export default function WorkWithMePage() {
  return (
    <PageShell>
      <h1 className="text-4xl font-bold">Work With Me</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        Choose the support level that matches your stage. Every option is designed to help you execute consistently,
        reduce bottlenecks, and produce outcomes you can measure.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {offers.map((offer) => (
          <article key={offer.name} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-2xl font-semibold">{offer.name}</h2>
            <p className="mt-3 text-slate-700">{offer.outcomes}</p>
            <p className="mt-3 text-sm text-slate-600">
              <span className="font-semibold">Who it&apos;s for:</span> {offer.forWho}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {offer.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-lg bg-brand px-4 py-2 font-semibold text-white"
            >
              Book a Clarity Call
            </a>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
