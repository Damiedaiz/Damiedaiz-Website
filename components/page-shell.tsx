import { ReactNode } from 'react';

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>;
}
