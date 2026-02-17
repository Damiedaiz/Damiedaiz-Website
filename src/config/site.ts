const fallbackDomain = 'https://example.com';

export const siteConfig = {
  name: 'Damiedaiz',
  description:
    'Philosopher Systems Architect helping entrepreneurs build structure, systems, and automation that create consistent outcomes.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN ?? fallbackDomain,
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    'https://calendly.com/damiedaiz/clarity-call',
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? 'https://wa.me/1234567890',
  starterKitUrl: '/systems-starter-kit',
  ecosystem: [
    {
      name: 'DaizSign',
      href: process.env.NEXT_PUBLIC_DAIZSIGN_URL ?? 'https://example.com/daizsign'
    },
    {
      name: 'DaizClou',
      href: process.env.NEXT_PUBLIC_DAIZCLOU_URL ?? 'https://example.com/daizclou'
    },
    {
      name: 'Smart Signage Assistant (SSA)',
      href: process.env.NEXT_PUBLIC_SSA_URL ?? 'https://example.com/ssa'
    },
    {
      name: 'OPMMA',
      href: process.env.NEXT_PUBLIC_OPMMA_URL ?? 'https://example.com/opmma'
    }
  ],
  ownerEmail: process.env.LEAD_TO_EMAIL ?? 'owner@example.com',
  leadNotification: {
    apiKey: process.env.RESEND_API_KEY ?? '',
    fromEmail:
      process.env.LEAD_FROM_EMAIL ?? 'Damiedaiz Leads <onboarding@resend.dev>',
    toEmail: process.env.LEAD_TO_EMAIL ?? 'owner@example.com'
  }
} as const;
