import { PhaseSection } from '@/components/phase-section';
import { Card } from '@/components/ui/card';
import { CheckCircle2, XCircle, BookOpen, Store, MapPin, Compass } from 'lucide-react';
import { withBasePath } from '@/lib/basePath';

type GapAnalysisItem = {
  name: string;
  sourceType: string;
  well: string[];
  missed: string[];
};

export function ProblemSpaceSection() {
  const gapAnalysis = {
    academic: [
      {
        name: 'Peng et al. (2023)',
        sourceType: 'Heritage Gamification & Experience Design',
        well: ['Integrated online/offline touchpoints', 'Strong narration thread', 'Learning-focused gameplay'],
        missed: ['Song Dynasty specific context', 'High UI complexity', 'Lacks real-time crowd data'],
      },
      {
        name: 'Li et al. (2025)',
        sourceType: 'Grand Canal Embodied Cognition Study',
        well: ['Embodied cognition model', 'Grand Canal specific narrative', 'Escape-room puzzle logic'],
        missed: ['Exhibition-locked (not in situ)', 'Limited to physical props', 'No AI-driven personalization'],
      },
      {
        name: 'Calvaresi et al. (2025)',
        sourceType: 'Tourism Chatbots & Conversational Agents',
        well: ['24/7 contextual query support', 'Personalized recommendations', 'Mature research momentum'],
        missed: ['Screen-heavy interaction', 'Interrupts environmental immersion', 'Generic hospitality focus'],
      },
      {
        name: 'Zhang et al. (2025)',
        sourceType: 'Crowd Monitoring & Risk Perception',
        well: ['Spatiotemporal risk frameworks', 'High-coverage video tracking', 'Emergency response focus'],
        missed: ['Purely administrative intent', 'No cultural interpretation', 'Reactive spatial mapping'],
      },
    ],
    commercial: [
      {
        name: 'Official Heritage Apps',
        sourceType: 'Government Scenic Area Platforms',
        well: ['Authoritative government data', 'Multi-language signage support', 'Official ticketing'],
        missed: ['Static "Digital Brochure" feel', 'Poor interaction design', 'Low emotional resonance'],
      },
      {
        name: 'Baidu / Google Maps',
        sourceType: 'General Commercial Navigation',
        well: ['Precise GPS navigation', 'AR directional cues', 'Historical landmark markers'],
        missed: ['Cold/functional interface', 'Distracting visual density', 'Lacks poetic/literary depth'],
      },
      {
        name: 'Commercial Audio Guides',
        sourceType: 'Hardware Wand / App Tour Systems',
        well: ['Accurate historical facts', 'Simple hardware interface', 'Professional voiceovers'],
        missed: ['Linear "push" delivery', 'Isolated social experience', 'Rigid, non-adaptive pacing'],
      },
      {
        name: 'C2SMART / USDOT Systems',
        sourceType: 'Infrastructure Flow Monitoring',
        well: ['Cost-effective CCTV use', 'Deep-learning pedestrian data', 'Continuous spatial telemetry'],
        missed: ['Industrial infrastructure only', 'Not visitor-facing', 'Privacy/trust friction points'],
      },
    ],
  };

  const landmarks = [
    {
      name: 'Maple Bridge (枫桥)',
      dynasty: 'Tang Dynasty (c. 756 AD)',
      desc: 'Originally named "Bridge Closure" due to its strategic canal position for toll and defense.',
      image: withBasePath('/bridgePic.jpg'),
    },
    {
      name: 'Hanshan Temple (寒山寺)',
      dynasty: 'Liang Dynasty (502–519 AD)',
      desc: 'World-renowned Buddhist monastery celebrated for its midnight bell toll reverberating over the canal.',
      image: withBasePath('/hanshantemple.png'),
    },
    {
      name: 'Grand Canal Waterway (大运河)',
      dynasty: 'Sui-Tang Canal System',
      desc: 'Historic waterway linking northern and southern China, carrying merchants, poets, and travelers.',
      image: withBasePath('/grandcanal.png'),
    },
    {
      name: 'Tieling Pass (铁岭关)',
      dynasty: 'Ming Dynasty (1557 AD)',
      desc: 'Defensive fortress erected during Jiajing reign to repel coastal incursions and govern canal traffic.',
      image: withBasePath('/tielingpass.png'),
    },
  ];

  return (
    <PhaseSection
      id="overview"
      number="01"
      chineseTitle="背景与动机 · 现实脱节"
      eyebrow="Problem Space & Motivation"
      title="The Cultural Disconnect at Maple Bridge"
      description="Exploring the gap between rich historical heritage and on-site visitor interpretation."
    >
      <div className="space-y-16">
        
        {/* Editorial Text Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-semibold">
              The Context
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground leading-snug">
              A thousand-year landmark experienced as a fleeting photo stop.
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground font-serif italic border-l-2 border-secondary pl-4 py-1">
              “Visitors come to Maple Bridge to admire its crescent stone arch, but often depart without understanding why a Tang poet wept here in 756 AD.”
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4 text-base leading-relaxed text-muted-foreground font-light">
            <p>
              Maple Bridge (<span className="text-foreground font-serif">枫桥</span>, <em>Fengqiao</em>) in Suzhou is an internationally revered heritage site shaped by classical Tang poetry, ancient Grand Canal waterways, and Jiangnan architectural aesthetics (Suzhou Municipal People’s Government, 2021). However, field research and user interviews reveal that the contemporary on-site experience is predominantly visual and surface-level.
            </p>
            <p>
              Visitors arrive seeking cultural depth, yet encounter fragmented physical plaques, language barriers, and crowded paths. To understand what they are looking at, visitors are forced to constantly look down at mobile screens—navigating translation tools, encyclopedia pages, and commercial maps. This creates a sharp experiential paradox: the more digital effort visitors invest to understand the place, the further removed they become from its serene atmosphere.
            </p>
            <p>
              This case study documents our HCI design process: investigating this cultural interpretation gap, synthesizing user needs, and creating <strong>Maple Bridge</strong>—an audio-first, context-aware cultural companion that restores environmental immersion.
            </p>
          </div>
        </div>

        {/* Heritage Sites Photographic Gallery */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              Site Topography & Cultural Landmarks
            </h4>
            <span className="text-xs text-muted-foreground font-serif italic">
              Suzhou Fengqiao Scenic Area
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {landmarks.map((landmark, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-xs transition-all hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src={landmark.image}
                    alt={landmark.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-secondary">
                    {landmark.dynasty}
                  </span>
                  <h5 className="font-serif font-bold text-base text-foreground leading-tight">
                    {landmark.name}
                  </h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {landmark.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Literature Review vs Market Solutions Gap Analysis */}
        <div className="space-y-8 pt-4">
          <div className="border-b border-border/80 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                Gap Analysis
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                Academic Literature vs. Existing Market Solutions
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md font-light">
              Benchmarking theoretical frameworks and commercial applications to isolate unmet interaction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Academic Literature Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 text-primary border-b border-primary/20">
                <BookOpen className="w-4 h-4 text-primary" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest">
                  Academic Literature Frameworks
                </h4>
              </div>

              <div className="space-y-4">
                {gapAnalysis.academic.map((item, idx) => (
                  <GapCard key={idx} item={item} category="academic" />
                ))}
              </div>
            </div>

            {/* Market Solutions Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 text-secondary border-b border-secondary/20">
                <Store className="w-4 h-4 text-secondary" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest">
                  Commercial Market Solutions
                </h4>
              </div>

              <div className="space-y-4">
                {gapAnalysis.commercial.map((item, idx) => (
                  <GapCard key={idx} item={item} category="commercial" />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </PhaseSection>
  );
}

function GapCard({
  item,
  category,
}: {
  item: GapAnalysisItem;
  category: 'academic' | 'commercial';
}) {
  return (
    <Card className="p-5 bg-card/90 border border-border/80 rounded-2xl shadow-xs hover:shadow-md transition-all">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
        <h5 className="font-serif font-bold text-base text-foreground">
          {item.name}
        </h5>
        <span className="text-[11px] font-mono text-muted-foreground">
          {item.sourceType}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border/60">
        <div className="space-y-2">
          <p className="text-[10px] font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-emerald-600" />
            <span>Demonstrated Strengths</span>
          </p>
          <ul className="text-xs text-muted-foreground space-y-1 leading-relaxed">
            {item.well.map((point, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-emerald-600 mt-0.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] font-mono font-bold uppercase text-secondary flex items-center gap-1.5">
            <XCircle size={12} className="text-secondary" />
            <span>Observed Limitations</span>
          </p>
          <ul className="text-xs text-muted-foreground space-y-1 leading-relaxed">
            {item.missed.map((point, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-secondary mt-0.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
