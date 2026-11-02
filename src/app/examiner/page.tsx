'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LISTENING_QUESTIONS } from '@/data/listeningQuestions';
import { Question } from '@/types';
import { syncChannel } from '@/lib/broadcast';
import { ttsService } from '@/lib/ttsService';

interface ExaminerScriptItem {
  id: string;
  part: 'part_a' | 'part_b' | 'part_c';
  title: string;
  pacingNote: string;
  dialogue?: { speaker: string; text: string }[];
  audioScript: string;
  questionNumbers: number[];
  associatedQuestions: Question[];
}

export default function ExaminerPage() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showAnswersAndOptions, setShowAnswersAndOptions] = useState(true);
  const [isTtsSpeaking, setIsTtsSpeaking] = useState(false);

  // Group listening items for Examiner
  const scriptItems: ExaminerScriptItem[] = React.useMemo(() => {
    const items: ExaminerScriptItem[] = [];

    // Part A: 30 Short conversations
    LISTENING_QUESTIONS.filter((q) => q.part === 'part_a').forEach((q, idx) => {
      items.push({
        id: q.id,
        part: 'part_a',
        title: `Question ${idx + 1} • Short Conversation`,
        pacingNote: q.readingInstructions || 'Read at a natural, conversational pace (~140 wpm). Pause 12 seconds after reading the question prompt.',
        dialogue: q.dialogue,
        audioScript: q.audioScript || '',
        questionNumbers: [idx + 1],
        associatedQuestions: [q],
      });
    });

    // Part B: Longer Conversations
    const conv1Questions = LISTENING_QUESTIONS.filter((q) => q.groupId === 'lis-conv-01');
    items.push({
      id: 'group-conv-1',
      part: 'part_b',
      title: 'Conversation 1 (Questions 31–34) • Wetland Ecology Field Project',
      pacingNote: 'Read the dialogue first. Then read Question 31, pause 12 seconds, read Question 32, pause 12s, read Question 33, pause 12s, and read Question 34.',
      dialogue: conv1Questions[0]?.dialogue,
      audioScript: conv1Questions[0]?.audioScript || '',
      questionNumbers: [31, 32, 33, 34],
      associatedQuestions: conv1Questions,
    });

    const conv2Questions = LISTENING_QUESTIONS.filter((q) => q.groupId === 'lis-conv-02');
    items.push({
      id: 'group-conv-2',
      part: 'part_b',
      title: 'Conversation 2 (Questions 35–38) • University Career Center',
      pacingNote: 'Read the dialogue between the counselor and student. Then read Questions 35 through 38 sequentially, with 12 seconds pause after each.',
      dialogue: conv2Questions[0]?.dialogue,
      audioScript: conv2Questions[0]?.audioScript || '',
      questionNumbers: [35, 36, 37, 38],
      associatedQuestions: conv2Questions,
    });

    // Part C: Lectures
    const lec1Questions = LISTENING_QUESTIONS.filter((q) => q.groupId === 'lis-lec-01');
    items.push({
      id: 'group-lec-1',
      part: 'part_c',
      title: 'Lecture 1 (Questions 39–42) • Organic Architecture & Fallingwater',
      pacingNote: 'Deliver as an engaging academic lecture. Then read Questions 39, 40, 41, and 42 with 12 seconds pause between each.',
      dialogue: lec1Questions[0]?.dialogue,
      audioScript: lec1Questions[0]?.audioScript || '',
      questionNumbers: [39, 40, 41, 42],
      associatedQuestions: lec1Questions,
    });

    const lec2Questions = LISTENING_QUESTIONS.filter((q) => q.groupId === 'lis-lec-02');
    items.push({
      id: 'group-lec-2',
      part: 'part_c',
      title: 'Lecture 2 (Questions 43–46) • Marine Biology & Coral Bleaching',
      pacingNote: 'Clear scientific delivery. Read the lecture monologue, then Questions 43 through 46 with 12-second pauses.',
      dialogue: lec2Questions[0]?.dialogue,
      audioScript: lec2Questions[0]?.audioScript || '',
      questionNumbers: [43, 44, 45, 46],
      associatedQuestions: lec2Questions,
    });

    const lec3Questions = LISTENING_QUESTIONS.filter((q) => q.groupId === 'lis-lec-03');
    items.push({
      id: 'group-lec-3',
      part: 'part_c',
      title: 'Lecture 3 (Questions 47–50) • The Kuiper Belt & Dwarf Planets',
      pacingNote: 'Scientific astronomy presentation. Read the lecture monologue, then Questions 47 through 50 with 12-second pauses.',
      dialogue: lec3Questions[0]?.dialogue,
      audioScript: lec3Questions[0]?.audioScript || '',
      questionNumbers: [47, 48, 49, 50],
      associatedQuestions: lec3Questions,
    });

    return items;
  }, []);

  const currentItem = scriptItems[currentIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Broadcast current script whenever index changes
  useEffect(() => {
    if (!mounted || !syncEnabled || !currentItem) return;

    syncChannel.broadcast({
      type: 'SCRIPT_NAVIGATE',
      scriptGroupId: currentItem.id,
      part: currentItem.part,
      questionNumber: currentItem.questionNumbers[0],
      totalQuestions: 50,
      timestamp: Date.now(),
    });
  }, [currentIndex, syncEnabled, currentItem, mounted]);

  // Pause stopwatch for reading timing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Stop TTS on index change or unmount
  useEffect(() => {
    ttsService.stop();
    setIsTtsSpeaking(false);
    return () => {
      ttsService.stop();
    };
  }, [currentIndex]);

  const handleToggleTts = async () => {
    if (isTtsSpeaking) {
      ttsService.stop();
      setIsTtsSpeaking(false);
    } else {
      setIsTtsSpeaking(true);
      const lines =
        currentItem.dialogue && currentItem.dialogue.length > 0
          ? currentItem.dialogue
          : [{ speaker: 'Narrator', text: currentItem.audioScript }];

      await ttsService.playDialogue(lines, {
        onEnd: () => setIsTtsSpeaking(false),
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < scriptItems.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setTimerSeconds(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setTimerSeconds(0);
    }
  };

  if (!mounted || !currentItem) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Examiner Top Bar */}
      <header className="border-b border-slate-800 bg-slate-900 px-4 sm:px-6 py-3 flex items-center justify-between gap-4 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">
            PROCTOR
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-tight text-white">
                TOEFL EXAMINER SCRIPT PANEL
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                LIVE
              </span>
            </div>
            <p className="text-[10px] font-mono text-slate-400">
              AB TOEFL Training • Manual Listening Console
            </p>
          </div>
        </div>

        {/* Sync Status & Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSyncEnabled(!syncEnabled)}
            className={`px-3 py-1.5 rounded text-xs font-mono font-medium border transition-colors ${
              syncEnabled
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            ● {syncEnabled ? 'SYNC ON' : 'SYNC OFF'}
          </button>

          {/* 12-Second Stopwatch */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded bg-slate-800 border border-slate-700 text-xs font-mono">
            <span className="text-slate-400">PAUSE:</span>
            <span className="font-bold text-amber-400">
              {timerSeconds}s
            </span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="px-2 py-0.5 rounded bg-slate-700 text-[10px] text-slate-200 hover:bg-slate-600"
            >
              {isTimerRunning ? 'Stop' : 'Start'}
            </button>
            <button
              onClick={() => {
                setTimerSeconds(0);
                setIsTimerRunning(false);
              }}
              className="px-1.5 py-0.5 text-slate-400 hover:text-white text-[10px]"
            >
              Reset
            </button>
          </div>

          <Link
            href="/"
            className="text-xs font-mono text-slate-400 hover:text-white underline ml-2"
          >
            Exit
          </Link>
        </div>
      </header>

      {/* Main Reader View */}
      <div className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-between space-y-6">
        <div className="space-y-6">
          {/* Header Card with Navigation Jump */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg bg-slate-900 border border-slate-800">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                Script {currentIndex + 1} of {scriptItems.length}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white mt-0.5">
                {currentItem.title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={currentIndex}
                onChange={(e) => setCurrentIndex(Number(e.target.value))}
                aria-label="Select Script"
                className="bg-slate-950 border border-slate-700 text-xs text-slate-200 font-mono rounded px-3 py-1.5 outline-none"
              >
                {scriptItems.map((item, idx) => (
                  <option key={item.id} value={idx}>
                    #{idx + 1}: {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Reading & Pacing Instructions Box */}
          <div className="p-4 rounded-lg bg-amber-950/20 border border-amber-900/60 text-xs space-y-1">
            <span className="font-bold text-amber-400 font-mono uppercase tracking-wider">
              Pacing Guide & Instructions:
            </span>
            <p className="text-slate-300 leading-relaxed font-sans">
              {currentItem.pacingNote}
            </p>
          </div>

          {/* SCRIPT TEXT BOX */}
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="text-xs font-mono font-bold uppercase text-slate-400">
                Dialogue Script (Read Aloud)
              </span>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleToggleTts}
                  className={`text-xs font-mono px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                    isTtsSpeaking
                      ? 'bg-rose-950 text-rose-300 border border-rose-800 font-bold'
                      : 'bg-brand-950 hover:bg-brand-900 text-brand-300 border border-brand-800'
                  }`}
                >
                  <span>{isTtsSpeaking ? '■ Stop TTS' : '▶ Speak via Natural TTS'}</span>
                </button>
                <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
                  Candidate Screen: Options Only
                </span>
              </div>
            </div>

            {/* Structured Dialogue Lines */}
            {currentItem.dialogue && currentItem.dialogue.length > 0 ? (
              <div className="space-y-3.5 text-base sm:text-lg leading-relaxed font-serif">
                {currentItem.dialogue.map((line, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-900 shrink-0">
                      {line.speaker}:
                    </span>
                    <p className="text-slate-100">
                      {line.text}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-base sm:text-lg leading-relaxed font-serif text-slate-100 whitespace-pre-line">
                {currentItem.audioScript}
              </div>
            )}
          </div>

          {/* Spoken Questions for Candidate & Examiner Answer Key / Options */}
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase text-amber-400">
                  Questions to Read & Options
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-900">
                  Examiner Key View
                </span>
              </div>
              <button
                onClick={() => setShowAnswersAndOptions(!showAnswersAndOptions)}
                className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors w-fit"
              >
                {showAnswersAndOptions ? 'Hide Options & Answers' : 'Show Options & Answers'}
              </button>
            </div>

            <div className="space-y-4">
              {currentItem.associatedQuestions.map((q, idx) => {
                const questionNumber = currentItem.questionNumbers[idx] || idx + 1;
                return (
                  <div
                    key={q.id}
                    className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-3"
                  >
                    {/* Spoken Question Prompt */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <span className="font-mono font-bold text-xs text-amber-400 px-2 py-0.5 rounded bg-amber-950/70 border border-amber-900 shrink-0">
                          Q{questionNumber}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-100 font-sans">
                            "{q.questionSpokenText || q.prompt}"
                          </p>
                          <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                            (Read aloud to candidate • Pause 12s after prompt)
                          </p>
                        </div>
                      </div>

                      {showAnswersAndOptions && (
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 shrink-0">
                          KEY: ({q.correctAnswer})
                        </span>
                      )}
                    </div>

                    {/* Options and Answer Display for Examiner */}
                    {showAnswersAndOptions && (
                      <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span>Candidate Options:</span>
                          <span className="text-emerald-400 font-bold">
                            Correct: Option ({q.correctAnswer})
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt) => {
                            const isCorrect = opt.label === q.correctAnswer;
                            return (
                              <div
                                key={opt.label}
                                className={`p-2.5 rounded-md border text-xs flex items-start gap-2.5 transition-colors ${
                                  isCorrect
                                    ? 'bg-emerald-950/50 border-emerald-500/70 text-emerald-100 ring-1 ring-emerald-500/40'
                                    : 'bg-slate-900 border-slate-800 text-slate-300'
                                }`}
                              >
                                <span
                                  className={`font-mono font-bold px-1.5 py-0.5 rounded text-[10px] shrink-0 ${
                                    isCorrect
                                      ? 'bg-emerald-500 text-slate-950 font-black'
                                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                                  }`}
                                >
                                  ({opt.label})
                                </span>
                                <span className="leading-snug">
                                  {opt.text}
                                  {isCorrect && (
                                    <span className="ml-1.5 text-[10px] font-mono font-bold text-emerald-400 block sm:inline">
                                      ✓ Correct Answer
                                    </span>
                                  )}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Explanation & Rationale */}
                        {q.explanation && (
                          <div className="mt-2 p-2.5 rounded bg-slate-900/80 border border-slate-800 text-xs">
                            <span className="font-mono text-[10px] font-bold uppercase text-amber-400 tracking-wider">
                              Examiner Notes & Explanation:
                            </span>
                            <p className="text-slate-300 mt-0.5 leading-relaxed font-sans text-[11px]">
                              {q.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Paging Control Bar */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4 sticky bottom-0 bg-slate-950/95 py-3">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-slate-200 font-mono text-xs border border-slate-700 transition-colors"
          >
            ← Prev Script
          </button>

          <span className="text-xs font-mono text-slate-400">
            {currentIndex + 1} / {scriptItems.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentIndex === scriptItems.length - 1}
            className="px-5 py-2 rounded-md bg-amber-500 hover:bg-amber-600 disabled:opacity-30 disabled:pointer-events-none text-slate-950 font-bold font-mono text-xs transition-colors"
          >
            Next Script →
          </button>
        </div>
      </div>
    </div>
  );
}
