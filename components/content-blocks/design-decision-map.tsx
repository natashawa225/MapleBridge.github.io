import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface MappingEntry {
  id: string;
  insight: string;
  decision: string;
  rationale: string;
  tradeoff?: string;
}

interface DesignDecisionMapProps {
  mappings: MappingEntry[];
}

export function DesignDecisionMap({ mappings }: DesignDecisionMapProps) {
  return (
    <div className="space-y-4 animate-fade-in-up">
      {/* Desktop view - Table */}
      <div className="hidden md:block overflow-x-auto">
        <Card className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold text-foreground w-1/4">
                  Research Insight
                </TableHead>
                <TableHead className="text-center w-12">
                  <ArrowRight className="h-4 w-4 mx-auto" />
                </TableHead>
                <TableHead className="font-semibold text-foreground w-1/4">Design Decision</TableHead>
                <TableHead className="font-semibold text-foreground w-1/3">Rationale</TableHead>
                <TableHead className="font-semibold text-foreground text-sm">Trade-offs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mappings.map((mapping, idx) => (
                <TableRow key={mapping.id} className={idx % 2 === 0 ? 'bg-muted/30' : ''}>
                  <TableCell className="font-medium text-primary">{mapping.insight}</TableCell>
                  <TableCell className="text-center text-muted-foreground">→</TableCell>
                  <TableCell className="font-medium text-foreground">{mapping.decision}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{mapping.rationale}</TableCell>
                  <TableCell className="text-xs text-muted-foreground italic">{mapping.tradeoff || '—'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* Mobile view - Cards */}
      <div className="md:hidden space-y-4">
        {mappings.map((mapping) => (
          <Card key={mapping.id} className="p-4 space-y-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">Insight</p>
              <p className="font-medium text-foreground">{mapping.insight}</p>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">Decision</p>
              <p className="font-medium text-foreground">{mapping.decision}</p>
            </div>

            <div className="pt-2 border-t border-border">
              <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                Rationale
              </p>
              <p className="text-sm text-muted-foreground">{mapping.rationale}</p>
            </div>

            {mapping.tradeoff && (
              <div className="pt-2 border-t border-border">
                <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                  Trade-offs
                </p>
                <p className="text-xs text-muted-foreground">{mapping.tradeoff}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
