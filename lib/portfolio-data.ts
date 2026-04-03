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
      context:
        'Maple Bridge (Fengqiao) in Suzhou is a culturally significant site associated with classical poetry and historical narratives. However, many visitors struggle to understand its meaning due to limited, static, and language-restricted information.',
      
      painPoints: [
        'Lack of accessible cultural context for first-time visitors',
        'Chinese-only signage creates barriers for international tourists',
        'Understanding requires reading, which disrupts immersion in the environment',
        'Visitors rely on multiple apps (maps, translation, search), increasing cognitive load',
        'Crowd conditions and unclear navigation reduce comfort and experience quality',
      ],
  
      opportunity:
        'Design a context-aware, audio-first cultural companion that delivers meaningful storytelling at the right time, without interrupting the visitor’s immersive experience.',
  
      artifacts: [
        {
          id: 'maple-bridge-context',
          src: '/artifacts/maple-bridge.jpg',
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
        id: 'finding-1',
        title: 'Lack of Prior Knowledge',
        description:
          'Most visitors have little to no prior knowledge of Maple Bridge before visiting.',
        evidence:
          'Consistently reported across both international and domestic participants',
        icon: 'Lightbulb',
      },
      {
        id: 'finding-2',
        title: 'Language Barriers Limit Understanding',
        description:
          'Chinese-only signage prevents international visitors from accessing cultural meaning.',
        evidence:
          'Observed across multiple interview participants',
        icon: 'Globe',
      },
      {
        id: 'finding-3',
        title: 'Users Prefer Audio Over Reading',
        description:
          'Visitors prefer listening to information rather than reading while walking.',
        evidence:
          'Participants expressed preference for audio-based guidance',
        icon: 'Volume2',
      },
      {
        id: 'finding-4',
        title: 'Phone Use Disrupts Immersion',
        description:
          'Switching between apps increases cognitive load and reduces engagement with the environment.',
        evidence:
          'Observed behavior during visits and reported in interviews',
        icon: 'AlertCircle',
      },
    ],

    personas: [
      {
        id: 'persona-1',
        name: 'Karen',
        role: 'Curious Cultural Explorer',
        demographics:
          '23, international student, first-time visitor, moderate tech user',
    
        goals: [
          'Understand the cultural and historical meaning of Maple Bridge',
          'Navigate the site easily without confusion',
          'Enjoy the environment without constantly checking her phone',
          'Have a meaningful and memorable cultural experience',
        ],
    
        motivations: [
          'Wants travel to feel meaningful rather than superficial',
          'Interested in stories behind places, not just visuals',
          'Wants to capture photos with cultural significance',
          'Open to technology only if it is non-intrusive',
        ],
    
        painPoints: [
          'Has little to no prior knowledge before visiting',
          'Cannot understand Chinese signage',
          'Feels she may miss important cultural meaning',
          'Needs to switch between apps (maps, translation, search)',
          'Phone usage interrupts immersion in the environment',
        ],
    
        quote:
          'I want to understand the cultural meaning of the place—but I don’t want to keep looking at my phone.',
    
        image: '/artifacts/persona-karen.jpg',
      },
    
      {
        id: 'persona-2',
        name: 'Chen Wei',
        role: 'Atmosphere-First Visitor',
        demographics:
          '25, local visitor, casual traveler, experience-focused',
    
        goals: [
          'Enjoy the scenery in a calm and uninterrupted way',
          'Avoid crowded or stressful areas',
          'Engage with cultural information only when desired',
        ],
    
        motivations: [
          'Values atmosphere and emotional experience over detailed learning',
          'Prefers minimal interaction with technology during visits',
          'Wants flexibility and personal pace',
        ],
    
        painPoints: [
          'Crowded environments reduce immersion',
          'Too much interaction disrupts the experience',
          'Digital features often feel intrusive or unnecessary',
          'Gamified features feel out of place in cultural settings',
        ],
    
        quote:
          'I prefer to just enjoy the atmosphere without being interrupted.',
      },
    ] as PersonaData[],

    scenarioAndGoal: {
      scenario:
        'Karen visits Maple Bridge in the afternoon. She sees the bridge and surrounding landmarks but does not understand their cultural significance. The available signage is in Chinese, and she struggles to interpret it. She briefly searches online but becomes distracted and stops engaging with the environment. She leaves feeling that she has seen the place, but not truly understood it.',
    
      goal:
        'Enable visitors to understand the cultural meaning of Maple Bridge through accessible, well-timed, and non-intrusive guidance that preserves immersion.',
    
      successMetrics: [
        'Users report improved understanding of cultural significance',
        'Reduced need to switch between external apps',
        'Users spend more time engaging with the physical environment rather than screens',
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
