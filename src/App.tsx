import { useState, useEffect } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Coverage from './sections/Coverage';
import Fleet from './sections/Fleet';
import Testimonials from './sections/Testimonials';
import Process from './sections/Process';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import MobileStickyCTA from './sections/MobileStickyCTA';
import './App.css';

function App() {
  // 3-phase splash: 'entering' → 'exiting' → 'done'
  const [splashPhase, setSplashPhase] = useState<'entering' | 'exiting' | 'done'>('entering');

  useEffect(() => {
    // Phase 1: Logo fades in (1.5s animation) + hold for 0.5s
    const enterTimer = setTimeout(() => {
      setSplashPhase('exiting');
    }, 2000);

    // Phase 2: Logo fades out (1.2s animation), then remove splash
    const exitTimer = setTimeout(() => {
      setSplashPhase('done');
    }, 3400);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div className="relative bg-charcoal min-h-screen overflow-x-hidden">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Splash Screen */}
      {splashPhase !== 'done' && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-charcoal transition-opacity duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${splashPhase === 'exiting' ? 'opacity-0' : 'opacity-100'
          }`}>
          <img
            src="/logo.png"
            alt="HJM Transport"
            className={`w-full h-full object-contain logo-img splash-logo ${splashPhase === 'exiting' ? 'splash-logo-exit' : ''
              }`}
          />
        </div>
      )}

      {/* Main Website Content */}
      <div className={`${splashPhase === 'done' ? 'content-fade-in' : 'opacity-0'}`}>
        <Header />
        <main>
          <Hero />
          <Services />
          <Coverage />
          <Fleet />
          <Testimonials />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Sticky CTA - must be outside the animated wrapper so position:fixed works */}
      {splashPhase === 'done' && <MobileStickyCTA />}
    </div>
  );
}

export default App;