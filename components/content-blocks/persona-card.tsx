import { Card } from '@/components/ui/card';
import { PersonaData } from '@/lib/portfolio-data';
import { Target, Compass, Sparkles, AlertCircle, Quote, User } from 'lucide-react';

interface PersonaCardProps {
  persona: PersonaData;
  variant?: 'terracotta' | 'forest';
}

export function PersonaCard({ persona, variant = 'forest' }: PersonaCardProps) {
  const isTerracotta = variant === 'terracotta';
  const accentColor = isTerracotta ? 'text-secondary' : 'text-primary';
  const badgeBorder = isTerracotta ? 'border-secondary/30 bg-secondary/5 text-secondary' : 'border-primary/30 bg-primary/5 text-primary';
  const quoteBg = isTerracotta ? 'bg-secondary/5 border-l-4 border-secondary' : 'bg-primary/5 border-l-4 border-primary';

  const demographics = [
    persona.demographics?.age ? `${persona.demographics.age} years old` : null,
    persona.demographics?.gender ?? null,
    persona.demographics?.nationality ?? null,
    persona.demographics?.education ?? null,
    persona.demographics?.occupation ?? null,
    persona.demographics?.civilStatus ?? null,
  ].filter(Boolean);

  return (
    <Card className="overflow-hidden border border-border/80 bg-card rounded-3xl shadow-xs transition-all duration-300 hover:shadow-md">
      {/* Top Editorial Banner */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Header with Portrait & Metadata */}
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {persona.image && (
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden border border-border shadow-xs bg-muted">
              <img
                src={persona.image}
                alt={persona.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2">
                <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full font-bold ${badgeBorder}`}>
                  {isTerracotta ? 'Primary' : 'Secondary'}
                </span>
              </div>
            </div>
          )}

          <div className="flex-1 space-y-2 min-w-0">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  {persona.name}
                </h3>
              </div>
              <p className={`text-sm font-semibold tracking-wide uppercase font-mono ${accentColor}`}>
                {persona.role}
              </p>
            </div>

            {persona.tagline && (
              <p className="text-sm font-serif italic text-muted-foreground">
                “{persona.tagline}”
              </p>
            )}

            {persona.background && (
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light pt-1">
                {persona.background}
              </p>
            )}

            {/* Demographics Badges */}
            {demographics.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {demographics.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono bg-muted/60 text-muted-foreground border border-border/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Authenticated Participant Quote */}
        <div className={`p-4 rounded-xl ${quoteBg} space-y-1`}>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <Quote className="w-3.5 h-3.5" />
            <span>Persona Voice</span>
          </div>
          <p className="font-serif italic text-base sm:text-lg text-foreground leading-snug">
            “{persona.quote}”
          </p>
        </div>

        {/* Structured Dimensions: Goals, Motivations, Attitudes, Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border/60">
          
          {/* Goals */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold flex items-center gap-2">
              <Target className={`w-4 h-4 ${accentColor}`} />
              <span>Core User Goals</span>
            </h4>
            <ul className="text-xs text-muted-foreground space-y-1.5 leading-relaxed">
              {persona.goals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 ${isTerracotta ? 'bg-secondary' : 'bg-primary'}`} />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Motivations */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold flex items-center gap-2">
              <Compass className={`w-4 h-4 ${accentColor}`} />
              <span>Underlying Motivations</span>
            </h4>
            <ul className="text-xs text-muted-foreground space-y-1.5 leading-relaxed">
              {persona.motivations.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 ${isTerracotta ? 'bg-secondary' : 'bg-primary'}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Attitudes */}
          {persona.attitudes && persona.attitudes.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold flex items-center gap-2">
                <Sparkles className={`w-4 h-4 ${accentColor}`} />
                <span>Experiential Attitudes</span>
              </h4>
              <ul className="text-xs text-muted-foreground space-y-1.5 leading-relaxed">
                {persona.attitudes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full shrink-0 bg-stone-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pain Points */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-destructive font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-destructive" />
              <span>Pain Points & Friction</span>
            </h4>
            <ul className="text-xs text-muted-foreground space-y-1.5 leading-relaxed">
              {persona.painPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full shrink-0 bg-destructive" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </Card>
  );
}
