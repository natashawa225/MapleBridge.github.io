'use client';

import { useState } from 'react';
import { PhaseSection } from '@/components/phase-section';
import { ResearchFindingCard, type EnrichedFinding } from '@/components/content-blocks/research-finding-card';
import { PersonaCard } from '@/components/content-blocks/persona-card';
import { EmotionalCurveChart } from '@/components/content-blocks/emotional-curve-chart';
import { Card } from '@/components/ui/card';
import { AlertCircle, Camera, X, ZoomIn, Compass, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { withBasePath } from '@/lib/basePath';
import { portfolioData } from '@/lib/portfolio-data';

export function ResearchSection() {
  const { research } = portfolioData;
  const [selectedPhoto, setSelectedPhoto] = useState<{ path: string; label: string; desc: string } | null>(null);

  // The 5 Major Research Insights with authentic evidence and design implications
  const enrichedFindings: EnrichedFinding[] = [
    {
      id: 'finding-lang',
      number: '01',
      title: 'Understanding is Blocked by Language and Context',
      description:
        'Visitors frequently admire Maple Bridge visually but cannot decipher its historical significance because on-site plaques are primarily in Chinese, fragmented, or inaccessible to non-native visitors. This creates an interpretation disconnect where visitors see the architecture without grasping its cultural resonance (Casillo et al., 2020).',
      evidenceQuote:
        'Participants noted they “knew nothing” about the background beforehand and struggled because physical signage offered little English explanation.',
      designImplication:
        'Provide bilingual contextual narration (English & Mandarin) directly keyed to landmarks, eliminating reliance on clunky external translation apps.',
      addressedPersona: 'Directly addresses Glinda Cottrill (Curious Cultural Explorer)',
      iconName: 'Globe',
    },
    {
      id: 'finding-audio',
      number: '02',
      title: 'Hands-Free Audio Interaction Supports Immersion',
      description:
        'Participants consistently favored listening over reading during their visit. Staring down at phone screens disrupted the contemplative atmosphere of the water-town, whereas lightweight audio allowed them to keep their eyes on the canal, stone bridges, and foliage (Xue et al., 2025).',
      evidenceQuote:
        'Participants repeatedly asked for voiceover or audio guides so they could “just enjoy the scenery” rather than constantly checking their phones.',
      designImplication:
        'Prioritize location-aware audio storytelling as the primary sensory modality, relegating screen interactions to quiet confirmation cues.',
      addressedPersona: 'Benefits both Glinda Cottrill and Li Mei',
      iconName: 'Headphones',
    },
    {
      id: 'finding-planning',
      number: '03',
      title: 'Pre-Visit Awareness Reduces Uncertainty and Stress',
      description:
        'Visitors experience anxiety regarding crowding, visiting windows, and spatial layout before they set foot on the grounds. Having clear foresight into crowd patterns and landmark previews allows them to arrive feeling composed and in control (Zhang et al., 2025).',
      evidenceQuote:
        'Users described checking crowd forecasts and wanting preview maps of routes and landmarks before traveling to the site.',
      designImplication:
        'Introduce a pre-visit planning layer featuring structured crowd forecasts (Today, This Week, By Spot) and landmark previews.',
      addressedPersona: 'Directly addresses Li Mei (Atmosphere-First Visitor)',
      iconName: 'Calendar',
    },
    {
      id: 'finding-screen',
      number: '04',
      title: 'Excessive Interaction Creates Cognitive Friction',
      description:
        'Frequent phone interactions, switching between translation utilities, maps, and camera apps fragments the visit and creates cognitive overload. Rather than feeling like a serene cultural retreat, the visit begins to feel like a high-friction administrative task.',
      evidenceQuote:
        'Interview responses highlighted frustration with having to “constantly look down at the phone” to piece together fragmented bits of history.',
      designImplication:
        'Design an ultra-minimal visual interface with gentle spatial cues, preventing app switching and visual clutter while walking.',
      addressedPersona: 'Reduces cognitive load across all visitor profiles',
      iconName: 'Smartphone',
    },
    {
      id: 'finding-balance',
      number: '05',
      title: 'Engagement Should Be Optional, Not Forced',
      description:
        'While gamified mechanics and quizzes appeal to some users, others actively reject them as gimmicky and disrespectful to heritage calm. Cultural technology must balance playful curiosity with deep respect for quiet contemplation (Peng et al., 2023; Pasca et al., 2021).',
      evidenceQuote:
        'Reactions were strongly mixed: some participants welcomed playful quests, while others insisted that aggressive badges and gamification feel out of place.',
      designImplication:
        'Keep deep interaction, chatbot Q&A, and collectible photo spots strictly opt-in, preserving a tranquil default experience.',
      addressedPersona: 'Respects Li Mei’s quiet preferences while enabling Glinda’s curiosity',
      iconName: 'Sparkles',
    },
  ];

  // Authentic field research evidence photos
  const evidencePhotos = [
    {
      path: '/sketches/evidence1.jpg',
      label: 'Participant Interview (On-site)',
      desc: 'Discussing language friction and signage comprehension with international student visitors near Fengqiao canal.',
    },
    {
      path: '/sketches/evidence2.jpg',
      label: 'Visitor Exploration Observation',
      desc: 'Observing how visitors navigate between stone bridges, phone cameras, and physical signboards.',
    },
    {
      path: '/sketches/evidence3.jpg',
      label: 'Semi-Structured Interview',
      desc: 'Interviewing domestic visitors about crowd tolerance, audio preferences, and contemplative pace.',
    },
    {
      path: '/sketches/evidence4.jpg',
      label: 'Canal Topography Field Study',
      desc: 'Mapping key acoustic points and historical waymarks along the Grand Canal corridor.',
    },
    {
      path: '/sketches/evidence5.jpg',
      label: 'Crowd Flow & Signage Audit',
      desc: 'Documenting bottleneck points and static bilingual signage deficiencies around Hanshan Temple crossing.',
    },
  ];

  return (
    <>
      {/* 02. USER RESEARCH & INSIGHTS */}
      <PhaseSection
        id="research"
        number="02"
        chineseTitle="实地调研 · 核心洞察"
        eyebrow="User Research & Field Evidence"
        title="Five Empirical Insights from the Ground"
        description="Grounded findings from contextual interviews, on-site observations, and academic literature analysis."
      >
        <div className="space-y-12">
          {/* Methodology Context Strip */}
          <div className="p-6 rounded-3xl border border-border/80 bg-card/80 backdrop-blur-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
                Field Research Methodology
              </span>
              <h3 className="font-serif font-bold text-lg text-foreground">
                Mixed-Methods Qualitative In-Situ Investigation
              </h3>
              <p className="text-xs text-muted-foreground font-light max-w-2xl">
                Conducted at Suzhou Maple Bridge Scenic Area and Grand Canal historic corridor with international and local participants, combining contextual observation with semi-structured interviews.
              </p>
            </div>

            <div className="flex items-center gap-6 text-center border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-6 shrink-0">
              <div>
                <span className="block font-serif text-2xl font-bold text-foreground">9</span>
                <span className="block text-[10px] font-mono uppercase text-muted-foreground">Participants</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-secondary">5</span>
                <span className="block text-[10px] font-mono uppercase text-muted-foreground">Key Insights</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-primary">In-Situ</span>
                <span className="block text-[10px] font-mono uppercase text-muted-foreground">Grand Canal</span>
              </div>
            </div>
          </div>

          {/* The 5 Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrichedFindings.map((finding) => (
              <ResearchFindingCard key={finding.id} finding={finding} />
            ))}
          </div>

          {/* Evidence of Life Gallery */}
          <div className="pt-8 border-t border-border/70 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-secondary font-semibold">
                  Field Research Evidence
                </span>
                <h3 className="font-serif font-bold text-xl text-foreground">
                  Evidence of Life: On-Site Interviews & Canal Observations
                </h3>
              </div>
              <p className="text-xs text-muted-foreground font-serif italic">
                Photographic documentation of our field research at Suzhou Grand Canal
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {evidencePhotos.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-2xl overflow-hidden border border-border bg-card cursor-pointer shadow-xs hover:shadow-md transition-all aspect-[3/4]"
                >
                  <img
                    src={withBasePath(photo.path)}
                    alt={photo.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-2 right-2 p-1.5 rounded-full bg-background/80 backdrop-blur-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white space-y-0.5">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-white/70 block">
                      Photo 0{idx + 1}
                    </span>
                    <p className="text-xs font-serif font-medium leading-tight text-white">
                      {photo.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Evidence Photo Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-card rounded-3xl overflow-hidden border border-border shadow-2xl p-6 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2 border-b border-border/70">
                <span className="text-xs font-mono uppercase tracking-wider text-secondary font-bold">
                  Field Research Archive
                </span>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-muted">
                <img
                  src={withBasePath(selectedPhoto.path)}
                  alt={selectedPhoto.label}
                  className="w-full h-full object-contain bg-black/5"
                />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-bold text-lg text-foreground">
                  {selectedPhoto.label}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {selectedPhoto.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </PhaseSection>

      {/* 03. PERSONAS */}
      <PhaseSection
        id="personas"
        number="03"
        chineseTitle="用户画像 · 两类群体"
        eyebrow="Target Personas & Cultural Orientations"
        title="Archetypes of Cultural Exploration"
        description="Two composite profiles derived from interview themes: balancing informational depth with atmospheric calm."
      >
        <div className="space-y-12">
          {/* Personas Side-by-Side Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PersonaCard
              persona={research.personas[0]}
              variant="terracotta"
            />
            <PersonaCard
              persona={research.personas[1]}
              variant="forest"
            />
          </div>

          {/* Scenarios & Goals Editorial Breakdown */}
          <div className="pt-6 border-t border-border/70 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-secondary font-semibold">
                  Contextual Scenarios
                </span>
                <h3 className="font-serif font-bold text-2xl text-foreground">
                  How Personas Enter and Experience Maple Bridge
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {research.scenarioAndGoals.map((item) => {
                const persona = research.personas.find((p) => p.id === item.personaId);
                const isGlinda = item.personaId === 'persona-1';

                return (
                  <Card
                    key={item.personaId}
                    className="p-6 rounded-3xl border border-border/80 bg-card/90 shadow-xs space-y-4"
                  >
                    <div className="flex items-baseline justify-between border-b border-border/60 pb-3">
                      <div>
                        <span className={`text-[10px] font-mono uppercase tracking-widest font-bold ${isGlinda ? 'text-secondary' : 'text-primary'}`}>
                          {item.label}
                        </span>
                        <h4 className="font-serif font-bold text-lg text-foreground">
                          {persona?.name} ({persona?.role})
                        </h4>
                      </div>
                      <span className="text-xs font-serif italic text-muted-foreground">
                        {isGlinda ? 'Curious Explorer' : 'Atmosphere-First'}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      <p className="text-foreground font-medium">Scenario:</p>
                      <p>{item.scenario}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block">
                        Design Target Goal
                      </span>
                      <p className="text-xs sm:text-sm font-serif italic text-foreground leading-relaxed">
                        {item.goal}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </PhaseSection>

      {/* 04. USER JOURNEY MAP & EMOTIONAL CURVE */}
      <PhaseSection
        id="journey"
        number="04"
        chineseTitle="用户旅程 · 情绪起伏"
        eyebrow="User Journey & Experience Topology"
        title="Mapping the Five Stages of Cultural Exploration"
        description="Tracking actions, touchpoints, cognitive friction, and emotional shifts across the visit."
      >
        <div className="space-y-12">
          
          {/* Structured Journey Table */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="font-serif font-bold text-xl text-foreground">
                Five-Stage Interaction Topology
              </h3>
              <p className="text-xs text-muted-foreground font-mono">
                ← Swipe horizontally on small screens →
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-xs">
              <div className="min-w-[850px] divide-y divide-border/70">
                
                {/* Header row: Stages */}
                <div className="grid grid-cols-6 bg-muted/50 p-4 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                  <div className="flex items-center">Dimension</div>
                  {research.journeyMap.phases.map((p, idx) => (
                    <div key={idx} className="border-l border-border/60 pl-4">
                      <span className="text-secondary font-bold block text-[10px]">STAGE 0{idx + 1}</span>
                      <span className="font-serif text-sm font-bold text-foreground capitalize">{p.phase}</span>
                    </div>
                  ))}
                </div>

                {/* Actions row */}
                <div className="grid grid-cols-6 p-4 text-xs">
                  <div className="font-mono uppercase tracking-wider text-muted-foreground text-[11px] font-semibold pr-2">
                    Visitor Actions
                  </div>
                  {research.journeyMap.phases.map((p, idx) => (
                    <div key={idx} className="border-l border-border/60 pl-4 space-y-1 text-muted-foreground leading-relaxed">
                      {p.activities.map((act, i) => (
                        <p key={i}>• {act}</p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Thoughts row */}
                <div className="grid grid-cols-6 p-4 text-xs bg-muted/20">
                  <div className="font-mono uppercase tracking-wider text-muted-foreground text-[11px] font-semibold pr-2">
                    Thoughts
                  </div>
                  {research.journeyMap.phases.map((p, idx) => (
                    <div key={idx} className="border-l border-border/60 pl-4 space-y-1 font-serif italic text-foreground/80 leading-relaxed">
                      {p.thoughts.map((th, i) => (
                        <p key={i}>“{th}”</p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Touchpoints row */}
                <div className="grid grid-cols-6 p-4 text-xs">
                  <div className="font-mono uppercase tracking-wider text-muted-foreground text-[11px] font-semibold pr-2">
                    Touchpoints
                  </div>
                  {research.journeyMap.phases.map((p, idx) => (
                    <div key={idx} className="border-l border-border/60 pl-4 space-y-1 text-muted-foreground">
                      {p.touchPoints?.map((tp, i) => (
                        <span key={i} className="inline-block px-1.5 py-0.5 rounded bg-muted/80 text-[10px] font-mono mr-1 mb-1">
                          {tp}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Pain Points row */}
                <div className="grid grid-cols-6 p-4 text-xs bg-destructive/[0.03]">
                  <div className="font-mono uppercase tracking-wider text-destructive text-[11px] font-semibold pr-2 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Friction Points</span>
                  </div>
                  {research.journeyMap.phases.map((p, idx) => (
                    <div key={idx} className="border-l border-border/60 pl-4 space-y-1 text-destructive/90 leading-relaxed">
                      {p.painPoints.map((pain, i) => (
                        <p key={i}>✕ {pain}</p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Opportunities row */}
                <div className="grid grid-cols-6 p-4 text-xs bg-primary/[0.04]">
                  <div className="font-mono uppercase tracking-wider text-primary text-[11px] font-semibold pr-2 flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5" />
                    <span>HCI Opportunities</span>
                  </div>
                  {research.journeyMap.phases.map((p, idx) => (
                    <div key={idx} className="border-l border-border/60 pl-4 space-y-1 text-primary font-medium leading-relaxed">
                      {p.opportunities.map((opp, i) => (
                        <p key={i}>→ {opp}</p>
                      ))}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Emotional Curve Chart & Journey Dynamics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <EmotionalCurveChart data={research.journeyMap.emotionalCurve} />
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-3xl border border-border bg-card/90 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
                  The Critical Dip
                </span>
                <h4 className="font-serif font-bold text-lg text-foreground">
                  The Arrival Friction (5.0 / 10)
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                  Visitor engagement drops sharply upon arrival due to overwhelming crowd congestion, confusing signage, and lack of orientation. 
                </p>
                <div className="pt-2 border-t border-border/60 text-xs text-primary font-medium">
                  → Resolved by pre-visit crowd forecasts and immediate hands-free audio orientation.
                </div>
              </div>

              <div className="p-6 rounded-3xl border border-border bg-card/90 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                  Experiential Peak
                </span>
                <h4 className="font-serif font-bold text-lg text-foreground">
                  Reflective Departure (8.6 / 10)
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                  Engagement peaks when visitors exit carrying meaningful cultural memories rather than just photos, supported by personal keepsakes and poem reflection.
                </p>
              </div>
            </div>
          </div>

        </div>
      </PhaseSection>
    </>
  );
}
