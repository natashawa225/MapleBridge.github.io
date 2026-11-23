'use client';

import { useState } from 'react';
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Layers,
  Sparkles,
  Compass,
  Headphones,
  Calendar,
  Smartphone,
  Eye,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export interface ArchitecturalMoveItem {
  id: string;
  number: string;
  title: string;
  chineseTitle: string;
  researchInsight: string;
  insightId: string;
  architecturalMove: string;
  purposeRationale: string;
  acknowledgedTradeoff: string;
  mitigationStrategy: string;
  reqGoalDecisionIds: {
    req: string;
    goal: string;
    decision: string;
    eval: string;
  };
}

const architecturalMoves: ArchitecturalMoveItem[] = [
  {
    id: 'move-1',
    number: '01',
    title: 'Context-Aware Cultural Interpretation Layer',
    chineseTitle: '情境感知 · 文化阐释层',
    researchInsight: 'Visitors want cultural meaning without losing immersion',
    insightId: 'insight-1',
    architecturalMove: 'Context-aware cultural interpretation layer',
    purposeRationale:
      'Reveal the meaning of landmarks through lightweight, location-aware storytelling that supports appreciation of the heritage site rather than competing with it.',
    acknowledgedTradeoff:
      'Richer interpretation improves cultural understanding, but requires careful content curation so the experience remains calm and not overloaded.',
    mitigationStrategy:
      'Audio clips are capped at 90 seconds, focused strictly on Zhang Ji’s poem and canal history, avoiding encyclopedic information dumps.',
    reqGoalDecisionIds: {
      req: 'R1 & R4',
      goal: 'DG1 & DG2',
      decision: 'decision-3',
      eval: 'E2',
    },
  },
  {
    id: 'move-2',
    number: '02',
    title: 'Audio-First Situated Experience',
    chineseTitle: '音频优先 · 声景沉浸',
    researchInsight: 'Audio is preferred on-site because it keeps attention on the place',
    insightId: 'insight-2',
    architecturalMove: 'Audio-first situated experience',
    purposeRationale:
      'On-site guidance prioritizes spoken narration and subtle acoustic cues, allowing visitors to keep their eyes on the scenery while still receiving historical context.',
    acknowledgedTradeoff:
      'Audio supports immersion better than text, but it must be paced carefully so it does not compete with ambient canal sounds or feel intrusive.',
    mitigationStrategy:
      'Narration begins with subtle chimes, respecting natural ambient canal water and temple bell soundscapes with user-controlled pause/replay.',
    reqGoalDecisionIds: {
      req: 'R1',
      goal: 'DG1',
      decision: 'Decision-2',
      eval: 'E2',
    },
  },
  {
    id: 'move-3',
    number: '03',
    title: 'Pre-Visit Insight and Crowd-Awareness Layer',
    chineseTitle: '行前洞察 · 人流预警',
    researchInsight: 'Planning support matters before the visit begins',
    insightId: 'insight-3',
    architecturalMove: 'Pre-visit insight and crowd-awareness layer',
    purposeRationale:
      'Before arrival, the system helps visitors anticipate the experience through crowd forecasts, landmark previews, and optimal visiting windows, reducing uncertainty.',
    acknowledgedTradeoff:
      'Pre-visit tools improve confidence and comfort, but require reliable crowd data and additional upfront content preparation.',
    mitigationStrategy:
      'In the research prototype, crowd data is transparently simulated to demonstrate UI intent; in production, this would bridge municipal scenic API feeds.',
    reqGoalDecisionIds: {
      req: 'R2',
      goal: 'DG3',
      decision: 'decision-1',
      eval: 'E1',
    },
  },
  {
    id: 'move-4',
    number: '04',
    title: 'Minimal Visual Interface with Subtle Navigation Cues',
    chineseTitle: '极简视觉 · 弱化界面',
    researchInsight: 'Excessive phone interaction creates cognitive and experiential friction',
    insightId: 'insight-screen',
    architecturalMove: 'Minimal visual interface with subtle navigation cues',
    purposeRationale:
      'Reduce dense text and complex controls while walking; the interface focuses on simple orientation cues rather than demanding continuous gaze.',
    acknowledgedTradeoff:
      'A minimal interface preserves physical immersion, but needs sufficiently clear orientation cues to prevent users from feeling lost.',
    mitigationStrategy:
      'Map markers use high-contrast landmark silhouettes and gentle proximity radii rather than cluttered turn-by-turn routing arrows.',
    reqGoalDecisionIds: {
      req: 'R4',
      goal: 'DG2',
      decision: 'decision-3',
      eval: 'E1',
    },
  },
  {
    id: 'move-5',
    number: '05',
    title: 'Optional Narrative Paths and Cultural Collectibles',
    chineseTitle: '可选进阶 · 尊重偏好',
    researchInsight: 'Deeper interaction should be optional, not the default',
    insightId: 'insight-4',
    architecturalMove: 'Optional narrative paths and cultural collectibles',
    purposeRationale:
      'Provide additional cultural depth through opt-in story threads, photo spot advice, and chatbot interaction without disrupting visitors who prefer a quiet walk.',
    acknowledgedTradeoff:
      'Optional depth broadens appeal, but these features must be framed carefully so they feel culturally grounded rather than overly gamified.',
    mitigationStrategy:
      'Collectibles are styled as traditional seal stamps and literary keepsakes rather than flashy gaming tokens or score points.',
    reqGoalDecisionIds: {
      req: 'R3',
      goal: 'DG4',
      decision: 'decision-4',
      eval: 'E2',
    },
  },
];

