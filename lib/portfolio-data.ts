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
  derivedFrom?: string[]; // requirements or research IDs
  leadsTo?: string[]; // design goals or decisions
}

export interface DesignDecision {
  id: string;
  decision: string;
  insight: string; // Links to InsightData.id
  rationale: string;
  tradeoff?: string;
  linkedRequirements?: string[];
  linkedDesignGoals?: string[];
  linkedEvaluations?: string[];
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
  aiReflection?: AIReflection;
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

// ===== TRACEABILITY CORE TYPES =====

export interface Requirement {
  id: string;
  description: string;
  source: 'research' | 'persona' | 'journey' | 'observation';
  evidence: string;
  priority: 'high' | 'medium' | 'low';
  linkedDesignGoals?: string[];
}

export interface DesignGoal {
  id: string;
  description: string;
  linkedRequirements: string[];
  linkedDecisions?: string[];
}

export interface Evaluation {
  id: string;
  method:
    | 'interview'
    | 'heuristic'
    | 'simulation'
    | 'prototype testing'
    | 'walkthrough';
  context: string;
  findings: string;
  evidence: string;
  linkedDesignDecisions: string[];
  iterationImpact: string;
  participants?: number;
}

export interface IterationChange {
  id: string;
  iteration: number;
  title: string;
  trigger: {
    type: 'requirement' | 'evaluation' | 'insight' | 'constraint';
    refId: string;
    description: string;
  };
  whatChanged: string;
  whyChanged: string;
  evidence: string;
  affectedDesignDecisions?: string[];
  affectedRequirements?: string[];
}

export interface AIReflection {
  toolsUsed: string[];
  prompts: string[];
  whatWorked: string[];
  whatFailed: string[];
  impactOnDesign: string[];
  limitationsObserved: string;
}

// ===== PORTFOLIO DATA =====

export const portfolioData = {
  // Project Overview
  project: {
    title: 'Suzhou Maple Bridge',
    subtitle: 'A cultural tourism experience designed around how people actually explore.',
    description:
      'Visitors come to Maple Bridge to see its beauty — but often leave without understanding its meaning. This project explores how interaction design can support a more immersive and culturally grounded experience, without pulling attention away from the place itself.',
  },

  // ===== PHASE 1: OVERVIEW =====
  overview: {
    problemSpace: {
      context:
        'Maple Bridge (Fengqiao) in Suzhou is a culturally rich landmark shaped by classical poetry, historical narratives, and Jiangnan aesthetics (Suzhou Municipal People’s Government, 2021). However, the current visitor experience is largely visual and surface-level. Most visitors come for sightseeing and photography, yet leave without understanding the deeper cultural meaning behind the space. This shows a mismatch between the richness of the environment and the accessibility of its interpretation—an issue highlighted in requirement discovery, where user context, prior knowledge, and situational constraints must be considered in design.',
      
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
          'Visitors often engage visually with Maple Bridge but fail to understand its cultural meaning due to inaccessible or insufficient explanations. This creates a gap between experiencing the place and actually understanding it. This shows a challenge in cultural heritage systems, where delivering contextual knowledge in an accessible and engaging way remains a key design problem (Casillo et al., 2020).',
        evidence:
          'Several participants said they “knew nothing” about the site beforehand and struggled to access information because most signage was only in Chinese.',
        icon: 'Globe',
      },
      {
        id: 'finding-audio',
        title: 'Hands-Free, Audio-Based Interaction Supports Immersion',
        description:
          'Users consistently prefer listening over reading during the visit. Looking at screens interrupts the atmosphere, while audio allows them to stay present and engaged with the environment. This aligns with prior HCI research showing that immersive, low-friction interaction improves user experience and engagement in cultural environments (Xue et al., 2025).',
        evidence:
          'Participants repeatedly mentioned preferring audio or voiceover so they could “just enjoy the scenery” without constantly looking at their phones.',
        icon: 'Headphones',
      },
      {
        id: 'finding-planning',
        title: 'Pre-Visit Awareness Reduces Uncertainty and Stress',
        description:
          'Visitors want to make decisions before arriving—such as when to go, where to walk, and how crowded it will be. Planning ahead helps them feel more in control and supports a more relaxed on-site experience. Providing this kind of foresight aligns with research on crowd monitoring and spatial awareness systems, which support better decision-making and reduce uncertainty in public environments (Zhang et al., 2025).',
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
          'While some users enjoy interactive storytelling and gamified elements, others reject them entirely. This supports existing research suggesting that gamification in cultural heritage must balance engagement with meaningful learning, rather than prioritizing game mechanics alone (Peng et al., 2023; Pasca et al., 2021).',
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
          'Many participants felt Maple Bridge was visually beautiful but difficult to fully understand, especially when historical context was sparse, fragmented, or only available in Chinese. The core need was not just more information, but access to meaning without interrupting the experience. This aligns with research on cultural heritage chatbots, where context-aware systems deliver information dynamically without requiring explicit user effort (Casillo et al., 2020; Sperlì, 2021).',
        derivedFrom: ['R1', 'R4', 'finding-lang', 'finding-screen'],
        leadsTo: ['DG1', 'DG2', 'decision-3'],
      },
      {
        id: 'insight-2',
        insight: 'Audio is preferred on-site because it keeps attention on the place',
        explanation:
          'Participants consistently preferred audio or heads-up guidance while walking, since reading from the phone pulled them away from the environment. This supports prior findings that immersive and responsive interaction modalities improve user engagement in cultural tourism contexts (Xue et al., 2025).',
        derivedFrom: ['R1', 'finding-audio'],
        leadsTo: ['DG1', 'Decision-2'],
      },
      {
        id: 'insight-3',
        insight: 'Planning support matters before the visit begins',
        explanation:
          'Crowd awareness, landmark previews, and timing information were especially valuable before arrival. Visitors wanted to make decisions in advance so they could avoid uncertainty, choose calmer times, and enter the site with a better sense of direction.',
        derivedFrom: ['R2', 'finding-planning', 'persona-2'],
        leadsTo: ['DG3', 'decision-1'],
        // artifact: {
        //   id: 'insight-visual-3',
        //   // src: withBasePath('/artifacts/brainstorm-1.jpg'),
        //   alt: 'Storyboard of pre-visit planning and crowd awareness',
        //   type: 'diagram',
        // },
      },
      {
        id: 'insight-4',
        insight: 'Deeper interaction should be optional, not the default',
        explanation:
          'Interactive stories, collectibles, and AI-based features appealed to some visitors, but others found them distracting, childish, or unnecessary. This suggested that engagement features should deepen the experience only when invited, rather than define the core system.',
        derivedFrom: ['R3', 'finding-balance'],
        leadsTo: ['DG4', 'decision-4'],
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
        linkedRequirements: ['R2'],
        linkedDesignGoals: ['DG3'],
        linkedEvaluations: [],
      },
      {
        id: 'Decision-2',
        decision: 'Audio-first on-site storytelling as the core experience',
        insight: 'insight-2',
        rationale: 'Participants often mentioned that reading from their phone pulled them away from the scenery. Using location-triggered audio allows them to understand the site while still staying visually engaged with the environment.',
        tradeoff:
          'Audio keeps visitors present, but the system must avoid excessive prompts or long explanations that interrupt the atmosphere.',
        linkedRequirements: ['R1', 'R4'],
        linkedDesignGoals: ['DG1', 'DG2'],
        linkedEvaluations: ['E1'],
      },
      {
        id: 'decision-3',
        decision: 'Minimal visual interface with subtle navigation support',
        insight: 'insight-1',
        rationale:'Since users didn’t want to constantly look at their phones, visual elements are kept minimal. The interface focuses on simple cues for orientation and reassurance, rather than detailed maps or dense information.',
        tradeoff:
          'A minimal interface preserves immersion, but can only succeed if navigation cues are clear and well-timed.',
        linkedRequirements: ['R1', 'R4'],
        linkedDesignGoals: ['DG2'],
        linkedEvaluations: ['E1'],
      },
      {
        id: 'decision-4',
        decision: 'Optional engagement through narrative paths, collectibles, and AI features',
        insight: 'insight-4',
        rationale: 'Reactions to interactive features were mixed—some users found them engaging, while others felt they were unnecessary. Making these features optional allows the system to support different preferences without disrupting the core experience.',
        tradeoff:
          'Optional features make the system more flexible, but they must remain clearly secondary so the main experience does not feel fragmented.',
        linkedRequirements: ['R3'],
        linkedDesignGoals: ['DG4'],
        linkedEvaluations: ['E2'],
      },
    ],
  },

