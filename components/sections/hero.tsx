'use client';

import { withBasePath } from '@/lib/basePath';
import { ArrowDown, ExternalLink, Headphones, Users, MapPin, Sparkles } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Natasha Wilfrid Atmadja', role: 'Technical Implementation & Prototyping' },
  { name: 'Cherie Toh', role: 'Research & Content Lead' },
  { name: 'Darren Tjendera', role: 'UI Design & Production' },
  { name: 'Farrell Widjanarko', role: 'User Research & Evaluation' },
];

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
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden border-b border-border/80 bg-[#F4EEE3] paper-pattern"
    >
      

      {/* Main Editorial Hero Spread */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Research Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-secondary">
                <span className="h-px w-8 bg-secondary" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                  Cultural Companion Portfolio
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-foreground leading-[1.06] tracking-tight">
                Designing a quieter way to experience{' '}
                <span className="italic font-normal text-primary">cultural heritage.</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
              An audio-first cultural companion for discovering the history, stories, and atmosphere of
              Suzhou Maple Bridge — designed around how people actually explore.
            </p>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://maple-bridge-prototype.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Launch Interactive Prototype</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToFirstSection}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card/70 text-foreground font-medium text-sm hover:bg-muted transition-all"
              >
                <span>Read Design Process</span>
                <ArrowDown className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual & Architectural Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative group overflow-hidden rounded-3xl border border-border shadow-md bg-card">
              {/* Main Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={withBasePath('/bridgePic.jpg')}
                  alt="Suzhou Maple Bridge cultural site"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-mono tracking-widest uppercase opacity-80">
                    Grand Canal Historic Junction
                  </p>
                  <p className="text-sm font-serif italic text-white/95">
                    Ancient Fengqiao stone arch & canal waterways
                  </p>
                </div>
              </div>

              {/* Research Methodology Pill Metrics */}
              <div className="p-5 bg-card divide-y divide-border/60">
                

                {/* Team Roster */}
                <div className="pt-4 space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-secondary" />
                    <span>Project Team & Research Discipline</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {teamMembers.map((member) => (
                      <div key={member.name} className="space-y-0.5">
                        <p className="font-medium text-foreground text-[11px]">{member.name}</p>
                        <p className="text-[10px] text-muted-foreground leading-tight">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Quote Strip */}
      <div className="w-full border-t border-border/70 py-3 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p className="italic font-serif">
            “Visitors come to Maple Bridge to see its beauty — but often leave without understanding its meaning.”
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span>Scroll to explore</span>
            <span className="animate-bounce">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
