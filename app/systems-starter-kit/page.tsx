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
          <h1 className="text-4xl font-bold">Get the free Systems Starter Kit</h1>
          <p className="mt-3 text-slate-700">
            A practical toolkit for entrepreneurs who want clean execution, less chaos, and better weekly outcomes.
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700">
            <li>Weekly planning template to prioritize what matters.</li>
            <li>Workflow mapping framework for one key process.</li>
            <li>Automation starter checklist for beginner-friendly implementation.</li>
          </ul>
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
