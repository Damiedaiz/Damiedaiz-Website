import type { Metadata } from 'next';
import Link from 'next/link';
import { CtaButtons } from '@/components/cta-buttons';
import { PageShell } from '@/components/page-shell';

export const metadata: Metadata = {
  title: 'Start Here',
  description: 'A clear guided path to build your first reliable business systems.'
};

export default function StartHerePage() {
  return (
    <PageShell>
      <h1 className="text-4xl font-bold">Start Here</h1>
      <p className="mt-3 max-w-3xl text-slate-700">
        If you feel overwhelmed by tools, inconsistent execution, or unclear priorities, follow this simple path and
        start seeing traction quickly.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          '1) Get the free Systems Starter Kit and set up your weekly planning rhythm.',
          '2) Apply one workflow map to your lead generation or delivery process.',
          '3) Book a clarity call when you need a custom architecture plan.'
        ].map((item) => (
          <div key={item} className="rounded-xl border border-slate-200 bg-white p-4">
            {item}
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold">Recommended reads</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          <li>
            <Link href="/blog/design-systems-that-scale" className="hover:text-brand">
              Design Systems That Scale from Day One
            </Link>
          </li>
          <li>
            <Link href="/blog/automation-for-beginners" className="hover:text-brand">
              Automation for Beginners: Start with One Loop
            </Link>
          </li>
        </ul>
      </div>
      <CtaButtons className="mt-8" />
    </PageShell>
  );
}
