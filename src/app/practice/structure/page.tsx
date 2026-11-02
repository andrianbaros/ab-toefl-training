'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TestMode } from '@/types';
import { createSectionSession } from '@/data/questionBank';
import { saveActiveSession } from '@/lib/storage';

export default function StructurePracticePage() {
  const router = useRouter();
  const [selectedParts, setSelectedParts] = useState<string[]>(['sentence_completion', 'error_recognition']);
  const [mode, setMode] = useState<TestMode>('timed');
  const [questionCount, setQuestionCount] = useState<number>(40);

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
    const session = createSectionSession('structure', questionCount, mode, selectedParts);
    saveActiveSession(session);
    router.push('/test');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6 font-sans">
      <div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
          [SECTION 02 • TOEFL ITP]
        </span>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
          Structure & Written Expression
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Latihan penguasaan tata bahasa, Sentence Completion, dan Error Recognition.
        </p>
      </div>

      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-5">
        {/* Parts selection */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase text-slate-400">
            Select Structure Parts
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                id: 'sentence_completion',
                title: 'Part A: Sentence Completion',
                desc: 'Melengkapi kalimat rumpang dengan pilihan A, B, C, D (30 Soal)',
              },
              {
                id: 'error_recognition',
                title: 'Part B: Error Recognition',
                desc: 'Menemukan bagian kalimat yang salah tata bahasa bertanda (A), (B), (C), (D) (30 Soal)',
              },
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
                  {active && (
                    <span className="text-[10px] font-mono font-bold text-brand-600 dark:text-brand-400 ml-2">
                      [SELECTED]
                    </span>
                  )}
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
            {[15, 25, 40, 60].map((num) => (
              <button
                key={num}
                onClick={() => setQuestionCount(num)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono font-bold transition-colors ${
                  questionCount === num
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {num} Qs {num === 40 && '(Official Section)'}
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
                Official Timed Mode (25 mins)
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Standar TOEFL ITP Section 2 (~37 detik per soal).
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
                Menganalisis tata bahasa tanpa batasan waktu.
              </p>
            </button>
          </div>
        </div>

        {/* Launch Button */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Structure Exam Mode Ready
          </span>

          <button
            onClick={handleStart}
            className="px-6 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors"
          >
            Start Structure Test →
          </button>
        </div>
      </div>
    </div>
  );
}
