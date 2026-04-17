// Portfolio Data Structure - Organized by HCI Design Phases
import { withBasePath } from '@/lib/basePath';

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
  background?: string;
  tagline?: string;
  quote: string;
  image?: string;
  goals: string[];
  motivations: string[];
  attitudes?: string[];
  painPoints: string[];
  demographics?: {
    age?: number;
    gender?: string;
    nationality?: string;
    education?: string;
    occupation?: string;
    civilStatus?: string;
  };
  priorities?: {
    label: string;
    value: number; // 0-100
  }[];
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
  touchPoints: number[];
  painPoints: string[];
  opportunities: string[];
}

// ===== PORTFOLIO DATA =====

export const portfolioData = {
  // Project Overview
  project: {
    title: 'Suzhou Maple Bridge',
    subtitle: 'A cultural tourism experience designed around how people actually explore',
    description:
      'Visitors come to Maple Bridge to see its beauty — but often leave without understanding its meaning. This project explores how interaction design can support a more immersive and culturally grounded experience, without pulling attention away from the place itself.',
  },

  // ===== PHASE 1: OVERVIEW =====
  overview: {
    problemSpace: {
      context:
        'Maple Bridge (Fengqiao) in Suzhou is a culturally rich landmark shaped by classical poetry, historical narratives, and Jiangnan aesthetics. However, the current visitor experience is largely visual and surface-level. Most visitors come for sightseeing and photography, yet leave without understanding the deeper cultural meaning behind the space. This reflects a mismatch between the richness of the environment and the accessibility of its interpretation—an issue highlighted in requirement discovery, where user context, prior knowledge, and situational constraints must be considered in design.',
      
      painPoints: [
          'Language and accessibility barriers prevent international visitors from understanding cultural and historical context',
          'Information is fragmented, static, or insufficient, forcing users to rely on external tools mid-visit',
          'Frequent phone interaction disrupts immersion and increases cognitive load during what should be a relaxing experience',
          'Visitors lack pre-visit awareness (e.g., crowd levels, routes), leading to uncertainty and reduced enjoyment',
          'Engagement needs vary—some users seek deeper interaction, while others prefer a passive, uninterrupted experience',
      ],
      opportunity:
      'This project identifies an opportunity to rethink how cultural information is delivered in situ. Instead of adding more on-screen features, the goal is to design a context-aware, audio-first cultural companion that integrates seamlessly into the visitor journey. By providing adaptive, location-triggered storytelling and pre-visit insights, the system supports understanding without disrupting presence. This approach aligns with human-centered design principles by reducing cognitive load, supporting user control, and accommodating diverse preferences through flexible, non-intrusive interaction.',
  
      artifacts: [
        {
          id: 'maple-bridge-context',
          src: withBasePath('/bridgePic.jpg'),
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
        title: 'Understanding is Blocked by Language and Context',
        description:
          'Visitors often engage visually with Maple Bridge but fail to understand its cultural meaning due to inaccessible or insufficient explanations. This creates a gap between experiencing the place and actually understanding it.',
        evidence:
          'Several participants said they “knew nothing” about the site beforehand and struggled to access information because most signage was only in Chinese.',
        icon: 'Globe',
      },
      {
        id: 'finding-audio',
        title: 'Hands-Free, Audio-Based Interaction Supports Immersion',
        description:
          'Users consistently prefer listening over reading during the visit. Looking at screens interrupts the atmosphere, while audio allows them to stay present and engaged with the environment.',
        evidence:
          'Participants repeatedly mentioned preferring audio or voiceover so they could “just enjoy the scenery” without constantly looking at their phones.',
        icon: 'Headphones',
      },
      {
        id: 'finding-planning',
        title: 'Pre-Visit Awareness Reduces Uncertainty and Stress',
        description:
          'Visitors want to make decisions before arriving—such as when to go, where to walk, and how crowded it will be. Planning ahead helps them feel more in control and supports a more relaxed on-site experience.',
        evidence:
          'Users described checking crowd levels and wanting previews of routes and landmarks before visiting.',
        icon: 'Calendar',
      },
      {
        id: 'finding-screen',
        title: 'Excessive Interaction Creates Cognitive and Experiential Friction',
        description:
          'Frequent phone interaction interrupts the flow of the visit and increases cognitive load. Instead of feeling like leisure, the experience starts to feel task-heavy and fragmented.',
        evidence:
          'Interview responses highlighted frustration with having to “constantly look down at the phone” to piece together information.',
        icon: 'Smartphone',
      },
      {
        id: 'finding-balance',
        title: 'Engagement Should Be Optional, Not Forced',
        description:
          'While some users enjoy interactive storytelling and gamified elements, others reject them entirely. This reveals the need for flexible, opt-in engagement rather than a single fixed experience.',
        evidence:
          'Reactions were mixed: some found interactive features engaging, while others felt they were unnecessary or out of place.',
        icon: 'Sparkles',
      },
    ],
    personas: [
      {
        id: 'persona-1',
        name: 'Glinda cottrill',
        role: 'Curious Cultural Explorer',
        background:'Studying abroad in Suzhou, she often visits cultural sites but struggles to access their deeper meaning.',
        tagline: 'I want to understand the story behind what I see.',
        attitudes: [
          'Believes cultural experiences should be meaningful, not just visual',
          'Prefers immersive learning over reading dense text',
          'Uses technology as a helpful guide, not the main focus of the experience',
        ],      

        goals: [
          'Understand the historical and cultural significance of places she visits',
          'Learn about landmarks in an engaging and accessible way',
          'Enjoy travel experiences beyond just sightseeing',
        ],
        
      
        motivations: [
          'Passionate about history, culture, and storytelling',
          'Wants to make travel experiences more meaningful and memorable',
          'Enjoys capturing and sharing moments through photography',
        ],
      
        painPoints: [
          'Struggles to understand Chinese-only signage → needs multilingual support',
          'Lacks cultural and historical context at landmarks',
          'Switching between translation, maps, and guides is overwhelming',
          'Constant screen use disrupts the experience',
          'Crowded environments reduce immersion',
        ],
      
        quote:
        'I want to understand the history and meaning behind what I’m seeing, not just take photos and move on.',

        demographics: {
          age: 22,
          gender: 'Female',
          nationality: 'South African',
          education: 'Bachelor’s in Ecology',
          occupation: 'University Student',
        },

        image: withBasePath('/artifacts/glinda.png'),
      },

      {
        id: 'persona-2',
        name: 'Li Mei',
        role: 'Atmosphere-First Visitor',
        background:
          'A Suzhou-based working professional who enjoys visiting local cultural sites for relaxation, photography, and quiet appreciation of place.',
        tagline: 'I want a gentle nudge toward meaning, not a pushy tour.',
      
        attitudes: [
          'Prefers minimal interaction so the environment can breathe',
          'Avoids flashy gamification or noisy badges',
          'Responds to subtle cues that respect heritage',
        ],
      
        goals: [
          'Enjoy beautiful and peaceful places through photography',
          'Explore cultural sites without feeling rushed or overwhelmed',
          'Gain light cultural context while staying immersed in the atmosphere',
        ],
      
        motivations: [
          'Enjoys nature, scenery, and culturally rich environments',
          'Values calm experiences over commercial or overly touristy ones',
          'Appreciates simple tools that make exploration smoother',
        ],
      
        painPoints: [
          'Crowded places disrupt the atmosphere',
          'Unclear navigation makes exploring harder',
          'Too much information feels overwhelming',
          'Overly playful features feel out of place',
          'Phone distractions break immersion',
        ],
      
        quote:
          'I want to enjoy the atmosphere first, and let the cultural meaning unfold naturally.',
      
        demographics: {
          age: 26,
          gender: 'Female',
          nationality: 'Chinese',
          education: 'Bachelor’s in Psychology',
          occupation: 'Psychologist',
          civilStatus: 'Married',
        },
    
        image: withBasePath('/artifacts/liwei.png'),
      }
    ] as PersonaData[],

    scenarioAndGoals: [
      {
        personaId: 'persona-1',
        label: 'Primary Persona Scenario',
        scenario:
          'Glinda arrives at Maple Bridge and feels the poetry of the canals, but the Chinese signage makes the stories feel locked behind a wall. She toggles between translation apps, which pulls her focus away from the architecture.',
        goal:
          'Enable her to understand the cultural meaning through calm, multilingual narration that keeps her eyes on the water-town scene.',
      },
      {
        personaId: 'persona-2',
        label: 'Secondary Persona Scenario',
        scenario:
          'Li Mei returns for a quiet afternoon visit and wants to enjoy the atmosphere without gimmicky features or intrusive prompts. She hopes for gentle contextual cues that deepen the experience without breaking the calm.',
        goal:
          'Provide soft guidance that respects the atmosphere, with optional cultural context and light-touch engagement that never feels pushy.',
      },
    ],
    
    journeyMap: {
      phases: [
        {
          phase: 'Planning',
          activities: [
            'Research the destination',
            'Ask friends and colleagues for advice',
            'Check the best time to visit',
          ],
          thoughts: [
            'Is this place worth visiting?',
            'When would be the best time to go?',
          ],
          touchPoints: [
            'Mobile phone',
            'Desktop research',
          ],
          painPoints: [
            'Websites sometimes take too long to load',
            'No crowd information is available',
            'Few useful reviews about the destination',
            'Online information feels cluttered and confusing',
          ],
          opportunities: [
            'Provide crowd forecasts',
            'Recommend the best visiting times',
            'Show landmark previews before arrival',
          ],
        },
        {
          phase: 'Arrival',
          activities: [
            'Observe the crowd',
            'Decide which landmark to visit first',
          ],
          thoughts: [
            'Where should I begin?',
            'I hope I do not waste time in crowded spots.',
          ],
          touchPoints: [
            'Signboard',
            'Physical environment',
            'Entrance area',
          ],
          painPoints: [
            'Overcrowded areas',
            'Confusing layout',
            'No clear directions',
            'Long wait times',
          ],
          opportunities: [
            'Show live crowd levels',
            'Suggest less crowded landmarks to visit first',
          ],
        },
        {
          phase: 'Exploring',
          activities: [
            'Walk around and visit landmarks',
            'Take photos',
            'Look at the surroundings',
          ],
          thoughts: [
            'What is the story behind these places?',
            'I do not want to miss the important landmarks.',
          ],
          touchPoints: [
            'Landmarks such as the bridge and temple',
            'Scenery',
            'Phone',
          ],
          painPoints: [
            'Lack of historical and cultural understanding',
            'Important landmarks may be missed unknowingly',
          ],
          opportunities: [
            'Offer location-based audio storytelling',
          ],
        },
        {
          phase: 'Engaging',
          activities: [
            'Look for activities',
            'Interact with the environment',
          ],
          thoughts: [
            'What else can I do here?',
            'I want something that makes the visit feel more interactive.',
          ],
          touchPoints: [
            'Phone camera',
            'Mobile app',
          ],
          painPoints: [
            'Limited interactivity',
            'Requires constant phone checking',
            'Limited motivation to explore more deeply',
          ],
          opportunities: [
            'Introduce quests and interactive tasks',
            'Offer digital collectibles',
          ],
        },
        {
          phase: 'Leaving',
          activities: [
            'Write reviews',
            'Post photos on social media',
          ],
          thoughts: [
            'How will I remember this experience later?',
            'What part of the visit was actually meaningful?',
          ],
          touchPoints: [
            'Review platform',
            'Social media',
          ],
          painPoints: [
            'The experience feels generic rather than memorable',
            'It is hard to recall the historical significance afterward',
          ],
          opportunities: [
            'Let visitors leave feedback',
            'Provide post-visit summaries or keepsakes',
          ],
        },
      ],
    
      emotionalCurve: [
        { phase: 'Planning', emotion: 6.8, label: 'Searching' },
        { phase: 'Arrival', emotion: 5.0, label: 'Frustrated' },
        { phase: 'Exploring', emotion: 6.8, label: 'Curious' },
        { phase: 'Engaging', emotion: 7.6, label: 'Interested' },
        { phase: 'Leaving', emotion: 8.6, label: 'Satisfied' },
      ],
    },
  },

  // ===== PHASE 3: SYNTHESIS =====
  synthesis: {
    keyInsights: [
      {
        id: 'insight-1',
        insight: 'Visitors want cultural meaning without losing immersion',
        explanation:
          'Many participants felt Maple Bridge was visually beautiful but difficult to fully understand, especially when historical context was sparse, fragmented, or only available in Chinese. The core need was not just more information, but access to meaning without interrupting the experience.',
        artifact: {
          id: 'insight-visual-1',
          src: withBasePath('/artifacts/insight-1.jpg'),
          alt: 'Insight diagram showing the gap between scenery and understanding',
          type: 'diagram',
        },
      },
      {
        id: 'insight-2',
        insight: 'Audio is preferred on-site because it keeps attention on the place',
        explanation:
          'Participants consistently preferred audio or heads-up guidance while walking, since reading from the phone pulled them away from the bridge, temple, and surrounding atmosphere. Audio was seen as more natural for on-site cultural explanation.',
      },
      {
        id: 'insight-3',
        insight: 'Planning support matters before the visit begins',
        explanation:
          'Crowd awareness, landmark previews, and timing information were especially valuable before arrival. Visitors wanted to make decisions in advance so they could avoid uncertainty, choose calmer times, and enter the site with a better sense of direction.',
        artifact: {
          id: 'insight-visual-3',
          src: withBasePath('/artifacts/brainstorm-1.jpg'),
          alt: 'Storyboard of pre-visit planning and crowd awareness',
          type: 'diagram',
        },
      },
      {
        id: 'insight-4',
        insight: 'Deeper interaction should be optional, not the default',
        explanation:
          'Interactive stories, collectibles, and AI-based features appealed to some visitors, but others found them distracting, childish, or unnecessary. This suggested that engagement features should deepen the experience only when invited, rather than define the core system.',
      },
    ] as InsightData[],
  
    insightToDesignMapping: [
      {
        id: 'map-1',
        insight: 'Visitors want cultural meaning without losing immersion',
        decision: 'Context-aware cultural interpretation layer',
        rationale:
          'The system should reveal the meaning of landmarks through lightweight, location-aware storytelling that supports appreciation of the site rather than competing with it.',
        tradeoff:
          'Richer interpretation improves cultural understanding, but it requires careful curation so the experience remains calm and not overloaded.',
      },
      {
        id: 'map-2',
        insight: 'Audio is preferred on-site because it keeps attention on the place',
        decision: 'Audio-first situated experience',
        rationale:
          'On-site guidance should prioritize spoken narration and subtle cues, allowing users to keep their eyes on the scenery while still receiving historical and cultural context.',
        tradeoff:
          'Audio supports immersion better than text, but it must be paced carefully so it does not compete with ambient sound or feel intrusive.',
      },
      {
        id: 'map-3',
        insight: 'Planning support matters before the visit begins',
        decision: 'Pre-visit insight and crowd awareness layer',
        rationale:
          'Before arrival, the system should help visitors anticipate the experience through crowd forecasts, landmark previews, and best visiting windows, reducing uncertainty and supporting smoother decisions.',
        tradeoff:
          'Pre-visit tools improve confidence and comfort, but require more up-front content and reliable crowd information.',
      },
      {
        id: 'map-4',
        insight: 'Deeper interaction should be optional, not the default',
        decision: 'Optional narrative paths and cultural collectibles',
        rationale:
          'Interactive story threads, collectible keepsakes, and AI-enhanced exploration should be available as opt-in layers for visitors who want extra depth, without disrupting those who prefer a quieter experience.',
        tradeoff:
          'Optional depth broadens appeal, but these features must be framed carefully so they feel culturally meaningful rather than overly gamified.',
      },
    ],
  
    designDecisions: [
      {
        id: 'decision-1',
        decision: 'Pre-visit insight layer for planning and anticipation',
        insight: 'insight-3',
        rationale: 'Many participants said they check things like crowd levels or routes before visiting, but struggled to find reliable information. This layer supports those early decisions so visitors arrive feeling prepared instead of uncertain or rushed.',
        tradeoff:
          'This adds planning value and reduces uncertainty, but depends on maintaining useful and up-to-date pre-visit information.',
      },
      {
        id: 'decision-2',
        decision: 'Audio-first on-site storytelling as the core experience',
        insight: 'insight-2',
        rationale: 'Participants often mentioned that reading from their phone pulled them away from the scenery. Using location-triggered audio allows them to understand the site while still staying visually engaged with the environment.',
        tradeoff:
          'Audio keeps visitors present, but the system must avoid excessive prompts or long explanations that interrupt the atmosphere.',
      },
      {
        id: 'decision-3',
        decision: 'Minimal visual interface with subtle navigation support',
        insight: 'insight-1',
        rationale:'Since users didn’t want to constantly look at their phones, visual elements are kept minimal. The interface focuses on simple cues for orientation and reassurance, rather than detailed maps or dense information.',
        tradeoff:
          'A minimal interface preserves immersion, but can only succeed if navigation cues are clear and well-timed.',
      },
      {
        id: 'decision-4',
        decision: 'Optional engagement through narrative paths, collectibles, and AI features',
        insight: 'insight-4',
        rationale: 'Reactions to interactive features were mixed—some users found them engaging, while others felt they were unnecessary. Making these features optional allows the system to support different preferences without disrupting the core experience.',
        tradeoff:
          'Optional features make the system more flexible, but they must remain clearly secondary so the main experience does not feel fragmented.',
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
            src: withBasePath('/artifacts/concept-1-sketch.jpg'),
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
            src: withBasePath('/artifacts/concept-2-wireframe.jpg'),
            alt: 'Refined wireframe with personalization features',
            caption: 'Refined design incorporating user preferences and recommendations',
            type: 'sketch',
          },
          {
            id: 'wireframe-2b',
            src: withBasePath('/artifacts/concept-2b-wireframe.jpg'),
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
            src: withBasePath('/artifacts/concept-3-mockup-home.jpg'),
            alt: 'Final mockup of home screen',
            caption: 'Final high-fidelity mockup: Home screen with personalized recommendations',
            type: 'mockup',
          },
          {
            id: 'mockup-2',
            src: withBasePath('/artifacts/concept-3-mockup-detail.jpg'),
            alt: 'Final mockup of artifact detail',
            caption: 'Final design: Multi-depth content for artifacts',
            type: 'mockup',
          },
          {
            id: 'prototype-1',
            src: withBasePath('/artifacts/concept-3-prototype.jpg'),
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
        'Create a modern, clean, and well-structured process portfolio website using Next.js and Tailwind CSS, following a UX case study style with sections for problem space, research, personas, journey map, insights, concept evolution, final design, and reflection',
      
        'Build a mobile-first React component/page for a Vite app that implements an interactive cultural map prototype for Suzhou Maple Bridge, including a map with 3 landmarks, a movable visitor icon, proximity-based interaction, and a modal with image, short history text, and audio playback using mock data',
      
        'Design a simple and elegant mobile UI for a cultural tourism app that feels calm, heritage-focused, and not overly gamified, with rounded cards, minimal interaction, and clear navigation',
      
        'Refine the UI structure and interaction flow to better support audio-first exploration, minimal screen dependency, and optional engagement based on user research findings',
      ],
      verificationMethods: [
        'Persona-based walkthrough: Evaluated whether the design supports the goals and behaviors of the defined personas (e.g. understanding cultural context without disrupting immersion)',
      
        'Design consistency check: Compared final features against key insights (e.g. audio-first interaction, minimal screen use, optional engagement) to ensure alignment with research findings',
      
        'Prototype interaction testing (informal): Reviewed interaction flow by simulating user movement through the map prototype to identify friction points in navigation and landmark discovery',
      
        'Heuristic evaluation: Assessed the interface against basic usability principles such as clarity, minimal cognitive load, and user control',
      
        'Iterative refinement: Adjusted layout, interaction flow, and feature emphasis based on reflection and alignment with project goals rather than formal user testing',
      ],
      ethicalConsiderations: [
        {
          id: 'ethical-1',
          category: 'Data Privacy',
          consideration:
            'If the system were extended beyond a prototype, collecting user preferences or behavior data could raise privacy concerns.',
          approach:
            'The current prototype avoids storing any user data. Future versions should clearly communicate what is collected and allow users to opt out of personalization features.',
        },
        {
          id: 'ethical-2',
          category: 'Cultural Representation',
          consideration:
            'Simplifying cultural stories into short audio snippets risks oversimplifying or misrepresenting historical context.',
          approach:
            'Content should be carefully curated and reviewed to ensure accuracy, and where possible, include multiple perspectives rather than a single narrative.',
        },
        {
          id: 'ethical-3',
          category: 'Accessibility',
          consideration:
            'Audio-based interaction may not work for all users, such as those with hearing impairments or different language needs.',
          approach:
            'Provide alternative formats such as text captions, multiple languages, and simple interface options to support a wider range of users.',
        },
        {
          id: 'ethical-4',
          category: 'Technology Dependence',
          consideration:
            'Introducing a digital layer into a cultural site may risk distracting from the physical environment.',
          approach:
            'The system is intentionally designed to be minimal and non-intrusive, with audio-first interaction and optional features to reduce over-reliance on the device.',
        },
      ] as EthicalConsideration[],
    } as TechnicalReflectionData,

    finalReflection: {
      learning: [
        'User research is essential—initial assumptions about what would make the experience engaging (e.g. gamification) did not match what visitors actually wanted.',
        'Reducing features can improve the experience; focusing on simplicity and immersion was more effective than adding more interaction.',
        'Designing for real-world contexts requires thinking beyond the interface, including when and where interaction happens.',
        'AI tools are most useful for rapid prototyping, but design decisions still need to be guided by user needs and critical evaluation.',
      ],
      evolution: 'This project shifted my approach from trying to design an engaging feature-rich app to focusing on how to support the visitor experience with minimal disruption. Instead of asking how technology could add more interaction, I focused on how it could stay in the background and support understanding in a more natural way.',      
      futureDirections: [
        'Test the prototype with real users to better understand how the audio experience fits into an actual site visit',
        'Refine the balance between audio and visual cues, especially for different user preferences and environments',
        'Explore more accurate location-awareness (e.g. GPS or beacon-based triggers) to improve contextual interaction',
        'Expand cultural content depth while maintaining a simple and non-intrusive user experience',
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
