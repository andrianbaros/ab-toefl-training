'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTestHistory, getStoredSettings } from '@/lib/storage';
import { TestResult, UserSettings } from '@/types';
import { getCEFRLevel } from '@/data/toeflScoring';

export default function AnalyticsPage() {
  const [mounted, setMounted] = useState(false);
  const [history, setHistory] = useState<TestResult[]>([]);
  const [settings, setSettings] = useState<UserSettings>({
    userName: 'Student',
    targetScore: 550,
    theme: 'light',
    autoNextQuestion: false,
    soundEnabled: true,
    syncWithExaminer: true,
  });

  useEffect(() => {
    setMounted(true);
    setHistory(getTestHistory());
    setSettings(getStoredSettings());
  }, []);

  if (!mounted) return null;

  const tagAggregates: Record<string, { total: number; correct: number; accuracy: number }> = {};
  let totalQuestions = 0;
  let totalCorrect = 0;
  let totalTimeSeconds = 0;

  history.forEach((res) => {
    totalQuestions += res.totalQuestions;
    totalCorrect += res.correctCount;
    totalTimeSeconds += res.timeSpentSeconds;

    Object.entries(res.tagBreakdown || {}).forEach(([tag, stat]) => {
      if (!tagAggregates[tag]) {
        tagAggregates[tag] = { total: 0, correct: 0, accuracy: 0 };
      }
      tagAggregates[tag].total += stat.total;
      tagAggregates[tag].correct += stat.correct;
    });
  });

  Object.keys(tagAggregates).forEach((tag) => {
    const item = tagAggregates[tag];
    item.accuracy = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
  });

  const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const lastScore = history[0]?.scaledScore || 310;
  const cefr = getCEFRLevel(lastScore);

  const sortedTags = Object.entries(tagAggregates).sort((a, b) => a[1].accuracy - b[1].accuracy);
  const weaknesses = sortedTags.filter(([_, stat]) => stat.total >= 1 && stat.accuracy < 60);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 font-sans">
      <div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
          [PERFORMANCE INTELLIGENCE]
        </span>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
          Analytics & Weakness Diagnostics
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          Pemetaan tingkat penguasaan tata bahasa, tipe pertanyaan bacaan, dan rekomendasi studi.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-[10px] font-mono uppercase text-slate-400">Total Practice</span>
          <div className="text-2xl font-mono font-extrabold text-slate-900 dark:text-white mt-1">
            {history.length}
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">Sessions logged</div>
        </div>

        <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-[10px] font-mono uppercase text-slate-400">Overall Accuracy</span>
          <div className="text-2xl font-mono font-extrabold text-brand-600 dark:text-brand-400 mt-1">
            {overallAccuracy}%
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">{totalCorrect}/{totalQuestions} questions</div>
        </div>

        <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-[10px] font-mono uppercase text-slate-400">Estimated Score</span>
          <div className="text-2xl font-mono font-extrabold text-slate-900 dark:text-white mt-1">
            {history.length > 0 ? lastScore : '—'}
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">Scale 310 - 677</div>
        </div>

        <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-[10px] font-mono uppercase text-slate-400">Target Gap</span>
          <div className="text-2xl font-mono font-extrabold text-rose-500 mt-1">
            {history.length > 0 ? Math.max(0, settings.targetScore - lastScore) : settings.targetScore}
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">Points to target ({settings.targetScore})</div>
        </div>
      </div>

      {/* Weakness & Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Identified Weaknesses */}
        <div className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-3">
          <div className="text-xs font-mono font-bold uppercase text-rose-600 dark:text-rose-400">
            Priority Areas To Improve (&lt;60% Accuracy)
          </div>

          {weaknesses.length === 0 ? (
            <p className="text-xs text-slate-500">
              Belum ada kelemahan kritis yang terdeteksi. Pertahankan latihan rutin!
            </p>
          ) : (
            <div className="space-y-2">
              {weaknesses.map(([tag, stat]) => (
                <div
                  key={tag}
                  className="p-2.5 rounded border border-rose-200 dark:border-rose-950 bg-rose-50/50 dark:bg-rose-950/20 flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-xs text-slate-900 dark:text-white">
                      {tag}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500">
                      {stat.correct} of {stat.total} correct
                    </div>
                  </div>
                  <span className="font-mono font-bold text-rose-600 dark:text-rose-400 text-xs">
                    {stat.accuracy}%
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actionable Recommendations */}
        <div className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-3">
          <div className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400">
            Study Recommendations
          </div>

          <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {weaknesses.some(([t]) => t.toLowerCase().includes('inversion')) && (
              <div className="p-2.5 rounded border border-amber-200 dark:border-amber-950 bg-amber-50/50 dark:bg-amber-950/20">
                <strong>Inversion:</strong> Pelajari kalimat dengan kata keterangan negatif di awal kalimat (Rarely, Seldom, Not until, Hardly) dan inversion pengandaian (Had I known...).
              </div>
            )}
            {weaknesses.some(([t]) => t.toLowerCase().includes('agreement')) && (
              <div className="p-2.5 rounded border border-amber-200 dark:border-amber-950 bg-amber-50/50 dark:bg-amber-950/20">
                <strong>Subject-Verb Agreement:</strong> Pisahkan kata benda utama subjek dari frasa preposisi pengikutnya untuk menentukan singular/plural yang tepat.
              </div>
            )}
            {weaknesses.some(([t]) => t.toLowerCase().includes('reading') || t.toLowerCase().includes('inference')) && (
              <div className="p-2.5 rounded border border-amber-200 dark:border-amber-950 bg-amber-50/50 dark:bg-amber-950/20">
                <strong>Inference & Reading:</strong> Tarik kesimpulan yang didukung langsung oleh fakta teks, hindari jawaban yang menggunakan opini di luar passage.
              </div>
            )}
            <div className="p-2.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
              <strong>Simulasi Penuh:</strong> Lakukan simulasi penuh 140 soal seminggu sekali untuk membiasakan stamina mental dan manajemen waktu 115 menit.
            </div>
          </div>
        </div>
      </div>

      {/* Skill Mastery Progress Bars */}
      <div className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-4">
        <div className="text-xs font-mono font-bold uppercase text-slate-400">
          Skill Mastery Breakdown
        </div>

        {sortedTags.length === 0 ? (
          <p className="text-xs text-slate-500 font-mono">
            No skill records yet.
          </p>
        ) : (
          <div className="space-y-3">
            {sortedTags.map(([tag, stat]) => (
              <div key={tag} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {tag}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    {stat.accuracy}% ({stat.correct}/{stat.total})
                  </span>
                </div>
                <div className="w-full h-1.5 rounded bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    style={{ width: `${stat.accuracy}%` }}
                    className={`h-full rounded transition-all ${
                      stat.accuracy >= 80
                        ? 'bg-emerald-500'
                        : stat.accuracy >= 60
                        ? 'bg-slate-700 dark:bg-slate-300'
                        : 'bg-rose-500'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
