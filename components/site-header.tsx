import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/start-here', label: 'Start Here' },
  { href: '/work-with-me', label: 'Work With Me' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold">
          Damiedaiz
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-slate-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
