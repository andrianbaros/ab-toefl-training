import { Question } from '@/types';

export const LISTENING_QUESTIONS: Question[] = [
  // ==========================================
  // PART A: SHORT CONVERSATIONS (Questions 1 - 30)
  // ==========================================
  {
    id: 'lis-a-01',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Idiomatic Expressions',
    prompt: 'What does the woman mean?',
    questionSpokenText: 'What does the woman mean?',
    readingInstructions: 'Read at a natural, steady conversational pace (approx. 130-150 wpm). Pause 12 seconds after reading the question.',
    dialogue: [
      { speaker: 'Man', text: 'Are you going to Professor Miller\'s lecture on European history tonight?' },
      { speaker: 'Woman', text: 'I wouldn\'t miss it for the world! He\'s renowned for his captivating discussions.' },
      { speaker: 'Narrator', text: 'What does the woman mean?' }
    ],
    audioScript: 'Man: Are you going to Professor Miller\'s lecture on European history tonight?\nWoman: I wouldn\'t miss it for the world! He\'s renowned for his captivating discussions.\nNarrator: What does the woman mean?',
    options: [
      { label: 'A', text: 'She thinks the lecture will be boring.' },
      { label: 'B', text: 'She is eager and definitely planning to attend.' },
      { label: 'C', text: 'She has traveled all over the world.' },
      { label: 'D', text: 'She does not have time to go tonight.' }
    ],
    correctAnswer: 'B',
    explanation: 'The idiom "I wouldn\'t miss it for the world" signifies that the speaker is extremely enthusiastic and certainly plans to attend the event.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Idioms', 'Agreement']
  },
  {
    id: 'lis-a-02',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Negative Expressions',
    prompt: 'What does the man imply?',
    questionSpokenText: 'What does the man imply?',
    readingInstructions: 'Stress the word "hardly" naturally in the man\'s line.',
    dialogue: [
      { speaker: 'Woman', text: 'Did you manage to get all the reference books for our literature term paper?' },
      { speaker: 'Man', text: 'I could hardly find any on the shelves; the reserve desk was virtually cleared out.' },
      { speaker: 'Narrator', text: 'What does the man imply?' }
    ],
    audioScript: 'Woman: Did you manage to get all the reference books for our literature term paper?\nMan: I could hardly find any on the shelves; the reserve desk was virtually cleared out.\nNarrator: What does the man imply?',
    options: [
      { label: 'A', text: 'He found almost none of the books he needed.' },
      { label: 'B', text: 'The reference books were placed on the wrong shelves.' },
      { label: 'C', text: 'He bought the books at the bookstore instead.' },
      { label: 'D', text: 'The library will close early today.' }
    ],
    correctAnswer: 'A',
    explanation: '"Could hardly find any" and "virtually cleared out" mean that almost no books were available on the shelves.',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'Negative Words', 'Inference']
  },
  {
    id: 'lis-a-03',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Suggestions & Advice',
    prompt: 'What does the woman suggest the man do?',
    questionSpokenText: 'What does the woman suggest the man do?',
    readingInstructions: 'Use friendly, encouraging intonation.',
    dialogue: [
      { speaker: 'Man', text: 'My laptop screen keeps flickering whenever I run this graphics software.' },
      { speaker: 'Woman', text: 'Why not bring it down to the campus IT help desk before your lab session?' },
      { speaker: 'Narrator', text: 'What does the woman suggest the man do?' }
    ],
    audioScript: 'Man: My laptop screen keeps flickering whenever I run this graphics software.\nWoman: Why not bring it down to the campus IT help desk before your lab session?\nNarrator: What does the woman suggest the man do?',
    options: [
      { label: 'A', text: 'Purchase a new laptop immediately.' },
      { label: 'B', text: 'Consult the university technical support staff.' },
      { label: 'C', text: 'Skip his upcoming laboratory session.' },
      { label: 'D', text: 'Uninstall all software programs.' }
    ],
    correctAnswer: 'B',
    explanation: 'The woman uses the suggestion pattern "Why not bring it down to the campus IT help desk...", recommending he seek assistance from campus tech support.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Suggestions', 'Campus Life']
  },
  {
    id: 'lis-a-04',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Contrasting Views',
    prompt: 'What does the man mean?',
    questionSpokenText: 'What does the man mean?',
    readingInstructions: 'Emphasize the contrast in the man\'s voice.',
    dialogue: [
      { speaker: 'Woman', text: 'I heard the registration deadline for the summer study abroad program was pushed back.' },
      { speaker: 'Man', text: 'If only that were true! My advisor confirmed it remains this Friday at noon.' },
      { speaker: 'Narrator', text: 'What does the man mean?' }
    ],
    audioScript: 'Woman: I heard the registration deadline for the summer study abroad program was pushed back.\nMan: If only that were true! My advisor confirmed it remains this Friday at noon.\nNarrator: What does the man mean?',
    options: [
      { label: 'A', text: 'The deadline was indeed extended.' },
      { label: 'B', text: 'He wishes the rumor were true, but the deadline has not changed.' },
      { label: 'C', text: 'His advisor postponed the deadline until next week.' },
      { label: 'D', text: 'He has decided not to go on the study abroad program.' }
    ],
    correctAnswer: 'B',
    explanation: 'The subjunctive wish "If only that were true!" indicates that the statement is false in reality; the deadline was not postponed.',
    difficulty: 'hard',
    tags: ['Part A: Short Conversation', 'Wishes & Subjunctive', 'Inference']
  },
  {
    id: 'lis-a-05',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Agreement',
    prompt: 'What does the woman mean?',
    questionSpokenText: 'What does the woman mean?',
    readingInstructions: 'Slight emphasis on "You can say that again".',
    dialogue: [
      { speaker: 'Man', text: 'The chemistry midterm was remarkably challenging, wasn\'t it?' },
      { speaker: 'Woman', text: 'You can say that again! I barely finished the calculations on the last page.' },
      { speaker: 'Narrator', text: 'What does the woman mean?' }
    ],
    audioScript: 'Man: The chemistry midterm was remarkably challenging, wasn\'t it?\nWoman: You can say that again! I barely finished the calculations on the last page.\nNarrator: What does the woman mean?',
    options: [
      { label: 'A', text: 'She wants the man to repeat his statement.' },
      { label: 'B', text: 'She completely agrees that the test was difficult.' },
      { label: 'C', text: 'She found the chemistry exam quite simple.' },
      { label: 'D', text: 'She did not finish the test on time.' }
    ],
    correctAnswer: 'B',
    explanation: 'The common colloquial idiom "You can say that again!" expresses emphatic agreement with the previous speaker.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Agreement', 'Idioms']
  },
  {
    id: 'lis-a-06',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Double Negatives',
    prompt: 'What does the man say about Sarah\'s presentation?',
    questionSpokenText: 'What does the man say about Sarah\'s presentation?',
    readingInstructions: 'Smooth pacing, clear articulation of "not uninformative".',
    dialogue: [
      { speaker: 'Woman', text: 'How did you feel about Sarah\'s seminar on renewable geothermal energy?' },
      { speaker: 'Man', text: 'Well, it wasn\'t uninformative, but she certainly could have structured her slides more effectively.' },
      { speaker: 'Narrator', text: 'What does the man say about Sarah\'s presentation?' }
    ],
    audioScript: 'Woman: How did you feel about Sarah\'s seminar on renewable geothermal energy?\nMan: Well, it wasn\'t uninformative, but she certainly could have structured her slides more effectively.\nNarrator: What does the man say about Sarah\'s presentation?',
    options: [
      { label: 'A', text: 'It provided some useful information despite weak organization.' },
      { label: 'B', text: 'It lacked any relevant information.' },
      { label: 'C', text: 'Her slides were the best part of the talk.' },
      { label: 'D', text: 'She spoke too quickly for anyone to understand.' }
    ],
    correctAnswer: 'A',
    explanation: '"Not uninformative" is a litotes (double negative) meaning it did convey useful information, while the conjunction "but" highlights that organization could have been better.',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'Double Negatives', 'Semantics']
  },
  {
    id: 'lis-a-07',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Surprise / Expectation',
    prompt: 'What had the woman assumed about Mark?',
    questionSpokenText: 'What had the woman assumed about Mark?',
    readingInstructions: 'Deliver the woman\'s line with genuine mild surprise.',
    dialogue: [
      { speaker: 'Man', text: 'Mark is running for student council president this term.' },
      { speaker: 'Woman', text: 'Really? Then he isn\'t graduating at the end of this semester?' },
      { speaker: 'Narrator', text: 'What had the woman assumed about Mark?' }
    ],
    audioScript: 'Man: Mark is running for student council president this term.\nWoman: Really? Then he isn\'t graduating at the end of this semester?\nNarrator: What had the woman assumed about Mark?',
    options: [
      { label: 'A', text: 'Mark had already dropped out of the university.' },
      { label: 'B', text: 'Mark would complete his studies this semester.' },
      { label: 'C', text: 'Mark was not interested in politics.' },
      { label: 'D', text: 'Mark had already won the election.' }
    ],
    correctAnswer: 'B',
    explanation: 'When the woman asks in surprise "Then he isn\'t graduating at the end of this semester?", it reveals she previously thought he was going to graduate now.',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'Unfulfilled Assumptions', 'Inference']
  },
  {
    id: 'lis-a-08',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Conditionals',
    prompt: 'What does the man imply?',
    questionSpokenText: 'What does the man imply?',
    readingInstructions: 'Clear conditional tone.',
    dialogue: [
      { speaker: 'Woman', text: 'Will you join us at the cafeteria for lunch?' },
      { speaker: 'Man', text: 'Had I known you were eating now, I wouldn\'t have grabbed a sandwich half an hour ago.' },
      { speaker: 'Narrator', text: 'What does the man imply?' }
    ],
    audioScript: 'Woman: Will you join us at the cafeteria for lunch?\nMan: Had I known you were eating now, I wouldn\'t have grabbed a sandwich half an hour ago.\nNarrator: What does the man imply?',
    options: [
      { label: 'A', text: 'He will order lunch with them now.' },
      { label: 'B', text: 'He has already eaten and will not eat lunch again.' },
      { label: 'C', text: 'He forgot to buy lunch today.' },
      { label: 'D', text: 'He does not like sandwiches.' }
    ],
    correctAnswer: 'B',
    explanation: 'The past counterfactual "Had I known... I wouldn\'t have grabbed a sandwich" reveals he already ate 30 minutes ago, so he cannot join them for a meal.',
    difficulty: 'hard',
    tags: ['Part A: Short Conversation', 'Conditionals', 'Inversion']
  },
  {
    id: 'lis-a-09',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Campus Situations',
    prompt: 'Where does this conversation most probably take place?',
    questionSpokenText: 'Where does this conversation most probably take place?',
    readingInstructions: 'Professional front-desk demeanor.',
    dialogue: [
      { speaker: 'Man', text: 'Excuse me, could I renew these three biology journals for another two weeks?' },
      { speaker: 'Woman', text: 'Let me scan your university ID card. Actually, two of them have recall requests placed on them, so they must be returned today.' },
      { speaker: 'Narrator', text: 'Where does this conversation most probably take place?' }
    ],
    audioScript: 'Man: Excuse me, could I renew these three biology journals for another two weeks?\nWoman: Let me scan your university ID card. Actually, two of them have recall requests placed on them, so they must be returned today.\nNarrator: Where does this conversation most probably take place?',
    options: [
      { label: 'A', text: 'In a university bookstore.' },
      { label: 'B', text: 'At a campus library circulation desk.' },
      { label: 'C', text: 'In a biology laboratory.' },
      { label: 'D', text: 'At the student housing office.' }
    ],
    correctAnswer: 'B',
    explanation: 'Keywords like "renew journals", "scan university ID", and "recall requests" indicate this is taking place at a university library.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Setting & Location', 'Campus Life']
  },
  {
    id: 'lis-a-10',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Uncertainty & Meaning',
    prompt: 'What does the woman mean?',
    questionSpokenText: 'What does the woman mean?',
    readingInstructions: 'Skeptical tone on the second line.',
    dialogue: [
      { speaker: 'Man', text: 'I think our team will win the engineering design competition with ease.' },
      { speaker: 'Woman', text: 'Let\'s not count our chickens before they hatch. MIT and Stanford entered formidable prototypes.' },
      { speaker: 'Narrator', text: 'What does the woman mean?' }
    ],
    audioScript: 'Man: I think our team will win the engineering design competition with ease.\nWoman: Let\'s not count our chickens before they hatch. MIT and Stanford entered formidable prototypes.\nNarrator: What does the woman mean?',
    options: [
      { label: 'A', text: 'They should not be overly confident before the final results.' },
      { label: 'B', text: 'They need to buy more parts for their prototype.' },
      { label: 'C', text: 'Other teams will probably withdraw from the race.' },
      { label: 'D', text: 'She thinks their team has already lost.' }
    ],
    correctAnswer: 'A',
    explanation: 'The idiom "Don\'t count your chickens before they hatch" means one should not assume success before it has actually occurred.',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'Idioms', 'Caution']
  },
  {
    id: 'lis-a-11',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Preference',
    prompt: 'What would the man rather do?',
    questionSpokenText: 'What would the man rather do?',
    readingInstructions: 'Relaxed tone.',
    dialogue: [
      { speaker: 'Woman', text: 'Would you care to try that new French restaurant downtown tonight?' },
      { speaker: 'Man', text: 'I\'d sooner cook some pasta right here than fight the Friday evening traffic.' },
      { speaker: 'Narrator', text: 'What would the man rather do?' }
    ],
    audioScript: 'Woman: Would you care to try that new French restaurant downtown tonight?\nMan: I\'d sooner cook some pasta right here than fight the Friday evening traffic.\nNarrator: What would the man rather do?',
    options: [
      { label: 'A', text: 'Dine at the downtown French bistro.' },
      { label: 'B', text: 'Prepare a meal at home to avoid traffic.' },
      { label: 'C', text: 'Take public transportation downtown.' },
      { label: 'D', text: 'Order food delivery from a restaurant.' }
    ],
    correctAnswer: 'B',
    explanation: '"I\'d sooner [do X] than [do Y]" expresses a strong preference for doing X (cooking pasta at home) over Y (driving in traffic downtown).',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'Preferences', 'Daily Life']
  },
  {
    id: 'lis-a-12',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Indirect Meanings',
    prompt: 'What does the woman imply?',
    questionSpokenText: 'What does the woman imply?',
    readingInstructions: 'Gentle teasing tone.',
    dialogue: [
      { speaker: 'Man', text: 'Did Dave tell you he plans to paint his entire apartment by himself this Saturday?' },
      { speaker: 'Woman', text: 'Knowing Dave, he\'ll probably end up calling a painter by Sunday afternoon.' },
      { speaker: 'Narrator', text: 'What does the woman imply?' }
    ],
    audioScript: 'Man: Did Dave tell you he plans to paint his entire apartment by himself this Saturday?\nWoman: Knowing Dave, he\'ll probably end up calling a painter by Sunday afternoon.\nNarrator: What does the woman imply?',
    options: [
      { label: 'A', text: 'Dave is an expert painter.' },
      { label: 'B', text: 'Dave will likely find the job too difficult to finish alone.' },
      { label: 'C', text: 'Dave will help his neighbors paint their apartments.' },
      { label: 'D', text: 'Dave already hired professional painters.' }
    ],
    correctAnswer: 'B',
    explanation: 'The woman implies Dave frequently underestimates tasks and will need professional help before the weekend ends.',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'Inference', 'Character Traits']
  },
  {
    id: 'lis-a-13',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Phrasal Verbs',
    prompt: 'What does the man mean?',
    questionSpokenText: 'What does the man mean?',
    readingInstructions: 'Deliver smoothly.',
    dialogue: [
      { speaker: 'Woman', text: 'Are you still looking over the budget report for our club?' },
      { speaker: 'Man', text: 'I was, but I just ran across a discrepancy in the equipment expenses.' },
      { speaker: 'Narrator', text: 'What does the man mean?' }
    ],
    audioScript: 'Woman: Are you still looking over the budget report for our club?\nMan: I was, but I just ran across a discrepancy in the equipment expenses.\nNarrator: What does the man mean?',
    options: [
      { label: 'A', text: 'He completed the budget ahead of schedule.' },
      { label: 'B', text: 'He discovered an unexpected inconsistency in the report.' },
      { label: 'C', text: 'He ran out of money for equipment purchases.' },
      { label: 'D', text: 'He lost the receipt for the club expenses.' }
    ],
    correctAnswer: 'B',
    explanation: 'The phrasal verb "run across" means to discover or encounter unexpectedly, and "discrepancy" means inconsistency or error.',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'Phrasal Verbs', 'Vocabulary']
  },
  {
    id: 'lis-a-14',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Agreement',
    prompt: 'What does the woman mean?',
    questionSpokenText: 'What does the woman mean?',
    readingInstructions: 'Firm and affirmative tone.',
    dialogue: [
      { speaker: 'Man', text: 'The new recycling initiative on campus is long overdue.' },
      { speaker: 'Woman', text: 'Isn\'t it, though! We should have implemented it semesters ago.' },
      { speaker: 'Narrator', text: 'What does the woman mean?' }
    ],
    audioScript: 'Man: The new recycling initiative on campus is long overdue.\nWoman: Isn\'t it, though! We should have implemented it semesters ago.\nNarrator: What does the woman mean?',
    options: [
      { label: 'A', text: 'She agrees wholeheartedly with the man\'s assessment.' },
      { label: 'B', text: 'She does not believe the recycling program is necessary.' },
      { label: 'C', text: 'She is asking the man to clarify his opinion.' },
      { label: 'D', text: 'She thinks it was implemented too early.' }
    ],
    correctAnswer: 'A',
    explanation: 'The tag question with exclamatory intonation "Isn\'t it, though!" signifies strong agreement with the statement.',
    difficulty: 'hard',
    tags: ['Part A: Short Conversation', 'Tag Questions', 'Agreement']
  },
  {
    id: 'lis-a-15',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Negative Words',
    prompt: 'What does the woman mean?',
    questionSpokenText: 'What does the woman mean?',
    readingInstructions: 'Calm, thoughtful delivery.',
    dialogue: [
      { speaker: 'Man', text: 'Did Brian give any reason for arriving late to the seminar?' },
      { speaker: 'Woman', text: 'Seldom does Brian ever offer an explanation when he is tardy.' },
      { speaker: 'Narrator', text: 'What does the woman mean?' }
    ],
    audioScript: 'Man: Did Brian give any reason for arriving late to the seminar?\nWoman: Seldom does Brian ever offer an explanation when he is tardy.\nNarrator: What does the woman mean?',
    options: [
      { label: 'A', text: 'Brian gave a detailed explanation today.' },
      { label: 'B', text: 'Brian rarely explains why he is late.' },
      { label: 'C', text: 'Brian is almost always punctual.' },
      { label: 'D', text: 'Brian forgot about the seminar completely.' }
    ],
    correctAnswer: 'B',
    explanation: '"Seldom" means rarely or almost never. The inverted structure "Seldom does Brian..." indicates he almost never explains his lateness.',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'Negative Adverbs', 'Inversion']
  },
  {
    id: 'lis-a-16',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Idioms',
    prompt: 'What does the woman mean?',
    questionSpokenText: 'What does the woman mean?',
    readingInstructions: 'Slightly tired but resolute tone.',
    dialogue: [
      { speaker: 'Man', text: 'How are you balancing working part-time with taking four graduate courses?' },
      { speaker: 'Woman', text: 'To be honest, I\'ve been burning the candle at both ends lately.' },
      { speaker: 'Narrator', text: 'What does the woman mean?' }
    ],
    audioScript: 'Man: How are you balancing working part-time with taking four graduate courses?\nWoman: To be honest, I\'ve been burning the candle at both ends lately.\nNarrator: What does the woman mean?',
    options: [
      { label: 'A', text: 'She is saving electricity by using candles.' },
      { label: 'B', text: 'She is overworking herself from early morning until late at night.' },
      { label: 'C', text: 'She plans to quit her graduate program.' },
      { label: 'D', text: 'She enjoys having plenty of free time.' }
    ],
    correctAnswer: 'B',
    explanation: 'The idiom "burn the candle at both ends" means to exhaust oneself by doing too much, especially going to bed late and waking up early.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Idioms', 'Daily Life']
  },
  {
    id: 'lis-a-17',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Academic Context',
    prompt: 'What does the professor suggest?',
    questionSpokenText: 'What does the professor suggest?',
    readingInstructions: 'Instructive, mentor tone.',
    dialogue: [
      { speaker: 'Student', text: 'Professor Adams, my thesis statement feels too broad for a ten-page paper.' },
      { speaker: 'Professor', text: 'Narrow your focus specifically to the economic impacts in coastal cities rather than the entire continent.' },
      { speaker: 'Narrator', text: 'What does the professor suggest?' }
    ],
    audioScript: 'Student: Professor Adams, my thesis statement feels too broad for a ten-page paper.\nProfessor: Narrow your focus specifically to the economic impacts in coastal cities rather than the entire continent.\nNarrator: What does the professor suggest?',
    options: [
      { label: 'A', text: 'Expand the paper to twenty pages.' },
      { label: 'B', text: 'Concentrate on a more specific geographic region and topic.' },
      { label: 'C', text: 'Choose an entirely different subject for the thesis.' },
      { label: 'D', text: 'Collaborate with a partner on the research.' }
    ],
    correctAnswer: 'B',
    explanation: 'The professor advises the student to "narrow your focus specifically to the economic impacts in coastal cities", which means narrowing scope.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Academic Advice', 'Writing']
  },
  {
    id: 'lis-a-18',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Clarification',
    prompt: 'What does the woman mean?',
    questionSpokenText: 'What does the woman mean?',
    readingInstructions: 'Pleasant, helpful tone.',
    dialogue: [
      { speaker: 'Man', text: 'Could I take the chemistry lab on Thursday afternoon instead of Tuesday?' },
      { speaker: 'Woman', text: 'Only if another student is willing to swap sections with you; Thursday is at maximum capacity.' },
      { speaker: 'Narrator', text: 'What does the woman mean?' }
    ],
    audioScript: 'Man: Could I take the chemistry lab on Thursday afternoon instead of Tuesday?\nWoman: Only if another student is willing to swap sections with you; Thursday is at maximum capacity.\nNarrator: What does the woman mean?',
    options: [
      { label: 'A', text: 'The Thursday lab has plenty of open spots.' },
      { label: 'B', text: 'He can only switch if he finds a classmate to trade places.' },
      { label: 'C', text: 'The lab session has been moved to Friday.' },
      { label: 'D', text: 'He is not eligible to take chemistry this term.' }
    ],
    correctAnswer: 'B',
    explanation: '"Only if another student is willing to swap" means an exchange with another student is the sole condition under which he can change sections.',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'Conditions', 'Campus Life']
  },
  {
    id: 'lis-a-19',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Inference',
    prompt: 'What does the man imply about the weather?',
    questionSpokenText: 'What does the man imply about the weather?',
    readingInstructions: 'Observant tone.',
    dialogue: [
      { speaker: 'Woman', text: 'Do you think we should hold the alumni picnic out on the quad?' },
      { speaker: 'Man', text: 'Look at those dark clouds gathering over the hills—I wouldn\'t risk it.' },
      { speaker: 'Narrator', text: 'What does the man imply about the weather?' }
    ],
    audioScript: 'Woman: Do you think we should hold the alumni picnic out on the quad?\nMan: Look at those dark clouds gathering over the hills—I wouldn\'t risk it.\nNarrator: What does the man imply about the weather?',
    options: [
      { label: 'A', text: 'It looks very likely to rain soon.' },
      { label: 'B', text: 'The sky will clear up by noon.' },
      { label: 'C', text: 'It will be too hot to hold an outdoor picnic.' },
      { label: 'D', text: 'The quad has already been booked by another club.' }
    ],
    correctAnswer: 'A',
    explanation: 'The man points to "dark clouds gathering" and advises not risking an outdoor event, implying inclement weather or rain is approaching.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Weather', 'Inference']
  },
  {
    id: 'lis-a-20',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Idioms & Informal Speech',
    prompt: 'What does the woman imply?',
    questionSpokenText: 'What does the woman imply?',
    readingInstructions: 'Slight laugh at the end of the line.',
    dialogue: [
      { speaker: 'Man', text: 'I heard Kevin bought a vintage sports car on a whim.' },
      { speaker: 'Woman', text: 'Yes, and now he\'s learning the hard way that maintaining it costs an arm and a leg.' },
      { speaker: 'Narrator', text: 'What does the woman imply?' }
    ],
    audioScript: 'Man: I heard Kevin bought a vintage sports car on a whim.\nWoman: Yes, and now he\'s learning the hard way that maintaining it costs an arm and a leg.\nNarrator: What does the woman imply?',
    options: [
      { label: 'A', text: 'Kevin was injured in a car accident.' },
      { label: 'B', text: 'Keeping the car in good condition is extremely expensive.' },
      { label: 'C', text: 'Kevin sold his sports car to buy parts.' },
      { label: 'D', text: 'The car has been very cheap to repair.' }
    ],
    correctAnswer: 'B',
    explanation: 'The idiom "costs an arm and a leg" means something is exorbitant or very expensive.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Idioms', 'Expenses']
  },
  {
    id: 'lis-a-21',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Indirect Request',
    prompt: 'What does the man want to know?',
    questionSpokenText: 'What does the man want to know?',
    readingInstructions: 'Polite inquiry.',
    dialogue: [
      { speaker: 'Man', text: 'Would you happen to know if the campus shuttle runs on statutory holidays?' },
      { speaker: 'Woman', text: 'According to the updated schedule posted online, it operates on a reduced hourly loop.' },
      { speaker: 'Narrator', text: 'What does the man want to know?' }
    ],
    audioScript: 'Man: Would you happen to know if the campus shuttle runs on statutory holidays?\nWoman: According to the updated schedule posted online, it operates on a reduced hourly loop.\nNarrator: What does the man want to know?',
    options: [
      { label: 'A', text: 'How much the shuttle ticket costs.' },
      { label: 'B', text: 'Whether the bus service operates during holidays.' },
      { label: 'C', text: 'Where the shuttle driver is parked.' },
      { label: 'D', text: 'How to purchase a holiday bus pass.' }
    ],
    correctAnswer: 'B',
    explanation: 'The man explicitly asks "if the campus shuttle runs on statutory holidays", checking service availability.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Inquiries', 'Campus Life']
  },
  {
    id: 'lis-a-22',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Feelings & Reaction',
    prompt: 'How did the woman feel about the guest speaker\'s remarks?',
    questionSpokenText: 'How did the woman feel about the guest speaker\'s remarks?',
    readingInstructions: 'Express deep appreciation.',
    dialogue: [
      { speaker: 'Man', text: 'The guest speaker\'s keynote on renewable energy was quite unconventional.' },
      { speaker: 'Woman', text: 'Unconventional perhaps, but nothing short of inspiring.' },
      { speaker: 'Narrator', text: 'How did the woman feel about the guest speaker\'s remarks?' }
    ],
    audioScript: 'Man: The guest speaker\'s keynote on renewable energy was quite unconventional.\nWoman: Unconventional perhaps, but nothing short of inspiring.\nNarrator: How did the woman feel about the guest speaker\'s remarks?',
    options: [
      { label: 'A', text: 'She found them deeply motivating and impressive.' },
      { label: 'B', text: 'She considered them inappropriate and disorganized.' },
      { label: 'C', text: 'She felt the speech was too brief.' },
      { label: 'D', text: 'She disagreed with all of the speaker\'s points.' }
    ],
    correctAnswer: 'A',
    explanation: '"Nothing short of inspiring" is an emphatic expression meaning completely and truly inspiring.',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'Tone & Attitude', 'Evaluation']
  },
  {
    id: 'lis-a-23',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Confusion / Misunderstanding',
    prompt: 'What did the man think earlier?',
    questionSpokenText: 'What did the man think earlier?',
    readingInstructions: 'Mild realization in tone.',
    dialogue: [
      { speaker: 'Woman', text: 'The department orientation is in the auditorium, not the conference room.' },
      { speaker: 'Man', text: 'Oh, no wonder no one was in the hall when I walked by ten minutes ago!' },
      { speaker: 'Narrator', text: 'What did the man think earlier?' }
    ],
    audioScript: 'Woman: The department orientation is in the auditorium, not the conference room.\nMan: Oh, no wonder no one was in the hall when I walked by ten minutes ago!\nNarrator: What did the man think earlier?',
    options: [
      { label: 'A', text: 'He thought the event was held in the conference room.' },
      { label: 'B', text: 'He thought the orientation had been cancelled.' },
      { label: 'C', text: 'He believed the auditorium was under renovation.' },
      { label: 'D', text: 'He assumed the event started at ten o\'clock.' }
    ],
    correctAnswer: 'A',
    explanation: 'The man\'s reaction "Oh, no wonder no one was in the hall..." indicates he had previously gone to the conference room expecting the orientation there.',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'Misconceptions', 'Campus Life']
  },
  {
    id: 'lis-a-24',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Suggestions',
    prompt: 'What does the man suggest?',
    questionSpokenText: 'What does the man suggest?',
    readingInstructions: 'Practical, cooperative delivery.',
    dialogue: [
      { speaker: 'Woman', text: 'We have to submit this group report by five o\'clock, but the data analysis isn\'t finished.' },
      { speaker: 'Man', text: 'Why don\'t you polish the introduction and bibliography while I run the regression statistics?' },
      { speaker: 'Narrator', text: 'What does the man suggest?' }
    ],
    audioScript: 'Woman: We have to submit this group report by five o\'clock, but the data analysis isn\'t finished.\nMan: Why don\'t you polish the introduction and bibliography while I run the regression statistics?\nNarrator: What does the man suggest?',
    options: [
      { label: 'A', text: 'Asking the professor for a deadline extension.' },
      { label: 'B', text: 'Dividing the remaining workload between them.' },
      { label: 'C', text: 'Leaving the statistical analysis out of the report.' },
      { label: 'D', text: 'Working on the bibliography together tomorrow.' }
    ],
    correctAnswer: 'B',
    explanation: 'The man proposes that the woman focus on writing parts while he runs the statistics, effectively dividing the remaining tasks to finish before 5:00.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Suggestions', 'Group Work']
  },
  {
    id: 'lis-a-25',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Unfulfilled Wishes',
    prompt: 'What does the woman imply?',
    questionSpokenText: 'What does the woman imply?',
    readingInstructions: 'Rueful, reflective tone.',
    dialogue: [
      { speaker: 'Man', text: 'Did you get tickets for the symphony orchestra performance?' },
      { speaker: 'Woman', text: 'I wish! By the time I logged onto the portal, every seat was taken.' },
      { speaker: 'Narrator', text: 'What does the woman imply?' }
    ],
    audioScript: 'Man: Did you get tickets for the symphony orchestra performance?\nWoman: I wish! By the time I logged onto the portal, every seat was taken.\nNarrator: What does the woman imply?',
    options: [
      { label: 'A', text: 'She was unable to purchase tickets because they were sold out.' },
      { label: 'B', text: 'She decided she did not want to attend the performance.' },
      { label: 'C', text: 'She received a free ticket from a classmate.' },
      { label: 'D', text: 'The portal was shut down due to technical errors.' }
    ],
    correctAnswer: 'A',
    explanation: '"I wish!" followed by "every seat was taken" implies she could not get a ticket because the show was completely sold out.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Wishes', 'Ticketing']
  },
  {
    id: 'lis-a-26',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Degree & Intensity',
    prompt: 'What does the man mean?',
    questionSpokenText: 'What does the man mean?',
    readingInstructions: 'Stress the word "anything" naturally.',
    dialogue: [
      { speaker: 'Woman', text: 'Is the new dean approachable?' },
      { speaker: 'Man', text: 'She is anything but distant; her door is open to students every afternoon.' },
      { speaker: 'Narrator', text: 'What does the man mean?' }
    ],
    audioScript: 'Woman: Is the new dean approachable?\nMan: She is anything but distant; her door is open to students every afternoon.\nNarrator: What does the man mean?',
    options: [
      { label: 'A', text: 'She is difficult to speak with.' },
      { label: 'B', text: 'She is very accessible and friendly.' },
      { label: 'C', text: 'Her office is located far away from campus.' },
      { label: 'D', text: 'She prefers communicating only by email.' }
    ],
    correctAnswer: 'B',
    explanation: 'The idiom "anything but [adjective]" means definitely not that adjective. "Anything but distant" means very warm, welcoming, and approachable.',
    difficulty: 'hard',
    tags: ['Part A: Short Conversation', 'Idioms', 'Opposite Meaning']
  },
  {
    id: 'lis-a-27',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Advice',
    prompt: 'What advice does the woman give?',
    questionSpokenText: 'What advice does the woman give?',
    readingInstructions: 'Caring, practical delivery.',
    dialogue: [
      { speaker: 'Man', text: 'I have three final exams scheduled on the same calendar day.' },
      { speaker: 'Woman', text: 'The academic regulations state that you can petition the registrar to reschedule the middle exam.' },
      { speaker: 'Narrator', text: 'What advice does the woman give?' }
    ],
    audioScript: 'Man: I have three final exams scheduled on the same calendar day.\nWoman: The academic regulations state that you can petition the registrar to reschedule the middle exam.\nNarrator: What advice does the woman give?',
    options: [
      { label: 'A', text: 'Drop one of his academic courses.' },
      { label: 'B', text: 'Study for all three exams simultaneously.' },
      { label: 'C', text: 'Request an exam rescheduling through official policy.' },
      { label: 'D', text: 'Ask his professors to grade him based on homework alone.' }
    ],
    correctAnswer: 'C',
    explanation: 'The woman advises him to use the academic regulation allowing students with three same-day finals to petition the registrar for a reschedule.',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'University Policy', 'Advice']
  },
  {
    id: 'lis-a-28',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Idioms',
    prompt: 'What does the man say about the task?',
    questionSpokenText: 'What does the man say about the task?',
    readingInstructions: 'Light, reassuring tone.',
    dialogue: [
      { speaker: 'Woman', text: 'Are you worried about formatting your bibliography in APA style?' },
      { speaker: 'Man', text: 'Not at all. With the new bibliographic software, it\'s a piece of cake.' },
      { speaker: 'Narrator', text: 'What does the man say about the task?' }
    ],
    audioScript: 'Woman: Are you worried about formatting your bibliography in APA style?\nMan: Not at all. With the new bibliographic software, it\'s a piece of cake.\nNarrator: What does the man say about the task?',
    options: [
      { label: 'A', text: 'He finds the software confusing.' },
      { label: 'B', text: 'He considers formatting the citations very easy.' },
      { label: 'C', text: 'He needs to buy dessert for his study group.' },
      { label: 'D', text: 'He has not started formatting his paper.' }
    ],
    correctAnswer: 'B',
    explanation: 'The idiom "a piece of cake" denotes that something is very simple and effortless.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Idioms', 'Simplicity']
  },
  {
    id: 'lis-a-29',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Inference',
    prompt: 'What does the woman imply about Greg?',
    questionSpokenText: 'What does the woman imply about Greg?',
    readingInstructions: 'Slightly impressed intonation.',
    dialogue: [
      { speaker: 'Man', text: 'I can\'t believe Greg mastered four computer programming languages in a single summer.' },
      { speaker: 'Woman', text: 'When Greg sets his mind to a goal, he never leaves any stone unturned.' },
      { speaker: 'Narrator', text: 'What does the woman imply about Greg?' }
    ],
    audioScript: 'Man: I can\'t believe Greg mastered four computer programming languages in a single summer.\nWoman: When Greg sets his mind to a goal, he never leaves any stone unturned.\nNarrator: What does the woman imply about Greg?',
    options: [
      { label: 'A', text: 'Greg gives up quickly when faced with difficult challenges.' },
      { label: 'B', text: 'Greg is extremely thorough and persistent in achieving goals.' },
      { label: 'C', text: 'Greg studied geology during his summer vacation.' },
      { label: 'D', text: 'Greg received external help with his code.' }
    ],
    correctAnswer: 'B',
    explanation: '"Leaves no stone unturned" means doing everything possible and being extraordinarily thorough and determined.',
    difficulty: 'medium',
    tags: ['Part A: Short Conversation', 'Idioms', 'Determination']
  },
  {
    id: 'lis-a-30',
    section: 'listening',
    part: 'part_a',
    subCategory: 'Suggestions',
    prompt: 'What does the man suggest they do?',
    questionSpokenText: 'What does the man suggest they do?',
    readingInstructions: 'Proactive tone.',
    dialogue: [
      { speaker: 'Woman', text: 'The lines at the campus bookstore are stretching all the way outside the door.' },
      { speaker: 'Man', text: 'Let\'s order our course packs online and pick them up at the express lockers tomorrow.' },
      { speaker: 'Narrator', text: 'What does the man suggest they do?' }
    ],
    audioScript: 'Woman: The lines at the campus bookstore are stretching all the way outside the door.\nMan: Let\'s order our course packs online and pick them up at the express lockers tomorrow.\nNarrator: What does the man suggest they do?',
    options: [
      { label: 'A', text: 'Wait patiently in the bookstore line today.' },
      { label: 'B', text: 'Purchase course materials online for automated locker pickup.' },
      { label: 'C', text: 'Borrow course materials from older students.' },
      { label: 'D', text: 'Ask the instructor to distribute free photocopies.' }
    ],
    correctAnswer: 'B',
    explanation: 'The man suggests ordering online and retrieving the packs from the express lockers to bypass the long in-person lines.',
    difficulty: 'easy',
    tags: ['Part A: Short Conversation', 'Suggestions', 'Campus Services']
  },

  // ==========================================
  // PART B: LONGER CONVERSATIONS (Questions 31 - 38)
  // Conversation 1: Questions 31-34 (Biology Field Trip & Research)
  // Conversation 2: Questions 35-38 (Campus Internship & Work-Study)
  // ==========================================
  {
    id: 'lis-b-31',
    section: 'listening',
    part: 'part_b',
    groupId: 'lis-conv-01',
    groupTitle: 'Conversation 1: Wetland Ecology Field Project',
    subCategory: 'Main Purpose',
    prompt: 'What is the primary topic of the conversation?',
    questionSpokenText: 'What is the primary topic of the conversation?',
    readingInstructions: '[READ SCRIPT 1 FIRST]. Then read Question 31. Pause 12 seconds.',
    dialogue: [
      { speaker: 'Narrator', text: 'Questions 31 through 34. Listen to a conversation between two university biology students.' },
      { speaker: 'Female Student', text: 'Mark, have you chosen a topic for Professor Dawson\'s environmental science field project yet?' },
      { speaker: 'Male Student', text: 'I\'ve been leaning toward studying freshwater wetland restoration, specifically over at the Mill Creek Basin.' },
      { speaker: 'Female Student', text: 'Mill Creek? Isn\'t that the area where local runoff from the highway was degrading the water quality?' },
      { speaker: 'Male Student', text: 'Exactly. But two years ago, the county conservation department planted native cattails and sedges along the embankments to act as natural biofilters.' },
      { speaker: 'Female Student', text: 'Oh, phytoremediation! The plants actually absorb heavy metals and excess nitrates from the water.' },
      { speaker: 'Male Student', text: 'Right. I\'m planning to take water samples at three distinct points: upstream before the runoff enters, inside the wetland buffer zone, and downstream near the outlet to the lake.' },
      { speaker: 'Female Student', text: 'That sounds like a solid methodology. But won\'t you need specialized testing equipment for dissolved oxygen and pH levels?' },
      { speaker: 'Male Student', text: 'Yes, I spoke with Dr. Dawson this morning, and he agreed to loan me the department\'s portable digital probes for the weekend.' },
      { speaker: 'Narrator', text: 'Question 31. What is the primary topic of the conversation?' }
    ],
    audioScript: 'Narrator: Questions 31 through 34. Listen to a conversation between two biology students.\nFemale Student: Mark, have you chosen a topic for Professor Dawson\'s environmental science field project yet?\nMale Student: I\'ve been leaning toward studying freshwater wetland restoration, specifically over at the Mill Creek Basin.\nFemale Student: Mill Creek? Isn\'t that the area where local runoff from the highway was degrading the water quality?\nMale Student: Exactly. But two years ago, the county conservation department planted native cattails and sedges along the embankments to act as natural biofilters.\nFemale Student: Oh, phytoremediation! The plants actually absorb heavy metals and excess nitrates from the water.\nMale Student: Right. I\'m planning to take water samples at three distinct points: upstream before the runoff enters, inside the wetland buffer zone, and downstream near the outlet to the lake.\nFemale Student: That sounds like a solid methodology. But won\'t you need specialized testing equipment for dissolved oxygen and pH levels?\nMale Student: Yes, I spoke with Dr. Dawson this morning, and he agreed to loan me the department\'s portable digital probes for the weekend.\nNarrator: Question 31. What is the primary topic of the conversation?',
    options: [
      { label: 'A', text: 'Planting new highway landscaping trees.' },
      { label: 'B', text: 'A student\'s research design for a wetland water quality study.' },
      { label: 'C', text: 'How to calibrate laboratory pH meters.' },
      { label: 'D', text: 'The history of municipal pollution in county lakes.' }
    ],
    correctAnswer: 'B',
    explanation: 'The conversation revolves around Mark explaining his plan and methodology to measure water quality and wetland phytoremediation at Mill Creek for his field project.',
    difficulty: 'medium',
    tags: ['Part B: Long Conversation', 'Main Idea', 'Environmental Science']
  },
  {
    id: 'lis-b-32',
    section: 'listening',
    part: 'part_b',
    groupId: 'lis-conv-01',
    groupTitle: 'Conversation 1: Wetland Ecology Field Project',
    subCategory: 'Specific Detail',
    prompt: 'Why were native plants placed along the embankments of Mill Creek?',
    questionSpokenText: 'Why were native plants placed along the embankments of Mill Creek?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'To attract migratory birds.' },
      { label: 'B', text: 'To serve as biological filters that absorb pollutants from highway runoff.' },
      { label: 'C', text: 'To prevent pedestrian access to the water.' },
      { label: 'D', text: 'To provide shade for fish species.' }
    ],
    correctAnswer: 'B',
    explanation: 'The male student and female student explain that native cattails and sedges were planted as biofilters for phytoremediation, absorbing heavy metals and excess nitrates.',
    difficulty: 'easy',
    tags: ['Part B: Long Conversation', 'Detail', 'Biology']
  },
  {
    id: 'lis-b-33',
    section: 'listening',
    part: 'part_b',
    groupId: 'lis-conv-01',
    groupTitle: 'Conversation 1: Wetland Ecology Field Project',
    subCategory: 'Specific Detail',
    prompt: 'Where does the male student plan to collect water samples?',
    questionSpokenText: 'Where does the male student plan to collect water samples?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'Only in the middle of the lake.' },
      { label: 'B', text: 'At three locations: upstream, within the wetland buffer, and downstream.' },
      { label: 'C', text: 'From the campus laboratory taps.' },
      { label: 'D', text: 'Along the edge of the university parking lot.' }
    ],
    correctAnswer: 'B',
    explanation: 'The student states: "I\'m planning to take water samples at three distinct points: upstream before the runoff enters, inside the wetland buffer zone, and downstream near the outlet."',
    difficulty: 'easy',
    tags: ['Part B: Long Conversation', 'Detail', 'Methodology']
  },
  {
    id: 'lis-b-34',
    section: 'listening',
    part: 'part_b',
    groupId: 'lis-conv-01',
    groupTitle: 'Conversation 1: Wetland Ecology Field Project',
    subCategory: 'Detail',
    prompt: 'How will the male student obtain the necessary testing equipment?',
    questionSpokenText: 'How will the male student obtain the necessary testing equipment?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'He will purchase portable probes online.' },
      { label: 'B', text: 'Professor Dawson agreed to loan him department digital probes.' },
      { label: 'C', text: 'He will borrow them from a local high school.' },
      { label: 'D', text: 'The female student will share her own equipment.' }
    ],
    correctAnswer: 'B',
    explanation: 'The male student confirms that Dr. Dawson agreed to loan him the department\'s portable digital probes for the weekend.',
    difficulty: 'easy',
    tags: ['Part B: Long Conversation', 'Detail', 'Campus Resources']
  },

  // Conversation 2: Questions 35-38 (Internship & Career Services)
  {
    id: 'lis-b-35',
    section: 'listening',
    part: 'part_b',
    groupId: 'lis-conv-02',
    groupTitle: 'Conversation 2: University Career Center & Internships',
    subCategory: 'Main Purpose',
    prompt: 'Why did the student go to the Career Services office?',
    questionSpokenText: 'Why did the student go to the Career Services office?',
    readingInstructions: '[READ SCRIPT 2 FIRST]. Then read Question 35. Pause 12 seconds.',
    dialogue: [
      { speaker: 'Narrator', text: 'Questions 35 through 38. Listen to a conversation between a student and a career counselor.' },
      { speaker: 'Counselor', text: 'Good afternoon. How can I help you today?' },
      { speaker: 'Student', text: 'Hi. I\'m an economics sophomore, and I\'m hoping to apply for the summer financial analyst internship at the Federal Reserve Bank.' },
      { speaker: 'Counselor', text: 'That\'s a prestigious placement! It\'s very competitive, but our university has a direct recruitment pipeline with their regional office.' },
      { speaker: 'Student', text: 'I noticed their portal asks for a targeted cover letter, an official transcript, and an analytical writing sample. I\'m a bit unsure how to select an appropriate writing sample.' },
      { speaker: 'Counselor', text: 'Ideally, you should submit a paper from an upper-level economics or statistics course where you analyzed empirical data and drew policy conclusions. A term paper of 5 to 8 pages is standard.' },
      { speaker: 'Student', text: 'I wrote an econometric paper on interest rate fluctuations last semester that received an A. Would that work?' },
      { speaker: 'Counselor', text: 'That sounds perfect! Bring a revised copy to our peer review workshop this Thursday so we can help you polish the executive summary before you submit.' },
      { speaker: 'Narrator', text: 'Question 35. Why did the student go to the Career Services office?' }
    ],
    audioScript: 'Narrator: Questions 35 through 38. Listen to a conversation between a student and a career counselor.\nCounselor: Good afternoon. How can I help you today?\nStudent: Hi. I\'m an economics sophomore, and I\'m hoping to apply for the summer financial analyst internship at the Federal Reserve Bank.\nCounselor: That\'s a prestigious placement! It\'s very competitive, but our university has a direct recruitment pipeline with their regional office.\nStudent: I noticed their portal asks for a targeted cover letter, an official transcript, and an analytical writing sample. I\'m a bit unsure how to select an appropriate writing sample.\nCounselor: Ideally, you should submit a paper from an upper-level economics or statistics course where you analyzed empirical data and drew policy conclusions. A term paper of 5 to 8 pages is standard.\nStudent: I wrote an econometric paper on interest rate fluctuations last semester that received an A. Would that work?\nCounselor: That sounds perfect! Bring a revised copy to our peer review workshop this Thursday so we can help you polish the executive summary before you submit.\nNarrator: Question 35. Why did the student go to the Career Services office?',
    options: [
      { label: 'A', text: 'To register for fall semester classes.' },
      { label: 'B', text: 'To seek guidance on applying for a competitive summer internship.' },
      { label: 'C', text: 'To dispute a grade received on an econometric paper.' },
      { label: 'D', text: 'To request financial aid for tuition fees.' }
    ],
    correctAnswer: 'B',
    explanation: 'The student seeks assistance with preparing materials (specifically selecting a writing sample) for a summer internship at the Federal Reserve Bank.',
    difficulty: 'easy',
    tags: ['Part B: Long Conversation', 'Purpose', 'Career Advising']
  },
  {
    id: 'lis-b-36',
    section: 'listening',
    part: 'part_b',
    groupId: 'lis-conv-02',
    groupTitle: 'Conversation 2: University Career Center & Internships',
    subCategory: 'Detail',
    prompt: 'What criteria does the counselor suggest for the writing sample?',
    questionSpokenText: 'What criteria does the counselor suggest for the writing sample?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'A creative fiction story written for an English course.' },
      { label: 'B', text: 'An empirical data-driven paper of 5 to 8 pages with policy conclusions.' },
      { label: 'C', text: 'A summary of popular financial news articles.' },
      { label: 'D', text: 'A letter of recommendation from an employer.' }
    ],
    correctAnswer: 'B',
    explanation: 'The counselor specifies: "a paper from an upper-level economics or statistics course where you analyzed empirical data and drew policy conclusions. A term paper of 5 to 8 pages is standard."',
    difficulty: 'medium',
    tags: ['Part B: Long Conversation', 'Detail', 'Academic Criteria']
  },
  {
    id: 'lis-b-37',
    section: 'listening',
    part: 'part_b',
    groupId: 'lis-conv-02',
    groupTitle: 'Conversation 2: University Career Center & Internships',
    subCategory: 'Detail',
    prompt: 'What paper does the student propose using?',
    questionSpokenText: 'What paper does the student propose using?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'A lab report from introductory chemistry.' },
      { label: 'B', text: 'An econometric paper on interest rate fluctuations.' },
      { label: 'C', text: 'A history essay on the industrial revolution.' },
      { label: 'D', text: 'A group presentation on international trade treaties.' }
    ],
    correctAnswer: 'B',
    explanation: 'The student states: "I wrote an econometric paper on interest rate fluctuations last semester that received an A."',
    difficulty: 'easy',
    tags: ['Part B: Long Conversation', 'Detail', 'Economics']
  },
  {
    id: 'lis-b-38',
    section: 'listening',
    part: 'part_b',
    groupId: 'lis-conv-02',
    groupTitle: 'Conversation 2: University Career Center & Internships',
    subCategory: 'Next Action',
    prompt: 'What does the counselor suggest the student do on Thursday?',
    questionSpokenText: 'What does the counselor suggest the student do on Thursday?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'Submit the final application directly to the bank.' },
      { label: 'B', text: 'Attend a peer review workshop to refine the executive summary.' },
      { label: 'C', text: 'Interview with the hiring manager on campus.' },
      { label: 'D', text: 'Take a standardized economics placement test.' }
    ],
    correctAnswer: 'B',
    explanation: 'The counselor invites the student to "Bring a revised copy to our peer review workshop this Thursday so we can help you polish the executive summary."',
    difficulty: 'medium',
    tags: ['Part B: Long Conversation', 'Action Plan', 'Career Advising']
  },

  // ==========================================
  // PART C: TALKS AND LECTURES (Questions 39 - 50)
  // Lecture 1: Questions 39-42 (Art History: Frank Lloyd Wright & Organic Architecture)
  // Lecture 2: Questions 43-46 (Marine Biology: Coral Bleaching & Symbiosis)
  // Lecture 3: Questions 47-50 (Astronomy: The Kuiper Belt & Dwarf Planets)
  // ==========================================
  {
    id: 'lis-c-39',
    section: 'listening',
    part: 'part_c',
    groupId: 'lis-lec-01',
    groupTitle: 'Lecture 1: American Architecture & Organic Design',
    subCategory: 'Main Idea',
    prompt: 'What is the main subject of the lecture?',
    questionSpokenText: 'What is the main subject of the lecture?',
    readingInstructions: '[READ LECTURE 1 SCRIPT FIRST]. Deliver like an engaging university lecturer. Then read Question 39. Pause 12 seconds.',
    dialogue: [
      { speaker: 'Narrator', text: 'Questions 39 through 42. Listen to a lecture given by an architecture professor.' },
      { speaker: 'Professor', text: 'Good morning, class. Today we will examine the groundbreaking philosophy of "Organic Architecture," championed most famously by the American architect Frank Lloyd Wright during the early to mid-twentieth century.\nUnlike the prevailing European International Style of his era—which favored sterile, geometric concrete and steel boxes divorced from their surroundings—Wright believed that a structure should develop harmoniously from its site, as if created by nature itself.\nConsider his legendary 1935 masterpiece, Fallingwater, built over a rushing waterfall in southwestern Pennsylvania. Rather than clearing the granite boulders or diverting the stream, Wright integrated local sandstone masonry, cantilevered reinforced concrete terraces that mimic the natural rock ledges, and extensive glass walls that dissolve the visual boundary between interior living spaces and the surrounding forest.\nWright insisted that form and function are one. Every material was chosen for its intrinsic qualities, left unpainted to showcase natural grain and stone textures. This respect for the landscape fundamentally transformed modern residential design worldwide.' },
      { speaker: 'Narrator', text: 'Question 39. What is the main subject of the lecture?' }
    ],
    audioScript: 'Narrator: Questions 39 through 42. Listen to a lecture by an architecture professor.\nProfessor: Good morning, class. Today we will examine the groundbreaking philosophy of "Organic Architecture," championed most famously by the American architect Frank Lloyd Wright during the early to mid-twentieth century.\nUnlike the prevailing European International Style of his era—which favored sterile, geometric concrete and steel boxes divorced from their surroundings—Wright believed that a structure should develop harmoniously from its site, as if created by nature itself.\nConsider his legendary 1935 masterpiece, Fallingwater, built over a rushing waterfall in southwestern Pennsylvania. Rather than clearing the granite boulders or diverting the stream, Wright integrated local sandstone masonry, cantilevered reinforced concrete terraces that mimic the natural rock ledges, and extensive glass walls that dissolve the visual boundary between interior living spaces and the surrounding forest.\nWright insisted that form and function are one. Every material was chosen for its intrinsic qualities, left unpainted to showcase natural grain and stone textures. This respect for the landscape fundamentally transformed modern residential design worldwide.\nNarrator: Question 39. What is the main subject of the lecture?',
    options: [
      { label: 'A', text: 'The industrial manufacture of reinforced concrete.' },
      { label: 'B', text: 'Frank Lloyd Wright\'s philosophy of organic architecture and its integration with nature.' },
      { label: 'C', text: 'Urban skyscraper construction in nineteenth-century Chicago.' },
      { label: 'D', text: 'Differences between European Renaissance and Baroque buildings.' }
    ],
    correctAnswer: 'B',
    explanation: 'The lecture focuses on Organic Architecture, especially as envisioned by Frank Lloyd Wright and exemplified in Fallingwater.',
    difficulty: 'medium',
    tags: ['Part C: Lecture', 'Main Idea', 'Architecture']
  },
  {
    id: 'lis-c-40',
    section: 'listening',
    part: 'part_c',
    groupId: 'lis-lec-01',
    groupTitle: 'Lecture 1: American Architecture & Organic Design',
    subCategory: 'Comparison',
    prompt: 'How did Wright\'s philosophy differ from the European International Style?',
    questionSpokenText: 'How did Wright\'s philosophy differ from the European International Style?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'Wright emphasized harmony with natural surroundings rather than sterile, isolated boxes.' },
      { label: 'B', text: 'Wright refused to use any concrete or glass.' },
      { label: 'C', text: 'Wright focused exclusively on public government monuments.' },
      { label: 'D', text: 'Wright advocated painting all building surfaces in bright primary colors.' }
    ],
    correctAnswer: 'A',
    explanation: 'The professor contrasts the European International Style\'s "sterile boxes divorced from their surroundings" with Wright\'s belief that buildings should develop harmoniously from their site.',
    difficulty: 'medium',
    tags: ['Part C: Lecture', 'Comparison', 'Architecture']
  },
  {
    id: 'lis-c-41',
    section: 'listening',
    part: 'part_c',
    groupId: 'lis-lec-01',
    groupTitle: 'Lecture 1: American Architecture & Organic Design',
    subCategory: 'Detail',
    prompt: 'What architectural feature in Fallingwater mimics the natural rock ledges of the site?',
    questionSpokenText: 'What architectural feature in Fallingwater mimics the natural rock ledges of the site?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'Tall gothic arches.' },
      { label: 'B', text: 'Cantilevered reinforced concrete terraces.' },
      { label: 'C', text: 'Curved wooden shingle roofs.' },
      { label: 'D', text: 'Underground tunnels.' }
    ],
    correctAnswer: 'B',
    explanation: 'The professor notes: "cantilevered reinforced concrete terraces that mimic the natural rock ledges."',
    difficulty: 'easy',
    tags: ['Part C: Lecture', 'Detail', 'Art & Design']
  },
  {
    id: 'lis-c-42',
    section: 'listening',
    part: 'part_c',
    groupId: 'lis-lec-01',
    groupTitle: 'Lecture 1: American Architecture & Organic Design',
    subCategory: 'Detail',
    prompt: 'Why did Wright leave construction materials unpainted?',
    questionSpokenText: 'Why did Wright leave construction materials unpainted?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'To cut construction costs for his clients.' },
      { label: 'B', text: 'To showcase their intrinsic natural textures and grain.' },
      { label: 'C', text: 'Because commercial paint was unavailable during the war.' },
      { label: 'D', text: 'To prevent water damage from moisture.' }
    ],
    correctAnswer: 'B',
    explanation: 'Wright left materials unpainted "to showcase natural grain and stone textures", honoring their intrinsic qualities.',
    difficulty: 'easy',
    tags: ['Part C: Lecture', 'Detail', 'Design Principles']
  },

  // Lecture 2: Questions 43-46 (Marine Biology: Coral Bleaching & Zooxanthellae)
  {
    id: 'lis-c-43',
    section: 'listening',
    part: 'part_c',
    groupId: 'lis-lec-02',
    groupTitle: 'Lecture 2: Coral Reefs & Endosymbiosis',
    subCategory: 'Main Idea',
    prompt: 'What is the primary topic of the lecture?',
    questionSpokenText: 'What is the primary topic of the lecture?',
    readingInstructions: '[READ LECTURE 2 SCRIPT FIRST]. Academic science lecturer delivery. Then read Question 43. Pause 12 seconds.',
    dialogue: [
      { speaker: 'Narrator', text: 'Questions 43 through 46. Listen to a lecture in a marine biology course.' },
      { speaker: 'Professor', text: 'To truly understand the vulnerability of coral reefs to global ocean warming, we must look at the microscopic symbiosis at the heart of every reef-building coral polyp.\nCorals belong to the phylum Cnidaria. While polyps can capture tiny plankton with their stinging tentacles, up to ninety percent of their energetic requirement is supplied by endosymbiotic photosynthetic dinoflagellates known as zooxanthellae, which reside inside the coral\'s cellular tissue.\nIn exchange for a protected habitat and inorganic nutrients like carbon dioxide and nitrogen from coral metabolic waste, the zooxanthellae carry out photosynthesis and translocate sugars, amino acids, and glycerol back to the coral host. Furthermore, these algae give corals their vibrant brown, green, and golden pigments.\nWhen water temperatures rise just 1 to 2 degrees Celsius above normal summer maximums for sustained periods, thermal stress damages the photosynthetic apparatus of the algae. They begin producing toxic reactive oxygen species. To protect its own cells, the coral is forced to expel the algae.\nStripped of their symbionts, the transparent polyps reveal the brilliant white calcium carbonate skeleton underneath—a phenomenon known as coral bleaching. If temperatures cool within a few weeks, corals can recruit new algae and recover; if thermal stress persists, the corals starve and perish.' },
      { speaker: 'Narrator', text: 'Question 43. What is the primary topic of the lecture?' }
    ],
    audioScript: 'Narrator: Questions 43 through 46. Listen to a lecture in a marine biology course.\nProfessor: To truly understand the vulnerability of coral reefs to global ocean warming, we must look at the microscopic symbiosis at the heart of every reef-building coral polyp.\nCorals belong to the phylum Cnidaria. While polyps can capture tiny plankton with their stinging tentacles, up to ninety percent of their energetic requirement is supplied by endosymbiotic photosynthetic dinoflagellates known as zooxanthellae, which reside inside the coral\'s cellular tissue.\nIn exchange for a protected habitat and inorganic nutrients like carbon dioxide and nitrogen from coral metabolic waste, the zooxanthellae carry out photosynthesis and translocate sugars, amino acids, and glycerol back to the coral host. Furthermore, these algae give corals their vibrant brown, green, and golden pigments.\nWhen water temperatures rise just 1 to 2 degrees Celsius above normal summer maximums for sustained periods, thermal stress damages the photosynthetic apparatus of the algae. They begin producing toxic reactive oxygen species. To protect its own cells, the coral is forced to expel the algae.\nStripped of their symbionts, the transparent polyps reveal the brilliant white calcium carbonate skeleton underneath—a phenomenon known as coral bleaching. If temperatures cool within a few weeks, corals can recruit new algae and recover; if thermal stress persists, the corals starve and perish.\nNarrator: Question 43. What is the primary topic of the lecture?',
    options: [
      { label: 'A', text: 'Methods of deep-sea fishing around coral atolls.' },
      { label: 'B', text: 'The symbiotic relationship in corals and the biological mechanisms of bleaching.' },
      { label: 'C', text: 'The geological formation of limestone islands.' },
      { label: 'D', text: 'How jellyfish and sea anemones hunt for food.' }
    ],
    correctAnswer: 'B',
    explanation: 'The lecture explains the mutualistic symbiosis between coral polyps and zooxanthellae and how thermal stress causes expulsion of algae, leading to coral bleaching.',
    difficulty: 'medium',
    tags: ['Part C: Lecture', 'Main Idea', 'Marine Biology']
  },
  {
    id: 'lis-c-44',
    section: 'listening',
    part: 'part_c',
    groupId: 'lis-lec-02',
    groupTitle: 'Lecture 2: Coral Reefs & Endosymbiosis',
    subCategory: 'Detail',
    prompt: 'What percentage of a reef-building coral\'s energy is supplied by zooxanthellae?',
    questionSpokenText: 'What percentage of a reef-building coral\'s energy is supplied by zooxanthellae?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'Approximately 10 percent.' },
      { label: 'B', text: 'About 50 percent.' },
      { label: 'C', text: 'Up to 90 percent.' },
      { label: 'D', text: 'Virtually 100 percent.' }
    ],
    correctAnswer: 'C',
    explanation: 'The professor states: "up to ninety percent of their energetic requirement is supplied by endosymbiotic photosynthetic dinoflagellates known as zooxanthellae."',
    difficulty: 'easy',
    tags: ['Part C: Lecture', 'Detail', 'Biology']
  },
  {
    id: 'lis-c-45',
    section: 'listening',
    part: 'part_c',
    groupId: 'lis-lec-02',
    groupTitle: 'Lecture 2: Coral Reefs & Endosymbiosis',
    subCategory: 'Causality',
    prompt: 'Why do corals expel their zooxanthellae during elevated water temperatures?',
    questionSpokenText: 'Why do corals expel their zooxanthellae during elevated water temperatures?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'The algae consume all available calcium in the water.' },
      { label: 'B', text: 'Damaged algal photosynthetic systems release toxic reactive oxygen compounds.' },
      { label: 'C', text: 'The coral polyps need space to absorb sunlight directly.' },
      { label: 'D', text: 'Fish eat the algae off the coral surface.' }
    ],
    correctAnswer: 'B',
    explanation: 'Under thermal stress, the algae\'s damaged photosynthetic machinery produces toxic reactive oxygen species, forcing the host coral to expel them to safeguard its cells.',
    difficulty: 'medium',
    tags: ['Part C: Lecture', 'Cause & Effect', 'Marine Biology']
  },
  {
    id: 'lis-c-46',
    section: 'listening',
    part: 'part_c',
    groupId: 'lis-lec-02',
    groupTitle: 'Lecture 2: Coral Reefs & Endosymbiosis',
    subCategory: 'Detail',
    prompt: 'Under what condition can a bleached coral reef recover?',
    questionSpokenText: 'Under what condition can a bleached coral reef recover?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'If water temperatures return to normal within a few weeks.' },
      { label: 'B', text: 'If artificial fertilizers are added to the reef.' },
      { label: 'C', text: 'Only if corals are relocated to laboratory tanks.' },
      { label: 'D', text: 'Corals can never recover once bleaching occurs.' }
    ],
    correctAnswer: 'A',
    explanation: 'The professor clarifies that if temperatures cool within several weeks, surviving corals can reacquire algal symbionts and make a full recovery.',
    difficulty: 'easy',
    tags: ['Part C: Lecture', 'Detail', 'Ecology']
  },

  // Lecture 3: Questions 47-50 (Astronomy: The Kuiper Belt & Dwarf Planets)
  {
    id: 'lis-c-47',
    section: 'listening',
    part: 'part_c',
    groupId: 'lis-lec-03',
    groupTitle: 'Lecture 3: Planetary Astronomy & The Kuiper Belt',
    subCategory: 'Main Idea',
    prompt: 'What is the main purpose of the lecture?',
    questionSpokenText: 'What is the main purpose of the lecture?',
    readingInstructions: '[READ LECTURE 3 SCRIPT FIRST]. Scientific, lecture cadence. Then read Question 47. Pause 12 seconds.',
    dialogue: [
      { speaker: 'Narrator', text: 'Questions 47 through 50. Listen to a lecture in an introductory astronomy course.' },
      { speaker: 'Professor', text: 'When Gerard Kuiper hypothesized a ring of icy bodies beyond Neptune back in 1951, many astronomers remained skeptical. It wasn\'t until 1992 that the first Kuiper Belt Object, or KBO, was confirmed observationally.\nToday we know the Kuiper Belt is a vast, circumstellar disc extending from roughly 30 to 55 astronomical units from the Sun. It contains hundreds of thousands of icy planetesimals left over from the accretion disk of the early solar system.\nThe composition of KBOs differs significantly from the rocky asteroids in the inner belt between Mars and Jupiter. KBOs are composed largely of frozen volatiles—often referred to as "ices"—such as methane, ammonia, and water ice.\nThe discovery of numerous large KBOs in the early 2000s, notably Eris—which was found to be comparable in mass to Pluto—precipitated a historic crisis in planetary classification. In 2006, the International Astronomical Union established a formal definition of a planet: it must orbit the Sun, possess sufficient mass to achieve hydrostatic equilibrium, and crucially, clear the neighborhood around its orbit.\nBecause Pluto shares its orbital realm with thousands of other trans-Neptunian objects, it failed the third criterion, leading to the creation of a new category: dwarf planets.' },
      { speaker: 'Narrator', text: 'Question 47. What is the main purpose of the lecture?' }
    ],
    audioScript: 'Narrator: Questions 47 through 50. Listen to a lecture in an astronomy course.\nProfessor: When Gerard Kuiper hypothesized a ring of icy bodies beyond Neptune back in 1951, many astronomers remained skeptical. It wasn\'t until 1992 that the first Kuiper Belt Object, or KBO, was confirmed observationally.\nToday we know the Kuiper Belt is a vast, circumstellar disc extending from roughly 30 to 55 astronomical units from the Sun. It contains hundreds of thousands of icy planetesimals left over from the accretion disk of the early solar system.\nThe composition of KBOs differs significantly from the rocky asteroids in the inner belt between Mars and Jupiter. KBOs are composed largely of frozen volatiles—often referred to as "ices"—such as methane, ammonia, and water ice.\nThe discovery of numerous large KBOs in the early 2000s, notably Eris—which was found to be comparable in mass to Pluto—precipitated a historic crisis in planetary classification. In 2006, the International Astronomical Union established a formal definition of a planet: it must orbit the Sun, possess sufficient mass to achieve hydrostatic equilibrium, and crucially, clear the neighborhood around its orbit.\nBecause Pluto shares its orbital realm with thousands of other trans-Neptunian objects, it failed the third criterion, leading to the creation of a new category: dwarf planets.\nNarrator: Question 47. What is the main purpose of the lecture?',
    options: [
      { label: 'A', text: 'To explain the properties of the Kuiper Belt and the reclassification of Pluto.' },
      { label: 'B', text: 'To describe manned space missions to Mars.' },
      { label: 'C', text: 'To calculate the exact mass of Neptune\'s moons.' },
      { label: 'D', text: 'To debate whether telescopes should be based in space or on Earth.' }
    ],
    correctAnswer: 'A',
    explanation: 'The lecture covers the structure, composition, and discovery of the Kuiper Belt and explains how this led to the IAU reclassification of Pluto as a dwarf planet.',
    difficulty: 'medium',
    tags: ['Part C: Lecture', 'Main Idea', 'Astronomy']
  },
  {
    id: 'lis-c-48',
    section: 'listening',
    part: 'part_c',
    groupId: 'lis-lec-03',
    groupTitle: 'Lecture 3: Planetary Astronomy & The Kuiper Belt',
    subCategory: 'Comparison',
    prompt: 'How do Kuiper Belt objects differ chemically from asteroids in the asteroid belt?',
    questionSpokenText: 'How do Kuiper Belt objects differ chemically from asteroids in the asteroid belt?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'KBOs are composed primarily of molten iron and nickel.' },
      { label: 'B', text: 'KBOs consist predominantly of frozen volatiles like methane, ammonia, and water ice.' },
      { label: 'C', text: 'Asteroids contain far more liquid water than KBOs.' },
      { label: 'D', text: 'There is no difference in chemical composition between them.' }
    ],
    correctAnswer: 'B',
    explanation: 'The professor states that unlike the rocky asteroids between Mars and Jupiter, KBOs are made largely of frozen volatiles like methane, ammonia, and water ice.',
    difficulty: 'medium',
    tags: ['Part C: Lecture', 'Chemical Composition', 'Planetary Science']
  },
  {
    id: 'lis-c-49',
    section: 'listening',
    part: 'part_c',
    groupId: 'lis-lec-03',
    groupTitle: 'Lecture 3: Planetary Astronomy & The Kuiper Belt',
    subCategory: 'Detail',
    prompt: 'Which celestial discovery directly triggered the debate over planetary definitions in the early 2000s?',
    questionSpokenText: 'Which celestial discovery directly triggered the debate over planetary definitions in the early 2000s?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'A new moon of Jupiter called Europa.' },
      { label: 'B', text: 'The massive trans-Neptunian object named Eris.' },
      { label: 'C', text: 'A stray asteroid near Mercury.' },
      { label: 'D', text: 'Halley\'s comet passing Earth.' }
    ],
    correctAnswer: 'B',
    explanation: 'The discovery of large KBOs, notably Eris (which was comparable in mass to Pluto), precipitated the crisis that prompted the IAU redefinition in 2006.',
    difficulty: 'easy',
    tags: ['Part C: Lecture', 'Historical Event', 'Astronomy']
  },
  {
    id: 'lis-c-50',
    section: 'listening',
    part: 'part_c',
    groupId: 'lis-lec-03',
    groupTitle: 'Lecture 3: Planetary Astronomy & The Kuiper Belt',
    subCategory: 'Criterion',
    prompt: 'Why was Pluto reclassified as a dwarf planet under the 2006 IAU criteria?',
    questionSpokenText: 'Why was Pluto reclassified as a dwarf planet under the 2006 IAU criteria?',
    readingInstructions: 'Read question clearly. Pause 12 seconds.',
    options: [
      { label: 'A', text: 'It ceased orbiting around the Sun.' },
      { label: 'B', text: 'It was pulled into Neptune\'s gravitational field.' },
      { label: 'C', text: 'It had not cleared the neighborhood around its orbit.' },
      { label: 'D', text: 'It lost its spherical shape due to collisions.' }
    ],
    correctAnswer: 'C',
    explanation: 'Pluto shares its orbital neighborhood with numerous other trans-Neptunian bodies, failing the third requirement to "clear the neighborhood around its orbit."',
    difficulty: 'easy',
    tags: ['Part C: Lecture', 'Classification Criteria', 'Astronomy']
  }
];
