'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, ClipboardList, Network } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type {
  DesignDecision,
  DesignGoal,
  Evaluation,
  Requirement,
} from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

interface TraceabilityWorkbenchProps {
  requirements: Requirement[];
  designGoals: DesignGoal[];
  decisions: DesignDecision[];
  evaluations: Evaluation[];
}

type TraceNode =
  | { kind: 'requirement'; item: Requirement }
  | { kind: 'goal'; item: DesignGoal }
  | { kind: 'decision'; item: DesignDecision }
  | { kind: 'evaluation'; item: Evaluation };

export function TraceabilityWorkbench({
  requirements,
  designGoals,
  decisions,
  evaluations,
}: TraceabilityWorkbenchProps) {
  const [activeNodeKey, setActiveNodeKey] = useState('requirement:R1');

  const traceNodes = useMemo<TraceNode[]>(() => {
    const requirement = requirements.find((item) => item.id === 'R1');
    const goal = designGoals.find((item) => item.id === 'DG1');
    const decision = decisions.find((item) => item.id === 'Decision-2');
    const evaluation = evaluations.find((item) => item.id === 'E1');

    return [
      requirement ? { kind: 'requirement', item: requirement } : null,
      goal ? { kind: 'goal', item: goal } : null,
      decision ? { kind: 'decision', item: decision } : null,
      evaluation ? { kind: 'evaluation', item: evaluation } : null,
    ].filter(Boolean) as TraceNode[];
  }, [decisions, designGoals, evaluations, requirements]);

  const activeNode = traceNodes.find((node) => getNodeKey(node) === activeNodeKey) ?? traceNodes[0];

  return (
    <Tabs defaultValue="graph" className="space-y-6">
      <TabsList className="h-auto flex-wrap gap-2 rounded-2xl bg-muted/50 p-2">
        <TabsTrigger value="graph" className="rounded-xl px-4 py-2">
          <Network className="h-4 w-4" />
          Traceability Graph
        </TabsTrigger>
        <TabsTrigger value="requirements" className="rounded-xl px-4 py-2">
          <ClipboardList className="h-4 w-4" />
          Requirements
        </TabsTrigger>
      </TabsList>

      <TabsContent value="graph" className="space-y-6">
        <Card className="rounded-3xl border-primary/15 bg-gradient-to-br from-primary/[0.08] via-background to-background py-0">
          <CardHeader className="px-6 pt-6">
            <CardTitle className="text-2xl">Traceability Graph View</CardTitle>
            <CardDescription className="max-w-3xl text-sm leading-6">
              This chain shows how a concrete research requirement flows into a design goal,
              becomes a design decision, and is later supported by evaluation evidence.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 px-6 pb-6">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-2">
              {traceNodes.map((node, index) => (
                <div key={getNodeKey(node)} className="flex flex-1 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveNodeKey(getNodeKey(node))}
                    className={cn(
                      'group flex w-full min-w-0 flex-col items-start rounded-2xl border px-4 py-4 text-left transition-all',
                      activeNodeKey === getNodeKey(node)
                        ? 'border-primary bg-primary/10 shadow-sm'
                        : 'border-border bg-card hover:border-primary/30 hover:bg-muted/40'
                    )}
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {getNodeLabel(node.kind)}
                    </span>
                    <span className="mt-2 text-sm font-semibold text-foreground">{getNodeId(node)}</span>
                    <span className="mt-1 text-sm leading-6 text-muted-foreground">
                      {getNodeTitle(node)}
                    </span>
                  </button>

                  {index < traceNodes.length - 1 && (
                    <div className="hidden lg:flex h-10 w-10 items-center justify-center text-primary/60">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {activeNode && (
              <Card className="rounded-2xl border-border/80 bg-card/90 py-0">
                <CardHeader className="px-6 pt-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary">{getNodeLabel(activeNode.kind)}</Badge>
                    <Badge variant="outline">{getNodeId(activeNode)}</Badge>
                  </div>
                  <CardTitle className="text-xl">{getNodeTitle(activeNode)}</CardTitle>
                </CardHeader>

                <CardContent className="grid gap-4 px-6 pb-6 md:grid-cols-2">
                  {renderNodeFields(activeNode)}
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="requirements">
        <Card className="rounded-3xl py-0">
          <CardHeader className="px-6 pt-6">
            <CardTitle className="text-2xl">Requirements Trace Table</CardTitle>
            <CardDescription className="text-sm leading-6">
              A compact view of requirement origin, priority, and the design goals each one supports.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 pb-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-6">ID</TableHead>
                  <TableHead>Requirement</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead className="pr-6">Linked DGs</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requirements.map((requirement) => (
                  <TableRow key={requirement.id}>
                    <TableCell className="px-6 font-semibold text-foreground">{requirement.id}</TableCell>
                    <TableCell className="max-w-xl whitespace-normal text-sm leading-6 text-muted-foreground">
                      <div className="space-y-1">
                        <p>{requirement.description}</p>
                        <p className="text-xs text-muted-foreground/80">{requirement.evidence}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityClasses(requirement.priority)}>{requirement.priority}</Badge>
                    </TableCell>
                    <TableCell className="capitalize text-sm text-muted-foreground">
                      {requirement.source}
                    </TableCell>
                    <TableCell className="pr-6">
                      <div className="flex flex-wrap gap-2">
                        {requirement.linkedDesignGoals?.map((goalId) => (
                          <Badge key={goalId} variant="outline">
                            {goalId}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

function renderNodeFields(node: TraceNode) {
  switch (node.kind) {
    case 'requirement':
      return (
        <>
          <DetailBlock label="Description" value={node.item.description} />
          <DetailBlock label="Evidence" value={node.item.evidence} />
          <DetailBlock label="Priority" value={node.item.priority} />
          <DetailBlock
            label="Linked Design Goals"
            value={node.item.linkedDesignGoals?.join(', ') ?? 'None'}
          />
        </>
      );
    case 'goal':
      return (
        <>
          <DetailBlock label="Goal" value={node.item.description} />
          <DetailBlock label="Linked Requirements" value={node.item.linkedRequirements.join(', ')} />
          <DetailBlock
            label="Linked Decisions"
            value={node.item.linkedDecisions?.join(', ') ?? 'None'}
          />
        </>
      );
    case 'decision':
      return (
        <>
          <DetailBlock label="Decision" value={node.item.decision} />
          <DetailBlock label="Rationale" value={node.item.rationale} />
          <DetailBlock
            label="Linked Evidence"
            value={node.item.linkedEvaluations?.join(', ') ?? 'No linked evaluation yet'}
          />
          <DetailBlock label="Trade-off" value={node.item.tradeoff ?? 'No trade-off recorded'} />
        </>
      );
    case 'evaluation':
      return (
        <>
          <DetailBlock label="Method" value={node.item.method} />
          <DetailBlock label="Findings" value={node.item.findings} />
          <DetailBlock label="Evidence" value={node.item.evidence} />
          <DetailBlock label="Impact" value={node.item.iterationImpact} />
        </>
      );
  }
}

function DetailBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-muted/30 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-foreground">{value}</p>
    </div>
  );
}

function getNodeKey(node: TraceNode) {
  return `${node.kind}:${getNodeId(node)}`;
}

function getNodeId(node: TraceNode) {
  return node.item.id;
}

function getNodeTitle(node: TraceNode) {
  switch (node.kind) {
    case 'requirement':
    case 'goal':
      return node.item.description;
    case 'decision':
      return node.item.decision;
    case 'evaluation':
      return node.item.context;
  }
}

function getNodeLabel(kind: TraceNode['kind']) {
  switch (kind) {
    case 'requirement':
      return 'Requirement';
    case 'goal':
      return 'Design Goal';
    case 'decision':
      return 'Decision';
    case 'evaluation':
      return 'Evaluation';
  }
}

function getPriorityClasses(priority: Requirement['priority']) {
  if (priority === 'high') {
    return 'border-transparent bg-destructive/10 text-destructive';
  }

  if (priority === 'medium') {
    return 'border-transparent bg-primary/10 text-primary';
  }

  return 'border-transparent bg-muted text-muted-foreground';
}
