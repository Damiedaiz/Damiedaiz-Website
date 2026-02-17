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

## Environment variables

Copy `.env.example` to `.env.local` and fill values:

- `RESEND_API_KEY` - Optional. If absent, submissions log to server output.
- `LEAD_FROM_EMAIL` - Sender address for notification emails.
- `LEAD_TO_EMAIL` - Inbox to receive leads.

## Deploy to Vercel

1. Push repository to GitHub.
2. Import into Vercel.
3. Set environment variables in project settings.
4. Deploy.

## Content and config

- Centralized brand and link config: `lib/site-config.ts`
- Blog posts: `content/posts/*.mdx`
- Lead forms:
  - Systems Starter Kit: `/systems-starter-kit`
  - Contact: `/contact`

## Upgrade path

- Swap `sendLeadNotification` implementation to persistent DB or CRM.
- Replace `AnalyticsPlaceholder` with Vercel Analytics component.
