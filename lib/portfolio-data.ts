// Portfolio Data Structure - Organized by HCI Design Phases

// ===== TYPE DEFINITIONS =====

export interface Artifact {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  type: 'image' | 'diagram' | 'sketch' | 'mockup' | 'prototype';
}

export interface PersonaData {
  id: string;
  name: string;
  role: string;
  demographics: string;
  goals: string[];
  motivations: string[];
  painPoints: string[];
  quote: string;
  image?: string;
}

export interface ResearchFinding {
  id: string;
  title: string;
  description: string;
  evidence: string;
  icon?: string;
}

export interface InsightData {
  id: string;
  insight: string;
  explanation: string;
  artifact?: Artifact;
}

export interface DesignDecision {
  id: string;
  decision: string;
  insight: string; // Links to InsightData.id
  rationale: string;
  tradeoff?: string;
}

export interface IterationStage {
  id: string;
  stage: 'initial' | 'refined' | 'final';
  title: string;
  description: string;
  artifacts: Artifact[];
}

export interface EthicalConsideration {
  id: string;
  category: string;
  consideration: string;
  approach: string;
}

export interface TechnicalReflectionData {
  promptsUsed: string[];
  verificationMethods: string[];
  ethicalConsiderations: EthicalConsideration[];
}

// ===== PORTFOLIO DATA =====

