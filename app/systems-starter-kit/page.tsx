import type { Metadata } from 'next';
import { PageShell } from '@/components/page-shell';
import { StarterKitForm } from '@/components/starter-kit-form';

export const metadata: Metadata = {
  title: 'Systems Starter Kit',
  description: 'Get the free starter kit to build structure, consistency, and automation in your business.'
};

export default function SystemsStarterKitPage() {
  return (
    <PageShell>
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <section>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Free resource</p>
          <h1 className="mt-2 text-4xl font-bold">Get the free Systems Starter Kit</h1>
          <p className="mt-3 text-slate-700">
            A practical implementation pack for entrepreneurs who want less chaos, stronger execution, and reliable
            weekly output.
          </p>

          <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700">
            <li>Weekly planning template to focus on outcome-driving tasks.</li>
            <li>Workflow mapping framework to remove execution friction.</li>
            <li>Automation starter checklist to avoid tool overwhelm.</li>
            <li>Fast-start guide: what to do in your first 48 hours.</li>
          </ul>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold">What happens after you opt in</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
              <li>You get the starter kit in your inbox.</li>
              <li>You implement one workflow immediately.</li>
              <li>You can book a clarity call for a custom plan.</li>
            </ol>
          </div>

          <div className="mt-6 space-y-3">
            <blockquote className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600">
              “I finally stopped guessing and built a system I can run every week.”
            </blockquote>
            <blockquote className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600">
              “This gave me immediate structure and clarity.”
            </blockquote>
          </div>
        </section>
        <StarterKitForm />
      </div>
    </PageShell>
  );
}
