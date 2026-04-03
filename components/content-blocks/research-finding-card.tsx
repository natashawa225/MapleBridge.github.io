import { Card } from '@/components/ui/card';
import { ResearchFinding } from '@/lib/portfolio-data';
import * as LucideIcons from 'lucide-react';

interface ResearchFindingCardProps {
  finding: ResearchFinding;
}

export function ResearchFindingCard({ finding }: ResearchFindingCardProps) {
  // Dynamically get icon component
  const IconComponent =
    finding.icon && finding.icon in LucideIcons
      ? (LucideIcons as Record<string, any>)[finding.icon]
      : null;

  return (
    <Card className="p-6 hover:shadow-md transition-shadow animate-fade-in-up">
      <div className="space-y-4">
        <div className="flex gap-4 items-start">
          {IconComponent && (
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconComponent className="h-5 w-5 text-primary" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">{finding.title}</h3>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">{finding.description}</p>

        <div className="pt-2 border-t border-border">
          <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">
            Evidence
          </p>
          <p className="text-sm text-muted-foreground italic">{finding.evidence}</p>
        </div>
      </div>
    </Card>
  );
}
