import { Resend } from 'resend';
import { siteConfig } from '@/src/config/site';

export async function sendLeadNotification(payload: {
  name: string;
  email: string;
  whatsapp?: string;
  source: string;
}) {
  if (!siteConfig.leadNotification.apiKey) {
    console.log('[lead-notification:fallback:no-api-key]', payload);
    return { delivered: false, reason: 'missing-api-key' } as const;
  }

  try {
    const resend = new Resend(siteConfig.leadNotification.apiKey);

    await resend.emails.send({
      from: siteConfig.leadNotification.fromEmail,
      to: siteConfig.leadNotification.toEmail,
      subject: `New lead from ${payload.source}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\nWhatsApp: ${payload.whatsapp ?? 'N/A'}\nSource: ${payload.source}`
    });

    return { delivered: true } as const;
  } catch (error) {
    console.error('[lead-notification:error]', error);
    console.log('[lead-notification:fallback:logged-payload]', payload);
    return { delivered: false, reason: 'provider-error' } as const;
  }
}
