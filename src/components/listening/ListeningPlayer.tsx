'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Question } from '@/types';
import { ttsService, PlaybackState } from '@/lib/ttsService';

interface ListeningPlayerProps {
  question: Question;
  autoPlay?: boolean;
  showTranscriptToggle?: boolean;
  className?: string;
}

export default function ListeningPlayer({
  question,
  autoPlay = false,
  showTranscriptToggle = true,
  className = '',
}: ListeningPlayerProps) {
  const [playback, setPlayback] = useState<PlaybackState>({
    isPlaying: false,
    isPaused: false,
    currentLineIndex: 0,
    totalLines: 0,
    currentSpeaker: '',
    currentText: '',
  });

  const [speed, setSpeed] = useState<number>(0.95); // 0.95 is optimal TOEFL pacing
  const [showTranscript, setShowTranscript] = useState<boolean>(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState<boolean>(false);
  const [bestVoiceName, setBestVoiceName] = useState<string>('Detecting Natural Voice...');

  // Track the current question ID to cancel and re-trigger if question changes
  const prevQuestionId = useRef<string>(question.id);

  // Initialize and detect available voices
  useEffect(() => {
    let active = true;
    ttsService.getRankedEnglishVoices().then((profiles) => {
      if (!active) return;
      if (profiles.length > 0) {
        const top = profiles[0].voice;
        setBestVoiceName(top.name);
      } else {
        setBestVoiceName('Browser System Speech');
      }
    });

    return () => {
      active = false;
      ttsService.stop();
    };
  }, []);

  // When question changes, reset playback state
  useEffect(() => {
    if (prevQuestionId.current !== question.id) {
      ttsService.stop();
      prevQuestionId.current = question.id;
      setPlayback({
        isPlaying: false,
        isPaused: false,
        currentLineIndex: 0,
        totalLines: 0,
        currentSpeaker: '',
        currentText: '',
      });
      setHasPlayedOnce(false);
      setShowTranscript(false);

      if (autoPlay) {
        handlePlay();
      }
    }
  }, [question.id, autoPlay]);

  // Build the lines array to speak
  const getDialogueLines = () => {
    if (question.dialogue && question.dialogue.length > 0) {
      return question.dialogue;
    }

    if (question.audioScript) {
      // Parse plain script lines if formatted as "Speaker: text"
      const lines = question.audioScript.split('\n').filter((l) => l.trim().length > 0);
      const parsed = lines.map((line) => {
        const colonIdx = line.indexOf(':');
        if (colonIdx > 0 && colonIdx < 20) {
          return {
            speaker: line.substring(0, colonIdx).trim(),
            text: line.substring(colonIdx + 1).trim(),
          };
        }
        return {
          speaker: 'Narrator',
          text: line.trim(),
        };
      });

      if (parsed.length > 0) return parsed;
    }

    // Fallback: Narrator reads the prompt
    return [
      {
        speaker: 'Narrator',
        text: question.questionSpokenText || question.prompt,
      },
    ];
  };

  const handlePlay = async () => {
    const lines = getDialogueLines();
    setHasPlayedOnce(true);

    await ttsService.playDialogue(lines, {
      rate: speed,
      onStateChange: (state) => {
        setPlayback(state);
      },
      onEnd: () => {
        setPlayback((prev) => ({
          ...prev,
          isPlaying: false,
          isPaused: false,
        }));
      },
    });
  };

  const handlePause = () => {
    ttsService.pause();
    setPlayback((prev) => ({ ...prev, isPlaying: false, isPaused: true }));
  };

  const handleResume = () => {
    ttsService.resume();
    setPlayback((prev) => ({ ...prev, isPlaying: true, isPaused: false }));
  };

  const handleStop = () => {
    ttsService.stop();
    setPlayback({
      isPlaying: false,
      isPaused: false,
      currentLineIndex: 0,
      totalLines: 0,
      currentSpeaker: '',
      currentText: '',
    });
  };

  const speedOptions = [
    { label: '0.85x', value: 0.85 },
    { label: '1.0x', value: 0.95 }, // Standard TOEFL pacing
    { label: '1.15x', value: 1.15 },
  ];

  return (
    <div
      className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 p-4 sm:p-5 space-y-3.5 transition-all ${className}`}
    >
      {/* Header & Status Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border border-brand-300 dark:border-brand-800">
            AUDIO TRACK
          </span>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
            TOEFL Listening Audio (Natural TTS)
          </span>
        </div>

        {/* Live Audio Status & Voice Info */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          {playback.isPlaying ? (
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>PLAYING</span>
              {/* Equalizer animation bars */}
              <div className="flex items-end gap-0.5 h-3 ml-1">
                <span className="w-0.5 bg-emerald-500 animate-[bounce_0.8s_infinite] h-2"></span>
                <span className="w-0.5 bg-emerald-500 animate-[bounce_1.1s_infinite] h-3"></span>
                <span className="w-0.5 bg-emerald-500 animate-[bounce_0.6s_infinite] h-1.5"></span>
                <span className="w-0.5 bg-emerald-500 animate-[bounce_0.9s_infinite] h-2.5"></span>
              </div>
            </div>
          ) : playback.isPaused ? (
            <span className="text-amber-500 font-semibold">PAUSED</span>
          ) : hasPlayedOnce ? (
            <span className="text-slate-400">AUDIO FINISHED</span>
          ) : (
            <span className="text-slate-400">READY TO LISTEN</span>
          )}

          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span
            className="text-slate-500 dark:text-slate-400 truncate max-w-[170px]"
            title={bestVoiceName}
          >
            {bestVoiceName}
          </span>
        </div>
      </div>

      {/* Currently Speaking Subtitle / Speaker Callout */}
      {playback.isPlaying && playback.currentSpeaker && (
        <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-brand-200 dark:border-brand-900 flex items-start gap-3 shadow-xs animate-in fade-in duration-200">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-500 text-white shrink-0 mt-0.5">
            {playback.currentSpeaker}
          </span>
          <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
            "{playback.currentText}"
          </p>
        </div>
      )}

      {/* Control Actions & Speed Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2">
          {/* Main Play / Pause Button */}
          {!playback.isPlaying ? (
            <button
              onClick={playback.isPaused ? handleResume : handlePlay}
              className="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-xs transition-colors"
            >
              <span>▶</span>
              <span>{hasPlayedOnce ? 'Replay Audio' : 'Play Audio'}</span>
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-mono text-xs font-bold flex items-center gap-2 transition-colors"
            >
              <span>⏸</span>
              <span>Pause</span>
            </button>
          )}

          {/* Stop Button */}
          {(playback.isPlaying || playback.isPaused) && (
            <button
              onClick={handleStop}
              className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs transition-colors"
            >
              ■ Stop
            </button>
          )}

          {/* Speed Selector */}
          <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-0.5">
            {speedOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setSpeed(opt.value)}
                className={`px-2 py-1 rounded text-[11px] font-mono transition-colors ${
                  speed === opt.value
                    ? 'bg-brand-600 text-white font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Toggle Transcript */}
        {showTranscriptToggle && (
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="text-xs font-mono text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 underline decoration-dotted transition-colors"
          >
            {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
          </button>
        )}
      </div>

      {/* Collapsible Transcript Display (For Study & Review) */}
      {showTranscript && (
        <div className="mt-3 p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs font-sans animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
            <span className="font-mono font-bold uppercase text-slate-400 text-[10px]">
              Audio Transcript
            </span>
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono">
              (In official TOEFL test, script is audio-only)
            </span>
          </div>

          {question.dialogue && question.dialogue.length > 0 ? (
            <div className="space-y-2">
              {question.dialogue.map((line, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="font-mono font-bold text-[10px] uppercase text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                    {line.speaker}:
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {line.text}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
              {question.audioScript}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
