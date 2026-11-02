'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TestMode } from '@/types';
import { READING_PASSAGES } from '@/data/readingPassages';
import { createSectionSession } from '@/data/questionBank';
import { saveActiveSession } from '@/lib/storage';

export default function ReadingPracticePage() {
  const router = useRouter();
  const [mode, setMode] = useState<TestMode>('timed');
  const [questionCount, setQuestionCount] = useState<number>(50);

  const handleStart = () => {
    const session = createSectionSession('reading', questionCount, mode);
    saveActiveSession(session);
    router.push('/test');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6 font-sans">
      <div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
          [SECTION 03 • TOEFL ITP]
        </span>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
          Reading Comprehension
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          10 teks akademik berbahasa Inggris dengan tampilan split-screen bacaan dan navigasi soal.
        </p>
      </div>

      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-5">
        {/* Passages List Preview */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold uppercase text-slate-400">
              Daftar Teks Akademik (10 Passages • 50 Soal)
            </label>
            <span className="text-[10px] font-mono text-slate-400">
              5 Soal / Passage
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-52 overflow-y-auto pr-1">
            {READING_PASSAGES.map((p, idx) => (
              <div
                key={p.id}
                className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 flex items-start gap-2.5"
              >
                <span className="font-mono text-xs font-bold text-slate-400 shrink-0">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-xs text-slate-900 dark:text-white truncate">
                    {p.title}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {p.topic} • {p.wordCount} words
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Question Count Selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase text-slate-400">
            Question Count
          </label>
          <div className="flex flex-wrap gap-2">
            {[15, 25, 35, 50].map((num) => (
              <button
                key={num}
                onClick={() => setQuestionCount(num)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono font-bold transition-colors ${
                  questionCount === num
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {num} Qs {num === 50 && '(Official 50 Qs Section)'}
              </button>
            ))}
          </div>
        </div>

        {/* Timer Mode */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase text-slate-400">
            Timer Mode
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
                Official Timed Mode (55 mins)
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Standar TOEFL ITP Section 3 (~66 detik per soal).
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
                Untimed Reading
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Membaca teks akademik secara mendalam tanpa batasan waktu.
              </p>
            </button>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Reading Split Screen Ready
          </span>

          <button
            onClick={handleStart}
            className="px-6 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors"
          >
            Start Reading Test →
          </button>
        </div>
      </div>
    </div>
  );
}
