'use client';

import { useActionState } from 'react';
import { submitStarterKitLead } from '@/app/actions';

const initialState = { success: false, message: '' };

export function StarterKitForm() {
  const [state, formAction, isPending] = useActionState(submitStarterKitLead, initialState);

  return (
    <form action={formAction} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Get instant access</h2>
        <p className="text-sm text-slate-600">Drop your details and I&apos;ll send the kit to your inbox.</p>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Your first name"
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Best email
        </label>
        <input
          id="email"
          name="email"
          required
          type="email"
          placeholder="you@company.com"
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="mb-1 block text-sm font-medium">
          WhatsApp (optional)
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          placeholder="+234..."
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-slate-600">
        <input type="checkbox" name="consent" value="yes" required className="mt-1" />
        <span>I agree to receive the starter kit and follow-up implementation emails. Unsubscribe anytime.</span>
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-brand px-4 py-3 font-semibold text-white disabled:opacity-60"
      >
        {isPending ? 'Submitting...' : 'Send me the Systems Starter Kit'}
      </button>

      <p className="text-xs text-slate-500">No spam. Just practical systems and execution advice.</p>

      {state.message ? (
        <p role="status" aria-live="polite" className="text-sm text-slate-700">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
