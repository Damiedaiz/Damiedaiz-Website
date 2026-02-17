import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { PageShell } from '@/components/page-shell';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach out to Damiedaiz for systems architecture and automation support.'
};

export default function ContactPage() {
  return (
    <PageShell>
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-3 max-w-2xl text-slate-700">Tell me what you are building and where you are stuck.</p>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <ContactForm />
        <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Direct options</h2>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="block text-brand underline">
            Chat on WhatsApp
          </a>
          <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer" className="block text-brand underline">
            Book a Clarity Call
          </a>
        </div>
      </div>
    </PageShell>
  );
}
