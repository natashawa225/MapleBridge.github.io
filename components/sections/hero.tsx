import { portfolioData } from '@/lib/portfolio-data';

export function HeroSection() {
  const { project } = portfolioData;

  return (
    <section id="hero" className="min-h-[80vh] px-4 sm:px-6 lg:px-8 flex items-center scroll-mt-20">
      <div className="max-w-4xl mx-auto w-full space-y-8 animate-fade-in-up">
        {/* Main Heading */}
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-widest font-semibold text-primary animate-slide-in-left">
            Design Process Portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
            {project.title}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* CTA - Scroll Indicator */}
        <div className="pt-12 flex flex-col items-center gap-4 animate-bounce">
          <p className="text-sm text-muted-foreground">Scroll to explore the process</p>
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
