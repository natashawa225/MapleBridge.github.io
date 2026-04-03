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
      <PhaseSection
        id="scenario-section"
        phase="Phase 2"
        title="Scenario & Goal"
        description="How each persona would enter the experience and what they hope to achieve"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {research.scenarioAndGoals.map((item) => {
            const persona = research.personas.find((p) => p.id === item.personaId);
            return (
              <Card
                key={item.personaId}
                className="p-6 bg-muted/30 border border-border rounded-2xl backdrop-blur animate-fade-in-up"
              >
                <div className="space-y-4">
                  <div className="flex items-baseline gap-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                      {item.label}
                    </p>
                    {persona && (
                      <p className="text-xs text-muted-foreground">{persona.role}</p>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground leading-snug">
                      {persona?.name ?? 'Persona'}
                    </h3>
                    {persona?.tagline && (
                      <p className="text-sm text-muted-foreground">{persona.tagline}</p>
                    )}
                    {persona?.background && (
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">
                        {persona.background}
                      </p>
                    )}
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">{item.scenario}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">
                      Goal
                    </p>
                    <p className="text-base text-foreground">{item.goal}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </PhaseSection>

      <PhaseSection
        id="journey-section"
        phase="Phase 2"
        title="User Journey Map"
        description="Mapping the user's emotional and functional journey through the experience"
      >
        <div id="journey-map" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-5">
            {research.journeyMap.phases.map((phase, idx) => (
              <Card
                key={idx}
                className="p-5 bg-white/60 dark:bg-black/60 border-l-4 border-primary shadow-none backdrop-blur animate-fade-in-up"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground text-lg">{phase.phase}</h4>
                    <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      {`Phase ${idx + 1}`}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-2">
                        Activities
                      </p>
                      <ul className="space-y-1 pl-4 text-sm text-muted-foreground">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary">•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {phase.thoughts.length > 0 && (
                      <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-semibold mb-2">
                          Thoughts
                        </p>
                        <ul className="space-y-1 pl-4 text-sm text-muted-foreground">
                          {phase.thoughts.map((thought, i) => (
                            <li key={i} className="list-disc">
                              {thought}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {phase.opportunities.length > 0 && (
                      <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-2">
                          Opportunities
                        </p>
                        <ul className="space-y-1 pl-4 text-sm text-foreground">
                          {phase.opportunities.map((opportunity, i) => (
                            <li key={i} className="list-disc">
                              {opportunity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {phase.painPoints.length > 0 && (
                      <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-destructive font-semibold mb-2">
                          Pain Points
                        </p>
                        <ul className="space-y-1 pl-4 text-xs text-muted-foreground">
                          {phase.painPoints.map((pain, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <span className="text-destructive">•</span>
                              {pain}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Emotional Curve</h3>
            <EmotionalCurveChart data={research.journeyMap.emotionalCurve} />
          </div>
        </div>
      </PhaseSection>
    </>
  );
}
