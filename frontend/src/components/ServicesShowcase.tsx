import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: '🕷️',
    name: 'Web Scraping & Data Extraction',
    desc: 'Automated extraction from any website — static, dynamic, JavaScript-rendered, paginated, and login-protected pages at any scale.',
  },
  {
    icon: '📊',
    name: 'Data Research & Market Intelligence',
    desc: 'Structured competitive and market research datasets for strategic planning, investment decisions, and business intelligence.',
  },
  {
    icon: '🌐',
    name: 'Web Research & Data Collection',
    desc: 'Targeted manual and automated web research delivering high-quality, reliable, source-verified data from across the internet.',
  },
  {
    icon: '🤖',
    name: 'Automated Data Collection Systems',
    desc: 'Python-based continuous data pipelines — scheduled, monitored, and automatically updated for ongoing data needs.',
  },
  {
    icon: '🔍',
    name: 'Competitor & Business Research',
    desc: 'In-depth company profiles, competitor intelligence, business data, and market positioning research delivered as structured datasets.',
  },
  {
    icon: '👥',
    name: 'Lead Generation Data Collection',
    desc: 'Verified B2B leads with email addresses, phone numbers, LinkedIn profiles, company details, and decision-maker contacts.',
  },
  {
    icon: '🧹',
    name: 'Data Cleaning & Validation',
    desc: 'Remove duplicates, standardize formats, validate emails, fix errors — delivering clean, analysis-ready datasets.',
  },
  {
    icon: '⚡',
    name: 'Custom Data Solutions',
    desc: 'Have a unique data challenge? We build fully custom data collection and processing workflows tailored to your exact business needs.',
    highlight: true,
  },
];

export default function ServicesShowcase() {
  const [isVisible, ref] = useScrollAnimation();

  return (
    <section id="services" className="services-section">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`services-header reveal ${isVisible ? 'visible' : ''}`}
      >
        <span className="section-eyebrow">What We Do</span>
        <h2 className="section-title">Services We <em>Offer</em></h2>
        <p className="section-desc">End-to-end data collection and research services tailored for businesses, AI companies, and research organizations worldwide.</p>
      </div>

      <div className="services-grid">
        {services.map((svc, i) => (
          <div
            key={svc.name}
            className={`service-card ${svc.highlight ? 'service-card-highlight' : ''}`}
            style={{ animationDelay: `${(i % 4) * 0.1}s` }}
          >
            <div className={`service-icon-wrap ${svc.highlight ? 'service-icon-highlight' : ''}`}>
              <span>{svc.icon}</span>
            </div>
            <div className={`service-name ${svc.highlight ? 'service-name-gold' : ''}`}>{svc.name}</div>
            <div className="service-desc">{svc.desc}</div>
            <div className={`service-arrow ${svc.highlight ? 'service-arrow-visible' : ''}`}>
              {svc.highlight ? 'DISCUSS PROJECT →' : 'VIEW SERVICE →'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
