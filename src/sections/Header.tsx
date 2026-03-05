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
        }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-56 lg:h-80">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center"
          >
            <img
              src="/logo.png"
              alt="HJM Transport"
              className="h-32 lg:h-56 w-auto logo-img transition-transform duration-300 hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-off-white/80 hover:text-amber transition-colors text-lg font-semibold tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg px-8 py-3"
            >
              Get a quote
            </button>
          </div>

          {/* Mobile Call Now Button */}
          <a
            href="tel:+447387344777"
            className="lg:hidden btn-primary flex items-center gap-2 text-base py-3 px-6"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;