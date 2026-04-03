import { portfolioData } from '@/lib/portfolio-data';

export function HeroSection() {
  const { project } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] px-6 lg:px-12 flex items-center justify-start overflow-hidden bg-[#F9F8F4]" // Warm paper-like background
    >
      {/* 1. Background Texture & Art Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Paper Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/p6-dark.png')]" />
        
        {/* Mist/Ink Wash Effects (Replacing generic blobs) */}
        <div 
          className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-20 blur-[100px] rounded-full"
          style={{ backgroundColor: 'var(--jade)' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#EAE7DE] to-transparent opacity-40" 
        />

        {/* Decorative Floating "Seal" element - subtle and off-center */}
        <div className="absolute top-1/4 right-[10%] opacity-10 select-none">
          <span className="text-[20rem] font-serif leading-none">墨</span>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="relative max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        <div className="lg:col-span-8 space-y-10">
          {/* Top Labeling */}
          <div className="flex items-center gap-4 group">
            <div className="h-[1px] w-12 bg-stone-400 origin-left transition-all group-hover:w-20" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-stone-500 font-medium">
              Suzhou · Jiangnan · Cultural Tech
            </p>
          </div>

          {/* Main Title - Using Serif for 'Ink' feel */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-[1.1] tracking-tight">
              {project.title}
              <span className="block text-2xl md:text-3xl font-sans font-light text-stone-500 mt-4 tracking-normal">
                {project.subtitle}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl font-light">
              {project.description}
            </p>
          </div>

          {/* CTA & Brand Mark */}
          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-12 h-12">
                {/* Traditional Red Seal Shape */}
                <div 
                  className="absolute inset-0 rotate-3 rounded-sm opacity-90 shadow-sm"
                  style={{ backgroundColor: 'var(--seal)' }} 
                />
                <span className="relative text-white text-xl font-serif pt-0.5">印</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400 leading-tight">
                Design <br /> Philosophy
              </div>
            </div>

            <button className="group flex items-center gap-3 text-sm font-medium text-stone-800">
              <span className="border-b border-stone-800 pb-1 group-hover:pr-4 transition-all">Explore Process</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.75 4.5L14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 3. Vertical Metadata (The 'Sidebar' look) */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-end justify-end pb-2 space-y-4 text-right border-r border-stone-200 pr-6">
           <div className="space-y-1">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">Timeline</p>
              <p className="text-sm font-serif italic text-stone-600">Spring 2026</p>
           </div>
           <div className="space-y-1">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">Role</p>
              <p className="text-sm font-serif italic text-stone-600">Experience Design</p>
           </div>
        </div>
      </div>

      {/* 4. Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
        <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 rotate-90 mb-8 origin-left">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent" />
      </div>
    </section>
  );
}