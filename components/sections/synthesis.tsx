'use client';

import { useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { TraceabilityWorkbench } from '@/components/content-blocks/traceability-workbench';
import { Card } from '@/components/ui/card';
import {
  ArrowRight,
  Headphones,
  Map,
  Sparkles,
  Layers,
  X,
  ZoomIn,
  CheckCircle2,
  AlertTriangle,
  Compass,
  Smartphone,
  Quote,
} from 'lucide-react';
import { withBasePath } from '@/lib/basePath';

interface SketchModalData {
  id: number;
  title: string;
  desc: string;
  src: string;
}

const crazyEightsData: SketchModalData[] = [
  {
    id: 1,
    title: 'Spatial Audio Trigger & Waterway Map',
    desc: 'Exploring proximity-triggered audio narration as the user approaches the stone arch, minimizing visual screen time.',
    src: '/sketches/1.png',
  },
  {
    id: 2,
    title: 'Directional Audio Compass',
    desc: 'Heads-up acoustic orientation allowing users to navigate between Hanshan Temple and Fengqiao by sound cues.',
    src: '/sketches/2.png',
  },
  {
    id: 3,
    title: 'Minimalist Cultural Audio Player',
    desc: 'Distraction-free audio card with bilingual captions, play/pause, and context snippet.',
    src: '/sketches/3.png',
  },
  {
    id: 4,
    title: 'Pre-Visit Crowd Forecast by Spot',
    desc: 'Visualizing crowd density predictions across different time slots (Today, This Week, By Spot) before arriving.',
    src: '/sketches/4.png',
  },
  {
    id: 5,
    title: 'Poetic Landmark Detail Modal',
    desc: 'Contextual overlays linking physical bridge stones to Zhang Ji’s Tang poetry and historical events.',
    src: '/sketches/5.png',
  },
  {
    id: 6,
    title: 'Opt-in Digital Keepsake Collector',
    desc: 'Gentle cultural stamp collection that stays quiet during the walk and becomes available to review after departure.',
    src: '/sketches/6.png',
  },
  {
    id: 7,
    title: 'Non-Intrusive Ambient Notification',
    desc: 'Subtle heads-up notification alerting the visitor when near a point of historical interest without locking the screen.',
    src: '/sketches/7.png',
  },
  {
    id: 8,
    title: 'Lightweight Cultural Q&A Drawer',
    desc: 'Opt-in conversational companion answering specific questions about Song Dynasty canal history when summoned.',
    src: '/sketches/8.png',
  },
];

export function SynthesisSection() {
  const { synthesis, requirements, designGoals, evaluation } = portfolioData;
  const [activeSketch, setActiveSketch] = useState<SketchModalData | null>(null);

  return (
    <>
      {/* 05. RESEARCH SYNTHESIS */}
      <PhaseSection
        id="synthesis"
        number="05"
        chineseTitle="研究综合 · 从洞察到重构"
        eyebrow="Research Synthesis & Architectural Framing"
        title="Reframing the Design Opportunity"
        description="Translating raw qualitative interview findings into structured design priorities and strategic trade-offs."
      >
        <div className="space-y-16">
          
          {/* Narrative Progression: Findings -> Insights -> Priorities */}
          <div className="p-6 md:p-8 rounded-3xl border border-border/80 bg-card/90 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
              The Synthesis Journey
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              <div className="space-y-2 p-5 rounded-2xl bg-muted/40 border border-border/60">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                  Stage 1: Field Findings
                </span>
                <h4 className="font-serif font-bold text-lg text-foreground">Inaccessible Context</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  Signboards in Chinese only, screen dependency while walking, anxiety over crowds, and aversion to gimmicky games.
                </p>
              </div>

              <div className="space-y-2 p-5 rounded-2xl bg-primary/10 border border-primary/20">
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                  Stage 2: Core Insight
                </span>
                <h4 className="font-serif font-bold text-lg text-foreground">Immersion Over Features</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  Visitors do not want a busy tourist app demanding attention; they want a quiet cultural companion that explains the space hands-free.
                </p>
              </div>

              <div className="space-y-2 p-5 rounded-2xl bg-secondary/10 border border-secondary/20">
                <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
                  Stage 3: Design Pivot
                </span>
                <h4 className="font-serif font-bold text-lg text-foreground">Context-Aware Audio</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  Shifted from on-screen gamification to a 3-phase journey: pre-visit foresight, situated audio storytelling, and optional depth.
                </p>
              </div>

            </div>
          </div>

          {/* Key Insights Cards */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                Synthesized Insights
              </span>
              <h3 className="font-serif font-bold text-2xl text-foreground">
                Strategic Insights Guiding Architectural Choices
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {synthesis.keyInsights.map((insight, idx) => (
                <Card
                  key={insight.id}
                  className="p-6 rounded-3xl border border-border/80 bg-card/90 shadow-xs space-y-4 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary font-serif font-bold text-sm flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </div>
                      <h4 className="font-serif font-bold text-base text-foreground leading-snug">
                        {insight.insight}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                    {insight.explanation}
                  </p>

                  <div className="pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-muted-foreground">
                    <span>Derived: {insight.derivedFrom?.join(', ')}</span>
                    <span className="text-primary font-semibold">Leads to: {insight.leadsTo?.join(', ')}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Insight-to-Design Mapping Spread */}
          <div className="space-y-6 pt-4 border-t border-border/70">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-secondary font-semibold">
                Design Decisions & Trade-Offs
              </span>
              <h3 className="font-serif font-bold text-2xl text-foreground">
                Insight-to-Design Architectural Mapping
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-light max-w-2xl">
                Every architectural move introduces both deliberate benefits and explicit trade-offs that were navigated during the project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {synthesis.insightToDesignMapping.map((mapItem, idx) => (
                <Card
                  key={mapItem.id}
                  className="p-6 rounded-3xl border border-border/80 bg-card shadow-xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
                      <span>Move 0{idx + 1}</span>
                      <span>•</span>
                      <span>{mapItem.insight}</span>
                    </div>

                    <h4 className="font-serif font-bold text-lg text-foreground">
                      {mapItem.decision}
                    </h4>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      {mapItem.rationale}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-1 mt-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-destructive font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Acknowledged Trade-Off</span>
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {mapItem.tradeoff}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </PhaseSection>

      {/* 06. TRACEABILITY & DESIGN LOGIC */}
      <PhaseSection
        id="traceability"
        number="06"
        chineseTitle="设计溯源 · 逻辑验证"
        eyebrow="Traceability & Decision Logic"
        title="From Empirical Requirement to Validated Design"
        description="An unbroken chain of HCI reasoning: linking interview data directly to design goals, prototype implementations, and testing evidence."
      >
        <div className="space-y-6">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light max-w-3xl">
            In rigorous HCI methodology, no interface feature should appear without empirical justification. The interactive workbench below makes this reasoning chain fully transparent: select any requirement chain to trace its lineage through design goals, interface decisions, and evaluation outcomes.
          </p>

          <TraceabilityWorkbench
            requirements={requirements}
            designGoals={designGoals}
            decisions={synthesis.designDecisions}
            evaluations={evaluation}
          />
        </div>
      </PhaseSection>

      {/* 07. CONCEPT SHIFT */}
      <PhaseSection
        id="concept-shift"
        number="07"
        chineseTitle="概念转变 · 减法艺术"
        eyebrow="Concept Shift & Divergence to Convergence"
        title="From Feature-Heavy App to Quiet Cultural Companion"
        description="How field insights forced us to dismantle an overloaded utility and design for atmospheric presence."
      >
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Earlier Direction */}
            <Card className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-border/80 bg-muted/20 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                    Week 1 Divergent Direction
                  </span>
                  <span className="text-xs font-mono text-destructive font-semibold">Overloaded</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-2xl text-foreground">
                    Feature-Heavy Tourist App
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                    The initial concept attempted to cram AI tour guides, gamified story quests, live crowd meters, and collectible reward badges into a single screen-heavy interface.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {[
                    'Screen-based navigation demanded continuous visual gaze',
                    'Gamified mechanics and badges cheapened the solemn Tang poem atmosphere',
                    'Too many competing features overwhelmed visitors with decision fatigue',
                    'Forced app-switching between translation, maps, and camera utilities',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-destructive/10 border border-destructive/20 text-xs text-destructive font-medium">
                ✕ Rejected: Assumed that more digital interaction automatically produces a richer cultural experience.
              </div>
            </Card>

            {/* The Pivot Center Column */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center p-6 rounded-3xl border border-dashed border-border bg-card/60 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
                The Empirical Pivot
              </span>
              <p className="font-serif italic text-xs text-foreground leading-relaxed">
                “Users asked us to remove the clutter so they could simply look up at the stone bridge.”
              </p>
            </div>

            {/* Refined Direction */}
            <Card className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-primary/30 bg-primary/[0.04] space-y-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-primary/20 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                    Convergent Solution
                  </span>
                  <span className="text-xs font-mono text-primary font-semibold">Quiet Companion</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-2xl text-foreground">
                    Context-Aware Audio Companion
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                    Shifting from adding features to removing friction. Replaced visual density with location-aware audio narration, pre-visit crowd awareness, and opt-in depth.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {[
                    'Audio-first storytelling supports heads-up exploration while walking',
                    'Crowd forecasting shifted to pre-visit planning rather than in-situ stress',
                    'Minimalist UI provides gentle orientation without hijacking attention',
                    'Deeper cultural Q&A and photo spots remain strictly opt-in',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-foreground leading-relaxed">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                ✓ Adopted: Respects environmental calm while opening access to historical meaning through hands-free sound.
              </div>
            </Card>

          </div>
        </div>
      </PhaseSection>

      {/* 08. IDEATION — CRAZY EIGHTS */}
      <PhaseSection
        id="ideation"
        number="08"
        chineseTitle="快速构思 · 疯狂八分钟"
        eyebrow="Rapid Ideation & Divergent Sketching"
        title="Crazy Eights: Visualizing a Heads-Up Experience"
        description="Eight rapid sketching sprints exploring non-intrusive, spatial, and acoustic interaction patterns."
      >
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3 text-sm text-muted-foreground leading-relaxed font-light">
            <p>
              Once our interviews made clear that screen dependency was destroying the atmosphere of Maple Bridge, we used the <strong>Crazy Eights</strong> ideation method (eight minutes, eight distinct design concepts) to rapidly externalize non-traditional UI patterns.
            </p>
            <p>
              The challenge was: <em>How might a visitor explore an ancient site with zero cognitive friction and minimal screen gaze?</em> Click any sketch below to inspect its interaction logic.
            </p>
          </div>

          {/* Crazy Eights Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {crazyEightsData.map((sketch) => (
              <div
                key={sketch.id}
                onClick={() => setActiveSketch(sketch)}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card cursor-pointer shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="aspect-square w-full overflow-hidden bg-muted/40 p-3 flex items-center justify-center">
                  <img
                    src={withBasePath(sketch.src)}
                    alt={sketch.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3 border-t border-border/60 bg-card space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-secondary font-bold">
                      Sketch 0{sketch.id}
                    </span>
                    <ZoomIn className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <h4 className="font-serif font-bold text-xs text-foreground truncate">
                    {sketch.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crazy Eights Lightbox Modal */}
        {activeSketch && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveSketch(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-card rounded-3xl overflow-hidden border border-border shadow-2xl p-6 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-border/70">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-secondary font-bold">
                    Sketch 0{activeSketch.id} of 08
                  </span>
                  <span className="text-xs text-muted-foreground">• Crazy Eights Ideation</span>
                </div>
                <button
                  onClick={() => setActiveSketch(null)}
                  className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-muted/30 p-4 flex items-center justify-center">
                <img
                  src={withBasePath(activeSketch.src)}
                  alt={activeSketch.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="space-y-1 pt-1">
                <h4 className="font-serif font-bold text-lg text-foreground">
                  {activeSketch.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                  {activeSketch.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </PhaseSection>

      {/* 09. DESIGN PRINCIPLES */}
      <PhaseSection
        id="principles"
        number="09"
        chineseTitle="设计原则 · 以人为本"
        eyebrow="Human-Centered Design Principles"
        title="Three Grounded Interaction Principles"
        description="Grounded in cognitive psychology and human-centered heritage interaction research."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Principle 1 */}
          <Card className="p-6 sm:p-7 rounded-3xl border border-border/80 bg-card shadow-xs space-y-4 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Headphones className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                Principle 01
              </span>
              <h3 className="font-serif font-bold text-xl text-foreground leading-snug">
                Reduce cognitive load through audio-first interaction
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
              In a dynamic outdoor heritage environment, constantly reading dense mobile typography and toggling apps overtaxes visual attention. Delivering contextual narratives through situated audio lets visitors keep their gaze on the stone canal, water reflections, and architecture.
            </p>

            <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
              HCI Anchor: Cognitive Load Theory & Ambient Computing
            </div>
          </Card>

          {/* Principle 2 */}
          <Card className="p-6 sm:p-7 rounded-3xl border border-border/80 bg-card shadow-xs space-y-4 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
              <Map className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
                Principle 02
              </span>
              <h3 className="font-serif font-bold text-xl text-foreground leading-snug">
                Support user control through when interaction happens
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
              Visitors should never feel rushed or blindsided. By shifting spatial decisions and crowd assessments to the pre-visit planning phase, visitors arrive calm and oriented, preserving on-site tranquility for presence rather than logistics.
            </p>

            <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
              HCI Anchor: Temporal Decoupling & User Agency
            </div>
          </Card>

          {/* Principle 3 */}
          <Card className="p-6 sm:p-7 rounded-3xl border border-border/80 bg-card shadow-xs space-y-4 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                Principle 03
              </span>
              <h3 className="font-serif font-bold text-xl text-foreground leading-snug">
                Accommodate diverse preferences through optional interaction
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
              Not all visitors seek the same depth. Some want meditative quiet; others desire historical debates and photo spots. Layering deep engagement as strictly opt-in ensures the default system remains serene, accommodating both personas seamlessly.
            </p>

            <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
              HCI Anchor: Layered Disclosure & Inclusive Experience
            </div>
          </Card>

        </div>
      </PhaseSection>
    </>
  );
}
