import { portfolioData } from '@/lib/portfolio-data';
import { PhaseSection } from '@/components/phase-section';
import { ConceptEvolution } from '@/components/content-blocks/concept-evolution';
import { Card } from '@/components/ui/card';
import { withBasePath } from '@/lib/basePath';

export function DesignDevelopmentSection() {
  const { design } = portfolioData;

  return (
    <>
      {/* Concept Evolution */}
      <PhaseSection
        id="design-development"
        title="Design Development: Concept Evolution"
        description="How the concept evolved from initial ideas through refinement to the final design"
      >
        <div id="concept-evolution" className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            This section documents the iterative design process. Each stage was informed by user
            feedback and insight discoveries.
          </p>

          <ConceptEvolution stages={design.conceptEvolution} />
        </div>
      </PhaseSection>

      {/* Final Concept */}
      <PhaseSection
        id="final-concept-section"
        title="Final Concept: AI-Guided Narrative Experience"
        description="The final design solution combining spatial navigation, personalization, and storytelling"
      >
        <div id="final-concept" className="space-y-8">
          <Card className="p-8 bg-muted/30 border-l-4 border-primary animate-fade-in-up">
            <p className="text-lg text-foreground leading-relaxed">{design.finalConcept.overview}</p>
          </Card>
          <Card className="p-6 bg-muted/20 border border-border animate-fade-in-up">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Prototype Scope
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This prototype focuses on demonstrating interaction concepts rather than full system functionality. 
              Certain features (such as crowd visualization) are implemented using simulated data to communicate 
              design intent rather than real-time capability. 

              The goal of the prototype is to explore how audio-first and low-interaction design can support 
              cultural understanding in a real-world setting.
            </p>
          </Card>

          {/* Modules */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Core Modules</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {design.finalConcept.modules.map((module, idx) => (
                <Card key={idx} className="p-6 space-y-4 border-t-4 border-primary hover:shadow-md transition-shadow animate-fade-in-up">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {idx + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mt-1">{module.title}</h4>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{module.description}</p>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                      Key Features
                    </p>
                    <ul className="space-y-2">
                      {module.keyFeatures.map((feature, featureIdx) => (
                        <li key={featureIdx} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary flex-shrink-0">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </PhaseSection>

      <PhaseSection
        id="technical-implementation"
        title="Technical Implementation"
        description="The system architecture and high-fidelity prototype of MapleBridge"
      >
        <div className="space-y-12">
          {/* System Architecture */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">System Architecture</h3>
            <p className="text-muted-foreground">
              Our system utilizes a modern full-stack architecture designed for scalability and real-time content delivery.
            </p>
            <Card className="p-4 bg-white dark:bg-zinc-950 flex flex-col items-center justify-center border-dashed border-2">
              {/* Replace the text below with your actual architecture diagram image */}
              <div className="w-full aspect-video bg-muted/20 flex items-center justify-center rounded border">
                 <p className="text-sm text-muted-foreground">[System Architecture Diagram: Java Spring Boot | MySQL | React | Next.js]</p>
              </div>
            </Card>
          </div>

          {/* High-Fi Prototype Link */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">High-Fidelity Prototype</h3>
            <Card className="p-8 border-l-4 border-primary bg-primary/5">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* QR Code Placeholder */}
                <div className="flex-shrink-0 bg-white p-3 rounded-xl border-2 border-primary/20 shadow-sm">
                  <div className="w-32 h-32 bg-muted/20 flex items-center justify-center rounded text-center p-2">
                    <p className="text-[10px] text-muted-foreground font-mono">
                    <img src={withBasePath('/artifacts/appQR.png')} alt="MapleBridge Live App" className="w-32 h-32" />

                    </p>
                  </div>
                  <p className="text-[10px] text-center mt-2 font-bold text-primary uppercase">Scan for Mobile</p>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold">MapleBridge Live App</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      While accessible via desktop, the experience is <b>optimized for mobile-first historical exploration</b>. 
                      The system leverages mobile browser capabilities to deliver a "pocket-companion" experience 
                      that encourages users to look up at the heritage site, not down at the screen.
                    </p>
                  </div>
                  
                  

                  <a 
                    href="https://maple-bridge-prototype.vercel.app" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:ring-4 hover:ring-primary/20 transition-all"
                  >
                    Launch Live App ↗
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PhaseSection>

      {/* 5. Team Contributions */}
      <PhaseSection
        id="individual-contributions"
        title="Individual Contributions"
        description="Defining team roles and specific technical responsibilities"
      >
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-left border-collapse">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 font-semibold text-sm">Member</th>
                <th className="p-4 font-semibold text-sm">Key Deliverables</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-4 font-medium">Natasha Wilfrid Atmadja</td>
                <td className="p-4 text-sm text-muted-foreground"><b>Technical Implementation:</b> Developed the React/Next.js prototype and interactive map. Managed technical deployment and integrated all team assets into the final Process Portfolio.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Cherie Toh</td>
                <td className="p-4 text-sm text-muted-foreground"><b>Research & Content Lead:</b> Conducted the academic literature review and user interviews. Produced the narrative scripts and curated the primary audio/visual library for thesite.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Darren Tjendera</td>
                <td className="p-4 text-sm text-muted-foreground"><b>UI Design & Testing:</b> Created the high-fidelity UI mockupsand designed the project poster. Led the usability testing sessions and managed the final video production.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Farrell Widjanarko</td>
                <td className="p-4 text-sm text-muted-foreground"><b>User Research & Media:</b> Developed the User Journey Mapand documented site observations. Managed physical logistics for the exhibition and acted as the lead for th video demonstration.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PhaseSection>
    </>
  );
}

