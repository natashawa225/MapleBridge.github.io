import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { ArtifactGallery } from '@/components/content-blocks/artifact-gallery';
import { Card } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

export function ProblemSpaceSection() {
  const { overview } = portfolioData;

  // Analysis Data strictly from the Research Brief
  const gapAnalysis = {
    academic: [
      {
        name: "Peng et al. (2023) — Heritage Gamification",
        well: ["Integrated online/offline contacts", "Strong narration thread", "Learning-focused gameplay"],
        missed: ["Song Dynasty specific context", "High UI complexity", "Lacks real-time crowd data"]
      },
      {
        name: "Li et al. (2025) — Canal Mystery Study",
        well: ["Embodied cognition model", "Grand Canal specific narrative", "Award-winning escape-room logic"],
        missed: ["Exhibition-locked (not in situ)", "Limited to physical props", "No AI-driven personalization"]
      },
      {
        name: "Calvaresi et al. (2025) — Tourism Chatbots",
        well: ["24/7 support framework", "Personalized recommendations", "Mature research momentum"],
        missed: ["Screen-heavy interaction", "Interrupts environmental immersion", "Generic hospitality focus"]
      },
      {
        name: "Zhang et al. (2025) — Crowd Monitoring",
        well: ["Spatiotemporal risk frameworks", "High-coverage video tracking", "Emergency response focus"],
        missed: ["Purely administrative intent", "No cultural interpretation", "Reactive spatial mapping"]
      }
    ],
    commercial: [
      {
        name: "Official Heritage Apps",
        well: ["Authoritative government data", "Multi-language signage support", "Official ticketing"],
        missed: ["Static 'Digital Brochure' feel", "Poor interaction design", "Low emotional resonance"]
      },
      {
        name: "Baidu / Google Maps",
        well: ["Precise GPS navigation", "AR directional cues", "Historical landmark markers"],
        missed: ["Cold/Functional interface", "Distracting visual density", "Lacks poetic/literary depth"]
      },
      {
        name: "Commercial Audio Guides",
        well: ["Accurate historical facts", "Simple hardware interface", "Professional voiceovers"],
        missed: ["Linear 'Push' delivery", "Isolated social experience", "No gamified narrative elements"]
      },
      {
        name: "C2SMART / USDOT Systems",
        well: ["Cost-effective CCTV use", "Deep-learning pedestrian data", "Continuous data collection"],
        missed: ["Industrial infrastructure", "Not visitor-facing", "Privacy/Trust friction points"]
      }
    ]
  };

  return (
    <PhaseSection
      id="overview"
      title="Motivation & Research"
      description="Understanding the challenge and the opportunity"
    >
      <div className="space-y-12">
        {/* The Challenge: Updated with site-specific context from your brief */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">The Challenge</h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Maple Bridge (Fengqiao), originally named 'Bridge Closure' due to its strategic canal position, 
            remains a cultural anchor for Suzhou. However, the visitor experience often fails to move 
            beyond the visual surface of its crescent-shaped stone arch.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Our research identifies a mismatch between the rich poetic legacy of the site (Zhang Ji, 756 AD) 
            and the modern accessibility of its interpretation. EchoBridge seeks to bridge this gap 
            through a context-aware, audio-first companion that supports immersion without screen distraction.
          </p>
        </div>


        {/* The Gap Analysis Grid */}
        <div className="space-y-8">
          <div className="border-b pb-4">
            <h3 className="text-2xl font-semibold text-foreground">The Gap</h3>
            <p className="text-muted-foreground mt-2">
              Evaluating current academic frameworks and commercial solutions to identify unmet needs in heritage tourism.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Academic Literature</h4>
              <div className="space-y-4">
                {gapAnalysis.academic.map((item, idx) => (
                  <GapCard key={idx} item={item} />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Market Solutions</h4>
              <div className="space-y-4">
                {gapAnalysis.commercial.map((item, idx) => (
                  <GapCard key={idx} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

               {/* Artifacts */}
        {overview.problemSpace.artifacts.length > 0 && (
          <div className="space-y-4">
            <ArtifactGallery artifacts={overview.problemSpace.artifacts} layout="grid" columns={1} />
          </div>
        )}
      </div>
    </PhaseSection>
  );
}

function GapCard({ item }) {
  return (
    <Card className="p-5 bg-card hover:shadow-md transition-shadow">
      <h5 className="font-bold text-foreground mb-3">{item.name}</h5>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase text-green-600 flex items-center gap-1">
            <CheckCircle2 size={12} /> 3 Strengths
          </p>
          <ul className="text-xs text-muted-foreground space-y-1">
            {item.well.map((point, i) => <li key={i}>• {point}</li>)}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase text-destructive flex items-center gap-1">
            <XCircle size={12} /> 3 Opportunities
          </p>
          <ul className="text-xs text-muted-foreground space-y-1">
            {item.missed.map((point, i) => <li key={i}>• {point}</li>)}
          </ul>
        </div>
      </div>
    </Card>
  );
}