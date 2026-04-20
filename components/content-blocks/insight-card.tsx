import { Card } from '@/components/ui/card';
import { InsightData } from '@/lib/portfolio-data';
import { Lightbulb, Quote } from 'lucide-react';
import Image from 'next/image';

interface InsightCardProps {
  insight: InsightData;
  index?: number;
}

export function InsightCard({ insight, index = 0 }: InsightCardProps) {
  return (
    <Card 
      className="group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-card to-muted/30 p-0 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Accent gradient bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
      
      <div className="p-6 pt-8">
        <div className="flex items-start gap-4">
          {/* Icon container */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            <Lightbulb className="h-5 w-5" />
          </div>
          
          <div className="flex-1 space-y-3">
            {/* Insight title */}
            <h3 className="text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
              {insight.insight}
            </h3>
            
            {/* Explanation */}
            <div className="relative">
              <Quote className="absolute -left-1 -top-1 h-4 w-4 text-muted-foreground/20" />
              <p className="pl-4 text-sm leading-relaxed text-muted-foreground">
                {insight.explanation}
              </p>
            </div>
          </div>
        </div>

        {/* Artifact image */}
        {insight.artifact && (
          <div className="mt-6 pt-5 border-t border-border/50">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-muted ring-1 ring-border/50">
              <Image
                src={insight.artifact.src}
                alt={insight.artifact.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay gradient for better caption readability */}
              {insight.artifact.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-xs text-white/90 font-medium">
                    {insight.artifact.caption}
                  </p>
                </div>
              )}
            </div>
            {/* External caption for cases without overlay */}
            {insight.artifact.caption && (
              <p className="sr-only">{insight.artifact.caption}</p>
            )}
          </div>
        )}
      </div>
      
      {/* Subtle hover effect */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/50 transition-colors group-hover:ring-primary/20" />
    </Card>
  );
}
