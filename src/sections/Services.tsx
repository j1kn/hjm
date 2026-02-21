import { Truck, Package, Zap, Route, Calendar, Users } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'General haulage',
    description:
      'Reliable road freight for pallets, crates and irregular loads.',
  },
  {
    icon: Package,
    title: 'Pallet delivery',
    description: 'Standard and oversized pallets with proof-of-delivery.',
  },
  {
    icon: Zap,
    title: 'Same-day runs',
    description: 'Urgent collections with direct drive and live tracking.',
  },
  {
    icon: Route,
    title: 'Long-distance freight',
    description: 'Cross-border planning with clear handoffs.',
  },
  {
    icon: Calendar,
    title: 'Contract logistics',
    description: 'Regular routes, scheduled slots and reporting.',
  },
  {
    icon: Users,
    title: 'Fleet support',
    description: 'Extra capacity when your fleet is at limit.',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="section-dark py-20 lg:py-28"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Title Block */}
          <div className="mb-12 lg:mb-16 max-w-2xl">
            <h2 className="font-heading font-bold text-h2 text-off-white mb-4">
              What we move
            </h2>
            <p className="text-body text-muted-text">
              From single pallets to full trailer loads—handled with care and
              tracked in real time.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl bg-surface border border-white/10 hover-lift transition-all duration-300"
              >
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                    <service.icon
                      size={24}
                      className="text-amber"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-off-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
};

export default Services;