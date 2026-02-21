import { Clock, MapPin, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCoverage = () => {
    const element = document.getElementById('coverage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-charcoal overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-surface" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-20 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile: Image on top, Desktop: Image on right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Image - Shows on top for mobile, right for desktop */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                {/* Truck image card */}
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-surface border border-white/10">
                  {/* Truck image */}
                  <img
                    src="/hero-truck.jpg"
                    alt="HJM Transport Truck"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                </div>

                {/* Floating info card - hidden on mobile */}
                <div className="hidden lg:block absolute -bottom-6 -left-6 card-dark p-5 max-w-xs">
                  <h3 className="font-heading font-semibold text-lg text-off-white mb-2">
                    Nationwide coverage
                  </h3>
                  <p className="text-muted-text text-sm leading-relaxed mb-3">
                    Depot-based dispatch with flexible routing and real-time updates.
                  </p>
                  <button
                    onClick={scrollToCoverage}
                    className="text-amber text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    View coverage map
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Text Content - Shows below image on mobile, left on desktop */}
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
              {/* Headline */}
              <div className="space-y-2">
                <h1 className="font-heading font-bold text-display text-off-white">
                  Reliable UK Haulage
                </h1>
                <h1 className="font-heading font-bold text-display text-off-white">
                  <span className="text-amber">& Logistics</span>
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-body text-muted-text max-w-lg leading-relaxed">
                Professional freight solutions for businesses across the United Kingdom. 
                From same-day deliveries to long-distance haulage, we keep your supply chain moving.
              </p>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="btn-primary text-base w-full sm:w-auto"
              >
                Get a quote
              </button>

              {/* Trust Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="pill flex items-center gap-2">
                  <Clock size={14} className="text-amber" />
                  <span>24/7 availability</span>
                </div>
                <div className="pill flex items-center gap-2">
                  <MapPin size={14} className="text-amber" />
                  <span>GPS tracked</span>
                </div>
                <div className="pill flex items-center gap-2">
                  <Shield size={14} className="text-amber" />
                  <span>Fully insured</span>
                </div>
              </div>

              {/* Mobile-only info card */}
              <div className="lg:hidden card-dark p-5 mt-6">
                <h3 className="font-heading font-semibold text-lg text-off-white mb-2">
                  Nationwide coverage
                </h3>
                <p className="text-muted-text text-sm leading-relaxed mb-3">
                  Depot-based dispatch with flexible routing and real-time updates.
                </p>
                <button
                  onClick={scrollToCoverage}
                  className="text-amber text-sm font-medium hover:underline flex items-center gap-1"
                >
                  View coverage map
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tag - Fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8 xl:px-12 py-4 bg-gradient-to-t from-charcoal to-transparent">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs text-muted-text uppercase tracking-widest">
            Haulage & logistics — UK
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;