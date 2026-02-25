import { useScrollAnimation } from '../hooks/useScrollAnimation';

const industries = [
  { icon: '🤖', name: 'AI & Machine Learning Companies', desc: 'Training datasets, web-sourced data, structured corpora for ML models.' },
  { icon: '📈', name: 'Market Research Firms', desc: 'Pricing data, competitor analysis, consumer trend datasets.' },
  { icon: '💡', name: 'SaaS & Tech Startups', desc: 'Product data, user research, competitive intelligence pipelines.' },
  { icon: '🛒', name: 'E-commerce Businesses', desc: 'Product listings, price monitoring, inventory and review data.' },
  { icon: '📊', name: 'Data Analytics Companies', desc: 'Raw data pipelines, structured datasets, real-time data feeds.' },
  { icon: '🔬', name: 'Research Organizations', desc: 'Academic and institutional research data, citation extraction.' },
  { icon: '💼', name: 'Consulting & Investment Firms', desc: 'Due diligence datasets, market sizing, company research reports.' },
  { icon: '🌍', name: 'Global Remote Businesses', desc: 'Remote-first, async-friendly service for clients across all time zones.', highlight: true },
];

export default function IndustriesSection() {
  const [isVisible, ref] = useScrollAnimation();

  return (
    <section id="industries" className="industries-section">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`industries-header reveal ${isVisible ? 'visible' : ''}`}
      >
        <span className="section-eyebrow">Who We Serve</span>
        <h2 className="section-title">Industries We <em>Serve</em></h2>
        <p className="section-desc">Powering data operations across high-growth industries worldwide.</p>
      </div>

      <div className="industries-grid">
        {industries.map((ind, i) => (
          <div
            key={ind.name}
            className={`industry-card ${ind.highlight ? 'industry-card-highlight' : ''}`}
            style={{ animationDelay: `${(i % 4) * 0.1}s` }}
          >
            <div className="ind-icon">{ind.icon}</div>
            <div className="ind-name">{ind.name}</div>
            <div className="ind-desc">{ind.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
