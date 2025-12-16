import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Strategy from './components/Features';
import SocialProof from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-theme-bg text-white font-sans selection:bg-theme-pink selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Strategy />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}

export default App;