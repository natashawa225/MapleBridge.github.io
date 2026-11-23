'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  label: string;
  anchor: string;
}

const navItems: NavItem[] = [
  { label: 'Project', anchor: '#overview' },
  { label: 'Design Process', anchor: '#research' },
  { label: 'Reflection', anchor: '#reflection' },
];

export default function NavigationBar() {
  const [activeItem, setActiveItem] = useState<string>('');
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

      // Determine active nav item based on scroll depth
      const scrollPos = window.scrollY + 200;

      const reflectionEl = document.getElementById('reflection') || document.getElementById('evaluation');
      const processEl = document.getElementById('research');
      const projectEl = document.getElementById('overview');

      if (reflectionEl && scrollPos >= reflectionEl.offsetTop) {
        setActiveItem('Reflection');
      } else if (processEl && scrollPos >= processEl.offsetTop) {
        setActiveItem('Design Process');
      } else if (projectEl && scrollPos >= projectEl.offsetTop) {
        setActiveItem('Project');
      } else {
        setActiveItem('');
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
      {/* Delicate top reading progress indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-border/30">
        <div
          className="h-full bg-secondary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/90 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            
            {/* Left: Typographic Wordmark */}
            <a
              href="#hero"
              className="group flex items-baseline gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded py-1"
            >
              <span className="font-serif text-lg sm:text-xl font-normal text-foreground tracking-tight group-hover:text-primary transition-colors">
                Maple Bridge<span className="text-secondary">.</span>
              </span>
              <span className="font-serif text-xs text-muted-foreground font-light tracking-widest hidden sm:inline">
                枫桥
              </span>
            </a>

            {/* Right: Minimal Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs sm:text-sm font-sans tracking-wide">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.anchor)}
                    className={`relative py-1.5 transition-colors hover:text-foreground cursor-pointer ${
                      isActive
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-secondary rounded-full" />
                    )}
                  </button>
                );
              })}

              {/* Understated "View Prototype ↗" Link */}
              <a
                href="https://maple-bridge-prototype.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:text-secondary font-medium transition-colors border-b border-primary/25 hover:border-secondary pb-0.5 ml-2"
              >
                <span>View Prototype</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </nav>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Clean Mobile Dropdown Overlay */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/60 bg-background/98 px-6 py-6 space-y-4 shadow-sm animate-editorial-fade-up">
            <nav className="flex flex-col space-y-3 text-sm">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.anchor)}
                    className={`text-left py-1.5 transition-colors ${
                      isActive
                        ? 'text-primary font-medium pl-2 border-l-2 border-secondary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-border/60">
              <a
                href="https://maple-bridge-prototype.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:text-secondary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span>View Prototype</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
