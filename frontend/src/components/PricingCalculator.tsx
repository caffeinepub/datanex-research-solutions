import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check, Calculator } from 'lucide-react';

const serviceTypes = [
  { id: 'analytics', label: 'Data Analytics', basePrice: 2500 },
  { id: 'market', label: 'Market Research', basePrice: 3000 },
  { id: 'academic', label: 'Academic Research', basePrice: 2000 },
  { id: 'bi', label: 'Business Intelligence', basePrice: 4000 },
  { id: 'consulting', label: 'Consulting', basePrice: 1500 },
];

const durations = [
  { id: 'week', label: '1 Week', multiplier: 1 },
  { id: 'month', label: '1 Month', multiplier: 3.5 },
  { id: 'quarter', label: '3 Months', multiplier: 9 },
  { id: 'year', label: '1 Year', multiplier: 30 },
];

const addons = [
  { id: 'rush', label: 'Rush Delivery', price: 500 },
  { id: 'presentation', label: 'Executive Presentation', price: 800 },
  { id: 'training', label: 'Team Training', price: 1200 },
  { id: 'support', label: '3-Month Support', price: 600 },
];

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    period: 'per project',
    features: ['Up to 2 research areas', 'Basic data analysis', 'PDF report', '2 revisions', 'Email support'],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$6,500',
    period: 'per project',
    features: ['Up to 5 research areas', 'Advanced analytics', 'Interactive dashboard', 'Unlimited revisions', 'Priority support', 'Executive presentation'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored pricing',
    features: ['Unlimited research scope', 'Dedicated team', 'Real-time dashboards', 'Ongoing support', 'SLA guarantee', 'On-site workshops'],
    highlighted: false,
  },
];

export default function PricingCalculator() {
  const [isVisible, ref] = useScrollAnimation();
  const [selectedService, setSelectedService] = useState(serviceTypes[0].id);
  const [selectedDuration, setSelectedDuration] = useState(durations[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const service = serviceTypes.find((s) => s.id === selectedService)!;
  const duration = durations.find((d) => d.id === selectedDuration)!;
  const addonTotal = selectedAddons.reduce((sum, id) => {
    const addon = addons.find((a) => a.id === id);
    return sum + (addon?.price ?? 0);
  }, 0);
  const total = Math.round(service.basePrice * duration.multiplier + addonTotal);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-section-main section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="divider-gold" />
          <h2 className="section-title">Pricing</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Transparent pricing tailored to your research needs
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={
                plan.highlighted
                  ? {
                      background: 'linear-gradient(135deg, oklch(0.78 0.15 75 / 0.12), oklch(0.78 0.15 75 / 0.05))',
                      border: '2px solid oklch(0.78 0.15 75 / 0.5)',
                    }
                  : {
                      background: 'oklch(0.16 0.03 240)',
                      border: '1px solid oklch(0.26 0.035 240)',
                    }
              }
            >
              {plan.highlighted && (
                <div
                  className="text-xs font-bold tracking-widest uppercase text-center py-1 px-3 rounded-full mb-4 self-start"
                  style={{ background: 'oklch(0.78 0.15 75)', color: 'oklch(0.12 0.025 240)' }}
                >
                  Most Popular
                </div>
              )}
              <h3
                className="text-xl font-bold mb-1"
                style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.95 0.01 240)' }}
              >
                {plan.name}
              </h3>
              <div className="mb-1">
                <span
                  className="text-3xl font-bold"
                  style={{
                    color: plan.highlighted ? 'oklch(0.85 0.16 80)' : 'oklch(0.95 0.01 240)',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {plan.price}
                </span>
              </div>
              <div className="text-xs mb-6" style={{ color: 'oklch(0.55 0.02 240)' }}>
                {plan.period}
              </div>
              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'oklch(0.75 0.02 240)' }}>
                    <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'oklch(0.78 0.15 75)' }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={plan.highlighted ? 'btn-gold w-full' : 'btn-outline-gold w-full'}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Calculator */}
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{ background: 'oklch(0.16 0.03 240)', border: '1px solid oklch(0.26 0.035 240)' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Calculator size={22} style={{ color: 'oklch(0.78 0.15 75)' }} />
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.95 0.01 240)' }}
            >
              Custom Price Calculator
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Service Type */}
              <div>
                <label className="block text-sm font-semibold mb-3" style={{ color: 'oklch(0.75 0.02 240)' }}>
                  Service Type
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {serviceTypes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                      style={
                        selectedService === s.id
                          ? {
                              background: 'oklch(0.78 0.15 75 / 0.15)',
                              color: 'oklch(0.85 0.16 80)',
                              border: '1px solid oklch(0.78 0.15 75 / 0.4)',
                            }
                          : {
                              background: 'oklch(0.20 0.03 240)',
                              color: 'oklch(0.65 0.02 240)',
                              border: '1px solid oklch(0.26 0.035 240)',
                            }
                      }
                    >
                      <span>{s.label}</span>
                      <span className="text-xs font-bold">${s.basePrice.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Duration */}
              <div>
                <label className="block text-sm font-semibold mb-3" style={{ color: 'oklch(0.75 0.02 240)' }}>
                  Project Duration
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {durations.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDuration(d.id)}
                      className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                      style={
                        selectedDuration === d.id
                          ? {
                              background: 'oklch(0.78 0.15 75 / 0.15)',
                              color: 'oklch(0.85 0.16 80)',
                              border: '1px solid oklch(0.78 0.15 75 / 0.4)',
                            }
                          : {
                              background: 'oklch(0.20 0.03 240)',
                              color: 'oklch(0.65 0.02 240)',
                              border: '1px solid oklch(0.26 0.035 240)',
                            }
                      }
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-sm font-semibold mb-3" style={{ color: 'oklch(0.75 0.02 240)' }}>
                  Add-ons
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {addons.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => toggleAddon(a.id)}
                      className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                      style={
                        selectedAddons.includes(a.id)
                          ? {
                              background: 'oklch(0.78 0.15 75 / 0.15)',
                              color: 'oklch(0.85 0.16 80)',
                              border: '1px solid oklch(0.78 0.15 75 / 0.4)',
                            }
                          : {
                              background: 'oklch(0.20 0.03 240)',
                              color: 'oklch(0.65 0.02 240)',
                              border: '1px solid oklch(0.26 0.035 240)',
                            }
                      }
                    >
                      <span>{a.label}</span>
                      <span className="text-xs font-bold">+${a.price.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div
                className="p-5 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, oklch(0.78 0.15 75 / 0.1), oklch(0.78 0.15 75 / 0.05))',
                  border: '1px solid oklch(0.78 0.15 75 / 0.25)',
                }}
              >
                <div className="text-sm font-medium mb-1" style={{ color: 'oklch(0.65 0.02 240)' }}>
                  Estimated Total
                </div>
                <div
                  className="text-4xl font-bold"
                  style={{ color: 'oklch(0.85 0.16 80)', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  ${total.toLocaleString()}
                </div>
                <div className="text-xs mt-1" style={{ color: 'oklch(0.55 0.02 240)' }}>
                  Prices are estimates. Contact us for exact quotes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
