'use client';

import { useActionState } from 'react';
import { submitStarterKitLead } from '@/app/actions';

const initialState = { success: false, message: '' };

export function StarterKitForm() {
  const [state, formAction, isPending] = useActionState(submitStarterKitLead, initialState);

  return (
    <form action={formAction} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input id="name" name="name" required className="w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          required
          type="email"
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="whatsapp" className="mb-1 block text-sm font-medium">
          WhatsApp (optional)
        </label>
        <input id="whatsapp" name="whatsapp" className="w-full rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-brand px-4 py-3 font-semibold text-white disabled:opacity-60"
      >
        {isPending ? 'Submitting...' : 'Get the free Systems Starter Kit'}
      </button>
      {state.message ? <p className="text-sm text-slate-600">{state.message}</p> : null}
    </form>
  );
}