export const portfolioData = {
  // Project Overview
  project: {
    title: 'Designing an AI-Enhanced Cultural Experience',
    subtitle: 'A process portfolio documenting the HCI design methodology',
    description: 'This portfolio documents the user-centered design process for creating an engaging, AI-enhanced experience for cultural tourism. From initial research through iterative design, this case study demonstrates the application of HCI principles to solve real user challenges in the cultural heritage space.',
  },

  // ===== PHASE 1: OVERVIEW =====
  overview: {
    problemSpace: {
      context: 'Cultural institutions face challenges in creating engaging experiences that balance deep education with accessibility for diverse audiences.',
      painPoints: [
        'Long waiting times to engage with cultural artifacts',
        'Limited personalization in group tours',
        'Difficulty finding contextual information on-demand',
        'Low engagement for younger audiences',
        'Barriers for visitors with different accessibility needs',
      ],
      opportunity: 'Design an experience that uses AI to personalize cultural learning, reduce friction in information discovery, and enhance emotional connection to heritage.',
      artifacts: [
        {
          id: 'brainstorm-1',
          src: '/artifacts/brainstorm-1.jpg',
          alt: 'Initial brainstorm session on pain points',
          caption: 'Brainstorm session exploring cultural experience challenges',
          type: 'image',
        },
      ] as Artifact[],
    },
  },

  // ===== PHASE 2: RESEARCH =====
  research: {
    findings: [
      {
        id: 'finding-1',
        title: 'Visitors crave personal context',
        description: 'Interview participants consistently expressed desire for information tailored to their interests and background knowledge level.',
        evidence: '8 out of 10 interviewees mentioned wanting customized content',
        icon: 'Lightbulb',
      },
      {
        id: 'finding-2',
        title: 'Group dynamics create friction',
        description: 'Groups with mixed interests struggle to follow a single tour narrative.',
        evidence: 'Observed in 6 of 8 observed tours',
        icon: 'Users',
      },
      {
        id: 'finding-3',
        title: 'Emotional connection drives retention',
        description: 'Visitors remember stories and personal narratives more than facts.',
        evidence: 'Post-visit recall tests showed 40% higher retention for narrative-based content',
        icon: 'Heart',
      },
      {
        id: 'finding-4',
        title: 'Time is the critical constraint',
        description: 'Average visit duration is 45 minutes; visitors want maximum value in minimal time.',
        evidence: 'Observed average visit length: 38-52 minutes',
        icon: 'Clock',
      },
    ] as ResearchFinding[],

    personas: [
      {
        id: 'persona-1',
        name: 'Sarah Chen',
        role: 'Curious Learner',
        demographics: '32, university educator, first-time visitor',
        goals: [
          'Gain deep contextual knowledge about the collection',
          'Discover unexpected connections between artifacts',
          'Share meaningful learning moments with visiting family',
        ],
        motivations: [
          'Professional interest in cultural history',
          'Love of storytelling',
          'Desire to model curiosity for family members',
        ],
        painPoints: [
          'Standard tours move too quickly through areas of interest',
          'Difficult to find additional context on specific artifacts',
          'Feels rushed with a large group',
        ],
        quote: 'I want to go deep into the stories behind these objects, not just check boxes off a list.',
        image: '/artifacts/persona-1.jpg',
      },
      {
        id: 'persona-2',
        name: 'Marcus Thompson',
        role: 'Time-Constrained Explorer',
        demographics: '45, business professional, visiting with family',
        goals: [
          'Experience the highlights of the collection efficiently',
          'Find engaging content that interests his teenage children',
          'Create memorable moments with family',
        ],
        motivations: [
          'Limited time but high value placed on family experiences',
          'Interest in history, but needs engagement to hold attention',
          'Wants to feel "cultured" and educated',
        ],
        painPoints: [
          'Struggles to manage different interests within family group',
          'Long descriptions feel overwhelming',
          'Teenage children lose interest quickly',
        ],
        quote: 'I want to hit the highlights, spend time on what matters to my family, and not waste time on things we don\'t care about.',
      },
    ] as PersonaData[],

    scenarioAndGoal: {
      scenario: 'Sarah is visiting the museum for research on textile production techniques. She has 90 minutes and wants to learn deeply about the textile collection while taking notes and photos.',
      goal: 'Enable Sarah to efficiently find textile artifacts, understand their historical context, and discover lesser-known pieces that align with her research interests.',
      successMetrics: [
        'Sarah spends at least 60 minutes in textile area',
        'She discovers at least 3 artifacts not on the standard tour',
        'She rates the experience 4+ on engagement and informativeness',
      ],
    },

    journeyMap: {
      phases: [
        {
          phase: 'Before Visit',
          activities: ['Research museum online', 'Plan collection areas', 'Set expectations'],
          emotions: [8, 7, 7],
          painPoints: ['Limited information online', 'Unclear tour routes'],
        },
        {
          phase: 'Arrival',
          activities: ['Acquire map/information', 'Orient to space', 'Join tour or explore alone'],
          emotions: [7, 6, 7],
          painPoints: ['Crowded entry', 'Generic orientation'],
        },
        {
          phase: 'Exploration',
          activities: ['Navigate spaces', 'Read labels', 'Look for information', 'Take notes'],
          emotions: [8, 6, 5, 6],
          painPoints: ['Limited context', 'Difficulty finding specifics', 'Time pressure'],
        },
        {
          phase: 'Reflection',
          activities: ['Review notes', 'Visit gift shop', 'Depart'],
          emotions: [7, 7, 7],
          painPoints: ['Incomplete learning', 'Missed opportunities'],
        },
      ],
      emotionalCurve: [
        { phase: 'Before Visit', emotion: 7.5 },
        { phase: 'Arrival', emotion: 6.5 },
        { phase: 'Early Exploration', emotion: 5.5 },
        { phase: 'Mid Exploration', emotion: 6.5 },
        { phase: 'Deep Engagement', emotion: 8.5 },
        { phase: 'Reflection', emotion: 7 },
      ],
    },
  },

  // ===== PHASE 3: SYNTHESIS =====
  synthesis: {
    keyInsights: [
      {
        id: 'insight-1',
        insight: 'Personalization is Non-Negotiable',
        explanation: 'Visitors have dramatically different knowledge levels and interests. A one-size-fits-all tour cannot serve both the academic researcher and the casual family visitor.',
        artifact: {
          id: 'insight-visual-1',
          src: '/artifacts/insight-1.jpg',
          alt: 'Insight diagram showing audience diversity',
          type: 'diagram',
        },
      },
      {
        id: 'insight-2',
        insight: 'Time is Scarce, Attention is Selective',
        explanation: 'Visitors prioritize depth in areas of interest over breadth. They would rather spend meaningful time on 5 artifacts than rush through 50.',
        artifact: undefined,
      },
      {
        id: 'insight-3',
        insight: 'Stories Create Emotional Resonance',
        explanation: 'Emotional connection and narrative context dramatically improve learning retention and visitor satisfaction compared to factual information alone.',
        artifact: undefined,
      },
      {
        id: 'insight-4',
        insight: 'Accessibility is an Afterthought, Not a Feature',
        explanation: 'Current design assumes able-bodied visitors with sufficient English literacy. Accommodations are limited and often communicated poorly.',
        artifact: undefined,
      },
    ] as InsightData[],

    insightToDesignMapping: [
      {
        id: 'map-1',
        insight: 'Personalization is Non-Negotiable',
        decision: 'Adaptive Content Delivery',
        rationale: 'Offer multiple content depths (Quick Facts, Deep Dive, Audio Guide) so visitors can choose information matching their interest level and available time.',
        tradeoff: 'Increased content creation burden vs. improved user satisfaction',
      },
      {
        id: 'map-2',
        insight: 'Time is Scarce, Attention is Selective',
        decision: 'Curated Recommendation Engine',
        rationale: 'AI-powered recommendations highlight artifacts and narratives matching the user\'s stated interests and knowledge level, reducing decision fatigue.',
        tradeoff: 'Data privacy concerns with personalization vs. improved engagement',
      },
      {
        id: 'map-3',
        insight: 'Stories Create Emotional Resonance',
        decision: 'Narrative-First Information Architecture',
        rationale: 'Lead with compelling stories and human connections before diving into historical facts. Frame artifacts within relatable narratives.',
        tradeoff: 'Requires more content creation vs. dry fact presentation that\'s quicker to write',
      },
      {
        id: 'map-4',
        insight: 'Accessibility is an Afterthought, Not a Feature',
        decision: 'Accessibility-First Design Sprint',
        rationale: 'Bake accessibility into design from the start: high contrast, text alternatives, adjustable text sizes, multi-sensory content, translation support.',
        tradeoff: 'More complex design and development vs. truly inclusive experience',
      },
    ],

    designDecisions: [
      {
        id: 'decision-1',
        decision: 'Audio + Visual + Text (Multi-Sensory)',
        insight: 'insight-3',
        rationale: 'Supports different learning styles and accessibility needs. Audio narratives can convey emotion and storytelling that text alone cannot.',
        tradeoff: 'Audio vs. Immersion: Do audio guides disrupt the intimate museum experience?',
      },
      {
        id: 'decision-2',
        decision: 'Situational AI Recommendations vs. Intrusive Push Notifications',
        insight: 'insight-2',
        rationale: 'Provide AI recommendations through the app on-demand, allowing visitors to check when they choose rather than interrupting their physical experience.',
        tradeoff: 'AI Integration Complexity: More sophisticated recommendation engine required',
      },
    ],
  },

  // ===== PHASE 4: DESIGN DEVELOPMENT =====
  design: {
    conceptEvolution: [
      {
        id: 'stage-1',
        stage: 'initial',
        title: 'Initial Concept: Guided Tour App',
        description: 'First iteration was a traditional guided tour app with turn-by-turn navigation and static content for each artifact.',
        artifacts: [
          {
            id: 'sketch-1',
            src: '/artifacts/concept-1-sketch.jpg',
            alt: 'Initial sketch of guided tour interface',
            caption: 'Early wireframe of linear tour guide concept',
            type: 'sketch',
          },
        ],
      },
      {
        id: 'stage-2',
        stage: 'refined',
        title: 'Post-Interview Refinement: Personalized Discovery',
        description: 'After persona interviews, concept evolved to prioritize visitor choice and personalization. Added recommendation engine and multiple content depth levels.',
        artifacts: [
          {
            id: 'wireframe-2',
            src: '/artifacts/concept-2-wireframe.jpg',
            alt: 'Refined wireframe with personalization features',
            caption: 'Refined design incorporating user preferences and recommendations',
            type: 'sketch',
          },
          {
            id: 'wireframe-2b',
            src: '/artifacts/concept-2b-wireframe.jpg',
            alt: 'Detailed user flow for personalization',
            caption: 'User flow for setting preferences',
            type: 'diagram',
          },
        ],
      },
      {
        id: 'stage-3',
        stage: 'final',
        title: 'Final Concept: AI-Guided Narrative Experience',
        description: 'Final design combines spatial navigation, personalized storytelling, and multi-sensory content. AI learns user preferences to improve recommendations over time.',
        artifacts: [
          {
            id: 'mockup-1',
            src: '/artifacts/concept-3-mockup-home.jpg',
            alt: 'Final mockup of home screen',
            caption: 'Final high-fidelity mockup: Home screen with personalized recommendations',
            type: 'mockup',
          },
          {
            id: 'mockup-2',
            src: '/artifacts/concept-3-mockup-detail.jpg',
            alt: 'Final mockup of artifact detail',
            caption: 'Final design: Multi-depth content for artifacts',
            type: 'mockup',
          },
          {
            id: 'prototype-1',
            src: '/artifacts/concept-3-prototype.jpg',
            alt: 'Interactive prototype demonstration',
            caption: 'Interactive prototype showing AI recommendation flow',
            type: 'prototype',
          },
        ],
      },
    ] as IterationStage[],

    finalConcept: {
      overview: 'An AI-enhanced mobile experience that personalizes cultural learning through narrative storytelling, adaptive content depth, and intelligent recommendations.',
      modules: [
        {
          title: 'Pre-Visit Preparation',
          description: 'Visitors set interests, knowledge level, and time available. AI creates a personalized tour recommendation.',
          keyFeatures: ['Interest selector', 'Knowledge level assessment', 'Time allocation', 'Accessibility preferences'],
        },
        {
          title: 'Situated Experience',
          description: 'In-museum navigation with beacon-triggered stories, personalized recommendations, and multi-sensory content.',
          keyFeatures: ['Spatial navigation', 'Beacon-triggered narratives', 'Recommendation feed', 'Note-taking & bookmarking'],
        },
        {
          title: 'Optional Engagement',
          description: 'Post-visit learning: further reading, curator notes, community contributions, and continued personalization.',
          keyFeatures: ['Extended content library', 'Community discussions', 'Further research links', 'Visit history & learning path'],
        },
      ],
    },
  },

  // ===== PHASE 5: REFLECTION =====
  reflection: {
    validationAndImpact: {
      originalPainPoints: [
        {
          painPoint: 'Limited personalization',
          addressed: 'Adaptive content depths & AI recommendations match visitor interests',
          evidence: 'Prototype testing: 9/10 users found recommendations useful',
        },
        {
          painPoint: 'Time pressure & information overload',
          addressed: 'Curated content respects visitor time; recommendations reduce decision fatigue',
          evidence: 'Usability testing: average time to find target artifact reduced from 8min to 2min',
        },
        {
          painPoint: 'Low emotional engagement',
          addressed: 'Narrative-first approach prioritizes stories and human connection',
          evidence: 'Prototype feedback: 8/10 users felt emotional connection to stories',
        },
      ],
    },

    technicalReflection: {
      promptsUsed: [
        'Generate a compelling 30-second narrative for [artifact] that appeals to [audience type]',
        'What historical context would a [persona] find most interesting about [artifact]?',
        'Create accessibility-friendly alternatives to [visual description]',
        'Draft 3 content depth levels (Quick, Medium, Deep) for [artifact]',
      ],
      verificationMethods: [
        'Persona-based cognitive walkthrough: Did each persona accomplish their goals?',
        'Usability testing with 10 participants representing target audience diversity',
        'Accessibility audit: WCAG 2.1 AA compliance check',
        'Comparative analysis: Traditional tour experience vs. AI-personalized experience',
        'Emotional response measurement: Post-interaction sentiment surveys',
      ],
      ethicalConsiderations: [
        {
          id: 'ethical-1',
          category: 'Data Privacy',
          consideration: 'AI recommendation engine collects user preferences and behavior data.',
          approach: 'Implement on-device learning where possible; anonymize and encrypt collected data; transparent privacy policies; opt-out options for personalization.',
        },
        {
          id: 'ethical-2',
          category: 'Bias & Representation',
          consideration: 'AI-generated narratives could perpetuate historical biases or unequal representation of cultural narratives.',
          approach: 'Diverse curatorial team reviews all AI-generated content; include multiple perspectives on each artifact; highlight contested histories; regular bias audits.',
        },
        {
          id: 'ethical-3',
          category: 'Accessibility',
          consideration: 'Digital experience may exclude visitors with limited digital literacy or access.',
          approach: 'Provide alternative analog experience (printed guides); free WiFi in museum; staff training to assist with app usage; multi-language support.',
        },
        {
          id: 'ethical-4',
          category: 'Cultural Sensitivity',
          consideration: 'Some artifacts may be sacred or sensitive to descendant communities; AI storytelling must respect these considerations.',
          approach: 'Consult with descendant communities in narrative development; implement content warnings; respect requests for restricted access to certain artifacts.',
        },
      ] as EthicalConsideration[],
    } as TechnicalReflectionData,

    finalReflection: {
      learning: [
        'Personalization is only valuable when informed by deep user research; assumptions about what visitors want often miss the mark.',
        'Balancing automation (AI) with human curation is critical; pure algorithmic recommendations felt cold and corporate.',
        'Accessibility cannot be bolted on at the end; it must be a core design principle from the start.',
        'Ethical considerations around cultural representation and data privacy are not afterthoughts—they shape product direction.',
      ],
      evolution: 'This project shifted my design thinking from "How can we automate the tour experience?" to "How can we empower visitors to create their own meaningful learning journeys?" The human needs came first, and AI was a tool to serve those needs, not a feature to showcase.',
      futureDirections: [
        'Expand community contributions: Allow researchers and cultural experts to add their own narratives and perspectives.',
        'Enhanced accessibility: Develop partnerships with accessibility consultants for real-world testing with disabled visitors.',
        'Intergenerational learning paths: Design experiences that work for families with mixed ages and knowledge levels.',
        'Global cultural exchange: Adapt the model for museums in other countries to preserve and share diverse cultural narratives.',
      ],
    },

    references: {
      hciAndDesign: [
        'Norman, D. A. (2013). The Design of Everyday Things (Revised Edition)',
        'Brown, B. (2018). Dare to Lead: Brave Work',
        'Interaction Design Foundation. (2022). Human-Centered Design',
      ],
      culturalHeritage: [
        'ICOM Code of Ethics for Museums',
        'UNESCO Guidelines on Digital Preservation of Cultural Heritage',
      ],
      aiAndEthics: [
        'IEEE Ethically Aligned Design Initiative',
        'Buolamwini, J. (2020). Coded Gaze: Unmasking AI Bias in Facial Recognition',
      ],
      tools: [
        'Figma for design and prototyping',
        'Miro for collaborative synthesis',
        'Optimal Workshop for card sorting research',
        'UserTesting.com for usability testing',
      ],
    },
  },
};

// Helper function to get content by phase
export const getPhaseContent = (phase: 'overview' | 'research' | 'synthesis' | 'design' | 'reflection') => {
  return portfolioData[phase];
};
