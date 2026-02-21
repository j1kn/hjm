import { useState } from 'react';
import { Mail, Phone, Clock, Check, Loader2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickupPostcode: '',
    dropoffPostcode: '',
    loadDetails: '',
    preferredDate: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState('success');

    // Reset after showing success
    setTimeout(() => {
      setFormState('idle');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        pickupPostcode: '',
        dropoffPostcode: '',
        loadDetails: '',
        preferredDate: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const bullets = [
    'Same-day pickup options',
    'Nationwide delivery',
    'Fleet ready for contracts',
  ];

  return (
    <section
      id="contact"
      className="section-dark py-20 lg:py-28"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              <h2 className="font-heading font-bold text-h2 text-off-white mb-4">
                Get a quote today
              </h2>

              {/* Bullets */}
              <ul className="space-y-3 mb-8">
                {bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-muted-text"
                  >
                    <div className="w-5 h-5 rounded-full bg-amber/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-amber" />
                    </div>
                    <span className="text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
                    <Mail size={18} className="text-amber" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-text uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-off-white text-sm">
                      enquiries@hjmtransport.uk
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
                    <Phone size={18} className="text-amber" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-text uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="text-off-white text-sm">
                      +44 7387 344777
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
                    <Clock size={18} className="text-amber" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-text uppercase tracking-wider">
                      Hours
                    </p>
                    <p className="text-off-white text-sm">
                      Mon–Fri 06:00–22:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="card-dark p-6 lg:p-8">
              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-amber/20 flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-amber" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-off-white mb-2">
                    Quote requested!
                  </h3>
                  <p className="text-muted-text text-sm">
                    We'll be in touch within 10 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="form-field">
                      <label className="block text-xs text-muted-text uppercase tracking-wider mb-2">
                        Full name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-off-white text-sm focus:outline-none focus:border-amber transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="form-field">
                        <label className="block text-xs text-muted-text uppercase tracking-wider mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-off-white text-sm focus:outline-none focus:border-amber transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div className="form-field">
                        <label className="block text-xs text-muted-text uppercase tracking-wider mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-off-white text-sm focus:outline-none focus:border-amber transition-colors"
                          placeholder="+44 7123 456789"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="form-field">
                        <label className="block text-xs text-muted-text uppercase tracking-wider mb-2">
                          Pickup postcode *
                        </label>
                        <input
                          type="text"
                          name="pickupPostcode"
                          value={formData.pickupPostcode}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-off-white text-sm focus:outline-none focus:border-amber transition-colors"
                          placeholder="SW1A 1AA"
                        />
                      </div>

                      <div className="form-field">
                        <label className="block text-xs text-muted-text uppercase tracking-wider mb-2">
                          Dropoff postcode *
                        </label>
                        <input
                          type="text"
                          name="dropoffPostcode"
                          value={formData.dropoffPostcode}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-off-white text-sm focus:outline-none focus:border-amber transition-colors"
                          placeholder="M1 1AA"
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label className="block text-xs text-muted-text uppercase tracking-wider mb-2">
                        Load details *
                      </label>
                      <textarea
                        name="loadDetails"
                        value={formData.loadDetails}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-off-white text-sm focus:outline-none focus:border-amber transition-colors resize-none"
                        placeholder="Number of pallets, weight, dimensions, special requirements..."
                      />
                    </div>

                    <div className="form-field">
                      <label className="block text-xs text-muted-text uppercase tracking-wider mb-2">
                        Preferred date (optional)
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-off-white text-sm focus:outline-none focus:border-amber transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="btn-primary w-full flex items-center justify-center gap-2 mt-6"
                    >
                      {formState === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : formState === 'error' ? (
                        <>
                          <AlertCircle size={18} />
                          Try again
                        </>
                      ) : (
                        'Request quote'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;