  // ===== TRACEABILITY LAYER =====
  requirements: [
    {
      id: 'R1',
      description: 'Users need cultural understanding without disrupting immersion during the visit.',
      source: 'research',
      evidence: 'Users prefer audio and minimal screen interaction during exploration.',
      priority: 'high',
      linkedDesignGoals: ['DG1', 'DG2'],
    },
    {
      id: 'R2',
      description: 'Users need pre-visit awareness of crowd levels and navigation clarity.',
      source: 'persona',
      evidence: 'Users repeatedly check crowd levels and planning information before arrival.',
      priority: 'high',
      linkedDesignGoals: ['DG3'],
    },
    {
      id: 'R3',
      description: 'Interaction should be optional and not enforced for all users.',
      source: 'research',
      evidence: 'Mixed responses to gamification and interactive features.',
      priority: 'medium',
      linkedDesignGoals: ['DG4'],
    },
    {
      id: 'R4',
      description: 'The system should reduce cognitive load caused by switching apps and translation tools.',
      source: 'observation',
      evidence: 'Users switch between maps, translation, and camera apps frequently.',
      priority: 'high',
      linkedDesignGoals: ['DG2'],
    },
  ] as Requirement[],

  designGoals: [
    {
      id: 'DG1',
      description: 'Support immersive cultural understanding through audio-first interaction.',
      linkedRequirements: ['R1'],
      linkedDecisions: ['Decision-2'],
    },
    {
      id: 'DG2',
      description: 'Minimise cognitive load by reducing screen dependency.',
      linkedRequirements: ['R1', 'R4'],
      linkedDecisions: ['Decision-2', 'decision-3'],
    },
    {
      id: 'DG3',
      description: 'Improve pre-visit planning and situational awareness.',
      linkedRequirements: ['R2'],
      linkedDecisions: ['decision-1'],
    },
    {
      id: 'DG4',
      description: 'Enable optional engagement without forcing interaction.',
      linkedRequirements: ['R3'],
      linkedDecisions: ['decision-4'],
    },
  ] as DesignGoal[],

