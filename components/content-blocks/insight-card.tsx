import { Card } from '@/components/ui/card';
import { InsightData } from '@/lib/portfolio-data';
import Image from 'next/image';

interface InsightCardProps {
  insight: InsightData;
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow animate-fade-in-up">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">{insight.insight}</h3>
        <p className="text-muted-foreground leading-relaxed">{insight.explanation}</p>
        {insight.artifact && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted">
              <Image
                src={insight.artifact.src}
                alt={insight.artifact.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {insight.artifact.caption && (
              <p className="text-sm text-muted-foreground mt-2 italic">{insight.artifact.caption}</p>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
