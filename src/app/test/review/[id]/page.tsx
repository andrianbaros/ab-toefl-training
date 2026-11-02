'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getTestResultById, saveActiveSession, saveBookmark, getBookmarks } from '@/lib/storage';
import { createRetrySession } from '@/data/questionBank';
import { TestResult, Question } from '@/types';
import ListeningPlayer from '@/components/listening/ListeningPlayer';

function renderUnderlinedSentence(sentence: string) {
  const regex = /(\([A-D]\)\[[^\]]+\])/g;
  const parts = sentence.split(regex);

  return parts.map((part, index) => {
    const match = part.match(/\(([A-D])\)\[([^\]]+)\]/);
    if (match) {
      const label = match[1];
      const text = match[2];
      return (
        <span key={index} className="inline-block mx-1">
          <span className="underline underline-offset-4 decoration-2 decoration-brand-600 font-semibold text-slate-900 dark:text-white">
            {text}
          </span>
          <span className="ml-1 text-[11px] font-mono font-bold text-brand-600 dark:text-brand-400">
            ({label})
          </span>
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

type FilterType = 'all' | 'correct' | 'incorrect' | 'unanswered';

export default function AnswerReviewPage() {
  const params = useParams();
  const router = useRouter();
  const sessionId = params.id as string;

  const [mounted, setMounted] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const [savedBookmarkWords, setSavedBookmarkWords] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
    if (sessionId) {
      const res = getTestResultById(sessionId);
      if (res) setResult(res);
    }
    const bms = getBookmarks().map((b) => b.word.toLowerCase());
    setSavedBookmarkWords(bms);
  }, [sessionId]);

  if (!mounted) return null;

  if (!result) {
    return (
      <div className="max-w-md mx-auto py-16 px-4 text-center space-y-3 font-sans">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          Review Session Missing
        </h2>
        <Link
          href="/"
          className="inline-block px-4 py-2 rounded bg-brand-600 text-white font-medium text-xs"
        >
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const filteredQuestions = result.questions.filter((q) => {
    const userAns = result.userAnswers[q.id];
    if (filter === 'correct') return userAns === q.correctAnswer;
    if (filter === 'incorrect') return userAns && userAns !== q.correctAnswer;
    if (filter === 'unanswered') return !userAns;
    return true;
  });

  const incorrectQuestionIds = result.questions
    .filter((q) => result.userAnswers[q.id] !== q.correctAnswer)
    .map((q) => q.id);

  const handleRetryIncorrect = () => {
    if (incorrectQuestionIds.length === 0) return;
    const retrySession = createRetrySession(incorrectQuestionIds);
    saveActiveSession(retrySession);
    router.push('/test');
  };

  const handleBookmarkQuestionWord = (q: Question) => {
    const word = q.prompt.split(' ')[0] || 'Term';
    saveBookmark({
      id: 'bm-' + Date.now(),
      word: q.subCategory || word,
      type: 'concept',
      definition: q.explanation,
      example: q.prompt,
      synonyms: [],
      antonyms: [],
      savedAt: new Date().toISOString(),
      mastered: false,
    });
    setSavedBookmarkWords((prev) => [...prev, (q.subCategory || word).toLowerCase()]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6 font-sans">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <Link
            href={`/test/result/${result.sessionId}`}
            className="text-xs font-mono text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          >
            ← Back to Result Summary
          </Link>
          <h1 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Answer Review & Key Explanations
          </h1>
          <p className="text-xs font-mono text-slate-500 mt-0.5">
            {result.title} • {result.correctCount} / {result.totalQuestions} Correct ({result.accuracy}%)
          </p>
        </div>

        {incorrectQuestionIds.length > 0 && (
          <button
            onClick={handleRetryIncorrect}
            className="px-3.5 py-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900 font-mono text-xs transition-colors"
          >
            Retry Incorrect ({incorrectQuestionIds.length})
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {[
          { id: 'all' as FilterType, label: 'All Questions', count: result.totalQuestions },
          { id: 'correct' as FilterType, label: 'Correct', count: result.correctCount },
          { id: 'incorrect' as FilterType, label: 'Incorrect', count: result.incorrectCount },
          { id: 'unanswered' as FilterType, label: 'Unanswered', count: result.unansweredCount },
        ].map((tab) => {
          const active = filter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-colors flex items-center gap-2 ${
                active
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] opacity-70">[{tab.count}]</span>
            </button>
          );
        })}
      </div>

      {/* Questions Review List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 text-xs font-mono">
            No questions matching filter.
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const userAns = result.userAnswers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            const isUnanswered = !userAns;
            const questionNumber = result.questions.findIndex((item) => item.id === q.id) + 1;

            return (
              <div
                key={q.id}
                className={`rounded-xl border bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-4 ${
                  isCorrect
                    ? 'border-emerald-200 dark:border-emerald-950'
                    : isUnanswered
                    ? 'border-slate-200 dark:border-slate-800'
                    : 'border-rose-200 dark:border-rose-950'
                }`}
              >
                {/* Header: Question Number, Category, Status */}
                <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      Q{questionNumber < 10 ? `0${questionNumber}` : questionNumber}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">[{q.subCategory}]</span>
                  </div>

                  <div>
                    {isCorrect && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                        CORRECT
                      </span>
                    )}
                    {!isCorrect && !isUnanswered && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
                        INCORRECT
                      </span>
                    )}
                    {isUnanswered && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        UNANSWERED
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Prompt or Audio Player for Listening */}
                {q.section === 'listening' ? (
                  <div className="space-y-3">
                    <ListeningPlayer question={q} showTranscriptToggle={true} />
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-white">
                      <span className="text-[10px] font-mono font-bold uppercase text-brand-600 dark:text-brand-400 block mb-1">
                        Spoken Question:
                      </span>
                      "{q.questionSpokenText || q.prompt}"
                    </div>
                  </div>
                ) : q.underlinedSentence ? (
                  <div className="space-y-2">
                    <p className="text-xs text-slate-500">{q.prompt}</p>
                    <div className="p-3.5 rounded bg-slate-50 dark:bg-slate-950 font-serif text-sm sm:text-base text-slate-900 dark:text-slate-100 leading-relaxed border border-slate-200 dark:border-slate-800">
                      {renderUnderlinedSentence(q.underlinedSentence)}
                    </div>
                  </div>
                ) : (
                  <div className="text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                    {q.prompt}
                  </div>
                )}

                {/* Options Review */}
                <div className="space-y-2 pt-1">
                  {q.options.map((opt) => {
                    const isKey = opt.label === q.correctAnswer;
                    const isUserChoice = opt.label === userAns;

                    let optionClass = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300';
                    let badgeClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono';

                    if (isKey) {
                      optionClass = 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100';
                      badgeClass = 'bg-emerald-600 text-white font-mono font-bold';
                    } else if (isUserChoice && !isCorrect) {
                      optionClass = 'border-rose-400 bg-rose-50/60 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100 line-through';
                      badgeClass = 'bg-rose-600 text-white font-mono font-bold';
                    }

                    return (
                      <div
                        key={opt.label}
                        className={`p-3 rounded-lg border flex items-start gap-3 transition-colors ${optionClass}`}
                      >
                        <span className={`w-5 h-5 rounded text-xs flex items-center justify-center shrink-0 mt-0.5 ${badgeClass}`}>
                          {opt.label}
                        </span>
                        <div className="flex-1 text-xs sm:text-sm font-medium flex items-center justify-between gap-2">
                          <span>{opt.text}</span>
                          <div className="flex items-center gap-1.5 shrink-0 text-[11px] font-mono">
                            {isKey && (
                              <span className="font-bold text-emerald-700 dark:text-emerald-300">
                                [CORRECT KEY]
                              </span>
                            )}
                            {isUserChoice && !isKey && (
                              <span className="font-bold text-rose-600 dark:text-rose-400">
                                [YOUR CHOICE]
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase text-slate-500">
                    <span>Explanation:</span>
                    <button
                      onClick={() => handleBookmarkQuestionWord(q)}
                      className="text-slate-400 hover:text-brand-600 underline font-sans text-[11px]"
                    >
                      Save Concept
                    </button>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
