import NavigationBar from '@/components/navigation-bar';
import { HeroSection } from '@/components/sections/hero';
import { ProblemSpaceSection } from '@/components/sections/problem-space';
import { ResearchSection } from '@/components/sections/research';
import { SynthesisSection } from '@/components/sections/synthesis';
import { DesignDevelopmentSection } from '@/components/sections/design-development';
import { ReflectionSection } from '@/components/sections/reflection';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen w-full">
        {/* Phase 0: Introduction */}
        <HeroSection />

        {/* Phase 1: Overview */}
        <ProblemSpaceSection />

        {/* <ResearchSection />

        <SynthesisSection />

        <DesignDevelopmentSection />

        <ReflectionSection /> */}

        {/* Footer */}
        <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground">
            <p className="text-sm">
              Design Process Portfolio • Built with intentionality and care
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
