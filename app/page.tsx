import NavigationBar from '@/components/navigation-bar';
import { HeroSection } from '@/components/sections/hero';
import { ProblemSpaceSection } from '@/components/sections/problem-space';
import { ResearchSection } from '@/components/sections/research';
import { SynthesisSection } from '@/components/sections/synthesis';
import { DesignDevelopmentSection } from '@/components/sections/design-development';
import { ReflectionSection } from '@/components/sections/reflection';
import { ExternalLink, ArrowUp, Compass } from 'lucide-react';
import { withBasePath } from '@/lib/basePath';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen w-full bg-background selection:bg-secondary/20 selection:text-secondary">
        {/* Phase 0: Hero & Editorial Spread */}
        <HeroSection />

        {/* Phase 1: Motivation & Problem Space */}
        <ProblemSpaceSection />

        {/* Phase 2: User Research, Personas, Journey Map, Evidence of Life */}
        <ResearchSection />

        {/* Phase 3: Research Synthesis, Traceability, Concept Shift, Crazy Eights, Principles */}
        <SynthesisSection />

        {/* Phase 4: Concept Evolution, Final Concept, Architecture, Contributions */}
        <DesignDevelopmentSection />

        {/* Phase 5: Usability Testing, Iteration Before/After, Technical Reflection, References */}
        <ReflectionSection />

        {/* Editorial Publication Footer */}
        <footer className="border-t border-border/80 bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
              
              {/* Brand and Description */}
              <div className="md:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg border border-border bg-card flex items-center justify-center shadow-xs">
                    <img
                      src={withBasePath('/sitelogo.png')}
                      alt="Maple Bridge Logo"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="font-serif text-xl font-bold text-foreground">
                    Maple Bridge · 枫桥
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light max-w-md">
                  An audio-first cultural companion designed for discovering the history, stories, and atmosphere of Suzhou Maple Bridge — grounded in empirical human-computer interaction research.
                </p>

                <p className="font-serif italic text-xs text-muted-foreground">
                  “月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。”
                </p>
              </div>

              {/* Prototype Link */}
              <div className="md:col-span-3 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold block">
                  Companion Application
                </span>
                <p className="text-xs text-muted-foreground font-light">
                  Interactive mobile-first prototype deployed on Vercel:
                </p>
                <a
                  href="https://maple-bridge-prototype.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-secondary/90 transition-all shadow-xs"
                >
                  <span>Launch Live Prototype</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Academic Roster */}
              <div className="md:col-span-3 space-y-2 text-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block">
                  Group A2-4 Authors
                </span>
                <p className="text-muted-foreground">Natasha Wilfrid Atmadja</p>
                <p className="text-muted-foreground">Cherie Toh</p>
                <p className="text-muted-foreground">Darren Tjendera</p>
                <p className="text-muted-foreground">Farrell Widjanarko</p>
              </div>

            </div>

            {/* Bottom Colophon */}
            <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
              <p>
                HCI Design Process Portfolio • Built with Next.js, React & Tailwind CSS
              </p>
              <a
                href="#hero"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </footer>
      </main>
    </>
  );
}
