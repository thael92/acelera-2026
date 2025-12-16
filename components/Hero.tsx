import React from 'react';
import { Play, CheckCircle2, Flame, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-theme-bg overflow-hidden min-h-screen">
      
      {/* --- Global Background Ambience --- */}
      <div className="absolute top-0 right-0 w-[80%] h-[1200px] bg-gradient-radial from-theme-purple/20 to-transparent opacity-60 blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4 z-0"></div>
      
      {/* --- GIANT BACKGROUND WATERMARK "2026" --- */}
      {/* Centered in the middle of the page */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] lg:text-[35vw] font-black text-white/5 select-none pointer-events-none font-display italic tracking-tighter leading-none z-0 whitespace-nowrap">
        2026
      </div>

      {/* --- PART 1: MAIN HERO (Title, Couple) --- */}
      <div className="relative pt-24 lg:pt-32 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-8 items-start relative">
          
          {/* Left Column: Text & Title */}
          <div className="relative z-20 pt-8">
            
            {/* Top Tagline */}
            <div className="mb-6 relative">
               <div className="border border-theme-purple/30 bg-theme-bg/50 backdrop-blur-sm rounded-lg p-3 inline-flex items-center gap-4 max-w-md">
                 <div className="flex-shrink-0">
                   <div className="w-10 h-10 rounded-full border border-theme-neon flex items-center justify-center">
                     <Users size={18} className="text-theme-neon" />
                   </div>
                 </div>
                 <div>
                   <h2 className="text-2xl font-display font-bold text-white leading-none mb-1">Olá, médico</h2>
                   <p className="text-sm text-gray-300 font-light leading-tight">
                     Você faz parte do público seleto a<br/>
                     quem esta campanha vai chegar.
                   </p>
                 </div>
                 {/* Decorative dots */}
                 <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-theme-neon rounded-full -ml-2"></div>
                 <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-white rounded-full"></div>
               </div>
            </div>

            {/* Giant Title: ACELERA */}
            <div className="relative mb-12 lg:mb-24">
              <h1 className="text-6xl sm:text-7xl lg:text-[8rem] font-display font-black text-white italic tracking-tighter leading-[0.85] text-glow filter drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] transform -skew-x-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-100 to-gray-400">
                  ACELERA
                </span>
              </h1>
              <div className="flex items-center gap-4 mt-2 lg:ml-2">
                 <span className="text-4xl lg:text-5xl font-light text-white tracking-[0.2em] font-sans">2026</span>
              </div>
            </div>

          </div>

          {/* Right Column: Couple Image */}
          <div className="relative h-[400px] lg:h-[700px] lg:absolute lg:top-0 lg:right-0 lg:w-[55%] lg:-mr-10 z-10 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Medical Professionals" 
              className="w-full h-full object-cover lg:object-contain object-top mask-gradient-b lg:mask-none"
              style={{
                filter: 'brightness(1.1) contrast(1.1)',
              }}
            />
            {/* Purple Backlight Effect */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-theme-purple rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-pulse"></div>
          </div>

        </div>

      </div>


      {/* --- PART 2: TRANSITION & VALUE PROP (SECTION 2) --- */}
      <div className="relative py-10 lg:py-20 pb-32">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Col: "É para você?" Phone (Moved here) */}
            <div className="flex justify-center lg:justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-[280px]">
                   {/* Floating Phone Mockup */}
                   <div className="relative bg-white rounded-[2.5rem] p-2 shadow-[0_0_50px_rgba(189,66,242,0.5)] transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                     <div className="bg-gray-50 rounded-[2rem] overflow-hidden aspect-[9/16] relative flex flex-col items-center justify-center border border-gray-100">
                       <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-4">
                          <h3 className="text-theme-purple font-display font-bold text-3xl mb-3 leading-tight">É para<br/>você?</h3>
                          <div className="w-12 h-1 bg-theme-neon rounded-full mb-6"></div>
                          <div className="w-14 h-14 rounded-full border-[3px] border-theme-purple flex items-center justify-center animate-bounce">
                            <Play size={20} className="text-theme-purple fill-theme-purple ml-1" />
                          </div>
                       </div>
                     </div>
                   </div>
                   {/* Neon Text below phone */}
                   <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center w-full">
                      <span className="text-xl font-display font-black italic text-white text-glow">ACELERA</span>
                      <span className="block text-[10px] tracking-widest text-gray-400">2026</span>
                   </div>
                </div>
            </div>

            {/* Right Col: Copy & CTA */}
            <div className="text-center lg:text-left order-1 lg:order-2">
               <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                 <span className="italic text-lg text-gray-300">Estratégia de alta performance para gerar leads qualificados</span>
                 <Flame className="text-theme-neon fill-theme-neon drop-shadow-[0_0_15px_rgba(217,70,239,0.8)]" />
               </div>

               <h3 className="text-2xl font-display font-light italic mb-2 text-gray-400">Em 2026...</h3>
               <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight mb-8">
                 Gaste menos tempo<br/>
                 convencendo pacientes e<br/>
                 <span className="text-theme-neon drop-shadow-lg">mais tempo agendando<br/>consultas.</span>
               </h2>

               <button className="bg-gradient-to-r from-theme-purple to-theme-neon text-white px-10 py-3.5 rounded-full font-bold uppercase text-sm tracking-wide shadow-[0_0_30px_rgba(189,66,242,0.5)] hover:scale-105 transition-transform mb-10">
                 VER ESTRATÉGIA
               </button>

               <div className="flex justify-center lg:justify-start">
                  <ul className="space-y-4 text-left">
                    {[
                      'Assessoria Integral',
                      'Criação de Conteúdo Exclusivo',
                      'Gestão de Tráfego'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="bg-[#4ade80] rounded-full p-0.5 shadow-[0_0_8px_rgba(74,222,128,0.6)]">
                          <CheckCircle2 size={14} className="text-black" strokeWidth={3} />
                        </div>
                        <span className="text-base font-medium text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;