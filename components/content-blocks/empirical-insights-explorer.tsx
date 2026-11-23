'use client';

import { useState } from 'react';
import {
  Globe,
  Headphones,
  Calendar,
  Smartphone,
  Sparkles,
  Quote,
  ArrowRight,
  UserCheck,
  FileText,
  Volume2,
  Clock,
  Layers,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export interface EmpiricalInsightItem {
  id: string;
  number: string;
  chineseTitle: string;
  title: string;
  findingSummary: string;
  academicCitation: string;
  evidenceQuote: string;
  participantContext: string;
  designImplication: string;
  empiricalBasis: string;
  addressedPersona: string;
  personaRole: string;
  relatedRequirement: string;
  iconName: 'Globe' | 'Headphones' | 'Calendar' | 'Smartphone' | 'Sparkles';
}

const empiricalInsights: EmpiricalInsightItem[] = [
  {
    id: 'insight-1',
    number: '01',
    chineseTitle: '语言壁垒 · 文化断层',
    title: 'Understanding is Blocked by Language and Context',
    findingSummary:
      'Visitors admire Maple Bridge visually but frequently fail to grasp its historical and poetic significance. On-site signage is predominantly monolingual Chinese, fragmented, or overly bureaucratic, creating a pronounced semantic gap between physical presence and cultural comprehension (Casillo et al., 2020).',
    academicCitation:
      'Casillo et al. (2020) — "Delivering contextual cultural heritage knowledge dynamically in situ without cognitive overload remains a primary interaction design hurdle."',
    evidenceQuote:
      'I knew nothing about the poem or why this bridge mattered. The plaques were only in Chinese, so I ended up just taking a quick selfie and leaving without knowing what I was looking at.',
    participantContext: 'Participant P3 (International Master’s Student, First-time visitor)',
    empiricalBasis: 'Visitors visual experience is severed from historical meaning due to static monolingual signage.',
    designImplication: 'Bilingual, location-triggered cultural interpretation with poetic context.',
    addressedPersona: 'Glinda Cottrill',
    personaRole: 'Curious Cultural Explorer',
    relatedRequirement: 'R1 & R4',
    iconName: 'Globe',
  },
  {
    id: 'insight-2',
    number: '02',
    chineseTitle: '声景沉浸 · 解放双眸',
    title: 'Hands-Free Audio Interaction Supports Immersion',
    findingSummary:
      'Visitors strongly preferred listening to stories over reading screen text while walking along the canal. Reading from smartphones severed their visual connection to the stone bridges, canal reflections, and architecture, whereas ambient audio enabled eyes-up immersion (Xue et al., 2025).',
    academicCitation:
      'Xue et al. (2025) — "Low-friction, auditory interaction modalities preserve spatial engagement and deepen visitor emotional connection in heritage tourism."',
    evidenceQuote:
      'When I’m walking along the canal, I want to look up at the water and stone bridges, not squint at tiny paragraphs on my phone. Voiceover lets me soak in the mood.',
    participantContext: 'Participant P7 (Local Resident, Frequent weekend visitor)',
    empiricalBasis: 'Looking down at screens breaks environmental presence; audio leaves eyes free to observe.',
    designImplication: 'Prioritize location-aware audio storytelling over on-screen text density.',
    addressedPersona: 'Li Mei & Glinda Cottrill',
    personaRole: 'Shared Priority Across Visitor Types',
    relatedRequirement: 'R1',
    iconName: 'Headphones',
  },
  {
    id: 'insight-3',
    number: '03',
    chineseTitle: '行前预知 · 减缓焦虑',
    title: 'Pre-Visit Awareness Reduces Uncertainty and Stress',
    findingSummary:
      'Crowd density and navigation uncertainty generate pre-trip anxiety. Visitors actively seek crowd forecasts, recommended visiting windows, and landmark previews before arrival so they can enter the site composed and in control (Zhang et al., 2025).',
    academicCitation:
      'Zhang et al. (2025) — "Spatiotemporal crowd foresight empowers tourists with proactive decision-making, significantly reducing situational stress."',
    evidenceQuote:
      'I always check how busy scenic spots are before leaving home. If I know Maple Bridge is packed between 2 and 4 PM, I’ll plan for late morning or evening instead.',
    participantContext: 'Participant P2 (Young Professional, Photography enthusiast)',
    empiricalBasis: 'Visitors experience anxiety over crowds and layout before setting foot on site.',
    designImplication: 'Introduce pre-visit planning with structured crowd forecasts (Today / This Week / By Spot).',
    addressedPersona: 'Li Mei',
    personaRole: 'Atmosphere-First Visitor',
    relatedRequirement: 'R2',
    iconName: 'Calendar',
  },
  {
    id: 'insight-4',
    number: '04',
    chineseTitle: '认知负荷 · 远离繁复',
    title: 'Excessive Interaction Creates Cognitive Friction',
    findingSummary:
      'Toggling between navigation maps, translation camera tools, search engines, and photo apps creates severe cognitive friction. What should feel like a peaceful retreat transforms into a high-stress administrative multitasking session.',
    academicCitation:
      'Cognitive Load Theory in HCI — "High extraneous cognitive load induced by frequent interface context-switching degrades spatial presence and aesthetic enjoyment."',
    evidenceQuote:
      'I was juggling translation apps, WeChat, and Baidu Maps while trying not to trip on ancient stone steps. It felt like work instead of a vacation.',
    participantContext: 'Participant P5 (International Exchange Scholar)',
    empiricalBasis: 'Constant app-switching and dense digital interfaces destroy the tranquility of cultural sites.',
    designImplication: 'Engineered an ultra-minimal interface with subtle, non-intrusive orientation cues.',
    addressedPersona: 'Universal Visitor Need',
    personaRole: 'Universal Cognitive Relief',
    relatedRequirement: 'R4',
    iconName: 'Smartphone',
  },
  {
    id: 'insight-5',
    number: '05',
    chineseTitle: '从容选择 · 拒绝强制',
    title: 'Engagement Should Be Optional, Not Forced',
    findingSummary:
      'Reactions to gamification, digital quests, and chatbot interaction were polarized. While some users welcomed quizzes and digital keepsakes, others found aggressive game mechanics distracting and culturally irreverent (Peng et al., 2023; Pasca et al., 2021).',
    academicCitation:
      'Peng et al. (2023) — "Cultural heritage gamification must respect contemplative depth; invasive mechanics risk undermining historical gravity."',
    evidenceQuote:
      'I hate tourist apps that pop up badges, mini-games, and quizzes at every turn. If I want to read extra backstory, let me tap for it, but don’t force it on me.',
    participantContext: 'Participant P9 (Heritage Architecture Researcher)',
    empiricalBasis: 'Visitor motivations vary sharply between playful discovery and peaceful contemplation.',
    designImplication: 'Keep deep cultural Q&A, keepsakes, and photo spot suggestions strictly opt-in.',
    addressedPersona: 'Li Mei (Protects Calm) & Glinda (Invites Depth)',
    personaRole: 'Balanced Heritage Governance',
    relatedRequirement: 'R3',
    iconName: 'Sparkles',
  },
];

export function EmpiricalInsightsExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeInsight = empiricalInsights[activeIndex];

  return (
    <div className="space-y-8">
      {/* Editorial Methodology Bar */}
      <div className="p-6 rounded-3xl border border-border/80 bg-card/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
              Qualitative Investigation
            </span>
            <span className="text-muted-foreground/40">•</span>
            <span className="text-xs font-serif italic text-muted-foreground">Suzhou Grand Canal Corridor</span>
          </div>
          <h3 className="font-serif font-bold text-xl text-foreground">
            In-Situ Empirical Research Evidence
          </h3>
          <p className="text-xs text-muted-foreground font-light max-w-2xl leading-relaxed">
            Derived from semi-structured walkthroughs, think-aloud observation, and academic literature analysis at Maple Bridge and Hanshan Temple.
          </p>
        </div>

        <div className="flex items-center gap-6 text-center border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-6 shrink-0">
          <div>
            <span className="block font-serif text-2xl font-bold text-foreground">9</span>
            <span className="block text-[10px] font-mono uppercase text-muted-foreground">Participants</span>
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-secondary">5</span>
            <span className="block text-[10px] font-mono uppercase text-muted-foreground">Core Insights</span>
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-primary">In-Situ</span>
            <span className="block text-[10px] font-mono uppercase text-muted-foreground">Grand Canal</span>
          </div>
        </div>
      </div>

      {/* Main Five-Insight Interactive Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Numbered Navigation Rail */}
        <div className="lg:col-span-4 space-y-2.5">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-semibold px-1">
            Select Empirical Insight:
          </p>

          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {empiricalInsights.map((insight, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={insight.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 shrink-0 lg:shrink select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    isSelected
                      ? 'bg-primary text-primary-foreground border-primary shadow-sm ring-1 ring-primary/30'
                      : 'bg-card text-foreground border-border/80 hover:bg-muted/40 hover:border-border'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`font-serif text-base font-bold shrink-0 ${
                        isSelected ? 'text-primary-foreground' : 'text-secondary'
                      }`}
                    >
                      {insight.number}
                    </span>
                    <div className="min-w-0">
                      <p
                        className={`text-xs font-serif font-bold truncate ${
                          isSelected ? 'text-primary-foreground' : 'text-foreground'
                        }`}
                      >
                        {insight.title}
                      </p>
                      <p
                        className={`text-[10px] font-mono truncate ${
                          isSelected ? 'text-primary-foreground/75' : 'text-muted-foreground'
                        }`}
                      >
                        {insight.chineseTitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-primary-foreground translate-x-1' : 'text-muted-foreground/40'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-muted/30 border border-border/60 text-xs text-muted-foreground font-light leading-relaxed hidden lg:block">
            <span className="font-mono text-foreground font-bold uppercase text-[10px] block mb-1">
              Methodological Continuity
            </span>
            Each insight directly shapes our architectural decisions in Section 05 and formal traceability chains in Section 06.
          </div>
        </div>

        {/* Right Column: Detailed Selected Insight Canvas */}
        <div className="lg:col-span-8">
          <Card className="p-6 sm:p-8 rounded-3xl border border-border/80 bg-card shadow-xs space-y-6">
            {/* Header: Number, Chinese Title & Category */}
            <div className="space-y-3 border-b border-border/60 pb-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-secondary">
                    [{activeInsight.number}]
                  </span>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block font-semibold">
                      Empirical Research Finding
                    </span>
                    <span className="text-sm font-serif text-primary font-medium">
                      {activeInsight.chineseTitle}
                    </span>
                  </div>
                </div>

                <Badge variant="outline" className="font-mono text-xs text-secondary border-secondary/30">
                  Target: {activeInsight.relatedRequirement}
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground leading-snug">
                {activeInsight.title}
              </h3>
            </div>

            {/* Research Finding Description & Academic Citation */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                {activeInsight.findingSummary}
              </p>

              <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60 text-xs text-muted-foreground font-mono flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{activeInsight.academicCitation}</span>
              </div>
            </div>

            {/* Insight-Specific Visual Metaphor */}
            <div className="p-5 rounded-2xl border border-border/80 bg-muted/20 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold block">
                Interaction Visualization
              </span>
              <InsightVisualMetaphor insightIndex={activeIndex} />
            </div>

            {/* Field Evidence Quotation Block */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5 text-secondary" />
                <span>FIELD EVIDENCE (AUTHENTIC PARTICIPANT OBSERVATION)</span>
              </span>

              <div className="p-5 rounded-2xl bg-secondary/[0.04] border-l-4 border-secondary space-y-2">
                <p className="font-serif italic text-base sm:text-lg text-foreground leading-relaxed">
                  “{activeInsight.evidenceQuote}”
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  — {activeInsight.participantContext}
                </p>
              </div>
            </div>

            {/* Empirical Finding to Design Implication Flow */}
            <div className="p-5 rounded-2xl bg-primary/[0.04] border border-primary/20 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-primary/10 pb-2.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                  HCI Translation Pipeline
                </span>
                <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-secondary" />
                  <span>{activeInsight.addressedPersona}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center text-xs">
                {/* Left: Empirical Finding */}
                <div className="md:col-span-5 p-3 rounded-xl bg-card border border-border/60 space-y-1">
                  <span className="text-[9px] font-mono uppercase text-muted-foreground font-bold block">
                    EMPIRICAL OBSERVATION
                  </span>
                  <p className="text-foreground font-medium leading-snug">
                    {activeInsight.empiricalBasis}
                  </p>
                </div>

                {/* Center: Directional Connector */}
                <div className="md:col-span-1 flex items-center justify-center py-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Right: Concrete Design Implication */}
                <div className="md:col-span-5 p-3 rounded-xl bg-primary/10 border border-primary/30 space-y-1">
                  <span className="text-[9px] font-mono uppercase text-primary font-bold block">
                    DESIGN IMPLICATION
                  </span>
                  <p className="text-foreground font-bold leading-snug">
                    {activeInsight.designImplication}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Insight-specific custom visual metaphors
function InsightVisualMetaphor({ insightIndex }: { insightIndex: number }) {
  switch (insightIndex) {
    case 0:
      // Insight 01: Language & Cultural Accessibility (Bilingual glyph translation matrix)
      return (
        <div className="p-4 rounded-xl bg-card border border-border/70 space-y-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>Bilingual Interpretation Layer</span>
            <span className="text-secondary font-bold">Monolingual → Bilingual Grounding</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20 space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-destructive font-bold block">
                Physical Signage (As-Is)
              </span>
              <p className="font-serif text-foreground font-bold text-sm">“枫桥夜泊碑记”</p>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Ancient stone script with no Latin transcription or English historical context.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-bold block">
                Maple Bridge Companion (To-Be)
              </span>
              <p className="font-serif text-foreground font-bold text-sm">
                “Night Mooring at Maple Bridge (756 AD)”
              </p>
              <p className="text-foreground/80 text-[11px] leading-relaxed">
                Audio-narrated Tang poetry, bell acoustics, and Grand Canal commercial history.
              </p>
            </div>
          </div>
        </div>
      );

    case 1:
      // Insight 02: Hands-Free Audio Immersion (Acoustic waveform visualizer)
      return (
        <div className="p-4 rounded-xl bg-card border border-border/70 space-y-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-primary animate-pulse" />
              <span>Situated Audio Waveform Stream</span>
            </div>
            <span className="text-primary font-bold">Eyes Free • Ears Attuned</span>
          </div>
          <div className="h-14 flex items-center justify-between gap-1 px-4 bg-muted/40 rounded-lg overflow-hidden">
            {[40, 65, 30, 85, 45, 95, 60, 35, 75, 50, 90, 70, 45, 80, 55, 35, 65, 85, 40, 95, 60, 75, 45, 60, 30].map(
              (height, idx) => (
                <div
                  key={idx}
                  className="w-1.5 rounded-full bg-primary/70 transition-all duration-300"
                  style={{ height: `${height}%` }}
                />
              )
            )}
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
            <span>Location: Fengqiao Stone Arch Point (GPS)</span>
            <span className="text-foreground font-serif italic">“The sound of bells travels beyond time...”</span>
          </div>
        </div>
      );

    case 2:
      // Insight 03: Pre-Visit Foresight (Temporal crowd density curve)
      return (
        <div className="p-4 rounded-xl bg-card border border-border/70 space-y-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-secondary" />
              <span>Crowd Congestion Timeline (Today vs. Upcoming)</span>
            </div>
            <span className="text-secondary font-bold">Uncertainty Mitigation</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-[10px] font-mono text-muted-foreground block">08:00 - 10:00</span>
              <span className="font-serif font-bold text-emerald-700 dark:text-emerald-400 text-xs">Calm • 25%</span>
            </div>
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <span className="text-[10px] font-mono text-muted-foreground block">10:00 - 13:00</span>
              <span className="font-serif font-bold text-amber-700 dark:text-amber-400 text-xs">Moderate • 55%</span>
            </div>
            <div className="p-2.5 rounded-lg bg-destructive/10 border border-destructive/20">
              <span className="text-[10px] font-mono text-muted-foreground block">13:00 - 16:30</span>
              <span className="font-serif font-bold text-destructive text-xs">Peak • 85%</span>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-[10px] font-mono text-muted-foreground block">16:30 - 19:00</span>
              <span className="font-serif font-bold text-emerald-700 dark:text-emerald-400 text-xs">Tranquil • 30%</span>
            </div>
          </div>
        </div>
      );

    case 3:
      // Insight 04: Cognitive Friction (Multi-app fragmentation vs. Unified Companion)
      return (
        <div className="p-4 rounded-xl bg-card border border-border/70 space-y-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>Cognitive Load Comparison</span>
            <span className="text-primary font-bold">De-Fragmenting the Field Experience</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-muted/40 border border-border/60 space-y-1">
              <span className="text-[10px] font-mono uppercase text-destructive font-bold block">
                High Extraneous Load (Fragmented)
              </span>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Baidu Maps (navigation) + Camera OCR (translation) + Wiki (history) + WeChat (tickets) = Attention Hijacked.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 space-y-1">
              <span className="text-[10px] font-mono uppercase text-primary font-bold block">
                Zero Extraneous Load (Unified Companion)
              </span>
              <p className="text-foreground text-[11px] leading-relaxed">
                Quiet background audio companion + subtle heads-up landmark confirmation = 100% Gaze on Heritage.
              </p>
            </div>
          </div>
        </div>
      );

    case 4:
      // Insight 05: Optional Engagement (Default Serene vs. Opt-In Deep Exploration)
      return (
        <div className="p-4 rounded-xl bg-card border border-border/70 space-y-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>Layered Interaction Topology</span>
            <span className="text-secondary font-bold">Calm Default • Opt-In Depth</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-card border border-border/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-primary font-bold">
                  Layer 1: Default Walk
                </span>
                <Badge variant="outline" className="text-[9px] font-mono">Always Active</Badge>
              </div>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Unobtrusive audio narration, passive location tracking, zero pop-ups or compulsory game badges.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-secondary font-bold">
                  Layer 2: Exploratory Depth
                </span>
                <Badge className="bg-secondary text-secondary-foreground text-[9px] font-mono">User Summoned</Badge>
              </div>
              <p className="text-foreground text-[11px] leading-relaxed">
                Digital keepsakes, curated photography viewpoints, and interactive cultural Q&A companion.
              </p>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
