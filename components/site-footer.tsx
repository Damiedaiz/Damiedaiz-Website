import { siteConfig } from '@/lib/site-config';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Damiedaiz. Systems, structure, outcomes.</p>
        <div className="flex gap-4">
          <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">
            Book a Clarity Call
          </a>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
