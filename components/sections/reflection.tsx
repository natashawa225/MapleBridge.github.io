'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { TechnicalReflection } from '@/components/content-blocks/technical-reflection';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export function ReflectionSection() {
  const { reflection, evaluation, iterations } = portfolioData;

  return (
    <>
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
                          How Addressed
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
        description="How testing and reflection informed concrete changes to the concept"
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
            In addition to content-generation prompts, I used v0 to rapidly prototype the front-end interface.
            The prompt defined the interaction structure of the cultural map, including landmark discovery,
            movement, and audio playback. The generated code was used as an initial scaffold and then refined
            to align with the project’s user research, ensuring the final prototype remained simple,
            mobile-friendly, and focused on immersion rather than excessive interaction.
          </p>

          <TechnicalReflection data={reflection.technicalReflection} />
        </div>
      </PhaseSection>

      <PhaseSection
        id="iteration-timeline-section"
        title="Iteration Timeline"
        description="A vertical view of how trigger, change, evidence, and impact evolved over time"
      >
        <div className="relative space-y-8 pl-6 md:pl-10">
          <div className="absolute left-[0.7rem] top-2 bottom-2 w-px bg-border md:left-5" />

          {iterations.map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute left-[-0.05rem] top-2 h-4 w-4 rounded-full border-4 border-background bg-primary md:left-[0.6rem]" />

              <Card className="rounded-2xl border border-border bg-card p-6">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge>{item.id}</Badge>
                    <Badge variant="outline">Iteration {item.iteration}</Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <DetailPanel
                      label="Trigger"
                      value={`${item.trigger.type}: ${item.trigger.description}`}
                    />
                    <DetailPanel
                      label="Change"
                      value={item.whatChanged}
                    />
                    <DetailPanel
                      label="Evidence"
                      value={item.evidence}
                    />
                    <DetailPanel
                      label="Impact"
                      value={item.whyChanged}
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
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
