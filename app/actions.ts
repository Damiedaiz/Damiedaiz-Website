'use server';

import { redirect } from 'next/navigation';
import { sendLeadNotification } from '@/lib/email';
import { LeadFormState } from '@/lib/types';

function sanitize(input: FormDataEntryValue | null) {
  return String(input ?? '').trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitStarterKitLead(
  _: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = sanitize(formData.get('name'));
  const email = sanitize(formData.get('email'));
  const whatsapp = sanitize(formData.get('whatsapp'));
  const consent = sanitize(formData.get('consent'));
  const website = sanitize(formData.get('website'));

  if (website) {
    return { success: false, message: 'Submission blocked. Please try again.' };
  }

  if (!name || !email) {
    return { success: false, message: 'Please provide your name and email.' };
  }

  if (!isValidEmail(email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  if (consent !== 'yes') {
    return { success: false, message: 'Please confirm consent so I can send the starter kit.' };
  }

  await sendLeadNotification({
    name,
    email,
    whatsapp,
    source: 'systems-starter-kit'
  });

  redirect('/thank-you');
}

export async function submitContactLead(_: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const name = sanitize(formData.get('name'));
  const email = sanitize(formData.get('email'));
  const message = sanitize(formData.get('message'));
  const website = sanitize(formData.get('website'));

  if (website) {
    return { success: false, message: 'Submission blocked. Please try again.' };
  }

  if (!name || !email || !message) {
    return { success: false, message: 'Please fill every required field.' };
  }

  if (!isValidEmail(email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  await sendLeadNotification({
    name,
    email,
    source: 'contact-form',
    whatsapp: `Message: ${message}`
  });

  return { success: true, message: 'Message received. We will reply within 1 business day.' };
}
