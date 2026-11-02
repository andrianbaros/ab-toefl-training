'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';
import { getStoredSettings } from '@/lib/storage';

export function Header() {
  const pathname = usePathname();
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const settings = getStoredSettings();

  // Hide header in active test session or examiner mode
  if (pathname.startsWith('/test') && !pathname.startsWith('/test/result') && !pathname.startsWith('/test/review')) {
    return null;
  }
  if (pathname.startsWith('/examiner')) {
    return null;
  }

  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Left: Brand and Target pill */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>

          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold tracking-tight text-slate-900 dark:text-white text-base">
              AB TOEFL
            </span>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              ITP
            </span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 ml-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600 dark:bg-brand-400" />
              <span>Target:</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">
                {settings.targetScore || 550}
              </span>
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/examiner"
            target="_blank"
            className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors"
          >
            Examiner Tab
          </Link>

          <Link
            href="/practice"
            className="inline-flex items-center px-3.5 py-1.5 rounded-md text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white transition-colors"
          >
            Start Practice
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {resolvedTheme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 space-y-1">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Dashboard
          </Link>
          <Link
            href="/practice"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Practice Hub
          </Link>
          <Link
            href="/practice/listening"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Section 1: Listening
          </Link>
          <Link
            href="/practice/structure"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Section 2: Structure
          </Link>
          <Link
            href="/practice/reading"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Section 3: Reading
          </Link>
          <Link
            href="/practice/vocabulary"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Vocabulary Practice
          </Link>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-2 space-y-1">
            <Link
              href="/examiner"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40"
            >
              Examiner Reader Mode
            </Link>
            <Link
              href="/history"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Practice History
            </Link>
            <Link
              href="/analytics"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Analytics
            </Link>
            <Link
              href="/vocabulary/bookmarks"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Saved Vocabulary
            </Link>
            <Link
              href="/settings"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Settings
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
