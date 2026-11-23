'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, ClipboardList, Network, Sparkles, Layers, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { DesignDecision, DesignGoal, Evaluation, Requirement } from '@/lib/portfolio-data';

interface TraceabilityWorkbenchProps {
  requirements: Requirement[];
  designGoals: DesignGoal[];
  decisions: DesignDecision[];
  evaluations: Evaluation[];
}

interface TraceChain {
  id: string;
  label: string;
  reqId: string;
  goalId: string;
  decisionId: string;
  evalId: string;
}

const chains: TraceChain[] = [
  {
    id: 'chain-immersion',
    label: '01. Audio-First Immersion',
    reqId: 'R1',
    goalId: 'DG1',
    decisionId: 'Decision-2',
    evalId: 'E2',
  },
  {
    id: 'chain-planning',
    label: '02. Pre-Visit Crowd Foresight',
    reqId: 'R2',
    goalId: 'DG3',
    decisionId: 'decision-1',
    evalId: 'E1',
  },
  {
    id: 'chain-optional',
    label: '03. Optional vs. Forced Interaction',
    reqId: 'R3',
    goalId: 'DG4',
    decisionId: 'decision-4',
    evalId: 'E2',
  },
  {
    id: 'chain-cognitive',
    label: '04. Reducing Cognitive Friction',
    reqId: 'R4',
    goalId: 'DG2',
    decisionId: 'decision-3',
    evalId: 'E1',
  },
];

