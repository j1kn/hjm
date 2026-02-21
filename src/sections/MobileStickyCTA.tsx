import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (about 100vh)
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrollY > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-lg border-t border-white/10 transition-transform duration-300 lg:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3 p-4">
        <a
          href="tel:+447387344777"
          className="flex-1 btn-secondary flex items-center justify-center gap-2 text-sm"
        >
          <Phone size={16} />
          Call Now
        </a>
        <button
          onClick={scrollToContact}
          className="flex-1 btn-primary text-sm"
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;