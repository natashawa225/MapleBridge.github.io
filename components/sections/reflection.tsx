'use client';

import { useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { TechnicalReflection } from '@/components/content-blocks/technical-reflection';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { withBasePath } from '@/lib/basePath';
import {
  Users,
  MessageSquare,
  MousePointer2,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Wrench,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  X,
  Compass,
} from 'lucide-react';

export function ReflectionSection() {
  const { reflection, evaluation, iterations } = portfolioData;
  const [activeImageZoom, setActiveImageZoom] = useState<{ src: string; title: string } | null>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('side-by-side');

  return (
    <>
      {/* 14. USABILITY TESTING & ALPHA EVALUATION */}
      <PhaseSection
        id="evaluation"
        number="14"
        chineseTitle="可用性测试 · 实证反馈"
        eyebrow="Usability Evaluation & Alpha Walkthrough"
        title="Validating the Experience in the Field"
        description="Semi-controlled walkthroughs with 9 original participants to assess comprehension, pacing, and crowd forecasting."
      >
        <div className="space-y-12">
          
          {/* Methodology Banner */}
          <Card className="p-6 sm:p-8 rounded-3xl border border-border/80 bg-card/90 space-y-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                Alpha Testing Protocol
              </span>
              <span className="text-xs font-mono text-muted-foreground">Qualitative Usability Audit</span>
            </div>

            <p className="text-sm sm:text-base text-foreground font-light leading-relaxed">
              The Alpha evaluation was conducted as a semi-controlled prototype walkthrough with <strong>9 participants</strong> (4 Chinese visitors and 5 international visitors) recruited from the initial requirement discovery phase. Participants executed a think-aloud protocol while navigating the deployed prototype. As this was a qualitative formative assessment rather than a controlled statistical experiment, findings are documented as actionable interaction patterns and design pivots.
            </p>
          </Card>

          {/* Test Setup Metric Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase">
                <Users className="w-4 h-4" />
                <span>Cohort Distribution</span>
              </div>
              <p className="font-serif font-bold text-2xl text-foreground">9 Participants</p>
              <p className="text-xs text-muted-foreground font-light">
                4 Chinese nationals & 5 international residents in Suzhou
              </p>
            </Card>

            <Card className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <div className="flex items-center gap-2 text-secondary font-bold text-xs font-mono uppercase">
                <MessageSquare className="w-4 h-4" />
                <span>Evaluation Method</span>
              </div>
              <p className="font-serif font-bold text-2xl text-foreground">Think-Aloud</p>
              <p className="text-xs text-muted-foreground font-light">
                Continuous verbalization of mental models & navigational expectations
              </p>
            </Card>

            <Card className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase">
                <MousePointer2 className="w-4 h-4" />
                <span>Test Environment</span>
              </div>
              <p className="font-serif font-bold text-2xl text-foreground">Live Mobile Web</p>
              <p className="text-xs text-muted-foreground font-light">
                Touchscreen mobile walkthrough of deployed prototype build
              </p>
            </Card>
          </div>

          {/* Key Usability Finding: The Crowd Information Pivot */}
          <Card className="p-6 sm:p-8 rounded-3xl border border-secondary/30 bg-secondary/[0.03] space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
                Primary Evaluative Discovery
              </span>
              <h3 className="font-serif font-bold text-2xl text-foreground">
                The Demand for Structured, Actionable Crowd Foresight
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                While participants strongly approved of the calm, audio-first narrative companion, their most acute critique centered on the crowd preview. The Alpha prototype presented crowd density as a single generalized metric (e.g. “Moderate”). Participants argued this was too vague to inform real planning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-muted/50 border border-border/70 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-bold block">
                  Observed User Feedback
                </span>
                <p className="text-xs sm:text-sm font-serif italic text-foreground leading-relaxed">
                  “Knowing the whole scenic area is ‘moderate’ doesn’t tell me if the bridge arch itself is packed right now, or if tomorrow morning would be calmer.”
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block">
                  Iterative Design Outcome
                </span>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                  Redesigned into a four-way structured forecast: <strong>Today</strong>, <strong>This Week</strong>, <strong>By Spot</strong>, and <strong>Upcoming Events</strong> affecting spatial flow.
                </p>
              </div>
            </div>
          </Card>

          {/* Qualitative Feedback Themes */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-secondary" />
              <span>Validated Qualitative Themes from Participants</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Acoustic Heads-Up Presence</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  Participants confirmed that listening to short historical explanations while gazing at the water felt significantly more relaxing and culturally grounded than reading mobile articles on Baidu Baike or Dianping.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Relief from App-Switching</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  International participants highlighted that having English narration with original Tang poetic context eliminated the friction of running real-time camera translation tools over ancient stone inscriptions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </PhaseSection>

      {/* 15. ITERATIVE REFINEMENT: BEFORE & AFTER */}
      <PhaseSection
        id="iteration"
        number="15"
        chineseTitle="设计迭代 · 前后对比"
        eyebrow="Iterative Refinement & Visual Evidence"
        title="Visualizing the Evolution: Alpha vs. Refined Design"
        description="Direct before-and-after visual evidence showing how participant feedback transformed the prototype."
      >
        <div className="space-y-8">
          
          {/* Comparison Mode Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
                Iteration I1 Case Study
              </span>
              <h3 className="font-serif font-bold text-xl text-foreground">
                Crowd Forecasting Module Restructuring
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('side-by-side')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                  viewMode === 'side-by-side'
                    ? 'bg-primary text-primary-foreground border-primary font-bold'
                    : 'bg-muted/40 text-muted-foreground border-border hover:bg-muted'
                }`}
              >
                Side-by-Side View
              </button>
              <button
                onClick={() => setViewMode('slider')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                  viewMode === 'slider'
                    ? 'bg-primary text-primary-foreground border-primary font-bold'
                    : 'bg-muted/40 text-muted-foreground border-border hover:bg-muted'
                }`}
              >
                Interactive Slider
              </button>
            </div>
          </div>

          {/* Interactive Comparison Presentations */}
          {viewMode === 'side-by-side' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Alpha Prototype */}
              <Card className="p-6 rounded-3xl border border-border bg-card space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                      Before • Alpha Version
                    </span>
                    <h4 className="font-serif font-bold text-lg text-foreground">General Crowd Preview</h4>
                  </div>
                  <Badge variant="outline" className="text-xs font-mono">Iteration 0</Badge>
                </div>

                <div
                  onClick={() => setActiveImageZoom({ src: withBasePath('/artifacts/version1.png'), title: 'Alpha Version: General Crowd Preview' })}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/40 border border-border cursor-pointer group flex items-center justify-center p-3"
                >
                  <img
                    src={withBasePath('/artifacts/version1.png')}
                    alt="Alpha prototype with generalized crowd indicator"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-background/80 backdrop-blur-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-destructive/5 border border-destructive/20 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-mono text-destructive font-bold uppercase text-[10px] block mb-0.5">Problem Identified</span>
                  A single static crowd tag failed to inform temporal decisions (when to visit) or spatial planning (which stone bridge is quiet).
                </div>
              </Card>

              {/* Refined Prototype */}
              <Card className="p-6 rounded-3xl border border-primary/30 bg-card space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-primary/20 pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                      After • Refined Architecture
                    </span>
                    <h4 className="font-serif font-bold text-lg text-foreground">Multi-Dimensional Forecast</h4>
                  </div>
                  <Badge className="bg-primary text-primary-foreground text-xs font-mono">Iteration 1</Badge>
                </div>

                <div
                  onClick={() => setActiveImageZoom({ src: withBasePath('/artifacts/version2.png'), title: 'Refined Version: Structured Crowd Forecast' })}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/40 border border-primary/20 cursor-pointer group flex items-center justify-center p-3"
                >
                  <img
                    src={withBasePath('/artifacts/version2.png')}
                    alt="Refined prototype with structured crowd forecast"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-background/80 backdrop-blur-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-xs text-foreground leading-relaxed">
                  <span className="font-mono text-primary font-bold uppercase text-[10px] block mb-0.5">Design Solution</span>
                  Four clear tabs: Today (hourly curve), This Week (daily trends), By Spot (Fengqiao vs Hanshan), and Upcoming Events.
                </div>
              </Card>

            </div>
          ) : (
            <Card className="p-6 rounded-3xl border border-border bg-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">
                  ← Drag the slider to compare Alpha (left) vs Refined (right) →
                </span>
                <span className="text-xs font-mono text-secondary font-bold">
                  {sliderPos}% Split
                </span>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-muted select-none border border-border">
                {/* Refined Image (Background) */}
                <img
                  src={withBasePath('/artifacts/version2.png')}
                  alt="Refined prototype"
                  className="absolute inset-0 w-full h-full object-contain bg-white"
                />

                {/* Alpha Image (Clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <img
                    src={withBasePath('/artifacts/version1.png')}
                    alt="Alpha prototype"
                    className="absolute inset-0 w-full h-full object-contain bg-white"
                  />
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-secondary shadow-lg cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shadow-md">
                    <Compass className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <input
                type="range"
                min="5"
                max="95"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="w-full cursor-pointer accent-secondary"
              />
            </Card>
          )}

          {/* Iteration Change Context Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-bold">
                1. The Trigger
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                {iterations[0].trigger.description}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                2. What Changed
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                {iterations[0].whatChanged}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
                3. The Outcome
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                {iterations[0].whyChanged}
              </p>
            </div>
          </div>

        </div>

        {/* Zoom Lightbox Modal */}
        {activeImageZoom && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            onClick={() => setActiveImageZoom(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden border border-border shadow-2xl p-6 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-border/70">
                <span className="text-xs font-mono uppercase tracking-wider text-secondary font-bold">
                  {activeImageZoom.title}
                </span>
                <button
                  onClick={() => setActiveImageZoom(null)}
                  className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white p-4 flex items-center justify-center">
                <img
                  src={activeImageZoom.src}
                  alt={activeImageZoom.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </PhaseSection>

      {/* 16. REFLECTION & EVALUATION */}
      <PhaseSection
        id="reflection"
        number="16"
        chineseTitle="反思与评估 · 经验沉淀"
        eyebrow="Evaluation Reflection & Critical Analysis"
        title="Critical Reflection on Process & Impact"
        description="Examining what succeeded, what failed, and how the research reshaped our understanding of cultural HCI."
      >
        <div className="space-y-12">
          
          {/* Validation of Original Pain Points */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-2xl text-foreground">
              Addressing Core Visitor Pain Points
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reflection.validationAndImpact.originalPainPoints.map((item, idx) => (
                <Card
                  key={idx}
                  className="p-6 rounded-3xl border border-border/80 bg-card shadow-xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
                      Pain Point 0{idx + 1}
                    </span>
                    <h4 className="font-serif font-bold text-lg text-foreground">
                      {item.painPoint}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-light">
                      {item.addressed}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-muted/40 border border-border/60 text-xs italic font-serif text-muted-foreground leading-relaxed">
                    “{item.evidence}”
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Learnings & Future Directions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-border/70">
            
            {/* Key Learnings */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                Methodological Takeaways
              </span>
              <h3 className="font-serif font-bold text-xl text-foreground">
                What This Project Taught Us
              </h3>
              <div className="space-y-3">
                {reflection.finalReflection.learning.map((learn, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-border/70 bg-card/80 flex items-start gap-3 text-xs leading-relaxed text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{learn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Directions */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-secondary font-semibold">
                Opportunities for Evolution
              </span>
              <h3 className="font-serif font-bold text-xl text-foreground">
                Future Research Directions
              </h3>
              <div className="space-y-3">
                {reflection.finalReflection.futureDirections.map((dir, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-border/70 bg-card/80 flex items-start gap-3 text-xs leading-relaxed text-muted-foreground"
                  >
                    <ArrowRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{dir}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </PhaseSection>

      {/* 17. TECHNICAL REFLECTION & AI USAGE */}
      <PhaseSection
        id="technical-reflection"
        number="17"
        chineseTitle="技术反思 · 伦理与AI"
        eyebrow="Technical Governance & AI Ethics"
        title="Technical Reflection, Verification & Ethical Rigor"
        description="Transparent accounting of prompt engineering, verification protocols, failure modes, and cultural ethics."
      >
        <div className="space-y-8">
          <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-3xl">
            Throughout the project, artificial intelligence utilities were leveraged to accelerate exploratory interface prototyping and qualitative theme analysis. However, every AI suggestion was subjected to strict empirical verification against interview findings. Collapsible panels below document our prompts, verification checks, ethical considerations, and observed tool limitations.
          </p>

          <TechnicalReflection data={reflection.technicalReflection} />
        </div>
      </PhaseSection>

      {/* 18. ACADEMIC REFERENCES */}
      <PhaseSection
        id="references"
        number="18"
        chineseTitle="参考文献 · 学术基石"
        eyebrow="Academic Bibliography & External Sources"
        title="Literature & Technological References"
        description="Formal citations adhering to academic peer-reviewed standards across HCI, cultural heritage, and tool ecosystems."
      >
        <div className="space-y-12">
          
          {/* Section 1: HCI & Interaction Design Literature */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 text-primary border-b border-primary/20">
              <BookOpen className="w-4 h-4" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest">
                HCI, Cultural Informatics & Experience Design Literature
              </h3>
            </div>

            <ol className="space-y-3">
              {reflection.references.hciAndDesign.map((citation, idx) => (
                <li
                  key={idx}
                  className="p-4 rounded-2xl border border-border/70 bg-card text-xs text-muted-foreground leading-relaxed flex items-start gap-3"
                >
                  <span className="font-mono font-bold text-primary shrink-0">
                    [HCI-{idx + 1}]
                  </span>
                  <span className="flex-1 font-serif text-[13px]">{citation}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Section 2: Cultural Heritage Documents */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 text-secondary border-b border-secondary/20">
              <Compass className="w-4 h-4" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest">
                Cultural Heritage & Municipal Documentation
              </h3>
            </div>

            <ol className="space-y-3">
              {reflection.references.culturalHeritage.map((citation, idx) => (
                <li
                  key={idx}
                  className="p-4 rounded-2xl border border-border/70 bg-card text-xs text-muted-foreground leading-relaxed flex items-start gap-3"
                >
                  <span className="font-mono font-bold text-secondary shrink-0">
                    [HERITAGE-{idx + 1}]
                  </span>
                  <span className="flex-1 font-serif text-[13px]">{citation}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Section 3: Technical Tools & Platforms */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 text-foreground border-b border-border">
              <Wrench className="w-4 h-4" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest">
                Technological Platforms & Generative AI Tools
              </h3>
            </div>

            <ol className="space-y-3">
              {reflection.references.tools.map((citation, idx) => (
                <li
                  key={idx}
                  className="p-4 rounded-2xl border border-border/70 bg-card text-xs text-muted-foreground leading-relaxed flex items-start gap-3"
                >
                  <span className="font-mono font-bold text-muted-foreground shrink-0">
                    [TOOL-{idx + 1}]
                  </span>
                  <span className="flex-1 font-mono text-[11px] leading-relaxed">{citation}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </PhaseSection>
    </>
  );
}