export function ArchitecturalMappingExplorer() {
  const [selectedMoveId, setSelectedMoveId] = useState<string>('move-1');
  const [hoveredMoveId, setHoveredMoveId] = useState<string | null>(null);

  const activeMove = architecturalMoves.find((m) => m.id === selectedMoveId) ?? architecturalMoves[0];
  const activeFocusId = hoveredMoveId ?? selectedMoveId;

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary font-bold">
          <Compass className="w-4 h-4 text-secondary" />
          <span>Section 05.2 • Systemic Moves & Explicit Trade-Offs</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
          Insight-to-Design Architectural Mapping
        </h3>
        <p className="text-sm text-muted-foreground font-light max-w-3xl leading-relaxed">
          Every architectural move introduces both deliberate benefits and explicit trade-offs that were navigated during the project. This interactive architecture map exposes the end-to-end design reasoning: from the original research insight, to the concrete architectural move, its underlying purpose, and the acknowledged trade-off.
        </p>
      </div>

      {/* Interactive 5-Row Architecture Map */}
      <div className="space-y-4">
        {/* Table Column Guide (Desktop) */}
        <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 bg-muted/40 rounded-2xl text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold border border-border/60">
          <div className="col-span-1">Move</div>
          <div className="col-span-3">01. Research Insight</div>
          <div className="col-span-3">02. Architectural Move</div>
          <div className="col-span-3">03. Design Rationale</div>
          <div className="col-span-2 text-destructive font-bold">04. Trade-Off</div>
        </div>

        {/* 5 Rows */}
        <div className="space-y-3">
          {architecturalMoves.map((item) => {
            const isSelected = item.id === selectedMoveId;
            const isDimmed = activeFocusId !== null && activeFocusId !== item.id;

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-expanded={isSelected}
                onMouseEnter={() => setHoveredMoveId(item.id)}
                onMouseLeave={() => setHoveredMoveId(null)}
                onClick={() => setSelectedMoveId(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedMoveId(item.id);
                  }
                }}
                className={`group rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
                  isSelected
                    ? 'border-secondary bg-card shadow-md ring-1 ring-secondary/30'
                    : isDimmed
                    ? 'border-border/60 bg-card/60 opacity-60 hover:opacity-100'
                    : 'border-border/80 bg-card hover:border-secondary/40 hover:shadow-xs'
                }`}
              >
                {/* 4-Stage Content Row */}
                <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-center">
                  
                  {/* Number & Chinese Name */}
                  <div className="lg:col-span-1 flex items-center gap-3">
                    <span
                      className={`font-serif text-2xl font-bold ${
                        isSelected ? 'text-secondary' : 'text-primary'
                      }`}
                    >
                      {item.number}
                    </span>
                    <span className="lg:hidden text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      {item.chineseTitle}
                    </span>
                  </div>

                  {/* Column 01: Research Insight */}
                  <div className="lg:col-span-3 space-y-1.5 border-l-2 lg:border-l-0 pl-3 lg:pl-0 border-muted">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground block lg:hidden font-bold">
                      01. Research Insight
                    </span>
                    <p className="text-xs font-serif font-bold text-foreground leading-snug">
                      “{item.researchInsight}”
                    </p>
                    <span className="text-[10px] font-mono text-muted-foreground block">
                      Ref: {item.insightId}
                    </span>
                  </div>

                  {/* Column 02: Architectural Move */}
                  <div className="lg:col-span-3 space-y-1.5 border-l-2 lg:border-l-0 pl-3 lg:pl-0 border-primary bg-primary/[0.03] lg:bg-transparent p-2.5 lg:p-0 rounded-xl">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-primary block lg:hidden font-bold">
                      02. Architectural Move
                    </span>
                    <h4 className="text-xs font-bold text-foreground leading-snug">
                      {item.architecturalMove}
                    </h4>
                    <span className="text-[10px] font-mono text-primary font-semibold block">
                      Goal: {item.reqGoalDecisionIds.goal}
                    </span>
                  </div>

                  {/* Column 03: Purpose & Rationale */}
                  <div className="lg:col-span-3 space-y-1 border-l-2 lg:border-l-0 pl-3 lg:pl-0 border-border">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground block lg:hidden font-bold">
                      03. Design Rationale
                    </span>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-3 lg:line-clamp-2">
                      {item.purposeRationale}
                    </p>
                  </div>

                  {/* Column 04: Acknowledged Trade-Off */}
                  <div className="lg:col-span-2 space-y-1 border-l-2 lg:border-l-0 pl-3 lg:pl-0 border-destructive/60 bg-destructive/[0.03] lg:bg-transparent p-2.5 lg:p-0 rounded-xl">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-destructive block lg:hidden font-bold flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      <span>04. Acknowledged Trade-Off</span>
                    </span>
                    <p className="text-xs text-muted-foreground leading-snug line-clamp-3 lg:line-clamp-2">
                      {item.acknowledgedTradeoff}
                    </p>
                  </div>

                </div>

                {/* Expanded Inspection Panel */}
                {isSelected && (
                  <div className="px-6 py-5 bg-muted/30 border-t border-border/70 space-y-4 animate-fade-in">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-3">
                      <div className="flex items-center gap-2.5">
                        <Badge className="bg-secondary text-secondary-foreground text-[10px] uppercase font-mono">
                          Move {item.number} Audit
                        </Badge>
                        <span className="font-serif font-bold text-base text-foreground">
                          {item.title} ({item.chineseTitle})
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                        <span className="px-2 py-0.5 rounded bg-card border border-border">
                          Req: {item.reqGoalDecisionIds.req}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                          Goal: {item.reqGoalDecisionIds.goal}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/20">
                          Decision: {item.reqGoalDecisionIds.decision}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                          Eval: {item.reqGoalDecisionIds.eval}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase text-foreground font-bold block">
                          Design Intent & Cognitive Rationale
                        </span>
                        <p className="text-muted-foreground leading-relaxed font-light">
                          {item.purposeRationale}
                        </p>
                      </div>

                      <div className="space-y-2 p-4 rounded-2xl bg-destructive/[0.04] border border-destructive/20">
                        <span className="text-[10px] font-mono uppercase text-destructive font-bold flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Acknowledged Trade-Off & Mitigation Strategy</span>
                        </span>
                        <p className="text-muted-foreground leading-relaxed font-light text-xs">
                          {item.acknowledgedTradeoff}
                        </p>
                        <p className="text-foreground font-medium text-xs pt-1 border-t border-destructive/10">
                          Mitigation: {item.mitigationStrategy}
                        </p>
                      </div>
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
