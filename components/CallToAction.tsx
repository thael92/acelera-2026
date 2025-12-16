import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-brand-600 to-indigo-600 rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
        {/* Abstract Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-900 opacity-20 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-brand-100 text-lg lg:text-xl max-w-2xl mx-auto mb-10">
            Junte-se a mais de 500 empresas que já escalaram seus resultados com nossa metodologia exclusiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-600 hover:bg-brand-50 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg flex items-center justify-center gap-2">
              Começar Agora
              <ArrowRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center">
              Agendar Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;