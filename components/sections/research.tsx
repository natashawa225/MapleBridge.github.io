import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { ResearchFindingCard } from '@/components/content-blocks/research-finding-card';
import { PersonaCard } from '@/components/content-blocks/persona-card';
import { EmotionalCurveChart } from '@/components/content-blocks/emotional-curve-chart';
import { Card } from '@/components/ui/card';

export function ResearchSection() {
  const { research } = portfolioData;

  return (
    <>
      {/* Research Findings */}
      <PhaseSection
        id="research"
        phase="Phase 2"
        title="Research: Understanding Users"
        description="Key findings from user interviews and observations that shaped the design direction"
      >
        <div className="space-y-6">
          <div id="research-findings" className="grid md:grid-cols-2 gap-6 animate-stagger">
            {research.findings.map((finding) => (
              <ResearchFindingCard key={finding.id} finding={finding} />
            ))}
          </div>
        </div>
      </PhaseSection>

      {/* Personas */}
      <PhaseSection
        id="personas-section"
        phase="Phase 2"
        title="Personas: Who We Design For"
        description="Composite profiles based on research representing key user segments"
      >
        <div id="personas" className="grid md:grid-cols-2 gap-6">
          {research.personas.map((persona) => (
            <PersonaCard key={persona.id} persona={persona} />
          ))}
        </div>
      </PhaseSection>

      {/* Scenario and Goals */}
      {/* <PhaseSection
        id="scenario-section"
        phase="Phase 2"
        title="Scenario & Goal"
        description="A detailed scenario showing how our primary persona would interact with the design"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-semibold text-primary mb-2">
                Scenario
              </h3>
              <Card className="p-6 bg-muted/30 border-l-4 border-primary">
                <p className="text-lg text-foreground leading-relaxed">
                  {research.scenarioAndGoal.scenario}
                </p>
              </Card>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest font-semibold text-primary mb-2">
                Goal
              </h3>
              <Card className="p-6 bg-muted/30 border-l-4 border-primary">
                <p className="text-lg text-foreground leading-relaxed">
                  {research.scenarioAndGoal.goal}
                </p>
              </Card>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest font-semibold text-primary mb-2">
                Success Metrics
              </h3>
              <ul className="space-y-2">
                {research.scenarioAndGoal.successMetrics.map((metric, idx) => (
                  <li key={idx} className="flex gap-3 items-start p-3 rounded-lg bg-muted/30">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span className="text-muted-foreground">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PhaseSection>

      <PhaseSection
        id="journey-section"
        phase="Phase 2"
        title="User Journey Map"
        description="Mapping the user's emotional and functional journey through the experience"
      >
        <div id="journey-map" className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {research.journeyMap.phases.map((phase, idx) => (
              <Card key={idx} className="p-4 space-y-3 border-l-4 border-primary animate-fade-in-up">
                <h4 className="font-semibold text-foreground">{phase.phase}</h4>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                    Activities
                  </p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                {phase.painPoints.length > 0 && (
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs uppercase tracking-widest text-destructive font-semibold mb-2">
                      Pain Points
                    </p>
                    <ul className="space-y-1">
                      {phase.painPoints.map((pain, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-destructive">•</span>
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Emotional Curve</h3>
            <EmotionalCurveChart data={research.journeyMap.emotionalCurve} />
          </div>
        </div>
      </PhaseSection> */}
    </>
  );
}
