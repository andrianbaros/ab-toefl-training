'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TestSession, Question } from '@/types';
import { getActiveSession, saveActiveSession, getStoredSettings } from '@/lib/storage';
import { getQuestionById } from '@/data/questionBank';
import { READING_PASSAGES } from '@/data/readingPassages';
import { gradeTestSession } from '@/lib/evaluation';
import { formatTime } from '@/lib/utils';
import { syncChannel } from '@/lib/broadcast';

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

export default function ActiveTestPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [session, setSession] = useState<TestSession | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showNavigatorDrawer, setShowNavigatorDrawer] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [examinerSyncState, setExaminerSyncState] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const active = getActiveSession();
    if (!active || active.questionIds.length === 0) {
      router.replace('/practice');
      return;
    }
    setSession(active);
    setCurrentIndex(active.currentQuestionIndex || 0);

    if (active.timeLimitSeconds > 0) {
      const elapsed = active.timeSpentSeconds || 0;
      setTimeRemaining(Math.max(0, active.timeLimitSeconds - elapsed));
    }
  }, [router]);

  useEffect(() => {
    if (!mounted || !session) return;
    const settings = getStoredSettings();
    if (!settings.syncWithExaminer) return;

    const unsubscribe = syncChannel.subscribe((msg) => {
      if (msg.type === 'SCRIPT_NAVIGATE' && msg.questionNumber) {
        setExaminerSyncState(`Examiner: Q#${msg.questionNumber}`);
      }
    });

    return () => unsubscribe();
  }, [mounted, session]);

  useEffect(() => {
    if (!session || session.timeLimitSeconds === 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleForceSubmit();
          return 0;
        }
        return prev - 1;
      });

      setSession((prev) => {
        if (!prev) return null;
        const updated = {
          ...prev,
          timeSpentSeconds: prev.timeSpentSeconds + 1,
        };
        saveActiveSession(updated);
        return updated;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [session?.id, session?.timeLimitSeconds]);

  const handleSelectAnswer = (optionLabel: 'A' | 'B' | 'C' | 'D') => {
    if (!session) return;
    const qId = session.questionIds[currentIndex];
    const updatedAnswers = {
      ...session.userAnswers,
      [qId]: optionLabel,
    };
    const updatedSession: TestSession = {
      ...session,
      userAnswers: updatedAnswers,
      currentQuestionIndex: currentIndex,
    };
    setSession(updatedSession);
    saveActiveSession(updatedSession);

    const settings = getStoredSettings();
    if (settings.autoNextQuestion && currentIndex < session.questionIds.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleToggleMarkReview = () => {
    if (!session) return;
    const qId = session.questionIds[currentIndex];
    const isMarked = session.markedForReview.includes(qId);
    const updatedMarked = isMarked
      ? session.markedForReview.filter((id) => id !== qId)
      : [...session.markedForReview, qId];

    const updatedSession: TestSession = {
      ...session,
      markedForReview: updatedMarked,
    };
    setSession(updatedSession);
    saveActiveSession(updatedSession);
  };

  const handleNavigate = (newIndex: number) => {
    if (!session) return;
    if (newIndex >= 0 && newIndex < session.questionIds.length) {
      setCurrentIndex(newIndex);
      const updated = { ...session, currentQuestionIndex: newIndex };
      setSession(updated);
      saveActiveSession(updated);
    }
  };

  const handleForceSubmit = () => {
    if (!session) return;
    const finalSession: TestSession = {
      ...session,
      completedAt: new Date().toISOString(),
      status: 'completed',
    };
    const result = gradeTestSession(finalSession);
    router.replace(`/test/result/${result.sessionId}`);
  };

  if (!mounted || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 font-mono text-xs">
        Loading test session...
      </div>
    );
  }

  const currentQId = session.questionIds[currentIndex];
  const currentQuestion: Question | undefined = getQuestionById(currentQId);

  if (!currentQuestion) {
    return (
      <div className="p-8 text-center text-xs font-mono text-slate-500">
        Question missing. <Link href="/practice" className="underline">Back to Practice</Link>
      </div>
    );
  }

  const currentPassage = currentQuestion.passageId
    ? READING_PASSAGES.find((p) => p.id === currentQuestion.passageId)
    : null;

  const totalQuestions = session.questionIds.length;
  const answeredCount = Object.keys(session.userAnswers).length;
  const isCurrentMarked = session.markedForReview.includes(currentQId);
  const selectedOption = session.userAnswers[currentQId];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans select-none">
      {/* Top Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Left: Test Title & Section Badge */}
        <div className="flex items-center gap-2.5">
          <span className="font-bold text-xs text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-md">
            {session.title}
          </span>
          <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            {currentQuestion.section}
          </span>
        </div>

        {/* Center: Examiner Sync indicator */}
        {examinerSyncState && currentQuestion.section === 'listening' && (
          <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300 text-[11px] font-mono">
            <span>● {examinerSyncState}</span>
          </div>
        )}

        {/* Right: Timer & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {session.timeLimitSeconds > 0 ? (
            <div
              className={`px-2.5 py-1 rounded font-mono font-bold text-xs border ${
                timeRemaining <= 300
                  ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border-rose-300 dark:border-rose-900 animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
              }`}
            >
              TIME: {formatTime(timeRemaining)}
            </div>
          ) : (
            <div className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-500">
              UNTIMED
            </div>
          )}

          {/* Question Navigator Toggle */}
          <button
            onClick={() => setShowNavigatorDrawer(true)}
            className="px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50"
          >
            NAV [{currentIndex + 1}/{totalQuestions}]
          </button>

          {/* Submit Button */}
          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-3 py-1 rounded bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs transition-colors"
          >
            Submit
          </button>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-1">
        <div
          className="bg-brand-600 h-1 transition-all duration-300"
          style={{ width: `${Math.round(((currentIndex + 1) / totalQuestions) * 100)}%` }}
        />
      </div>

      {/* 2. Main Question Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
        {currentPassage ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start flex-1">
            {/* Left: Reading Passage */}
            <div className="h-[460px] lg:h-[620px] rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col overflow-hidden">
              <div className="pb-2.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="font-bold uppercase text-slate-700 dark:text-slate-300">
                  [PASSAGE TEXT • {currentPassage.topic.toUpperCase()}]
                </span>
                <span>{currentPassage.wordCount} words</span>
              </div>

              <div className="flex-1 overflow-y-auto mt-4 pr-3 space-y-4 font-serif text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200">
                <h3 className="font-bold text-base font-sans text-slate-900 dark:text-white">
                  {currentPassage.title}
                </h3>
                {currentPassage.paragraphs.map((p, idx) => (
                  <p key={idx} className="indent-6">
                    <span className="font-sans font-bold text-[10px] text-slate-400 mr-2 select-none">
                      [¶ {idx + 1}]
                    </span>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: Question & Options */}
            <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between min-h-[460px] lg:min-h-[620px]">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                    QUESTION {currentIndex + 1} OF {totalQuestions}
                  </span>
                  <button
                    onClick={handleToggleMarkReview}
                    className={`text-[11px] font-mono px-2 py-0.5 rounded border transition-colors ${
                      isCurrentMarked
                        ? 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-800 font-bold'
                        : 'text-slate-500 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {isCurrentMarked ? '[MARKED]' : '[MARK REVIEW]'}
                  </button>
                </div>

                <div className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">
                  {currentQuestion.prompt}
                </div>

                <div className="space-y-2.5">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = selectedOption === opt.label;
                    return (
                      <button
                        key={opt.label}
                        onClick={() => handleSelectAnswer(opt.label)}
                        className={`w-full p-3.5 rounded-lg border text-left transition-colors flex items-start gap-3 ${
                          isSelected
                            ? 'border-brand-600 bg-brand-50/70 dark:bg-brand-950/40 text-brand-950 dark:text-brand-100 ring-1 ring-brand-600'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-brand-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {opt.label}
                        </span>
                        <span className="text-sm font-medium flex-1">
                          {opt.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Full Width for Listening, Structure, and Vocab */
          <div className="max-w-2xl mx-auto w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase text-slate-400">
                  QUESTION {currentIndex + 1} OF {totalQuestions}
                </span>
                <span className="text-xs text-slate-300 dark:text-slate-700">•</span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {currentQuestion.subCategory}
                </span>
              </div>

              <button
                onClick={handleToggleMarkReview}
                className={`text-[11px] font-mono px-2 py-0.5 rounded border transition-colors ${
                  isCurrentMarked
                    ? 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-800 font-bold'
                    : 'text-slate-500 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {isCurrentMarked ? '[MARKED]' : '[MARK REVIEW]'}
              </button>
            </div>

            {/* Error Recognition Sentence */}
            {currentQuestion.underlinedSentence ? (
              <div className="space-y-3">
                <p className="text-xs text-slate-500">
                  {currentQuestion.prompt}
                </p>
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 font-serif text-base text-slate-900 dark:text-slate-100 leading-relaxed border border-slate-200 dark:border-slate-800">
                  {renderUnderlinedSentence(currentQuestion.underlinedSentence)}
                </div>
              </div>
            ) : (
              <div className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">
                {currentQuestion.prompt}
              </div>
            )}

            {/* Options */}
            <div className="space-y-2.5 pt-1">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedOption === opt.label;
                return (
                  <button
                    key={opt.label}
                    onClick={() => handleSelectAnswer(opt.label)}
                    className={`w-full p-3.5 rounded-lg border text-left transition-colors flex items-start gap-3 ${
                      isSelected
                        ? 'border-brand-600 bg-brand-50/70 dark:bg-brand-950/40 text-brand-950 dark:text-brand-100 ring-1 ring-brand-600'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-brand-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {opt.label}
                    </span>
                    <span className="text-sm font-medium flex-1">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. Bottom Action Paging Bar */}
        <div className="max-w-2xl mx-auto w-full pt-6 flex items-center justify-between gap-4">
          <button
            onClick={() => handleNavigate(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-mono text-xs hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            ← Previous
          </button>

          <div className="text-xs font-mono text-slate-500">
            {answeredCount} of {totalQuestions} answered
          </div>

          <button
            onClick={() => handleNavigate(currentIndex + 1)}
            disabled={currentIndex === totalQuestions - 1}
            className="px-5 py-2 rounded bg-brand-600 hover:bg-brand-700 disabled:opacity-30 disabled:pointer-events-none text-white font-mono text-xs transition-colors"
          >
            Next →
          </button>
        </div>
      </div>

      {/* 4. Question Navigator Grid Drawer */}
      {showNavigatorDrawer && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40 backdrop-blur-xs">
          <div className="w-full max-w-sm bg-white dark:bg-slate-900 h-full p-5 shadow-xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-slate-800">
                <span className="font-mono text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                  Question Navigator
                </span>
                <button
                  onClick={() => setShowNavigatorDrawer(false)}
                  className="px-2 py-0.5 rounded text-xs font-mono text-slate-400 hover:text-slate-700"
                >
                  [CLOSE]
                </button>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded bg-brand-600" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded bg-amber-500" />
                  <span>Marked</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-800" />
                  <span>Empty</span>
                </div>
              </div>

              {/* Grid numbers */}
              <div className="grid grid-cols-5 gap-1.5 pt-1">
                {session.questionIds.map((qId, idx) => {
                  const isAnswered = Boolean(session.userAnswers[qId]);
                  const isMarked = session.markedForReview.includes(qId);
                  const isCurrent = idx === currentIndex;

                  let bgClass = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
                  if (isMarked) {
                    bgClass = 'bg-amber-500 text-white font-bold';
                  } else if (isAnswered) {
                    bgClass = 'bg-brand-600 text-white font-bold';
                  }

                  return (
                    <button
                      key={qId}
                      onClick={() => {
                        handleNavigate(idx);
                        setShowNavigatorDrawer(false);
                      }}
                      className={`h-9 rounded text-xs font-mono transition-colors ${bgClass} ${
                        isCurrent ? 'ring-2 ring-brand-600 ring-offset-1 dark:ring-offset-slate-900 font-bold' : ''
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => {
                  setShowNavigatorDrawer(false);
                  setShowSubmitModal(true);
                }}
                className="w-full py-2.5 rounded bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs transition-colors"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50">
          <div className="w-full max-w-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-xl space-y-4">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase text-slate-400">
                Confirm Submission
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">
                Submit Practice Test?
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-center font-mono text-xs">
              <div>
                <div className="font-bold text-brand-600 dark:text-brand-400">{answeredCount}</div>
                <div className="text-[10px] text-slate-400">Answered</div>
              </div>
              <div>
                <div className="font-bold text-slate-600 dark:text-slate-300">{totalQuestions - answeredCount}</div>
                <div className="text-[10px] text-slate-400">Unanswered</div>
              </div>
              <div>
                <div className="font-bold text-amber-500">{session.markedForReview.length}</div>
                <div className="text-[10px] text-slate-400">Marked</div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={handleForceSubmit}
                className="px-4 py-1.5 rounded bg-brand-600 hover:bg-brand-700 text-white text-xs font-medium transition-colors"
              >
                Confirm Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
