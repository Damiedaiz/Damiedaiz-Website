'use server';

import { redirect } from 'next/navigation';
import { sendLeadNotification } from '@/lib/email';
import { LeadFormState } from '@/lib/types';

function sanitize(input: FormDataEntryValue | null) {
  return String(input ?? '').trim();
}

export async function submitStarterKitLead(
  _: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = sanitize(formData.get('name'));
  const email = sanitize(formData.get('email'));
  const whatsapp = sanitize(formData.get('whatsapp'));

  if (!name || !email) {
    return { success: false, message: 'Please provide your name and email.' };
  }

  await sendLeadNotification({
    name,
    email,
    whatsapp,
    source: 'systems-starter-kit'
  });

  redirect('/thank-you');
  return { success: true, message: 'Submitted.' };
}

export async function submitContactLead(_: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const name = sanitize(formData.get('name'));
  const email = sanitize(formData.get('email'));
  const message = sanitize(formData.get('message'));

  if (!name || !email || !message) {
    return { success: false, message: 'Please fill every required field.' };
  }

  await sendLeadNotification({
    name,
    email,
    source: 'contact-form',
    whatsapp: `Message: ${message}`
  });

  return { success: true, message: 'Thanks. Your message has been sent.' };
}
