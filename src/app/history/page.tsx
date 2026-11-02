'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTestHistory, deleteTestResult, exportHistoryCSV } from '@/lib/storage';
import { TestResult } from '@/types';
import { formatDate, formatTime } from '@/lib/utils';

export default function HistoryPage() {
  const [mounted, setMounted] = useState(false);
  const [history, setHistory] = useState<TestResult[]>([]);
  const [filterSection, setFilterSection] = useState<string>('all');

  useEffect(() => {
    setMounted(true);
    setHistory(getTestHistory());
  }, []);

  const handleDelete = (sessionId: string) => {
    if (confirm('Delete this test result?')) {
      deleteTestResult(sessionId);
      setHistory(getTestHistory());
    }
  };

  const handleExportCSV = () => {
    const csvContent = exportHistoryCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `toefl_history_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!mounted) return null;

  const filteredHistory = history.filter((item) => {
    if (filterSection === 'all') return true;
    return item.section === filterSection;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
            [PRACTICE LOGS]
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
            Test Records & History
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Riwayat skor simulasi, durasi pengerjaan, dan akurasi per sesi.
          </p>
        </div>

        {history.length > 0 && (
          <button
            onClick={handleExportCSV}
            className="px-3.5 py-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Export CSV
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5">
        {[
          { id: 'all', label: 'All Sessions' },
          { id: 'full_simulation', label: 'Simulations' },
          { id: 'listening', label: 'Listening' },
          { id: 'structure', label: 'Structure' },
          { id: 'reading', label: 'Reading' },
          { id: 'vocabulary', label: 'Vocabulary' },
        ].map((tab) => {
          const active = filterSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilterSection(tab.id)}
              className={`px-3 py-1 rounded text-xs font-mono font-medium transition-colors ${
                active
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* History Items */}
      {filteredHistory.length === 0 ? (
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 text-center space-y-2">
          <div className="text-xs font-mono text-slate-400 uppercase">
            No Records Found
          </div>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Belum ada data pengerjaan untuk kategori ini.
          </p>
          <div className="pt-2">
            <Link
              href="/practice"
              className="inline-block px-4 py-2 rounded bg-brand-600 text-white text-xs font-medium"
            >
              Start Practice Now
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-2.5">
          {filteredHistory.map((item) => (
            <div
              key={item.sessionId}
              className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Left Info */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {item.section.replace('_', ' ')}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {formatDate(item.date)}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 pt-0.5">
                  <span>{item.totalQuestions} Qs</span>
                  <span>•</span>
                  <span>{formatTime(item.timeSpentSeconds)}</span>
                  <span>•</span>
                  <span className="text-emerald-600 font-semibold">{item.correctCount} Correct</span>
                  <span>•</span>
                  <span className="text-rose-500 font-semibold">{item.incorrectCount} Wrong</span>
                </div>
              </div>

              {/* Middle Score */}
              <div className="flex items-center gap-5">
                <div className="text-right">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Accuracy</div>
                  <div className="text-lg font-mono font-bold text-slate-900 dark:text-white">
                    {item.accuracy}%
                  </div>
                </div>

                <div className="text-right pl-4 border-l border-slate-100 dark:border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Score</div>
                  <div className="text-xl font-mono font-black text-slate-900 dark:text-white">
                    {item.scaledScore}
                  </div>
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2 border-t md:border-t-0 pt-2.5 md:pt-0 border-slate-100 dark:border-slate-800 font-mono text-xs">
                <Link
                  href={`/test/review/${item.sessionId}`}
                  className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  Review
                </Link>

                <Link
                  href={`/test/result/${item.sessionId}`}
                  className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50"
                >
                  Summary
                </Link>

                <button
                  onClick={() => handleDelete(item.sessionId)}
                  className="px-2 py-1 text-slate-400 hover:text-rose-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
