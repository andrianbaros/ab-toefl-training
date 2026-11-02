export type SectionType = 'listening' | 'structure' | 'reading' | 'vocabulary';

export type ListeningPart = 'part_a' | 'part_b' | 'part_c';
export type StructurePart = 'part_a' | 'part_b';
export type TestMode = 'practice' | 'timed' | 'simulation';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface AnswerOption {
  label: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface ScriptDialogueLine {
  speaker: string; // e.g. "Man", "Woman", "Narrator", "Professor", "Student"
  text: string;
}

export interface Question {
  id: string;
  section: SectionType;
  part: string; // 'part_a' | 'part_b' | 'part_c' | 'sentence_completion' | 'error_recognition' | 'vocabulary' | 'reading'
  subCategory: string; // e.g. "Subject-Verb Agreement", "Inversion", "Main Idea", "Inference", "Idiom", "Academic Vocabulary"
  prompt: string;
  options: AnswerOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: DifficultyLevel;
  tags: string[];

  // Structure Part B (Error Recognition) special format
  // Full sentence with marked sections (A), (B), (C), (D)
  underlinedSentence?: string;
  errorUnderlines?: {
    label: 'A' | 'B' | 'C' | 'D';
    text: string;
    startIndex?: number;
    endIndex?: number;
  }[];

  // Listening special fields
  audioScript?: string; // Full text for Examiner Mode
  dialogue?: ScriptDialogueLine[]; // Structured dialogue
  groupTitle?: string; // e.g. "Conversation 1: Campus Library Policy"
  groupId?: string; // Identifies connected questions in Part B / Part C
  readingInstructions?: string; // Special instructions for the human examiner
  questionSpokenText?: string; // The question as read by the examiner, e.g. "What does the man imply?"

  // Reading special fields
  passageId?: string;
  passageTitle?: string;
  passageTopic?: string;
  lineReference?: number;
}

export interface ReadingPassage {
  id: string;
  title: string;
  topic: 'Science' | 'Biology' | 'History' | 'Technology' | 'Environment' | 'Psychology' | 'Astronomy' | 'Economics' | 'Education' | 'Anthropology';
  wordCount: number;
  paragraphs: string[];
  questions: Question[];
}

export interface TestSession {
  id: string;
  title: string;
  mode: TestMode;
  section: SectionType | 'full_simulation';
  selectedParts?: string[];
  questionIds: string[];
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  markedForReview: string[];
  startedAt: string;
  completedAt?: string;
  timeLimitSeconds: number; // 0 for untimed
  timeSpentSeconds: number;
  status: 'in_progress' | 'completed' | 'abandoned';
  currentQuestionIndex: number;
}

export interface TestResult {
  sessionId: string;
  date: string;
  title: string;
  section: SectionType | 'full_simulation';
  mode: TestMode;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  accuracy: number;
  scaledScore: number; // Estimated 310 - 677 for TOEFL ITP
  sectionScores?: {
    listening?: number; // 31 - 68
    structure?: number; // 31 - 68
    reading?: number;   // 31 - 67
  };
  timeSpentSeconds: number;
  tagBreakdown: Record<string, { total: number; correct: number; accuracy: number }>;
  weaknesses: string[];
  strengths: string[];
  recommendations: string[];
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  questions: Question[];
}

export interface VocabularyBookmark {
  id: string;
  word: string;
  type: string; // e.g. "noun", "verb", "adjective"
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
  savedAt: string;
  mastered: boolean;
  notes?: string;
}

export interface UserSettings {
  userName: string;
  targetScore: number;
  theme: 'light' | 'dark' | 'system';
  autoNextQuestion: boolean;
  soundEnabled: boolean;
  syncWithExaminer: boolean;
}

export interface ExaminerSyncMessage {
  type: 'SCRIPT_NAVIGATE' | 'PING' | 'PONG' | 'QUESTION_SELECT';
  scriptGroupId?: string;
  part?: ListeningPart;
  questionNumber?: number;
  totalQuestions?: number;
  timestamp: number;
}
