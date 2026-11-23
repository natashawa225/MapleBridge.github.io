'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Compass,
  Headphones,
  Calendar,
  Smartphone,
  Globe,
  CheckCircle2,
  ChevronDown,
  Info,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export interface StrategicRowData {
  id: string;
  number: string;
  title: string;
  chineseTitle: string;
  empiricalBasis: string;
  empiricalSource: string;
  strategicInsight: string;
  strategicRationale: string;
  reqGoalIds: {
    req: string;
    goal: string;
    decision: string;
  };
  architecturalConsequence: string;
  architecturalModule: string;
}

const strategicRows: StrategicRowData[] = [
  {
    id: 'strat-1',
    number: '01',
    title: 'Immersion-First Cultural Access',
    chineseTitle: '非侵入式文化阐释',
    empiricalBasis:
      'Visitors admire visual architecture but cannot decipher Tang poetic history due to monolingual signs and context fragmentation (P3).',
    empiricalSource: 'Finding: finding-lang',
    strategicInsight:
      'Cultural interpretation must be dynamically delivered in situ without demanding continuous screen gaze or translation tools.',
    strategicRationale:
      'Replacing physical signage limitations with situational audio ensures historical depth does not compromise environmental presence.',
    reqGoalIds: {
      req: 'R1 & R4',
      goal: 'DG1 & DG2',
      decision: 'Decision-2 & 3',
    },
    architecturalConsequence:
      'Context-aware cultural interpretation layer with location-keyed bilingual audio triggers.',
    architecturalModule: 'Situated Experience Engine',
  },
  {
    id: 'strat-2',
    number: '02',
    title: 'Acoustic Spatial Primacy',
    chineseTitle: '声音即主交互界面',
    empiricalBasis:
      'Visitors explicitly demanded listening over reading to keep eyes free to admire canal reflections and historic stone masonry (P7).',
    empiricalSource: 'Finding: finding-audio',
    strategicInsight:
      'Audio must serve as the primary human-computer interface, relegating visual screens to quiet secondary reassurance.',
    strategicRationale:
      'Sound surrounds the user without commanding their central field of vision, perfectly suited to heritage walking environments.',
    reqGoalIds: {
      req: 'R1',
      goal: 'DG1',
      decision: 'Decision-2',
    },
    architecturalConsequence:
      'Audio-first situated storytelling architecture with non-blocking ambient sound playback.',
    architecturalModule: 'Acoustic Companion Layer',
  },
  {
    id: 'strat-3',
    number: '03',
    title: 'Temporal Decoupling of Logistics',
    chineseTitle: '时空解耦 · 行前预知',
    empiricalBasis:
      'Uncertainty about crowds and scenic layout induces anxiety, leading to rushed or frustrating arrivals at crowded bottleneck spots (P2).',
    empiricalSource: 'Finding: finding-planning',
    strategicInsight:
      'Logistical foresight should be handled before arrival, preserving on-site headspace for contemplation and atmosphere.',
    strategicRationale:
      'By decoupling trip planning from on-site exploration, the visitor enters the gates already composed and oriented.',
    reqGoalIds: {
      req: 'R2',
      goal: 'DG3',
      decision: 'decision-1',
    },
    architecturalConsequence:
      'Pre-visit insight layer providing structured crowd forecasts (Today, This Week, By Spot).',
    architecturalModule: 'Pre-Visit Planning Module',
  },
  {
    id: 'strat-4',
    number: '04',
    title: 'Cognitive Load Minimization',
    chineseTitle: '极简界面 · 释放认知',
    empiricalBasis:
      'Juggling multiple third-party apps (Maps, OCR translation, cameras) causes high extraneous cognitive load and frustration (P5).',
    empiricalSource: 'Finding: finding-screen',
    strategicInsight:
      'The interface must eliminate digital multi-tasking by consolidating orientation into subtle, lightweight cues.',
    strategicRationale:
      'A digital companion should feel like a whisper rather than a dashboard, freeing mental bandwidth for emotional connection.',
    reqGoalIds: {
      req: 'R4',
      goal: 'DG2',
      decision: 'decision-3',
    },
    architecturalConsequence:
      'Minimal visual interface with subtle compass orientation and zero disruptive modal prompts.',
    architecturalModule: 'Heads-Up Navigational Core',
  },
  {
    id: 'strat-5',
    number: '05',
    title: 'Dual-Layer Engagement Governance',
    chineseTitle: '分层体验 · 尊重自主',
    empiricalBasis:
      'Visitors rejected mandatory gamification and quizzes, demanding that playful features remain completely optional (P9).',
    empiricalSource: 'Finding: finding-balance',
    strategicInsight:
      'Interaction must follow a layered model: a quiet default path for calm visitors, with opt-in depth for curious explorers.',
    strategicRationale:
      'Satisfies divergent persona motivations (Li Mei vs Glinda) without forcing either into a compromised middle ground.',
    reqGoalIds: {
      req: 'R3',
      goal: 'DG4',
      decision: 'decision-4',
    },
    architecturalConsequence:
      'Optional narrative pathways, user-summoned Q&A chatbot, and reflective cultural keepsakes.',
    architecturalModule: 'Opt-in Cultural Keepsake Drawer',
  },
];

