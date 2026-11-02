import { Question, VocabularyBookmark } from '@/types';

export const VOCABULARY_QUESTIONS: Question[] = [
  // ==========================================
  // SYNONYMS (Questions 1 - 8)
  // ==========================================
  {
    id: 'voc-syn-01',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Synonyms',
    prompt: 'Choose the word that is closest in meaning to the capitalized word: "The researcher provided a METICULOUS description of the biochemical experiment."',
    options: [
      { label: 'A', text: 'Scrupulous and painstaking' },
      { label: 'B', text: 'Hastily prepared' },
      { label: 'C', text: 'Ambiguous' },
      { label: 'D', text: 'Theoretical' }
    ],
    correctAnswer: 'A',
    explanation: '"Meticulous" means showing great attention to detail, very careful, thorough, scrupulous, and painstaking.',
    difficulty: 'medium',
    tags: ['Vocabulary', 'Synonyms', 'Academic']
  },
  {
    id: 'voc-syn-02',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Synonyms',
    prompt: 'Choose the word that is closest in meaning to the capitalized word: "The politician made a PLAUSIBLE argument for reducing infrastructure taxes."',
    options: [
      { label: 'A', text: 'Believable and credible' },
      { label: 'B', text: 'Outrageous' },
      { label: 'C', text: 'Complicated' },
      { label: 'D', text: 'Unprecedented' }
    ],
    correctAnswer: 'A',
    explanation: '"Plausible" means seemingly reasonable, probable, or believable.',
    difficulty: 'easy',
    tags: ['Vocabulary', 'Synonyms', 'Logic']
  },
  {
    id: 'voc-syn-03',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Synonyms',
    prompt: 'Choose the word that is closest in meaning to the capitalized word: "The committee had to CURTAIL their discussion due to the sudden fire drill."',
    options: [
      { label: 'A', text: 'Shorten or restrict' },
      { label: 'B', text: 'Prolong' },
      { label: 'C', text: 'Broadcast' },
      { label: 'D', text: 'Publish' }
    ],
    correctAnswer: 'A',
    explanation: '"Curtail" means to reduce in extent or quantity, or to cut short.',
    difficulty: 'medium',
    tags: ['Vocabulary', 'Synonyms', 'Actions']
  },
  {
    id: 'voc-syn-04',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Synonyms',
    prompt: 'Choose the word that is closest in meaning to the capitalized word: "The new renewable energy legislation will FOSTER industrial innovation in clean tech."',
    options: [
      { label: 'A', text: 'Encourage and nurture' },
      { label: 'B', text: 'Prohibit' },
      { label: 'C', text: 'Ignore' },
      { label: 'D', text: 'Tax heavily' }
    ],
    correctAnswer: 'A',
    explanation: '"Foster" means to encourage, promote, or nurture the development or growth of something.',
    difficulty: 'easy',
    tags: ['Vocabulary', 'Synonyms', 'Academic']
  },
  {
    id: 'voc-syn-05',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Synonyms',
    prompt: 'Choose the word that is closest in meaning to the capitalized word: "The CEO was known for her PRAGMATIC approach to corporate problem-solving."',
    options: [
      { label: 'A', text: 'Practical and realistic' },
      { label: 'B', text: 'Idealistic and visionary' },
      { label: 'C', text: 'Reckless' },
      { label: 'D', text: 'Emotional' }
    ],
    correctAnswer: 'A',
    explanation: '"Pragmatic" means dealing with matters sensibly and realistically, based on practical rather than theoretical considerations.',
    difficulty: 'medium',
    tags: ['Vocabulary', 'Synonyms', 'Attributes']
  },
  {
    id: 'voc-syn-06',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Synonyms',
    prompt: 'Choose the word that is closest in meaning to the capitalized word: "The historical museum contains an EXQUISITE collection of jade artifacts."',
    options: [
      { label: 'A', text: 'Delicately beautiful and flawless' },
      { label: 'B', text: 'Cheap and manufactured' },
      { label: 'C', text: 'Oversized' },
      { label: 'D', text: 'Fragile and broken' }
    ],
    correctAnswer: 'A',
    explanation: '"Exquisite" denotes extremely beautiful, fine, and delicately crafted.',
    difficulty: 'easy',
    tags: ['Vocabulary', 'Synonyms', 'Descriptive']
  },
  {
    id: 'voc-syn-07',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Synonyms',
    prompt: 'Choose the word that is closest in meaning to the capitalized word: "The biologist noted that bacteria can PROLIFERATE at staggering rates in warm conditions."',
    options: [
      { label: 'A', text: 'Multiply rapidly' },
      { label: 'B', text: 'Perish completely' },
      { label: 'C', text: 'Hibernate' },
      { label: 'D', text: 'Mutate slowly' }
    ],
    correctAnswer: 'A',
    explanation: '"Proliferate" means to increase rapidly in numbers or multiply quickly.',
    difficulty: 'medium',
    tags: ['Vocabulary', 'Synonyms', 'Science']
  },
  {
    id: 'voc-syn-08',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Synonyms',
    prompt: 'Choose the word that is closest in meaning to the capitalized word: "The discovery of antibiotic mold in Fleming\'s lab was entirely FORTUITOUS."',
    options: [
      { label: 'A', text: 'Accidental and lucky' },
      { label: 'B', text: 'Carefully planned' },
      { label: 'C', text: 'Disastrous' },
      { label: 'D', text: 'Ineffective' }
    ],
    correctAnswer: 'A',
    explanation: '"Fortuitous" means happening by a fortunate chance rather than by design.',
    difficulty: 'hard',
    tags: ['Vocabulary', 'Synonyms', 'Academic']
  },

  // ==========================================
  // ANTONYMS (Questions 9 - 15)
  // ==========================================
  {
    id: 'voc-ant-09',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Antonyms',
    prompt: 'Choose the word that is OPPOSITE in meaning to the capitalized word: "The speaker gave an AMBIGUOUS response that left the press confused."',
    options: [
      { label: 'A', text: 'Unambiguous and explicit' },
      { label: 'B', text: 'Vague' },
      { label: 'C', text: 'Evasive' },
      { label: 'D', text: 'Humorous' }
    ],
    correctAnswer: 'A',
    explanation: '"Ambiguous" means open to more than one interpretation or unclear. Its antonym is "explicit" or "clear".',
    difficulty: 'easy',
    tags: ['Vocabulary', 'Antonyms', 'Communication']
  },
  {
    id: 'voc-ant-10',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Antonyms',
    prompt: 'Choose the word that is OPPOSITE in meaning to the capitalized word: "Water resources are becoming increasingly SCARCE in arid agricultural zones."',
    options: [
      { label: 'A', text: 'Abundant and plentiful' },
      { label: 'B', text: 'Depleted' },
      { label: 'C', text: 'Polluted' },
      { label: 'D', text: 'Expensive' }
    ],
    correctAnswer: 'A',
    explanation: '"Scarce" means insufficient for the demand. The opposite is "abundant" or "plentiful".',
    difficulty: 'easy',
    tags: ['Vocabulary', 'Antonyms', 'Environment']
  },
  {
    id: 'voc-ant-11',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Antonyms',
    prompt: 'Choose the word that is OPPOSITE in meaning to the capitalized word: "The scientist\'s conclusions were deemed DUBIOUS by peer reviewers."',
    options: [
      { label: 'A', text: 'Trustworthy and certain' },
      { label: 'B', text: 'Questionable' },
      { label: 'C', text: 'Controversial' },
      { label: 'D', text: 'Unverified' }
    ],
    correctAnswer: 'A',
    explanation: '"Dubious" means hesitating, doubting, or suspect. The opposite is "trustworthy", "certain", or "reliable".',
    difficulty: 'medium',
    tags: ['Vocabulary', 'Antonyms', 'Academic']
  },
  {
    id: 'voc-ant-12',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Antonyms',
    prompt: 'Choose the word that is OPPOSITE in meaning to the capitalized word: "The student showed RESILIENT determination despite failing the initial exam."',
    options: [
      { label: 'A', text: 'Fragile and easily discouraged' },
      { label: 'B', text: 'Persistent' },
      { label: 'C', text: 'Stubborn' },
      { label: 'D', text: 'Energetic' }
    ],
    correctAnswer: 'A',
    explanation: '"Resilient" means able to withstand or recover quickly from difficult conditions. Its opposite is "fragile" or "vulnerable".',
    difficulty: 'easy',
    tags: ['Vocabulary', 'Antonyms', 'Personality']
  },
  {
    id: 'voc-ant-13',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Antonyms',
    prompt: 'Choose the word that is OPPOSITE in meaning to the capitalized word: "The king wielded ARBITRARY power over his subjects."',
    options: [
      { label: 'A', text: 'Lawful and principled' },
      { label: 'B', text: 'Tyrannical' },
      { label: 'C', text: 'Random' },
      { label: 'D', text: 'Absolute' }
    ],
    correctAnswer: 'A',
    explanation: '"Arbitrary" means based on random choice or personal whim rather than reason or law. Its antonym is "principled" or "lawful".',
    difficulty: 'hard',
    tags: ['Vocabulary', 'Antonyms', 'Politics']
  },
  {
    id: 'voc-ant-14',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Antonyms',
    prompt: 'Choose the word that is OPPOSITE in meaning to the capitalized word: "The old computer software proved to be entirely OBSOLETE."',
    options: [
      { label: 'A', text: 'State-of-the-art and modern' },
      { label: 'B', text: 'Outdated' },
      { label: 'C', text: 'Defective' },
      { label: 'D', text: 'Incompatible' }
    ],
    correctAnswer: 'A',
    explanation: '"Obsolete" means no longer produced or used, out of date. The antonym is "modern", "current", or "state-of-the-art".',
    difficulty: 'easy',
    tags: ['Vocabulary', 'Antonyms', 'Technology']
  },
  {
    id: 'voc-ant-15',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Antonyms',
    prompt: 'Choose the word that is OPPOSITE in meaning to the capitalized word: "The witness gave a SUCCINCT summary of what occurred during the accident."',
    options: [
      { label: 'A', text: 'Wordy and rambling' },
      { label: 'B', text: 'Concise' },
      { label: 'C', text: 'Accurate' },
      { label: 'D', text: 'Short' }
    ],
    correctAnswer: 'A',
    explanation: '"Succinct" means briefly and clearly expressed (concise). Its opposite is "verbose", "wordy", or "rambling".',
    difficulty: 'medium',
    tags: ['Vocabulary', 'Antonyms', 'Communication']
  },

  // ==========================================
  // CONTEXTUAL MEANINGS & USAGE (Questions 16 - 25)
  // ==========================================
  {
    id: 'voc-con-16',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Meaning in Context',
    prompt: 'In academic writing, which word best completes the blank: "The empirical findings _______ the initial hypothesis proposed by the research team."',
    options: [
      { label: 'A', text: 'corroborated' },
      { label: 'B', text: 'retracted' },
      { label: 'C', text: 'demolished' },
      { label: 'D', text: 'counteracted' }
    ],
    correctAnswer: 'A',
    explanation: '"Corroborate" means to confirm or give support to a statement, theory, or finding with evidence.',
    difficulty: 'medium',
    tags: ['Vocabulary', 'Context', 'Academic Research']
  },
  {
    id: 'voc-con-17',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Meaning in Context',
    prompt: 'Which word best fills the blank: "To avoid conflicts of interest, the judge decided to _______ herself from the antitrust proceedings."',
    options: [
      { label: 'A', text: 'recuse' },
      { label: 'B', text: 'accuse' },
      { label: 'C', text: 'excuse' },
      { label: 'D', text: 'induce' }
    ],
    correctAnswer: 'A',
    explanation: '"Recuse" is the legal term for a judge or prosecutor excusing themselves from a case due to a conflict of interest.',
    difficulty: 'hard',
    tags: ['Vocabulary', 'Context', 'Law']
  },
  {
    id: 'voc-con-18',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Meaning in Context',
    prompt: 'Which word best fills the blank: "The company\'s sudden collapse was caused by an _______ of debt and plummeting export revenues."',
    options: [
      { label: 'A', text: 'accumulation' },
      { label: 'B', text: 'elimination' },
      { label: 'C', text: 'alleviation' },
      { label: 'D', text: 'isolation' }
    ],
    correctAnswer: 'A',
    explanation: '"Accumulation" refers to the continuous gathering, buildup, or growth of an amount, such as debt over time.',
    difficulty: 'easy',
    tags: ['Vocabulary', 'Context', 'Economics']
  },
  {
    id: 'voc-con-19',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Academic Vocabulary',
    prompt: 'Choose the word that best completes the sentence: "Deforestation in the Amazon basin poses an _______ threat to indigenous biodiversity."',
    options: [
      { label: 'A', text: 'imminent' },
      { label: 'B', text: 'eminent' },
      { label: 'C', text: 'innate' },
      { label: 'D', text: 'inert' }
    ],
    correctAnswer: 'A',
    explanation: '"Imminent" means about to happen very soon, often describing a looming danger or threat. ("Eminent" means distinguished/famous).',
    difficulty: 'medium',
    tags: ['Vocabulary', 'Confusing Words', 'Academic']
  },
  {
    id: 'voc-con-20',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Academic Vocabulary',
    prompt: 'Which word best fits: "The museum exhibition seeks to _______ public awareness concerning endangered marine fauna."',
    options: [
      { label: 'A', text: 'heighten' },
      { label: 'B', text: 'widen' },
      { label: 'C', text: 'lengthen' },
      { label: 'D', text: 'loosen' }
    ],
    correctAnswer: 'A',
    explanation: '"Heighten" is the standard collocated verb with "awareness" or "concern", meaning to increase or intensify.',
    difficulty: 'easy',
    tags: ['Vocabulary', 'Collocations', 'Usage']
  },
  {
    id: 'voc-con-21',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Meaning in Context',
    prompt: 'Which word best completes the sentence: "Despite decades of rigorous research, the origin of dark energy remains an _______ enigma to astrophysicists."',
    options: [
      { label: 'A', text: 'unresolved' },
      { label: 'B', text: 'insignificant' },
      { label: 'C', text: 'unbiased' },
      { label: 'D', text: 'inaccurate' }
    ],
    correctAnswer: 'A',
    explanation: '"Unresolved enigma" correctly denotes a mystery or puzzle that has not yet been solved.',
    difficulty: 'easy',
    tags: ['Vocabulary', 'Context', 'Science']
  },
  {
    id: 'voc-con-22',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Academic Vocabulary',
    prompt: 'Choose the correct word: "The university provost emphasized that scholarly integrity is _______ to academic credibility."',
    options: [
      { label: 'A', text: 'paramount' },
      { label: 'B', text: 'trivial' },
      { label: 'C', text: 'peripheral' },
      { label: 'D', text: 'superfluous' }
    ],
    correctAnswer: 'A',
    explanation: '"Paramount" means more important than anything else; supreme.',
    difficulty: 'medium',
    tags: ['Vocabulary', 'Academic', 'Priority']
  },
  {
    id: 'voc-con-23',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Meaning in Context',
    prompt: 'Which word best fills the blank: "The volcanic eruption produced _______ clouds of ash that completely blocked sunlight across the valley."',
    options: [
      { label: 'A', text: 'dense' },
      { label: 'B', text: 'sparse' },
      { label: 'C', text: 'transparent' },
      { label: 'D', text: 'fragile' }
    ],
    correctAnswer: 'A',
    explanation: '"Dense" describes clouds packed tightly with particles so thick that light cannot penetrate.',
    difficulty: 'easy',
    tags: ['Vocabulary', 'Physical Description', 'Science']
  },
  {
    id: 'voc-con-24',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Academic Vocabulary',
    prompt: 'Which word completes the blank: "Sociologists investigate how urban segregation _______ socio-economic inequalities across generations."',
    options: [
      { label: 'A', text: 'perpetuates' },
      { label: 'B', text: 'perforates' },
      { label: 'C', text: 'peruses' },
      { label: 'D', text: 'persecutes' }
    ],
    correctAnswer: 'A',
    explanation: '"Perpetuate" means to cause something (typically an undesirable situation or belief) to continue indefinitely.',
    difficulty: 'hard',
    tags: ['Vocabulary', 'Sociology', 'Academic Verbs']
  },
  {
    id: 'voc-con-25',
    section: 'vocabulary',
    part: 'vocabulary',
    subCategory: 'Word Usage',
    prompt: 'Choose the word that best fills the blank: "The archaeologist was praised for her _______ analysis of the hieroglyphic inscriptions."',
    options: [
      { label: 'A', text: 'lucid' },
      { label: 'B', text: 'opaque' },
      { label: 'C', text: 'turbid' },
      { label: 'D', text: 'obscure' }
    ],
    correctAnswer: 'A',
    explanation: '"Lucid" means expressed clearly and easy to understand. The other options mean cloudy, dark, or hard to see through.',
    difficulty: 'medium',
    tags: ['Vocabulary', 'Adjectives', 'Clarity']
  }
];

