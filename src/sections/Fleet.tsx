import { useState, useEffect, useRef } from 'react';

const Fleet = () => {
  const [statValue, setStatValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            // Simple number animation
            let start = 0;
            const end = 98;
            const duration = 1500;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const current = Math.floor(start + (end - start) * progress);
              setStatValue(current);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('fleet-stat');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="fleet"
      className="relative w-full py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/fleet-yard.jpg"
          alt="HJM Transport fleet yard"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Headline */}
              <div>
                <h2 className="font-heading font-bold text-h2 text-off-white mb-2">
                  Fleet ready
                </h2>
                <h2 className="font-heading font-bold text-h2 text-off-white">
                  When you need capacity
                </h2>
              </div>

              {/* Supporting Copy */}
              <p className="text-body text-muted-text max-w-md">
                Modern trailers, maintained daily. From one-off jobs to
                contracted routes.
              </p>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="btn-secondary"
              >
                Ask about contract rates
              </button>
            </div>

            {/* Right Column - Stat Card */}
            <div className="flex justify-end">
              <div
                id="fleet-stat"
                className="card-dark p-8 lg:p-10 max-w-xs text-center"
              >
                <span className="block font-heading font-bold text-6xl lg:text-7xl text-amber mb-2">
                  {statValue}%
                </span>
                <p className="text-sm text-muted-text">
                  On-time delivery rate
                  <br />
                  (last 12 months)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Label - Fixed position */}
      <div className="relative z-10 mt-12 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs text-muted-text uppercase tracking-widest">
            Fleet & capacity — HJM Transport
          </span>
        </div>
      </div>
    </section>
  );
};

export default Fleet;