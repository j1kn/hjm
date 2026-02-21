import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Collected on time. Delivered early. Clear updates throughout the job.',
    name: 'Sarah T.',
    role: 'Operations Manager',
    company: 'Midlands Distribution Ltd',
  },
  {
    quote:
      'We reduced missed deliveries after switching. Response time stayed under 10 minutes.',
    name: 'James L.',
    role: 'Logistics Lead',
    company: 'Northern Freight Co',
  },
  {
    quote:
      'Reliable weekly routes for 6 months. Zero damage claims.',
    name: 'Priya R.',
    role: 'Warehouse Supervisor',
    company: 'Southern Supply Chain',
  },
  {
    quote:
      'Professional drivers, excellent communication. Our go-to haulier for urgent deliveries.',
    name: 'Michael H.',
    role: 'Dispatch Manager',
    company: 'Express Logistics UK',
  },
  {
    quote:
      'Flexible scheduling and competitive rates. Highly recommended for contract work.',
    name: 'Emma W.',
    role: 'Supply Chain Director',
    company: 'Retail Distribution Group',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const itemsPerView = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 250);
  };

  const nextSlide = () => {
    const maxIndex = testimonials.length - itemsPerView;
    goToSlide(Math.min(currentIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    goToSlide(Math.max(currentIndex - 1, 0));
  };

  return (
    <section
      id="testimonials"
      className="section-dark py-20 lg:py-28"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Title Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <h2 className="font-heading font-bold text-h2 text-off-white">
              Trusted by dispatchers
            </h2>
            
            {/* Navigation Arrows - Desktop */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-off-white hover:border-amber hover:text-amber transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= testimonials.length - itemsPerView}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-off-white hover:border-amber hover:text-amber transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-250 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="h-full p-6 lg:p-8 rounded-2xl bg-surface border border-white/10 hover-lift transition-all duration-300">
                    <Quote
                      size={32}
                      className="text-amber/40 mb-4"
                      strokeWidth={1.5}
                    />
                    <p className="text-off-white text-base leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-medium text-off-white text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-text text-xs">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-off-white hover:border-amber hover:text-amber transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-amber' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= testimonials.length - 1}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-off-white hover:border-amber hover:text-amber transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Desktop Dots */}
          <div className="hidden sm:flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: testimonials.length - itemsPerView + 1 }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-amber' : 'bg-white/20'
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;