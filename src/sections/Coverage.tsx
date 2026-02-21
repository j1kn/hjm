import { Check } from 'lucide-react';

const regions = [
  { name: 'England', coverage: 'Full coverage' },
  { name: 'Scotland', coverage: 'Major routes' },
  { name: 'Wales', coverage: 'Full coverage' },
  { name: 'Northern Ireland', coverage: 'Available' },
];

const Coverage = () => {
  return (
    <section
      id="coverage"
      className="section-dark py-20 lg:py-28"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* UK Map Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden">
                <img
                  src="/uk-map-new.jpg"
                  alt="UK Coverage Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="font-heading font-bold text-h2 text-off-white mb-4">
                UK wide coverage
              </h2>
              <p className="text-body text-muted-text mb-6">
                Depot-based dispatch means flexible routing and fast
                response—wherever your load starts.
              </p>
              <p className="text-sm text-amber mb-8">
                Same-day options available in major corridors.
              </p>

              {/* Regions List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {regions.map((region, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-white/10"
                  >
                    <div className="w-6 h-6 rounded-full bg-amber/20 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-amber" />
                    </div>
                    <div>
                      <p className="font-medium text-off-white text-sm">
                        {region.name}
                      </p>
                      <p className="text-xs text-muted-text">
                        {region.coverage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;