  evaluation: [
    {
      id: 'E1',
      method: 'prototype testing',
      context: 'Audio-first navigation prototype walkthrough',
      findings:
        'When audio narration was active, users spent noticeably less time looking at their phones and described feeling more absorbed in the environment. Several mentioned that they almost forgot they were using an app at all — which felt like the right kind of feedback.',
      evidence:
        'Across informal walkthroughs, participants generally reached for their phones less when audio was guiding them compared to the visual-only version. A few specifically said they felt like they could "actually look around" rather than manage the interface. These were small sessions and not formally measured, but the pattern was consistent enough to shape the final direction.',
      linkedDesignDecisions: ['Decision-2', 'decision-3'],
      iterationImpact:
        'Confirmed that audio should be the primary channel and pushed the visual interface toward being a support layer rather than the main event.',
      participants: 12,
    },
    {
      id: 'E2',
      method: 'interview',
      context: 'Post-visit reflection interviews',
      findings:
        'Most participants cared far more about whether the visit felt meaningful than whether it was interactive. The features that stuck with people were the ones that helped them understand something — not the ones that gave them something to do.',
      evidence:
        'In post-visit conversations,  many participants mentioned being able to recall specific stories or facts from the site, which they contrasted with previous visits where they mostly just took photos. A few actively said they would have found badges or quest mechanics out of place. These interviews were informal rather than structured, but the direction of feedback was clear and consistent across most participants.',
      linkedDesignDecisions: ['decision-4'],
      iterationImpact:
        'Led directly to scaling back the gamification layer, not because it was technically difficult, but because it didn’t seem to match what visitors actually wanted.',
    },
  ] as Evaluation[],

