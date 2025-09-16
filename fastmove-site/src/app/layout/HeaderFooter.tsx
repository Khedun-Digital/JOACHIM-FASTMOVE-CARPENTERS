import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getConfig } from '@/lib/config';

type Props = { children: React.ReactNode };

export function HeaderFooter({ children }: Props): JSX.Element {
  const { site } = getConfig();
  return (
    <div className="min-h-full flex flex-col">
      <header className="border-b bg-white/70 supports-[backdrop-filter]:backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-slate-900">
            {site.title}
          </Link>
          <nav className="flex gap-4 text-slate-700">
            {site.nav.map((n) => (
              <NavLink
                key={n.path}
                to={n.path}
                className={({ isActive }) =>
                  `px-2 py-1 rounded-md hover:text-slate-900 ${isActive ? 'text-slate-900 font-medium' : ''}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} {site.title}. All rights reserved.
      </footer>
    </div>
  );
}

