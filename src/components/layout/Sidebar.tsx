'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname();

  // If in active test session or examiner mode, sidebar is hidden
  if (pathname.startsWith('/test') && !pathname.startsWith('/test/result') && !pathname.startsWith('/test/review')) {
    return null;
  }
  if (pathname.startsWith('/examiner')) {
    return null;
  }

  const sections = [
    {
      label: 'Dashboard',
      code: 'DSH',
      href: '/',
      active: pathname === '/',
    },
    {
      label: 'Practice Hub',
      code: 'ALL',
      href: '/practice',
      active: pathname === '/practice',
    },
    {
      label: 'Listening',
      code: 'SEC 1',
      href: '/practice/listening',
      active: pathname.startsWith('/practice/listening'),
      badge: '50 Q',
    },
    {
      label: 'Structure',
      code: 'SEC 2',
      href: '/practice/structure',
      active: pathname.startsWith('/practice/structure'),
      badge: '60 Q',
    },
    {
      label: 'Reading',
      code: 'SEC 3',
      href: '/practice/reading',
      active: pathname.startsWith('/practice/reading'),
      badge: '10 Text',
    },
    {
      label: 'Vocabulary',
      code: 'EXTRA',
      href: '/practice/vocabulary',
      active: pathname.startsWith('/practice/vocabulary'),
      badge: '25 Q',
    },
  ];

  const tools = [
    {
      label: 'Examiner Mode',
      code: 'LIVE',
      href: '/examiner',
      active: pathname.startsWith('/examiner'),
      badge: 'Manual',
      highlight: true,
    },
    {
      label: 'Saved Vocabulary',
      code: 'VOC',
      href: '/vocabulary/bookmarks',
      active: pathname.startsWith('/vocabulary/bookmarks'),
    },
    {
      label: 'Test History',
      code: 'HST',
      href: '/history',
      active: pathname.startsWith('/history'),
    },
    {
      label: 'Analytics & Weakness',
      code: 'ANL',
      href: '/analytics',
      active: pathname.startsWith('/analytics'),
    },
    {
      label: 'Settings',
      code: 'SET',
      href: '/settings',
      active: pathname.startsWith('/settings'),
    },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-60 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-screen sticky top-0 z-30 transition-colors">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded bg-brand-600 text-white font-mono font-bold text-xs flex items-center justify-center">
            AB
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-900 dark:text-white tracking-tight text-sm">
                TOEFL Master
              </span>
              <span className="text-[9px] font-mono font-semibold uppercase px-1 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium">
              Training Platform
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        <div>
          <div className="px-2 mb-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Training Sections
          </div>
          <nav className="space-y-0.5">
            {sections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center justify-between px-2.5 py-2 rounded-md text-xs font-medium transition-colors',
                  item.active
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      'text-[9px] font-mono px-1 py-0.2 rounded border',
                      item.active
                        ? 'border-brand-300 dark:border-brand-700 bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-bold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-500'
                    )}
                  >
                    {item.code}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-mono text-slate-400">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <div className="px-2 mb-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Tools & Records
          </div>
          <nav className="space-y-0.5">
            {tools.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center justify-between px-2.5 py-2 rounded-md text-xs font-medium transition-colors',
                  item.active
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      'text-[9px] font-mono px-1 py-0.2 rounded border',
                      item.highlight
                        ? 'border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-500'
                    )}
                  >
                    {item.code}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={cn(
                      'text-[9px] font-mono px-1.5 py-0.5 rounded',
                      item.highlight
                        ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                        : 'text-slate-400'
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Examiner Mode Card */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-800">
        <div className="p-3 rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50/70 dark:bg-amber-950/20">
          <div className="flex items-center justify-between text-xs font-bold text-amber-900 dark:text-amber-300">
            <span>Examiner Screen</span>
            <span className="text-[9px] font-mono uppercase bg-amber-200 dark:bg-amber-900 px-1 rounded">
              Tab
            </span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-normal">
            Manual audio reader window for human listening proctors.
          </p>
          <Link
            href="/examiner"
            target="_blank"
            className="inline-block mt-2 text-xs font-semibold text-amber-800 dark:text-amber-300 hover:underline"
          >
            Launch Reader →
          </Link>
        </div>
      </div>
    </aside>
  );
}
