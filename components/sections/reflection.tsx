'use client';

import { withBasePath } from '@/lib/basePath';


import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { TechnicalReflection } from '@/components/content-blocks/technical-reflection';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CheckCircle2, MessageSquare, Users, MousePointer2, TrendingUp } from 'lucide-react';

export function ReflectionSection() {
  const { reflection, evaluation, iterations } = portfolioData;

  return (
    <>
      <PhaseSection
        id="usability-testing"
        title="Usability Testing: Alpha Prototype Feedback"
        description="Evaluation of the Alpha prototype with users from the original requirement-gathering stage."
        >
        <div className="space-y-8">
        <Card className="p-6 bg-muted/20 border border-border">
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            Evaluation Approach
          </h4>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            The Alpha evaluation was conducted as a semi-controlled prototype walkthrough with
            9 participants: 4 Chinese visitors and 5 international visitors. The aim was to check
            whether the prototype still addressed the original user requirements and to identify
            refinement opportunities. This was a usability-oriented evaluation rather than a formal
            experiment, so the findings are reported as qualitative themes and design implications
            rather than statistical results.
          </p>
        </Card>
          {/* Methodology Summary */}
          <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4 border-l-4 border-primary bg-muted/30">
            <div className="flex items-center gap-3 mb-2 text-primary">
              <Users size={18} />
              <span className="text-xs font-bold uppercase">Participants</span>
            </div>
            <p className="text-sm font-medium">
              9 participants: 4 Chinese visitors, 5 international visitors
            </p>
          </Card>
            <Card className="p-4 border-l-4 border-primary bg-muted/30">
              <div className="flex items-center gap-3 mb-2 text-primary">
                <MessageSquare size={18} />
                <span className="text-xs font-bold uppercase">Methodology</span>
              </div>
              <p className="text-sm font-medium">Think-aloud walkthrough and semi-structured feedback</p>
            </Card>
            <Card className="p-4 border-l-4 border-primary bg-muted/30">
              <div className="flex items-center gap-3 mb-2 text-primary">
                <MousePointer2 size={18} />
                <span className="text-xs font-bold uppercase">Environment</span>
              </div>
              <p className="text-sm font-medium">Guided walkthrough of the deployed prototype</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'Overall Response',
                value: 'Positive',
                desc: 'Participants understood the concept and liked the cultural companion direction.',
              },
              {
                label: 'Main Issue',
                value: 'Crowd Data',
                desc: 'Users felt the crowd information needed clearer structure and location-specific detail.',
              },
              {
                label: 'Refinement',
                value: 'Structured',
                desc: 'The crowd feature was changed into Today, This Week, By Spot, and Upcoming Events.',
              },
            ].map((metric, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">
                  {metric.label}
                </p>
                <p className="text-3xl font-serif font-bold text-primary mb-2">
                  {metric.value}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Qualitative Feedback */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <TrendingUp size={14} /> Paraphrased Feedback Themes
            </h4>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <blockquote className="p-4 border-l-2 border-stone-200 bg-muted/20 rounded-r-xl">
              Participants wanted to know which specific places were crowded, not just whether the whole area was busy.
              </blockquote>

              <blockquote className="p-4 border-l-2 border-stone-200 bg-muted/20 rounded-r-xl">
              Participants wanted crowd information to be organised by today, this week, and events affecting specific spots.

              </blockquote>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              These comments were paraphrased from the feedback discussion rather than treated as formal
              survey quotes. The purpose of this Alpha test was to identify design problems and guide
              refinement, not to produce statistically generalisable results.
            </p>
          </div>
        </div>
      </PhaseSection>

      {/* 5.2 Iterative Refinement */}
      <PhaseSection
        id="iteration-timeline-section"
        title="Iterative Refinement: Before & After"
        description="Visual evidence of how feedback shaped the prototype over time."
      >
        <div className="relative space-y-16">
          <div className="absolute left-[0.75rem] top-4 bottom-4 w-px bg-border md:left-6" />
          
          {iterations.map((item) => (
            <div key={item.id} className="relative">              
              <Card className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                {/* Header */}
                <div className="px-6 py-4 border-b border-border bg-muted/30 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Badge className="font-mono">{item.id}</Badge>
                    <Badge variant="secondary">Iteration {item.iteration}</Badge>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-foreground italic">{item.title}</h3>
                </div>

                <div className="p-6 md:p-10 space-y-12">
                  {/* COMPARISON STACK - Better for drastically different aspect ratios */}
                  <div className="relative">
                    {/* Mobile scroll hint */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none lg:hidden">
                      <div className="bg-background/80 backdrop-blur rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground border shadow-sm animate-pulse">
                        Swipe →
                      </div>
                    </div>

                    <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
                      
                          {/* BEFORE - Tall Portrait (WIDER) */}
                          <div className="flex-shrink-0 snap-start w-[320px] md:w-[380px] lg:w-[420px]">
                        <div className="mb-3 text-center md:text-left">
                          <p className="text-[11px] font-black uppercase tracking-[0.15em] text-muted-foreground">
                            Alpha Version
                          </p>
                          <p className="text-[10px] text-muted-foreground/70 lowercase font-medium">General crowd preview</p>
                        </div>
                        <div className="bg-muted/5 rounded-2xl border border-dashed border-muted p-4 md:p-6 h-[520px] md:h-[580px] flex items-center justify-center">
                          <img 
                            src={withBasePath('/artifacts/version1.png')} 
                            alt="Alpha prototype"
                            className="max-h-full w-auto object-contain drop-shadow-md" 
                          />
                        </div>
                      </div>

                      {/* Arrow indicator */}
                      <div className="flex-shrink-0 flex items-center justify-center w-10 md:w-12 self-center pt-6">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      {/* AFTER - Wide Landscape */}
                      <div className="flex-shrink-0 snap-start min-w-[85vw] md:min-w-[650px] lg:min-w-[750px]">
                        <div className="mb-3 text-center md:text-left">
                          <p className="text-[11px] font-black uppercase tracking-[0.15em] text-primary">
                            Refined Version
                          </p>
                          <p className="text-[10px] text-primary/70 lowercase font-medium">Structured crowd forecast</p>
                        </div>
                        <div className="bg-primary/5 rounded-2xl border border-primary/10 p-4 md:p-6 h-[520px] md:h-[580px] flex items-center justify-center overflow-hidden">
                          <img 
                            src={withBasePath('/artifacts/version2.png')} 
                            alt="Refined multi-frame design"
                            className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-xl" 
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Context Grid */}
                  <div className="grid gap-6 md:grid-cols-2 pt-8 border-t border-border">
                    <div className="p-5 rounded-xl border border-border bg-muted/10">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">The Feedback</h4>
                      <p className="text-sm leading-relaxed">{item.trigger.description}</p>
                    </div>
                    <div className="p-5 rounded-xl border border-border bg-muted/10">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">Action Taken</h4>
                      <p className="text-sm leading-relaxed">{item.whatChanged}</p>
                    </div>
                    
                    <div className="md:col-span-2 p-6 rounded-xl bg-primary/[0.03] border border-primary/10 border-l-4 border-l-primary">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Validation of Change</p>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed italic">
                        "{item.evidence}" — This shift resulted in <span className="text-foreground font-medium">{item.whyChanged}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </PhaseSection>
      {/* Validation & Impact */}
      <PhaseSection
        id="reflection"
        title="Reflection: Validation & Impact"
        description="How the final design addresses original research findings and user pain points"
      >
        <div id="validation" className="space-y-8">
          <div className="space-y-4">
            {reflection.validationAndImpact.originalPainPoints.map((item, idx) => (
              <Card key={idx} className="p-6 space-y-4 border-l-4 border-primary animate-fade-in-up">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <AlertTriangleIcon className="h-5 w-5 text-destructive mt-1" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">{item.painPoint}</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                          How it was Addressed
                        </p>
                        <p className="text-sm text-muted-foreground">{item.addressed}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                          Evidence
                        </p>
                        <p className="text-sm text-muted-foreground italic">{item.evidence}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </PhaseSection>

      <PhaseSection
        id="evaluation-section"
        title="Evaluation Evidence"
        description="How prototype testing informed concrete changes to the design."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {evaluation.map((item) => (
            <Card key={item.id} className="rounded-2xl border border-border bg-card p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="capitalize">
                      {item.method}
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground">{item.context}</h3>
                  </div>
                  <Badge variant="outline">{item.id}</Badge>
                </div>

                <div className="space-y-3">
                  <DetailPanel
                    label="Findings"
                    value={item.findings}
                  />
                  <DetailPanel
                    label="Evidence"
                    value={item.evidence}
                  />
                  <DetailPanel
                    label="What changed because of this"
                    value={item.iterationImpact}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PhaseSection>

      {/* Technical Reflection */}
      <PhaseSection
        id="technical-section"
        title="Technical Reflection"
        description="Detailed documentation of methodology, verification, and ethical considerations"
      >
        <div id="technical-reflection" className="space-y-4">
          <p className="text-sm text-muted-foreground max-w-3xl">
          In addition to content-generation prompts, I used v0 to prototype the front-end interface quickly. The initial prompt focused on the cultural map interaction, including landmark discovery, movement, and audio playback. The generated code worked as a starting point rather than a final solution, and many parts were simplified or reworked after interviews and prototype reviews. Over time, the design shifted away from feature-heavy interaction toward a more audio-first and low-distraction experience.
          </p>

          <TechnicalReflection data={reflection.technicalReflection} />
        </div>
      </PhaseSection>

      {/* Final Reflection */}
      <PhaseSection
        id="final-reflection-section"
        title="Learning & Future Directions"
        description="Key takeaways and opportunities for evolution"
      >
        <div id="final-reflection" className="space-y-8">
          {/* Key Learning */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Key Learnings</h3>
            <div className="space-y-3">
              {reflection.finalReflection.learning.map((learning, idx) => (
                <Card key={idx} className="p-4 flex gap-3 items-start bg-muted/30 animate-fade-in-up">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{learning}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Evolution */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">Process Evolution</h3>
            <Card className="p-6 bg-muted/30 border-l-4 border-primary">
              <p className="text-lg text-foreground leading-relaxed">
                {reflection.finalReflection.evolution}
              </p>
            </Card>
          </div>

          {/* Future Directions */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Future Directions</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {reflection.finalReflection.futureDirections.map((direction, idx) => (
                <Card key={idx} className="p-4 space-y-2 border-l-4 border-primary animate-fade-in-up">
                  <p className="text-sm font-semibold text-foreground">{direction}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </PhaseSection>

      {/* References */}
      <PhaseSection
        id="references-section"
        title="References"
        description="Academic sources and tools referenced throughout the project"
      >
        <div id="references" className="space-y-8">
          {Object.entries(reflection.references).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-foreground mb-3 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <ol className="space-y-3">
                {Array.isArray(items) &&
                  items.map((item, idx) => (
                    <li
                      key={idx}
                      className="grid grid-cols-[2rem_1fr] items-start text-sm text-muted-foreground"
                    >
                      <span className="text-primary font-medium">{idx + 1}.</span>
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
              </ol>
            </div>
          ))}
        </div>
      </PhaseSection>
    </>
  );
}

function DetailPanel({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/70 bg-muted/30 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{label}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{value}</p>
    </div>
  );
}

// Simple icon component since we're in a client component
function AlertTriangleIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
