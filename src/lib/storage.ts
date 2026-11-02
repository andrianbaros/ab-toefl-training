import { TestSession, TestResult, VocabularyBookmark, UserSettings } from '@/types';

const STORAGE_KEYS = {
  SETTINGS: 'ab_toefl_settings',
  TEST_HISTORY: 'ab_toefl_history',
  ACTIVE_SESSION: 'ab_toefl_active_session',
  BOOKMARKS: 'ab_toefl_bookmarks',
  DIFFICULT_WORDS: 'ab_toefl_difficult_words',
};

const DEFAULT_SETTINGS: UserSettings = {
  userName: 'Student',
  targetScore: 550,
  theme: 'light',
  autoNextQuestion: false,
  soundEnabled: true,
  syncWithExaminer: true,
};

// Safe localStorage access
function getItem<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (err) {
    console.error(`Error reading ${key} from localStorage:`, err);
    return defaultValue;
  }
}

function setItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Error writing ${key} to localStorage:`, err);
  }
}

// User Settings
export function getStoredSettings(): UserSettings {
  return getItem<UserSettings>(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS);
}

export function saveStoredSettings(settings: Partial<UserSettings>): UserSettings {
  const current = getStoredSettings();
  const updated = { ...current, ...settings };
  setItem(STORAGE_KEYS.SETTINGS, updated);
  return updated;
}

// Active Test Session
export function getActiveSession(): TestSession | null {
  return getItem<TestSession | null>(STORAGE_KEYS.ACTIVE_SESSION, null);
}

export function saveActiveSession(session: TestSession | null): void {
  if (!session) {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
    }
  } else {
    setItem(STORAGE_KEYS.ACTIVE_SESSION, session);
  }
}

// Test History
export function getTestHistory(): TestResult[] {
  return getItem<TestResult[]>(STORAGE_KEYS.TEST_HISTORY, []);
}

export function getTestResultById(sessionId: string): TestResult | null {
  const history = getTestHistory();
  return history.find((res) => res.sessionId === sessionId) || null;
}

export function saveTestResult(result: TestResult): void {
  const history = getTestHistory();
  // Filter out any existing result with the same sessionId if re-saved
  const updated = [result, ...history.filter((r) => r.sessionId !== result.sessionId)];
  setItem(STORAGE_KEYS.TEST_HISTORY, updated);
  // Clear active session when completed
  saveActiveSession(null);
}

export function deleteTestResult(sessionId: string): void {
  const history = getTestHistory();
  const updated = history.filter((r) => r.sessionId !== sessionId);
  setItem(STORAGE_KEYS.TEST_HISTORY, updated);
}

// Vocabulary Bookmarks
export function getBookmarks(): VocabularyBookmark[] {
  return getItem<VocabularyBookmark[]>(STORAGE_KEYS.BOOKMARKS, []);
}

export function saveBookmark(bookmark: VocabularyBookmark): void {
  const bookmarks = getBookmarks();
  if (bookmarks.some((b) => b.word.toLowerCase() === bookmark.word.toLowerCase())) {
    return;
  }
  setItem(STORAGE_KEYS.BOOKMARKS, [bookmark, ...bookmarks]);
}

export function removeBookmark(id: string): void {
  const bookmarks = getBookmarks();
  setItem(
    STORAGE_KEYS.BOOKMARKS,
    bookmarks.filter((b) => b.id !== id && b.word !== id)
  );
}

export function toggleBookmarkMastered(id: string): void {
  const bookmarks = getBookmarks();
  const updated = bookmarks.map((b) =>
    b.id === id || b.word === id ? { ...b, mastered: !b.mastered } : b
  );
  setItem(STORAGE_KEYS.BOOKMARKS, updated);
}

// Difficult Words
export function getDifficultWords(): string[] {
  return getItem<string[]>(STORAGE_KEYS.DIFFICULT_WORDS, []);
}

export function addDifficultWord(word: string): void {
  const words = getDifficultWords();
  if (!words.includes(word)) {
    setItem(STORAGE_KEYS.DIFFICULT_WORDS, [...words, word]);
  }
}

export function removeDifficultWord(word: string): void {
  const words = getDifficultWords();
  setItem(
    STORAGE_KEYS.DIFFICULT_WORDS,
    words.filter((w) => w !== word)
  );
}

// Reset and Backup
export function resetAllData(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEYS.SETTINGS);
  window.localStorage.removeItem(STORAGE_KEYS.TEST_HISTORY);
  window.localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
  window.localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
  window.localStorage.removeItem(STORAGE_KEYS.DIFFICULT_WORDS);
}

export function exportBackupJSON(): string {
  const backup = {
    settings: getStoredSettings(),
    history: getTestHistory(),
    bookmarks: getBookmarks(),
    difficultWords: getDifficultWords(),
    exportedAt: new Date().toISOString(),
  };
  return JSON.stringify(backup, null, 2);
}

export function importBackupJSON(jsonStr: string): boolean {
  try {
    const data = JSON.parse(jsonStr);
    if (data.settings) setItem(STORAGE_KEYS.SETTINGS, data.settings);
    if (data.history) setItem(STORAGE_KEYS.TEST_HISTORY, data.history);
    if (data.bookmarks) setItem(STORAGE_KEYS.BOOKMARKS, data.bookmarks);
    if (data.difficultWords) setItem(STORAGE_KEYS.DIFFICULT_WORDS, data.difficultWords);
    return true;
  } catch (err) {
    console.error('Failed to import backup:', err);
    return false;
  }
}

export function exportHistoryCSV(): string {
  const history = getTestHistory();
  if (history.length === 0) return 'No history records found.';
  const headers = ['Date', 'Title', 'Section', 'Mode', 'Score', 'Accuracy (%)', 'Correct', 'Incorrect', 'Time Spent (s)'];
  const rows = history.map((item) => [
    `"${item.date}"`,
    `"${item.title.replace(/"/g, '""')}"`,
    `"${item.section}"`,
    `"${item.mode}"`,
    item.scaledScore,
    `${item.accuracy}%`,
    item.correctCount,
    item.incorrectCount,
    item.timeSpentSeconds,
  ]);
  return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
}
