'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TestMode } from '@/types';
import { createSectionSession } from '@/data/questionBank';
import { saveActiveSession } from '@/lib/storage';

export default function ListeningPracticePage() {
  const router = useRouter();
  const [selectedParts, setSelectedParts] = useState<string[]>(['part_a', 'part_b', 'part_c']);
  const [mode, setMode] = useState<TestMode>('timed');
  const [questionCount, setQuestionCount] = useState<number>(50);

  const togglePart = (part: string) => {
    if (selectedParts.includes(part)) {
      if (selectedParts.length > 1) {
        setSelectedParts(selectedParts.filter((p) => p !== part));
      }
    } else {
      setSelectedParts([...selectedParts, part]);
    }
  };

  const handleStart = () => {
    const session = createSectionSession('listening', questionCount, mode, selectedParts);
    saveActiveSession(session);
    router.push('/test');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6 font-sans">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
            [SECTION 01 • TOEFL ITP]
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
            Listening Comprehension
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Part A (Short Conversations), Part B (Long Dialogues), dan Part C (Lectures).
          </p>
        </div>

        <Link
          href="/examiner"
          target="_blank"
          className="inline-flex items-center px-3.5 py-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 font-medium text-xs hover:bg-amber-100 transition-colors"
        >
          Open Examiner Tab ↗
        </Link>
      </div>

      {/* Manual Protocol Notice */}
      <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/70 dark:bg-amber-950/20 text-xs text-amber-950 dark:text-amber-200 space-y-1">
        <span className="font-bold uppercase font-mono tracking-wider">
          Mekanisme Listening Manual:
        </span>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Pada layar peserta, naskah audio tidak ditampilkan. Penguji membuka tab <strong>Examiner Mode</strong> di jendela terpisah untuk membaca naskah secara manual tanpa memperlihatkan kunci jawaban kepada peserta.
        </p>
      </div>

      {/* Configuration Card */}
      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-5">
        {/* Parts selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase text-slate-400">
            Select Parts
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'part_a', title: 'Part A', desc: 'Short Conversations', count: '30 Qs' },
              { id: 'part_b', title: 'Part B', desc: 'Longer Dialogues', count: '8 Qs' },
              { id: 'part_c', title: 'Part C', desc: 'Talks & Lectures', count: '12 Qs' },
            ].map((p) => {
              const active = selectedParts.includes(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => togglePart(p.id)}
                  className={`p-3.5 rounded-lg border text-left transition-colors flex items-start justify-between ${
                    active
                      ? 'border-brand-600 bg-brand-50/60 dark:bg-brand-950/40 text-brand-950 dark:text-brand-100 ring-1 ring-brand-600'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div>
                    <div className="font-bold text-xs text-slate-900 dark:text-white">
                      {p.title}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {p.desc}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    {p.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Question Count Selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase text-slate-400">
            Question Count
          </label>
          <div className="flex flex-wrap gap-2">
            {[10, 20, 30, 50].map((num) => (
              <button
                key={num}
                onClick={() => setQuestionCount(num)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono font-bold transition-colors ${
                  questionCount === num
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {num} Qs {num === 50 && '(Full Section)'}
              </button>
            ))}
          </div>
        </div>

        {/* Mode */}
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
                Official Timed Mode (35 mins)
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Countdown timer dengan penguncian otomatis.
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
                Untimed Practice
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Latihan fleksibel tanpa batas waktu.
              </p>
            </button>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Listening Exam Mode Ready
          </span>

          <button
            onClick={handleStart}
            className="px-6 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors"
          >
            Start Listening Test →
          </button>
        </div>
      </div>
    </div>
  );
}
