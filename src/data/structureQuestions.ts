import { Question } from '@/types';

export const STRUCTURE_QUESTIONS: Question[] = [
  // ========================================================
  // PART A: SENTENCE COMPLETION (Questions 1 - 30)
  // ========================================================
  {
    id: 'str-a-01',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Inversion',
    prompt: 'Not until the invention of the electron microscope _______ to observe the internal organelles of single-celled organisms.',
    options: [
      { label: 'A', text: 'biologists were able' },
      { label: 'B', text: 'were biologists able' },
      { label: 'C', text: 'biologists who were able' },
      { label: 'D', text: 'ability for biologists' }
    ],
    correctAnswer: 'B',
    explanation: 'When a negative adverbial clause like "Not until..." introduces a sentence, the main clause requires subject-auxiliary inversion ("were biologists able").',
    difficulty: 'hard',
    tags: ['Sentence Completion', 'Inversion', 'Negative Expressions']
  },
  {
    id: 'str-a-02',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Subject-Verb Agreement',
    prompt: 'Each of the ancient manuscripts discovered along the desert cliffside caves _______ meticulous chemical restoration.',
    options: [
      { label: 'A', text: 'require' },
      { label: 'B', text: 'requires' },
      { label: 'C', text: 'are requiring' },
      { label: 'D', text: 'have required' }
    ],
    correctAnswer: 'B',
    explanation: 'The true subject is the singular pronoun "Each", not the plural object of the preposition "manuscripts". Therefore, the singular verb "requires" is correct.',
    difficulty: 'medium',
    tags: ['Sentence Completion', 'Subject-Verb Agreement', 'Pronouns']
  },
  {
    id: 'str-a-03',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Adjective Clauses',
    prompt: 'Photosynthesis is the biochemical process _______ green plants convert radiant solar energy into stored glucose.',
    options: [
      { label: 'A', text: 'which' },
      { label: 'B', text: 'by which' },
      { label: 'C', text: 'that it' },
      { label: 'D', text: 'in that' }
    ],
    correctAnswer: 'B',
    explanation: '"By which" (meaning through which process) correctly introduces the relative clause without leaving an unlinked preposition at the end of the sentence.',
    difficulty: 'medium',
    tags: ['Sentence Completion', 'Adjective Clauses', 'Preposition + Relative Pronoun']
  },
  {
    id: 'str-a-04',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Reduced Adverbial Clauses',
    prompt: '_______ to ambient temperatures below freezing, liquid water crystallizes into a hexagonal molecular lattice.',
    options: [
      { label: 'A', text: 'When exposed' },
      { label: 'B', text: 'Exposing' },
      { label: 'C', text: 'It is exposed' },
      { label: 'D', text: 'Exposure' }
    ],
    correctAnswer: 'A',
    explanation: '"When exposed" is a reduced passive adverbial clause (short for "When it is exposed"). Liquid water receives the action of being exposed.',
    difficulty: 'medium',
    tags: ['Sentence Completion', 'Participles', 'Passive Voice']
  },
  {
    id: 'str-a-05',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Noun Clauses',
    prompt: 'Geologists still debate _______ the tectonic plate subduction commenced during the Hadean or Archean eon.',
    options: [
      { label: 'A', text: 'that' },
      { label: 'B', text: 'whether' },
      { label: 'C', text: 'what' },
      { label: 'D', text: 'which' }
    ],
    correctAnswer: 'B',
    explanation: '"Whether" is used to introduce an indirect question or noun clause indicating an alternative or uncertainty between two possibilities ("whether... or...").',
    difficulty: 'easy',
    tags: ['Sentence Completion', 'Noun Clauses', 'Conjunctions']
  },
  {
    id: 'str-a-06',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Parallel Structure',
    prompt: 'The architectural plan must balance aesthetic elegance, structural integrity, and _______.',
    options: [
      { label: 'A', text: 'to be environmentally sustainable' },
      { label: 'B', text: 'environmental sustainability' },
      { label: 'C', text: 'sustainably in the environment' },
      { label: 'D', text: 'environment that is sustainable' }
    ],
    correctAnswer: 'B',
    explanation: 'Parallel structure requires noun phrases connected in a series: "aesthetic elegance", "structural integrity", and "environmental sustainability".',
    difficulty: 'easy',
    tags: ['Sentence Completion', 'Parallel Structure', 'Nouns']
  },
  {
    id: 'str-a-07',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Conditionals & Inversion',
    prompt: '_______ the safety inspector noticed the faulty valve, the boiler explosion could have been prevented.',
    options: [
      { label: 'A', text: 'If had' },
      { label: 'B', text: 'Had' },
      { label: 'C', text: 'Unless' },
      { label: 'D', text: 'Were' }
    ],
    correctAnswer: 'B',
    explanation: '"Had the safety inspector noticed..." is an inverted third conditional equivalent to "If the safety inspector had noticed...".',
    difficulty: 'hard',
    tags: ['Sentence Completion', 'Conditionals', 'Inversion']
  },
  {
    id: 'str-a-08',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Appositives',
    prompt: 'Aconcagua, _______ in the Andes mountain range of Argentina, is the highest peak in the Western Hemisphere.',
    options: [
      { label: 'A', text: 'locating' },
      { label: 'B', text: 'it is located' },
      { label: 'C', text: 'located' },
      { label: 'D', text: 'was located' }
    ],
    correctAnswer: 'C',
    explanation: 'The past participial phrase "located in the Andes..." acts as an appositive modifier for the proper noun "Aconcagua". "It is located" or "was located" creates a comma splice.',
    difficulty: 'medium',
    tags: ['Sentence Completion', 'Appositives', 'Participles']
  },
  {
    id: 'str-a-09',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Comparatives',
    prompt: 'The deeper an oceanic trench descends below sea level, _______ hydrostatic pressure exerted on organismal physiology.',
    options: [
      { label: 'A', text: 'the greater the' },
      { label: 'B', text: 'greater is the' },
      { label: 'C', text: 'the greatest' },
      { label: 'D', text: 'it is greater' }
    ],
    correctAnswer: 'A',
    explanation: 'Correlative comparative structures require the formula "The + comparative..., the + comparative..." ("The deeper..., the greater the hydrostatic pressure...").',
    difficulty: 'medium',
    tags: ['Sentence Completion', 'Comparatives', 'Correlative Conjunctions']
  },
  {
    id: 'str-a-10',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Missing Verbs',
    prompt: 'Unlike astronomical stars which emit their own thermonuclear light, planets _______ celestial bodies that shine by reflected illumination.',
    options: [
      { label: 'A', text: 'are' },
      { label: 'B', text: 'being' },
      { label: 'C', text: 'to be' },
      { label: 'D', text: 'having been' }
    ],
    correctAnswer: 'A',
    explanation: 'The main independent clause requires a finite predicate verb to match the plural subject "planets". "Are" satisfies the finite verb requirement.',
    difficulty: 'easy',
    tags: ['Sentence Completion', 'Sentence Structure', 'Verbs']
  },
  {
    id: 'str-a-11',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Gerunds and Infinitives',
    prompt: 'The research committee postponed _______ a final decision on the grant allocation until further forensic audits were completed.',
    options: [
      { label: 'A', text: 'to make' },
      { label: 'B', text: 'making' },
      { label: 'C', text: 'make' },
      { label: 'D', text: 'in making' }
    ],
    correctAnswer: 'B',
    explanation: 'The verb "postpone" is followed by a gerund (-ing form), not an infinitive ("postponed making a final decision").',
    difficulty: 'medium',
    tags: ['Sentence Completion', 'Gerunds & Infinitives', 'Verb Complementation']
  },
  {
    id: 'str-a-12',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Subjunctive Mood',
    prompt: 'The public health agency strongly recommended that every healthcare practitioner _______ immunized against the seasonal influenza virus.',
    options: [
      { label: 'A', text: 'is' },
      { label: 'B', text: 'be' },
      { label: 'C', text: 'was' },
      { label: 'D', text: 'will be' }
    ],
    correctAnswer: 'B',
    explanation: 'Verbs of urging or recommendation (recommend, demand, insist) take a subjunctive that-clause using the base form of the verb ("be").',
    difficulty: 'hard',
    tags: ['Sentence Completion', 'Subjunctive Mood', 'Base Verbs']
  },
  {
    id: 'str-a-13',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Concessive Clauses',
    prompt: '_______ its microscopic physical dimensions, the transistor is regarded as one of the twentieth century\'s most transformative inventions.',
    options: [
      { label: 'A', text: 'Despite' },
      { label: 'B', text: 'Although' },
      { label: 'C', text: 'Even if' },
      { label: 'D', text: 'Whereas' }
    ],
    correctAnswer: 'A',
    explanation: '"Despite" is a preposition that precedes the noun phrase "its microscopic physical dimensions". "Although", "Even if", and "Whereas" require full clauses with verbs.',
    difficulty: 'easy',
    tags: ['Sentence Completion', 'Prepositions vs Conjunctions', 'Contrast']
  },
  {
    id: 'str-a-14',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Inversion with Negative Adverbs',
    prompt: 'Rarely _______ in the Sahara desert during the scorching summer months.',
    options: [
      { label: 'A', text: 'rain falls' },
      { label: 'B', text: 'does rain fall' },
      { label: 'C', text: 'is rain fallen' },
      { label: 'D', text: 'falling rain' }
    ],
    correctAnswer: 'B',
    explanation: 'Sentences beginning with negative adverbs such as "Rarely" require inversion of auxiliary and subject: "does rain fall".',
    difficulty: 'medium',
    tags: ['Sentence Completion', 'Inversion', 'Adverbs']
  },
  {
    id: 'str-a-15',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Passive Voice',
    prompt: 'The groundbreaking manuscript _______ by an anonymous scholar in the monastery library during the fourteenth century.',
    options: [
      { label: 'A', text: 'penned' },
      { label: 'B', text: 'was penned' },
      { label: 'C', text: 'had pen' },
      { label: 'D', text: 'has been penning' }
    ],
    correctAnswer: 'B',
    explanation: 'The sentence requires the passive past verb "was penned" because the manuscript was the object receiving the action of writing in the fourteenth century.',
    difficulty: 'easy',
    tags: ['Sentence Completion', 'Passive Voice', 'Past Tense']
  },
  {
    id: 'str-a-16',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Adverbial Clauses',
    prompt: '_______ helium is significantly lighter than atmospheric air, it is widely utilized to provide buoyancy in high-altitude meteorological balloons.',
    options: [
      { label: 'A', text: 'Because' },
      { label: 'B', text: 'Because of' },
      { label: 'C', text: 'Due to' },
      { label: 'D', text: 'On account of' }
    ],
    correctAnswer: 'A',
    explanation: '"Because" is a subordinate conjunction introducing the dependent clause "helium is significantly lighter...". The other options are prepositions followed by nouns.',
    difficulty: 'easy',
    tags: ['Sentence Completion', 'Cause & Effect', 'Conjunctions']
  },
  {
    id: 'str-a-17',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Prepositions',
    prompt: 'The avian flock was capable _______ flying across migratory routes spanning thousands of nautical miles.',
    options: [
      { label: 'A', text: 'of' },
      { label: 'B', text: 'to' },
      { label: 'C', text: 'for' },
      { label: 'D', text: 'with' }
    ],
    correctAnswer: 'A',
    explanation: 'The adjective "capable" idiomatically takes the preposition "of" followed by a gerund ("capable of flying").',
    difficulty: 'easy',
    tags: ['Sentence Completion', 'Preposition Collocations', 'Adjectives']
  },
  {
    id: 'str-a-18',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Adverb Position & Word Order',
    prompt: '_______ known as the "Father of Modern Economics," Adam Smith authored *The Wealth of Nations* in 1776.',
    options: [
      { label: 'A', text: 'Widely' },
      { label: 'B', text: 'He is widely' },
      { label: 'C', text: 'Because widely' },
      { label: 'D', text: 'That widely' }
    ],
    correctAnswer: 'A',
    explanation: '"Widely known as..." forms a participial adjective modifier describing Adam Smith. Adding "He is" creates two unspliced main clauses without a conjunction.',
    difficulty: 'medium',
    tags: ['Sentence Completion', 'Participial Phrases', 'Modifiers']
  },
  {
    id: 'str-a-19',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Correlative Conjunctions',
    prompt: 'Neither the principal investigator _______ the laboratory technicians were aware of the chemical instability of the reagent.',
    options: [
      { label: 'A', text: 'or' },
      { label: 'B', text: 'nor' },
      { label: 'C', text: 'and' },
      { label: 'D', text: 'neither' }
    ],
    correctAnswer: 'B',
    explanation: '"Neither" always pairs with the correlative conjunction "nor" ("Neither X nor Y").',
    difficulty: 'easy',
    tags: ['Sentence Completion', 'Correlative Conjunctions', 'Parallelism']
  },
  {
    id: 'str-a-20',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Tense Harmony',
    prompt: 'By the time the search and rescue team arrived at the summit, the blizzard _______ visibility entirely.',
    options: [
      { label: 'A', text: 'had obscured' },
      { label: 'B', text: 'has obscured' },
      { label: 'C', text: 'obscuring' },
      { label: 'D', text: 'was obscured' }
    ],
    correctAnswer: 'A',
    explanation: 'The time clause "By the time [past simple] arrived" indicates an action completed prior to another past event, which mandates the past perfect "had obscured".',
    difficulty: 'medium',
    tags: ['Sentence Completion', 'Past Perfect', 'Tense Harmony']
  },
  {
    id: 'str-a-21',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Modal Auxiliaries',
    prompt: 'The fossilized footprints indicate that predatory theropods _______ at speeds exceeding twenty miles per hour.',
    options: [
      { label: 'A', text: 'could run' },
      { label: 'B', text: 'can run' },
      { label: 'C', text: 'running' },
      { label: 'D', text: 'to be run' }
    ],
    correctAnswer: 'A',
    explanation: 'The past past-ability modal "could run" is required to match the historical past frame established by "indicate that theropods [past ability]".',
    difficulty: 'medium',
    tags: ['Sentence Completion', 'Modals', 'Verbs']
  },
  {
    id: 'str-a-22',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Noun Clauses as Subjects',
    prompt: '_______ causes certain oceanic currents to deviate from rectilinear courses is termed the Coriolis effect.',
    options: [
      { label: 'A', text: 'What' },
      { label: 'B', text: 'Which' },
      { label: 'C', text: 'That' },
      { label: 'D', text: 'It' }
    ],
    correctAnswer: 'A',
    explanation: '"What" introduces a nominal relative clause functioning as the subject of the main verb "is termed". ("What causes currents to deviate...")',
    difficulty: 'hard',
    tags: ['Sentence Completion', 'Noun Clauses', 'Subject Clauses']
  },
  {
    id: 'str-a-23',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Comparatives & Superlatives',
    prompt: 'Of all the chemical elements occurring naturally in the Earth\'s crust, oxygen is by far _______.',
    options: [
      { label: 'A', text: 'abundant' },
      { label: 'B', text: 'the most abundant' },
      { label: 'C', text: 'more abundant' },
      { label: 'D', text: 'as abundant' }
    ],
    correctAnswer: 'B',
    explanation: 'The introductory phrase "Of all the chemical elements..." sets up a superlative comparison, requiring "the most abundant".',
    difficulty: 'easy',
    tags: ['Sentence Completion', 'Superlatives', 'Adjectives']
  },
  {
    id: 'str-a-24',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Infinitive of Purpose',
    prompt: 'Marine iguanas submerge themselves in cold waters _______ on marine algae growing on underwater rocks.',
    options: [
      { label: 'A', text: 'to feed' },
      { label: 'B', text: 'for feed' },
      { label: 'C', text: 'feeding of' },
      { label: 'D', text: 'in order that feed' }
    ],
    correctAnswer: 'A',
    explanation: 'An infinitive of purpose ("to feed") expresses why the subject undertakes the action.',
    difficulty: 'easy',
    tags: ['Sentence Completion', 'Infinitives', 'Purpose']
  },
  {
    id: 'str-a-25',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Restrictive Adjective Clauses',
    prompt: 'Archaeologists discovered ceramic shards _______ to the late Bronze Age civilization.',
    options: [
      { label: 'A', text: 'belonging' },
      { label: 'B', text: 'which belonging' },
      { label: 'C', text: 'were belonging' },
      { label: 'D', text: 'they belonged' }
    ],
    correctAnswer: 'A',
    explanation: '"Belonging" is a present participial modifier functioning as a reduced relative clause (short for "which belonged to").',
    difficulty: 'medium',
    tags: ['Sentence Completion', 'Participles', 'Relative Clauses']
  },
  {
    id: 'str-a-26',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Pronoun Agreement',
    prompt: 'Every living creature relies on sensory inputs to navigate _______ immediate environment.',
    options: [
      { label: 'A', text: 'its' },
      { label: 'B', text: 'their' },
      { label: 'C', text: 'our' },
      { label: 'D', text: 'it\'s' }
    ],
    correctAnswer: 'A',
    explanation: 'The singular non-human antecedent "Every living creature" requires the singular possessive pronoun "its" (without apostrophe).',
    difficulty: 'easy',
    tags: ['Sentence Completion', 'Pronouns', 'Possessives']
  },
  {
    id: 'str-a-27',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Subject Inversion with Place Adverbials',
    prompt: 'At the eastern perimeter of the university campus _______ the newly inaugurated astronomical observatory.',
    options: [
      { label: 'A', text: 'stands' },
      { label: 'B', text: 'where stands' },
      { label: 'C', text: 'it stands' },
      { label: 'D', text: 'standing' }
    ],
    correctAnswer: 'A',
    explanation: 'When a prepositional phrase of location begins a sentence, full inversion is permitted or required: "At the eastern perimeter... stands the observatory".',
    difficulty: 'hard',
    tags: ['Sentence Completion', 'Inversion', 'Prepositional Phrases']
  },
  {
    id: 'str-a-28',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Passive Infinitives',
    prompt: 'The fragile glass artifacts must _______ with extreme caution during museum transit.',
    options: [
      { label: 'A', text: 'be handled' },
      { label: 'B', text: 'handle' },
      { label: 'C', text: 'handling' },
      { label: 'D', text: 'been handled' }
    ],
    correctAnswer: 'A',
    explanation: 'The modal "must" requires a base verb; since the artifacts receive the handling action, the passive form "must be handled" is correct.',
    difficulty: 'easy',
    tags: ['Sentence Completion', 'Modals', 'Passive Voice']
  },
  {
    id: 'str-a-29',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Cleft Sentences & Focus',
    prompt: 'It was the French scientist Louis Pasteur _______ disproved the longstanding doctrine of spontaneous generation.',
    options: [
      { label: 'A', text: 'who' },
      { label: 'B', text: 'which' },
      { label: 'C', text: 'whom' },
      { label: 'D', text: 'when' }
    ],
    correctAnswer: 'A',
    explanation: 'In a cleft focus construction ("It was [person] that/who..."), "who" or "that" is used when referring to a human subject.',
    difficulty: 'medium',
    tags: ['Sentence Completion', 'Cleft Sentences', 'Relative Pronouns']
  },
  {
    id: 'str-a-30',
    section: 'structure',
    part: 'sentence_completion',
    subCategory: 'Cumulative Adverbs',
    prompt: 'So rapid _______ that municipal authorities struggled to provide adequate sanitation and water infrastructure.',
    options: [
      { label: 'A', text: 'the city\'s urban growth was' },
      { label: 'B', text: 'was the city\'s urban growth' },
      { label: 'C', text: 'did the city grow' },
      { label: 'D', text: 'the growth of city' }
    ],
    correctAnswer: 'B',
    explanation: 'When "So + adjective" starts a sentence ("So rapid..."), inversion of verb and subject is required: "was the city\'s urban growth that...".',
    difficulty: 'hard',
    tags: ['Sentence Completion', 'Inversion', 'Result Clauses']
  },

  // ========================================================
  // PART B: ERROR RECOGNITION (Questions 31 - 60)
  // Format: Sentences with 4 underlined/bracketed sections (A, B, C, D)
  // Test takers identify which portion contains grammatical error.
  // ========================================================
  {
    id: 'str-b-31',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Word Form (Adverb vs Adjective)',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'Although the computational algorithm processed the meteorological data (A)[rapid], the technicians were unable to generate (B)[accurate] regional forecast maps (C)[before] the hurricane reached (D)[landfall].',
    errorUnderlines: [
      { label: 'A', text: 'rapid' },
      { label: 'B', text: 'accurate' },
      { label: 'C', text: 'before' },
      { label: 'D', text: 'landfall' }
    ],
    options: [
      { label: 'A', text: 'rapid' },
      { label: 'B', text: 'accurate' },
      { label: 'C', text: 'before' },
      { label: 'D', text: 'landfall' }
    ],
    correctAnswer: 'A',
    explanation: 'The adjective "rapid" should be changed to the adverb "rapidly" because it modifies the past verb "processed".',
    difficulty: 'easy',
    tags: ['Error Recognition', 'Word Form', 'Adverbs vs Adjectives']
  },
  {
    id: 'str-b-32',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Subject-Verb Agreement',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'A collection of medieval illuminated manuscripts (A)[dating] from the twelfth century (B)[have been] (C)[donated] to the rare books library by an anonymous (D)[benefactor].',
    errorUnderlines: [
      { label: 'A', text: 'dating' },
      { label: 'B', text: 'have been' },
      { label: 'C', text: 'donated' },
      { label: 'D', text: 'benefactor' }
    ],
    options: [
      { label: 'A', text: 'dating' },
      { label: 'B', text: 'have been' },
      { label: 'C', text: 'donated' },
      { label: 'D', text: 'benefactor' }
    ],
    correctAnswer: 'B',
    explanation: 'The head noun of the subject is the singular noun "collection", not the plural prepositional object "manuscripts". Therefore, "have been" must be corrected to singular "has been".',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Subject-Verb Agreement', 'Nouns']
  },
  {
    id: 'str-b-33',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Parallel Structure',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The curriculum encourages students (A)[to analyze] historical primary sources, (B)[synthesizing] disparate viewpoints, and (C)[construct] well-reasoned argumentative (D)[essays].',
    errorUnderlines: [
      { label: 'A', text: 'to analyze' },
      { label: 'B', text: 'synthesizing' },
      { label: 'C', text: 'construct' },
      { label: 'D', text: 'essays' }
    ],
    options: [
      { label: 'A', text: 'to analyze' },
      { label: 'B', text: 'synthesizing' },
      { label: 'C', text: 'construct' },
      { label: 'D', text: 'essays' }
    ],
    correctAnswer: 'B',
    explanation: 'Parallel structure with "to analyze" and "(to) construct" requires the base infinitive "synthesize" rather than the present participle "synthesizing".',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Parallel Structure', 'Infinitives']
  },
  {
    id: 'str-b-34',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Count vs Non-Count Nouns',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The environmental committee expressed concern regarding the (A)[large amount] of (B)[commercial vessels] navigating through the fragile coral reef sanctuary (C)[without] adequate navigational (D)[supervision].',
    errorUnderlines: [
      { label: 'A', text: 'large amount' },
      { label: 'B', text: 'commercial vessels' },
      { label: 'C', text: 'without' },
      { label: 'D', text: 'supervision' }
    ],
    options: [
      { label: 'A', text: 'large amount' },
      { label: 'B', text: 'commercial vessels' },
      { label: 'C', text: 'without' },
      { label: 'D', text: 'supervision' }
    ],
    correctAnswer: 'A',
    explanation: '"Vessels" is a countable plural noun. Therefore, "large amount" must be changed to "large number" ("a large number of commercial vessels").',
    difficulty: 'easy',
    tags: ['Error Recognition', 'Count vs Non-Count', 'Quantifiers']
  },
  {
    id: 'str-b-35',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Comparative Forms',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'Carbon dioxide is (A)[much more] soluble in cold seawater (B)[than] in warm tropical surface currents, making polar oceans (C)[far most] susceptible to ocean (D)[acidification].',
    errorUnderlines: [
      { label: 'A', text: 'much more' },
      { label: 'B', text: 'than' },
      { label: 'C', text: 'far most' },
      { label: 'D', text: 'acidification' }
    ],
    options: [
      { label: 'A', text: 'much more' },
      { label: 'B', text: 'than' },
      { label: 'C', text: 'far most' },
      { label: 'D', text: 'acidification' }
    ],
    correctAnswer: 'C',
    explanation: '"Far most" is incorrect in a comparative context comparing polar to tropical waters; it should be the comparative "far more susceptible".',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Comparatives', 'Modifiers']
  },
  {
    id: 'str-b-36',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Prepositions',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The distinguished chemist was acclaimed (A)[for] having discovered a synthetic catalyst that was completely (B)[different than] any compound previously (C)[synthesized] in academic (D)[laboratories].',
    errorUnderlines: [
      { label: 'A', text: 'for' },
      { label: 'B', text: 'different than' },
      { label: 'C', text: 'synthesized' },
      { label: 'D', text: 'laboratories' }
    ],
    options: [
      { label: 'A', text: 'for' },
      { label: 'B', text: 'different than' },
      { label: 'C', text: 'synthesized' },
      { label: 'D', text: 'laboratories' }
    ],
    correctAnswer: 'B',
    explanation: 'In formal standard written English tested on the TOEFL, "different from" is preferred over "different than".',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Prepositions', 'Collocations']
  },
  {
    id: 'str-b-37',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Redundancy',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'Because the delegates were unable to reach a consensus, the committee decided to (A)[revert back] to the (B)[original draft] that had been (C)[approved] during the previous (D)[annual assembly].',
    errorUnderlines: [
      { label: 'A', text: 'revert back' },
      { label: 'B', text: 'original draft' },
      { label: 'C', text: 'approved' },
      { label: 'D', text: 'annual assembly' }
    ],
    options: [
      { label: 'A', text: 'revert back' },
      { label: 'B', text: 'original draft' },
      { label: 'C', text: 'approved' },
      { label: 'D', text: 'annual assembly' }
    ],
    correctAnswer: 'A',
    explanation: '"Revert" already contains the meaning of returning backward, making "revert back" redundant. It should simply be "revert to".',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Redundancy', 'Diction']
  },
  {
    id: 'str-b-38',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Pronoun Case',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The dean presented the annual departmental teaching awards to Professor Hayes and (A)[she] during the university\'s (B)[commencement] ceremony held in the main (C)[auditorium] yesterday (D)[evening].',
    errorUnderlines: [
      { label: 'A', text: 'she' },
      { label: 'B', text: 'commencement' },
      { label: 'C', text: 'auditorium' },
      { label: 'D', text: 'evening' }
    ],
    options: [
      { label: 'A', text: 'she' },
      { label: 'B', text: 'commencement' },
      { label: 'C', text: 'auditorium' },
      { label: 'D', text: 'evening' }
    ],
    correctAnswer: 'A',
    explanation: '"She" is in the objective position as the object of the preposition "to" ("to Professor Hayes and [object]"). Therefore, it must be the objective pronoun "her".',
    difficulty: 'easy',
    tags: ['Error Recognition', 'Pronoun Case', 'Prepositional Objects']
  },
  {
    id: 'str-b-39',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Verb Tense / Aspect',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'Since the industrial revolution began in the late eighteenth century, atmospheric levels of carbon dioxide (A)[increased] (B)[exponentially], (C)[disrupting] established terrestrial and oceanic (D)[climates].',
    errorUnderlines: [
      { label: 'A', text: 'increased' },
      { label: 'B', text: 'exponentially' },
      { label: 'C', text: 'disrupting' },
      { label: 'D', text: 'climates' }
    ],
    options: [
      { label: 'A', text: 'increased' },
      { label: 'B', text: 'exponentially' },
      { label: 'C', text: 'disrupting' },
      { label: 'D', text: 'climates' }
    ],
    correctAnswer: 'A',
    explanation: 'The time clause starting with "Since [past point]..." signals an ongoing period reaching into the present, requiring the present perfect tense "have increased".',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Present Perfect', 'Tense Harmony']
  },
  {
    id: 'str-b-40',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Like vs As',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: '(A)[Like] most predatory cephalopods do, the common cuttlefish relies on rapid physiological pigment alterations (B)[to camouflage] itself (C)[against] marine predators (D)[lurking] in the kelp.',
    errorUnderlines: [
      { label: 'A', text: 'Like' },
      { label: 'B', text: 'to camouflage' },
      { label: 'C', text: 'against' },
      { label: 'D', text: 'lurking' }
    ],
    options: [
      { label: 'A', text: 'Like' },
      { label: 'B', text: 'to camouflage' },
      { label: 'C', text: 'against' },
      { label: 'D', text: 'lurking' }
    ],
    correctAnswer: 'A',
    explanation: 'When introducing a clause containing a subject and verb ("most predatory cephalopods do"), the conjunction "As" must be used instead of the preposition "Like".',
    difficulty: 'hard',
    tags: ['Error Recognition', 'Like vs As', 'Conjunctions']
  },
  {
    id: 'str-b-41',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Active vs Passive Participle',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The museum curator displayed an (A)[astonished] collection of prehistoric mammalian skeletons (B)[excavated] from the tar pits (C)[located] on the city\'s (D)[outskirts].',
    errorUnderlines: [
      { label: 'A', text: 'astonished' },
      { label: 'B', text: 'excavated' },
      { label: 'C', text: 'located' },
      { label: 'D', text: 'outskirts' }
    ],
    options: [
      { label: 'A', text: 'astonished' },
      { label: 'B', text: 'excavated' },
      { label: 'C', text: 'located' },
      { label: 'D', text: 'outskirts' }
    ],
    correctAnswer: 'A',
    explanation: '"Astonished" describes a person feeling surprise. To describe the collection causing wonder, the present participle "astonishing" is required.',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Participles as Adjectives', 'Word Choice']
  },
  {
    id: 'str-b-42',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Singular / Plural Agreement',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'Every mammalian species, (A)[regardless] of their geographic habitat, (B)[possesses] a four-chambered heart that (C)[pumps] oxygenated blood throughout (D)[the body].',
    errorUnderlines: [
      { label: 'A', text: 'regardless' },
      { label: 'B', text: 'their' },
      { label: 'C', text: 'pumps' },
      { label: 'D', text: 'the body' }
    ],
    options: [
      { label: 'A', text: 'regardless' },
      { label: 'B', text: 'their' },
      { label: 'C', text: 'pumps' },
      { label: 'D', text: 'the body' }
    ],
    correctAnswer: 'B',
    explanation: '"Every mammalian species" is grammatically singular. The pronoun referring back to it should be the singular possessive "its", not plural "their".',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Pronoun Agreement', 'Singular vs Plural']
  },
  {
    id: 'str-b-43',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'So vs Such',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The seismic tremors were of (A)[so high intensity] that structural engineers advised (B)[evacuating] all high-rise commercial office towers (C)[pending] safety (D)[inspections].',
    errorUnderlines: [
      { label: 'A', text: 'so high intensity' },
      { label: 'B', text: 'evacuating' },
      { label: 'C', text: 'pending' },
      { label: 'D', text: 'inspections' }
    ],
    options: [
      { label: 'A', text: 'so high intensity' },
      { label: 'B', text: 'evacuating' },
      { label: 'C', text: 'pending' },
      { label: 'D', text: 'inspections' }
    ],
    correctAnswer: 'A',
    explanation: 'Before an adjective + singular/uncountable noun ("high intensity"), "such" is required ("of such high intensity that...") or "so high an intensity".',
    difficulty: 'hard',
    tags: ['Error Recognition', 'So vs Such', 'Intensifiers']
  },
  {
    id: 'str-b-44',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Confusing Verbs (Lie vs Lay)',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The geological strata that (A)[laid] beneath the limestone plateau contain fossilized impressions of marine invertebrates (B)[dating back] (C)[millions of] years to the Paleozoic (D)[era].',
    errorUnderlines: [
      { label: 'A', text: 'laid' },
      { label: 'B', text: 'dating back' },
      { label: 'C', text: 'millions of' },
      { label: 'D', text: 'era' }
    ],
    options: [
      { label: 'A', text: 'laid' },
      { label: 'B', text: 'dating back' },
      { label: 'C', text: 'millions of' },
      { label: 'D', text: 'era' }
    ],
    correctAnswer: 'A',
    explanation: 'The intransitive verb meaning to rest or be situated in the past is "lay" (from lie/lay/lain), whereas "laid" is the past of transitive "lay" (to place something).',
    difficulty: 'hard',
    tags: ['Error Recognition', 'Lie vs Lay', 'Confusing Verbs']
  },
  {
    id: 'str-b-45',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Double Comparative',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'With the arrival of winter, the mountain passes became (A)[more narrower] and (B)[more treacherous], forcing the exploratory expedition (C)[to establish] a permanent winter base camp (D)[in the valley].',
    errorUnderlines: [
      { label: 'A', text: 'more narrower' },
      { label: 'B', text: 'more treacherous' },
      { label: 'C', text: 'to establish' },
      { label: 'D', text: 'in the valley' }
    ],
    options: [
      { label: 'A', text: 'more narrower' },
      { label: 'B', text: 'more treacherous' },
      { label: 'C', text: 'to establish' },
      { label: 'D', text: 'in the valley' }
    ],
    correctAnswer: 'A',
    explanation: '"Narrower" is already comparative with the -er suffix; adding "more" creates an erroneous double comparative. It should simply be "narrower".',
    difficulty: 'easy',
    tags: ['Error Recognition', 'Comparatives', 'Double Comparatives']
  },
  {
    id: 'str-b-46',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Word Form (Noun vs Verb)',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The government\'s sudden decision to impose trade tariffs had an immediate (A)[affect] on international financial markets, (B)[causing] major stock indices (C)[to tumble] (D)[sharply].',
    errorUnderlines: [
      { label: 'A', text: 'affect' },
      { label: 'B', text: 'causing' },
      { label: 'C', text: 'to tumble' },
      { label: 'D', text: 'sharply' }
    ],
    options: [
      { label: 'A', text: 'affect' },
      { label: 'B', text: 'causing' },
      { label: 'C', text: 'to tumble' },
      { label: 'D', text: 'sharply' }
    ],
    correctAnswer: 'A',
    explanation: 'The noun "effect" is needed after the adjective "immediate" ("had an immediate effect on..."). "Affect" is typically used as a verb.',
    difficulty: 'easy',
    tags: ['Error Recognition', 'Affect vs Effect', 'Word Form']
  },
  {
    id: 'str-b-47',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Preposition Errors',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The newly appointed ambassador insisted (A)[on] meeting with regional agricultural leaders (B)[in order to] gain firsthand knowledge (C)[about of] rural water distribution (D)[challenges].',
    errorUnderlines: [
      { label: 'A', text: 'on' },
      { label: 'B', text: 'in order to' },
      { label: 'C', text: 'about of' },
      { label: 'D', text: 'challenges' }
    ],
    options: [
      { label: 'A', text: 'on' },
      { label: 'B', text: 'in order to' },
      { label: 'C', text: 'about of' },
      { label: 'D', text: 'challenges' }
    ],
    correctAnswer: 'C',
    explanation: '"About of" is ungrammatical; the sentence should use either "about" or "of" ("knowledge about" or "knowledge of"), not both.',
    difficulty: 'easy',
    tags: ['Error Recognition', 'Prepositions', 'Redundant Prepositions']
  },
  {
    id: 'str-b-48',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Adverb vs Adjective',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'Although synthetic polymers can be engineered to be (A)[remarkable] durable, their (B)[inability] to decompose naturally presents an ever-growing threat to marine (C)[ecosystems] (D)[globally].',
    errorUnderlines: [
      { label: 'A', text: 'remarkable' },
      { label: 'B', text: 'inability' },
      { label: 'C', text: 'ecosystems' },
      { label: 'D', text: 'globally' }
    ],
    options: [
      { label: 'A', text: 'remarkable' },
      { label: 'B', text: 'inability' },
      { label: 'C', text: 'ecosystems' },
      { label: 'D', text: 'globally' }
    ],
    correctAnswer: 'A',
    explanation: 'The adverb "remarkably" is needed to modify the predicate adjective "durable" ("remarkably durable").',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Adverb modifying Adjective', 'Word Form']
  },
  {
    id: 'str-b-49',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Subject-Verb Inversion Error',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'Hardly (A)[the bell had] sounded (B)[when] hundreds of excited school children rushed (C)[through] the open doorway and onto the sunny (D)[playground].',
    errorUnderlines: [
      { label: 'A', text: 'the bell had' },
      { label: 'B', text: 'when' },
      { label: 'C', text: 'through' },
      { label: 'D', text: 'playground' }
    ],
    options: [
      { label: 'A', text: 'the bell had' },
      { label: 'B', text: 'when' },
      { label: 'C', text: 'through' },
      { label: 'D', text: 'playground' }
    ],
    correctAnswer: 'A',
    explanation: 'When "Hardly" begins a sentence, subject-auxiliary inversion is mandatory: "Hardly had the bell sounded when...".',
    difficulty: 'hard',
    tags: ['Error Recognition', 'Inversion', 'Negative Adverbials']
  },
  {
    id: 'str-b-50',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Pronoun Consistency',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'When one embarks on an intensive academic research career, (A)[you] must be prepared (B)[to dedicate] countless hours (C)[to rigorous] literature review and (D)[data verification].',
    errorUnderlines: [
      { label: 'A', text: 'you' },
      { label: 'B', text: 'to dedicate' },
      { label: 'C', text: 'to rigorous' },
      { label: 'D', text: 'data verification' }
    ],
    options: [
      { label: 'A', text: 'you' },
      { label: 'B', text: 'to dedicate' },
      { label: 'C', text: 'to rigorous' },
      { label: 'D', text: 'data verification' }
    ],
    correctAnswer: 'A',
    explanation: 'Pronoun point of view must remain consistent. Since the clause begins with the impersonal pronoun "one", the following subject pronoun should be "one" or "he or she", not the second-person "you".',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Pronoun Consistency', 'Point of View']
  },
  {
    id: 'str-b-51',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Gerund vs Infinitive',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The urban planning commission succeeded (A)[to transform] the abandoned industrial rail corridor (B)[into] a vibrant linear public park (C)[utilized by] cyclists and (D)[pedestrians].',
    errorUnderlines: [
      { label: 'A', text: 'to transform' },
      { label: 'B', text: 'into' },
      { label: 'C', text: 'utilized by' },
      { label: 'D', text: 'pedestrians' }
    ],
    options: [
      { label: 'A', text: 'to transform' },
      { label: 'B', text: 'into' },
      { label: 'C', text: 'utilized by' },
      { label: 'D', text: 'pedestrians' }
    ],
    correctAnswer: 'A',
    explanation: 'The verb "succeed" collocates with the preposition "in" followed by a gerund ("succeeded in transforming"), not an infinitive.',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Verb Collocation', 'Gerunds']
  },
  {
    id: 'str-b-52',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Uncountable Nouns with Plural -s',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'During the conference, the keynote speaker provided several valuable (A)[advices] (B)[concerning] effective methodologies for publishing scientific manuscripts in (C)[peer-reviewed] international (D)[journals].',
    errorUnderlines: [
      { label: 'A', text: 'advices' },
      { label: 'B', text: 'concerning' },
      { label: 'C', text: 'peer-reviewed' },
      { label: 'D', text: 'journals' }
    ],
    options: [
      { label: 'A', text: 'advices' },
      { label: 'B', text: 'concerning' },
      { label: 'C', text: 'peer-reviewed' },
      { label: 'D', text: 'journals' }
    ],
    correctAnswer: 'A',
    explanation: '"Advice" is an uncountable (non-count) noun and cannot take a plural -s or be directly preceded by "several". It should be "several pieces of advice" or "valuable advice".',
    difficulty: 'easy',
    tags: ['Error Recognition', 'Non-Count Nouns', 'Number']
  },
  {
    id: 'str-b-53',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Word Choice (Few vs Little)',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'There was (A)[few] doubt among the geological research team (B)[that] the volcanic caldera had experienced multiple eruptions (C)[prior to] recorded human (D)[civilization].',
    errorUnderlines: [
      { label: 'A', text: 'few' },
      { label: 'B', text: 'that' },
      { label: 'C', text: 'prior to' },
      { label: 'D', text: 'civilization' }
    ],
    options: [
      { label: 'A', text: 'few' },
      { label: 'B', text: 'that' },
      { label: 'C', text: 'prior to' },
      { label: 'D', text: 'civilization' }
    ],
    correctAnswer: 'A',
    explanation: '"Doubt" is an uncountable abstract noun in this context. Therefore, "little doubt" is required instead of "few doubt".',
    difficulty: 'easy',
    tags: ['Error Recognition', 'Few vs Little', 'Quantifiers']
  },
  {
    id: 'str-b-54',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Relative Pronoun Choice',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The astronomer (A)[which] formulated the mathematical theory of planetary motion spent decades (B)[analyzing] astronomical observations compiled (C)[by] his predecessor, Tycho Brahe, (D)[without] modern computers.',
    errorUnderlines: [
      { label: 'A', text: 'which' },
      { label: 'B', text: 'analyzing' },
      { label: 'C', text: 'by' },
      { label: 'D', text: 'without' }
    ],
    options: [
      { label: 'A', text: 'which' },
      { label: 'B', text: 'analyzing' },
      { label: 'C', text: 'by' },
      { label: 'D', text: 'without' }
    ],
    correctAnswer: 'A',
    explanation: 'The relative pronoun "which" cannot refer to human beings ("astronomer"). It must be replaced by "who".',
    difficulty: 'easy',
    tags: ['Error Recognition', 'Relative Pronouns', 'Humans vs Inanimate']
  },
  {
    id: 'str-b-55',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Word Order with Enough',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The lightweight polymer fabric was (A)[enough resilient] (B)[to withstand] the extreme atmospheric pressures and temperature fluctuations (C)[encountered] during the stratospheric test (D)[flight].',
    errorUnderlines: [
      { label: 'A', text: 'enough resilient' },
      { label: 'B', text: 'to withstand' },
      { label: 'C', text: 'encountered' },
      { label: 'D', text: 'flight' }
    ],
    options: [
      { label: 'A', text: 'enough resilient' },
      { label: 'B', text: 'to withstand' },
      { label: 'C', text: 'encountered' },
      { label: 'D', text: 'flight' }
    ],
    correctAnswer: 'A',
    explanation: 'When modifying an adjective, "enough" must follow the adjective: "resilient enough", not "enough resilient".',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Word Order', 'Adjective + Enough']
  },
  {
    id: 'str-b-56',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Subject-Verb Inversion with Negative Phrases',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'Under no circumstances (A)[students are permitted] (B)[to operate] high-voltage electrical equipment in the laboratory without the direct (C)[supervision] of a licensed safety (D)[instructor].',
    errorUnderlines: [
      { label: 'A', text: 'students are permitted' },
      { label: 'B', text: 'to operate' },
      { label: 'C', text: 'supervision' },
      { label: 'D', text: 'instructor' }
    ],
    options: [
      { label: 'A', text: 'students are permitted' },
      { label: 'B', text: 'to operate' },
      { label: 'C', text: 'supervision' },
      { label: 'D', text: 'instructor' }
    ],
    correctAnswer: 'A',
    explanation: '"Under no circumstances" is a negative prepositional phrase at the start of a clause, demanding inversion: "are students permitted".',
    difficulty: 'hard',
    tags: ['Error Recognition', 'Inversion', 'Negative Phrases']
  },
  {
    id: 'str-b-57',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Wrong Preposition with Dependent Clause',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The economic analyst attributed the sudden surge in consumer spending (A)[to the fact] (B)[because] interest rates had been dropped (C)[to historic lows] by the central bank (D)[earlier this quarter].',
    errorUnderlines: [
      { label: 'A', text: 'to the fact' },
      { label: 'B', text: 'because' },
      { label: 'C', text: 'to historic lows' },
      { label: 'D', text: 'earlier this quarter' }
    ],
    options: [
      { label: 'A', text: 'to the fact' },
      { label: 'B', text: 'because' },
      { label: 'C', text: 'to historic lows' },
      { label: 'D', text: 'earlier this quarter' }
    ],
    correctAnswer: 'B',
    explanation: '"To the fact" must be followed by the noun clause conjunction "that" ("to the fact that..."), not "because". "The fact because" is redundant and grammatically incorrect.',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Noun Clauses', 'Redundancy']
  },
  {
    id: 'str-b-58',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Passive with Intransitive Verb',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The unexpected solar flare (A)[was occurred] at noon, causing localized disruptions (B)[in] shortwave radio communications (C)[throughout] the northern (D)[hemisphere].',
    errorUnderlines: [
      { label: 'A', text: 'was occurred' },
      { label: 'B', text: 'in' },
      { label: 'C', text: 'throughout' },
      { label: 'D', text: 'hemisphere' }
    ],
    options: [
      { label: 'A', text: 'was occurred' },
      { label: 'B', text: 'in' },
      { label: 'C', text: 'throughout' },
      { label: 'D', text: 'hemisphere' }
    ],
    correctAnswer: 'A',
    explanation: '"Occur" is an intransitive verb and cannot take a passive voice ("was occurred"). It should be active simple past: "occurred".',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Intransitive Verbs', 'Passive Voice Error']
  },
  {
    id: 'str-b-59',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Missing Preposition',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'Many migratory marine mammals depend (A)[upon] echolocation to navigate and (B)[foraging] for sustenance when swimming (C)[through] murky, light-deprived (D)[depths].',
    errorUnderlines: [
      { label: 'A', text: 'upon' },
      { label: 'B', text: 'foraging' },
      { label: 'C', text: 'through' },
      { label: 'D', text: 'depths' }
    ],
    options: [
      { label: 'A', text: 'upon' },
      { label: 'B', text: 'foraging' },
      { label: 'C', text: 'through' },
      { label: 'D', text: 'depths' }
    ],
    correctAnswer: 'B',
    explanation: 'Parallel structure with the infinitive "to navigate" requires the base verb "(to) forage" ("to navigate and forage"), rather than the gerund "foraging".',
    difficulty: 'medium',
    tags: ['Error Recognition', 'Parallel Structure', 'Infinitives']
  },
  {
    id: 'str-b-60',
    section: 'structure',
    part: 'error_recognition',
    subCategory: 'Adjective Order & Form',
    prompt: 'Identify the one underlined word or phrase that must be changed for the sentence to be correct.',
    underlinedSentence: 'The archaeologists unearthed a (A)[well-preserved], (B)[two-hundred-years-old] ceramic vessel (C)[decorated with] intricate geometric patterns (D)[around the rim].',
    errorUnderlines: [
      { label: 'A', text: 'well-preserved' },
      { label: 'B', text: 'two-hundred-years-old' },
      { label: 'C', text: 'decorated with' },
      { label: 'D', text: 'around the rim' }
    ],
    options: [
      { label: 'A', text: 'well-preserved' },
      { label: 'B', text: 'two-hundred-years-old' },
      { label: 'C', text: 'decorated with' },
      { label: 'D', text: 'around the rim' }
    ],
    correctAnswer: 'B',
    explanation: 'When used as a compound adjective before a noun, unit words take the singular form: "two-hundred-year-old", not "two-hundred-years-old".',
    difficulty: 'easy',
    tags: ['Error Recognition', 'Compound Adjectives', 'Singular Measure Words']
  }
];
