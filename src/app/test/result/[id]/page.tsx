'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getTestResultById, saveActiveSession } from '@/lib/storage';
import { createRetrySession } from '@/data/questionBank';
import { TestResult } from '@/types';
import { getCEFRLevel } from '@/data/toeflScoring';
import { formatTime, formatDate } from '@/lib/utils';

export default function TestResultPage() {
  const params = useParams();
  const router = useRouter();
  const sessionId = params.id as string;

  const [mounted, setMounted] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);

  useEffect(() => {
    setMounted(true);
    if (sessionId) {
      const res = getTestResultById(sessionId);
      if (res) setResult(res);
    }
  }, [sessionId]);

  if (!mounted) return null;

  if (!result) {
    return (
      <div className="max-w-md mx-auto py-16 px-4 text-center space-y-3 font-sans">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          Result Not Found
        </h2>
        <p className="text-xs text-slate-500">
          The test result you are looking for has been cleared or does not exist.
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 rounded bg-brand-600 text-white font-medium text-xs"
        >
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const cefr = getCEFRLevel(result.scaledScore);

  const incorrectQuestionIds = result.questions
    .filter((q) => result.userAnswers[q.id] !== q.correctAnswer)
    .map((q) => q.id);

  const handleRetryIncorrect = () => {
    if (incorrectQuestionIds.length === 0) return;
    const retrySession = createRetrySession(incorrectQuestionIds);
    saveActiveSession(retrySession);
    router.push('/test');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6 font-sans">
      {/* 1. Header Banner */}
      <div className="rounded-xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 text-center space-y-3">
        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
          EVALUATION REPORT
        </span>

        <h1 className="text-2xl font-extrabold tracking-tight">
          Test Completed
        </h1>
        <p className="text-xs text-slate-400 font-mono">
          {result.title} • {formatDate(result.date)}
        </p>

        {/* Estimated Score Box */}
        <div className="pt-2">
          <div className="inline-block p-5 rounded-xl bg-slate-800/80 border border-slate-700 min-w-[240px]">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">
              Estimated TOEFL ITP Score
            </div>
            <div className="flex items-baseline justify-center gap-1.5">
              <span className="text-4xl font-mono font-black text-white">
                {result.scaledScore}
              </span>
              <span className="text-xs font-mono text-slate-400">/ 677</span>
            </div>
            <div className="text-xs font-mono font-bold text-amber-300 mt-1">
              {cefr.level}
            </div>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 font-mono">
            *ESTIMATED SCORE for simulation and practice evaluation only. Not an official ETS score report.
          </p>
        </div>
      </div>

      {/* 2. Key Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
          <div className="text-[10px] font-mono text-slate-400 uppercase">Accuracy</div>
          <div className="text-2xl font-mono font-extrabold text-slate-900 dark:text-white mt-1">
            {result.accuracy}%
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">
            {result.correctCount}/{result.totalQuestions}
          </div>
        </div>

        <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
          <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase">Correct</div>
          <div className="text-2xl font-mono font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
            {result.correctCount}
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">Questions</div>
        </div>

        <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
          <div className="text-[10px] font-mono text-rose-500 uppercase">Incorrect</div>
          <div className="text-2xl font-mono font-extrabold text-rose-500 mt-1">
            {result.incorrectCount}
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">Questions</div>
        </div>

        <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
          <div className="text-[10px] font-mono text-slate-400 uppercase">Duration</div>
          <div className="text-2xl font-mono font-extrabold text-slate-900 dark:text-white mt-1">
            {formatTime(result.timeSpentSeconds)}
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">Time Spent</div>
        </div>
      </div>

      {/* 3. Section Scaled Breakdown if Simulation */}
      {result.sectionScores && (
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-3">
          <div className="text-xs font-mono font-bold uppercase text-slate-400">
            Section Scaled Scores (Range 31 – 68)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-[11px] font-mono text-slate-500">SEC 01: Listening</span>
              <div className="text-xl font-mono font-black text-slate-900 dark:text-white mt-0.5">
                {result.sectionScores.listening || 31} <span className="text-xs text-slate-400 font-normal">/ 68</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-[11px] font-mono text-slate-500">SEC 02: Structure</span>
              <div className="text-xl font-mono font-black text-slate-900 dark:text-white mt-0.5">
                {result.sectionScores.structure || 31} <span className="text-xs text-slate-400 font-normal">/ 68</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-[11px] font-mono text-slate-500">SEC 03: Reading</span>
              <div className="text-xl font-mono font-black text-slate-900 dark:text-white mt-0.5">
                {result.sectionScores.reading || 31} <span className="text-xs text-slate-400 font-normal">/ 67</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Strengths & Weaknesses Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Weaknesses */}
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-3">
          <div className="text-xs font-mono font-bold uppercase text-rose-600 dark:text-rose-400">
            Target Areas for Improvement
          </div>

          {result.weaknesses.length > 0 ? (
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {result.weaknesses.map((w, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-mono text-rose-500">•</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-slate-500">
              No critical weak areas detected. High overall accuracy.
            </p>
          )}
        </div>

        {/* Recommendations */}
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-3">
          <div className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400">
            Study Recommendations
          </div>

          <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
            {result.recommendations.map((rec, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-mono text-amber-500">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 5. Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
        <Link
          href="/"
          className="text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        >
          ← Dashboard
        </Link>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {incorrectQuestionIds.length > 0 && (
            <button
              onClick={handleRetryIncorrect}
              className="px-3.5 py-2 rounded-lg border border-rose-300 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-medium text-xs transition-colors"
            >
              Retry Incorrect ({incorrectQuestionIds.length})
            </button>
          )}

          <Link
            href={`/test/review/${result.sessionId}`}
            className="px-5 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs transition-colors"
          >
            Review All Explanations →
          </Link>
        </div>
      </div>
    </div>
  );
}