  iterations: [
    {
      id: 'I1',
      iteration: 1,
      title: 'Feature-heavy concept to reduced-complexity companion',
      trigger: {
        type: 'evaluation',
        refId: 'E2',
        description: 'Interview feedback showed that excessive features weakened immersion.',
      },
      whatChanged:
        'Removed heavy gamified layers, narrowed the interaction model, and re-centered the concept around calm guidance.',
        whyChanged: 'The initial version tried to combine too many ideas (quests, rewards, AI guides), which looked promising but felt overwhelming in testing. The change was not about optimisation, but about removing features that were not actually helping the experience.',
        evidence: 'Post-visit interviews and heuristic reflection both pointed to overload in the first concept.',
      affectedDesignDecisions: ['decision-4'],
      affectedRequirements: ['R1', 'R3', 'R4'],
    },
    {
      id: 'I2',
      iteration: 2,
      title: 'Added a clearer pre-visit planning layer',
      trigger: {
        type: 'requirement',
        refId: 'R2',
        description: 'Planning needs became more explicit through persona and journey-map evidence.',
      },
      whatChanged:
        'Introduced a dedicated pre-visit layer for crowd awareness, landmark previews, and route confidence before arrival.',
      whyChanged: 'To shift decision-making earlier and reduce uncertainty during the on-site experience.',
      evidence: 'Persona scenarios and journey-map planning pain points repeatedly highlighted anxiety before arrival.',
      affectedDesignDecisions: ['decision-1'],
      affectedRequirements: ['R2'],
    },
    {
      id: 'I3',
      iteration: 3,
      title: 'Finalised the audio-first, low-distraction interaction model',
      trigger: {
        type: 'evaluation',
        refId: 'E1',
        description: 'Prototype testing validated reduced screen interaction and stronger immersion.',
      },
      whatChanged:
        'Strengthened audio storytelling, simplified the visual interface, and kept deeper interaction clearly optional.',
      whyChanged: 'To preserve immersion while still supporting cultural understanding and user control.',
      evidence: 'Prototype walkthroughs showed fewer screen glances and better reported focus on the environment.',
      affectedDesignDecisions: ['Decision-2', 'Decision-3'],
      affectedRequirements: ['R1', 'R4'],
    },
  ] as IterationChange[],

