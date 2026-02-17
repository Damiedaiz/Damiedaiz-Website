import { Resend } from 'resend';
import { siteConfig } from './site-config';

export async function sendLeadNotification(payload: {
  name: string;
  email: string;
  whatsapp?: string;
  source: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log('[lead-notification:fallback]', payload);
    return;
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: process.env.LEAD_FROM_EMAIL ?? 'Damiedaiz Leads <onboarding@resend.dev>',
    to: process.env.LEAD_TO_EMAIL ?? siteConfig.ownerEmail,
    subject: `New lead from ${payload.source}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\nWhatsApp: ${payload.whatsapp ?? 'N/A'}\nSource: ${payload.source}`
  });
}
