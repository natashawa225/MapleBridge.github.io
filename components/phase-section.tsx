import { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';

interface PhaseSectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function PhaseSection({
  id,
  title,
  description,
  children,
}: PhaseSectionProps) {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Phase Header */}
        <div className="space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Separator className="w-12 bg-primary h-1" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">{title}</h2>

          {description && (
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="pt-8">{children}</div>
      </div>

      {/* Section Divider */}
      <Separator className="mt-20" />
    </section>
  );
}