export function StrategicInsightsMatrix() {
  const [selectedId, setSelectedId] = useState<string>('strat-1');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeRow = strategicRows.find((r) => r.id === selectedId) ?? strategicRows[0];
  const activeFocusId = hoveredId ?? selectedId;

  return (
    <div className="space-y-8">
      {/* Editorial Header & Framing */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary font-bold">
          <Layers className="w-4 h-4 text-primary" />
          <span>Section 05.1 • Strategy & Systemic Consequences</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
          Strategic Insights Guiding Architectural Choices
        </h3>
        <p className="text-sm text-muted-foreground font-light max-w-3xl leading-relaxed">
          Translating empirical research observations into structured design priorities and deliberate system-level decisions. Each row maps empirical evidence to strategic product framing and architectural implementation.
        </p>
      </div>

      {/* The 5-Row Architecture Mapping System */}
      <div className="space-y-4">
        {/* Table Column Header Guide (Desktop) */}
        <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-2.5 bg-muted/40 rounded-xl text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold border border-border/60">
          <div className="col-span-1">No.</div>
          <div className="col-span-3">1. Empirical Research Basis</div>
          <div className="col-span-4">2. Synthesized Strategic Insight</div>
          <div className="col-span-4">3. Architectural Consequence</div>
        </div>

        {/* 5 Architectural Rows */}
        <div className="space-y-3">
          {strategicRows.map((row) => {
            const isSelected = row.id === selectedId;
            const isDimmed = activeFocusId !== null && activeFocusId !== row.id;

            return (
              <div
                key={row.id}
                role="button"
                tabIndex={0}
                aria-expanded={isSelected}
                onMouseEnter={() => setHoveredId(row.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedId(row.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedId(row.id);
                  }
                }}
                className={`group rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  isSelected
                    ? 'border-primary bg-card shadow-md ring-1 ring-primary/30'
                    : isDimmed
                    ? 'border-border/60 bg-card/60 opacity-60 hover:opacity-100'
                    : 'border-border/80 bg-card hover:border-primary/40 hover:shadow-xs'
                }`}
              >
                {/* Main 3-Column Strip */}
                <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
                  
                  {/* Number & Title */}
                  <div className="lg:col-span-1 flex items-center gap-3">
                    <span
                      className={`font-serif text-xl sm:text-2xl font-bold ${
                        isSelected ? 'text-secondary' : 'text-muted-foreground/80'
                      }`}
                    >
                      {row.number}
                    </span>
                    <span className="lg:hidden text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      {row.chineseTitle}
                    </span>
                  </div>

                  {/* Left Column: Empirical Basis */}
                  <div className="lg:col-span-3 space-y-1.5 border-l-2 lg:border-l-0 pl-3 lg:pl-0 border-secondary/40">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground block lg:hidden font-bold">
                      Empirical Basis
                    </span>
                    <p className="text-xs text-foreground font-medium leading-relaxed">
                      {row.empiricalBasis}
                    </p>
                    <span className="text-[10px] font-mono text-muted-foreground/80 block">
                      {row.empiricalSource}
                    </span>
                  </div>

                  {/* Center Column: Strategic Insight */}
                  <div className="lg:col-span-4 space-y-2 border-l-2 lg:border-l-0 pl-3 lg:pl-0 border-primary/40 bg-muted/20 lg:bg-transparent p-3 lg:p-0 rounded-xl">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-primary block lg:hidden font-bold">
                      Strategic Insight
                    </span>
                    <p className="text-xs sm:text-sm font-serif font-bold text-foreground leading-snug">
                      “{row.strategicInsight}”
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-muted text-[10px] font-mono text-muted-foreground border border-border/60">
                        Req: {row.reqGoalIds.req}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-primary/10 text-[10px] font-mono text-primary font-semibold border border-primary/20">
                        Goal: {row.reqGoalIds.goal}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Architectural Consequence */}
                  <div className="lg:col-span-4 space-y-1.5 border-l-2 lg:border-l-0 pl-3 lg:pl-0 border-emerald-500/40">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-700 dark:text-emerald-400 block lg:hidden font-bold">
                      Architectural Consequence
                    </span>
                    <p className="text-xs font-medium text-foreground leading-relaxed">
                      {row.architecturalConsequence}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] font-mono text-secondary font-semibold">
                        Module: {row.architecturalModule}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {isSelected ? 'Active Selection' : 'Click to inspect'}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Expanded Inspection Drawer for Active Row */}
                {isSelected && (
                  <div className="px-6 py-4 bg-muted/30 border-t border-border/60 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs animate-fade-in">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-bold block">
                        Strategic Rationale & HCI Grounding
                      </span>
                      <p className="text-muted-foreground leading-relaxed font-light">
                        {row.strategicRationale}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block">
                        Traceability Lineage Link
                      </span>
                      <p className="text-foreground leading-relaxed">
                        Tied directly to Requirement <strong className="font-mono text-primary">{row.reqGoalIds.req}</strong>, answering Goal <strong className="font-mono text-primary">{row.reqGoalIds.goal}</strong>, and verified via Decision <strong className="font-mono text-secondary">{row.reqGoalIds.decision}</strong> in Section 06.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
