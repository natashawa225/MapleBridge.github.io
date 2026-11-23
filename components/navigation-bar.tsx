'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { withBasePath } from '@/lib/basePath';

interface NavSection {
  id: string;
  number: string;
  title: string;
  chinese: string;
  anchor: string;
}

const navSections: NavSection[] = [
  { id: 'overview', number: '01', title: 'Motivation', chinese: '背景', anchor: '#overview' },
  { id: 'research', number: '02', title: 'Research', chinese: '研究', anchor: '#research' },
  { id: 'personas', number: '03', title: 'Personas', chinese: '画像', anchor: '#personas' },
  { id: 'journey', number: '04', title: 'Journey', chinese: '旅程', anchor: '#journey' },
  { id: 'synthesis', number: '05', title: 'Synthesis', chinese: '综合', anchor: '#synthesis' },
  { id: 'traceability', number: '06', title: 'Logic', chinese: '逻辑', anchor: '#traceability' },
  { id: 'ideation', number: '07', title: 'Ideation', chinese: '构思', anchor: '#ideation' },
  { id: 'prototype', number: '08', title: 'Prototype', chinese: '原型', anchor: '#prototype' },
  { id: 'evaluation', number: '09', title: 'Evaluation', chinese: '评估', anchor: '#evaluation' },
  { id: 'reflection', number: '10', title: 'Reflection', chinese: '反思', anchor: '#reflection' },
];

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // Detect active section based on scroll position
      const sectionElements = navSections.map((s) => ({
        id: s.id,
        el: document.querySelector(s.anchor),
      }));

      const scrollPos = window.scrollY + 180;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-border/40">
        <div
          className="h-full bg-secondary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Project Brand */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            >
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-border bg-card flex items-center justify-center shadow-xs group-hover:border-secondary transition-colors">
                <img
                  src={withBasePath('/sitelogo.png')}
                  alt="Maple Bridge"
                  className="w-6 h-6 object-contain"
                />
              </div>
              
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 overflow-x-auto py-1">
              {navSections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleNavClick(section.anchor)}
                    className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-xs font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
                    }`}
                  >
                    <span className={`text-[10px] ${isActive ? 'text-primary-foreground/75' : 'text-muted-foreground/60'}`}>
                      {section.number}
                    </span>
                    <span>{section.title}</span>
                  </button>
                );
              })}
            </nav>

            {/* Compact CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="https://maple-bridge-prototype.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all shadow-xs"
              >
                <span>Live Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Drawer Trigger */}
              <div className="xl:hidden">
                <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 text-foreground hover:bg-muted"
                      aria-label="Open Navigation"
                    >
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80 bg-background p-6 border-l border-border">
                    <SheetTitle className="text-left font-serif text-xl font-bold flex items-center gap-2 pb-4 border-b border-border">
                      <Compass className="w-5 h-5 text-secondary" />
                      <span>Table of Contents</span>
                    </SheetTitle>

                    <nav className="space-y-1.5 mt-6">
                      {navSections.map((section) => {
                        const isActive = activeSection === section.id;
                        return (
                          <button
                            key={section.id}
                            onClick={() => handleNavClick(section.anchor)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                              isActive
                                ? 'bg-primary text-primary-foreground font-semibold shadow-xs'
                                : 'text-foreground hover:bg-muted'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`font-mono text-xs ${isActive ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                                {section.number}
                              </span>
                              <span>{section.title}</span>
                            </div>
                            <span className={`text-xs font-serif ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                              {section.chinese}
                            </span>
                          </button>
                        );
                      })}
                    </nav>

                    <div className="mt-8 pt-6 border-t border-border space-y-3">
                      <p className="text-xs text-muted-foreground font-sans">
                        Interactive application companion:
                      </p>
                      <a
                        href="https://maple-bridge-prototype.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all shadow-xs"
                      >
                        <span>Open Live Prototype</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
