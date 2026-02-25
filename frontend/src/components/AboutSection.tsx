import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProfileCard from './ProfileCard';

export default function AboutSection() {
  const [isVisible, ref] = useScrollAnimation();

  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <ProfileCard />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`about-text reveal ${isVisible ? 'visible' : ''}`}
        >
          <span className="section-eyebrow">Who We Are</span>
          <h2 className="section-title">
            Turning Raw Web Data<br />into <em>Structured Intelligence</em>
          </h2>
          <p className="about-para">
            I'm <strong>Jay Gohil</strong>, Founder of DataNex Research Solutions — a specialist agency focused on Python-based Web Scraping, Data Research, and Automated Data Collection with <strong>3+ years</strong> of hands-on experience delivering high-quality datasets for global clients.
          </p>
          <p className="about-para">
            Our agency transforms complex, unstructured web data into accurate, clean, and validated datasets for analytics, research, AI training, and operational use. We combine technical expertise with intelligent data workflows to help clients collect scalable, reliable data with confidence.
          </p>
          <div className="about-highlight">
            <span className="ah-icon">🎯</span>
            <span className="ah-text">
              <strong className="gold-text">Mission:</strong> To combine technical expertise with intelligent data workflows, helping clients collect reliable, scalable data — transforming unstructured web data into structured business intelligence.
            </span>
          </div>
          <div className="about-tags">
            {['Python Automation', 'Web Scraping', 'Data Research', 'MySQL', 'Market Intelligence', 'Lead Generation', 'Data Validation'].map((tag) => (
              <span key={tag} className="about-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
