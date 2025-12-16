import React from 'react';
import { Play } from 'lucide-react';
import { STRATEGY_STEPS, SERVICES } from '../constants';

const Strategy: React.FC = () => {
  return (
    <section id="strategy" className="py-24 bg-[#100820] relative overflow-hidden">
      
      {/* Background Shape (Keeping existing ambience) */}
      <div className="absolute top-0 right-0 w-full h-[120%] bg-[#1a0f2e] rounded-tl-[100px] transform skew-y-3 -z-10 translate-y-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION CONTAINER WITH DARK PURPLE BG --- */}
        {/* The image shows a contained section, but we are using full width. We will emulate the inner look. */}
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32 relative">

          {/* --- LEFT COLUMN --- */}
          <div>
             {/* HEADER TITLE */}
             <div className="mb-16">
               <h2 className="text-4xl lg:text-5xl font-display font-medium text-white mb-2 leading-tight">
                 Nossa
               </h2>
               <div className="relative inline-block mb-2">
                 {/* Purple Block Background */}
                 <div className="absolute left-0 bottom-2 w-full h-4/5 bg-theme-purple -skew-x-6 transform origin-bottom-left"></div>
                 <span className="relative z-10 text-4xl lg:text-5xl font-display font-bold text-white uppercase px-1">
                   ESTRATÉGIA
                 </span>
               </div>
               <p className="text-2xl text-white font-medium mt-1">Funciona assim:</p>
             </div>

             {/* STEPS LIST */}
             <div className="space-y-12">
                {STRATEGY_STEPS.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    {/* Number Circle */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full border border-theme-accent/50 flex items-center justify-center text-white font-display text-xl bg-[#150a25]">
                        {step.number}
                      </div>
                    </div>
                    {/* Text */}
                    <div className="pt-1">
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {step.title}
                      </h3>
                      {/* Description in PURPLE/PINK as per image */}
                      <p className="text-[#bd42f2] text-sm leading-relaxed max-w-sm font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* --- RIGHT COLUMN: WHITE CARD --- */}
          <div className="relative flex justify-center lg:justify-end pt-10">
             <div className="bg-white text-theme-bg w-full max-w-[340px] aspect-[9/16] shadow-[0_0_60px_rgba(255,255,255,0.1)] relative flex flex-col items-center justify-between py-12 px-6">
               
               {/* Card Content Top */}
               <div className="text-center z-10 mt-4">
                   <h3 className="font-display font-medium text-xl text-theme-purple uppercase leading-snug tracking-wide">
                     O QUE É<br/>CAMPANHA DE<br/>LANÇAMENTO?
                   </h3>
               </div>
               
               {/* Play Button Center */}
               <div className="flex-1 flex items-center justify-center">
                  <button className="w-24 h-24 rounded-full border-[6px] border-[#bd42f2] flex items-center justify-center hover:scale-110 transition-transform duration-300 bg-white shadow-lg">
                     <Play size={40} className="text-[#bd42f2] fill-[#bd42f2] ml-2" />
                  </button>
               </div>

               {/* Bottom Content: ACELERA 2026 */}
               <div className="text-center z-10 mb-4 relative">
                  {/* Glow effect behind text */}
                  <div className="absolute inset-0 bg-theme-neon blur-xl opacity-20"></div>
                  
                  <span className="text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-200 block mb-0 leading-none drop-shadow-[0_0_10px_rgba(189,66,242,0.8)]" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    ACELERA
                  </span>
                  <span className="text-lg tracking-[0.2em] text-[#bd42f2] font-light italic">2026</span>
               </div>

             </div>
          </div>

        </div>

        {/* --- SECONDARY SERVICES GRID (ECOSYSTEM) --- */}
        <div id="services" className="mb-32 pt-16 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Ecossistema <span className="text-theme-neon">360º</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Além da campanha principal, oferecemos uma estrutura completa de produção e suporte para potencializar sua marca em todas as frentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-[#180c2e]/50 border border-white/5 p-6 rounded-2xl hover:bg-[#180c2e] hover:border-theme-purple/50 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-theme-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-theme-neon" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- BOTTOM CTA (3 MONTHS) --- */}
        <div className="text-center relative">
          <div className="relative bg-[#100820] inline-block px-8 py-4">
              <p className="text-sm tracking-[0.6em] text-white uppercase mb-6 font-semibold">A P E N A S</p>
              <h2 className="text-3xl lg:text-5xl font-display font-medium text-white mb-8 leading-tight">
                3 MESES DE CAMPANHA<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-neon to-theme-purple font-bold">
                  PARA OTIMIZAR O SEU<br/>ANO INTEIRO.
                </span>
              </h2>
              <button className="bg-gradient-to-r from-theme-accent to-theme-neon text-white px-14 py-4 rounded-full font-bold uppercase text-lg tracking-wide shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] hover:-translate-y-1 transition-all">
                VER PROPOSTA
              </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Strategy;