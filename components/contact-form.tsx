'use client';

import { useActionState } from 'react';
import { submitContactLead } from '@/app/actions';

const initialState = { success: false, message: '' };

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactLead, initialState);

  return (
    <form action={action} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Tell me your bottleneck</h2>
        <p className="text-sm text-slate-600">Share context and I&apos;ll reply with clear next steps.</p>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium">
          What are you building, and where are you stuck?
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Example: I'm building a service business and need a weekly system for leads and delivery."
          required
          rows={5}
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>

      <button type="submit" disabled={isPending} className="rounded-lg bg-brand px-4 py-2 font-semibold text-white">
        {isPending ? 'Sending...' : 'Send message'}
      </button>

      {state.message ? (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${state.success ? 'text-emerald-700' : 'text-rose-700'}`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
