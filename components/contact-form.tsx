'use client';

import { useActionState } from 'react';
import { submitContactLead } from '@/app/actions';

const initialState = { success: false, message: '' };

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactLead, initialState);

  return (
    <form action={action} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
      <input name="name" placeholder="Name" required className="w-full rounded-md border border-slate-300 px-3 py-2" />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full rounded-md border border-slate-300 px-3 py-2"
      />
      <textarea
        name="message"
        placeholder="What are you trying to build?"
        required
        rows={5}
        className="w-full rounded-md border border-slate-300 px-3 py-2"
      />
      <button type="submit" disabled={isPending} className="rounded-lg bg-brand px-4 py-2 font-semibold text-white">
        {isPending ? 'Sending...' : 'Send message'}
      </button>
      {state.message ? <p className="text-sm text-slate-600">{state.message}</p> : null}
    </form>
  );
}
