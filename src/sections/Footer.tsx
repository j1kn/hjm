const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceLinks = [
    { label: 'General Haulage', id: 'services' },
    { label: 'Pallet Delivery', id: 'services' },
    { label: 'Same-Day Runs', id: 'services' },
    { label: 'Contract Logistics', id: 'services' },
  ];

  const coverageLinks = [
    { label: 'England', id: 'coverage' },
    { label: 'Scotland', id: 'coverage' },
    { label: 'Wales', id: 'coverage' },
    { label: 'Northern Ireland', id: 'coverage' },
  ];

  const companyLinks = [
    { label: 'About', id: 'fleet' },
    { label: 'Careers', id: 'contact' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="section-dark py-16 lg:py-20 border-t border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            {/* Company Blurb */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/logo.png"
                  alt="Hjm Transport"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-sm text-muted-text leading-relaxed">
                UK haulage and logistics. Punctual, tracked, fully insured.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-semibold text-off-white text-sm uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm text-muted-text hover:text-amber transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage */}
            <div>
              <h4 className="font-heading font-semibold text-off-white text-sm uppercase tracking-wider mb-4">
                Coverage
              </h4>
              <ul className="space-y-2">
                {coverageLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm text-muted-text hover:text-amber transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-semibold text-off-white text-sm uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm text-muted-text hover:text-amber transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-xs text-muted-text">
              <span>© 2026 Hjm Transport</span>
              <span className="hidden sm:inline">•</span>
              <span>Company number: 12345678</span>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-xs text-muted-text hover:text-amber transition-colors">
                Privacy
              </button>
              <button className="text-xs text-muted-text hover:text-amber transition-colors">
                Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;