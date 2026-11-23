import { Card } from '@/components/ui/card';
import { Globe, Headphones, Calendar, Smartphone, Sparkles, Quote, ArrowRight, UserCheck } from 'lucide-react';

export interface EnrichedFinding {
  id: string;
  number: string;
  title: string;
  description: string;
  evidenceQuote: string;
  designImplication: string;
  addressedPersona: string;
  iconName: 'Globe' | 'Headphones' | 'Calendar' | 'Smartphone' | 'Sparkles';
}

interface ResearchFindingCardProps {
  finding: EnrichedFinding;
}

export function ResearchFindingCard({ finding }: ResearchFindingCardProps) {
  const getIcon = () => {
    switch (finding.iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-secondary" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-primary" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-secondary" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-primary" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-secondary" />;
      default:
        return <Globe className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <Card className="p-6 sm:p-7 bg-card/95 border border-border/80 rounded-3xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div className="space-y-5">
        {/* Header with Number & Icon */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-muted/60 border border-border/60 flex items-center justify-center shrink-0">
              {getIcon()}
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                Insight {finding.number}
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground leading-snug">
                {finding.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <p className="text-sm text-muted-foreground leading-relaxed font-light">
          {finding.description}
        </p>

        {/* Participant Quotation Evidence */}
        <div className="p-4 rounded-xl bg-muted/40 border-l-2 border-secondary/70 space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
            <Quote className="w-3 h-3 text-secondary" />
            <span>Participant Observation & Quote</span>
          </div>
          <p className="text-xs sm:text-sm font-serif italic text-foreground leading-relaxed">
            “{finding.evidenceQuote}”
          </p>
        </div>
      </div>

      {/* Footer: Design Implication & Addressed Persona */}
      <div className="pt-4 mt-5 border-t border-border/60 space-y-2.5">
        <div className="flex items-start gap-2">
          <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <span className="font-semibold text-foreground uppercase tracking-wider text-[10px] font-mono block">
              Design Implication
            </span>
            <span className="text-muted-foreground">{finding.designImplication}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-muted-foreground">
          <UserCheck className="w-3.5 h-3.5 text-secondary" />
          <span>{finding.addressedPersona}</span>
        </div>
      </div>
    </Card>
  );
}
