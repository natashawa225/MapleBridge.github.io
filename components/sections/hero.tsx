import { portfolioData } from '@/lib/portfolio-data';

export function HeroSection() {
  const { project } = portfolioData;
  // Defining the team members based on your input
  const members = ["Cherie Toh", "Darren Tjendera", "Farrell Widjanarko", "Natasha Wilfrid Atmadja"];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] px-6 lg:px-12 flex items-center justify-start overflow-hidden bg-[#F9F8F4]"
    >
      {/* 1. Background Texture & Art Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/p6-dark.png')]" />
        <div 
          className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-20 blur-[100px] rounded-full"
          style={{ backgroundColor: 'var(--jade)' }}
        />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#EAE7DE] to-transparent opacity-40" />
        <div className="absolute top-1/4 right-[10%] opacity-10 select-none">
          <span className="text-[20rem] font-serif leading-none">景</span>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="relative max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        <div className="lg:col-span-8 space-y-10">
          <div className="flex items-center gap-4 group">
            <div className="h-[1px] w-12 bg-stone-400 origin-left transition-all group-hover:w-20" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-stone-500 font-medium">
              Suzhou · Jiangnan · Maple Bridge
            </p>
          </div>

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

          {/* Mobile-only Members View (Visible only on small screens) */}
          <div className="lg:hidden pt-6 border-t border-stone-200/60">
             <p className="text-[9px] text-stone-400 uppercase tracking-widest mb-2">Collaborators</p>
             <div className="flex flex-wrap gap-x-4 gap-y-1">
                {members.map((name) => (
                  <span key={name} className="text-sm font-serif italic text-stone-600">
                    {name}
                  </span>
                ))}
             </div>
          </div>

          <div className="flex items-center gap-8 pt-4">

            <button className="group flex items-center gap-3 text-sm font-medium text-stone-800">
              <span className="border-b border-stone-800 pb-1 group-hover:pr-4 transition-all">Explore Process</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.75 4.5L14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 3. Vertical Metadata Sidebar (Desktop) */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-end justify-end pb-2 space-y-8 text-right border-r border-stone-200 pr-6">
           <div className="space-y-3">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">Collaborators</p>
              <div className="flex flex-col gap-2">
                {members.map((name) => (
                  <p key={name} className="text-sm font-serif italic text-stone-600 leading-none">
                    {name}
                  </p>
                ))}
              </div>
           </div>

           {/* <div className="space-y-1">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">Timeline</p>
              <p className="text-sm font-serif italic text-stone-600">Spring 2026</p>
           </div>
           
           <div className="space-y-1">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">Role</p>
              <p className="text-sm font-serif italic text-stone-600">Experience Design</p>
           </div> */}
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