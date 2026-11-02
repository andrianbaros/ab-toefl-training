'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getStoredSettings, getTestHistory } from '@/lib/storage';
import { createFullSimulationSession } from '@/data/questionBank';
import { saveActiveSession } from '@/lib/storage';
import { TestResult, UserSettings } from '@/types';
import { getCEFRLevel } from '@/data/toeflScoring';

export default function DashboardPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [settings, setSettings] = useState<UserSettings>({
    userName: 'Student',
    targetScore: 550,
    theme: 'light',
    autoNextQuestion: false,
    soundEnabled: true,
    syncWithExaminer: true,
  });
  const [history, setHistory] = useState<TestResult[]>([]);

  useEffect(() => {
    setMounted(true);
    setSettings(getStoredSettings());
    setHistory(getTestHistory());
  }, []);

  // Compute stats
  const totalPractices = history.length;
  const totalQuestionsAnswered = history.reduce((acc, h) => acc + h.totalQuestions, 0);
  const totalCorrect = history.reduce((acc, h) => acc + h.correctCount, 0);
  const averageAccuracy = totalQuestionsAnswered > 0 ? Math.round((totalCorrect / totalQuestionsAnswered) * 100) : 0;
  const lastResult = history[0];
  const lastScore = lastResult?.scaledScore || null;
  const cefr = lastScore ? getCEFRLevel(lastScore) : null;

  const handleStartFullSimulation = () => {
    const session = createFullSimulationSession();
    saveActiveSession(session);
    router.push('/test');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 font-sans">
      {/* 1. Welcome Hero Section - Clean CSS Layout */}
      <div className="rounded-xl bg-slate-900 text-white p-6 sm:p-8 lg:p-9 border border-slate-800 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-slate-700 bg-slate-800 text-[11px] font-mono uppercase text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Standard TOEFL ITP Format</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              AB TOEFL TRAINING
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Platform latihan mandiri TOEFL ITP komprehensif: Listening dengan mode Examiner manual, Structure & Written Expression, Reading akademik dengan layout split-screen, serta Vocabulary.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            <button
              onClick={handleStartFullSimulation}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors"
            >
              Full Simulation (140 Q / 115m)
            </button>

            <Link
              href="/examiner"
              target="_blank"
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-200 font-medium text-xs text-center transition-colors"
            >
              Examiner Reader Mode
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Progress Overview Cards */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Progress Overview
          </div>
          <Link
            href="/history"
            className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white underline"
          >
            History Log →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Total Practices */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Completed Tests
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-slate-900 dark:text-white mt-1">
              {mounted ? totalPractices : 0}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              {totalPractices === 0 ? 'No sessions yet' : 'Practice sessions'}
            </div>
          </div>

          {/* Card 2: Total Questions Answered */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Questions Answered
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-slate-900 dark:text-white mt-1">
              {mounted ? totalQuestionsAnswered : 0}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Across all categories
            </div>
          </div>

          {/* Card 3: Average Accuracy */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Average Accuracy
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-slate-900 dark:text-white mt-1">
              {mounted && totalQuestionsAnswered > 0 ? `${averageAccuracy}%` : '—'}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Cumulative correct rate
            </div>
          </div>

          {/* Card 4: Estimated TOEFL Score */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Estimated Score
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-slate-900 dark:text-white">
                {mounted && lastScore ? lastScore : '—'}
              </span>
              <span className="text-xs font-mono text-slate-400">/ 677</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 truncate">
              {cefr ? cefr.level : `Target: ${settings.targetScore}`}
            </div>
          </div>
        </div>

        {/* Score Progression Bars */}
        {mounted && history.length > 0 && (
          <div className="mt-4 p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-mono font-bold uppercase tracking-wider text-slate-400">
                Score Progression (Latest Sessions)
              </span>
              <span className="font-mono text-slate-400">
                ITP Scale (310 - 677)
              </span>
            </div>
            <div className="flex items-end gap-2 sm:gap-3 h-20 pt-2 border-b border-slate-100 dark:border-slate-800">
              {history.slice(0, 10).reverse().map((item, idx) => {
                const heightPercent = Math.max(15, Math.min(100, ((item.scaledScore - 310) / (677 - 310)) * 100));
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group relative">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 bg-slate-900 text-white font-mono text-[10px] px-1 py-0.5 rounded pointer-events-none">
                      {item.scaledScore}
                    </div>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[22px] rounded-t-xs bg-slate-700 dark:bg-slate-400 group-hover:bg-brand-600 transition-colors"
                    />
                    <span className="text-[9px] font-mono text-slate-400 truncate">
                      #{idx + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 3. Practice Categories */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              Practice Categories
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Select a section to target specific skills or start customized drills.
            </p>
          </div>
          <Link
            href="/practice"
            className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white underline"
          >
            Configure All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Section 1: Listening */}
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                  SECTION 1
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">
                  50 Qs
                </span>
              </div>

              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Listening Comprehension
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Part A (30 Qs), Part B (8 Qs), and Part C (12 Qs). Includes manual human Examiner reader screen.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                <div className="flex justify-between">
                  <span>Part A (Short)</span>
                  <span className="font-semibold text-slate-900 dark:text-white">30 Q</span>
                </div>
                <div className="flex justify-between">
                  <span>Part B (Long)</span>
                  <span className="font-semibold text-slate-900 dark:text-white">8 Q</span>
                </div>
                <div className="flex justify-between">
                  <span>Part C (Lectures)</span>
                  <span className="font-semibold text-slate-900 dark:text-white">12 Q</span>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Link
                href="/practice/listening"
                className="block w-full py-2 px-3 text-center rounded-md bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs transition-colors"
              >
                Start Section
              </Link>
              <Link
                href="/examiner"
                target="_blank"
                className="block w-full py-1.5 px-3 text-center rounded-md border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-medium text-[11px] transition-colors"
              >
                Open Examiner Screen
              </Link>
            </div>
          </div>

          {/* Section 2: Structure */}
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900">
                  SECTION 2
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">
                  60 Qs
                </span>
              </div>

              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Structure & Written Expression
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Sentence completion (Part A) and error recognition with underlined (A, B, C, D) segments (Part B).
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                <div className="flex justify-between">
                  <span>Part A (Completion)</span>
                  <span className="font-semibold text-slate-900 dark:text-white">30 Q</span>
                </div>
                <div className="flex justify-between">
                  <span>Part B (Error Check)</span>
                  <span className="font-semibold text-slate-900 dark:text-white">30 Q</span>
                </div>
                <div className="flex justify-between">
                  <span>Rules</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Inversion, S-V</span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <Link
                href="/practice/structure"
                className="block w-full py-2 px-3 text-center rounded-md bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 font-medium text-xs transition-colors"
              >
                Start Section
              </Link>
            </div>
          </div>

          {/* Section 3: Reading */}
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
                  SECTION 3
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">
                  10 Texts
                </span>
              </div>

              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Reading Comprehension
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  10 original academic passages across biology, physics, history, and economics with split-screen view.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                <div className="flex justify-between">
                  <span>Passages</span>
                  <span className="font-semibold text-slate-900 dark:text-white">10 Texts</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Questions</span>
                  <span className="font-semibold text-slate-900 dark:text-white">50 Q</span>
                </div>
                <div className="flex justify-between">
                  <span>Disciplines</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Sciences & Arts</span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <Link
                href="/practice/reading"
                className="block w-full py-2 px-3 text-center rounded-md bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 font-medium text-xs transition-colors"
              >
                Start Section
              </Link>
            </div>
          </div>

          {/* Supplementary: Vocabulary */}
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-900">
                  SUPPLEMENTARY
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">
                  25 Qs
                </span>
              </div>

              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Vocabulary Practice
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Drills for academic words, synonyms, antonyms, meaning in context, and interactive flashcards.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                <div className="flex justify-between">
                  <span>Question Drills</span>
                  <span className="font-semibold text-slate-900 dark:text-white">25 Q</span>
                </div>
                <div className="flex justify-between">
                  <span>Interactive Cards</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span>Word Bookmarks</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Supported</span>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Link
                href="/practice/vocabulary"
                className="block w-full py-2 px-3 text-center rounded-md bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 font-medium text-xs transition-colors"
              >
                Start Drill
              </Link>
              <Link
                href="/vocabulary/bookmarks"
                className="block w-full py-1.5 px-3 text-center rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-[11px] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Saved Flashcards
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Full TOEFL ITP Simulation Card */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Official Simulation Exam Mode
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Full 140-Question TOEFL ITP Simulation
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Mencakup Listening (50 soal / 35 menit), Structure (40 soal / 25 menit), dan Reading (50 soal / 55 menit). Total 140 soal dalam batas waktu resmi 115 menit dengan evaluasi skor komprehensif.
          </p>
        </div>

        <button
          onClick={handleStartFullSimulation}
          className="px-6 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors shrink-0"
        >
          Launch Simulation →
        </button>
      </div>
    </div>
  );
}