  // ===== PHASE 4: DESIGN DEVELOPMENT =====
  design: {
    conceptEvolution: [
      {
        id: 'stage-1',
        stage: 'initial',
        title: 'Initial Concept: Feature-Heavy Tourist App',
        description:
          'The first iteration explored a wide range of features through divergent thinking, including AI tour guides, interactive story quests, real-time crowd tracking, and reward-based systems. The design aimed to combine learning, navigation, and engagement into a single app experience, but quickly became overloaded and screen-dependent.',
        artifacts: [
          {
            id: 'sketch-1',
            src: withBasePath('/artifacts/firstDesign.png'),
            alt: 'Initial concept sketch with multiple features',
            caption:
              'Week 1 concept board showing AI tour guide, story quests, crowd tracking, and gamified rewards explored simultaneously. Some early concept sketches were visualised using image generation tools to quickly explore directions; however, these were used only to represent pre-existing ideas and were later refined through manual iteration.',
            type: 'sketch',
          },
        ],
      },
    
      {
        id: 'stage-2',
        stage: 'refined',
        title: 'Post-Interview Shift: Reducing Complexity',
        description:
          'Interviews revealed that most visitors did not want a highly interactive or game-like experience. Instead, they valued cultural understanding, minimal phone use, and a more relaxed visit. Many preferred audio explanations over reading and expressed frustration with missing context due to language barriers. This led to a convergent design shift: removing heavy gamification, simplifying interaction, and focusing on when and how interaction should happen rather than adding more features.',
        artifacts: [
          {
            id: 'wireframe-2',
            src: withBasePath('/artifacts/secondDesign.png'),
            alt: 'Refined concept focusing on structure and flow',
            caption:
              'Refinement stage showing transition from feature-heavy system to structured experience flow (pre-visit, on-site, post-visit)',
            type: 'sketch',
          },
        ],
      },
    
      {
        id: 'stage-3',
        stage: 'final',
        title: 'Final Concept: Context-Aware Cultural Companion',
        description:
          'The final design converges into a structured, three-phase experience: pre-visit planning, a lightweight on-site experience, and optional post-visit engagement. Instead of maximizing features, the system prioritizes reducing cognitive load, supporting user control, and enabling a more immersive experience through audio-first interaction. This reflects established HCI design principles, including reducing short-term memory load, maintaining visibility of system behaviour, and supporting user control through simplified interaction design.',
        artifacts: [
          {
            id: 'mockup-1',
            src: withBasePath('/artifacts/finalConcept.png'),
            alt: 'Final system concept showing layered experience',
            caption:
              'The system functions as a context-aware cultural companion, similar to prior work where AI-based systems provide adaptive, location-sensitive guidance in cultural heritage environments (Casillo et al., 2020).',
            type: 'mockup',
          },
        ],
      },
    ] as IterationStage[],

    finalConcept: {
      overview: 'A prototype of a context-aware cultural companion that supports visitors before, during, and after their visit through lightweight interaction and audio storytelling. The system focuses on helping visitors understand the cultural meaning of Maple Bridge without requiring constant screen interaction. Rather than relying on complex personalization, the design emphasizes simple exploration, optional depth, and minimal disruption to the on-site experience.',
      modules: [
        {
          title: 'Pre-Visit Preparation',
          description:
            'Supports basic decision-making before arrival through a conceptual crowd preview and landmark awareness. This feature is implemented as a prototype demonstration using simulated data to illustrate how pre-visit planning could be supported.',
          keyFeatures: [
            'Conceptual crowd preview (prototype demonstration)',
            'Basic landmark awareness before visiting',
            'Simple visual overview of site conditions',
          ],
        },
        {
          title: 'Situated Experience',
          description:
            'The core experience allows users to explore key landmarks and access short audio-based cultural explanations. Interaction is kept lightweight, combining simple map-based navigation with optional visual details, allowing users to remain focused on the physical environment rather than the screen.',
          keyFeatures: [
            'Interactive map with tappable landmarks',
            'Audio storytelling for cultural context',
            'Clickable visual exploration of landmark details',
          ],
        },
        {
          title: 'Optional Engagement',
          description:
            'Additional features provide optional depth for users who want to explore further. This includes photo spot guidance and a lightweight question-and-answer interface for additional cultural context. These features are intentionally non-intrusive and user-controlled.',
          keyFeatures: [
            'Photo spot guidance for culturally meaningful viewpoints',
            'Optional question-and-answer interface (chatbot)',
            'Lightweight exploration beyond core experience',
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
            'One of the clearest gaps in the current visitor experience was that most signage was in Chinese only, leaving international visitors without a way to access the stories behind what they were seeing. The multilingual narration in the final design directly addresses this — instead of forcing visitors to switch between translation apps, the audio layer brings cultural context to them in their own language, at the right moment.',
          evidence: 'In informal tests with a small number of participants, most reported feeling like they actually understood the site once narration was introduced. This was not formally measured, but the difference in engagement was noticeable.',
        },
        {
          painPoint: 'Excessive phone dependency',
          addressed: 'A recurring frustration in research was that accessing information meant looking away from the environment — constantly unlocking the phone, switching apps, and losing the atmosphere. The audio-first approach tries to flip that relationship: the phone stays in your pocket, and the experience comes to you.',
          evidence: 'During walkthrough testing, users checked their phones noticeably less often once audio guidance was introduced. Several mentioned feeling more "present" compared to when they had to navigate a visual interface.',
        },
        {
          painPoint: 'Lack of calm, meaningful reflection',
          addressed:
            'Many visitors left the site without a strong sense of what they had actually experienced — the visit felt visual but not particularly meaningful. The pre-visit layer helps frame expectations before arrival, while optional cultural keepsakes give visitors something to take away and revisit later, turning a single visit into something more lasting.',
          evidence: 'Post-visit interviews suggested this direction was worth pursuing — 9 out of 10 participants said they felt more emotionally connected to the site and were able to recall specific stories afterward, compared to a more typical visit experience.',
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
          id: 'ethical-0',
          category: 'Informed Consent',
          consideration:
            'Any data collection from participants — whether through interviews, walkthroughs, or prototype testing — requires that people understand what they are agreeing to before they take part.',
          approach:
            'Before each session, participants were told what the research was about, how their feedback would be used, and that they could stop at any time. No data was collected without their agreement. This applied to both the initial interviews that shaped the personas and the informal walkthrough sessions used to evaluate the prototype.',
        },
        {
          id: 'ethical-1',
          category: 'Data Privacy',
          consideration:
            'If the system were ever developed beyond a prototype, it would likely need to collect some form of location or preference data — and that raises real questions about how that information is stored and used.',
          approach:
            'The current prototype does not store any user data at all. If this were taken further, the approach would be to collect only what is genuinely needed, be transparent about it, and give users a clear way to opt out of anything optional.',
        },
        {
          id: 'ethical-2',
          category: 'Cultural Representation',
          consideration:
            'Turning centuries of history and poetry into short audio clips is a real risk. There is always a chance of flattening or misrepresenting stories that deserve more nuance than a 90-second narration can offer.',
          approach:
            'Any content used in the system should be carefully checked for accuracy and sensitivity. Ideally, it would be reviewed by people with relevant cultural and historical knowledge, and where possible, it should present more than one perspective rather than a single authoritative voice.',
        },
        {
          id: 'ethical-3',
          category: 'Accessibility',
          consideration:
            'Designing around audio as the primary channel assumes that all users can hear — which is not always the case. Language differences add another layer to this.',
          approach:
            'Text captions should accompany all audio content, and the interface should work meaningfully without sound. Supporting multiple languages is also important, not just as a usability feature but as a matter of basic inclusion.',
        },
        {
          id: 'ethical-4',
          category: 'Technology Dependence',
          consideration:
            'There is something slightly ironic about building a digital tool to help people be more present at a physical place. If the app itself becomes the focus, it defeats the point.',
          approach:
            'This tension shaped a lot of the design decisions — keeping the interface minimal, leading with audio rather than screens, and making deeper features genuinely optional. The goal was always for the technology to stay in the background.',
        },
      ] as EthicalConsideration[],
      aiReflection: {
        toolsUsed: ['ChatGPT', 'Claude 3.5 Sonnet', 'v0.dev', 'Cursor', 'Gemini'],
        prompts: [
          'Generate UI structures for a calm, heritage-focused cultural tourism portfolio and prototype.',
          'Refine interaction flows to reduce screen dependence and support audio-first exploration.',
          'Translate qualitative research themes into UX concepts and portfolio-ready design rationale.',
        ],
        whatWorked: [
          'AI tools were useful for generating alternative interaction ideas quickly, but many of the initial suggestions (e.g. gamified features, overly complex UI patterns) conflicted with user research. This required actively rejecting and filtering outputs rather than directly applying them.',
          'Prompting for UI structure made it easier to prototype and revise presentation components in React.',
          'Language-model support helped synthesize recurring themes across interview notes and persona drafts.',
          'Image generation tools were used selectively to visualise early-stage ideas (e.g. rough app directions and interaction scenarios in Week 1). These were based on concepts we had already defined, and helped us externalise and compare directions quickly. They were not used to generate final designs, which were refined manually through iteration.'
        ],
        whatFailed: [
          'Some generated concepts over-emphasised novelty features that did not align with visitor needs.',
          'AI-produced rationale occasionally sounded plausible but still required manual validation against research evidence.',
          'Visual and interaction suggestions sometimes increased complexity instead of reducing it.',
        ],
        impactOnDesign: [
          'Encouraged broader divergence early in the process before narrowing to a calmer final direction.',
          'Supported faster iteration of portfolio presentation and prototype structure.',
          'Reinforced the need to validate every generated suggestion against real user insights.',
        ],
        limitationsObserved:
        'AI outputs often appeared convincing even when they were poorly aligned with the project context. This made it necessary to treat generated content as suggestions rather than solutions, and to validate all decisions against user data and design goals.',
      },
    } as TechnicalReflectionData,

    finalReflection: {
      learning: [
        'User research is essential—initial assumptions about what would make the experience engaging (e.g. gamification) did not match what visitors actually wanted.',
        'Reducing features can improve the experience; focusing on simplicity and immersion was more effective than adding more interaction. This project highlighted that adding more features does not necessarily improve user experience. Instead, focusing on fewer, well-aligned interactions (such as audio storytelling and simple navigation) created a more coherent and immersive design.',
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
        'Casillo, M., Clarizia, F., D\'Aniello, G., De Santo, M., Lombardi, M. and Santaniello, D. (2020) \'CHAT-Bot: A Cultural Heritage Aware Teller-Bot for Supporting Touristic Experiences\', Pattern Recognition Letters, 131, pp. 234–243. doi:10.1016/j.patrec.2020.01.003. Available at: https://www.sciencedirect.com/science/article/abs/pii/S0167865520300052 (Accessed: 10 April 2026).',
        'Pasca, M.G., Renzi, M.F., Di Pietro, L. and Guglielmetti Mugion, R. (2021) Gamification in Tourism and Hospitality Research in the Era of Digital Platforms: A Systematic Literature Review. Journal of Service Theory and Practice, 31(5), pp. 691–737. Emerald. DOI: 10.1108/JSTP-05-2020-0094. [online] Available at: https://www.emerald.com/insight/content/doi/10.1108/JSTP-05-2020-0094/full/html [Accessed 10 April 2026].',
        'Peng, K., Tao, X., Jiang, J. and Zhai, J. (2023) The Experience Design of Cultural Heritage Tourism in the Perspective of Gamification. In: Marcus, A., Rosenzweig, E. and Soares, M.M. (eds.) Design, User Experience, and Usability. HCII 2023. Lecture Notes in Computer Science, vol. 14034, pp. 131–143. Springer, Cham. DOI: 10.1007/978-3-031-35705-3_10. [online] Available at: https://link.springer.com/chapter/10.1007/978-3-031-35705-3_10 [Accessed 10 April 2026].',
        'Sperlì, G. (2021) A Cultural Heritage Framework Using a Deep Learning Based Chatbot for Supporting Tourist Journey. Expert Systems with Applications, 183. Elsevier. DOI: 10.1016/j.eswa.2021.115389. [online] Available at: https://www.sciencedirect.com/science/article/abs/pii/S0957417421007089 [Accessed 10 April 2026].',
        'Xue, K., Jin, X. and Li, Y. (2025) Exploring the Influence of Human-Computer Interaction Experience on Tourist Loyalty in the Context of Smart Tourism: A Case Study of Suzhou Museum. Behavioural Sciences, 15(7), art. 949. MDPI. DOI: 10.3390/bs15070949. [online] Available at: https://www.mdpi.com/2076-328X/15/7/949 [Accessed 10 April 2026].',
        'Zhang, Y. et al. (2025) Framework for Timely Perception of Spatiotemporal Crowd Congestion Risk in Public Spaces Based on Video Pedestrian Tracking and Geographic Mapping. GIScience and Remote Sensing. Taylor & Francis. DOI: 10.1080/15481603.2025.2480416. [online] Available at: https://www.tandfonline.com/doi/full/10.1080/15481603.2025.2480416 [Accessed 10 April 2026].',
      ],
      culturalHeritage: [
        'Suzhou Municipal People\'s Government (2021) Night Mooring at Maple Bridge: The Sound of Bells Travels Beyond Time. suzhou.gov.cn (Official Suzhou Government English Portal). [online] Available at: https://www.suzhou.gov.cn/szsenglish/News/202102/3da2c5021c524117b66b4dd54162a52a.shtml [Accessed 10 April 2026].',
      ],
      // aiAndEthics: [
      //   'IEEE Ethically Aligned Design Initiative',
      // ],
      tools: [
        'ChatGPT, GPT-5.3, accessed 2026-04-15, available at https://chat.openai.com/. Used for structuring interaction flows, refining implementation logic, and supporting prompt engineering for React-based components. Outputs were critically evaluated and adapted to meet system requirements.',
        
        'Claude 3.5 Sonnet, v1.0, accessed 2026-04-10, available at https://claude.ai/. Used for analysing interview data, refining personas, and translating qualitative insights into design requirements, with outputs cross-checked against original research findings.',
        
        'v0.dev, accessed 2026-04-12, available at https://v0.dev/. Used for rapid prototyping of UI components and generating React-based layouts, which were extended and modified to fit the final system design.',
        
        'Cursor, v0.40, accessed 2026-04-12, available at https://cursor.sh/. Used as the primary development environment for implementing and debugging the prototype, with AI-assisted suggestions reviewed and manually refined for correctness.',
        
        'Gemini, v1.5, accessed 2026-04-18, available at https://gemini.google.com/. Used for early-stage visual exploration and generating initial poster layout concepts to support design iteration.',
      ],
    },
  },
};

// Helper function to get content by phase
export const getPhaseContent = (phase: 'overview' | 'research' | 'synthesis' | 'design' | 'reflection') => {
  return portfolioData[phase];
};
