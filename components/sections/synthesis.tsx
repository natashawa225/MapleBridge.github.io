import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { InsightCard } from '@/components/content-blocks/insight-card';
import { DesignDecisionMap } from '@/components/content-blocks/design-decision-map';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function SynthesisSection() {
  const { synthesis } = portfolioData;

  return (
    <>
      {/* Key Insights */}
      <PhaseSection
        id="synthesis"
        phase="Phase 3"
        title="Synthesis: Making Meaning"
        description="Translating research findings into actionable insights and design direction"
      >
        <div id="insights" className="grid md:grid-cols-2 gap-6">
          {synthesis.keyInsights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </PhaseSection>

      {/* Insight to Design Decision Mapping */}
      <PhaseSection
        id="insight-mapping-section"
        phase="Phase 3"
        title="Insight → Design Decision"
        description="Tracing how research findings directly informed specific design decisions"
      >
        <div id="insight-mapping" className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Each research insight led to deliberate design decisions. Below shows the explicit
            traceability from research findings to the final design direction.
          </p>

          <DesignDecisionMap mappings={synthesis.insightToDesignMapping} />
        </div>
      </PhaseSection>

      {/* Design Decisions & Trade-offs */}
      <PhaseSection
        id="design-decisions-section"
        phase="Phase 3"
        title="Design Decisions & Trade-offs"
        description="Key decisions where we had to balance competing needs and requirements"
      >
        <div id="design-decisions" className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Design is about making choices. Here are the major decisions we made and the
            trade-offs we accepted.
          </p>

          <div className="grid md:grid-cols-1 gap-6">
            {synthesis.designDecisions.map((decision, idx) => (
              <Card key={decision.id} className="p-6 space-y-4 border-l-4 border-primary animate-fade-in-up">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{idx + 1}</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">{decision.decision}</h4>

                    <div className="pt-2 border-t border-border">
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                        Based on Insight
                      </p>
                      <p className="text-muted-foreground">{decision.insight}</p>
                    </div>

                    <div className="pt-2 border-t border-border">
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                        Rationale
                      </p>
                      <p className="text-muted-foreground leading-relaxed">{decision.rationale}</p>
                    </div>

                    {decision.tradeoff && (
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs uppercase tracking-widest text-destructive font-semibold mb-2">
                          Trade-off
                        </p>
                        <p className="text-muted-foreground text-sm">{decision.tradeoff}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </PhaseSection>
    </>
  );
}
