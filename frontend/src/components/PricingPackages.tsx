import { useScrollAnimation } from '../hooks/useScrollAnimation';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: 'per project',
    desc: 'Perfect for small data needs and one-time extractions.',
    features: [
      'Up to 5,000 records',
      'CSV format delivery',
      '3-day turnaround',
      'Basic data cleaning',
      'Email support',
      '1 revision included',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$149',
    period: 'per project',
    desc: 'Most popular for growing businesses with regular data needs.',
    features: [
      'Up to 50,000 records',
      'CSV / Excel / JSON formats',
      '5-day turnaround',
      'MySQL storage included',
      'Advanced data cleaning',
      'Priority email support',
      '3 revisions included',
      'Data validation report',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'quote',
    desc: 'For large-scale, ongoing, or complex data operations.',
    features: [
      '100,000+ records',
      'All output formats',
      'Dedicated pipeline setup',
      'Ongoing data collection',
      'Real-time monitoring',
      'Dedicated account manager',
      'Unlimited revisions',
      'SLA guarantee',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
];

export default function PricingPackages() {
  const [isVisible, ref] = useScrollAnimation();

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="pricing" className="pricing-section">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`pricing-header reveal ${isVisible ? 'visible' : ''}`}
      >
        <span className="section-eyebrow">Transparent Pricing</span>
        <h2 className="section-title">Packages &amp; <em>Pricing</em></h2>
        <p className="section-desc">Simple, transparent pricing for every data need. All prices in USD.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`pricing-card ${plan.highlight ? 'pricing-card-highlight' : ''}`}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {plan.highlight && <div className="pricing-recommended">RECOMMENDED</div>}
            <div className="pricing-plan-name">{plan.name}</div>
            <div className="pricing-price">
              <span className="pricing-amount">{plan.price}</span>
              <span className="pricing-period">{plan.period}</span>
            </div>
            <p className="pricing-desc">{plan.desc}</p>
            <ul className="pricing-features">
              {plan.features.map((f) => (
                <li key={f} className="pricing-feature">
                  <span className="pricing-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`pricing-cta ${plan.highlight ? 'pricing-cta-highlight' : ''}`}
              onClick={scrollToContact}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <p className="pricing-note">
        All prices in USD. Custom quotes available for complex projects, multi-source scraping, or ongoing data pipelines.
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }} className="pricing-note-link"> Contact us</a> for a free consultation.
      </p>
    </section>
  );
}
