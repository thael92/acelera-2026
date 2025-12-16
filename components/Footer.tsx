import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-theme-bg pb-24 pt-10 relative z-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-3">
          Encontre o seu paciente
        </h2>
        
        <p className="text-gray-400 text-xl mb-12 font-light tracking-wide">
          Assim como nós encontramos você ;)
        </p>

        <button className="bg-gradient-to-r from-[#a855f7] to-[#d946ef] text-white px-14 py-4 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_rgba(168,85,247,0.7)] hover:-translate-y-1 transition-all uppercase tracking-widest">
          FALE CONOSCO
        </button>
        
      </div>
    </footer>
  );
};

export default Footer;