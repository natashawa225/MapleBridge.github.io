import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface InterviewQuoteBlockProps {
  quote: string;
  speaker?: string;
  role?: string;
  context?: string;
}

export function InterviewQuoteBlock({
  quote,
  speaker,
  role,
  context,
}: InterviewQuoteBlockProps) {
  return (
    <Card className="p-6 border-l-4 border-primary bg-muted/30 animate-fade-in-up">
      <div className="space-y-3">
        <div className="flex gap-3">
          <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <p className="text-lg text-foreground italic leading-relaxed">{quote}</p>
        </div>

        {speaker && (
          <div className="pt-2 border-t border-border">
            <p className="text-sm font-semibold text-foreground">{speaker}</p>
            {role && <p className="text-xs text-muted-foreground">{role}</p>}
          </div>
        )}

        {context && (
          <p className="text-xs text-muted-foreground bg-background/50 rounded p-2">
            {context}
          </p>
        )}
      </div>
    </Card>
  );
}
