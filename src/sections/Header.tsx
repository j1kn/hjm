import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Coverage', id: 'coverage' },
    { label: 'Fleet', id: 'fleet' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-charcoal/95 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
          }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-20 lg:h-28">
            {/* Logo - Transparent, no background, no styling */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center"
            >
              <img
                src="/logo.png"
                alt="HJM Transport"
                className="h-18 lg:h-24 w-auto logo-img"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-off-white/80 hover:text-amber transition-colors text-sm font-medium tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-sm"
              >
                Get a quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-off-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-off-white text-2xl font-heading font-semibold hover:text-amber transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary mt-4 text-lg"
          >
            Get a quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;