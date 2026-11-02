'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TestMode } from '@/types';
import { createSectionSession } from '@/data/questionBank';
import { saveActiveSession, getBookmarks } from '@/lib/storage';

export default function VocabularyPracticePage() {
  const router = useRouter();
  const [mode, setMode] = useState<TestMode>('timed');
  const [questionCount, setQuestionCount] = useState<number>(20);
  const bookmarks = getBookmarks();

  const handleStart = () => {
    const session = createSectionSession('vocabulary', questionCount, mode);
    saveActiveSession(session);
    router.push('/test');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
            [SUPPLEMENTARY PRACTICE]
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
            Vocabulary Practice
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Latihan sinonim, antonim, makna dalam konteks, dan kartu flashcards interaktif.
          </p>
        </div>

        <Link
          href="/vocabulary/bookmarks"
          className="inline-flex items-center px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          Saved Words ({bookmarks.length}) →
        </Link>
      </div>

      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-5">
        {/* Subcategories overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="font-mono text-[10px] text-slate-400">01</span>
            <div className="font-bold text-slate-900 dark:text-white mt-1">Synonyms</div>
            <div className="text-[11px] text-slate-500">Academic equivalents</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="font-mono text-[10px] text-slate-400">02</span>
            <div className="font-bold text-slate-900 dark:text-white mt-1">Antonyms</div>
            <div className="text-[11px] text-slate-500">Opposite meanings</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="font-mono text-[10px] text-slate-400">03</span>
            <div className="font-bold text-slate-900 dark:text-white mt-1">Context Usage</div>
            <div className="text-[11px] text-slate-500">Sentence fill-in</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="font-mono text-[10px] text-slate-400">04</span>
            <div className="font-bold text-slate-900 dark:text-white mt-1">Academic Vocab</div>
            <div className="text-[11px] text-slate-500">Research & scholarly</div>
          </div>
        </div>

        {/* Question Count Selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase text-slate-400">
            Select Question Count
          </label>
          <div className="flex flex-wrap gap-2">
            {[10, 15, 20, 25].map((num) => (
              <button
                key={num}
                onClick={() => setQuestionCount(num)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono font-bold transition-colors ${
                  questionCount === num
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {num} Qs
              </button>
            ))}
          </div>
        </div>

        {/* Timer Mode */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase text-slate-400">
            Practice Mode
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => setMode('timed')}
              className={`p-3.5 rounded-lg border text-left transition-colors ${
                mode === 'timed'
                  ? 'border-brand-600 bg-brand-50/60 dark:bg-brand-950/40 ring-1 ring-brand-600'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="font-bold text-xs text-slate-900 dark:text-white">
                Speed Drill (30s / question)
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Meningkatkan refleks mengingat kosakata secara cepat.
              </p>
            </button>

            <button
              onClick={() => setMode('practice')}
              className={`p-3.5 rounded-lg border text-left transition-colors ${
                mode === 'practice'
                  ? 'border-brand-600 bg-brand-50/60 dark:bg-brand-950/40 ring-1 ring-brand-600'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="font-bold text-xs text-slate-900 dark:text-white">
                Untimed Exploration
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Mempelajari makna dan penjelasan konteks secara cermat.
              </p>
            </button>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Vocabulary Engine Ready
          </span>

          <button
            onClick={handleStart}
            className="px-6 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors"
          >
            Start Vocabulary Drill →
          </button>
        </div>
      </div>
    </div>
  );
}
