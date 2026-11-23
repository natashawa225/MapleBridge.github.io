import { ReactNode } from 'react';

interface PhaseSectionProps {
  id: string;
  number?: string;
  chineseTitle?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function PhaseSection({
  id,
  number,
  chineseTitle,
  eyebrow,
  title,
  description,
  children,
  className = '',
}: PhaseSectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20 border-b border-border/70 ${className}`}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Editorial Section Header */}
        <header className="space-y-4">
          <div className="flex items-center justify-between gap-4 border-b border-border/70 pb-4">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-secondary">
              {number && (
                <span className="font-bold text-base text-primary font-serif">
                  [{number}]
                </span>
              )}
              {eyebrow && <span>{eyebrow}</span>}
            </div>

            {chineseTitle && (
              <span className="font-serif text-sm tracking-widest text-muted-foreground/75 hidden sm:inline">
                {chineseTitle}
              </span>
            )}
          </div>

          <div className="space-y-3 pt-2">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground leading-[1.15] tracking-tight">
              {title}
            </h2>

            {description && (
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl font-light">
                {description}
              </p>
            )}
          </div>
        </header>

        {/* Section Body */}
        <div>{children}</div>
      </div>
    </section>
  );
}
