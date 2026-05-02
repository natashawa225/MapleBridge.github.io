import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { ConceptEvolution } from '@/components/content-blocks/concept-evolution';
import { Card } from '@/components/ui/card';

export function DesignDevelopmentSection() {
  const { design } = portfolioData;

  return (
    <>
      {/* Concept Evolution */}
      <PhaseSection
        id="design-development"
        title="Design Development: Concept Evolution"
        description="How the concept evolved from initial ideas through refinement to the final design"
      >
        <div id="concept-evolution" className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            This section documents the iterative design process. Each stage was informed by user
            feedback and insight discoveries.
          </p>

          <ConceptEvolution stages={design.conceptEvolution} />
        </div>
      </PhaseSection>

      {/* Final Concept */}
      <PhaseSection
        id="final-concept-section"
        title="Final Concept: AI-Guided Narrative Experience"
        description="The final design solution combining spatial navigation, personalization, and storytelling"
      >
        <div id="final-concept" className="space-y-8">
          <Card className="p-8 bg-muted/30 border-l-4 border-primary animate-fade-in-up">
            <p className="text-lg text-foreground leading-relaxed">{design.finalConcept.overview}</p>
          </Card>
          <Card className="p-6 bg-muted/20 border border-border animate-fade-in-up">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Prototype Scope
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This prototype focuses on demonstrating interaction concepts rather than full system functionality. 
              Certain features (such as crowd visualization) are implemented using simulated data to communicate 
              design intent rather than real-time capability. 

              The goal of the prototype is to explore how audio-first and low-interaction design can support 
              cultural understanding in a real-world setting.
            </p>
          </Card>

          {/* Modules */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Core Modules</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {design.finalConcept.modules.map((module, idx) => (
                <Card key={idx} className="p-6 space-y-4 border-t-4 border-primary hover:shadow-md transition-shadow animate-fade-in-up">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {idx + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mt-1">{module.title}</h4>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{module.description}</p>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                      Key Features
                    </p>
                    <ul className="space-y-2">
                      {module.keyFeatures.map((feature, featureIdx) => (
                        <li key={featureIdx} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary flex-shrink-0">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </PhaseSection>
    </>
  );
}

