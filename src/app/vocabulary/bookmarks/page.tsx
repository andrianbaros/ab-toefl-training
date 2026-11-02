'use client';

import React, { useEffect, useState } from 'react';
import { getBookmarks, saveBookmark, removeBookmark, toggleBookmarkMastered } from '@/lib/storage';
import { INITIAL_VOCABULARY_BOOKMARKS } from '@/data/vocabularyQuestions';
import { VocabularyBookmark } from '@/types';

export default function BookmarksPage() {
  const [mounted, setMounted] = useState(false);
  const [bookmarks, setBookmarks] = useState<VocabularyBookmark[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterState, setFilterState] = useState<'all' | 'learning' | 'mastered'>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // New word form state
  const [newWord, setNewWord] = useState('');
  const [newType, setNewType] = useState('noun');
  const [newDef, setNewDef] = useState('');
  const [newExample, setNewExample] = useState('');
  const [newSynonyms, setNewSynonyms] = useState('');
  const [newAntonyms, setNewAntonyms] = useState('');

  useEffect(() => {
    setMounted(true);
    const existing = getBookmarks();
    if (existing.length === 0) {
      INITIAL_VOCABULARY_BOOKMARKS.forEach((b) => saveBookmark(b));
      setBookmarks(INITIAL_VOCABULARY_BOOKMARKS);
    } else {
      setBookmarks(existing);
    }
  }, []);

  const handleToggle = (id: string) => {
    toggleBookmarkMastered(id);
    setBookmarks(getBookmarks());
  };

  const handleDelete = (id: string) => {
    removeBookmark(id);
    setBookmarks(getBookmarks());
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWord.trim() || !newDef.trim()) return;

    const bookmark: VocabularyBookmark = {
      id: 'bm-' + Date.now(),
      word: newWord.trim(),
      type: newType,
      definition: newDef.trim(),
      example: newExample.trim(),
      synonyms: newSynonyms.split(',').map((s) => s.trim()).filter(Boolean),
      antonyms: newAntonyms.split(',').map((a) => a.trim()).filter(Boolean),
      savedAt: new Date().toISOString(),
      mastered: false,
    };

    saveBookmark(bookmark);
    setBookmarks(getBookmarks());
    setShowAddModal(false);

    setNewWord('');
    setNewDef('');
    setNewExample('');
    setNewSynonyms('');
    setNewAntonyms('');
  };

  if (!mounted) return null;

  const filtered = bookmarks.filter((b) => {
    const matchesSearch =
      b.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.definition.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterState === 'learning') return matchesSearch && !b.mastered;
    if (filterState === 'mastered') return matchesSearch && b.mastered;
    return matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 font-sans">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
            [VOCABULARY DATABASE]
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
            Saved Words & Flashcards
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Daftar kosakata akademik yang disimpan, evaluasi hapalan, dan kartu flashcard.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setFlashcardMode(!flashcardMode);
              setIsFlipped(false);
              setFlashcardIndex(0);
            }}
            className={`px-3 py-1.5 rounded text-xs font-mono font-bold border transition-colors ${
              flashcardMode
                ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 border-transparent'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            {flashcardMode ? '[CLOSE FLASHCARD]' : '[FLASHCARD MODE]'}
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-3.5 py-1.5 rounded bg-brand-600 hover:bg-brand-700 text-white text-xs font-medium transition-colors"
          >
            + Add Word
          </button>
        </div>
      </div>

      {/* FLASHCARD INTERACTIVE BOX */}
      {flashcardMode && filtered.length > 0 && (
        <div className="p-6 sm:p-8 rounded-xl bg-slate-900 text-white border border-slate-800 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
            CARD {flashcardIndex + 1} OF {filtered.length} (CLICK TO FLIP)
          </span>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer max-w-lg w-full p-6 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors flex flex-col items-center justify-center min-h-[160px]"
          >
            {!isFlipped ? (
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {filtered[flashcardIndex].word}
                </h2>
                <span className="inline-block text-[10px] font-mono uppercase text-slate-400">
                  [{filtered[flashcardIndex].type}]
                </span>
                <p className="text-[11px] text-slate-500 mt-2 font-mono">
                  (Click to flip)
                </p>
              </div>
            ) : (
              <div className="space-y-2 text-left">
                <div className="font-semibold text-sm text-slate-100">
                  {filtered[flashcardIndex].definition}
                </div>
                {filtered[flashcardIndex].example && (
                  <p className="text-xs italic text-slate-400 border-l-2 border-slate-600 pl-2.5">
                    "{filtered[flashcardIndex].example}"
                  </p>
                )}
                {filtered[flashcardIndex].synonyms?.length > 0 && (
                  <div className="text-[11px] text-slate-300 font-mono">
                    <span className="text-slate-500">Synonyms: </span>
                    {filtered[flashcardIndex].synonyms.join(', ')}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Flashcard Navigation */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
              }}
              className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
            >
              ← Prev
            </button>
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-3.5 py-1 rounded bg-brand-600 hover:bg-brand-700 text-white font-bold"
            >
              Flip ↻
            </button>
            <button
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
              }}
              className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="w-full sm:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search words..."
            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-mono outline-none focus:border-brand-600 text-slate-900 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto font-mono text-xs">
          {[
            { id: 'all' as const, label: 'ALL' },
            { id: 'learning' as const, label: 'LEARNING' },
            { id: 'mastered' as const, label: 'MASTERED' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterState(tab.id)}
              className={`px-3 py-1 rounded transition-colors ${
                filterState === tab.id
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 text-xs font-mono">
          No vocabulary bookmarks found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-lg border bg-white dark:bg-slate-900 flex flex-col justify-between shadow-xs transition-colors ${
                item.mastered
                  ? 'border-emerald-300 dark:border-emerald-900'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.word}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400">
                      [{item.type}]
                    </span>
                  </div>

                  <button
                    onClick={() => handleToggle(item.id)}
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded border transition-colors ${
                      item.mastered
                        ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-300'
                        : 'text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-700'
                    }`}
                  >
                    {item.mastered ? 'MASTERED' : 'MARK DONE'}
                  </button>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.definition}
                </p>

                {item.example && (
                  <p className="text-[11px] italic text-slate-500 border-l-2 border-slate-300 dark:border-slate-700 pl-2">
                    "{item.example}"
                  </p>
                )}

                {item.synonyms && item.synonyms.length > 0 && (
                  <div className="flex flex-wrap gap-1 text-[10px] font-mono">
                    {item.synonyms.map((syn, idx) => (
                      <span
                        key={idx}
                        className="px-1 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {syn}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>{item.mastered ? 'Status: Mastered' : 'Status: Learning'}</span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="hover:text-rose-500"
                >
                  [Delete]
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50">
          <div className="w-full max-w-md rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="font-mono text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                Add Vocabulary Entry
              </span>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-xs font-mono text-slate-400 hover:text-slate-700"
              >
                [X]
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-3 text-xs font-mono">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-500">WORD *</label>
                  <input
                    type="text"
                    required
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    placeholder="e.g. Ubiquitous"
                    className="w-full mt-1 p-2 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-500">TYPE</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                    className="w-full mt-1 p-2 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="noun">noun</option>
                    <option value="verb">verb</option>
                    <option value="adjective">adjective</option>
                    <option value="adverb">adverb</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-500">DEFINITION *</label>
                <textarea
                  required
                  rows={2}
                  value={newDef}
                  onChange={(e) => setNewDef(e.target.value)}
                  placeholder="Clear concise definition..."
                  className="w-full mt-1 p-2 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-sans text-xs"
                />
              </div>

              <div>
                <label className="text-slate-500">EXAMPLE SENTENCE</label>
                <input
                  type="text"
                  value={newExample}
                  onChange={(e) => setNewExample(e.target.value)}
                  placeholder="Sentence showing usage..."
                  className="w-full mt-1 p-2 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-sans text-xs"
                />
              </div>

              <div>
                <label className="text-slate-500">SYNONYMS (COMMA-SEPARATED)</label>
                <input
                  type="text"
                  value={newSynonyms}
                  onChange={(e) => setNewSynonyms(e.target.value)}
                  placeholder="e.g. pervasive, omnipresent"
                  className="w-full mt-1 p-2 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-sans text-xs"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700 font-mono"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded bg-brand-600 hover:bg-brand-700 text-white font-medium"
                >
                  Save Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
