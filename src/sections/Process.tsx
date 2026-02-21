import { ClipboardCheck, Truck, PackageCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Request a quote',
    description:
      'Share pickup, dropoff and load details. We reply within 10 minutes.',
  },
  {
    number: '02',
    icon: Truck,
    title: 'Confirm pickup',
    description: 'Choose a slot. We send driver details and ETA.',
  },
  {
    number: '03',
    icon: PackageCheck,
    title: 'Track & deliver',
    description: 'Live updates and proof-of-delivery on completion.',
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="section-light py-20 lg:py-28"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading font-bold text-h2 text-charcoal mb-4">
              How it works
            </h2>
            <p className="text-body text-charcoal/70 max-w-xl mx-auto">
              Request a quote in minutes. We confirm pickup and keep you updated
              until delivery.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 lg:p-8 rounded-2xl bg-white border border-charcoal/10 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-amber flex items-center justify-center">
                  <span className="font-heading font-bold text-sm text-charcoal">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-5 mt-4">
                  <div className="w-14 h-14 rounded-xl bg-charcoal/5 flex items-center justify-center">
                    <step.icon
                      size={28}
                      className="text-charcoal"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-charcoal/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;