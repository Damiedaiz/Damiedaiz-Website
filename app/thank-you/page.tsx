import type { Metadata } from 'next';
import Link from 'next/link';
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
        <p className="mt-3 text-slate-700">
          Check your inbox for the starter kit. Your next best step is to book a clarity call so we can tailor a system
          to your exact stage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-lg bg-brand px-5 py-3 font-semibold text-white"
          >
            Book a Clarity Call
          </a>
          <Link
            href={siteConfig.starterKitUrl}
            className="inline-block rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800"
          >
            Back to Starter Kit page
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
