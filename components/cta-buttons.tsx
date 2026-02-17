import Link from 'next/link';
import { siteConfig } from '@/src/config/site';

type Props = {
  className?: string;
};

export function CtaButtons({ className }: Props) {
  return (
    <div className={`flex flex-wrap gap-3 ${className ?? ''}`}>
      <Link
        href={siteConfig.calendlyUrl}
        className="rounded-lg bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand-dark"
      >
        Book a Clarity Call
      </Link>
      <Link
        href={siteConfig.starterKitUrl}
        className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:border-brand hover:text-brand"
      >
        Get the free Systems Starter Kit
      </Link>
    </div>
  );
}
