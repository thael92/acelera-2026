import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-theme-bg/90 backdrop-blur-md shadow-lg border-b border-white/5 py-3' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer min-w-[150px]">
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              Confidesign<span className="text-[0.6em] align-top text-gray-400">®</span>
            </span>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-theme-neon font-medium transition-colors text-base"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Right Aligned */}
          <div className="hidden md:flex min-w-[150px] justify-end">
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Sign up <ArrowRight size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-theme-neon focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden fixed inset-0 z-40 bg-theme-bg/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="h-full flex flex-col justify-center items-center space-y-8 p-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-gray-200 hover:text-theme-neon text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
           <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm w-full flex justify-center items-center gap-2">
              Sign up <ArrowRight size={16} />
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;