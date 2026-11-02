'use client';

import React, { useEffect, useState } from 'react';
import {
  getStoredSettings,
  saveStoredSettings,
  resetAllData,
  exportBackupJSON,
  importBackupJSON,
  exportHistoryCSV,
} from '@/lib/storage';
import { useTheme } from '@/components/ThemeProvider';
import { UserSettings } from '@/types';

export default function SettingsPage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState<UserSettings>({
    userName: 'Student',
    targetScore: 550,
    theme: 'light',
    autoNextQuestion: false,
    soundEnabled: true,
    syncWithExaminer: true,
  });
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSettings(getStoredSettings());
  }, []);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveStoredSettings(settings);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    setSettings((prev) => ({ ...prev, theme: newTheme }));
  };

  const handleExportJSON = () => {
    const jsonStr = exportBackupJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ab_toefl_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportCSV = () => {
    const csvContent = exportHistoryCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ab_toefl_history_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importBackupJSON(content);
        if (success) {
          alert('Backup imported successfully! Refreshing...');
          window.location.reload();
        } else {
          alert('Failed to import backup. Please check format.');
        }
      }
    };
    reader.readAsText(file);
  };

  const handleResetData = () => {
    resetAllData();
    alert('All progress, test history, and bookmarks have been reset.');
    window.location.reload();
  };

  if (!mounted) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6 font-sans">
      <div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
          [PREFERENCES & CONFIGURATION]
        </span>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
          Profile & Preferences
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          Atur nama profil, target skor, tema visual, dan pencadangan data.
        </p>
      </div>

      {savedSuccess && (
        <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold">
          [SUCCESS] Settings saved successfully.
        </div>
      )}

      {/* Main Settings Form */}
      <form onSubmit={handleSaveSettings} className="space-y-4">
        {/* 1. Profile & Target */}
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-3 shadow-xs">
          <div className="text-xs font-mono font-bold uppercase text-slate-400">
            [1. Candidate Profile & Target]
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Candidate Name
              </label>
              <input
                type="text"
                value={settings.userName}
                onChange={(e) => setSettings({ ...settings, userName: e.target.value })}
                className="w-full mt-1 p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-900 dark:text-white outline-none focus:border-brand-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Target TOEFL Score (310 - 677)
              </label>
              <input
                type="number"
                min="310"
                max="677"
                value={settings.targetScore}
                onChange={(e) => setSettings({ ...settings, targetScore: Number(e.target.value) })}
                className="w-full mt-1 p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-900 dark:text-white outline-none focus:border-brand-600 font-mono"
              />
            </div>
          </div>
        </div>

        {/* 2. Theme */}
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-3 shadow-xs">
          <div className="text-xs font-mono font-bold uppercase text-slate-400">
            [2. Display Theme]
          </div>

          <div className="grid grid-cols-3 gap-2.5 font-mono text-xs">
            {[
              { id: 'light' as const, label: 'LIGHT' },
              { id: 'dark' as const, label: 'DARK' },
              { id: 'system' as const, label: 'SYSTEM' },
            ].map((t) => {
              const active = settings.theme === t.id;
              return (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => handleThemeChange(t.id)}
                  className={`p-3 rounded-lg border text-center transition-colors ${
                    active
                      ? 'border-brand-600 bg-brand-50/70 dark:bg-brand-950/40 text-brand-950 dark:text-brand-100 ring-1 ring-brand-600 font-bold'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Exam Engine */}
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-3 shadow-xs">
          <div className="text-xs font-mono font-bold uppercase text-slate-400">
            [3. Exam Engine Preferences]
          </div>

          <div className="space-y-2">
            <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer">
              <div>
                <div className="font-bold text-xs text-slate-900 dark:text-white">
                  Auto-Advance Question
                </div>
                <div className="text-[11px] text-slate-500">
                  Langsung pindah ke soal berikutnya setelah memilih opsi A, B, C, atau D.
                </div>
              </div>
              <input
                type="checkbox"
                checked={settings.autoNextQuestion}
                onChange={(e) => setSettings({ ...settings, autoNextQuestion: e.target.checked })}
                className="w-4 h-4 accent-brand-600"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer">
              <div>
                <div className="font-bold text-xs text-slate-900 dark:text-white">
                  Broadcast Sync with Examiner Screen
                </div>
                <div className="text-[11px] text-slate-500">
                  Sinkronisasi indikator soal secara live saat tab Examiner Mode dibuka.
                </div>
              </div>
              <input
                type="checkbox"
                checked={settings.syncWithExaminer}
                onChange={(e) => setSettings({ ...settings, syncWithExaminer: e.target.checked })}
                className="w-4 h-4 accent-brand-600"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors"
          >
            Save Preferences
          </button>
        </div>
      </form>

      {/* 4. Backup, Export & Reset */}
      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-4 shadow-xs">
        <div className="text-xs font-mono font-bold uppercase text-slate-400">
          [4. Backup, Export & Reset]
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
          <button
            type="button"
            onClick={handleExportJSON}
            className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-left hover:bg-slate-100"
          >
            <div className="font-bold text-slate-900 dark:text-white">Export JSON</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Download database backup</div>
          </button>

          <button
            type="button"
            onClick={handleExportCSV}
            className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-left hover:bg-slate-100"
          >
            <div className="font-bold text-slate-900 dark:text-white">Export CSV</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Scores log for spreadsheets</div>
          </button>

          <label className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-left hover:bg-slate-100 cursor-pointer">
            <div className="font-bold text-slate-900 dark:text-white">Import JSON</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Restore data from file</div>
            <input
              type="file"
              accept=".json"
              onChange={handleImportJSON}
              className="hidden"
            />
          </label>
        </div>

        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="font-bold text-xs text-rose-600 dark:text-rose-400 font-mono">
              [DANGER ZONE] Reset Progress
            </div>
            <div className="text-[11px] text-slate-500">
              Hapus seluruh riwayat skor, sesi ujian, dan bookmark kosakata.
            </div>
          </div>

          <button
            type="button"
            onClick={() => setResetConfirmOpen(true)}
            className="px-3.5 py-1.5 rounded border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 font-mono text-xs hover:bg-rose-50 dark:hover:bg-rose-950/40"
          >
            Reset All Data
          </button>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {resetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50">
          <div className="w-full max-w-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-xl space-y-3 font-mono text-xs">
            <span className="font-bold text-rose-600 uppercase">
              Confirm Reset Data?
            </span>
            <p className="text-slate-600 dark:text-slate-300 font-sans leading-normal">
              Seluruh riwayat nilai, statistik akurasi, dan simpanan kosakata akan dihapus permanen.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setResetConfirmOpen(false)}
                className="px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleResetData}
                className="px-3 py-1.5 rounded bg-rose-600 text-white font-bold"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
