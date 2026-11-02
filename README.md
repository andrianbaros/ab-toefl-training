# AB TOEFL TRAINING — TOEFL Master Platform

A complete, modern, self-guided TOEFL ITP practice platform built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)
![TOEFL ITP](https://img.shields.io/badge/Standard-TOEFL%20ITP-emerald)

---

## 🌟 Key Features

### 1. Listening Comprehension (Mekanisme Manual & Examiner Mode)
- **Test Mode (Candidate)**: Only questions and options (A, B, C, D) are displayed. Dialogue scripts remain strictly hidden.
- **Examiner Mode (`/examiner`)**: Designed for human proctors to read scripts aloud in a synchronized browser window.
  - Complete scripts with reading pacing instructions (~140 wpm).
  - 12-second pause stopwatch after each question prompt.
  - **Answer keys are hidden** on the proctor screen for test security.
  - Real-time cross-tab synchronization via `BroadcastChannel`.
- **Content**: 30 Short Conversations (Part A), 8 Longer Dialogues (Part B), and 12 Academic Lectures (Part C) = **50 Questions**.

### 2. Structure and Written Expression
- **Part A: Sentence Completion (30 Questions)**: Subject-Verb Agreement, Inversion, Clauses, Passive Voice, Subjunctive Mood, Parallel Structure.
- **Part B: Error Recognition (30 Questions)**: Standard TOEFL ITP format with underlined and labeled segments `(A)`, `(B)`, `(C)`, `(D)` to identify grammatical errors.
- **Total**: 60 in-depth grammar questions with detailed explanations.

### 3. Reading Comprehension
- **10 Original Academic Passages**: Biology, Astronomy, History, Technology, Environment, Psychology, Economics, Education, Anthropology, and Physics.
- **Split-Screen Desktop Layout**: Resizable, line-numbered academic reading text on the left, question navigator on the right.
- **Questions**: 5 questions per passage across Main Idea, Factual Information, Negative Factual, Inference, Vocabulary in Context, and Author's Purpose = **50 Questions**.

### 4. Vocabulary Mastery & Flashcards
- Drills for Synonyms, Antonyms, Academic Context, and Collocations.
- Interactive flashcards with click-to-flip cards.
- Custom vocabulary bookmarks with mastery status tracking.

### 5. Automated Evaluation & Scoring
- Official TOEFL ITP estimated scaled scoring (Listening 31–68, Structure 31–68, Reading 31–67, Total 310–677).
- CEFR level benchmark (A2 to C1).
- Automatic weakness diagnosis and tailored study recommendations.
- **Answer Review**: Full review with correct/incorrect indicators and "Retry Incorrect Questions" mode.

### 6. Storage & Settings
- Client-side storage (LocalStorage) with offline persistence.
- Export results to CSV.
- Full database backup & restore via JSON.
- Light, Dark, and System display theme modes.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with Node 20 / 24)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/andrianbaros/ab-toefl-training.git

# Navigate to project directory
cd ab-toefl-training

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

---

## 📦 Production Build

```bash
npm run build
npm run start
```

---

## 📄 License
MIT License. Created by Andrian Baros.
