import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Coverage', id: 'coverage' },
    { label: 'Fleet', id: 'fleet' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-charcoal/95 backdrop-blur-lg border-b border-white/10'
        : 'bg-transparent'
        } h-28 lg:h-80`}
    >
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 h-full">
        <div className="flex items-center justify-between h-full relative">
          {/* Logo - Left aligned */}
          <div className="z-10 flex items-center h-full">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center transition-transform hover:scale-105 duration-300"
            >
              <img
                src="/logo.png"
                alt="HJM Transport"
                className="h-[104px] lg:h-64 w-auto logo-img"
              />
            </button>
          </div>

          {/* Desktop Nav - Absolute Centered */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-off-white/90 hover:text-amber transition-all text-xl font-black uppercase tracking-tighter hover:scale-110 active:scale-95 px-2"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Section (Desktop: CTA, Mobile: Call Now) */}
          <div className="flex items-center justify-end z-10">
            {/* Desktop Only CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:block btn-primary text-xl px-12 py-4 font-black uppercase tracking-tight shadow-[0_0_50px_rgba(242,179,61,0.1)] hover:shadow-amber/30 transition-all active:scale-95"
            >
              Get a quote
            </button>

            {/* Mobile Only Call Now */}
            <a
              href="tel:+447387344777"
              className="lg:hidden btn-primary flex items-center gap-3 text-base py-3.5 px-6 font-black uppercase tracking-tight shadow-2xl active:scale-95"
            >
              <Phone size={20} className="fill-current" />
              CALL
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;