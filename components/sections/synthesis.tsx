import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { InsightCard } from '@/components/content-blocks/insight-card';
import { Card } from '@/components/ui/card';
import { ArrowRight, Headphones, Map, Sparkles } from 'lucide-react';

export function SynthesisSection() {
  const { synthesis } = portfolioData;

  return (
    <>
      <PhaseSection
        id="synthesis"
        phase="Phase 3"
        title="Synthesis: Reframing the Design Direction"
        description="Using interview findings to refine the concept into a calmer, more grounded cultural experience"
      >
        <div className="space-y-12">
          {/* Intro */}
          <div className="max-w-3xl space-y-3">
          <p className="text-base leading-7 text-muted-foreground">
              The interview results pushed the project away from a feature-heavy tourist app and toward a more focused design direction. Rather than building a gamified guide with many competing features, the synthesis phase clarified that the core opportunity was to help visitors understand, navigate, and appreciate Maple Bridge without disrupting immersion.
            </p>
            <p className="text-base leading-7 text-muted-foreground">
              This led to a concept shift: from an app that asks for attention to a system that quietly supports the visit through context-aware storytelling, subtle guidance, and optional depth.
            </p>
          </div>

          {/* Key insights */}
          <div>
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-foreground">What the research made clear</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                These insights became the foundation for narrowing the concept and deciding what
                should stay central, what should become optional, and what should be removed.
              </p>
            </div>

            <div id="insights" className="grid gap-6 md:grid-cols-2">
              {synthesis.keyInsights.map((insight) => (
                <InsightCard key={insight.id} insight={insight} />
              ))}
            </div>
          </div>
        </div>
      </PhaseSection>

      <PhaseSection
  id="concept-shift-section"
  phase="Phase 3"
  title="Concept Shift"
  description="How user insights reshaped the direction"
>
  <div className="grid gap-6 lg:grid-cols-[1fr_220px_1fr] lg:items-stretch">
    {/* Before */}
    <Card className="rounded-2xl border border-border bg-muted/20 p-6">
      <div className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Earlier Direction
          </p>
          <h3 className="text-2xl font-semibold text-foreground">
            Feature-heavy tourist app
          </h3>
          <p className="text-sm leading-7 text-muted-foreground">
            The initial concept explored AI guides, quests, live crowd updates, and rewards in one
            experience. While engaging on paper, it assumed that more interaction would make the
            visit better.
          </p>
        </div>

        <div className="space-y-3 border-t border-border pt-4">
          {[
            'Screen-based interaction stayed at the center',
            'Gamified mechanics risked distracting from the place itself',
            'Too many features competed for attention during the visit',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>

    {/* Middle */}
    <div className="flex items-center justify-center">
      <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-background px-5 py-6 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted/30">
          <ArrowRight className="h-5 w-5 text-primary" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          What changed
        </p>
        <h4 className="mt-2 text-base font-semibold text-foreground">
          Interview findings reframed the priority
        </h4>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Visitors wanted a calmer, more immersive experience with light cultural support, not a
          busy app demanding constant attention.
        </p>
      </div>
    </div>

    {/* After */}
    <Card className="rounded-2xl border border-primary/25 bg-primary/5 p-6 shadow-sm">
      <div className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Refined Direction
          </p>
          <h3 className="text-2xl font-semibold text-foreground">
            A context-aware, audio-first cultural companion
          </h3>
          <p className="text-sm leading-7 text-muted-foreground">
            The concept shifted from adding features to removing friction. Instead of pulling users
            into the screen, the system supports the visit through lightweight audio, subtle
            guidance, and optional depth when people want it.
          </p>
        </div>

        <div className="space-y-3 border-t border-primary/10 pt-4">
          {[
            'Audio-first storytelling supports heads-up exploration',
            'Planning tools help before arrival, not during every moment on site',
            'Deeper engagement stays optional rather than forced',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-foreground">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  </div>
</PhaseSection>

<PhaseSection
  id="design-principles-section"
  phase="Phase 3"
  title="Design Principles"
  description="Principles derived from user insights and human-centered design"
>
  <div className="grid gap-6 md:grid-cols-3">

    {/* Principle 1 */}
    <Card className="rounded-2xl p-6">
      <div className="space-y-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Headphones className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Design for immersion through audio-first interaction
          </h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Interview findings showed that visitors prefer “heads-up” experiences where they can
            focus on the scenery rather than their phones. Audio-based storytelling allows cultural
            meaning to be delivered without interrupting visual attention. This reduces cognitive
            load and aligns with human-centered design principles that emphasize minimizing effort
            and supporting natural interaction.
          </p>
        </div>
      </div>
    </Card>

    {/* Principle 2 */}
    <Card className="rounded-2xl p-6">
      <div className="space-y-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Map className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Shift key decisions to the pre-visit phase
          </h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Users expressed a clear need for crowd awareness, route planning, and timing before
            arriving at the site. By moving these decisions earlier in the journey, the design
            reduces uncertainty and allows visitors to experience the location more calmly.
            This supports the principle of user control and distributes interaction across time
            instead of overloading the on-site experience.
          </p>
        </div>
      </div>
    </Card>

    {/* Principle 3 */}
    <Card className="rounded-2xl p-6">
      <div className="space-y-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Support diverse engagement through optional depth
          </h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Interviews revealed mixed attitudes toward interactive and AI-driven features. While
            some users enjoyed deeper engagement, others preferred a minimal, distraction-free
            experience. To accommodate this diversity, the system provides layered, opt-in
            interaction. This reflects inclusive design principles, ensuring the experience remains
            accessible, flexible, and respectful of different user preferences.
          </p>
        </div>
      </div>
    </Card>

  </div>
</PhaseSection>

      <PhaseSection
        id="final-direction-section"
        phase="Phase 3"
        title="From Insight to Final Direction"
        description="How the refined concept translates into the system structure"
      >
        <div className="space-y-8">
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
            The final synthesis outcome was not a single feature, but a three-part experience
            structure: a pre-visit layer for planning, a situated on-site layer for audio-first
            understanding, and an optional engagement layer for deeper exploration.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {synthesis.designDecisions.map((decision, idx) => (
              <Card
                key={decision.id}
                className="animate-fade-in-up rounded-2xl border border-border bg-card p-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
                      <span className="text-sm font-semibold text-primary">{idx + 1}</span>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Design Move
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{decision.decision}</h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {decision.rationale}
                    </p>
                  </div>

                  {decision.tradeoff && (
                    <div className="border-t border-border pt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-destructive">
                        Trade-off
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {decision.tradeoff}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </PhaseSection>
    </>
  );
}