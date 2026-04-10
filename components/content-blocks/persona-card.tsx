import { Card } from '@/components/ui/card';
import { PersonaData } from '@/lib/portfolio-data';
import {
  Target,
  Lightbulb,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';

interface PersonaCardProps {
  persona: PersonaData;
}
function PersonaPriorities({
  priorities,
}: {
  priorities: { label: string; value: number }[];
}) {
  return (
    <div className="space-y-4 rounded-2xl border border-border/70 bg-muted/40 p-4">
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Priorities
      </h4>

      <div className="space-y-4">
        {priorities.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {item.value}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-primary/15">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonaSection({
  icon,
  title,
  items,
  bulletColor = 'text-primary',
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  bulletColor?: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {title}
        </h4>
      </div>

      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
            <span className={`${bulletColor} mt-[0.45rem] text-[0.65rem] leading-none`}>
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PersonaCard({ persona }: PersonaCardProps) {
  const demographics = [
    persona.demographics?.age ? `${persona.demographics.age} years old` : null,
    persona.demographics?.gender ?? null,
    persona.demographics?.nationality ?? null,
    persona.demographics?.education ?? null,
    persona.demographics?.occupation ?? null,
  ].filter(Boolean);

  return (
    <Card className="overflow-hidden border-border/70 bg-card/95 p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          {persona.image && (
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-border/60">
              <Image
                src={persona.image}
                alt={persona.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="space-y-1.5">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                {persona.name}
              </h3>
              <p className="text-base text-muted-foreground">{persona.role}</p>

              {persona.tagline && (
                <p className="text-sm italic leading-relaxed text-muted-foreground">
                  {persona.tagline}
                </p>
              )}
            </div>

            {persona.background && (
              <p className="mt-3 max-w-[65ch] text-sm leading-6 text-muted-foreground">
                {persona.background}
              </p>
            )}

            {demographics.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {demographics.map((item, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quote */}
        <div className="rounded-xl border-l-4 border-primary bg-primary/5 px-4 py-4">
          <p className="text-[15px] italic leading-7 text-foreground">
            “{persona.quote}”
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <PersonaSection
            icon={<Target className="h-4 w-4 text-primary" />}
            title="Goals"
            items={persona.goals}
          />

          <PersonaSection
            icon={<Lightbulb className="h-4 w-4 text-primary" />}
            title="Motivations"
            items={persona.motivations}
          />

          {persona.attitudes?.length ? (
            <PersonaSection
              icon={<Sparkles className="h-4 w-4 text-primary" />}
              title="Attitudes"
              items={persona.attitudes}
            />
          ) : (
            <div />
          )}

          <PersonaSection
            icon={<AlertCircle className="h-4 w-4 text-destructive" />}
            title="Pain Points"
            items={persona.painPoints}
            bulletColor="text-destructive"
          />
        </div>
      </div>
    </Card>
  );
}