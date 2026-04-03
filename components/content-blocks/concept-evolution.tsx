import { Card } from '@/components/ui/card';
import { IterationStage } from '@/lib/portfolio-data';
import { ArtifactGallery } from './artifact-gallery';
import { ArrowRight } from 'lucide-react';

interface ConceptEvolutionProps {
  stages: IterationStage[];
}

export function ConceptEvolution({ stages }: ConceptEvolutionProps) {
  return (
    <div className="space-y-8">
      {/* Desktop Timeline View */}
      <div className="hidden md:block">
        <div className="space-y-6">
          {stages.map((stage, idx) => (
            <div key={stage.id} className="space-y-4">
              <Card className="p-6 border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent animate-fade-in-up">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{stage.title}</h4>
                      <p className="text-sm text-muted-foreground capitalize">{stage.stage}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{stage.description}</p>
                </div>
              </Card>

              {/* Artifacts */}
              {stage.artifacts.length > 0 && (
                <div className="ml-12 mb-6">
                  <ArtifactGallery artifacts={stage.artifacts} layout="grid" columns={2} />
                </div>
              )}

              {/* Arrow to next stage */}
              {idx < stages.length - 1 && (
                <div className="flex justify-center py-4">
                  <ArrowRight className="h-8 w-8 text-primary rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {stages.map((stage, idx) => (
          <div key={stage.id} className="space-y-3">
            <Card className="p-4 border-l-4 border-primary">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{stage.title}</h4>
                    <p className="text-xs text-muted-foreground capitalize">{stage.stage}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{stage.description}</p>
              </div>
            </Card>

            {/* Artifacts */}
            {stage.artifacts.length > 0 && (
              <ArtifactGallery artifacts={stage.artifacts} layout="carousel" />
            )}

            {/* Arrow to next */}
            {idx < stages.length - 1 && (
              <div className="flex justify-center py-2">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
