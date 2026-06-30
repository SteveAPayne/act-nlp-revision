export interface Question {
  id: string;

  level: "Practitioner" | "Master Practitioner" | "Trainer";

  category: string;

  topic: string;

  learningObjective?: string;

  type?:
    | "Definition"
    | "Concept"
    | "Process"
    | "Application"
    | "Comparison"
    | "Recall"
    | "Design";

  question: string;

  answer: string;

  explanation?: string;

  distractors?: string[];

  sourceType?: "Exam" | "Manual" | "ACT" | "Generated";

  sourceReference?: string;

  active?: boolean;

  manualReferences?: {
    manual: "Practitioner" | "Online Practitioner" | "Master Practitioner";
    section: string;
    pages: string;
  }[];

  tags?: string[];
}

export const questions: Question[] = [
  {
    id: "P-ANLP-001",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Concept",
    question: "What are values?",
    answer: "Values are what is important to a person.",
    distractors: [
      "Values are fixed personality traits.",
      "Values are unconscious behaviours.",
      "Values are measurable outcomes only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-002",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Concept",
    question: "Why are values important?",
    answer: "Values drive motivation, decisions and behaviour.",
    distractors: [
      "Values determine eye accessing cues.",
      "Values only affect emotions.",
      "Values are used solely for goal setting.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-003",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Definition",
    question: "What is another name for values in NLP?",
    answer: "Criteria.",
    distractors: ["Presuppositions", "Meta-programmes", "Belief filters"],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-004",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Definition",
    question: "What is the relationship between values and behaviours?",
    answer: "Behaviour is driven by the desire to fulfil values.",
    distractors: [
      "Behaviour creates values.",
      "Values and behaviour are unrelated.",
      "Behaviour is driven only by beliefs.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-005",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Concept",
    question: "How do you elicit values?",
    answer:
      "Ask what is most important to a person in a specific context and explore the answers.",
    distractors: [
      "Analyse body language only.",
      "Ask about childhood memories only.",
      "Use a personality assessment only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-006",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Concept",
    question: "How do you de-nominalise values?",
    answer: "Ask what the value means specifically.",
    distractors: [
      "Challenge the value as false.",
      "Replace the value with another value.",
      "Ignore the abstract language used.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-007",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Concept",
    question: "How do you elicit a values hierarchy?",
    answer: "Rank values in order of importance within a context.",
    distractors: [
      "List values alphabetically.",
      "Identify values shared by others.",
      "Group values by representational system.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-008",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Definition",
    question: "What is the relationship between context and values?",
    answer: "Values can change depending on the context.",
    distractors: [
      "Values never change across contexts.",
      "Context is irrelevant to values.",
      "Values are determined only by personality.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-009",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Comparison",
    question: "What is the difference between means values and ends values?",
    answer:
      "Means values support other values; ends values are desired outcomes in themselves.",
    distractors: [
      "Means values are more important than ends values.",
      "Ends values support means values.",
      "Means and ends values are identical.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-010",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Concept",
    question: "What are towards and away from values?",
    answer:
      "Towards values move a person toward outcomes; away from values move them away from problems.",
    distractors: [
      "Towards values avoid problems; away values seek goals.",
      "Both focus only on avoiding risk.",
      "They describe representational systems.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-011",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Definition",
    question: "What is the relationship between values and beliefs?",
    answer: "Beliefs support, justify or limit the achievement of values.",
    distractors: [
      "Beliefs and values are the same thing.",
      "Values create beliefs automatically.",
      "Beliefs are unrelated to values.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-012",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Definition",
    question: "What is the relationship between values and emotions?",
    answer:
      "When values are met positive emotions result; when compromised negative emotions may result.",
    distractors: [
      "Emotions create values.",
      "Values only affect negative emotions.",
      "Values and emotions are unrelated.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-013",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Comparison",
    question:
      "What is the difference between simultaneous and sequential incongruity?",
    answer:
      "Simultaneous incongruity occurs at the same time; sequential incongruities occur alternately.",
    distractors: [
      "Both occur over time.",
      "Simultaneous occurs over time; sequential occurs at once.",
      "There is no difference.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-014",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Concept",
    question: "How do you calibrate simultaneous and sequential incongruity?",
    answer: "Observe verbal and non-verbal inconsistencies.",
    distractors: [
      "Ignore non-verbal behaviour.",
      "Ask only closed questions.",
      "Focus solely on content.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-015",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Application",
    question:
      "What process would be an obvious choice for a simultaneous incongruity?",
    answer: "Parts Integration.",
    distractors: [
      "Submodality Belief Change.",
      "V/K Dissociation.",
      "Timeline Reimprinting.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "MP-ANLP-001",
    level: "Master Practitioner",
    category: "Meta Programmes",
    topic: "Meta Programmes & LAB Profiling",
    type: "Definition",
    question: "What is a meta-programme?",
    answer: `A meta-programme is a habitual pattern of thinking, filtering and processing information. Sometimes refered to as a natural preference`,
    distractors: [
      "A fixed personality type.",
      "A representational system.",
      "A conscious goal-setting method.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What are Meta Programmes",
        pages: "6-1-6-50",
      },
    ],
  },
  {
    id: "MP-ANLP-002",
    level: "Master Practitioner",
    category: "Meta Programmes",
    topic: "Meta Programmes & LAB Profiling",
    type: "Concept",
    question: "Why are meta-programmes important?",
    answer:
      "They influence motivation, communication, decision making and behaviour.",
    distractors: [
      "They determine intelligence.",
      "They identify learning styles only.",
      "They are used only in therapy.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What are Meta Programmes",
        pages: "6-1-6-50",
      },
    ],
  },
  {
    id: "MP-ANLP-003",
    level: "Master Practitioner",
    category: "Meta Programmes",
    topic: "Meta Programmes & LAB Profiling",
    type: "Definition",
    question: "What is the link between meta-programmes and strategies?",
    answer: "Meta-programmes influence how strategies are formed and used.",
    distractors: [
      "Strategies determine meta-programmes.",
      "There is no relationship.",
      "Strategies replace meta-programmes.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What are Meta Programmes",
        pages: "6-1-6-50",
      },
    ],
  },
  {
    id: "MP-ANLP-004",
    level: "Master Practitioner",
    category: "Meta Programmes",
    topic: "Meta Programmes & LAB Profiling",
    type: "Recall",
    question: "List 6 motivation trait meta programmes.",
    answer: `1. Towards/Away From 
      2. Options/Procedures 
      3. Internal/External Reference
      4. Big picture/Detail
      5. Sameness/Difference
      6. Proactive/Reactive`,
    distractors: [
      "VAKOG, Meta Model, Milton Model, Strategies,values and Anchoring.",
      "Rapport, Calibration, Chunking, presuppositions, anchoring and Reframing only.",
      "Beliefs, Values , submodalities, core skills, language and Neurological Levels only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What are Meta Programmes",
        pages: "6-1-6-50",
      },
    ],
  },
  {
    id: "MP-ANLP-005",
    level: "Master Practitioner",
    category: "Meta Programmes",
    topic: "Meta Programmes & LAB Profiling",
    type: "Concept",
    question: "List 4 verbal indicators of the proactive meta programme",
    answer: `Examples include: 
    1. Let's do it 
    2. I'm ready 
    3. I already did
    4. I'll make it happen`,
    distractors: [
      "I want\u2026, let's be certain, maybe, research first",
      "Overview, let's look at the options, what specifically, How could we\u2026",
      "What do you think? I need detail. We'll see. I don't want\u2026",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What are Meta Programmes",
        pages: "6-1-6-50",
      },
    ],
  },
  {
    id: "MP-ANLP-006",
    level: "Master Practitioner",
    category: "Meta Programmes",
    topic: "Meta Programmes & LAB Profiling",
    type: "Concept",
    question: "Give two applications where meta-programmes are useful.",
    answer: `Meta-programmes are useful in: 
      - coaching
      - leadership
      - sales
      - recruitment
      - communication
      - team development.`,
    distractors: [
      "Accounting and bookkeeping only.",
      "Website design and coding only.",
      "Sports performance analysis only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What are Meta Programmes",
        pages: "6-1-6-50",
      },
    ],
  },
  {
    id: "MP-ANLP-007",
    level: "Master Practitioner",
    category: "Meta Programmes",
    topic: "Meta Programmes & LAB Profiling",
    type: "Recall",
    question: "Who is the world's leading expert on LAB Profiling?",
    answer: `Leslie Cameron Bandler unpacked Meta Programmes.
      Rodger Bailey is widely recognised as the creator of LAB Profile (a further adaptation of Meta Programmes) and a leading authority on meta-programmes.
      Shelle Rose Charvet is the author of 'Words That Change Minds', the seminal book on the LAB Profile`,
    distractors: ["Richard Bandler", "John Grinder", "Robert Dilts"],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What are Meta Programmes",
        pages: "6-1-6-50",
      },
    ],
  },
  {
    id: "MP-ANLP-008",
    level: "Master Practitioner",
    category: "Meta Programmes",
    topic: "Meta Programmes & LAB Profiling",
    type: "Definition",
    question:
      "What is tthe Seminal book on Language and Behaviour Profiling called?",
    answer: "Words That Change Minds, by Shelle Rose Charvet",
    distractors: [
      "The Structure of Magic",
      "Patterns of the Hypnotic Techniques of Milton Erickson",
      "NLP Volume I",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What are Meta Programmes",
        pages: "6-1-6-50",
      },
    ],
  },
  {
    id: "MP-ANLP-009",
    level: "Master Practitioner",
    category: "Meta Programmes",
    topic: "Meta Programmes & LAB Profiling",
    type: "Process",
    question:
      "Describe the McLelland model of Power, Affiliation and Achievement and how you would apply it in business.",
    answer: `McClelland proposed three key drivers: 
      1. Achievement
      2. Affiliation
      3. Power. 
      Understanding which dominates helps tailor motivation, leadership and communication.`,
    distractors: [
      "It describes visual, auditory and kinaesthetic systems.",
      "It explains logical levels of change.",
      "It categorises personality into four types.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What are Meta Programmes",
        pages: "6-1-6-50",
      },
    ],
  },
  {
    id: "MP-ANLP-010",
    level: "Master Practitioner",
    category: "Meta Programmes",
    topic: "Meta Programmes & LAB Profiling",
    type: "Concept",
    question:
      "What are some ways to change one meta-programme sort to another?",
    answer:
      "Change the context, develop flexibility, practise alternative behaviours and consciously adopt a different filtering pattern.",
    distractors: [
      "Force a new pattern permanently.",
      "Eliminate all existing meta-programmes.",
      "Change physiology only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What are Meta Programmes",
        pages: "6-1-6-50",
      },
    ],
  },
  {
    id: "MP-ANLP-011",
    level: "Master Practitioner",
    category: "Processes",
    topic: "Neurological Levels of Change",
    type: "Concept",
    question: "What are Neurological levels of Change?",
    answer:
      "Neurological Levels are a hierarchy of change including Environment, Behaviour, Capability, Beliefs and Values, Identity and Purpose.",
    distractors: [
      "A hierarchy of representational systems.",
      "A sequence of NLP techniques.",
      "A personality classification model.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Online Practitioner",
        section: "Module 5",
        pages: "Hierarchy of Chunking-Hierarchy of Chunking",
      },
    ],
  },
  {
    id: "MP-ANLP-012",
    level: "Master Practitioner",
    category: "Processes",
    topic: "Logical Levels",
    type: "Concept",
    question: "What are logical types?",
    answer:
      "Logical Types are different levels of classification where higher levels organise and influence lower levels.",
    distractors: [
      "Categories of representational systems.",
      "Levels of rapport.",
      "Strategies for goal setting.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Online Practitioner",
        section: "Module 4",
        pages: "Neurological Levels of Change",
      },
    ],
  },
  {
    id: "MP-ANLP-013",
    level: "Master Practitioner",
    category: "Processes",
    topic: "Logical Levels",
    type: "Concept",
    question: "Why are logical types important?",
    answer:
      "Problems are often solved more effectively by addressing the level above where they occur, as Einstein also described.",
    distractors: [
      "They explain eye accessing cues.",
      "They identify preferred representational systems.",
      "They eliminate the need for ecology checks.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Online Practitioner",
        section: "Module 5",
        pages: "Hierarchy of Chunking-Hierarchy of Chunking",
      },
    ],
  },
  {
    id: "MP-LNG-001",
    level: "Master Practitioner",
    category: "Language",
    topic: "Sleight of Mouth",
    type: "Concept",
    question: "What are Sleight of Mouth patterns?",
    answer:
      "Sleight of Mouth patterns are language patterns used to influence beliefs and reframe meaning.",
    distractors: [
      "Patterns for building rapport only.",
      "Patterns for analysing physiology.",
      "Patterns for eliciting submodalities.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Sleight of Mouth Patterns",
        pages: "8-1-8-24",
      },
    ],
  },
  {
    id: "MP-LNG-002",
    level: "Master Practitioner",
    category: "Language",
    topic: "Sleight of Mouth",
    type: "Concept",
    question:
      "How did Rober Dilts make the Sleight of Mouth Patterns easy to learn?",
    answer:
      "Robert Dilts organised the patterns into an icon map showing relationships between the 16 patterns.",
    distractors: [
      "He made them into a hierarchy of logical levels.",
      "He created a timeline diagram.",
      "He designed a representational systems chart.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Sleight of Mouth Patterns",
        pages: "8-1-8-24",
      },
    ],
  },
  {
    id: "MP-LNG-003",
    level: "Master Practitioner",
    category: "Language",
    topic: "Sleight of Mouth",
    type: "Concept",
    question:
      "What are the two forms of surface structures on which Sleight of Mouth can be performed?",
    answer:
      "Sleight of Mouth can be applied to Cause-Effect and Complex Equivalences statements.",
    distractors: [
      "Nominalisations and deletions.",
      "Universal quantifiers and modal operators.",
      "Visual and auditory predicates.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Sleight of Mouth Patterns",
        pages: "8-1-8-24",
      },
    ],
  },
  {
    id: "MP-LNG-004",
    level: "Master Practitioner",
    category: "Language",
    topic: "Sleight of Mouth",
    type: "Design",
    question: "What does the consequence pattern in Sleight of Mouth mean?",
    answer: "Every belief has a helpful or unhelpful consequene.",
    distractors: [
      "That your intention might have been good.",
      "It means exaggeration.",
      "It means you find a counter example",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Sleight of Mouth Patterns",
        pages: "8-1-8-24",
      },
    ],
  },
  {
    id: "MP-LNG-005",
    level: "Master Practitioner",
    category: "Language",
    topic: "Sleight of Mouth",
    type: "Recall",
    question: "Who wrote The User's Guide to Sleight of Mouth?",
    answer: "Doug O'Brien",
    distractors: ["Robert Dilts", "John Grinder", "Joseph O'Connor"],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Sleight of Mouth Patterns",
        pages: "8-1-8-24",
      },
    ],
  },
  {
    id: "MP-ANLP-014",
    level: "Master Practitioner",
    category: "Modelling",
    topic: "The Modelling Process",
    type: "Definition",
    question: "What is modelling?",
    answer:
      "Modelling is the process of identifying and replicating the structure of excellence.",
    distractors: [
      "Teaching a skill through instruction.",
      "Copying behaviour without analysis.",
      "Changing beliefs through repetition.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Introduction to Modeling",
        pages: "7-1-7-8",
      },
    ],
  },
  {
    id: "MP-ANLP-015",
    level: "Master Practitioner",
    category: "Modelling",
    topic: "The Modelling Process",
    type: "Process",
    question: "List Grinder's 5-step modelling process.",
    answer: `1. Find a genius 
      2. Unconsciously assimilate the patterning 
      3. Practice in a parallel context 
      4. Code 
      5. Test`,
    distractors: [
      "Identify outcome, set anchor, future pace, test, ecology check.",
      "Observe, challenge, reframe, anchor, test.",
      "Model, persuade, teach, test, repeat.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Introduction to Modeling",
        pages: "7-1-7-8",
      },
    ],
  },
  {
    id: "MP-ANLP-016",
    level: "Master Practitioner",
    category: "Modelling",
    topic: "The Modelling Process",
    type: "Comparison",
    question: "What is the difference between inside and outside modelling?",
    answer: `- Outside modelling observes behaviour externally. 
      - Inside modelling adopts the model\u2019s internal experience and strategy.`,
    distractors: [
      "Inside modelling observes externally only.",
      "Outside modelling adopts internal experience.",
      "There is no difference.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Introduction to Modeling",
        pages: "7-1-7-8",
      },
    ],
  },
  {
    id: "MP-ANLP-017",
    level: "Master Practitioner",
    category: "Modelling",
    topic: "The Modelling Process",
    type: "Concept",
    question: "What NLP Presupposition is modelling based on?",
    answer: "If someone can do something, so can I.",
    distractors: [
      "People are motivated by positive intention.",
      "Mind and body are separate.",
      "Every behaviour has equal value.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Introduction to Modeling",
        pages: "7-1-7-8",
      },
    ],
  },
  {
    id: "MP-ANLP-018",
    level: "Master Practitioner",
    category: "Modelling",
    topic: "The Modelling Process",
    type: "Concept",
    question: "What are the key components of inside modelling?",
    answer: `- Physiology
      - Beliefs
      - Values
      - Strategies
      - Language
      - Internal representations`,
    distractors: [
      "Only physiology and language.",
      "Only beliefs and values.",
      "Only observable behaviour.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Introduction to Modeling",
        pages: "7-1-7-8",
      },
    ],
  },
  {
    id: "MP-ANLP-019",
    level: "Master Practitioner",
    category: "Modelling",
    topic: "The Modelling Process",
    type: "Concept",
    question: "What are the key components of outside modelling?",
    answer: `- Observable behaviour
      - Language patterns
      - Physiology
      - Performance outcomes.`,
    distractors: [
      "Beliefs, values and identity.",
      "Submodalities and strategies only.",
      "Past experiences and emotions only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Introduction to Modeling",
        pages: "7-1-7-8",
      },
    ],
  },
  {
    id: "MP-ANLP-020",
    level: "Master Practitioner",
    category: "Modelling",
    topic: "The Modelling Process",
    type: "Concept",
    question: "How do you test the success of a modelling project?",
    answer: "Others can reproduce similar results using the extracted model.",
    distractors: [
      "The model likes the result.",
      "The process feels logical.",
      "The modeller understands the skill.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Introduction to Modeling",
        pages: "7-1-7-8",
      },
    ],
  },
  {
    id: "P-ANLP-016",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Beliefs",
    type: "Concept",
    question: "What are beliefs?",
    answer:
      "Beliefs are generalisations or best guesses about yourself, others or the world that are accepted as true.",
    distractors: [
      "Beliefs are objective facts.",
      "Beliefs are temporary emotions.",
      "Beliefs are observable behaviours.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Beliefs",
        pages: "14-1-14-19",
      },
    ],
  },

  {
    id: "P-ANLP-018",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Beliefs",
    type: "Concept",
    question: "How do beliefs differ from values?",
    answer: `Values are what is important to us.
      Beliefs are what is considered true without factual evidence.`,
    distractors: [
      "Beliefs are more important than values.",
      "Values are facts and beliefs are opinions.",
      "There is no difference.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Beliefs",
        pages: "14-1-14-19",
      },
    ],
  },
  {
    id: "P-ANLP-019",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Beliefs",
    type: "Concept",
    question: "How do you distinguish between a belief and a fact?",
    answer: `A fact can be externally verified. 
      A belief is a personal interpretation accepted as true.`,
    distractors: [
      "Facts are always agreed by everyone.",
      "Beliefs can always be scientifically proven.",
      "Facts and beliefs are identical.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Beliefs",
        pages: "14-1-14-19",
      },
    ],
  },

  {
    id: "P-ANLP-021",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Beliefs",
    type: "Concept",
    question: "What are core beliefs?",
    answer: `Core beliefs are deeply held beliefs that strongly influence identity and behaviour. 
      They usually exist across all contexts`,
    distractors: [
      "Temporary opinions about events.",
      "Values held in a specific context.",
      "Minor preferences with little impact.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Beliefs",
        pages: "14-1-14-19",
      },
    ],
  },
  {
    id: "P-PRO-001",
    level: "Practitioner",
    category: "Processes",
    topic: "Beliefs",
    type: "Process",
    question: "List 3 belief change processes you know of.",
    answer: `Examples include: 
      - Submodality Belief Change
      - Conversational Belief Change
      - Timeline Re-imprinting
      - Map Across
      - The Meta Model
      - Sleight of Mouth
      - Reframing`,
    distractors: [
      "Anchoring, Swish Pattern and Rapport.",
      "Meta Model, Milton Model and Chunking.",
      "Calibration, VAKOG and Matching.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Beliefs",
        pages: "14-1-14-19",
      },
    ],
  },
  {
    id: "P-PRO-002",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Understanding Submodalities",
    type: "Concept",
    question: "What are temporal submodalities?",
    answer: `Temporal submodalities relate to the perception of time: 
      - Past
      - Present
      - Future.`,
    distractors: [
      "Visual and auditory distinctions only.",
      "Submodalities relating only to space.",
      "Physiological responses to anchors.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Advanced Submodalities",
        pages: "12-1-12-3",
      },
    ],
  },
  {
    id: "P-PRO-003",
    level: "Practitioner",
    category: "Processes",
    topic: "Timeline",
    type: "Definition",
    question: "What is a timeline?",
    answer:
      "A timeline is the way a person stores and represents time internally.",
    distractors: [
      "A record of life events.",
      "A strategy for goal setting.",
      "A hierarchy of values.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Time Lines", pages: "16-1-16-7" },
    ],
  },
  {
    id: "P-PRO-004",
    level: "Practitioner",
    category: "Processes",
    topic: "Timeline",
    type: "Process",
    question: "List the steps in the Timeline Imprinting process.",
    answer: `1. Identify the issue
      2. Locate the root event on a timeline
      3. Identify missing resources, step off the timeline and access missing resources - anchor them
      4. Step into the timeline and imprint the new resources
      5. Test the change.`,
    distractors: [
      "Identify outcome, set goal, future pace and test.",
      "Discover values, install anchors and test.",
      "Identify strategy, collapse anchors and future pace.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Time Lines", pages: "16-38-16-39" },
    ],
  },
  {
    id: "MP-PRO-001",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Definition",
    question: "What is a phobia?",
    answer: `A phobia is an intense and disproportionate fear response to a specific stimulus.
      A phobia is known as a V/K Association in NLP`,
    distractors: [
      "A mild dislike of a situation.",
      "A rational concern based on evidence.",
      "A temporary emotional state with no trigger.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Other Advanced NLP Patterns",
        pages: "12-1-12-13",
      },
    ],
  },
  {
    id: "MP-PRO-002",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Process",
    question: "List the steps in the V/K dissociation (fast phobia cure).",
    answer: `1. Dissociate (often watching the event as a film in a cinema example is used)
      2. Observe the event from the audience perspective - a 2nd position
      3. Run the movie experience backwards in a 1st position in colour changing submodalities, then forward in b/w
      4. Test the response.`,
    distractors: [
      "Associate, relive event, intensify and anchor.",
      "Visualise success, future pace and test.",
      "Identify timeline, re-imprint and test.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Other Advanced NLP Patterns",
        pages: "9-8-9-8",
      },
    ],
  },
  {
    id: "MP-PRO-003",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Concept",
    question: "How do you facilitate double-dissociation in the phobia cure?",
    answer:
      "The client watches themselves watching the event, creating two levels of dissociation.",
    distractors: [
      "The client relives the event fully associated.",
      "The client imagines a positive future outcome.",
      "The client analyses the event verbally only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Other Advanced NLP Patterns",
        pages: "12-1-12-13",
      },
    ],
  },
  {
    id: "P-PRO-005",
    level: "Practitioner",
    category: "Processes",
    topic: "Timeline",
    type: "Definition",
    question: "What is Timeline Re-imprinting?",
    answer:
      "A process that revisits and transforms the meaning of significant past experiences using a timeline.",
    distractors: [
      "A technique for installing future behaviours.",
      "A method for collapsing anchors.",
      "A process for changing submodalities only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Time Lines", pages: "16-38-16-38" },
    ],
  },
  {
    id: "MP-PRO-004",
    level: "Master Practitioner",
    category: "Core Skills",
    topic: "Perceptual Positions",
    type: "Process",
    question: "List the steps of the Meta Mirror.",
    answer: `1. Identify positions
      2. Explore perspectives
      3. Gather learning
      4. Integrate insights.`,
    distractors: [
      "Anchor resources, future pace and test.",
      "Dream, plan, criticise and implement.",
      "Identify parts, negotiate and integrate.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Other Advanced NLP Patterns",
        pages: "12-1-12-13",
      },
    ],
  },
  {
    id: "MP-PRO-005",
    level: "Master Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Concept",
    question: "What are the two main ways to do the compulsion blowout?",
    answer: `1. Visual submodality changes (size)
      2. A rapid pattern interruption process (speed).`,
    distractors: [
      "Anchoring or timeline therapy.",
      "Parts integration or reframing.",
      "Meta model questioning or modelling.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Other Advanced NLP Patterns",
        pages: "12-2-12-2",
      },
    ],
  },
  {
    id: "MP-PRO-006",
    level: "Master Practitioner",
    category: "Processes",
    topic: "Disney Pattern/Model",
    type: "Concept",
    question: "How do you carry out the Disney Pattern?",
    answer:
      "Brainstorm in Dreamer -> then assess logistics in Realist -> then pass/fail the critic test in Critic.",
    distractors: [
      "Start with Critic, then Dreamer, then Realist.",
      "Alternate randomly between the three positions.",
      "Begin with Realist and finish with Dreamer.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Strategies", pages: "9-7-9-7" },
    ],
  },
  {
    id: "P-FND-001",
    level: "Practitioner",
    category: "Foundations",
    topic: "Conscious and Unconscious Mind",
    type: "Concept",
    question: "What are the 4-stages of learning?",
    answer: `1. Unconscious Incompetence 
      2. Conscious Incompetence 
      3. Conscious Competence 
      4. Unconscious Competence.`,
    distractors: [
      "Know-do-teach-master.",
      "Awareness, understanding, application, expertise.",
      "Learning, practice, competence, mastery.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Conscious and Unconscious Mind",
        pages: "2-13-2-13",
      },
    ],
  },
  {
    id: "P-GEN-001",
    level: "Practitioner",
    category: "Foundations",
    topic: "Conscious and Unconscious Mind",
    type: "Definition",
    question: "What are 3 characteristics of the conscious mind?",
    answer: `1. Logical 
      2. Has language 
      3. Analytical`,
    distractors: [
      "Emotional, symbolic, instinctive.",
      "Creative, intuitive, holistic.",
      "Automatic, unconscious, habitual.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Introduction to NLP",
        pages: "2-16-2-16",
      },
    ],
  },
  {
    id: "P-FND-002",
    level: "Practitioner",
    category: "Foundations",
    topic: "NLP Presuppositions",
    type: "Recall",
    question: "List 3 of the Presuppositions of NLP ",
    answer: `1. Map is not the territory 
      2. Respect for other people's maps 
      3. Behaviour and change is to be evaluated in terms of context and ecology
      4. No failure, only feedback 
      5. The mind and body is a linked system 
      6. There are no resistant clients, only inflexible communicators. Resistance is a sign of a lack of rapport 
      7. People have all the resources they need. There are no unresourceful people, only unresourceful states 
      8. Change can be quick, easy and long lasting 
      9. Be flexible - The person with the greatest flexibility of will, will control the system
      10. More choice is better than less
      11. People are geared for change
      12. The meaning of communication is the response it elicits
      13. Every behaviour has a positive intention
      14. We are not our behaviours`,
    distractors: [
      "You can't change a value, Ideas are not real, we respond to objetive experience",
      "People are their behaviour, the map is the territory, the mind and the body are linked.",
      "Every behaviour is the best choice available.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Presuppositions of NLP",
        pages: "2-17-2-19",
      },
    ],
  },
  {
    id: "P-FND-003",
    level: "Practitioner",
    category: "Foundations",
    topic: "NLP Presuppositions",
    type: "Definition",
    question: "What is the law of requisite variety?",
    answer:
      "The person with the greatest flexibility of will, will control the system.",
    distractors: [
      "The loudest person has most influence.",
      "The most knowledgeable person leads.",
      "The highest-ranking person controls the system.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Presuppositions of NLP",
        pages: "2-17-2-19",
      },
    ],
  },
  {
    id: "P-CS-001",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Rapport",
    type: "Definition",
    question: "What is rapport?",
    answer:
      "Rapport is Unconscious Responsiveness (John Grinder). Positive rapport creates a relationship of trust, understanding and responsiveness.",
    distractors: [
      "A formal professional relationship.",
      "Agreement on all issues.",
      "A process of persuasion and influence.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Rapport", pages: "4-1-4-4" },
    ],
  },
  {
    id: "P-CS-002",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Rapport",
    type: "Recall",
    question: "List five things to match when building rapport.",
    answer: `Examples include: 
      - Posture
      - Gestures
      - Breathing
      - Voice tone and speaking pace.`,
    distractors: [
      "Values, beliefs, identity, mission, purpose.",
      "Clothing, age, education, experience, status.",
      "Goals, outcomes, decisions, habits, values.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Rapport", pages: "4-1-4-4" },
    ],
  },
  {
    id: "P-CS-003",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Rapport",
    type: "Definition",
    question: "What is cross-over mirroring? When is it useful?",
    answer: `Matching one behaviour with a different behaviour.
      It is useful when direct matching would be inappropriate or too obvious.`,
    distractors: [
      "Matching exactly like-for-like.",
      "Avoiding all matching behaviours.",
      "Challenging another person's physiology.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Rapport", pages: "4-1-4-4" },
    ],
  },
  {
    id: "P-CS-004",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Eye Accessing Cues",
    type: "Concept",
    question:
      "Eye Accessing Model: What are you accessing when your eyes move top right, bottom left bottom right?",
    answer: "Vc, Adi, K",
    distractors: ["VC, AR, K.", "VR, AC, AD.", "K, VC, VR."],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Eye Patterns & Accessing Cues",
        pages: "6-16-6-21",
      },
    ],
  },
  {
    id: "P-CS-005",
    level: "Practitioner",
    category: "Foundations",
    topic: "Representational Systems",
    type: "Definition",
    question:
      "What is meant by the Primary Representational System and how do you detect it?",
    answer: `The Primary Representational System is the system a person most naturally uses. 
      It is detected through predicates (words), physiology and behaviour.`,
    distractors: [
      "The system a person dislikes most.",
      "The system used only under stress.",
      "The system used for decision-making only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Representational Systems",
        pages: "6-9-6-9",
      },
    ],
  },
  {
    id: "P-CS-006",
    level: "Practitioner",
    category: "Foundations",
    topic: "Representational Systems",
    type: "Definition",
    question:
      "What is meant by Lead Representational System and how do you detect it?",
    answer: `The Lead representational System is used to first access information.
      It is detected through eye movement patterns.`,
    distractors: [
      "The preferred communication style.",
      "The system used to store memories.",
      "The strongest emotional modality.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Representational Systems",
        pages: "6-16-6-16",
      },
    ],
  },
  {
    id: "P-CS-007",
    level: "Practitioner",
    category: "Foundations",
    topic: "Representational Systems",
    type: "Concept",
    question: "How do you identify representational systems from predicates?",
    answer:
      "Match sensory words to either Visual, Auditory, Kinesthetic, Olfactory or Gustatory systems. E.g 'see' is a visual predicate. 'Hear' is an auditory predicate, and so on.",
    distractors: [
      "Match words to personality types.",
      "Match words to meta programmes.",
      "Match words to logical levels.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Representational Systems",
        pages: "6-9-6-14",
      },
    ],
  },
  {
    id: "P-CS-008",
    level: "Practitioner",
    category: "Foundations",
    topic: "Representational Systems",
    type: "Concept",
    question:
      "How do you translate sentences into a different Representational System?",
    answer:
      "Rephrase language using predicates from a different sensory system.",
    distractors: [
      "Translate words into another language.",
      "Change beliefs into behaviours.",
      "Convert goals into outcomes.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Representational Systems",
        pages: "6-13-6-14",
      },
    ],
  },
  {
    id: "P-CS-009",
    level: "Practitioner",
    category: "Foundations",
    topic: "Representational Systems",
    type: "Definition",
    question: "What an overlapping representational systems known as in NLP?",
    answer:
      "An overlapping representational system in NLP is known as a synesthesia",
    distractors: ["Catilepsy", "A conversational postulate", "A predicate"],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Representational Systems",
        pages: "6-23-6-23",
      },
    ],
  },
  {
    id: "P-CS-010",
    level: "Practitioner",
    category: "Foundations",
    topic: "Representational Systems",
    type: "Concept",
    question: `Which of these is sensort based, which is an hallucination: 
      A) His face turned red 
      B) She was angry`,
    answer: `A) Sensory based 
    B) Hallucination`,
    distractors: [
      "A) Hallucination B) Sensory based",
      "Both sensory based",
      "Both hallucinations",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Representational Systems",
        pages: "3-3",
      },
    ],
  },
  {
    id: "P-LNG-001",
    level: "Practitioner",
    category: "Language",
    topic: "Milton Model",
    type: "Definition",
    question: "How would you use Milton Model language patterns in coaching?",
    answer:
      "You would use artfully vague language to encourage unconscious searching and meaning-making.",
    distractors: [
      "Use precise questioning to recover information.",
      "Challenge deletions and distortions.",
      "Use direct commands and instructions.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Milton Model Patterns",
        pages: "3-10-3-28",
      },
    ],
  },
  {
    id: "P-CS-011",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Calibration & Sensory Acuity",
    type: "Recall",
    question:
      "List five things you can calibration in another person using yopur sensory acuity.",
    answer: `1. Physiology - posture, gestures etc.
      2. Breathing
      3. Skin colour flushes
      4. Voice qualities - pitch, tone, tempo, rhythm, pace.`,
    distractors: [
      "Values, beliefs, identity, mission, purpose.",
      "Goals, strategies, outcomes, decisions, habits.",
      "Predicates, values, beliefs, strategies, outcomes.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Sensory Acuity", pages: "3-2-3-2" },
    ],
  },
  {
    id: "P-CS-012",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Calibration & Sensory Acuity",
    type: "Comparison",
    question: "What is the difference between voice tone, tempo and timbre?",
    answer:
      "Tone is pitch variation, tempo is speed and timbre is voice quality.",
    distractors: [
      "Tone is speed, tempo is quality, timbre is pitch.",
      "Tone is volume, tempo is pitch, timbre is speed.",
      "They all describe the same thing.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Sensory Acuity", pages: "3-1-3-3" },
    ],
  },
  {
    id: "P-CS-013",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Well-Formed Outcomes",
    type: "Process",
    question: "What are well-formed outcomes?",
    answer:
      "A framework for creating well-formed outcomes (goals) that are specific, ecological and actionable.",
    distractors: [
      "A model for persuasive presentations.",
      "A framework for rapport building.",
      "A process for anchoring states.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Outcomes & Ecology",
        pages: "2-10-2-11",
      },
    ],
  },
  {
    id: "P-LNG-002",
    level: "Practitioner",
    category: "Language",
    topic: "Meta Model",
    type: "Definition",
    question: "What is the Meta Model and how is it useful?",
    answer:
      "The Meta Model is a questioning model used to recover deleted, distorted and generalised information.",
    distractors: [
      "A model for vague hypnotic language.",
      "A framework for values elicitation.",
      "A strategy elicitation model.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "The Meta Model",
        pages: "3-17-3-17",
      },
    ],
  },
  {
    id: "P-LNG-003",
    level: "Practitioner",
    category: "Language",
    topic: "Meta Model",
    type: "Process",
    question:
      "What are the three processes of internaled filtering on which the Meta Model is based?",
    answer: "Deletion, distortion and generalisation.",
    distractors: [
      "Insertion, deletion and substitution.",
      "Association, dissociation and anchoring.",
      "Cause, effect and equivalence.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "The Meta Model",
        pages: "3-17-3-17",
      },
    ],
  },
  {
    id: "P-LNG-004",
    level: "Practitioner",
    category: "Language",
    topic: "Meta Model",
    type: "Concept",
    question: "How would you identify Meta Model violations?",
    answer: "You would recognise language patterns.",
    distractors: [
      "Ignore language patterns and focus on behaviour.",
      "Interpret language symbolically.",
      "Use Milton Model responses only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "The Meta Model",
        pages: "3-17-3-17",
      },
    ],
  },
  {
    id: "P-FND-004",
    level: "Practitioner",
    category: "Foundations",
    topic: "Mindset",
    type: "Definition",
    question: "What presupposition reflects Psycho-physicality?",
    answer: "The mind and the body is a linked system.",
    distractors: [
      "People make the best choice available.",
      "There is no failure only feedback.",
      "Every behaviour has a positive intention.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "NLP Presuppositions",
        pages: "2-12-2-13",
      },
    ],
  },
  {
    id: "P-FND-005",
    level: "Practitioner",
    category: "Foundations",
    topic: "Mindset",
    type: "Definition",
    question: "What is state and why is it important?",
    answer:
      "A state is the emotional and physiological condition a person is in, in any given moment, which influences behaviour and results.",
    distractors: [
      "A fixed personality trait.",
      "A long-term value structure.",
      "An unconscious strategy only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Principles for Success",
        pages: "2-12-2-12",
      },
    ],
  },
  {
    id: "P-FND-006",
    level: "Practitioner",
    category: "Foundations",
    topic: "Conscious and Unconscious Mind",
    type: "Definition",
    question: "What is a Pattern Interrupt and when is it useful?",
    answer: `A technique that breaks a pattern and creates an opportunity for change. 
      Stage hypnotists favour this technique to open a person's unconscious mind`,
    distractors: [
      "A technique for deep relaxation.",
      "A method for building rapport.",
      "A process for eliciting values.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Conscious and Unconscious Mind",
        pages: "2-15-2-15",
      },
    ],
  },
  {
    id: "P-CS-014",
    level: "Practitioner",
    category: "Foundations",
    topic: "Framing",
    type: "Process",
    question:
      "What do frames such as these accomplish: Evidence, Backtrack, Relevancy, Contrast, Ecology and As If frames?",
    answer:
      "These frames direct attention and change meaning by altering perspective and context. Framing is extremely powerful for influence",
    distractors: [
      "They are rapport-building techniques.",
      "They are anchoring strategies.",
      "They are submodality interventions.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Sleight of Mouth Patterns",
        pages: "8-1-8-24",
      },
    ],
  },
  {
    id: "P-PRO-006",
    level: "Practitioner",
    category: "Processes",
    topic: "Anchoring",
    type: "Definition",
    question: "What is an anchor?",
    answer:
      "An anchor is a stimulus that consistently triggers a specific state or response.",
    distractors: [
      "A belief linked to a behaviour.",
      "A strategy sequence.",
      "A representational system.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-1-8-1" },
    ],
  },
  {
    id: "P-PRO-007",
    level: "Practitioner",
    category: "Processes",
    topic: "Anchoring",
    type: "Concept",
    question: "What are the five keys to anchoring?",
    answer: `1. Intensity
    2. Timing, 
    3. Uniqueness
    4. Replicability
    5. Number of Times`,
    distractors: [
      "Match, mirror, pace, lead and test.",
      "Outcome, evidence, ecology, action and review.",
      "Association, dissociation, anchor, test and future pace.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-4-8-4" },
    ],
  },
  {
    id: "P-PRO-008",
    level: "Practitioner",
    category: "Processes",
    topic: "Anchoring",
    type: "Process",
    question: "Describe how to anchor someone.",
    answer: `1. Elicit desired state (study guides chunks this step into 3 steps)
    2. Apply anchor 
    3. Break state 
    4. Test`,
    distractors: [
      "Ask them to change state",
      "1. Apply an anchor 2. Break state 3. Elicit a state 4. Test",
      "Get the client to breathe ad reset",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-5-8-5" },
    ],
  },
  {
    id: "P-PRO-009",
    level: "Practitioner",
    category: "Processes",
    topic: "Anchoring",
    type: "Process",
    question: "Describe the process of collapse anchors and when it is useful.",
    answer: `Collapse Anchors involves firing a resourceful anchor and an unresourceful anchor simultaneously until the unwanted state is neutralised. 
      It is useful when a client experiences conflicting emotional responses.`,
    distractors: [
      "Firing two resource anchors together.",
      "Removing all anchors permanently.",
      "Linking a sequence of positive states.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-5-8-5" },
    ],
  },
  {
    id: "P-PRO-010",
    level: "Practitioner",
    category: "Processes",
    topic: "Anchoring",
    type: "Definition",
    question: "What is Chaining Anchors and when do you do it?",
    answer: `Chaining Anchors links a sequence of states so that one state naturally leads to another. 
      It is used when a direct jump to the desired state would be too large a jump to make.`,
    distractors: [
      "Installing a single powerful anchor.",
      "Collapsing two opposing anchors.",
      "Creating rapport through matching.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-15-8-17" },
    ],
  },
  {
    id: "P-PRO-011",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Understanding Submodalities",
    type: "Comparison",
    question:
      "What is the difference between association and dissociation and when is each useful?",
    answer: `Association means experiencing an event through your own eyes. 
      Dissociation means viewing an event from the outside (seeing yourself in the image). 
      Association accesses feelings.
      Dissociation reduces emotional intensity.`,
    distractors: [
      "Both mean viewing from outside yourself.",
      "Association is observing; dissociation is reliving.",
      "They are interchangeable terms.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Advanced Submodalities",
        pages: "7-1-7-20",
      },
    ],
  },
  {
    id: "P-PRO-012",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Understanding Submodalities",
    type: "Concept",
    question:
      "If you see your body in the picture, are you associated or dissociated?",
    answer: "Dissociated.",
    distractors: ["Associated.", "Neither.", "Both simultaneously."],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Advanced Submodalities",
        pages: "7-1-7-20",
      },
    ],
  },
  {
    id: "P-FND-007",
    level: "Practitioner",
    category: "Foundations",
    topic: "Framing",
    type: "Concept",
    question: "What are the 5 Principles of Success?",
    answer: `1. Know your outcome 
      2. Have great sensory acuity 
      3. Be flexibile 
      4. Operate from a psycho-physicality of excellence 
      5. Take action.`,
    distractors: [
      "Know your outcome, use logic, persuade, teach, lead, review.",
      "Set goals, analyse, decide, act, review, repeat.",
      "Believe, decide, act, persist, review, celebrate.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Principles for Success",
        pages: "2-13-2-13",
      },
    ],
  },
  {
    id: "P-PRO-013",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Understanding Submodalities",
    type: "Definition",
    question: "Define submodalities",
    answer: "Submodalies are the building blocks of our experience",
    distractors: [
      "A strong positive attraction.",
      "A learned skill deficit.",
      "A temporary mood state.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Advanced Submodalities",
        pages: "9-8-9-8",
      },
    ],
  },
  {
    id: "P-PRO-014",
    level: "Practitioner",
    category: "Processes",
    topic: "Strategies",
    type: "Definition",
    question: "What is a strategy?",
    answer:
      "A strategy is a specific sequence of internal and external representations/experienes that consistently achieve the same outcome.",
    distractors: [
      "A value hierarchy.",
      "A belief structure.",
      "An emotional state.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Strategies",
        pages: "10-1-10-25",
      },
    ],
  },
  {
    id: "P-PRO-015",
    level: "Practitioner",
    category: "Processes",
    topic: "Strategies",
    type: "Concept",
    question: "What are the steps in eliciting a strategy?",
    answer: `1. Establish context 
      2. Ask 'what's the first thing that happened'? 
      3. Ask 'what happened next'? 
      4. Elicit exact key steps until strategy ends.`,
    distractors: [
      "1. Ask what went wrong 2. Backtrack to beginning 3. Guide forward 4. Future ace",
      "1. Ask what client would want instead 2. Anchor new state 3. Install  new state at the beginning oif strategy",
      "1. Test 2. Operate 3. Test 4. Exit",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Strategies",
        pages: "10-1-10-25",
      },
    ],
  },
  {
    id: "P-PRO-016",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Understanding Submodalities",
    type: "Recall",
    question: "Identify six Visual submodalities.",
    answer: `1. Bright 
    2. Hazy
    3. Distant
    4. Panoramic
    5. Red
    6. Square`,
    distractors: [
      "Bright, loud, heavy, dim, sharp, colourful",
      "Soft, shrill, dark, heavy, green, centre",
      "Cold, grey, damp, hazy, round, small",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Advanced Submodalities",
        pages: "7-1-7-1",
      },
    ],
  },
  {
    id: "P-PRO-017",
    level: "Practitioner",
    category: "Processes",
    topic: "Framing",
    type: "Definition",
    question: "What is a reframe and when is it useful?",
    answer: `A reframe changes the meaning or context of an experience.
      It creates a new interpretation.`,
    distractors: [
      "A technique for anchoring states.",
      "A process for eliciting strategies.",
      "A method for calibration.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Sleight of Mouth Patterns",
        pages: "8-1-8-24",
      },
    ],
  },
  {
    id: "P-PRO-018",
    level: "Practitioner",
    category: "Processes",
    topic: "Framing",
    type: "Comparison",
    question: "What is the difference between a Context and a Content reframe?",
    answer: `A Content Reframe changes the meaning of an experience. 
      A Context Reframe changes the situation in which a behaviour is useful.`,
    distractors: [
      "Context changes meaning; content changes situation.",
      "Both change meaning only.",
      "Both change context only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Sleight of Mouth Patterns",
        pages: "8-1-8-24",
      },
    ],
  },
  {
    id: "P-PRO-019",
    level: "Practitioner",
    category: "Processes",
    topic: "Framing",
    type: "Definition",
    question: "What is the Agreement Frame and when would you use it?",
    answer: `The Agreement Frame acknowledges and agrees with what is true in another person's communication before adding or redirecting information.
      It is used to reduce resistance and maintain rapport.`,
    distractors: [
      "Disagree first, then persuade.",
      "Ignore objections and redirect.",
      "Challenge the person's beliefs directly.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Sleight of Mouth Patterns",
        pages: "8-1-8-24",
      },
    ],
  },
  {
    id: "T-APP-001",
    level: "Trainer",
    category: "Processes",
    topic: "Presentations",
    type: "Definition",
    question:
      "What are the 3 additional learning styles the 4-Mat system works with, other than Pragmatist?",
    answer: "Theorist, Activist, and Reflector.",
    distractors: [
      "Dreamer, Realist and Critic.",
      "Visual, Auditory and Kinesthetic.",
      "Why, What and How.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Presentations",
        pages: "9-1-9-8",
      },
    ],
  },
  {
    id: "T-APP-002",
    level: "Trainer",
    category: "Processes",
    topic: "Presentations",
    type: "Concept",
    question: "What are the 4 key elements of the 4-Mat System?",
    answer: "Why, What, How, What if",
    distractors: [
      "Who, What, When, Where.",
      "Outcome, Evidence, Ecology, Action.",
      "Dreamer, Realist, Critic, Implementer.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Presentations",
        pages: "9-1-9-8",
      },
    ],
  },
  {
    id: "T-APP-003",
    level: "Trainer",
    category: "Processes",
    topic: "Presentations",
    type: "Concept",
    question: "What is the purpose of the Why section of the 4-Mat System",
    answer:
      "To resonate with the audience and give them a reason to want to learn the topic presented.",
    distractors: [
      "To explain assessment criteria.",
      "To provide technical detail only.",
      "To summarise the exercise instructions.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Presentations",
        pages: "9-1-9-8",
      },
    ],
  },
  {
    id: "T-APP-004",
    level: "Trainer",
    category: "Processes",
    topic: "Presentations",
    type: "Concept",
    question: "What shoud the What contain in the 4-Mat System?",
    answer: "Background, history, science, concepts, process",
    distractors: [
      "Only practical exercises and demonstrations.",
      "Questions, objections and troubleshooting.",
      "Stories, metaphors and personal experiences only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Presentations",
        pages: "9-1-9-8",
      },
    ],
  },
  {
    id: "T-APP-005",
    level: "Trainer",
    category: "Processes",
    topic: "Presentations",
    type: "Process",
    question: "What is the 'What if' for in the 4-Mat System?",
    answer: "To answer questions and generalise out the learning.",
    distractors: [
      "To deliver practical exercises.",
      "To establish rapport with the audience.",
      "To explain the trainer's credentials.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Presentations",
        pages: "9-1-9-8",
      },
    ],
  },
  {
    id: "T-APP-006",
    level: "Trainer",
    category: "Processes",
    topic: "Presentations",
    type: "Process",
    question: "What is the 'How' for in the 4-Mat System?",
    answer: "To demonstrate the topic and give people a chance to practice.",
    distractors: [
      "To provide theory and background information.",
      "To create emotional engagement only.",
      "To answer objections and concerns.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Presentations",
        pages: "9-1-9-8",
      },
    ],
  },
  {
    id: "P-LNG-005",
    level: "Practitioner",
    category: "Language",
    topic: "Milton Model",
    type: "Design",
    question:
      "Why would you prepare coaching phrases for Milton Model patterns.",
    answer:
      "To use artfully vague language to encourage unconscious searching and meaning-making.",
    distractors: [
      "Use direct commands and explicit instructions.",
      "Challenge beliefs through confrontation.",
      "Focus exclusively on conscious analysis.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Milton Model Patterns",
        pages: "3-10-3-28",
      },
    ],
  },
  {
    id: "P-FND-008",
    level: "Practitioner",
    category: "Foundations",
    topic: "NLP History",
    type: "Definition",
    question: "What is Neuro Linguistic Programming?",
    answer: `1. Neuro - How we use neural processes to access experience
      2. Linguistic - How we assign language to experience to create meaning
      3. Programming - Our patterns of behaviour, based on the meaning we have given our experience`,
    distractors: [
      "A method for controlling other people.",
      "A communication theory based only on language.",
      "A psychotherapy model focused solely on trauma.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What is NLP?",
        pages: "2-2-2-2",
      },
    ],
  },
  {
    id: "P-PRO-020",
    level: "Practitioner",
    category: "Processes",
    topic: "Parts Integration",
    type: "Process",
    question: "What does the Parts Integration Process do?",
    answer:
      "Parts Integration identifies conflicting parts, uncovers the positive intention of each part and integrates them so they work together congruently.",
    distractors: [
      "Eliminates one part in favour of the other.",
      "Teaches the parts new behaviours without integration.",
      "Separates conflicting parts permanently.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Parts Integration Process",
        pages: "4-27-4-30",
      },
    ],
  },
  {
    id: "P-PRO-021",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Definition",
    question: "What is a Swish Pattern and when would you use it?",
    answer:
      "A Swish Pattern is a submodality technique used to replace an unwanted triggered response or habit with a more resourceful behaviour.",
    distractors: [
      "A rapport-building technique used to match physiology.",
      "An anchoring process for installing resources.",
      "A timeline technique for changing past memories.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Advanced Submodalities",
        pages: "7-18-7-18",
      },
    ],
  },
  {
    id: "P-PRO-022",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Process",
    question: "Describe how you would do a Swish Pattern.",
    answer: `1. Identify the trigger image
      2. Create a compelling desired self-image
      3. Rapidly swish between them repeatedly
      4. Future pace the change.`,
    distractors: [
      "Elicit values then collapse anchors.",
      "Identify parts and negotiate intentions.",
      "Anchor a resource state and future pace it.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Advanced Submodalities",
        pages: "7-18-7-18",
      },
    ],
  },
  {
    id: "P-FND-009",
    level: "Practitioner",
    category: "Foundations",
    topic: "Ecology",
    type: "Definition",
    question: "What is ecology?",
    answer:
      "Ecology is the study of consequences in NLP, and checks whether a change is appropriate for the person and their wider system.",
    distractors: [
      "Ecology means achieving rapport with everyone.",
      "Ecology is the client's level of motivation.",
      "Ecology refers only to environmental factors.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Outcomes & Ecology",
        pages: "2-11-2-11",
      },
    ],
  },

  {
    id: "MP-LNG-006",
    level: "Master Practitioner",
    category: "Language",
    topic: "Sleight of Mouth",
    type: "Recall",
    question: "List 5 Sleight of Mouth Patterns.",
    answer:
      "Chunk up/down, counter-example, intention, reality, redefine, consequence, apply to self, another utcome etc.",
    distractors: [
      "Modelling, belief change, rapport, calibration, framing",
      "Backtrack, agreement, progress, results, challenge",
      "Time, awareness, ordinal, modal operator, existence",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Sleight of Mouth Patterns",
        pages: "8-1-8-24",
      },
    ],
  },

  {
    id: "P-ANLP-023",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Definition",
    question: "What is a Values Hierarchy or Criteria Ladder?",
    answer:
      "A values hierarchy is the order of importance a person assigns to their values within a specific context.",
    distractors: [
      "A sequence of beliefs ranked by importance.",
      "A hierarchy of logical levels.",
      "A list of goals in priority order.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-ANLP-024",
    level: "Practitioner",
    category: "Values & Beliefs",
    topic: "Values",
    type: "Concept",
    question: "How do you change a value?",
    answer:
      "Change the submodalities, criteria equivalents, importance or emotional associations connected to the value.",
    distractors: [
      "Challenge beliefs directly until they change.",
      "Replace it with an opposite value.",
      "Ignore the value and change behaviour.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Overview of Values",
        pages: "5-1-5-27",
      },
    ],
  },
  {
    id: "P-PRO-023",
    level: "Practitioner",
    category: "Processes",
    topic: "Anchoring",
    type: "Process",
    question: "Describe how to set up and install a chain of anchors.",
    answer:
      "Anchor a sequence of progressively resourceful states and fire them in order so one state naturally leads to the next.",
    distractors: [
      "Install a single powerful anchor only.",
      "Collapse positive and negative anchors immediately.",
      "Use future pacing before anchoring.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-15-8-18" },
    ],
  },
  {
    id: "P-PRO-024",
    level: "Practitioner",
    category: "Processes",
    topic: "Anchoring",
    type: "Concept",
    question:
      "What is most important to consider in designing a chain of anchors?",
    answer:
      "Clear states, correct sequence, strong anchors, clean state separation and effective testing.",
    distractors: [
      "Volume, posture and eye contact only.",
      "Anchor intensity without testing.",
      "Avoid state transitions between anchors.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-15-8-18" },
    ],
  },

  {
    id: "P-PRO-026",
    level: "Practitioner",
    category: "Processes",
    topic: "Strategies",
    type: "Concept",
    question: "What does TOTE stand for in strategies?",
    answer: "Tes, Operate, Test, Exit",
    distractors: [
      "Test, Outcome, Technique, Energy",
      "Try to Optimise your Technique Everytime",
      "Time, Opportunity, Technique, Effort",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Strategies",
        pages: "10-1-10-25",
      },
    ],
  },
  {
    id: "P-PRO-027",
    level: "Practitioner",
    category: "Processes",
    topic: "Strategies",
    type: "Concept",
    question: "What must you always do when eliciting a client's strategy?",
    answer: "Work with the client's map",
    distractors: [
      "Teach the strategy verbally only.",
      "Anchor the strategy immediately.",
      "Future pace before elicitation.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Strategies",
        pages: "10-1-10-25",
      },
    ],
  },
  {
    id: "P-PRO-028",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Understanding Submodalities",
    type: "Definition",
    question: "What is a Submodality?",
    answer:
      "Submodalities are the finer distinctions within each representational system. They are the building blocks of our experience",
    distractors: [
      "A complete representational system.",
      "A sequence of internal representations.",
      "A logical level.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Advanced Submodalities",
        pages: "12-1-12-3",
      },
    ],
  },
  {
    id: "P-PRO-029",
    level: "Practitioner",
    category: "Processes",
    topic: "Strategies",
    type: "Definition",
    question: "What is the relationship of strategies to submodalities?",
    answer: "Strategies are built with VAKOG modalities and submodalities",
    distractors: [
      "Strategies replace submodalities.",
      "Submodalities and strategies are unrelated.",
      "Strategies are made of beliefs and values only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Strategies",
        pages: "10-1-10-25",
      },
    ],
  },
  {
    id: "P-PRO-030",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Concept",
    question: "What are mapping across and contrastive analysis?",
    answer: `Mapping Across transfers submodalities from one experience to another. 
      Contrastive Analysis compares two experiences to identify critical submodality differences.`,
    distractors: [
      "Anchoring techniques for resource states.",
      "Methods of chunking information.",
      "Timeline interventions.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Advanced Submodalities",
        pages: "12-1-12-3",
      },
    ],
  },

  {
    id: "T-APP-007",
    level: "Trainer",
    category: "Processes",
    topic: "Presentations",
    type: "Process",
    question:
      "List 4 things you can do as a warm up routine just before you start presenting.",
    answer:
      "Anchor an optimum state. Deep breaths. Move your body. Vocal exercise.",
    distractors: [
      "Use the bathroom, check your appearance, count the audience, check the manual",
      "Rest, go over your content, ask yourself what coould go wrong, check your teeth",
      "Derink water, check the time, look in the mirror, remind yourself not to think negatively",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Presentations",
        pages: "9-3-9-3",
      },
    ],
  },

  {
    id: "P-CS-015",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Calibration & Sensory Acuity",
    type: "Definition",
    question: "What is secondary gain?",
    answer:
      "Secondary gain is the unconscious benefit a person receives from maintaining a problem, behaviour or limitation.",
    distractors: [
      "A secondary objective unrelated to behaviour.",
      "A conscious excuse for not changing.",
      "A preferred representational system.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Sensory Acuity", pages: "19-9-19-9" },
    ],
  },
  {
    id: "P-GEN-002",
    level: "Practitioner",
    category: "Language",
    topic: "Chunking",
    type: "Concept",
    question: "What language pattern does chunking up use?",
    answer: "The Milton Model",
    distractors: ["The Meta Model", "Presuppositions", "Ordinal"],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Chunk Size Filter",
        pages: "6-22-6-22",
      },
    ],
  },
  {
    id: "P-LNG-006",
    level: "Practitioner",
    category: "Language",
    topic: "Meta Model",
    type: "Definition",
    question: "What is a nominalisation in the Meta Model?",
    answer:
      "A verb that has been turned into a noun, e.g. We don't know how to communicate -> Our communication is poor.",
    distractors: [
      "A specific sensory-based description.",
      "A representational system.",
      "A behavioural strategy.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "The Meta Model",
        pages: "3-17-3-17",
      },
    ],
  },
  {
    id: "P-LNG-007",
    level: "Practitioner",
    category: "Language",
    topic: "Meta Model",
    type: "Design",
    question:
      "The Meta Model helps us understand the filter process in what core NLP Model?",
    answer: "The Communication Model",
    distractors: [
      "The Milton Model",
      "The NLP Model of Change",
      "The S.C.O.R.E. Model",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "The Meta Model",
        pages: "3-17-3-17",
      },
    ],
  },
  {
    id: "P-LNG-008",
    level: "Practitioner",
    category: "Language",
    topic: "Meta Model",
    type: "Application",
    question: "How would you Meta Model challenge 'I can't do that'?",
    answer: "Ask, 'what would happen if you could'? 'What prevents you'?",
    distractors: [
      "Ask, 'Why not'?",
      "Ask, 'Do you know someone who can'?",
      "Ask, 'Do what'?",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "The Meta Model",
        pages: "3-17-3-17",
      },
    ],
  },
  {
    id: "P-GEN-003",
    level: "Practitioner",
    category: "Language",
    topic: "Listening Skills",
    type: "Concept",
    question: "Why is listening to a client's language so important?",
    answer:
      "A client's language reveals their beliefs, values, strategies, filters and model of the world.",
    distractors: [
      "It's not. That's a distraction. Words reveal nothing about internal processing.",
      "Language is less useful than physiology.",
      "Story matters, not language patterns.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Listening Style",
        pages: "6-39-6-39",
      },
    ],
  },
  {
    id: "MP-LNG-007",
    level: "Master Practitioner",
    category: "Language",
    topic: "Sleight of Mouth",
    type: "Recall",
    question: "What is an NBS in Sleight of Mouth?",
    answer: "Normalised Belief Structure",
    distractors: ["On day 2", "New Belief Surface", "Negative Blocking Story"],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Sleight of Mouth Patterns",
        pages: "8-1-8-24",
      },
    ],
  },
  {
    id: "P-PRO-032",
    level: "Practitioner",
    category: "Processes",
    topic: "Timeline",
    type: "Concept",
    question:
      "At what stage of an online NLP Practitioner course would you introduce a Timeline reimprinting intervention?",
    answer:
      "You would not. Regressive timelines potentially put the client at risk of trauma.",
    distractors: [
      "At the beginning.",
      "Before teaching submodalities.",
      "After rapport has been taught",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Time Lines", pages: "16-2-16-40" },
    ],
  },
  {
    id: "P-PRO-033",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Concept",
    question:
      "In the Swish pattern, what are the 2-key elements of Picture #1?",
    answer: `1. Freeze Frame at the trigger point. 
      2. Asociated.`,
    distractors: [
      `1. Desired state
      2. Future pace.`,
      `1. Resource anchor
      2. Trigger.`,
      `1. Belief
      2. Values conflict.`,
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Submodalities", pages: "7-18-7-23" },
    ],
  },
  {
    id: "P-PRO-034",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Concept",
    question:
      "In the Swish pattern, what are the 4-key elements of Picture #2?",
    answer: `1. Freeze Frame at trigger. 
      2. Dissociated. 
      3. Self full of desired qualities. 
      4. Compelling overall image.`,
    distractors: [
      `1. Trigger 
      2. Cue 
      3. Current problem 
      4. Associated.`,
      `1. Resource state 
      2. Anchor 
      3. Test 
      4. Future pace.`,
      `1. Outcome 
      2. Evidence 
      3. Ecology 
      4. Action.`,
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Submodalities", pages: "7-18-7-23" },
    ],
  },
  {
    id: "P-PRO-035",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Concept",
    question:
      "To use a Swish pattern, you need to first identify what the _________ is.",
    answer: "The trigger.",
    distractors: ["The Outcome.", "The Resource state.", "The Anchor."],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Submodalities", pages: "7-18-7-23" },
    ],
  },
  {
    id: "P-GEN-004",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Eye Accessing Cues",
    type: "Concept",
    question:
      "Name the eye accessing  cues from your top right, middle right and so on clockwise (e.g. V-A-K-Adi)",
    answer: "Vc, Ac, K, Adi, Ar, Vr",
    distractors: [
      "Vr, Ar, Adi, K, Ac, Vc.",
      "Vr, K, Ar, Ac, Adi, Vc.",
      "Vc, Ar, Ac, Adi, K.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Eye Patterns & Accessing Cues",
        pages: "6-16-16-40",
      },
    ],
  },
  {
    id: "P-CS-016",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Perceptual Positions",
    type: "Concept",
    question:
      "What are the 4 questions you would ask a client in 1st position?",
    answer:
      "What's your highest positive intention? What do you see? What do you hear? What do you feel? ",
    distractors: [
      "What do they think? What do you believe? What do you know and remember?",
      "What does the other person think? What do they do? What do they see? What's their highest positive intention",
      "What advice would an observer give? What do they believe? How do you know that? What would you do in their shoes?",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Perceptual Positions",
        pages: "9-1-9-5",
      },
    ],
  },
  {
    id: "P-CS-017",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Perceptual Positions",
    type: "Concept",
    question:
      "What are the 4 questions you would ask a client in 2nd position?",
    answer:
      "What's your highest positive intention? What do you see? What do you hear? What do you feel? ",
    distractors: [
      "What do they think? What do you believe? What do you know and remember?",
      "What does the other person think? What do they do? What do they see? What's their highest positive intention",
      "What advice would an observer give? What do they believe? How do you know that? What would you do in their shoes?",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Perceptual Positions",
        pages: "9-1-9-5",
      },
    ],
  },
  {
    id: "P-CS-023",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Perceptual Positions",
    type: "Concept",
    question: "What else would you do in the 2nd position?",
    answer: "Call the person by the name they are representing in 2nd.",
    distractors: [
      "Analyse the situation logically.",
      "Return immediately to first position.",
      "Challenge the client's beliefs.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Perceptual Positions",
        pages: "9-1-9-5",
      },
    ],
  },
  {
    id: "T-PRO-001",
    level: "Trainer",
    category: "Processes",
    topic: "Interventions",
    type: "Application",
    question:
      "What intervention would you use with a client who says they have clinical depression?",
    answer: "None. Refer client to a therapist or their GP.",
    distractors: [
      "Proceed with any NLP intervention immediately.",
      "Use a Swish Pattern.",
      "Use anchoring as the first intervention to get them in a good state. Then use a timeline",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Structure of NLP Interventions",
        pages: "9-1-9-8",
      },
    ],
  },
  {
    id: "P-LNG-010",
    level: "Practitioner",
    category: "Language",
    topic: "Chunking",
    type: "Process",
    question: "What is the Hierarchy of Chunking?",
    answer: "A process to explore logical levels and logical types. ",
    distractors: [
      "A process that follows the hierarchy of logical levels.",
      "A guidiing through representational systems.",
      "A step by step through the NLP presuppositions.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Chunk Size Filter",
        pages: "6-22-6-22",
      },
    ],
  },
  {
    id: "P-PRO-064",
    level: "Practitioner",
    category: "Processes",
    topic: "Anchoring",
    type: "Concept",
    question: "Why would you use a collapse anchor intervention?",
    answer: "To remove a negative response to a trigger.",
    distractors: [
      "To strengthen a resource anchor.",
      "To install a new strategy.",
      "To build rapport.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-13-8-15" },
    ],
  },
  {
    id: "P-PRO-065",
    level: "Practitioner",
    category: "Processes",
    topic: "Anchoring",
    type: "Process",
    question: "Describe the collapse anchor process.",
    answer:
      "Elicit unwanted state-attach anchor A and test. Break state (BS). Elicit wanted state-attach anchor B and test. BS. Apply anchor A and BB simultaneously. A collapses. BS. Apply Anchor A = No unwanted state.",
    distractors: [
      "Chain positive anchors together.",
      "Future pace a desired outcome. The explore the beliefs that created it so you can model the process.",
      "Elicit values and beliefs, then put them in a hierarchy.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-13-8-15" },
    ],
  },
  {
    id: "T-TC-001",
    level: "Trainer",
    category: "Processes",
    topic: "Certification",
    type: "Concept",
    question:
      "Under what circumstance would you allow someone to sit an NLP Master Practitioner if they have not sat a Practitioner course?",
    answer:
      "You would not allow them to sit a Master Practitiomner course without sitting a Practitioner course..",
    distractors: [
      "Anyone can attend without prerequisites.",
      "Only if they have completed Trainer training.",
      "Only if they have read the manual.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Evaluation and Certification",
        pages: "1-4-1-5",
      },
    ],
  },
  {
    id: "P-PRO-066",
    level: "Practitioner",
    category: "Processes",
    topic: "Anchoring",
    type: "Process",
    question: "Describe the Circle of Excellence process.",
    answer: `1. Identify desired state. 
      2. Create circle on floor in front. 
      3. Fill circle with desired state, step in and anchor. Step out, BS, and test by stepping back in.  
      4. Stack additional states as required. 
      5. Test and 'take circle' with you.`,
    distractors: [
      "A process for timeline change work.",
      "A method for eliciting values.",
      "A strategy installation process.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-10-8-10" },
    ],
  },
  {
    id: "P-PRO-067",
    level: "Practitioner",
    category: "Foundations",
    topic: "Ecology Check",
    type: "Process",
    question:
      "When carrying out an ecology check, what question would you ask if a client said they were 95% sure they wanted to go ahead with a process?",
    answer: "What is that missing 5% about?",
    distractors: [
      "What is stopping you from being 100% certain?",
      "Would you like a stronger anchor?",
      "What is your preferred representational system?",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Outcomes & Ecology",
        pages: "2-11-2-11",
      },
    ],
  },
  {
    id: "P-PRO-068",
    level: "Practitioner",
    category: "Processes",
    topic: "Future Pace",
    type: "Concept",
    question: "Why would you do a Future Pace?",
    answer: "To generalise out the learning to other contexts.",
    distractors: [
      "To test memory recall.",
      "To establish rapport.",
      "To elicit values.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Outcomes & Ecology",
        pages: "2-11-2-11",
      },
    ],
  },
  {
    id: "T-TC-002",
    level: "Trainer",
    category: "Processes",
    topic: "Pre-Course Design",
    type: "Concept",
    question:
      "What essential questions might you ask in a pre-course questionnaire?",
    answer:
      "Are you on medication? Under the care of a mental health professional, suffer from anxiety etc. ",
    distractors: [
      "What are your career goals and hobbies?",
      "What NLP books have you read previously?",
      "What is your preferred learning style?",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Training Design",
        pages: "9-1-9-1",
      },
    ],
  },
  {
    id: "P-GEN-005",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Process",
    question: "Describe the Submodality Belief Change process.",
    answer:
      "2 Map Acrosses. 1: Unwanted Belief -> Belief No Longer True (loosens a beleif) 2: Belief that's Absolutely True <- New Wanted Belief (creates new belief)",
    distractors: [
      "Replace a negative memory with a positive one using anchoring.",
      "Change submodalities without comparing belief structures.",
      "Collapse conflicting beliefs through Parts Integration.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Belief Change Techniques",
        pages: "14-11-14-17",
      },
    ],
  },

  {
    id: "T-ANLP-001",
    level: "Trainer",
    category: "Processes",
    topic: "Course Sequencing",
    type: "Concept",
    question:
      "When designing an NLP course, what structurally is your main consideration?",
    answer: "Layered learning and logical sequencing.",
    distractors: [
      "Room layout and venue logistics.",
      "Assessment methods and certification requirements.",
      "Marketing strategy and course pricing.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Training Sequence",
        pages: "9-4-9-4",
      },
    ],
  },
  {
    id: "P-PRO-036",
    level: "Practitioner",
    category: "Processes",
    topic: "Timelines",
    type: "Process",
    question: "Describe the Timeline Future Sourcing process.",
    answer:
      "Client goes into a desired future event, gathers recources, brings them back to the present",
    distractors: [
      "Client revisits past events to resolve emotional issues.",
      "Client imagines multiple future scenarios without taking resources back.",
      "Client anchors a resourceful state in the present only.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Future Sourcing",
        pages: "4-20-4-20",
      },
    ],
  },
  {
    id: "P-FND-011",
    level: "Practitioner",
    category: "Foundations",
    topic: "NLP Communication Model",
    type: "Process",
    question: "Describe the NLP Communication Model from input to output.",
    answer: `1. VAKOG input 
      2. Filter through Deletion, Distortion, Generalisation
      3. Fikltering creates our map of reality or Map of the World
      4. Our Map of the World determines how we feel
      5. How we feel determines our state
      6. Our state shows in our physiology
      7. Our state determines our learning, decisions and performance
      8. Our performance determines our results`,
    distractors: [
      "External events create beliefs which directly determine identity.",
      "Stimulus leads straight to behaviour without internal processing.",
      "Thoughts create results independently of state and behaviour.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "NLP Communication Model",
        pages: "2-5-2-5",
      },
    ],
  },
  {
    id: "P-PRO-037",
    level: "Practitioner",
    category: "Processes",
    topic: "Parts Integration",
    type: "Process",
    question: "Describe the Parts Integration process.",
    answer:
      "Parts Integration identifies conflicting parts, uncovers their positive intentions and integrates them into a unified outcome.",
    distractors: [
      "Parts Integration installs new anchors to create motivation.",
      "Parts Integration changes timeline perceptions of past events.",
      "Parts Integration uses submodalities to reduce phobic responses.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Parts Integration Process",
        pages: "4-27-4-30",
      },
    ],
  },

  {
    id: "MP-ANLP-024",
    level: "Master Practitioner",
    category: "Meta Programmes",
    topic: "Meta Programmes & LAB Profiling",
    type: "Concept",
    question:
      "Give examples of influencing language for the Towards motivation trait.",
    answer: "I want...the target...the goal...achieve...aim for...reward",
    distractors: [
      "avoid...hesitate...achieve...choices...wait...delay",
      "Overview...scope...specific...big picture...roughly...landscape.",
      "same as...similar...identical...equal to...match...close enough.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Summary of Influencing Language",
        pages: "6-4-6-4",
      },
    ],
  },
  {
    id: "MP-ANLP-025",
    level: "Master Practitioner",
    category: "Meta Programmes",
    topic: "Meta Programmes & LAB Profiling",
    type: "Concept",
    question:
      "What question would you ask to discover if a person was internally or externally referenced?",
    answer:
      "How do you know when you have done a good job or made the right decision?",
    distractors: [
      "What motivates you most in life?",
      "Do you prefer options or procedures?",
      "What feedback do you value most from others?",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Frame of Reference Filter",
        pages: "6-15-6-15",
      },
    ],
  },
  {
    id: "P-PRO-038",
    level: "Practitioner",
    category: "Foundations",
    topic: "Content vs Process",
    type: "Comparison",
    question: "Describe the difference between content and process.",
    answer: `Content is the 'what' we do
      Process is the intenal process that controls 'how' we do it`,
    distractors: [
      "Content is how we do things, process is what we do.",
      "Content and process mean the same thing.",
      "Content is the outcome and process is the goal.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "NLP Communication Model",
        pages: "2-5-2-5",
      },
    ],
  },
  {
    id: "P-CS-018",
    level: "Practitioner",
    category: "Processes",
    topic: "Well-Formed Outcomes",
    type: "Concept",
    question:
      "What questions would you ask to see if an outcome was well-formed?",
    answer:
      "A well-formed outcome is specific, measurable and under the individual's control.",
    distractors: [
      "What values are most important to you?",
      "What skills do you need to achieve it?",
      "Who can help you achieve the outcome?",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Outcomes & Ecology",
        pages: "2-10-2-11",
      },
    ],
  },
  {
    id: "P-PRO-039",
    level: "Practitioner",
    category: "Processes",
    topic: "Framing",
    type: "Comparison",
    question: "What is the difference between a content and a context reframe?",
    answer:
      "A reframe changes the meaning or context of an experience to create a more useful interpretation.",
    distractors: [
      "A content reframe changes meaning; a context reframe changes where it applies.",
      "A context reframe changes meaning; a content reframe changes behaviour.",
      "Both reframes change behaviour without changing meaning.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Using NLP Ecologically",
        pages: "2-11-2-11",
      },
    ],
  },

  {
    id: "P-GEN-006",
    level: "Practitioner",
    category: "Processes",
    topic: "Strategies",
    type: "Concept",
    question:
      "Convert this description into NLP strategy symbols - I looked at the menu, imagined what the curry looked like and it felt good.",
    answer: "Ve -> Vc -> Ki.",
    distractors: ["Vc -> Ke -> Vi.", "Ve - Ve -> Ki.", "Ve -> Vr -> Ke."],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Strategies",
        pages: "10-1-10-25",
      },
    ],
  },
  {
    id: "P-GEN-007",
    level: "Practitioner",
    category: "Processes",
    topic: "Parts Integration",
    type: "Definition",
    question: "What is meant by highest positive intention?",
    answer:
      "Highest Positive Intention is the beneficial purpose behind a behaviour, even when the behaviour itself is unhelpful.",
    distractors: [
      "The strongest emotional response behind a behaviour.",
      "The conscious reason a person gives for a behaviour.",
      "The outcome others want from the behaviour.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Parts Integration Process",
        pages: "14-4-14-4",
      },
    ],
  },
  {
    id: "P-ANLP-026",
    level: "Practitioner",
    category: "Foundations",
    topic: "Usual Suspects",
    type: "Concept",
    question: "What are Grinder's Usual Suspects?",
    answer: `1. Calibration
      2. Rapport
      3. State
      4. Intention`,
    distractors: [
      "Representational systems and eye accessing cues.",
      "The main NLP presuppositions.",
      "Common sensory acuity calibration points.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Belief Change Techniques",
        pages: "14-11-14-17",
      },
    ],
  },
  {
    id: "P-ANLP-027",
    level: "Practitioner",
    category: "Foundations",
    topic: "Usual Suspects",
    type: "Concept",
    question: "Why are the Usual Suspects important?",
    answer: "They prepare us for successful interventions.",
    distractors: [
      "They increase the speed of anchoring.",
      "They identify preferred representational systems.",
      "They guarantee change will occur.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Belief Change Techniques",
        pages: "14-11-14-17",
      },
    ],
  },
  {
    id: "P-GEN-008",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Understanding Submodalities",
    type: "Comparison",
    question: "What is the difference between dissassociated and dissociated?",
    answer:
      "Dissassociated means totally disconected from something, not involved at all. Dissociated mean removed from the kinesthetic feeling associated to an event.",
    distractors: [
      "Dissociated means reliving fully; double dissociated means observing from outside.",
      "Dissociated and double dissociated are identical.",
      "Double dissociated means being more emotionally involved.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Submodalies", pages: "7-1-7-1" },
    ],
  },

  {
    id: "P-GEN-010",
    level: "Practitioner",
    category: "Processes",
    topic: "Strategies",
    type: "Concept",
    question: "Why is an understanding of strategies important for a coach?",
    answer:
      "Understanding strategies allows a coach to identify how a client creates results and to model or improve those patterns.",
    distractors: [
      "It allows coaches to diagnose medical conditions.",
      "It helps coaches determine personality types only.",
      "It removes the need for questioning.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Strategies",
        pages: "10-1-10-25",
      },
    ],
  },

  {
    id: "P-FND-012",
    level: "Practitioner",
    category: "Foundations",
    topic: "NLP Linguistic Presuppositions",
    type: "Recall",
    question: "List the NLP Linguistic Presuppositions.",
    answer: `1. Time
      2. Cause-effect
      3. Complex Equivalence
      4. Modal Operators
      5. Adjectives/Adverbs
      6. Inclusive Or/Exclusive Or
      7. Awareness
      8. Existence
      9. Ordinal`,
    distractors: [
      "Rules that determine whether a statement is true.",
      "Beliefs that must be consciously agreed with.",
      "Techniques used only in hypnosis.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Presuppositions of NLP",
        pages: "3-3-3-7",
      },
    ],
  },
  {
    id: "P-PRO-040",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Concept",
    question:
      "What are the key important elements in the Swish Pattern's Picture #1 and Picture #2?",
    answer:
      "Picture #1 Trigger and Asociated. Picture #2 Trigger. Dossociated. Self full of Qualities. 4. Picture Compelling.",
    distractors: [
      "Picture #1 desired self-image; Picture #2 trigger picture.",
      "Both pictures are associated trigger pictures.",
      "Picture #1 resource anchor; Picture #2 timeline image.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Submodalities",
        pages: "7-23a-7-23a",
      },
    ],
  },
  {
    id: "P-PRO-041",
    level: "Practitioner",
    category: "Submodalities",
    topic: "Submodality Processes",
    type: "Application",
    question: "When would you choose to use a Swish with a client?",
    answer:
      "Use a Swish Pattern when a client wants to replace an unwanted state or behaviour associated with a trigger with a more resourceful state or behaviour.",
    distractors: [
      "When resolving conflict between internal parts.",
      "When teaching values elicitation.",
      "When installing a chain of anchors.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Submodalities", pages: "7-18-7-18" },
    ],
  },

  {
    id: "P-PRO-043",
    level: "Practitioner",
    category: "Processes",
    topic: "Parts Integration",
    type: "Definition",
    question: "What is a Part?",
    answer:
      "A Part is an aspect of personality that has its own perspective, values, intention or behaviour.",
    distractors: [
      "A complete personality type.",
      "A limiting belief stored unconsciously.",
      "A representational system.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What Are Parts?",
        pages: "4-24-4-24",
      },
    ],
  },
  {
    id: "P-PRO-044",
    level: "Practitioner",
    category: "Processes",
    topic: "Parts Integration",
    type: "Concept",
    question:
      "What does 'chunk up on the intention of the characteristic/behaviour of the part' mean?",
    answer:
      "Chunking up on the intention means moving to a higher-level purpose or positive intention behind a behaviour.",
    distractors: [
      "Focusing on specific behavioural details.",
      "Changing the behaviour directly.",
      "Moving to a lower level of detail.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Parts Integration Process",
        pages: "4-27-4-30",
      },
    ],
  },
  {
    id: "P-PRO-045",
    level: "Practitioner",
    category: "Processes",
    topic: "Parts Integration",
    type: "Process",
    question: "Describe the Parts Integration process.",
    answer:
      "Parts Integration identifies conflicting parts, uncovers their positive intentions and integrates them into a unified outcome.",
    distractors: [
      "Parts Integration changes beliefs using submodalities.",
      "Parts Integration anchors resourceful states only.",
      "Parts Integration resolves phobias through dissociation.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Parts Integration Process",
        pages: "4-27-4-30",
      },
    ],
  },
  {
    id: "P-PRO-046",
    level: "Practitioner",
    category: "Processes",
    topic: "Timelines",
    type: "Concept",
    question:
      "In timeline work, what do we mean by 'in-time' and 'through time'?",
    answer: `In time = on your timeline in the present. Less time perspective. 
      Through time = Not on timeline, looking at timeline in front of you running from left to right. More time perspective.`,
    distractors: [
      "In-time means seeing events through your own timeline; through-time means viewing the timeline from outside.",
      "In-time means focusing only on the past; through-time focuses only on the future.",
      "They describe representational systems rather than time orientation.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Time Lines", pages: "16-5-16-5" },
    ],
  },
  {
    id: "P-PRO-047",
    level: "Practitioner",
    category: "Processes",
    topic: "Timelines",
    type: "Definition",
    question: "What is the timeline future sourcing process designed to do?",
    answer: "Bring future resources to the present.",
    distractors: [
      "Install anchors into future situations.",
      "Resolve past emotional trauma.",
      "Identify a person's primary timeline orientation.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Future Sourcing",
        pages: "4-20-4-20",
      },
    ],
  },
  {
    id: "P-PRO-048",
    level: "Practitioner",
    category: "Processes",
    topic: "Future Sourcing",
    type: "Process",
    question: "Describe the future sourcing process.",
    answer:
      "Future Sourcing involves mentally rehearsing successfully applying a new behaviour in future situations to strengthen integration.",
    distractors: [
      "Revisit past memories to change emotional responses.",
      "Create a chain of anchors for future motivation.",
      "Identify values and beliefs connected to a goal.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Future Sourcing",
        pages: "4-20-4-20",
      },
    ],
  },
  {
    id: "P-PRO-049",
    level: "Practitioner",
    category: "Processes",
    topic: "Timelines",
    type: "Concept",
    question:
      "Why don't we do the timeline re-imprinting process in the virtual environment?",
    answer:
      "In case we trigger trauma and the client loses internet connection. It's not safe to do this process online for this reason.",
    distractors: [
      "Virtual platforms reduce the effectiveness of anchoring.",
      "The process requires physical touch anchoring.",
      "Clients cannot access memories effectively online.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Re-imprinting",
        pages: "14-13-14-16",
      },
    ],
  },
  {
    id: "P-PRO-050",
    level: "Practitioner",
    category: "Processes",
    topic: "Re-imprinting",
    type: "Concept",
    question: "When is the usual imprinting period for people?",
    answer: "Between 0 and 7.",
    distractors: [
      "Adolescence to adulthood; because beliefs are not yet formed.",
      "Birth to age 3; because language is not developed.",
      "There is no imprinting period recognised in NLP.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Re-imprinting",
        pages: "14-13-14-16",
      },
    ],
  },
  {
    id: "P-PRO-051",
    level: "Practitioner",
    category: "Foundations",
    topic: "Ecology Check",
    type: "Process",
    question:
      "List the questions you would ask to check the ecology of a goal or change process before taking a client through a process.",
    answer: `1. What are the pros?
      2. What are the cons?
      3. How much do you want to do this as a %?
      4. Cartesian Coordinates quesions AB, AnB, nAB, nAnB, `,
    distractors: [
      "What resources do you need? What evidence will you have? What timeline applies?",
      "What is your outcome? Who caused the problem? How long has it existed?",
      "Who is involved? What could be the consequences? What are the benefits of change?",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Outcomes & Ecology",
        pages: "2-11-2-11",
      },
    ],
  },
  {
    id: "P-CS-019",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Perceptual Positions",
    type: "Definition",
    question: "What is meant in NLP by triple positioning?",
    answer:
      "Triple Positioning is the ability to experience a situation from 1st, 2nd and 3rd perceptual positions.",
    distractors: [
      "Seeing only your own perspective.",
      "Matching another person's physiology.",
      "Observing from fourth perceptual position.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Perceptual Positions",
        pages: "9-1-9-1",
      },
    ],
  },
  {
    id: "P-CS-020",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Perceptual Positions",
    type: "Concept",
    question:
      "Explain what 1st position, 2nd position and 3rd position mean in NLP.",
    answer:
      "1st Position is your own perspective. 2nd Position is the other person's perspective. 3rd Position is a neutral observer's perspective.",
    distractors: [
      "1st = observer, 2nd = self, 3rd = other.",
      "1st = past, 2nd = present, 3rd = future.",
      "1st = visual, 2nd = auditory, 3rd = kinesthetic.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Perceptual Positions",
        pages: "9-1-9-1",
      },
    ],
  },
  {
    id: "P-GEN-013",
    level: "Practitioner",
    category: "Foundations",
    topic: "Mindset",
    type: "Concept",
    question:
      "What does 'operate from a psycho-physicality of excellence' mean?",
    answer:
      "Operating from a psycho-physicality of excellence means consistently using empowering physiology (body) and psychology (mind) to create excellent performance.",
    distractors: [
      "Maintaining logical analysis at all times.",
      "Using positive thinking without behavioural change.",
      "Suppressing emotions to remain objective.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Mind-Body Connection",
        pages: "2-9-2-9",
      },
    ],
  },
  {
    id: "P-CS-021",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Sensory Acuity",
    type: "Recall",
    question:
      "List 6 things we can use our sensory acuity to calibrate in another person.",
    answer:
      "Examples include breathing, skin colour, muscle tension, posture, eye movements and voice tone.",
    distractors: [
      "Examples include: Values, beliefs, identity, language, goals and outcomes.",
      "Examples include: Eye colour, height, weight, age and clothing.",
      "Examples include: Representational systems, meta programmes, values, beliefs, goals and outcomes.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Sensory Acuity", pages: "3-2-3-2" },
    ],
  },
  {
    id: "P-CS-022",
    level: "Practitioner",
    category: "Core Skills",
    topic: "Building Rapport",
    type: "Recall",
    question: "List 6 ways to build rapport.",
    answer: "Matching breathing, posture, gestures, words, tone, tempo",
    distractors: [
      "Questioning, challenging, persuading, leading, teaching and directing.",
      "Matching values, beliefs, identity, mission, goals and outcomes.",
      "Anchoring, reframing, modelling, chunking, eliciting and testing.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Rapport", pages: "4-1-4-4" },
    ],
  },
  {
    id: "P-FND-013",
    level: "Practitioner",
    category: "Foundations",
    topic: "NLP Communication Model",
    type: "Definition",
    question:
      "What is meant by deletion, distortion and generalisation in the Communication Model?",
    answer: `1. Deletion - omitting information from experience
      2. Distortion - giving somegthing a meaning is doesn't posses
      3. Generalisation - making different things the same`,
    distractors: [
      "Three communication channels used to convey meaning.",
      "Three representational systems used to process information.",
      "Three stages of learning and behaviour change.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "NLP Communication Model",
        pages: "2-5-2-5",
      },
    ],
  },
  {
    id: "P-PRO-052",
    level: "Practitioner",
    category: "Processes",
    topic: "Anchor Definition",
    type: "Definition",
    question: "What is an anchor in NLP?",
    answer:
      "An anchor is a stimulus that triggers a specific state or response.",
    distractors: [
      "A behaviour pattern learned through repetition.",
      "A representational system preference.",
      "A belief linked to a value.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-1-8-1" },
    ],
  },
  {
    id: "P-PRO-053",
    level: "Practitioner",
    category: "Processes",
    topic: "Setting Anchors",
    type: "Concept",
    question: "What are the 4 key steps in setting an anchor?",
    answer:
      "1. Elicit state. 2. Apply Anchor. 3. Break State. 4. Test. (manual breaks step 1 into 3)",
    distractors: [
      "Elicit state, apply anchor, future pace, ecology check.",
      "Identify trigger, apply anchor, collapse anchor, test.",
      "Resource state, stack anchors, chain anchors, future pace.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-5-8-5" },
    ],
  },
  {
    id: "P-PRO-054",
    level: "Practitioner",
    category: "Processes",
    topic: "Successful Anchoring",
    type: "Concept",
    question: "What are the 5 keys to setting a successful anchor?",
    answer: "Intensity, timing, uniqueness, replication and purity of state.",
    distractors: [
      "Intensity, repetition, duration, volume and posture.",
      "Timing, ecology, pacing, leading and testing.",
      "Uniqueness, repetition, calibration, chunking and pacing.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Anchoring", pages: "8-4-8-4" },
    ],
  },
  {
    id: "P-FND-014",
    level: "Practitioner",
    category: "Foundations",
    topic: "Definitions of NLP",
    type: "Concept",
    question: "Give 3 known definitions of NLP and explain them.",
    answer: `1. NLP is the study of the structure of subjective experience 
      2. NLP is an attitude and methodology that leaves a trail of techniques
      3. NLP is the mapping of tacit knowledge on to an explicit model`,
    distractors: [
      "NLP is only a collection of techniques; NLP is psychotherapy; NLP is communication.",
      "NLP is modelling excellence; NLP is counselling; NLP is behaviourism.",
      "NLP is persuasion; NLP is influence; NLP is coaching.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Definition of NLP",
        pages: "2-1-2-1",
      },
    ],
  },
  {
    id: "P-FND-015",
    level: "Practitioner",
    category: "Foundations",
    topic: "Co-Creators of NLP",
    type: "Recall",
    question: "Who are the co-creators of NLP?",
    answer: `1. Richard Bandler
    2. John Grinder.`,
    distractors: [
      "Richard Bandler and Robert Dilts.",
      "John Grinder and Robert Dilts.",
      "Milton Erickson and Virginia Satir.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Definition of NLP",
        pages: "2-1-2-2",
      },
    ],
  },
  {
    id: "P-FND-016",
    level: "Practitioner",
    category: "Foundations",
    topic: "History of NLP",
    type: "Recall",
    question: "Where and when did NLP start?",
    answer: `NLP started at the University of California, Santa Cruz. 
    It started in the early 1970s.`,
    distractors: [
      "New York in the 1980s.",
      "London in the late 1960s.",
      "California in the 1990s.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "What is NLP?",
        pages: "2-2-2-2",
      },
    ],
  },
  {
    id: "P-GEN-014",
    level: "Practitioner",
    category: "Foundations",
    topic: "Representational Systems",
    type: "Definition",
    question: "What is V.A.K.O.G. in NLP?",
    answer: `VAKOG are our representational systems:
      - Visual
      - Auditory
      - Kinesthetic
      - Olfactory
      - Gustatory `,
    distractors: [
      "Visual, Auditory, Kinaesthetic and Digital.",
      "Visual, Auditory, Kinaesthetic, Organisational and Gestural.",
      "Visual, Auditory, Kinaesthetic, Observational and Gustatory.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Practitioner",
        section: "Representational Systems",
        pages: "6-1-6-?",
      },
    ],
  },
  {
    id: "P-LNG-009",
    level: "Practitioner",
    category: "Language",
    topic: "Persuasive Speech",
    type: "Design",
    question: "Which NLP model uses persuasive speech patterns?",
    answer: "The Milton Model.",
    distractors: [
      "The Meta Model.",
      "Chunking.",
      "Linguistic presuppositions.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Effective Presentations",
        pages: "9-3-9-3",
      },
    ],
  },
  {
    id: "P-ANLP-028",
    level: "Practitioner",
    category: "Processes",
    topic: "Trauma Handling",
    type: "Application",
    question:
      "How would you work with a client who has a psychological trauma issue?",
    answer:
      "Stay within your competence, maintain ecology and refer to an appropriately qualified mental health professional/GP when necessary.",
    distractors: [
      "Explore the trauma in detail and resolve it yourself.",
      "Use NLP techniques regardless of competence level.",
      "Encourage exposure to traumatic memories immediately.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Using NLP Ecologically",
        pages: "2-11-2-11",
      },
    ],
  },
  {
    id: "P-PRO-055",
    level: "Practitioner",
    category: "Processes",
    topic: "New Behaviour Generator",
    type: "Process",
    question: "Describe the New Behaviour Generator process.",
    answer:
      "Mentally rehearse a desired behaviour using eye accessing cues to determine if a behaviour is the best choice, using Adi -> Vc -> K",
    distractors: [
      "Use anchoring to install a new state.",
      "Future pace a desired outcome only.",
      "Identify values and remove limiting beliefs.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Reframing", pages: "6-22-6-22" },
    ],
  },
  {
    id: "P-PRO-056",
    level: "Practitioner",
    category: "Processes",
    topic: "Reframing",
    type: "Process",
    question: "Describe the 6-Step Reframe process.",
    answer:
      "1. Idenify unwanted behaviour 2. establish communication with part responsible & separate intention from behaviou 3. Get creative parte to generate 3 new behaviours 4. Get part to take responsibility to implement new behaviour 5. Ecology check 6. test",
    distractors: [
      "Identify unwanted behaviour, punish it, replace it, test.",
      "Challenge beliefs, change submodalities, future pace.",
      "Anchor resources, collapse anchors, ecology check.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Reframing", pages: "13-7-13-12" },
    ],
  },
  {
    id: "P-PRO-057",
    level: "Practitioner",
    category: "Processes",
    topic: "Reframing",
    type: "Application",
    question: "When would you use a 6-Step Reframe?",
    answer: "To change unwanted behaviour to achieve an intention.",
    distractors: [
      "To build rapport with a client.",
      "To identify values and beliefs.",
      "To improve sensory acuity.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Practitioner", section: "Reframing", pages: "13-7-13-7" },
    ],
  },
  {
    id: "P-PRO-058",
    level: "Practitioner",
    category: "Processes",
    topic: "Neurological Levels of Change",
    type: "Definition",
    question:
      "What are the 6 levels in Neurological Levels of Change (NLC) process?",
    answer:
      "Environment, Behaviour, Capabiulities, Values & Beliefs, Identity, Mission/purpose",
    distractors: [
      "Environment, Behaviour, Values, Identity, Mission, Vision.",
      "Behaviour, Capability, Belief, Identity, Purpose, Outcome.",
      "Environment, Skills, Values, Goals, Identity, Mission.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Online Practitioner", section: "Module 4", pages: "NLC-NLC" },
    ],
  },
  {
    id: "P-PRO-059",
    level: "Practitioner",
    category: "Processes",
    topic: "Neurological Levels of Change",
    type: "Process",
    question:
      "What are the 3 main questions we ask for the bottom 3 levels of NLC?",
    answer:
      "What is in alignment, what is out of alignment, what could you change?",
    distractors: [
      "What do you want? How will you get it? When will you start?",
      "Who are you? What is your purpose? What is your mission?",
      "What is working? What is not working? What resources do you need?",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Online Practitioner", section: "Module 4", pages: "NLC-NLC" },
    ],
  },
  {
    id: "P-PRO-060",
    level: "Practitioner",
    category: "Processes",
    topic: "Neurological Levels of Change",
    type: "Process",
    question:
      "What is the difference between the bottom 3 levels and the top 3 levels in the NLP process?",
    answer: "Bottom 3 levels are transactional, the top 3 are transformational",
    distractors: [
      "Bottom 3 are unconscious, top 3 are conscious.",
      "Bottom 3 focus on identity, top 3 focus on behaviour.",
      "There is no distinction between them.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Online Practitioner", section: "Module 4", pages: "NLC-NLC" },
    ],
  },
  {
    id: "P-PRO-061",
    level: "Practitioner",
    category: "Processes",
    topic: "Neurological Levels of Change",
    type: "Process",
    question: "Who created the Neurological Levels of Change process?",
    answer: "Robert Dilts ",
    distractors: ["John Grinder.", "Richard Bandler.", "Milton Erickson."],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Online Practitioner", section: "Module 4", pages: "NLC-NLC" },
    ],
  },
  {
    id: "P-PRO-062",
    level: "Practitioner",
    category: "Processes",
    topic: "Neurological Levels of Change",
    type: "Process",
    question:
      "What is the purpose of the Neurological Levels of Change process?",
    answer: "It is an alignment and diagnostic tool",
    distractors: [
      "It diagnoses mental health conditions.",
      "It identifies representational systems.",
      "It creates anchors for change.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      { manual: "Online Practitioner", section: "Module 4", pages: "NLC-NLC" },
    ],
  },
  {
    id: "T-APP-008",
    level: "Trainer",
    category: "Processes",
    topic: "Presentations",
    type: "Definition",
    question: "What is the 4-Mat Model and who created it?",
    answer:
      "A learning model developed by Bernice McCarthy that addresses different learning preferences.",
    distractors: [
      "It is the 4 stages of learning. It was created by Robert Dilts",
      "It is the 4 stages of dgrowth: Beginner, Intermediate, Advanced and Expert. It was developed by Richard Bandler.",
      "It is a model for Situational Leadership. It was created by Ken Blanchard.",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Effective Presentations",
        pages: "9-3-9-3",
      },
    ],
  },
  {
    id: "MP-ANLP-026",
    level: "Master Practitioner",
    category: "Processes",
    topic: "NLP Model of Change",
    type: "Definition",
    question: "What are the 5 stages of the NLP Model of Change",
    answer:
      "1. Understand Model of the World 2. Loosen Model 3. The Change 4. Ecology check 5. Future pace",
    distractors: [
      "1. Know outcome 2. Be flexible 3. Have awareness 4. Psycho-physicality of excellene 5. Take action",
      "Awareness, rapport, understanding, process, ecology",
      "1. Calibration 2. Rapport 3. Listening 4. State  5. Intention",
    ],
    sourceType: "Exam",
    active: true,
    manualReferences: [
      {
        manual: "Master Practitioner",
        section: "Advanced Submodalities",
        pages: "13-1-13-1",
      },
    ],
  },
];
