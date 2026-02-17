import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thanks for requesting the Systems Starter Kit.'
};

export default function ThankYouPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <h1 className="text-4xl font-bold">You&apos;re in.</h1>
        <p className="mt-3 text-slate-700">Check your inbox for next steps. Then book your clarity call to build your custom system.</p>
        <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-lg bg-brand px-5 py-3 font-semibold text-white">
          Book a Clarity Call
        </a>
      </section>
    </PageShell>
  );
}
