import { TestSession, TestResult, Question } from '@/types';
import { getQuestionById } from '@/data/questionBank';
import {
  getScaledListening,
  getScaledStructure,
  getScaledReading,
  calculateEstimatedTotalScore,
  generateWeaknessAnalysis,
} from '@/data/toeflScoring';
import { saveTestResult } from './storage';

export function gradeTestSession(session: TestSession): TestResult {
  const questions: Question[] = session.questionIds
    .map((id) => getQuestionById(id))
    .filter((q): q is Question => q !== undefined);

  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const tagBreakdown: Record<string, { total: number; correct: number; accuracy: number }> = {};

  // For Section-based scaled scores
  let listeningCorrect = 0;
  let listeningTotal = 0;
  let structureCorrect = 0;
  let structureTotal = 0;
  let readingCorrect = 0;
  let readingTotal = 0;

  questions.forEach((q) => {
    const userAnswer = session.userAnswers[q.id];
    const isCorrect = userAnswer === q.correctAnswer;
    const isAnswered = Boolean(userAnswer);

    if (!isAnswered) {
      unansweredCount++;
    } else if (isCorrect) {
      correctCount++;
    } else {
      incorrectCount++;
    }

    // Section counting
    if (q.section === 'listening') {
      listeningTotal++;
      if (isCorrect) listeningCorrect++;
    } else if (q.section === 'structure') {
      structureTotal++;
      if (isCorrect) structureCorrect++;
    } else if (q.section === 'reading') {
      readingTotal++;
      if (isCorrect) readingCorrect++;
    }

    // Tag breakdown
    const tags = [q.subCategory, ...(q.tags || [])];
    tags.forEach((tag) => {
      if (!tagBreakdown[tag]) {
        tagBreakdown[tag] = { total: 0, correct: 0, accuracy: 0 };
      }
      tagBreakdown[tag].total++;
      if (isCorrect) {
        tagBreakdown[tag].correct++;
      }
    });
  });

  // Calculate tag accuracies
  Object.keys(tagBreakdown).forEach((tag) => {
    const item = tagBreakdown[tag];
    item.accuracy = item.total > 0 ? (item.correct / item.total) * 100 : 0;
  });

  const totalQuestions = questions.length;
  const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Calculate Scaled Scores
  let scaledListening = 31;
  let scaledStructure = 31;
  let scaledReading = 31;
  let overallScaled = 310;

  if (session.section === 'full_simulation') {
    scaledListening = getScaledListening(listeningCorrect, Math.max(1, listeningTotal));
    scaledStructure = getScaledStructure(structureCorrect, Math.max(1, structureTotal));
    scaledReading = getScaledReading(readingCorrect, Math.max(1, readingTotal));
    overallScaled = calculateEstimatedTotalScore(scaledListening, scaledStructure, scaledReading);
  } else if (session.section === 'listening') {
    scaledListening = getScaledListening(correctCount, totalQuestions);
    overallScaled = calculateEstimatedTotalScore(scaledListening, scaledListening, scaledListening);
  } else if (session.section === 'structure') {
    scaledStructure = getScaledStructure(correctCount, totalQuestions);
    overallScaled = calculateEstimatedTotalScore(scaledStructure, scaledStructure, scaledStructure);
  } else if (session.section === 'reading') {
    scaledReading = getScaledReading(correctCount, totalQuestions);
    overallScaled = calculateEstimatedTotalScore(scaledReading, scaledReading, scaledReading);
  } else {
    // Vocabulary or general: approximate score based on accuracy
    const simulatedRaw = Math.round((accuracy / 100) * 50);
    scaledListening = getScaledListening(simulatedRaw, 50);
    scaledStructure = getScaledStructure(Math.round((accuracy / 100) * 40), 40);
    scaledReading = getScaledReading(simulatedRaw, 50);
    overallScaled = calculateEstimatedTotalScore(scaledListening, scaledStructure, scaledReading);
  }

  const { weaknesses, strengths, recommendations } = generateWeaknessAnalysis(tagBreakdown);

  const result: TestResult = {
    sessionId: session.id,
    date: new Date().toISOString(),
    title: session.title,
    section: session.section,
    mode: session.mode,
    totalQuestions,
    correctCount,
    incorrectCount,
    unansweredCount,
    accuracy,
    scaledScore: overallScaled,
    sectionScores: {
      listening: scaledListening,
      structure: scaledStructure,
      reading: scaledReading,
    },
    timeSpentSeconds: session.timeSpentSeconds,
    tagBreakdown,
    weaknesses,
    strengths,
    recommendations,
    userAnswers: session.userAnswers,
    questions,
  };

  saveTestResult(result);
  return result;
}
