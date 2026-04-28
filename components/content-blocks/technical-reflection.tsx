'use client';

import { Card } from '@/components/ui/card';
import { TechnicalReflectionData } from '@/lib/portfolio-data';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface TechnicalReflectionProps {
  data: TechnicalReflectionData;
}

export function TechnicalReflection({ data }: TechnicalReflectionProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    prompts: true,
    methods: false,
    ethics: false,
    ai: true,
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-4">
      {/* Prompts Used */}
      <Card className="overflow-hidden animate-fade-in-up">
        <Collapsible open={openItems.prompts} onOpenChange={() => toggleItem('prompts')}>
          <CollapsibleTrigger className="w-full">
            <div className="flex items-center justify-between p-6 hover:bg-muted/50 transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold text-foreground text-left">Prompts Used</h3>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground transition-transform ${
                  openItems.prompts ? 'rotate-180' : ''
                }`}
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="border-t border-border">
            <div className="p-6 space-y-4">
              {data.promptsUsed.map((prompt, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-sm font-mono bg-muted rounded p-3 text-foreground">
                    {prompt}
                  </p>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Verification Methods */}
      <Card className="overflow-hidden animate-fade-in-up">
        <Collapsible open={openItems.methods} onOpenChange={() => toggleItem('methods')}>
          <CollapsibleTrigger className="w-full">
            <div className="flex items-center justify-between p-6 hover:bg-muted/50 transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold text-foreground text-left">Verification Methods</h3>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground transition-transform ${
                  openItems.methods ? 'rotate-180' : ''
                }`}
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="border-t border-border">
            <div className="p-6 space-y-3">
              {data.verificationMethods.map((method, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                  <p className="text-sm text-muted-foreground flex-1">{method}</p>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Ethical Considerations */}
      <Card className="overflow-hidden animate-fade-in-up">
        <Collapsible open={openItems.ethics} onOpenChange={() => toggleItem('ethics')}>
          <CollapsibleTrigger className="w-full">
            <div className="flex items-center justify-between p-6 hover:bg-muted/50 transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold text-foreground text-left">
                Ethical Considerations
              </h3>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground transition-transform ${
                  openItems.ethics ? 'rotate-180' : ''
                }`}
              />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="border-t border-border">
            <div className="p-6 space-y-6">
              {data.ethicalConsiderations.map((consideration) => (
                <div key={consideration.id} className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                    <h4 className="font-semibold text-foreground text-sm">
                      {consideration.category}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-4 mb-2">
                    {consideration.consideration}
                  </p>
                  <div className="ml-4 p-3 bg-muted/50 rounded text-sm text-foreground">
                    <p className="font-medium mb-1">Approach:</p>
                    <p className="text-muted-foreground">{consideration.approach}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {data.aiReflection && (
        <Card className="overflow-hidden animate-fade-in-up">
          <Collapsible open={openItems.ai} onOpenChange={() => toggleItem('ai')}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-6 hover:bg-muted/50 transition-colors cursor-pointer">
                <h3 className="text-lg font-semibold text-foreground text-left">
                  AI Usage Reflection
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    openItems.ai ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t border-border">
              <div className="p-6 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <ReflectionPanel
                    title="Prompt Engineering"
                    items={data.aiReflection.prompts}
                  />
                  <ReflectionPanel
                    title="Tool Usage"
                    items={data.aiReflection.toolsUsed}
                  />
                  <ReflectionPanel
                    title="Failures"
                    items={data.aiReflection.whatFailed}
                  />
                  <ReflectionPanel
                    title="Design Influence"
                    items={data.aiReflection.impactOnDesign}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <ReflectionPanel
                    title="What Worked"
                    items={data.aiReflection.whatWorked}
                  />
                  <div className="rounded-xl border border-border bg-muted/30 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                      Limitations Observed
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {data.aiReflection.limitationsObserved}
                    </p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      )}
    </div>
  );
}

function ReflectionPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{title}</p>
      <div className="mt-3 space-y-3">
        {items.map((item, idx) => (
          <div key={`${title}-${idx}`} className="flex gap-3 items-start">
            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
            <p className="text-sm leading-6 text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
