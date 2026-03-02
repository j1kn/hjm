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
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Stage 1: Initial fade in and hold (0.8s)
    // Stage 2: Fade out (0.6s)
    // Stage 3: Show main content
    const timer = setTimeout(() => {
      setLoading(false);
      // Give a tiny delay before showing content to ensure smooth transition
      setTimeout(() => setShowContent(true), 100);
    }, 3300); // 1.8s delay + 1.2s fade-out + buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-charcoal min-h-screen overflow-x-hidden">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Splash Screen */}
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal splash-fade-out">
          <div className="splash-fade-in flex flex-col items-center">
            <img
              src="/logo.png"
              alt="HJM Transport"
              className="h-48 lg:h-64 w-auto mb-6 logo-img"
            />
          </div>
        </div>
      )}

      {/* Main Website Content */}
      <div className={`${showContent ? 'content-fade-in' : 'opacity-0'}`}>
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
        <MobileStickyCTA />
      </div>
    </div>
  );
}

export default App;