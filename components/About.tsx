import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-3">Sobre Nós</h2>
            <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Criamos o futuro do seu negócio digital.
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Somos um time de especialistas apaixonados por transformar desafios complexos em soluções digitais simples e eficazes. Nossa metodologia foca em resultados mensuráveis e crescimento sustentável.
            </p>

            <div className="space-y-4 mb-10">
              {['Equipe multidisciplinar e experiente', 'Suporte dedicado 24 horas', 'Tecnologia de ponta garantida'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-500" size={24} />
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-slate-800">
              {STATS.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}<span className="text-brand-500">{stat.suffix}</span></div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
             <div className="absolute inset-0 bg-brand-500 blur-[100px] opacity-20 rounded-full"></div>
             <div className="relative rounded-3xl overflow-hidden border-8 border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                <img src="https://picsum.photos/600/800?random=5" alt="Team meeting" className="w-full h-auto object-cover" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;