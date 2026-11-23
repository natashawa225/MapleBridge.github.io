'use client';

import { useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { ConceptEvolution } from '@/components/content-blocks/concept-evolution';
import { Card } from '@/components/ui/card';
import { withBasePath } from '@/lib/basePath';
import {
  ExternalLink,
  Layers,
  Code2,
  Cpu,
  Database,
  Smartphone,
  Sparkles,
  ShieldAlert,
  ZoomIn,
  X,
  User,
  CheckCircle2,
} from 'lucide-react';

interface TeamContribution {
  name: string;
  role: string;
  deliverables: string[];
}

const teamContributions: TeamContribution[] = [
  {
    name: 'Natasha Wilfrid Atmadja',
    role: 'Technical Implementation & Prototyping',
    deliverables: [
      'Developed the React/Next.js prototype and interactive mobile-first map interface.',
      'Constructed location-triggered audio narration components and state synchronization.',
      'Managed deployment pipelines and technical integration across the portfolio codebase.',
      'Co-authored academic synthesis and project presentation poster.',
    ],
  },
  {
    name: 'Cherie Toh',
    role: 'Research & Content Lead',
    deliverables: [
      'Conducted academic literature review spanning heritage gamification and tourism chatbots.',
      'Formulated semi-structured interview protocols and executed contextual user sessions.',
      'Curated primary audio narratives, cultural scripts, and historical Grand Canal records.',
      'Directed video demonstration and multimedia storytelling production.',
    ],
  },
  {
    name: 'Darren Tjendera',
    role: 'UI Design & Visual Production',
    deliverables: [
      'Engineered high-fidelity visual UI mockups and interaction states for mobile screens.',
      'Designed project branding, visual hierarchy, and academic conference poster.',
      'Executed graphic styling for landmark markers, photo spot views, and map pins.',
      'Supported video editing and participatory usability walkthrough sessions.',
    ],
  },
  {
    name: 'Farrell Widjanarko',
    role: 'User Research & Evaluation Lead',
    deliverables: [
      'Formulated evaluation methodology and think-aloud test protocols for N=9 Alpha walkthroughs.',
      'Synthesized qualitative usability themes and informed the structured crowd forecast pivot.',
      'Co-designed five-stage User Journey Maps and emotional curve data models.',
      'Served as lead narrator and demonstration presenter for prototype evaluation walkthroughs.',
    ],
  },
];

export function DesignDevelopmentSection() {
  const { design } = portfolioData;
  const [archModalOpen, setArchModalOpen] = useState(false);

  return (
    <>
      {/* 10. CONCEPT EVOLUTION */}
      <PhaseSection
        id="prototype"
        number="10"
        chineseTitle="概念演进 · 三阶迭代"
        eyebrow="Iterative Concept Evolution"
        title="Three Stages of Architectural Refinement"
        description="Tracing the design progression from initial feature-heavy brainstorming through interview-driven reduction to the final cultural companion."
      >
        <div className="space-y-8">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light max-w-3xl">
            Our design did not emerge fully formed; it evolved through three distinct iterations. Each shift was triggered directly by user insights that exposed cognitive overload and re-centered our focus on acoustic presence.
          </p>

          <ConceptEvolution stages={design.conceptEvolution} />
        </div>
      </PhaseSection>

      {/* 11. FINAL CONCEPT & PROTOTYPE */}
      <PhaseSection
        id="final-concept"
        number="11"
        chineseTitle="最终方案 · 交互体验"
        eyebrow="Final System Architecture & Experience Flow"
        title="Maple Bridge: The Three-Phase Cultural Companion"
        description="A mobile-optimized system structured across Before, During, and After visit moments."
      >
        <div className="space-y-12">
          
          {/* Executive Concept Summary */}
          <Card className="p-6 sm:p-8 rounded-3xl border border-primary/30 bg-primary/[0.03] space-y-4 shadow-xs">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Final System Proposition
            </span>
            <p className="text-base sm:text-lg text-foreground font-serif leading-relaxed">
              {design.finalConcept.overview}
            </p>
          </Card>

          {/* Prototype Scope & Simulation Disclosure */}
          <div className="p-5 rounded-2xl border border-secondary/30 bg-secondary/[0.04] flex items-start gap-3.5">
            <ShieldAlert className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-muted-foreground leading-relaxed font-light">
              <span className="font-mono uppercase text-secondary font-bold text-[11px] block">
                Research Prototype Scope & Crowd Simulation Disclosure
              </span>
              <p>
                In strict adherence to academic transparency, the Maple Bridge application is an evaluative prototype. While interactive map navigation, audio playback, and bilingual content are fully operational, the crowd forecasting feature is implemented using simulated benchmark data to demonstrate interaction intent rather than live telemetry from production CCTV networks.
              </p>
            </div>
          </div>

          {/* Core Experience Modules (Before, During, After) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-secondary font-semibold">
                  Experience Architecture
                </span>
                <h3 className="font-serif font-bold text-2xl text-foreground">
                  The Three Moments of Engagement
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {design.finalConcept.modules.map((module, idx) => {
                const phases = ['BEFORE (Pre-Visit)', 'DURING (Situated Walk)', 'AFTER (Reflective)'];
                return (
                  <Card
                    key={idx}
                    className="p-6 rounded-3xl border border-border/80 bg-card shadow-xs flex flex-col justify-between hover:shadow-md transition-all"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-border/60 pb-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                          Phase 0{idx + 1}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">{phases[idx]}</span>
                      </div>

                      <h4 className="font-serif font-bold text-xl text-foreground">
                        {module.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                        {module.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-border/60 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-secondary font-semibold block">
                        Demonstrated Features
                      </span>
                      <ul className="text-xs text-muted-foreground space-y-1.5 leading-relaxed">
                        {module.keyFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="text-secondary mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Interactive Prototype Showcase & QR Code Launchpad */}
          <Card className="p-6 sm:p-8 rounded-3xl border border-primary/20 bg-card shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* QR Code Column */}
              <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-muted/40 border border-border/80 space-y-3">
                <div className="p-3 bg-white rounded-2xl shadow-xs border border-border">
                  <img
                    src={withBasePath('/artifacts/appQR.png')}
                    alt="Scan QR for Maple Bridge prototype"
                    className="w-36 h-36 object-contain"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold block">
                    Mobile Experience
                  </span>
                  <p className="text-xs text-muted-foreground font-light">
                    Scan with smartphone camera for heads-up field testing
                  </p>
                </div>
              </div>

              {/* Prototype Details & Launch Button */}
              <div className="lg:col-span-8 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-secondary font-semibold">
                    Live Deployed Prototype
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                    Maple Bridge Web Companion
                  </h4>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  Optimized for mobile web browsers to deliver a lightweight, responsive audio guide experience. Users can navigate between landmarks, trigger authentic bilingual audio recordings, review historical stone inscriptions, and inspect forecast crowd levels.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://maple-bridge-prototype.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/90 transition-all shadow-xs hover:shadow-md"
                  >
                    <span>Launch Live Prototype (Vercel)</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <span className="text-xs font-mono text-muted-foreground">
                    No installation required • Runs in mobile Safari/Chrome
                  </span>
                </div>
              </div>

            </div>
          </Card>

        </div>
      </PhaseSection>

      {/* 12. TECHNICAL IMPLEMENTATION */}
      <PhaseSection
        id="technical"
        number="12"
        chineseTitle="技术实现 · 软件架构"
        eyebrow="Software Engineering & System Architecture"
        title="Technical Implementation & Data Topology"
        description="A lightweight, responsive Vite + React architecture engineered for fast mobile rendering and low battery consumption."
      >
        <div className="space-y-12">
          
          {/* System Architecture Diagram with Zoom */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                  Component Architecture
                </span>
                <h3 className="font-serif font-bold text-xl text-foreground">
                  System Architecture & Data Flow
                </h3>
              </div>
              <button
                onClick={() => setArchModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-secondary hover:underline"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Enlarge Architecture Diagram</span>
              </button>
            </div>

            <Card
              onClick={() => setArchModalOpen(true)}
              className="p-4 sm:p-6 rounded-3xl border border-border bg-card cursor-pointer overflow-hidden shadow-xs hover:shadow-md transition-all group"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white flex items-center justify-center">
                <img
                  src={withBasePath('/artifacts/SystemArchitecture.jpg')}
                  alt="System architecture diagram of Maple Bridge"
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </Card>

            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              Figure: System data topology showing route-level views, local mock API wrappers, client-side React state, Web Audio API controllers, and LocalStorage caching.
            </p>
          </div>

          {/* Tech Stack Breakdown Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase">
                <Code2 className="w-4 h-4" />
                <span>Frontend Core</span>
              </div>
              <h4 className="font-serif font-bold text-base text-foreground">Vite + React (v19)</h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                Lightweight single-page build pipeline delivering instant HMR and sub-second initial mobile load times.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <div className="flex items-center gap-2 text-secondary font-bold text-xs font-mono uppercase">
                <Cpu className="w-4 h-4" />
                <span>State & Interaction</span>
              </div>
              <h4 className="font-serif font-bold text-base text-foreground">React Hooks & Context</h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                Manages active landmark selection, audio playback state, language toggling, and interactive map coordinate mapping.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase">
                <Database className="w-4 h-4" />
                <span>Client Data Layer</span>
              </div>
              <h4 className="font-serif font-bold text-base text-foreground">Local Modules & Cache</h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                Static audio assets, bilingual landmark records, and saved visitor keepsakes persist locally via HTML5 LocalStorage.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
              <div className="flex items-center gap-2 text-secondary font-bold text-xs font-mono uppercase">
                <Smartphone className="w-4 h-4" />
                <span>Responsive Design</span>
              </div>
              <h4 className="font-serif font-bold text-base text-foreground">Tailwind CSS & Radix</h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                Mobile-first touch targets, accessible dialog overlays, and adaptive landscape/portrait media query rules.
              </p>
            </div>

          </div>

        </div>

        {/* System Architecture Lightbox Modal */}
        {archModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            onClick={() => setArchModalOpen(false)}
          >
            <div
              className="relative max-w-5xl w-full bg-card rounded-3xl overflow-hidden border border-border shadow-2xl p-6 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-border/70">
                <span className="text-xs font-mono uppercase tracking-wider text-secondary font-bold">
                  System Architecture Diagram (Full Resolution)
                </span>
                <button
                  onClick={() => setArchModalOpen(false)}
                  className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[80vh] overflow-auto rounded-2xl bg-white p-4">
                <img
                  src={withBasePath('/artifacts/SystemArchitecture.jpg')}
                  alt="System Architecture full"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </PhaseSection>

      {/* 13. INDIVIDUAL CONTRIBUTIONS */}
      <PhaseSection
        id="contributions"
        number="13"
        chineseTitle="团队分工 · 角色交付"
        eyebrow="Team Roster & Research Governance"
        title="Individual Team Contributions"
        description="Explicit breakdown of responsibilities, technical development, and qualitative research deliverables."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamContributions.map((member, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-7 rounded-3xl border border-border/80 bg-card shadow-xs space-y-4 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground font-serif font-bold text-sm">
                      {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-foreground">
                        {member.name}
                      </h4>
                      <p className="text-xs font-mono text-secondary font-semibold">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">Team A2-4</span>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-semibold block">
                    Key Deliverables & Responsibilities
                  </span>
                  <ul className="text-xs text-muted-foreground space-y-1.5 leading-relaxed">
                    {member.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PhaseSection>
    </>
  );
}
