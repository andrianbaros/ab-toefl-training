'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { SectionType, TestMode } from '@/types';
import { createSectionSession, createFullSimulationSession } from '@/data/questionBank';
import { saveActiveSession } from '@/lib/storage';

export default function PracticeHubPage() {
  const router = useRouter();

  const [selectedSection, setSelectedSection] = useState<SectionType>('structure');
  const [selectedMode, setSelectedMode] = useState<TestMode>('timed');
  const [questionCount, setQuestionCount] = useState<number>(20);

  const handleLaunchPractice = () => {
    const session = createSectionSession(selectedSection, questionCount, selectedMode);
    saveActiveSession(session);
    router.push('/test');
  };

  const handleLaunchFullSim = () => {
    const session = createFullSimulationSession();
    saveActiveSession(session);
    router.push('/test');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      {/* Header */}
      <div>
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
          Configuration Console
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Practice Hub & Test Setup
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 max-w-3xl">
          Atur parameter latihan mandiri: pilih seksi, tentukan kuota soal, dan tentukan mode pengatur waktu.
        </p>
      </div>

      {/* Quick Custom Test Builder Card */}
      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
            Practice Parameter Builder
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            Config Mode
          </span>
        </div>

        {/* 1. Select Section */}
        <div className="space-y-2.5">
          <label className="text-xs font-mono font-bold uppercase text-slate-400">
            1. Select Section
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'listening' as SectionType, label: 'Listening', code: 'SEC 01', count: '50 Questions' },
              { id: 'structure' as SectionType, label: 'Structure', code: 'SEC 02', count: '60 Questions' },
              { id: 'reading' as SectionType, label: 'Reading', code: 'SEC 03', count: '50 Questions' },
              { id: 'vocabulary' as SectionType, label: 'Vocabulary', code: 'SUPPL', count: '25 Questions' },
            ].map((sec) => {
              const isSelected = selectedSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSection(sec.id)}
                  className={`p-3.5 rounded-lg border text-left transition-colors flex flex-col justify-between ${
                    isSelected
                      ? 'border-brand-600 bg-brand-50/60 dark:bg-brand-950/40 text-brand-950 dark:text-brand-100 ring-1 ring-brand-600'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                  }`}
                >
                  <span className="font-mono text-[10px] font-bold text-slate-400">
                    [{sec.code}]
                  </span>
                  <div className="mt-2">
                    <div className="font-bold text-xs text-slate-900 dark:text-white">
                      {sec.label}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                      {sec.count}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Select Question Count */}
        <div className="space-y-2.5">
          <label className="text-xs font-mono font-bold uppercase text-slate-400">
            2. Question Volume
          </label>
          <div className="flex flex-wrap gap-2">
            {[10, 15, 20, 30, 40, 50].map((num) => (
              <button
                key={num}
                onClick={() => setQuestionCount(num)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono font-bold transition-colors ${
                  questionCount === num
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {num} Qs
              </button>
            ))}
          </div>
        </div>

        {/* 3. Select Mode */}
        <div className="space-y-2.5">
          <label className="text-xs font-mono font-bold uppercase text-slate-400">
            3. Timer Regulation
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => setSelectedMode('timed')}
              className={`p-3.5 rounded-lg border text-left transition-colors ${
                selectedMode === 'timed'
                  ? 'border-brand-600 bg-brand-50/60 dark:bg-brand-950/40 ring-1 ring-brand-600'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-900 dark:text-white">
                  Timed Practice (Countdown)
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  STANDARD
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Latihan dengan batas waktu resmi per soal guna melatih kecepatan dan akurasi.
              </p>
            </button>

            <button
              onClick={() => setSelectedMode('practice')}
              className={`p-3.5 rounded-lg border text-left transition-colors ${
                selectedMode === 'practice'
                  ? 'border-brand-600 bg-brand-50/60 dark:bg-brand-950/40 ring-1 ring-brand-600'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-900 dark:text-white">
                  Untimed Practice
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  RELAXED
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Mengerjakan soal secara santai tanpa tekanan batas waktu.
              </p>
            </button>
          </div>
        </div>

        {/* Launch Button */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Current Setup: <span className="font-bold uppercase text-slate-900 dark:text-white">{selectedSection}</span> • {questionCount} Questions • {selectedMode.toUpperCase()}
          </div>

          <button
            onClick={handleLaunchPractice}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors"
          >
            Launch Practice Session →
          </button>
        </div>
      </div>

      {/* Section Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Listening Card */}
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                [SECTION 01]
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                50 Soal
              </span>
            </div>

            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Listening Comprehension
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Part A: 30 percakapan pendek, Part B: 8 percakapan panjang, Part C: 12 monolog kuliah akademik.
              </p>
            </div>

            <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400 font-mono">
              <li>• Mode Peserta: Pertanyaan dan opsi pilihan A-D saja</li>
              <li>• Mode Penguji: Naskah audio manual (tanpa kunci)</li>
            </ul>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <Link
              href="/practice/listening"
              className="flex-1 text-center py-2 px-3 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium"
            >
              Configure Listening
            </Link>
            <Link
              href="/examiner"
              target="_blank"
              className="py-2 px-3 rounded-md border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-medium"
            >
              Examiner Tab
            </Link>
          </div>
        </div>

        {/* Structure Card */}
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                [SECTION 02]
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                60 Soal
              </span>
            </div>

            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Structure & Written Expression
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Part A: 30 Sentence Completion & Part B: 30 Error Recognition bertanda (A), (B), (C), (D).
              </p>
            </div>

            <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400 font-mono">
              <li>• Materi: Inversion, S-V Agreement, Clauses, Parallel</li>
              <li>• Dilengkapi evaluasi gramatikal terperinci</li>
            </ul>
          </div>

          <div className="mt-5">
            <Link
              href="/practice/structure"
              className="block w-full text-center py-2 px-3 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium"
            >
              Configure Structure
            </Link>
          </div>
        </div>

        {/* Reading Card */}
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                [SECTION 03]
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                10 Passages
              </span>
            </div>

            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Reading Comprehension
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                10 teks akademik dengan tampilan split screen berdampingan untuk desktop dan susun untuk ponsel.
              </p>
            </div>

            <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400 font-mono">
              <li>• Disiplin: Sains, Biologi, Astronomi, Sejarah, dsb.</li>
              <li>• Tipe: Main Idea, Inference, Vocabulary, Reference</li>
            </ul>
          </div>

          <div className="mt-5">
            <Link
              href="/practice/reading"
              className="block w-full text-center py-2 px-3 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium"
            >
              Configure Reading
            </Link>
          </div>
        </div>

        {/* Vocabulary Card */}
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                [SUPPLEMENTARY]
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                25 Soal
              </span>
            </div>

            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Vocabulary Practice
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Sinonim, antonim, makna dalam konteks, serta kartu flashcard interaktif untuk penguatan kata.
              </p>
            </div>

            <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400 font-mono">
              <li>• Fitur: Flashcard Flip, Bookmark kata sulit</li>
              <li>• Tingkat: Intermediate & Advanced Academic</li>
            </ul>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <Link
              href="/practice/vocabulary"
              className="flex-1 text-center py-2 px-3 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium"
            >
              Configure Vocab
            </Link>
            <Link
              href="/vocabulary/bookmarks"
              className="py-2 px-3 rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium"
            >
              Saved Words
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
