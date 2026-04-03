import { Card } from '@/components/ui/card';
import { PersonaData } from '@/lib/portfolio-data';
import { Target, Lightbulb, AlertCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface PersonaCardProps {
  persona: PersonaData;
}

export function PersonaCard({ persona }: PersonaCardProps) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow animate-fade-in-up overflow-hidden">
      <div className="space-y-6">
        {/* Header with image and basic info */}
        <div className="flex gap-4 flex-col sm:flex-row sm:items-start">
          {persona.image && (
            <div className="flex-shrink-0 relative w-24 h-24 rounded-full overflow-hidden bg-muted">
              <Image
                src={persona.image}
                alt={persona.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
          )}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground">{persona.name}</h3>
              <p className="text-sm font-medium text-muted-foreground mt-1">{persona.role}</p>
              {persona.tagline && (
                <p className="text-sm italic text-muted-foreground mt-1">{persona.tagline}</p>
              )}
              {persona.background && (
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">
                  {persona.background}
                </p>
              )}
          </div>
        </div>

        {/* Quote */}
        <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded-r">
          <p className="text-sm italic text-foreground">&quot;{persona.quote}&quot;</p>
        </div>

        {/* Goals */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-foreground">Goals</h4>
          </div>
          <ul className="space-y-2 ml-7">
            {persona.goals.map((goal, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1 flex-shrink-0">•</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Motivations */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-foreground">Motivations</h4>
          </div>
          <ul className="space-y-2 ml-7">
            {persona.motivations.map((motivation, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1 flex-shrink-0">•</span>
                <span>{motivation}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Attitudes */}
        {persona.attitudes?.length ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground">Attitudes</h4>
            </div>
            <ul className="space-y-2 ml-7">
              {persona.attitudes.map((attitude, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>{attitude}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Pain Points */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <h4 className="font-semibold text-foreground">Pain Points</h4>
          </div>
          <ul className="space-y-2 ml-7">
            {persona.painPoints.map((painPoint, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-destructive mt-1 flex-shrink-0">•</span>
                <span>{painPoint}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
