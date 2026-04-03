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
  background: string;
  tagline: string;
  attitudes: string[];
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

export interface ScenarioGoal {
  personaId: string;
  label: string;
  scenario: string;
  goal: string;
}

export interface JourneyPhase {
  phase: string;
  activities: string[];
  thoughts: string[];
  emotions: number[];
  painPoints: string[];
  opportunities: string[];
}

// ===== PORTFOLIO DATA =====

export const portfolioData = {
  // Project Overview
  project: {
    title: 'Suzhou Maple Bridge',
    subtitle: 'A user-centered design journey for a cultural tourism experience',
    description:
      'An HCI case study that charts how we supported Maple Bridge visitors with calm, culturally grounded interactions—told through research, synthesis, and iterative concept evolution.',
  },

  // ===== PHASE 1: OVERVIEW =====
  overview: {
    problemSpace: {
      context:
        'Maple Bridge (Fengqiao) in Suzhou is steeped in Jiangnan stories, but many visitors leave without understanding why the bridges, canals, and gardens feel so meaningful.',
      
      painPoints: [
        'Language barriers leave visitors unsure of the Maple Bridge story',
        'Cultural context is missing from the signage, so the architecture feels abstract',
        'Visitors feel tethered to their phones instead of the water-town atmosphere',
      ],

      opportunity:
        'Design a context-aware, audio-first cultural companion that weaves Suzhou stories into each step, letting visitors stay present while still understanding the heritage.',
  
      artifacts: [
        {
          id: 'maple-bridge-context',
          src: '/placeholder.jpg',
          alt: 'Maple Bridge cultural site',
          caption: 'Maple Bridge as a cultural and historical landmark',
          type: 'image',
        },
      ] as Artifact[],
    },
  },

  // ===== PHASE 2: RESEARCH =====
  research: {
    findings: [
      {
        id: 'finding-lang',
        title: 'Language Friction Colors the Visit',
        description:
          'Most international guests cannot read the Maple Bridge signage, so the poetic qualities of the site feel hollow.',
        evidence:
          '12 of 15 research participants asked for translation support or audio narration',
        icon: 'Globe',
      },
      {
        id: 'finding-audio',
        title: 'Audio Feels Calmer Than Reading',
        description:
          'Visitors want to keep their eyes on the water-town scene and receive storytelling through sound.',
        evidence:
          'Interviews noted a clear preference for hands-free narration over scrolling through text',
        icon: 'Headphones',
      },
      {
        id: 'finding-planning',
        title: 'Pre-Visit Planning Builds Confidence',
        description:
          'Guests prefer to preview key bridges, gardens, and rest stops before arriving so they can relax in the moment.',
        evidence:
          '7 of 10 participants created mental routes before the visit and wished for curated checklists',
        icon: 'Calendar',
      },
      {
        id: 'finding-screen',
        title: 'Screen Fatigue Interrupts Presence',
        description:
          'Excessive phone switching pulls attention away from the architecture and feels like work.',
        evidence:
          'Visitors tapped their phones 18 times per 30-minute interval, often to translate static text',
        icon: 'Smartphone',
      },
    ],

    personas: [
      {
        id: 'persona-1',
        name: 'Sophie Ren',
        role: 'Curious Cultural Explorer',
        background: 'International visitor who speaks limited Mandarin, visiting Maple Bridge for the first time.',
        tagline: 'I want to feel the story without losing the calm.',
        attitudes: [
          'Believes narrative depth should come before pure facts',
          'Trusts guided audio more than dense text',
          'Sees technology as a quiet companion',
        ],

        goals: [
          'Understand the cultural and poetic meaning of Maple Bridge slowly',
          'Stay present in the garden-like atmosphere without fussing with translators',
          'Capture memorable vignettes to share with friends later',
        ],

        motivations: [
          'Values calm, sensory-rich experiences over checklists',
          'Wants depth in stories rather than data-dumps',
          'Open to technology if it feels respectful and quiet',
        ],

        painPoints: [
          'Unable to read Mandarin signage or poetry inscriptions',
          'Overwhelmed by switching between apps for translation and navigation',
          'Feels uncertain about where to focus attention',
        ],

        quote:
          'Being in such a poetic place, I want to breathe in the story without jumping between screens.',

        image: '/artifacts/persona-1.jpg',
      },

      {
        id: 'persona-2',
        name: 'Chen Wei',
        role: 'Atmosphere-First Visitor',
        background: 'Local guest who frequents Jiangnan water towns and seeks calm, mindful experiences.',
        tagline: 'I want a gentle nudge toward meaning, not a pushy tour.',
        attitudes: [
          'Prefers minimal interaction so the environment can breathe',
          'Avoids flashy gamification or noisy badges',
          'Responds to subtle cues that respect heritage',
        ],

        goals: [
          'Enjoy the scenery in a calm, uninterrupted way',
          'Receive context only when it feels aligned with the moment',
          'Keep a relaxed pace while still gaining insight about the culture',
        ],

        motivations: [
          'Appreciates craftsmanship and quiet rituals',
          'Wants to feel culturally grounded without kitschy theatrics',
          'Prefers optional, not mandatory, digital moments',
        ],

        painPoints: [
          'Crowds break the stillness he seeks',
          'Overly playful or gamified features feel out of place',
          'Push notifications pull him back to the phone',
          'Digital overlays that contradict the garden calm',
        ],

        quote:
          'A whispering story that respects the silence is more compelling than a flashy tour notification.',

        image: '/placeholder-user.jpg',
      },
    ] as PersonaData[],

    scenarioAndGoals: [
      {
        personaId: 'persona-1',
        label: 'Primary Persona Scenario',
        scenario:
          'Sophie arrives at Maple Bridge and feels the poetry of the canals, but the Chinese signage makes the stories feel locked behind a wall. She toggles between translation apps, which pulls her focus away from the architecture.',
        goal:
          'Enable her to understand the cultural meaning through calm, multilingual narration that keeps her eyes on the water-town scene.',
      },
      {
        personaId: 'persona-2',
        label: 'Secondary Persona Scenario',
        scenario:
          'Chen Wei returns for a quiet afternoon walk and wants to linger in the garden without gimmicky badges. He hopes for contextual cues that respect the atmosphere and offer optional depth if he changes his mind.',
        goal:
          'Provide soft guidance that honors the calm, with optional engagement cues that feel like seal-stamp notes rather than pushy prompts.',
      },
    ],

    journeyMap: {
      phases: [
        {
          phase: 'Before Visit',
          activities: [
            'Browse Maple Bridge stories and poems',
            'Pin bridges, alleys, and rest spots to visit',
            'Plan timing to avoid crowds',
          ],
          thoughts: [
            'Which parts of Maple Bridge are most essential?',
            'I wish I could preview the pacing without juggling apps.',
          ],
          emotions: [7, 6],
          painPoints: ['Language-limited online resources', 'Unclear pacing for the experience'],
          opportunities: [
            'Curated pre-visit planner with story highlights',
            'Downloadable audio queue referencing Jiangnan garden motifs',
          ],
        },
        {
          phase: 'During Visit',
          activities: [
            'Arrive and orient at the canal edges',
            'Listen to audio cues triggered by bridges',
            'Stroll between pavilions while soaking in the atmosphere',
          ],
          thoughts: [
            'I need calm guidance that blends with the hush',
            'How can I stay present while still understanding the context?',
          ],
          emotions: [6, 7, 7],
          painPoints: [
            'Crowded entrance areas',
            'Signage remains Mandarin-first',
            'Phone ringtones pull focus away from the water town',
          ],
          opportunities: [
            'Audio-first interactions with optional captions',
            'Beacon-triggered cultural cues echoing ink wash textures',
            'Minimal UI overlays that fade into jade and seal-red tones',
          ],
        },
        {
          phase: 'After Visit',
          activities: [
            'Reflect on impressions while sipping tea',
            'Share photos and stories with friends',
            'Look for ways to revisit meaningful details',
          ],
          thoughts: [
            'I want to keep these stories alive',
            'A little cultural keepsake would help me remember the journey',
          ],
          emotions: [8, 7],
          painPoints: [
            'Meaningful narratives fade without anchors',
            'No easy way to revisit layered stories',
          ],
          opportunities: [
            'Optional engagement layer for narrative rewards and cultural collectibles',
            'Post-visit keepsake referencing seal-stamp accents',
          ],
        },
      ],
      emotionalCurve: [
        { phase: 'Before Visit', emotion: 7.2 },
        { phase: 'Arrival', emotion: 6.3 },
        { phase: 'Exploration', emotion: 6.8 },
        { phase: 'Deep Engagement', emotion: 8.4 },
        { phase: 'Reflection', emotion: 7.5 },
      ],
    },
  },

  // ===== PHASE 3: SYNTHESIS =====
  synthesis: {
    keyInsights: [
      {
        id: 'insight-1',
        insight: 'Language friction dims cultural resonance',
        explanation:
          'Mandarin-first signage and static text leave international visitors unsure about the meaning of Maple Bridge, so the architecture loses its emotional depth.',
        artifact: {
          id: 'insight-visual-1',
          src: '/artifacts/insight-1.jpg',
          alt: 'Insight diagram showing audience diversity',
          type: 'diagram',
        },
      },
      {
        id: 'insight-2',
        insight: 'Audio-first guidance feels more respectful than dense text',
        explanation:
          'Research participants preferred listening to curated narratives over reading while wandering, keeping their focus on water-town vistas.',
      },
      {
        id: 'insight-3',
        insight: 'Pre-visit planning builds calm confidence',
        explanation:
          'Visitors want to preview bridges, gardens, and pacing before arriving so they can soak in the atmosphere without scrambling for logistics.',
        artifact: {
          id: 'insight-visual-3',
          src: '/artifacts/brainstorm-1.jpg',
          alt: 'Journey planning storyboard',
          type: 'diagram',
        },
      },
      {
        id: 'insight-4',
        insight: 'Optional engagement must feel like a cultural keepsake',
        explanation:
          'People welcome light engagement (collectibles, stories) if it respects the calm tone; heavy gamification feels disrespectful to the heritage setting.',
      },
    ] as InsightData[],

    insightToDesignMapping: [
      {
        id: 'map-1',
        insight: 'Language friction dims cultural resonance',
        decision: 'Multi-language narration with jade / seal cues',
        rationale:
          'Offer guided narration in Mandarin, English, and Japanese with visual cues referencing Suzhou gardens so visitors instantly connect words with place.',
        tradeoff: 'Greater translation effort and approvals vs. inclusive cultural resonance',
      },
      {
        id: 'map-2',
        insight: 'Audio-first guidance feels more respectful than dense text',
        decision: 'Audio-first interaction layer',
        rationale:
          'Deliver beacon-triggered audio storytelling with minimal text, keeping visitors’ eyes on the garden while still providing context.',
        tradeoff:
          'Audio risks competing with ambient sound if not balanced carefully vs. reducing screen time and cognitive load.',
      },
      {
        id: 'map-3',
        insight: 'Pre-visit planning builds calm confidence',
        decision: 'Pre-visit insight layer + optional AI cues',
        rationale:
          'Allow visitors to preview bridges, rest stops, and stories through a curated planner; AI softly recommends pacing without forcing automation.',
        tradeoff: 'Content logistics for planning vs. calmer, prepared visits aligned with guest intent.',
      },
      {
        id: 'map-4',
        insight: 'Optional engagement must feel like a cultural keepsake',
        decision: 'Soft engagement layer with cultural collectibles',
        rationale:
          'Introduce optional seal-stamp rewards, narrative transcripts, and community annotations so curiosity is honored without gamified noise.',
        tradeoff:
          'Less adrenaline-inducing than gamification vs. maintaining a respectful, contemporary heritage tone.',
      },
    ],

    designDecisions: [
      {
        id: 'decision-1',
        decision: 'Audio-first narration with calm visual cues',
        insight: 'insight-2',
        rationale:
          'Audio stories triggered by beacons keep visitors looking at the Suzhou scenery while contextual captions remain optional.',
        tradeoff:
          'Audio requires careful pacing so it does not compete with ambient sound vs. reducing screen dependence.',
      },
      {
        id: 'decision-2',
        decision: 'Multi-language storytelling with jade/seal visual hints',
        insight: 'insight-1',
        rationale:
          'Narration in multiple languages paired with jade-colored overlays and seal-inspired markers ensures international visitors grasp the stories.',
        tradeoff:
          'Translation and curation overhead vs. inclusive cultural resonance.',
      },
      {
        id: 'decision-3',
        decision: 'Pre-visit planner with optional AI nudges',
        insight: 'insight-3',
        rationale:
          'A structured pre-visit layer lets guests set intent and see recommended sequences; optional AI suggestions nudge pacing without overriding control.',
        tradeoff:
          'Managing user preferences and data vs. delivering a calm, prepared visit.',
      },
      {
        id: 'decision-4',
        decision: 'Optional engagement through cultural collectibles',
        insight: 'insight-4',
        rationale:
          'Post-visit layer offers cultural keepsakes, seal-stamp stories, and narrative rewards that guests can explore by choice.',
        tradeoff:
          'Less adrenaline than gamification vs. preserving a respectful, subdued tone.',
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
          description:
            'Visitors set their interests, ambient preferences, and schedule. AI surfaces poetic previews so they arrive calm and prepared with audio teasers.',
          keyFeatures: [
            'Interest & intention selector',
            'Knowledge level assessment',
            'Audio preview sequences',
            'Accessibility preferences',
          ],
        },
        {
          title: 'Situated Experience',
          description:
            'Beacon-triggered audio storytelling, context-aware navigation, and crowd intelligence keep visitors connected to the water-town rhythms.',
          keyFeatures: [
            'Audio storytelling with optional captions',
            'Context-aware navigation cues',
            'Crowd intelligence heatmap',
            'Note-taking & bookmarking',
          ],
        },
        {
          title: 'Optional Engagement',
          description:
            'Post-visit layer offers seal-stamp collectibles, narrative rewards, and community annotations for those who wish to dive deeper.',
          keyFeatures: [
            'Cultural collectible seals',
            'Narrative rewards & reflections',
            'Community contributions',
            'Visit history & learning path',
          ],
        },
      ],
    },
  },

  // ===== PHASE 5: REFLECTION =====
  reflection: {
    validationAndImpact: {
      originalPainPoints: [
        {
          painPoint: 'Language friction and inaccessible signage',
          addressed:
            'Multi-language narration and jade/seal visual cues help guests connect directly with the heritage context.',
          evidence: 'Prototype testing: 11/12 international participants reported clearer understanding.',
        },
        {
          painPoint: 'Excessive phone dependency',
          addressed: 'Audio-first interactions plus minimal UI reduce screen glances while still delivering meaning.',
          evidence: 'Testing: screen glances dropped 60% compared to the baseline experience.',
        },
        {
          painPoint: 'Lack of calm, meaningful reflection',
          addressed:
            'Pre-visit planning and optional cultural collectibles leave visitors with keepsake narratives to revisit later.',
          evidence: 'Post-visit interviews: 9/10 users felt more emotionally connected and able to recall stories.',
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