export const INITIAL_VOCABULARY_BOOKMARKS: VocabularyBookmark[] = [
  {
    id: 'vb-01',
    word: 'Meticulous',
    type: 'adjective',
    definition: 'Showing great attention to detail; very careful and precise.',
    example: 'The laboratory technician performed a meticulous inspection of every glass test tube.',
    synonyms: ['painstaking', 'scrupulous', 'fastidious', 'rigorous'],
    antonyms: ['careless', 'sloppy', 'negligent'],
    savedAt: '2026-11-01T10:00:00.000Z',
    mastered: false,
    notes: 'Frequently tested in TOEFL Structure and Reading.'
  },
  {
    id: 'vb-02',
    word: 'Proliferate',
    type: 'verb',
    definition: 'To increase rapidly in numbers; multiply.',
    example: 'Phytoplankton proliferate at extraordinary speeds during spring ocean upwelling.',
    synonyms: ['multiply', 'burgeon', 'escalate', 'expand'],
    antonyms: ['dwindle', 'diminish', 'decrease'],
    savedAt: '2026-11-01T10:05:00.000Z',
    mastered: true,
    notes: 'Root from Latin proles (offspring) + ferre (to bear).'
  },
  {
    id: 'vb-03',
    word: 'Subterranean',
    type: 'adjective',
    definition: 'Existing, situated, or operating below the surface of the earth.',
    example: 'Cave divers explored the vast subterranean aquifers located under the Yucatan peninsula.',
    synonyms: ['underground', 'subsurface', 'sunken'],
    antonyms: ['aerial', 'surface', 'terrestrial'],
    savedAt: '2026-11-01T10:10:00.000Z',
    mastered: false,
    notes: 'Sub (under) + terra (earth).'
  },
  {
    id: 'vb-04',
    word: 'Corroborate',
    type: 'verb',
    definition: 'To confirm or give support to a statement, theory, or finding.',
    example: 'Recent satellite telemetry corroborated the climatologists\' global warming predictions.',
    synonyms: ['substantiate', 'verify', 'validate', 'endorse'],
    antonyms: ['refute', 'contradict', 'disprove'],
    savedAt: '2026-11-01T10:15:00.000Z',
    mastered: false,
    notes: 'Essential academic verb for writing and reading sections.'
  },
  {
    id: 'vb-05',
    word: 'Intractable',
    type: 'adjective',
    definition: 'Hard to control, manage, or deal with; stubborn.',
    example: 'Chronic antibiotic resistance presents an increasingly intractable healthcare problem.',
    synonyms: ['unmanageable', 'stubborn', 'insurmountable'],
    antonyms: ['tractable', 'manageable', 'compliant'],
    savedAt: '2026-11-01T10:20:00.000Z',
    mastered: false,
    notes: 'Opposite of tractable.'
  },
  {
    id: 'vb-06',
    word: 'Mitigate',
    type: 'verb',
    definition: 'To make less severe, serious, or painful.',
    example: 'Planting urban trees helps mitigate the heat island effect in metropolitan centers.',
    synonyms: ['alleviate', 'attenuate', 'diminish', 'ease'],
    antonyms: ['aggravate', 'exacerbate', 'intensify'],
    savedAt: '2026-11-01T10:25:00.000Z',
    mastered: true,
    notes: 'Do not confuse with militate.'
  },
  {
    id: 'vb-07',
    word: 'Paramount',
    type: 'adjective',
    definition: 'More important than anything else; supreme.',
    example: 'Ensuring structural stability is of paramount concern in suspension bridge design.',
    synonyms: ['foremost', 'vital', 'predominant', 'essential'],
    antonyms: ['minor', 'secondary', 'trivial'],
    savedAt: '2026-11-01T10:30:00.000Z',
    mastered: false,
    notes: 'Used in expressions like "of paramount importance".'
  },
  {
    id: 'vb-08',
    word: 'Perpetuate',
    type: 'verb',
    definition: 'To make (something, typically an undesirable situation) continue indefinitely.',
    example: 'Spreading unsubstantiated rumors only serves to perpetuate public panic.',
    synonyms: ['continue', 'sustain', 'preserve', 'prolong'],
    antonyms: ['halt', 'abolish', 'terminate'],
    savedAt: '2026-11-01T10:35:00.000Z',
    mastered: false,
    notes: 'From perpetual.'
  }
];