export function TraceabilityWorkbench({
  requirements,
  designGoals,
  decisions,
  evaluations,
}: TraceabilityWorkbenchProps) {
  const [activeChainId, setActiveChainId] = useState<string>('chain-immersion');
  const [selectedNodeType, setSelectedNodeType] = useState<'requirement' | 'goal' | 'decision' | 'evaluation'>('requirement');

  const activeChain = chains.find((c) => c.id === activeChainId) ?? chains[0];

  const currentReq = requirements.find((r) => r.id === activeChain.reqId);
  const currentGoal = designGoals.find((g) => g.id === activeChain.goalId);
  const currentDecision = decisions.find((d) => d.id.toLowerCase() === activeChain.decisionId.toLowerCase()) ?? decisions[0];
  const currentEval = evaluations.find((e) => e.id === activeChain.evalId) ?? evaluations[0];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="graph" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <TabsList className="bg-muted/60 p-1 rounded-2xl border border-border">
            <TabsTrigger value="graph" className="rounded-xl px-4 py-2 text-xs font-mono uppercase tracking-wider gap-2">
              <Network className="w-4 h-4 text-secondary" />
              <span>Interactive Trace Graph</span>
            </TabsTrigger>
            <TabsTrigger value="table" className="rounded-xl px-4 py-2 text-xs font-mono uppercase tracking-wider gap-2">
              <ClipboardList className="w-4 h-4 text-primary" />
              <span>Requirements Matrix</span>
            </TabsTrigger>
          </TabsList>

          <span className="text-xs font-mono text-muted-foreground">
            HCI Traceability & Design Decision Audit
          </span>
        </div>

        {/* Tab 1: Interactive Trace Graph */}
        <TabsContent value="graph" className="space-y-6">
          <Card className="rounded-3xl border border-border/80 bg-card/90 shadow-xs p-6 md:p-8 space-y-6">
            
            {/* Chain Selector Buttons */}
            <div className="space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                Select an Empirical HCI Reasoning Chain:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {chains.map((chain) => {
                  const isSelected = chain.id === activeChainId;
                  return (
                    <button
                      key={chain.id}
                      onClick={() => {
                        setActiveChainId(chain.id);
                        setSelectedNodeType('requirement');
                      }}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-medium text-left transition-all border ${
                        isSelected
                          ? 'bg-primary text-primary-foreground border-primary shadow-xs font-semibold'
                          : 'bg-muted/40 text-muted-foreground border-border hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      {chain.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Visual Node Flow Line */}
            <div className="pt-4 border-t border-border/60">
              <p className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold mb-4">
                Interactive Reasoning Path (Click any node to inspect rationale)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                
                {/* Node 1: Requirement */}
                <button
                  onClick={() => setSelectedNodeType('requirement')}
                  className={`p-4 rounded-2xl text-left border transition-all relative ${
                    selectedNodeType === 'requirement'
                      ? 'border-secondary bg-secondary/10 shadow-sm ring-2 ring-secondary/20'
                      : 'border-border bg-card hover:border-border/80 hover:bg-muted/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
                      01. Requirement
                    </span>
                    <Badge variant="outline" className="text-[10px] font-mono">{currentReq?.id}</Badge>
                  </div>
                  <p className="text-xs font-serif font-bold text-foreground line-clamp-2">
                    {currentReq?.description}
                  </p>
                  <span className="mt-2 text-[10px] text-muted-foreground font-mono block">
                    Source: {currentReq?.source}
                  </span>
                </button>

                {/* Node 2: Design Goal */}
                <button
                  onClick={() => setSelectedNodeType('goal')}
                  className={`p-4 rounded-2xl text-left border transition-all relative ${
                    selectedNodeType === 'goal'
                      ? 'border-primary bg-primary/10 shadow-sm ring-2 ring-primary/20'
                      : 'border-border bg-card hover:border-border/80 hover:bg-muted/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                      02. Design Goal
                    </span>
                    <Badge variant="outline" className="text-[10px] font-mono">{currentGoal?.id}</Badge>
                  </div>
                  <p className="text-xs font-serif font-bold text-foreground line-clamp-2">
                    {currentGoal?.description}
                  </p>
                  <span className="mt-2 text-[10px] text-muted-foreground font-mono block">
                    Drives: {currentGoal?.linkedDecisions?.join(', ')}
                  </span>
                </button>

                {/* Node 3: Design Decision */}
                <button
                  onClick={() => setSelectedNodeType('decision')}
                  className={`p-4 rounded-2xl text-left border transition-all relative ${
                    selectedNodeType === 'decision'
                      ? 'border-secondary bg-secondary/10 shadow-sm ring-2 ring-secondary/20'
                      : 'border-border bg-card hover:border-border/80 hover:bg-muted/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">
                      03. Design Decision
                    </span>
                    <Badge variant="outline" className="text-[10px] font-mono">{currentDecision?.id}</Badge>
                  </div>
                  <p className="text-xs font-serif font-bold text-foreground line-clamp-2">
                    {currentDecision?.decision}
                  </p>
                  <span className="mt-2 text-[10px] text-muted-foreground font-mono block">
                    Trade-off recorded
                  </span>
                </button>

                {/* Node 4: Evaluation Evidence */}
                <button
                  onClick={() => setSelectedNodeType('evaluation')}
                  className={`p-4 rounded-2xl text-left border transition-all relative ${
                    selectedNodeType === 'evaluation'
                      ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 shadow-sm ring-2 ring-emerald-500/20'
                      : 'border-border bg-card hover:border-border/80 hover:bg-muted/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold">
                      04. Evaluation
                    </span>
                    <Badge variant="outline" className="text-[10px] font-mono">{currentEval?.id}</Badge>
                  </div>
                  <p className="text-xs font-serif font-bold text-foreground line-clamp-2">
                    {currentEval?.context}
                  </p>
                  <span className="mt-2 text-[10px] text-muted-foreground font-mono block">
                    N={currentEval?.participants} Walkthrough
                  </span>
                </button>

              </div>
            </div>

            {/* Node Inspector Detail Panel */}
            <div className="pt-4 border-t border-border/60">
              <div className="p-6 rounded-2xl bg-muted/40 border border-border/80 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary text-primary-foreground text-xs uppercase font-mono">
                      {selectedNodeType.toUpperCase()} INSPECTOR
                    </Badge>
                    <span className="text-sm font-serif font-bold text-foreground">
                      {selectedNodeType === 'requirement' && `${currentReq?.id} — Empirical Requirement`}
                      {selectedNodeType === 'goal' && `${currentGoal?.id} — Design Goal`}
                      {selectedNodeType === 'decision' && `${currentDecision?.id} — Prototype Decision`}
                      {selectedNodeType === 'evaluation' && `${currentEval?.id} — Walkthrough Evidence`}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">
                    Chain: {activeChain.label}
                  </span>
                </div>

                {/* Requirement View */}
                {selectedNodeType === 'requirement' && currentReq && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground font-semibold block">Requirement Description</span>
                      <p className="text-foreground font-medium leading-relaxed">{currentReq.description}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground font-semibold block">Empirical Field Evidence</span>
                      <p className="text-muted-foreground italic font-serif leading-relaxed">“{currentReq.evidence}”</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground font-semibold block">Priority Tier</span>
                      <Badge variant={currentReq.priority === 'high' ? 'destructive' : 'secondary'} className="text-[10px] uppercase font-mono">
                        {currentReq.priority} priority
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground font-semibold block">Linked Design Goals</span>
                      <div className="flex gap-1.5 pt-1">
                        {currentReq.linkedDesignGoals?.map((dg) => (
                          <span key={dg} className="px-2 py-0.5 rounded bg-primary/10 text-primary font-mono text-xs">
                            {dg}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Goal View */}
                {selectedNodeType === 'goal' && currentGoal && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground font-semibold block">Design Goal</span>
                      <p className="text-foreground font-medium leading-relaxed">{currentGoal.description}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground font-semibold block">Root Requirements</span>
                      <p className="text-muted-foreground font-mono">{currentGoal.linkedRequirements.join(', ')}</p>
                    </div>
                    <div className="md:col-span-2 space-y-1">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground font-semibold block">Answered by Design Decisions</span>
                      <p className="text-muted-foreground font-mono">{currentGoal.linkedDecisions?.join(', ')}</p>
                    </div>
                  </div>
                )}

                {/* Decision View */}
                {selectedNodeType === 'decision' && currentDecision && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground font-semibold block">Prototype Implementation Move</span>
                      <p className="text-foreground font-medium leading-relaxed">{currentDecision.decision}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground font-semibold block">Design Rationale</span>
                      <p className="text-muted-foreground leading-relaxed font-light">{currentDecision.rationale}</p>
                    </div>
                    <div className="md:col-span-2 space-y-1 p-3 rounded-xl bg-destructive/5 border border-destructive/20">
                      <span className="text-[10px] font-mono uppercase text-destructive font-bold block">Trade-off & Design Constraint</span>
                      <p className="text-xs text-muted-foreground leading-relaxed">{currentDecision.tradeoff}</p>
                    </div>
                  </div>
                )}

                {/* Evaluation View */}
                {selectedNodeType === 'evaluation' && currentEval && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground font-semibold block">Walkthrough Findings</span>
                      <p className="text-foreground font-medium leading-relaxed">{currentEval.findings}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-muted-foreground font-semibold block">Evaluation Context & Method</span>
                      <p className="text-muted-foreground leading-relaxed">{currentEval.context} ({currentEval.method}, N={currentEval.participants})</p>
                    </div>
                    <div className="md:col-span-2 space-y-1 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <span className="text-[10px] font-mono uppercase text-emerald-800 dark:text-emerald-400 font-bold block">Direct Iteration Impact</span>
                      <p className="text-xs text-muted-foreground leading-relaxed">{currentEval.iterationImpact}</p>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </Card>
        </TabsContent>

        {/* Tab 2: Requirements Matrix Table */}
        <TabsContent value="table">
          <Card className="rounded-3xl border border-border/80 bg-card overflow-hidden shadow-xs">
            <div className="p-6 border-b border-border/70">
              <h3 className="font-serif font-bold text-xl text-foreground">
                Formal Requirements Traceability Matrix
              </h3>
              <p className="text-xs text-muted-foreground font-light mt-1">
                Ensuring every user need discovered in the field is explicitly anchored to architectural design goals and concrete prototype decisions.
              </p>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/40">
                    <TableHead className="w-16 font-mono text-xs">ID</TableHead>
                    <TableHead className="min-w-[280px]">Requirement Description</TableHead>
                    <TableHead className="w-24">Priority</TableHead>
                    <TableHead className="w-28">Source</TableHead>
                    <TableHead className="min-w-[200px]">Empirical Grounding</TableHead>
                    <TableHead className="w-24">Goals</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-xs divide-y divide-border/60">
                  {requirements.map((req) => (
                    <TableRow key={req.id} className="hover:bg-muted/20">
                      <TableCell className="font-mono font-bold text-foreground">{req.id}</TableCell>
                      <TableCell className="font-medium text-foreground">{req.description}</TableCell>
                      <TableCell>
                        <Badge
                          variant={req.priority === 'high' ? 'destructive' : 'secondary'}
                          className="text-[10px] font-mono uppercase"
                        >
                          {req.priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono capitalize text-muted-foreground">{req.source}</TableCell>
                      <TableCell className="text-muted-foreground italic font-serif">“{req.evidence}”</TableCell>
                      <TableCell className="font-mono text-primary font-bold">
                        {req.linkedDesignGoals?.join(', ')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
