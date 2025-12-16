import React from 'react';
import { Play, Lock } from 'lucide-react';
import { VIDEOS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="py-24 bg-theme-bg relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-theme-bg to-[#0d0518] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION 1: THE SECRET --- */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          
          {/* Left: Tilted Phone Video */}
          <div className="relative flex justify-center lg:justify-end lg:pr-10">
             <div className="relative w-[240px] aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-6 hover:rotate-0 transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Event" className="w-full h-full object-cover opacity-80" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center">
                     <Play size={20} className="fill-white text-white ml-1" />
                   </div>
                </div>
             </div>
          </div>

          {/* Right: Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-start gap-5">
              <div className="bg-theme-neon p-4 rounded-full text-white shadow-[0_0_30px_rgba(189,66,242,0.6)] mt-2">
                <Lock size={36} />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-display font-medium text-white leading-[1.1]">
                  Esse é o<br/>
                  <span className="font-bold">segredo</span>
                </h2>
                <p className="text-gray-300 mt-4 text-xl font-light leading-relaxed">
                  para alavancar seus<br/>
                  <span className="text-white font-medium">resultados</span>
                </p>
              </div>
            </div>
          </div>

        </div>


        {/* --- SECTION 2: DO YOU KNOW US? --- */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-24 relative">
          
          {/* Left: Group Photo (Grayscale & Masked) */}
          <div className="lg:col-span-5 relative h-[300px] lg:h-[500px] w-full hidden lg:block">
            <div className="absolute inset-0 -ml-20">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Team" 
                 className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-40 mask-gradient-r"
                 style={{maskImage: 'linear-gradient(to right, black 0%, transparent 100%)'}} 
               />
            </div>
          </div>

          {/* Center/Right: Video Card & Text */}
          <div className="lg:col-span-7 flex flex-col lg:flex-row items-center gap-8 relative z-10">
            
            <div className="lg:w-1/3 text-center lg:text-right">
               <h2 className="text-3xl font-display font-medium text-white leading-tight">
                 Você já nos<br/>conhece?
               </h2>
            </div>

            <div className="lg:w-2/3 w-full">
               <div className="relative bg-[#fbbf24] rounded-2xl overflow-hidden aspect-video shadow-[0_20px_60px_rgba(251,191,36,0.2)] group cursor-pointer max-w-lg mx-auto">
                 {/* Image Pattern Background */}
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                 
                 {/* Man Image */}
                 <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Speaker" 
                      className="w-full h-full object-cover mix-blend-multiply opacity-90" 
                 />
                 
                 {/* Play Button */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-[4px] border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                       <Play size={40} className="text-white fill-white ml-2" />
                    </div>
                 </div>

                 {/* Logo Overlay */}
                 <div className="absolute bottom-4 left-0 w-full text-center">
                   <span className="text-white font-bold font-display text-xl tracking-wider drop-shadow-md">
                     Confidesign<span className="text-xs align-top">®</span>
                   </span>
                 </div>
               </div>
            </div>

          </div>
        </div>


        {/* --- SECTION 3: VIDEO GRID --- */}
        <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-5xl mx-auto px-2 lg:px-0">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="aspect-[9/16] bg-white rounded-2xl flex items-center justify-center relative shadow-lg group cursor-pointer overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
               <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                  <Play size={40} className="text-theme-purple fill-transparent group-hover:fill-theme-purple transition-colors border-2 border-theme-purple rounded-full p-3 w-16 h-16" />
               </div>
            </div>
          ))}
        </div>

        {/* Logo Bottom */}
        <div className="flex justify-center mt-20">
          <div className="text-3xl font-display font-bold text-white tracking-tight">
             Grupo <span className="relative inline-block">
               Confi
               <span className="absolute -top-1 -right-3 w-2 h-2 bg-cyan-400 rounded-full"></span>
             </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;