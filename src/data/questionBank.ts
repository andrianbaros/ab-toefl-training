import { Question, SectionType, TestMode, TestSession } from '@/types';
import { LISTENING_QUESTIONS } from './listeningQuestions';
import { STRUCTURE_QUESTIONS } from './structureQuestions';
import { READING_PASSAGES } from './readingPassages';
import { VOCABULARY_QUESTIONS } from './vocabularyQuestions';
import { generateId } from '@/lib/utils';

// Flatten reading questions
export const ALL_READING_QUESTIONS: Question[] = READING_PASSAGES.flatMap((p) => p.questions);

export const ALL_QUESTIONS: Question[] = [
  ...LISTENING_QUESTIONS,
  ...STRUCTURE_QUESTIONS,
  ...ALL_READING_QUESTIONS,
  ...VOCABULARY_QUESTIONS,
];

export function getQuestionById(id: string): Question | undefined {
  return ALL_QUESTIONS.find((q) => q.id === id);
}

export function getQuestionsBySection(section: SectionType): Question[] {
  switch (section) {
    case 'listening':
      return LISTENING_QUESTIONS;
    case 'structure':
      return STRUCTURE_QUESTIONS;
    case 'reading':
      return ALL_READING_QUESTIONS;
    case 'vocabulary':
      return VOCABULARY_QUESTIONS;
    default:
      return [];
  }
}

export function createFullSimulationSession(): TestSession {
  // Official TOEFL ITP Simulation
  // Listening: 50 Qs (35m)
  // Structure: 40 Qs (25m)
  // Reading: 50 Qs (55m)
  // Total: 140 Qs, 115 minutes (6900 seconds)
  const listeningQs = LISTENING_QUESTIONS.slice(0, 50);
  const structureQs = STRUCTURE_QUESTIONS.slice(0, 40);
  const readingQs = ALL_READING_QUESTIONS.slice(0, 50);

  const simulationQuestions = [...listeningQs, ...structureQs, ...readingQs];
  const questionIds = simulationQuestions.map((q) => q.id);

  return {
    id: 'sim-' + generateId(),
    title: 'Full TOEFL ITP Simulation (140 Questions)',
    mode: 'simulation',
    section: 'full_simulation',
    questionIds,
    userAnswers: {},
    markedForReview: [],
    startedAt: new Date().toISOString(),
    timeLimitSeconds: 115 * 60, // 115 minutes = 6900s
    timeSpentSeconds: 0,
    status: 'in_progress',
    currentQuestionIndex: 0,
  };
}

export function createSectionSession(
  section: SectionType,
  count: number,
  mode: TestMode,
  selectedParts?: string[]
): TestSession {
  let pool = getQuestionsBySection(section);

  if (selectedParts && selectedParts.length > 0) {
    pool = pool.filter((q) => selectedParts.includes(q.part) || selectedParts.includes(q.subCategory));
  }

  // Pick questions up to count
  const selectedQuestions = pool.slice(0, Math.min(count, pool.length));
  const questionIds = selectedQuestions.map((q) => q.id);

  // Time calculations:
  // Listening ~ 42s/question
  // Structure ~ 37s/question
  // Reading ~ 66s/question
  // Vocabulary ~ 30s/question
  let timePerQuestion = 45;
  if (section === 'listening') timePerQuestion = 42;
  else if (section === 'structure') timePerQuestion = 38;
  else if (section === 'reading') timePerQuestion = 66;
  else if (section === 'vocabulary') timePerQuestion = 30;

  const timeLimitSeconds = mode === 'practice' ? 0 : Math.round(selectedQuestions.length * timePerQuestion);

  const titles: Record<SectionType, string> = {
    listening: 'Listening Comprehension Practice',
    structure: 'Structure & Written Expression Practice',
    reading: 'Reading Comprehension Practice',
    vocabulary: 'Vocabulary Mastery Practice',
  };

  return {
    id: 'test-' + generateId(),
    title: `${titles[section]} (${selectedQuestions.length} Qs)`,
    mode,
    section,
    selectedParts,
    questionIds,
    userAnswers: {},
    markedForReview: [],
    startedAt: new Date().toISOString(),
    timeLimitSeconds,
    timeSpentSeconds: 0,
    status: 'in_progress',
    currentQuestionIndex: 0,
  };
}

export function createRetrySession(questionIds: string[]): TestSession {
  return {
    id: 'retry-' + generateId(),
    title: `Retry Incorrect Questions (${questionIds.length} Qs)`,
    mode: 'practice',
    section: 'structure', // general practice
    questionIds,
    userAnswers: {},
    markedForReview: [],
    startedAt: new Date().toISOString(),
    timeLimitSeconds: 0,
    timeSpentSeconds: 0,
    status: 'in_progress',
    currentQuestionIndex: 0,
  };
}
