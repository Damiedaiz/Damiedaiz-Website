# Damiedaiz Lead Generation Website

Production-ready personal brand site built with Next.js App Router, TypeScript, Tailwind CSS, and MDX blog content. Designed for lead generation around two CTAs:

- **Primary:** Book a Clarity Call
- **Secondary:** Get the free Systems Starter Kit

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- MDX blog files from `content/posts`
- Server Actions for forms
- Resend email notification integration with environment variables

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Vercel Deployment Setup

The app is safe to build even if no environment variables are configured. Every value has a fallback in `src/config/site.ts`.

### Required env vars

None are strictly required for a successful Vercel build or deployment.

### Optional env vars

| Variable | Example value | Where used |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_DOMAIN` | `https://damiedaiz.com` | Canonical/SEO URLs in metadata, `robots`, and sitemap generation. |
| `NEXT_PUBLIC_CALENDLY_URL` | `https://calendly.com/damiedaiz/clarity-call` | CTA links (header/footer/pages). |
| `NEXT_PUBLIC_WHATSAPP_URL` | `https://wa.me/15551234567` | Contact and footer WhatsApp links. |
| `NEXT_PUBLIC_DAIZSIGN_URL` | `https://daizsign.com` | Ecosystem link on home page. |
| `NEXT_PUBLIC_DAIZCLOU_URL` | `https://daizclou.com` | Ecosystem link on home page. |
| `NEXT_PUBLIC_SSA_URL` | `https://ssa.example.com` | Ecosystem link on home page. |
| `NEXT_PUBLIC_OPMMA_URL` | `https://opmma.example.com` | Ecosystem link on home page. |
| `RESEND_API_KEY` | `re_xxxxxxxxx` | Server-side email provider key for lead notifications. |
| `LEAD_FROM_EMAIL` | `Damiedaiz Leads <onboarding@resend.dev>` | Sender email for notification emails. |
| `LEAD_TO_EMAIL` | `owner@example.com` | Inbox for lead notifications and fallback owner email. |

### Deploy to Vercel

1. Push repository to GitHub.
2. Import the repo into Vercel.
3. (Optional) Add any environment variables from `.env.example`.
4. Deploy.

## Content and config

- Centralized app configuration: `src/config/site.ts`
- Blog posts: `content/posts/*.mdx`
- Lead forms:
  - Systems Starter Kit: `/systems-starter-kit`
  - Contact: `/contact`

## Upgrade path

- Swap `sendLeadNotification` implementation to persistent DB or CRM.
- Replace `AnalyticsPlaceholder` with Vercel Analytics component.
