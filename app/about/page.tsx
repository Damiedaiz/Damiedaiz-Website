import type { Metadata } from 'next';
import { CtaButtons } from '@/components/cta-buttons';
import { PageShell } from '@/components/page-shell';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Damiedaiz, philosopher systems architect and outcome architect.'
};

export default function AboutPage() {
  return (
    <PageShell>
      <h1 className="text-4xl font-bold">About Damiedaiz</h1>
      <div className="mt-5 max-w-3xl space-y-4 text-slate-700">
        <p>
          I help entrepreneurs turn scattered effort into repeatable outcomes. My work blends practical systems design,
          clear thinking, and beginner-friendly automation.
        </p>
        <p>
          I&apos;ve built frameworks used across personal brand ecosystems and operations environments where consistency
          matters more than hype.
        </p>
        <p>
          If you want structure that survives real life, I can help you architect it from the ground up.
        </p>
      </div>
      <CtaButtons className="mt-8" />
    </PageShell>
  );
}
