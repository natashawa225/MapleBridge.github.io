import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { ResearchFindingCard } from '@/components/content-blocks/research-finding-card';
import { PersonaCard } from '@/components/content-blocks/persona-card';
import { EmotionalCurveChart } from '@/components/content-blocks/emotional-curve-chart';
import { Card } from '@/components/ui/card';

export interface JourneyPhase {
  phase: string;
  activities: string[];
  thoughts: string[];
  touchPoints?: string[];
  painPoints: string[];
  opportunities: string[];
}

function JourneyRow({
  title,
  phases,
  field,
  isDestructive = false,
  isHighlight = false,
}: {
  title: string;
  phases: JourneyPhase[];
  field: 'activities' | 'thoughts' | 'touchPoints' | 'painPoints' | 'opportunities';
  isDestructive?: boolean;
  isHighlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-6 border-b border-stone-200 min-h-[120px]">
      <div className="flex items-center justify-center border-r border-stone-200 bg-stone-100/50 p-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
          {title}
        </span>
      </div>

      {phases.map((phase, idx) => (
        <div key={idx} className="border-l border-stone-100 p-5 text-[13px] leading-relaxed">
          <ul className="space-y-3">
          {(phase[field] ?? []).map((item, i) => (

              <li key={i} className="flex gap-2">
                <span
                  className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${
                    isDestructive
                      ? 'bg-red-400'
                      : isHighlight
                        ? 'bg-emerald-500'
                        : 'bg-stone-300'
                  }`}
                />
                <span className={isHighlight ? 'font-medium text-stone-800' : 'text-stone-600'}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ResearchSection() {
  const { research } = portfolioData;

  return (
    <>
      <PhaseSection
        id="research"
        title="Research: Understanding Users"
        description="Key findings from user interviews and observations that shaped the design direction"
      >
        <div className="space-y-6">
          <div id="research-findings" className="grid gap-6 md:grid-cols-2 animate-stagger">
            {research.findings.map((finding) => (
              <ResearchFindingCard key={finding.id} finding={finding} />
            ))}
          </div>
        </div>
      </PhaseSection>

      <PhaseSection
        id="personas-section"
        title="Personas: Who We Design For"
        description="Composite profiles based on research representing key user segments"
      >
        <div id="personas" className="grid gap-6 md:grid-cols-2">
          {research.personas.map((persona) => (
            <PersonaCard key={persona.id} persona={persona} />
          ))}
        </div>
      </PhaseSection>

      <PhaseSection
        id="scenario-section"
        title="Scenario & Goal"
        description="How each persona would enter the experience and what they hope to achieve"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {research.scenarioAndGoals.map((item) => {
            const persona = research.personas.find((p) => p.id === item.personaId);

            return (
              <Card
                key={item.personaId}
                className="animate-fade-in-up rounded-2xl border border-border bg-muted/30 p-6 backdrop-blur"
              >
                <div className="space-y-4">
                  <div className="flex items-baseline gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {item.label}
                    </p>
                    {persona && <p className="text-xs text-muted-foreground">{persona.role}</p>}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold leading-snug text-foreground">
                      {persona?.name ?? 'Persona'}
                    </h3>

                    {persona?.tagline && (
                      <p className="text-sm text-muted-foreground">{persona.tagline}</p>
                    )}

                    {persona?.background && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {persona.background}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">{item.scenario}</p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
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
        title="User Journey Map"
        description="Mapping the user's emotional and functional journey through the experience"
      >
        <div className="space-y-8">
          <div
            id="journey-map"
            className="w-full overflow-x-auto rounded-xl border border-stone-200 bg-stone-50/30"
          >
            <div className="min-w-[1000px]">
              <div className="grid grid-cols-6 border-b border-stone-200">
                <div className="flex items-center justify-center bg-stone-100/50 p-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  Stages
                </div>

                {research.journeyMap.phases.map((phase, idx) => (
                  <div key={idx} className="border-l border-stone-200 p-4 text-center">
                    <span className="mb-1 block text-[10px] uppercase tracking-[0.3em] text-stone-400">
                      0{idx + 1}
                    </span>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800">
                      {phase.phase}
                    </h4>
                  </div>
                ))}
              </div>

              <JourneyRow
                title="Actions"
                phases={research.journeyMap.phases}
                field="activities"
              />
              <JourneyRow
                title="Touch Points"
                phases={research.journeyMap.phases}
                field="touchPoints"
              />

              <JourneyRow
                title="Pain Points"
                phases={research.journeyMap.phases}
                field="painPoints"
                isDestructive
              />

              <JourneyRow
                title="Opportunity"
                phases={research.journeyMap.phases}
                field="opportunities"
                isHighlight
              />
            </div>
          </div>

          <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold text-foreground">Emotional Journey</h3>
            <EmotionalCurveChart data={research.journeyMap.emotionalCurve} />
          </div>
        </div>
      </PhaseSection>
    </>
  );
}