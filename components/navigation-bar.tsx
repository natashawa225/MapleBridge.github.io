'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavPhase {
  id: string;
  name: string;
  anchor: string;
  subsections?: {
    name: string;
    anchor: string;
  }[];
}

const phases: NavPhase[] = [
  {
    id: 'overview',
    name: 'Overview',
    anchor: '#overview',
    subsections: [
      { name: 'Problem Space', anchor: '#problem-space' },
      { name: 'Project Intro', anchor: '#hero' },
    ],
  },
  {
    id: 'research',
    name: 'Research',
    anchor: '#research',
    subsections: [
      { name: 'Findings', anchor: '#research-findings' },
      { name: 'Personas', anchor: '#personas' },
      { name: 'Journey Map', anchor: '#journey-map' },
    ],
  },
  {
    id: 'synthesis',
    name: 'Synthesis',
    anchor: '#synthesis',
    subsections: [
      { name: 'Key Insights', anchor: '#insights' },
      { name: 'Design Mapping', anchor: '#insight-mapping' },
      { name: 'Design Decisions', anchor: '#design-decisions' },
    ],
  },
  {
    id: 'design',
    name: 'Development',
    anchor: '#design-development',
    subsections: [
      { name: 'Concept Evolution', anchor: '#concept-evolution' },
      { name: 'Final Concept', anchor: '#final-concept' },
    ],
  },
  {
    id: 'reflection',
    name: 'Reflection',
    anchor: '#reflection',
    subsections: [
      { name: 'Validation', anchor: '#validation' },
      { name: 'Technical Details', anchor: '#technical-reflection' },
      { name: 'Learning & Future', anchor: '#final-reflection' },
      { name: 'References', anchor: '#references' },
    ],
  },
];

export default function NavigationBar() {
  const [activePhase, setActivePhase] = useState<string>('overview');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Simple detection: check which section is most visible
      const sections = phases.map(p => p.anchor.substring(1)); // Remove #
      let current = 'overview';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < 200) {
            current = phases.find(p => p.anchor === `#${section}`)?.id || 'overview';
          }
        }
      }

      setActivePhase(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchor: string) => {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Title */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-foreground">Design Process</h1>
            </div>
            <div className="sm:hidden">
              <h1 className="text-sm font-semibold text-foreground">Portfolio</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1 ml-8">
            <div className="flex gap-1">
              {phases.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => handleNavClick(phase.anchor)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activePhase === phase.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {phase.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="space-y-4 mt-4">
                  {phases.map((phase) => (
                    <div key={phase.id} className="space-y-2">
                      <button
                        onClick={() => handleNavClick(phase.anchor)}
                        className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors ${
                          activePhase === phase.id
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        {phase.name}
                      </button>
                      {phase.subsections && activePhase === phase.id && (
                        <div className="ml-4 space-y-1 border-l border-border">
                          {phase.subsections.map((sub) => (
                            <button
                              key={sub.anchor}
                              onClick={() => handleNavClick(sub.anchor)}
                              className="block w-full text-left px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {sub.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
