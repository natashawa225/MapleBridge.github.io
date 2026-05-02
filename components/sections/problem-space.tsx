import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { ArtifactGallery } from '@/components/content-blocks/artifact-gallery';
import { AlertCircle } from 'lucide-react';

export function ProblemSpaceSection() {
  const { overview } = portfolioData;

  return (
    <PhaseSection
      id="overview"
      title="Overview: Problem Space"
      description="Understanding the challenge and the opportunity"
    >
      <div className="space-y-8">
        {/* Problem Statement */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold font-serif text-foreground">The Challenge</h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {overview.problemSpace.context}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {overview.problemSpace.opportunity}
          </p>
        </div>

        {/* Pain Points */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground">Pain Points Identified</h3>
          <div className="grid sm:grid-cols-2 gap-6 animate-stagger">
            {overview.problemSpace.painPoints.map((painPoint, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-border animate-fade-in-up"
              >
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">{painPoint}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Artifacts */}
        {overview.problemSpace.artifacts.length > 0 && (
          <div className="space-y-4">
            <ArtifactGallery artifacts={overview.problemSpace.artifacts} layout="grid" columns={1} />
          </div>
        )}
      </div>
    </PhaseSection>
  );
}
