
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Objectives } from './components/Objectives';
import { ProtocolPhases } from './components/ProtocolPhases';
import { Facilitator } from './components/Facilitator';
import { Testimonials } from './components/Testimonials';
import { Schedule } from './components/Schedule';
import { FAQ } from './components/FAQ';
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
        <Facilitator />
        <Testimonials />
        <Schedule />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
