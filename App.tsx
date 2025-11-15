
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Objectives } from './components/Objectives';
import { ProtocolPhases } from './components/ProtocolPhases';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-slate-50 to-emerald-50 text-slate-700">
      <Header />
      <main>
        <Hero />
        <Objectives />
        <ProtocolPhases />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
