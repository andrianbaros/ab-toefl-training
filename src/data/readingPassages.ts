import { ReadingPassage } from '@/types';

export const READING_PASSAGES: ReadingPassage[] = [
  // ========================================================
  // PASSAGE 1: BIOLOGY - Mycorrhizal Networks (Wood Wide Web)
  // ========================================================
  {
    id: 'read-pass-01',
    title: 'The Underground Architecture of Mycorrhizal Fungal Networks',
    topic: 'Biology',
    wordCount: 380,
    paragraphs: [
      'Beneath the forest floor lies an intricate, subterranean web of living filaments that fundamentally shapes terrestrial ecosystems. These structures, known as mycorrhizal networks, are mutualistic associations forged between soil fungi and the roots of vascular plants. For decades, traditional forestry viewed trees primarily as solitary competitors contending for limited sunlight, water, and soil nutrients. However, recent ecological discoveries have illuminated an interconnected collective where resources and biochemical signals are actively redistributed across species boundaries.',
      'In this symbiotic exchange, photosynthetic plants supply the fungi with energy-rich carbon compounds such as sucrose and glucose. In return, the extensive fungal hyphae—which possess a surface area orders of magnitude greater than plant root systems—forage the soil matrix to deliver water and vital inorganic minerals, particularly phosphorus and nitrogen, back to the host plant. The relationship is so pervasive that over ninety percent of all land plants are estimated to depend upon mycorrhizal colonization for optimal growth.',
      'Beyond basic nutrient delivery, mycorrhizal networks function as an underground communications superhighway. When an individual tree suffers attack from defoliating insect pests or pathogenic blights, it can transmit volatile biochemical alerts through fungal mycelia to neighboring specimens. Upon intercepting these subterranean warnings, uninfected trees pre-emptively ramp up the production of defensive enzymes, tannins, and anti-herbivore toxins. Thus, these fungal webs act not merely as nutritional conduits, but as cooperative bio-alert grids essential for communal resilience.'
    ],
    questions: [
      {
        id: 'read-q-01',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-01',
        subCategory: 'Main Idea',
        prompt: 'What is the main topic of the passage?',
        options: [
          { label: 'A', text: 'The destructive impact of fungal blights on ancient forests.' },
          { label: 'B', text: 'The mutualistic nutrient and signaling roles of underground mycorrhizal networks.' },
          { label: 'C', text: 'How commercial fertilizers deplete essential forest soil nutrients.' },
          { label: 'D', text: 'The evolutionary history of vascular plant leaf structures.' }
        ],
        correctAnswer: 'B',
        explanation: 'The passage explores how mycorrhizal networks facilitate mutualistic nutrient exchange and biochemical alarm signaling between trees.',
        difficulty: 'medium',
        tags: ['Reading', 'Main Idea', 'Biology']
      },
      {
        id: 'read-q-02',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-01',
        subCategory: 'Vocabulary in Context',
        prompt: 'The word "subterranean" in paragraph 1 is closest in meaning to:',
        options: [
          { label: 'A', text: 'Underwater' },
          { label: 'B', text: 'Underground' },
          { label: 'C', text: 'Artificial' },
          { label: 'D', text: 'Invisible' }
        ],
        correctAnswer: 'B',
        explanation: '"Subterranean" stems from the Latin roots "sub" (under) and "terra" (earth/ground), referring to phenomena occurring beneath the soil.',
        difficulty: 'easy',
        tags: ['Reading', 'Vocabulary in Context', 'Roots & Affixes']
      },
      {
        id: 'read-q-03',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-01',
        subCategory: 'Factual Information',
        prompt: 'According to paragraph 2, what primary resource do photosynthetic plants supply to their fungal partners?',
        options: [
          { label: 'A', text: 'Phosphorus and nitrogen' },
          { label: 'B', text: 'Carbon-rich sugars such as glucose' },
          { label: 'C', text: 'Protection from extreme sunlight' },
          { label: 'D', text: 'Defensive toxins against herbivores' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 2 explicitly states: "photosynthetic plants supply the fungi with energy-rich carbon compounds such as sucrose and glucose."',
        difficulty: 'easy',
        tags: ['Reading', 'Factual Information', 'Detail']
      },
      {
        id: 'read-q-04',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-01',
        subCategory: 'Reference',
        prompt: 'The word "it" in paragraph 3 refers to:',
        options: [
          { label: 'A', text: 'An individual tree' },
          { label: 'B', text: 'An insect pest' },
          { label: 'C', text: 'A mycorrhizal network' },
          { label: 'D', text: 'A pathogenic blight' }
        ],
        correctAnswer: 'A',
        explanation: 'In the sentence "When an individual tree suffers attack..., it can transmit volatile biochemical alerts", "it" replaces "an individual tree".',
        difficulty: 'easy',
        tags: ['Reading', 'Reference', 'Pronouns']
      },
      {
        id: 'read-q-05',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-01',
        subCategory: 'Inference',
        prompt: 'It can be inferred from paragraph 3 that a forest lacking mycorrhizal networks would be:',
        options: [
          { label: 'A', text: 'Immune to all species of defoliating insects.' },
          { label: 'B', text: 'More vulnerable to rapid, unchecked pathogen spread.' },
          { label: 'C', text: 'Covered by significantly taller canopy foliage.' },
          { label: 'D', text: 'Completely devoid of sunlight.' }
        ],
        correctAnswer: 'B',
        explanation: 'Because networks transmit early warning alerts enabling neighboring trees to produce defensive compounds, trees without these fungal links would lack early defense mobilization, making them more vulnerable.',
        difficulty: 'hard',
        tags: ['Reading', 'Inference', 'Ecology']
      }
    ]
  },

  // ========================================================
  // PASSAGE 2: ASTRONOMY - Gravitational Lensing
  // ========================================================
  {
    id: 'read-pass-02',
    title: 'Gravitational Lensing and Dark Matter Cosmography',
    topic: 'Astronomy',
    wordCount: 395,
    paragraphs: [
      'In his 1915 General Theory of Relativity, Albert Einstein proposed that gravity is not an attractive Newtonian force acting across empty space, but rather a geometric curvature of spacetime induced by mass and energy. One of the most extraordinary predictions derived from this framework is gravitational lensing: the deflection of electromagnetic radiation when passing in proximity to massive cosmic structures.',
      'When light from an ultra-distant background source—such as a quasar or nascent galaxy—travels toward Earth, its trajectory is warped by the spacetime distortion of an intervening foreground galaxy or cluster. Depending on the mass density and geometric alignment of the lens, this bending can produce magnified, distorted, or even multiple cloned images of the background emitter, arranged in arcs or closed circles known as Einstein Rings.',
      'Crucially, gravitational lensing has emerged as one of astrophysics\' most indispensable diagnostic tools for mapping dark matter. Because dark matter emits no detectable electromagnetic radiation, its spatial distribution cannot be mapped via optical or radio telescopes. However, dark matter exerts gravitational influence identical to ordinary baryonic matter. By mathematically reconstructing the gravitational deflection of light observed in galaxy clusters, cosmologists can deduce the precise mass, concentration, and geometry of invisible dark matter halos that would otherwise elude human observation.'
    ],
    questions: [
      {
        id: 'read-q-06',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-02',
        subCategory: 'Author\'s Purpose',
        prompt: 'Why does the author mention "Einstein Rings" in paragraph 2?',
        options: [
          { label: 'A', text: 'To prove that Einstein\'s theory contained mathematical errors.' },
          { label: 'B', text: 'To provide a concrete visual example of strong gravitational lensing effects.' },
          { label: 'C', text: 'To argue that quasars are circular in shape.' },
          { label: 'D', text: 'To explain how optical telescopes are constructed.' }
        ],
        correctAnswer: 'B',
        explanation: 'Einstein Rings are introduced to illustrate the visual consequence of warped light trajectories when geometric alignment and gravitational lensing are strong.',
        difficulty: 'medium',
        tags: ['Reading', 'Author\'s Purpose', 'Astronomy']
      },
      {
        id: 'read-q-07',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-02',
        subCategory: 'Vocabulary in Context',
        prompt: 'The word "elude" in paragraph 3 is closest in meaning to:',
        options: [
          { label: 'A', text: 'Escape detection by' },
          { label: 'B', text: 'Attract' },
          { label: 'C', text: 'Illuminate' },
          { label: 'D', text: 'Disprove' }
        ],
        correctAnswer: 'A',
        explanation: '"Elude" means to evade or escape notice; invisible dark matter halos would otherwise escape human detection without gravitational lensing.',
        difficulty: 'medium',
        tags: ['Reading', 'Vocabulary in Context', 'Semantics']
      },
      {
        id: 'read-q-08',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-02',
        subCategory: 'Factual Information',
        prompt: 'According to paragraph 1, how did Einstein\'s General Theory of Relativity redefine gravity?',
        options: [
          { label: 'A', text: 'As a magnetic attraction between planetary cores.' },
          { label: 'B', text: 'As a curvature of spacetime caused by mass and energy.' },
          { label: 'C', text: 'As an instantaneous transmission of energy through a vacuum.' },
          { label: 'D', text: 'As an optical illusion generated by light rays.' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 1 explains that Einstein described gravity as "a geometric curvature of spacetime induced by mass and energy."',
        difficulty: 'easy',
        tags: ['Reading', 'Factual Information', 'Physics']
      },
      {
        id: 'read-q-09',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-02',
        subCategory: 'Negative Factual',
        prompt: 'According to paragraph 3, which of the following is true about dark matter EXCEPT:',
        options: [
          { label: 'A', text: 'It exerts gravitational attraction on light and matter.' },
          { label: 'B', text: 'It emits strong optical and radio waves directly into telescopes.' },
          { label: 'C', text: 'It cannot be observed directly through standard electromagnetic detectors.' },
          { label: 'D', text: 'Its distribution can be calculated from light distortion.' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 3 explicitly states dark matter "emits no detectable electromagnetic radiation", making B false and therefore the correct exception.',
        difficulty: 'medium',
        tags: ['Reading', 'Negative Factual', 'Astronomy']
      },
      {
        id: 'read-q-10',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-02',
        subCategory: 'Inference',
        prompt: 'What can be inferred about astronomical telescopes from paragraph 3?',
        options: [
          { label: 'A', text: 'They rely primarily on detecting electromagnetic signals emitted or reflected by matter.' },
          { label: 'B', text: 'They are obsolete for observing distant galaxies.' },
          { label: 'C', text: 'They were invented before Einstein developed general relativity.' },
          { label: 'D', text: 'They can directly weigh galaxies without mathematical modeling.' }
        ],
        correctAnswer: 'A',
        explanation: 'Because dark matter emits no radiation and therefore cannot be mapped via optical or radio telescopes, standard telescopes must rely on electromagnetic detection.',
        difficulty: 'hard',
        tags: ['Reading', 'Inference', 'Scientific Instruments']
      }
    ]
  },

  // ========================================================
  // PASSAGE 3: HISTORY - The Printing Press Revolution
  // ========================================================
  {
    id: 'read-pass-03',
    title: 'The Societal Metamorphosis of Gutenberg\'s Movable Type',
    topic: 'History',
    wordCount: 385,
    paragraphs: [
      'Prior to Johannes Gutenberg\'s perfection of movable metal type around 1440 in Mainz, Germany, European book production was an excruciatingly laborious manual endeavor. Scribes working in monastic scriptoria required months, sometimes years, to copy a single codex by hand. Consequently, books were luxury items accessible exclusively to ecclesiastical hierarchies, royal courts, and ultra-wealthy patricians, locking the vast majority of the European populace into illiteracy.',
      'Gutenberg synthesized three innovative components into an integrated manufacturing system: durable lead-tin alloy type pieces cast in hand molds, oil-based ink that adhered smoothly to metal, and an adapted wooden screw press derived from agricultural olive and wine presses. The consequence was an unprecedented leap in printing speed and unit cost reduction. Within fifty years, an estimated twenty million volumes were produced—surpassing the collective output of all European scribes over the preceding millennium.',
      'The democratizing effect of this technological rupture can hardly be overstated. Standardized vernacular texts replaced Latin manuscripts, catalyzing the stabilization of modern European languages. Scientific treatises could be circulated without the transcription errors inherent to manual copying, fostering an iterative, pan-European scientific revolution. Furthermore, decentralized printing weakened the informational monopoly of entrenched religious institutions, directly laying the logistical groundwork for the Protestant Reformation.'
    ],
    questions: [
      {
        id: 'read-q-11',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-03',
        subCategory: 'Main Idea',
        prompt: 'Which sentence best summarizes the main idea of the passage?',
        options: [
          { label: 'A', text: 'Gutenberg failed to profit financially from his invention in Mainz.' },
          { label: 'B', text: 'The movable type printing press triggered sweeping literacy, scientific, and cultural transformations across Europe.' },
          { label: 'C', text: 'Monastic scribes produced manuscripts with superior artistic fidelity compared to machines.' },
          { label: 'D', text: 'Agricultural wine presses were the most important machine of the Renaissance.' }
        ],
        correctAnswer: 'B',
        explanation: 'The passage highlights the technological components of Gutenberg\'s printing press and its revolutionary consequences for literacy, science, language, and society.',
        difficulty: 'medium',
        tags: ['Reading', 'Main Idea', 'History']
      },
      {
        id: 'read-q-12',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-03',
        subCategory: 'Vocabulary in Context',
        prompt: 'The word "laborious" in paragraph 1 is closest in meaning to:',
        options: [
          { label: 'A', text: 'Strenuous and demanding' },
          { label: 'B', text: 'Modern and efficient' },
          { label: 'C', text: 'Inexpensive' },
          { label: 'D', text: 'Creative and poetic' }
        ],
        correctAnswer: 'A',
        explanation: '"Laborious" denotes work that requires great effort, difficulty, and hard labor over long durations.',
        difficulty: 'easy',
        tags: ['Reading', 'Vocabulary in Context', 'Adjectives']
      },
      {
        id: 'read-q-13',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-03',
        subCategory: 'Factual Information',
        prompt: 'According to paragraph 2, from what agricultural apparatus did Gutenberg adapt his printing press?',
        options: [
          { label: 'A', text: 'A grain windmill' },
          { label: 'B', text: 'A wooden screw press used for wine and olives' },
          { label: 'C', text: 'A water-powered flour mill' },
          { label: 'D', text: 'A horse-drawn plow' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 2 notes that Gutenberg adapted "an adapted wooden screw press derived from agricultural olive and wine presses."',
        difficulty: 'easy',
        tags: ['Reading', 'Factual Information', 'History']
      },
      {
        id: 'read-q-14',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-03',
        subCategory: 'Specific Detail',
        prompt: 'According to paragraph 3, how did printing benefit the advancement of science?',
        options: [
          { label: 'A', text: 'By requiring all scientists to write exclusively in Latin.' },
          { label: 'B', text: 'By eliminating transcription errors that occurred during manual copying.' },
          { label: 'C', text: 'By providing free paper to universities.' },
          { label: 'D', text: 'By restricting scientific ideas to licensed royal societies.' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 3 notes: "Scientific treatises could be circulated without the transcription errors inherent to manual copying, fostering an iterative, pan-European scientific revolution."',
        difficulty: 'medium',
        tags: ['Reading', 'Detail', 'History of Science']
      },
      {
        id: 'read-q-15',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-03',
        subCategory: 'Inference',
        prompt: 'It can be inferred from the passage that before the 1440s in Europe:',
        options: [
          { label: 'A', text: 'The average citizen had extensive personal book libraries.' },
          { label: 'B', text: 'Literacy was predominantly confined to the ruling and clerical elites.' },
          { label: 'C', text: 'Paper had not yet been manufactured.' },
          { label: 'D', text: 'No books were written in Latin.' }
        ],
        correctAnswer: 'B',
        explanation: 'Because books were luxury items accessible only to ecclesiastical hierarchies, royal courts, and patricians, leaving the majority illiterate, literacy was largely confined to elite classes.',
        difficulty: 'easy',
        tags: ['Reading', 'Inference', 'Social History']
      }
    ]
  },

  // ========================================================
  // PASSAGE 4: TECHNOLOGY - Quantum Computing & Superposition
  // ========================================================
  {
    id: 'read-pass-04',
    title: 'Quantum Computing and the Principles of Superposition',
    topic: 'Technology',
    wordCount: 410,
    paragraphs: [
      'Classical computing architecture, codified by John von Neumann in the mid-twentieth century, processes information using binary digits—or bits—that exist deterministically as either a 0 or a 1. While this paradigm has driven decades of exponential growth in microelectronics, it encounters severe computational bottlenecks when tackling certain mathematically intractable problems, such as high-order molecular simulation, prime factorization, and combinatorial logistics.',
      'Quantum computing transcends these limits by harnessing the non-intuitive principles of quantum mechanics. The fundamental information unit of a quantum system is the quantum bit, or qubit. Unlike a classical bit, a qubit can exist in a superposition of states, representing both 0 and 1 simultaneously with varying probability amplitudes. When multiple qubits become entangled—a quantum phenomenon where the state of one qubit is inextricably linked to another regardless of physical distance—the state space of the computer expands exponentially: an n-qubit register can simultaneously represent 2^n numbers.',
      'This exponential parallelism does not mean a quantum computer simply executes ordinary tasks faster than a supercomputer; for word processing or video playback, a classical processor remains superior. Rather, quantum processors excel at finding global optima in vast multidimensional solution landscapes. Nevertheless, building fault-tolerant quantum processors faces formidable obstacles, chief among them quantum decoherence—the degradation of fragile qubit quantum states caused by thermal vibration and electromagnetic interference from the surrounding environment.'
    ],
    questions: [
      {
        id: 'read-q-16',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-04',
        subCategory: 'Comparison',
        prompt: 'According to paragraph 2, how does a qubit differ from a classical bit?',
        options: [
          { label: 'A', text: 'A qubit requires zero electricity to operate.' },
          { label: 'B', text: 'A qubit can exist in a superposition of both 0 and 1 simultaneously.' },
          { label: 'C', text: 'A qubit can only store numbers larger than one billion.' },
          { label: 'D', text: 'A qubit functions only at room temperature.' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 2 specifies: "Unlike a classical bit, a qubit can exist in a superposition of states, representing both 0 and 1 simultaneously with varying probability amplitudes."',
        difficulty: 'easy',
        tags: ['Reading', 'Comparison', 'Quantum Physics']
      },
      {
        id: 'read-q-17',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-04',
        subCategory: 'Vocabulary in Context',
        prompt: 'The word "intractable" in paragraph 1 is closest in meaning to:',
        options: [
          { label: 'A', text: 'Extremely difficult or unsolvable' },
          { label: 'B', text: 'Inexpensive and accessible' },
          { label: 'C', text: 'Repetitive' },
          { label: 'D', text: 'Commonly understood' }
        ],
        correctAnswer: 'A',
        explanation: '"Intractable" describes problems that are stubbornly hard to manage, solve, or compute with standard algorithmic methods.',
        difficulty: 'medium',
        tags: ['Reading', 'Vocabulary in Context', 'Advanced Vocab']
      },
      {
        id: 'read-q-18',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-04',
        subCategory: 'Author\'s Purpose',
        prompt: 'In paragraph 3, why does the author mention word processing and video playback?',
        options: [
          { label: 'A', text: 'To prove that quantum computers will soon replace all desktop devices.' },
          { label: 'B', text: 'To clarify that quantum computers are specialized for specific mathematical challenges rather than everyday computing.' },
          { label: 'C', text: 'To explain how software companies program quantum algorithms.' },
          { label: 'D', text: 'To illustrate the history of video streaming technology.' }
        ],
        correctAnswer: 'B',
        explanation: 'The author mentions everyday tasks to dispel the misconception that quantum computers are simply faster for all ordinary activities.',
        difficulty: 'medium',
        tags: ['Reading', 'Author\'s Purpose', 'Exposition']
      },
      {
        id: 'read-q-19',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-04',
        subCategory: 'Factual Information',
        prompt: 'According to paragraph 3, what is the primary cause of "quantum decoherence"?',
        options: [
          { label: 'A', text: 'Software programming errors in binary code.' },
          { label: 'B', text: 'Thermal vibration and electromagnetic interference from the environment.' },
          { label: 'C', text: 'Lack of electrical conductivity in silicone chips.' },
          { label: 'D', text: 'Depletion of lithium battery reserves.' }
        ],
        correctAnswer: 'B',
        explanation: 'The passage explicitly defines decoherence as: "the degradation of fragile qubit quantum states caused by thermal vibration and electromagnetic interference from the surrounding environment."',
        difficulty: 'easy',
        tags: ['Reading', 'Detail', 'Technology']
      },
      {
        id: 'read-q-20',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-04',
        subCategory: 'Inference',
        prompt: 'What happens to the computational state space of a quantum computer when the number of entangled qubits increases?',
        options: [
          { label: 'A', text: 'It remains constant.' },
          { label: 'B', text: 'It decreases linearly.' },
          { label: 'C', text: 'It expands exponentially.' },
          { label: 'D', text: 'It reverts to classical binary mode.' }
        ],
        correctAnswer: 'C',
        explanation: 'Paragraph 2 explains: "When multiple qubits become entangled... the state space of the computer expands exponentially: an n-qubit register can simultaneously represent 2^n numbers."',
        difficulty: 'easy',
        tags: ['Reading', 'Inference', 'Mathematics']
      }
    ]
  },

  // ========================================================
  // PASSAGE 5: ENVIRONMENT - Mangrove Ecosystems
  // ========================================================
  {
    id: 'read-pass-05',
    title: 'Ecological Guardians: Mangrove Forests and Coastal Resilience',
    topic: 'Environment',
    wordCount: 390,
    paragraphs: [
      'Positioned at the dynamic interface between terrestrial landmasses and marine waters, mangrove forests represent some of the most biologically productive and ecologically vital wetlands on the planet. Composed of halophytic (salt-tolerant) trees and shrubs adapted to thrive in saline intertidal zones, mangroves inhabit tropical and subtropical coastlines across the globe.',
      'To survive in anoxic, waterlogged mud inundated twice daily by salty tides, mangrove species have evolved remarkable morphological adaptations. Prominent among these are stilt roots and pneumatophores—specialized aerial breathing roots that protrude vertically above the muck to absorb atmospheric oxygen during low tide. Furthermore, complex salt-excluding ultrafiltration membranes in their root vascular systems prevent up to ninety-five percent of ambient seawater salt from penetrating into the plant tissue.',
      'The ecological dividends provided by these coastal barriers are multifaceted. Their dense tangle of submerged roots dissipates wave energy, dramatically mitigating shoreline erosion and buffering coastal settlements against destructive storm surges and tsunami forces. Simultaneously, mangrove root labyrinths serve as indispensable nurseries for commercially valuable fish, crustaceans, and mollusks, protecting juvenile species from oceanic predators. Perhaps most critically in the context of contemporary climate disruption, mangroves are formidable "blue carbon" sinks, sequestering up to five times more organic carbon per hectare than temperate terrestrial forests.'
    ],
    questions: [
      {
        id: 'read-q-21',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-05',
        subCategory: 'Main Idea',
        prompt: 'What is the primary focus of the passage?',
        options: [
          { label: 'A', text: 'Methods for harvesting mangrove timber.' },
          { label: 'B', text: 'The biological adaptations and extensive ecological values of mangrove forests.' },
          { label: 'C', text: 'The extinction of marine crustaceans in the tropics.' },
          { label: 'D', text: 'How commercial shipping damages coral reefs.' }
        ],
        correctAnswer: 'B',
        explanation: 'The passage explores both how mangroves adapt to salty, oxygen-poor coastal environments and the crucial ecological services they render.',
        difficulty: 'medium',
        tags: ['Reading', 'Main Idea', 'Ecology']
      },
      {
        id: 'read-q-22',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-05',
        subCategory: 'Factual Information',
        prompt: 'According to paragraph 2, what is the biological function of pneumatophores?',
        options: [
          { label: 'A', text: 'To produce sweet nectar for insects.' },
          { label: 'B', text: 'To absorb atmospheric oxygen above waterlogged, oxygen-deprived mud.' },
          { label: 'C', text: 'To store excess salt away from leaves.' },
          { label: 'D', text: 'To anchor the tree deep into bedrock.' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 2 describes pneumatophores as "specialized aerial breathing roots that protrude vertically above the muck to absorb atmospheric oxygen during low tide."',
        difficulty: 'easy',
        tags: ['Reading', 'Detail', 'Botany']
      },
      {
        id: 'read-q-23',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-05',
        subCategory: 'Vocabulary in Context',
        prompt: 'The word "mitigating" in paragraph 3 is closest in meaning to:',
        options: [
          { label: 'A', text: 'Exacerbating' },
          { label: 'B', text: 'Alleviating or lessening' },
          { label: 'C', text: 'Ignoring' },
          { label: 'D', text: 'Documenting' }
        ],
        correctAnswer: 'B',
        explanation: '"Mitigating" means reducing the severity, seriousness, or painful impact of something, such as shoreline erosion.',
        difficulty: 'medium',
        tags: ['Reading', 'Vocabulary in Context', 'Verbs']
      },
      {
        id: 'read-q-24',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-05',
        subCategory: 'Factual Information',
        prompt: 'According to paragraph 3, why are mangroves termed "blue carbon" sinks?',
        options: [
          { label: 'A', text: 'They turn the ocean water blue.' },
          { label: 'B', text: 'They sequester significant amounts of carbon per hectare in coastal sediments.' },
          { label: 'C', text: 'They produce synthetic carbon for industrial manufacturing.' },
          { label: 'D', text: 'They release high amounts of methane gas.' }
        ],
        correctAnswer: 'B',
        explanation: 'The passage explains they are blue carbon sinks because they sequester "up to five times more organic carbon per hectare than temperate terrestrial forests."',
        difficulty: 'easy',
        tags: ['Reading', 'Detail', 'Climate Science']
      },
      {
        id: 'read-q-25',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-05',
        subCategory: 'Inference',
        prompt: 'It can be inferred from the passage that destroying coastal mangrove wetlands would most likely lead to:',
        options: [
          { label: 'A', text: 'Decreased coastal erosion during severe storms.' },
          { label: 'B', text: 'Depleted fishery populations and heightened vulnerability to tidal surges.' },
          { label: 'C', text: 'A reduction in atmospheric carbon levels.' },
          { label: 'D', text: 'Increased oxygen in coastal soils.' }
        ],
        correctAnswer: 'B',
        explanation: 'Since mangroves protect juvenile fish and dissipate storm wave energy, their loss would deplete fish stocks and expose human coastal communities to severe storm surges.',
        difficulty: 'medium',
        tags: ['Reading', 'Inference', 'Environmental Impact']
      }
    ]
  },

  // ========================================================
  // PASSAGE 6: PSYCHOLOGY - Cognitive Biases & Heuristics
  // ========================================================
  {
    id: 'read-pass-06',
    title: 'Dual-Process Cognition and Human Heuristics',
    topic: 'Psychology',
    wordCount: 385,
    paragraphs: [
      'In behavioral economics and cognitive psychology, the human mind is frequently conceptualized through the dual-process framework popularized by Daniel Kahneman and Amos Tversky. This model posits that decision-making is mediated by two distinct computational systems: System 1 and System 2. While evolutionary pressure fashioned these systems to optimize human survival in ancestral environments, their interaction frequently produces systematic cognitive distortions.',
      'System 1 operates automatically, effortlessly, and rapidly, relying on intuitive pattern recognition and associative heuristics—mental shortcuts developed to resolve complex probabilistic assessments with minimal cognitive overhead. In contrast, System 2 is deliberative, analytical, slow, and effortful; it handles logical calculations, critical evaluation, and conscious self-regulation. Because sustained engagement of System 2 incurs high metabolic and attentional costs, human cognition exhibits a default bias toward cognitive ease, delegating judgment to System 1 whenever possible.',
      'While heuristics are indispensable for navigating daily decisions without paralysis, they reliably spawn predictable cognitive biases. For example, the availability heuristic leads individuals to assess the frequency or probability of an event based on how readily vivid exemplars come to memory, resulting in acute overestimations of sensationalized risks like plane crashes while underestimating mundane hazards like coronary heart disease. Understanding the interplay between these cognitive systems allows researchers and policymakers to design "nudges" that steer choices toward optimal outcomes.'
    ],
    questions: [
      {
        id: 'read-q-26',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-06',
        subCategory: 'Comparison',
        prompt: 'According to paragraph 2, how does System 1 differ from System 2?',
        options: [
          { label: 'A', text: 'System 1 requires intense conscious effort, while System 2 operates effortlessly.' },
          { label: 'B', text: 'System 1 is fast and intuitive, whereas System 2 is slow, deliberate, and analytical.' },
          { label: 'C', text: 'System 1 is only active during sleep.' },
          { label: 'D', text: 'System 2 was developed earlier in human evolution than System 1.' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 2 defines System 1 as automatic, effortless, and rapid, while System 2 is deliberative, analytical, slow, and effortful.',
        difficulty: 'easy',
        tags: ['Reading', 'Comparison', 'Psychology']
      },
      {
        id: 'read-q-27',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-06',
        subCategory: 'Vocabulary in Context',
        prompt: 'The word "heuristics" in paragraph 2 is closest in meaning to:',
        options: [
          { label: 'A', text: 'Mental shortcuts or rules of thumb' },
          { label: 'B', text: 'Rigorous mathematical equations' },
          { label: 'C', text: 'Chemical neurotransmitters' },
          { label: 'D', text: 'Visual hallucinations' }
        ],
        correctAnswer: 'A',
        explanation: 'Heuristics are mental shortcuts or practical cognitive rules used to make swift decisions.',
        difficulty: 'easy',
        tags: ['Reading', 'Vocabulary in Context', 'Cognitive Science']
      },
      {
        id: 'read-q-28',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-06',
        subCategory: 'Author\'s Purpose',
        prompt: 'Why does the author cite plane crashes and heart disease in paragraph 3?',
        options: [
          { label: 'A', text: 'To argue that public transit is unsafe.' },
          { label: 'B', text: 'To exemplify how the availability heuristic skews human risk perception.' },
          { label: 'C', text: 'To show how medical doctors make surgical decisions.' },
          { label: 'D', text: 'To explain airline economic policies.' }
        ],
        correctAnswer: 'B',
        explanation: 'The author uses these contrasting examples to demonstrate how easily recalled, dramatic events (plane crashes) are judged as more frequent than less sensational ones (heart disease).',
        difficulty: 'medium',
        tags: ['Reading', 'Author\'s Purpose', 'Examples']
      },
      {
        id: 'read-q-29',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-06',
        subCategory: 'Factual Information',
        prompt: 'Why does human cognition tend to default to System 1?',
        options: [
          { label: 'A', text: 'System 1 is always mathematically accurate.' },
          { label: 'B', text: 'System 2 incurs high metabolic and attentional costs.' },
          { label: 'C', text: 'System 2 cannot understand language.' },
          { label: 'D', text: 'System 1 ceases functioning during stressful situations.' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 2 explains: "Because sustained engagement of System 2 incurs high metabolic and attentional costs, human cognition exhibits a default bias toward cognitive ease, delegating judgment to System 1."',
        difficulty: 'medium',
        tags: ['Reading', 'Factual Information', 'Psychology']
      },
      {
        id: 'read-q-30',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-06',
        subCategory: 'Reference',
        prompt: 'The word "their" in paragraph 1 refers to:',
        options: [
          { label: 'A', text: 'System 1 and System 2' },
          { label: 'B', text: 'Daniel Kahneman and Amos Tversky' },
          { label: 'C', text: 'Ecological distortions' },
          { label: 'D', text: 'Ancestral environments' }
        ],
        correctAnswer: 'A',
        explanation: 'In the sentence "...fashioned these systems... their interaction frequently produces systematic cognitive distortions", "their" refers to the two systems (System 1 and System 2).',
        difficulty: 'easy',
        tags: ['Reading', 'Reference', 'Pronoun Agreement']
      }
    ]
  },

  // ========================================================
  // PASSAGE 7: ECONOMICS - Comparative Advantage & Trade
  // ========================================================
  {
    id: 'read-pass-07',
    title: 'David Ricardo and the Principle of Comparative Advantage',
    topic: 'Economics',
    wordCount: 395,
    paragraphs: [
      'Published in his seminal 1817 work *On the Principles of Political Economy and Taxation*, British economist David Ricardo formulated one of the most counter-intuitive yet enduring axioms in social science: the Law of Comparative Advantage. Ricardo sought to challenge mercantilist orthodoxies, which held that nations should strive for absolute economic self-sufficiency by hoarding bullion and restricting imports through aggressive tariffs.',
      'Prior to Ricardo, Adam Smith had articulated the doctrine of absolute advantage, which posited that trade is beneficial only when country A produces a good using fewer physical inputs (such as labor hours) than country B. Ricardo demonstrated that trade remains mutually advantageous even if one country possesses an absolute superiority across all production sectors. The crucial analytical metric is not absolute productivity, but opportunity cost—the quantity of an alternative commodity that must be forgone to produce an additional unit of a given good.',
      'Using his classic theoretical model of England producing cloth and Portugal producing wine, Ricardo illustrated that if each nation concentrates its capital and labor exclusively on the commodity for which it holds the lower opportunity cost and trades for the other, total world output increases and both nations consume beyond their domestic production possibility frontiers. Despite recurring political pressures toward economic protectionism, comparative advantage remains the foundational bedrock of modern international trade theory.'
    ],
    questions: [
      {
        id: 'read-q-31',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-07',
        subCategory: 'Main Idea',
        prompt: 'What is the primary subject of the passage?',
        options: [
          { label: 'A', text: 'The history of textile manufacturing in seventeenth-century Portugal.' },
          { label: 'B', text: 'David Ricardo\'s economic principle of comparative advantage and its rationale for international trade.' },
          { label: 'C', text: 'How mercantilism generated wealth for British monarchs.' },
          { label: 'D', text: 'The fluctuation of bullion currency during the Napoleonic wars.' }
        ],
        correctAnswer: 'B',
        explanation: 'The passage explores the concept of comparative advantage, how it departed from absolute advantage and mercantilism, and its justification for international trade.',
        difficulty: 'easy',
        tags: ['Reading', 'Main Idea', 'Economics']
      },
      {
        id: 'read-q-32',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-07',
        subCategory: 'Vocabulary in Context',
        prompt: 'The word "forgone" in paragraph 2 is closest in meaning to:',
        options: [
          { label: 'A', text: 'Relinquished or given up' },
          { label: 'B', text: 'Manufactured efficiently' },
          { label: 'C', text: 'Heavily taxed' },
          { label: 'D', text: 'Stored securely' }
        ],
        correctAnswer: 'A',
        explanation: '"Forgone" (past participle of forgo) means to sacrifice, give up, or do without in order to choose another alternative.',
        difficulty: 'medium',
        tags: ['Reading', 'Vocabulary in Context', 'Economics Terms']
      },
      {
        id: 'read-q-33',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-07',
        subCategory: 'Comparison',
        prompt: 'How did Ricardo\'s theory differ from Adam Smith\'s absolute advantage?',
        options: [
          { label: 'A', text: 'Ricardo argued that trade should be conducted without money.' },
          { label: 'B', text: 'Ricardo showed that trade is beneficial based on lower opportunity cost, even without absolute superiority.' },
          { label: 'C', text: 'Ricardo believed tariffs should be raised to maximum levels.' },
          { label: 'D', text: 'Ricardo stated that only large nations benefit from foreign commerce.' }
        ],
        correctAnswer: 'B',
        explanation: 'Ricardo demonstrated that mutual benefit from trade depends on differences in opportunity cost rather than requiring absolute productivity advantages across goods.',
        difficulty: 'medium',
        tags: ['Reading', 'Comparison', 'Economic Theory']
      },
      {
        id: 'read-q-34',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-07',
        subCategory: 'Factual Information',
        prompt: 'According to paragraph 3, what commodities did Ricardo use in his theoretical model?',
        options: [
          { label: 'A', text: 'Iron and wheat' },
          { label: 'B', text: 'English cloth and Portuguese wine' },
          { label: 'C', text: 'Spices and silk' },
          { label: 'D', text: 'Gold coins and lumber' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 3 explicitly states: "Using his classic theoretical model of England producing cloth and Portugal producing wine..."',
        difficulty: 'easy',
        tags: ['Reading', 'Detail', 'History of Economics']
      },
      {
        id: 'read-q-35',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-07',
        subCategory: 'Inference',
        prompt: 'It can be inferred from the passage that mercantilist policies were designed to:',
        options: [
          { label: 'A', text: 'Encourage free trade across all national borders.' },
          { label: 'B', text: 'Minimize foreign imports while accumulating gold and silver reserves.' },
          { label: 'C', text: 'Abolish all protective import duties.' },
          { label: 'D', text: 'Promote mutual cooperation among European farming regions.' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 1 explains that mercantilist orthodoxy held nations should strive for self-sufficiency by "hoarding bullion and restricting imports through aggressive tariffs."',
        difficulty: 'medium',
        tags: ['Reading', 'Inference', 'History & Economics']
      }
    ]
  },

  // ========================================================
  // PASSAGE 8: EDUCATION - The Socratic Method
  // ========================================================
  {
    id: 'read-pass-08',
    title: 'The Epistemological Foundations of the Socratic Method',
    topic: 'Education',
    wordCount: 380,
    paragraphs: [
      'In contemporary pedagogy and legal education, few instructional frameworks possess the historical endurance and intellectual rigor of the Socratic method. Originating in fifth-century BCE Athens with the philosopher Socrates, this dialogue-based pedagogical approach stands in stark contrast to passive didactic lecturing, wherein an authoritative instructor transmits codified facts to receptive pupils.',
      'At its core, the Socratic inquiry (known in Greek as the *elenchus*) is a cooperative argumentative dialogue. Rather than lecturing, the instructor poses probing, sequential questions that interrogate the students\' foundational assumptions. When a student offers a proposition or moral definition, the educator responds not with praise or correction, but with counter-examples designed to reveal latent logical contradictions, unexamined premises, or unsustainable corollaries within the respondent\'s reasoning.',
      'Socrates likened his philosophical role to that of a midwife (*maieutics*): he claimed not to impart wisdom, but to help interlocutors deliver their own latent intellectual insights through critical introspection. In modern classrooms, particularly within legal jurisprudence and graduate seminars, the method cultivates agile critical thinking, intellectual humility, and the capacity to defend complex arguments under sustained analytical pressure. However, educational critics caution that if conducted aggressively without psychological safety, it risks creating an adversarial atmosphere that inhibits open student participation.'
    ],
    questions: [
      {
        id: 'read-q-36',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-08',
        subCategory: 'Main Idea',
        prompt: 'What is the main topic of the passage?',
        options: [
          { label: 'A', text: 'The trial and execution of Socrates in ancient Athens.' },
          { label: 'B', text: 'The nature, operation, and educational impact of the Socratic method.' },
          { label: 'C', text: 'How modern technology replaces classroom professors.' },
          { label: 'D', text: 'Curricular differences between legal and medical schools.' }
        ],
        correctAnswer: 'B',
        explanation: 'The passage explores the principles, historical origins, instructional mechanics, and modern benefits/critiques of the Socratic method.',
        difficulty: 'easy',
        tags: ['Reading', 'Main Idea', 'Education']
      },
      {
        id: 'read-q-37',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-08',
        subCategory: 'Vocabulary in Context',
        prompt: 'The word "latent" in paragraph 2 is closest in meaning to:',
        options: [
          { label: 'A', text: 'Hidden or unexpressed' },
          { label: 'B', text: 'Widely praised' },
          { label: 'C', text: 'Permanent' },
          { label: 'D', text: 'Harmful' }
        ],
        correctAnswer: 'A',
        explanation: '"Latent" means present and potential but currently hidden, dormant, or not yet manifest.',
        difficulty: 'medium',
        tags: ['Reading', 'Vocabulary in Context', 'Philosophy']
      },
      {
        id: 'read-q-38',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-08',
        subCategory: 'Author\'s Purpose',
        prompt: 'Why does the author mention a "midwife" in paragraph 3?',
        options: [
          { label: 'A', text: 'To explain that Socrates had medical training.' },
          { label: 'B', text: 'To illustrate Socrates\' view that he assisted students in giving birth to their own insights rather than imparting knowledge.' },
          { label: 'C', text: 'To argue that ancient Greek mothers were primary educators.' },
          { label: 'D', text: 'To compare biological birth with university graduation.' }
        ],
        correctAnswer: 'B',
        explanation: 'The midwife analogy illustrates Socrates\' belief that his method helped students extract and birth their own inherent knowledge through dialectic examination.',
        difficulty: 'easy',
        tags: ['Reading', 'Author\'s Purpose', 'Analogies']
      },
      {
        id: 'read-q-39',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-08',
        subCategory: 'Factual Information',
        prompt: 'According to paragraph 2, how does a Socratic educator respond to a student\'s proposition?',
        options: [
          { label: 'A', text: 'By assigning a low letter grade immediately.' },
          { label: 'B', text: 'By posing counter-examples to highlight logical inconsistencies.' },
          { label: 'C', text: 'By providing the memorized textbook answer.' },
          { label: 'D', text: 'By asking another professor to take over the class.' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 2 states the educator responds "with counter-examples designed to reveal latent logical contradictions, unexamined premises, or unsustainable corollaries."',
        difficulty: 'easy',
        tags: ['Reading', 'Detail', 'Pedagogy']
      },
      {
        id: 'read-q-40',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-08',
        subCategory: 'Inference',
        prompt: 'What potential drawback of the Socratic method is identified in the passage?',
        options: [
          { label: 'A', text: 'It requires too much expensive multimedia equipment.' },
          { label: 'B', text: 'It can foster an antagonistic environment if conducted without psychological safety.' },
          { label: 'C', text: 'It prevents students from memorizing multiple-choice facts.' },
          { label: 'D', text: 'It cannot be conducted in the English language.' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 3 notes: "if conducted aggressively without psychological safety, it risks creating an adversarial atmosphere that inhibits open student participation."',
        difficulty: 'easy',
        tags: ['Reading', 'Inference', 'Classroom Dynamics']
      }
    ]
  },

  // ========================================================
  // PASSAGE 9: ANTHROPOLOGY - The Domestication of Fire
  // ========================================================
  {
    id: 'read-pass-09',
    title: 'Hominin Evolution and the Mastery of Anthropogenic Fire',
    topic: 'Anthropology',
    wordCount: 390,
    paragraphs: [
      'The controlled harnessing of fire stands as a decisive evolutionary inflection point separating early hominins from the remainder of the animal kingdom. While the archaeological verification of early pyrotechnology remains fiercely contested—with disputed hearth sites ranging from Swartkrans in South Africa to Gesher Benot Ya\'aqov in Israel—most paleoanthropologists agree that the deliberate management of fire was consolidated by *Homo erectus* by at least 400,000 years ago, and possibly much earlier.',
      'According to the "cooking hypothesis" championed by primatologist Richard Wrangham, the advent of cooked food triggered profound anatomical and metabolic transformations in human ancestors. Thermal processing denatures proteins, gelatinizes complex starches, and breaks down structural plant cellulose, rendering foodstuffs substantially easier to chew and digest. Consequently, hominins could extract vastly more metabolic calories while expending far less time and energy on mechanical mastication.',
      'This energetic surplus facilitated a dramatic evolutionary tradeoff: a dramatic reduction in gut size coupled with the rapid encephalization—or brain expansion—characteristic of the genus *Homo*. Beyond metabolic consequences, the camp hearth extended usable waking hours into nocturnal darkness, provided reliable warmth in glacial habitats, and deterred apex Pleistocene predators. Crucially, gathering around the communal fire fostered complex vocal communication, storytelling, and social bonding, weaving the cultural fabric of early human society.'
    ],
    questions: [
      {
        id: 'read-q-41',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-09',
        subCategory: 'Main Idea',
        prompt: 'What is the primary focus of the passage?',
        options: [
          { label: 'A', text: 'Modern culinary recipes developed during the Middle Ages.' },
          { label: 'B', text: 'The profound biological and cultural evolutionary consequences of fire control in human ancestors.' },
          { label: 'C', text: 'How wild brushfires destroy prehistoric cave painting sites.' },
          { label: 'D', text: 'Hunting tools utilized by modern primates in Africa.' }
        ],
        correctAnswer: 'B',
        explanation: 'The passage explores how the control of fire and cooking influenced human metabolic evolution, brain expansion, and social cooperation.',
        difficulty: 'medium',
        tags: ['Reading', 'Main Idea', 'Anthropology']
      },
      {
        id: 'read-q-42',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-09',
        subCategory: 'Vocabulary in Context',
        prompt: 'The word "mastication" in paragraph 2 is closest in meaning to:',
        options: [
          { label: 'A', text: 'Chewing' },
          { label: 'B', text: 'Running' },
          { label: 'C', text: 'Sleeping' },
          { label: 'D', text: 'Cooking' }
        ],
        correctAnswer: 'A',
        explanation: '"Mastication" is the biological term for chewing food to crush and prepare it for swallowing.',
        difficulty: 'easy',
        tags: ['Reading', 'Vocabulary in Context', 'Anatomy']
      },
      {
        id: 'read-q-43',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-09',
        subCategory: 'Factual Information',
        prompt: 'According to paragraph 2, what physical change in food occurs during thermal cooking?',
        options: [
          { label: 'A', text: 'Proteins are denatured and starches are gelatinized.' },
          { label: 'B', text: 'Vitamins are entirely destroyed.' },
          { label: 'C', text: 'Food becomes poisonous to digest.' },
          { label: 'D', text: 'Cellulose walls become impossible to break down.' }
        ],
        correctAnswer: 'A',
        explanation: 'Paragraph 2 notes: "Thermal processing denatures proteins, gelatinizes complex starches, and breaks down structural plant cellulose..."',
        difficulty: 'easy',
        tags: ['Reading', 'Detail', 'Biology']
      },
      {
        id: 'read-q-44',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-09',
        subCategory: 'Factual Information',
        prompt: 'According to paragraph 3, what anatomical tradeoff accompanied the expansion of hominin brain size?',
        options: [
          { label: 'A', text: 'A reduction in digestive gut size.' },
          { label: 'B', text: 'Loss of visual acuity.' },
          { label: 'C', text: 'Weakening of leg bones.' },
          { label: 'D', text: 'Shortening of the vocal tract.' }
        ],
        correctAnswer: 'A',
        explanation: 'Paragraph 3 notes: "a dramatic reduction in gut size coupled with the rapid encephalization—or brain expansion—characteristic of the genus Homo."',
        difficulty: 'medium',
        tags: ['Reading', 'Detail', 'Evolutionary Anthropology']
      },
      {
        id: 'read-q-45',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-09',
        subCategory: 'Inference',
        prompt: 'What social benefit resulted from gathering around the evening hearth?',
        options: [
          { label: 'A', text: 'It encouraged solitary hunting expeditions at midnight.' },
          { label: 'B', text: 'It stimulated linguistic storytelling and reinforced community bonds.' },
          { label: 'C', text: 'It forced groups to abandon cave shelters.' },
          { label: 'D', text: 'It caused sleep deprivation among all members.' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 3 notes: "Crucially, gathering around the communal fire fostered complex vocal communication, storytelling, and social bonding..."',
        difficulty: 'easy',
        tags: ['Reading', 'Inference', 'Cultural Evolution']
      }
    ]
  },

  // ========================================================
  // PASSAGE 10: SCIENCE - The Physics of Superconductivity
  // ========================================================
  {
    id: 'read-pass-10',
    title: 'Zero Resistance: The Quantum Mechanics of Superconductivity',
    topic: 'Science',
    wordCount: 405,
    paragraphs: [
      'First discovered in 1911 by Dutch physicist Heike Kamerlingh Onnes when chilling elemental mercury with liquid helium to 4.2 Kelvin, superconductivity is a quantum macroscopic phenomenon characterized by two hallmark properties: the total disappearance of electrical resistance and the active expulsion of external magnetic fields, an effect designated the Meissner effect.',
      'Under standard conditions, electrical conduction in metal is impeded by resistance; propagating conduction electrons continually collide with thermal vibrations (phonons) in the crystalline ion lattice, dissipating energy as waste heat. However, below a substance\'s critical temperature (Tc), a subtle quantum attraction mediated by lattice vibrations pairs electrons together into bound states known as Cooper pairs. Although electrons are fermions obeying the Pauli exclusion principle, a Cooper pair behaves as a composite boson.',
      'Consequently, millions of Cooper pairs condense into a single macroscopic quantum ground state characterized by a coherent wave function. In this unified state, individual electron scattering is quantum-mechanically forbidden because any scattering event would require an energy expenditure exceeding the superconducting energy gap. Current therefore flows perpetually without friction or loss. Modern research centers on high-temperature cuprate and nickelate superconductors, aiming toward the elusive technological holy grail: a stable room-temperature superconductor that could revolutionize power grids, maglev transportation, and magnetic confinement fusion.'
    ],
    questions: [
      {
        id: 'read-q-46',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-10',
        subCategory: 'Main Idea',
        prompt: 'What is the main topic of the passage?',
        options: [
          { label: 'A', text: 'The history of liquid helium refrigeration techniques.' },
          { label: 'B', text: 'The fundamental physical principles and quantum mechanisms underlying superconductivity.' },
          { label: 'C', text: 'How mercury thermometers measure atmospheric pressure.' },
          { label: 'D', text: 'The electrical wiring of modern high-speed trains.' }
        ],
        correctAnswer: 'B',
        explanation: 'The passage explains how superconductivity works at the quantum level (Cooper pairs, bosonic condensation, Meissner effect) and its potential applications.',
        difficulty: 'medium',
        tags: ['Reading', 'Main Idea', 'Physics']
      },
      {
        id: 'read-q-47',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-10',
        subCategory: 'Factual Information',
        prompt: 'What are the two defining properties of superconductivity mentioned in paragraph 1?',
        options: [
          { label: 'A', text: 'High radioactivity and glowing luminescence' },
          { label: 'B', text: 'Complete disappearance of electrical resistance and expulsion of magnetic fields' },
          { label: 'C', text: 'Low melting points and extreme chemical reactivity' },
          { label: 'D', text: 'High friction and explosive heat emission' }
        ],
        correctAnswer: 'B',
        explanation: 'Paragraph 1 lists "two hallmark properties: the total disappearance of electrical resistance and the active expulsion of external magnetic fields, an effect designated the Meissner effect."',
        difficulty: 'easy',
        tags: ['Reading', 'Detail', 'Quantum Mechanics']
      },
      {
        id: 'read-q-48',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-10',
        subCategory: 'Vocabulary in Context',
        prompt: 'The word "impeded" in paragraph 2 is closest in meaning to:',
        options: [
          { label: 'A', text: 'Hindered or obstructed' },
          { label: 'B', text: 'Accelerated' },
          { label: 'C', text: 'Measured' },
          { label: 'D', text: 'Cooled down' }
        ],
        correctAnswer: 'A',
        explanation: '"Impeded" means slowed down, hampered, or obstructed by obstacles (in this case, electron collisions).',
        difficulty: 'easy',
        tags: ['Reading', 'Vocabulary in Context', 'Verbs']
      },
      {
        id: 'read-q-49',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-10',
        subCategory: 'Factual Information',
        prompt: 'According to paragraph 2, what enables electrons to overcome the Pauli exclusion principle in superconductors?',
        options: [
          { label: 'A', text: 'They combine into bound Cooper pairs that act as composite bosons.' },
          { label: 'B', text: 'They convert into magnetic photons.' },
          { label: 'C', text: 'They escape into the surrounding liquid helium.' },
          { label: 'D', text: 'They double their negative electrical charge.' }
        ],
        correctAnswer: 'A',
        explanation: 'Paragraph 2 notes that while individual electrons are fermions, "a Cooper pair behaves as a composite boson", allowing them to condense into a single quantum state.',
        difficulty: 'medium',
        tags: ['Reading', 'Detail', 'Physics']
      },
      {
        id: 'read-q-50',
        section: 'reading',
        part: 'reading',
        passageId: 'read-pass-10',
        subCategory: 'Inference',
        prompt: 'Why would the discovery of a stable room-temperature superconductor be considered revolutionary?',
        options: [
          { label: 'A', text: 'It would eliminate all need for renewable energy sources.' },
          { label: 'B', text: 'It would permit zero-resistance electricity transmission and powerful magnetic applications without cryogenic cooling.' },
          { label: 'C', text: 'It would cause computers to function with zero electricity.' },
          { label: 'D', text: 'It would turn metals into precious gold.' }
        ],
        correctAnswer: 'B',
        explanation: 'Room-temperature superconductivity would allow frictionless power grids, efficient maglev trains, and fusion reactors without requiring costly cryogenic liquid helium or nitrogen cooling.',
        difficulty: 'medium',
        tags: ['Reading', 'Inference', 'Technological Impact']
      }
    ]
  }
];
