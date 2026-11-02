'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const pathname = usePathname();

  // Hide in active test session or examiner mode
  if (pathname.startsWith('/test') && !pathname.startsWith('/test/result') && !pathname.startsWith('/test/review')) {
    return null;
  }
  if (pathname.startsWith('/examiner')) {
    return null;
  }

  const items = [
    { label: 'Dashboard', code: 'HOME', href: '/', active: pathname === '/' },
    { label: 'Practice', code: 'PRAC', href: '/practice', active: pathname.startsWith('/practice') },
    { label: 'Examiner', code: 'EXAM', href: '/examiner', active: pathname.startsWith('/examiner') },
    { label: 'History', code: 'HIST', href: '/history', active: pathname.startsWith('/history') },
    { label: 'Settings', code: 'SET', href: '/settings', active: pathname.startsWith('/settings') },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-2 transition-colors">
      <div className="flex items-center justify-around">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center py-1 px-2 rounded text-xs transition-colors',
              item.active
                ? 'text-brand-600 dark:text-brand-400 font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            )}
          >
            <span className="text-[10px] font-mono">{item.code}</span>
            <span className="text-[11px] font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
