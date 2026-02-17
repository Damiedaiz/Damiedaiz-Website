import Link from 'next/link';
import { siteConfig } from '@/src/config/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Damiedaiz. Systems, structure, outcomes.</p>
        <div className="flex gap-4">
          <Link href={siteConfig.calendlyUrl}>Book a Clarity Call</Link>
          <Link href={siteConfig.whatsappUrl}>WhatsApp</Link>
        </div>
      </div>
    </footer>
  );
}
