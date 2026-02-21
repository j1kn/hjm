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
  return (
    <div className="relative bg-charcoal min-h-screen">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Coverage />
        <Fleet />
        <Testimonials />
        <Process />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />
    </div>
  );
}

export default App;