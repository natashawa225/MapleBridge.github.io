'use client';

import { withBasePath } from '@/lib/basePath';
import { ArrowDown, ArrowUpRight, ExternalLink } from 'lucide-react';

export function HeroSection() {
  const scrollToFirstSection = () => {
    const el = document.getElementById('overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between overflow-hidden border-b border-border/80 bg-[#F4EEE3] text-foreground paper-pattern pt-8 sm:pt-10 pb-8 sm:pb-10"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between gap-8 sm:gap-10 lg:gap-12">


        {/* 2. Editorial Headline & Narrative Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Oversized Editorial Headline */}
          <div className="lg:col-span-7 space-y-4">


            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light text-foreground leading-[0.98] tracking-tight">
              <span className="block animate-editorial-fade-up" style={{ animationDelay: '100ms' }}>
                Look up.
              </span>
              <span
                className="block font-serif italic text-primary font-normal animate-editorial-fade-up"
                style={{ animationDelay: '250ms' }}
              >
                Listen closer.
              </span>
              <span className="block animate-editorial-fade-up" style={{ animationDelay: '400ms' }}>
                Discover the story.
              </span>
            </h1>
          </div>

          {/* Right Column: Project Thesis & Understated Action Links */}
          <div
            className="lg:col-span-5 space-y-5 animate-editorial-fade-up"
            style={{ animationDelay: '550ms' }}
          >
            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              An audio-first cultural companion for discovering the history, stories, and atmosphere of
              Suzhou Maple Bridge — designed around how people actually explore.
            </p>

            <p className="text-xs font-mono text-muted-foreground leading-relaxed border-l-2 border-secondary/60 pl-3">
              Replacing screen distraction with contextual acoustics to reconnect visitors with tangible
              stone architecture, flowing waterways, and Tang poetic heritage.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://maple-bridge-prototype.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-medium tracking-wide hover:bg-primary/90 transition-all shadow-xs hover:shadow-sm"
              >
                <span>Launch Interactive Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={scrollToFirstSection}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card/70 text-foreground text-xs font-medium hover:bg-muted/60 transition-all"
              >
                <span>Read Design Process</span>
                <ArrowDown className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            </div>
          </div>

        </div>

        {/* 3. Large Landscape Photograph (Editorial Artwork Frame) */}
        <div
          className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden border border-border/80 bg-muted/40 shadow-xs group animate-editorial-image"
          style={{ animationDelay: '700ms' }}
        >
          <div className="relative aspect-[16/7] sm:aspect-[21/9] lg:aspect-[24/9] w-full overflow-hidden bg-muted">
            <img
              src={withBasePath('/bridgePic.jpg')}
              alt="Panoramic view of ancient Maple Bridge stone arch and canal waters in Suzhou"
              className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[0.98] transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
            />
            {/* Subtle atmospheric gradient at bottom for caption contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Pinned Editorial Caption */}
            <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 flex items-center gap-2 text-white/95 text-[11px] font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>FIG. 01 — FENGQIAO ANCIENT ARCH & GRAND CANAL WATERWAY (756 AD)</span>
            </div>

            <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 hidden sm:block text-white/80 font-serif italic text-xs">
              “江枫渔火对愁眠” · In-Situ Research Fieldwork
            </div>
          </div>
        </div>

        {/* 4. Editorial Colophon Strip: 4 Project Foundations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-border/70 text-xs text-muted-foreground">
          <div className="space-y-1">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-secondary font-bold">
              01 / Problem Space
            </span>
            <p className="leading-snug text-foreground font-medium text-[11px] sm:text-xs">
              Monolingual signage and multi-app screen toggling sever visitor presence and historical comprehension.
            </p>
          </div>

          <div className="space-y-1">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
              02 / Intervention
            </span>
            <p className="leading-snug text-foreground font-medium text-[11px] sm:text-xs">
              Audio-first spatial storytelling keeping eyes free to experience the living stone architecture.
            </p>
          </div>

          <div className="space-y-1">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
              03 / Empirical Grounding
            </span>
            <p className="leading-snug text-foreground font-medium text-[11px] sm:text-xs">
              9 in-situ participant walkthroughs along the Grand Canal historic corridor.
            </p>
          </div>

          <div className="space-y-1">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
              04 / Prototype
            </span>
            <p className="leading-snug text-foreground font-medium text-[11px] sm:text-xs">
              Progressive Web Application featuring crowd foresight and opt-in cultural exploration.
            </p>
          </div>
        </div>

        {/* 5. Delicate Bottom Scroll Cue */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50 text-xs text-muted-foreground">
          <p className="italic font-serif text-xs text-muted-foreground">
            “Visitors come to Maple Bridge to see its beauty — but often leave without understanding its meaning.”
          </p>

          <button
            onClick={scrollToFirstSection}
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
          >
            <span className="hidden sm:inline">Scroll to begin</span>
            <div className="w-4 h-6 rounded-full border border-border flex items-start justify-center p-1">
              <div className="w-1 h-1.5 rounded-full bg-primary animate-hairline-pulse" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
