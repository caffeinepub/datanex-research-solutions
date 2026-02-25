import { useEffect, useState, useCallback } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Michael Chen',
    company: 'TechVentures Inc.',
    flag: '🇺🇸',
    stars: 5,
    quote: 'DataNex delivered 250K+ product records with 99.4% accuracy in just 4 days. The data quality was exceptional — clean, structured, and ready for our ML pipeline immediately.',
    metric: '250K records delivered',
    role: 'Head of Data Engineering',
  },
  {
    name: 'Sarah Williams',
    company: 'MarketPulse Analytics',
    flag: '🇬🇧',
    stars: 5,
    quote: 'Jay built us a fully automated competitor monitoring pipeline that runs daily. The data is always fresh, accurate, and delivered exactly as specified. Highly recommend!',
    metric: 'Daily automated pipeline',
    role: 'Director of Market Research',
  },
  {
    name: 'Rajesh Patel',
    company: 'GrowthLeads.io',
    flag: '🇦🇺',
    stars: 5,
    quote: 'We needed 50K verified B2B leads with emails and LinkedIn profiles. DataNex delivered in 5 days with 98.9% email validity. Our sales team was thrilled with the quality.',
    metric: '50K verified B2B leads',
    role: 'CEO & Co-Founder',
  },
  {
    name: 'Emma Müller',
    company: 'DataDriven GmbH',
    flag: '🇩🇪',
    stars: 5,
    quote: 'Outstanding work on our real estate data project. 80K+ listings scraped, cleaned, and structured perfectly. Communication was excellent throughout the entire project.',
    metric: '80K+ listings scraped',
    role: 'Chief Analytics Officer',
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isVisible, ref] = useScrollAnimation();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`testimonials-inner reveal ${isVisible ? 'visible' : ''}`}
      >
        <div className="testimonials-header">
          <span className="section-eyebrow">Client Feedback</span>
          <h2 className="section-title">What Clients <em>Say</em></h2>
        </div>

        <div className="carousel-wrap">
          <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  {'★'.repeat(t.stars)}
                </div>
                <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
                <div className="testimonial-metric">{t.metric}</div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="testimonial-author-info">
                    <div className="testimonial-name">{t.name} {t.flag}</div>
                    <div className="testimonial-role">{t.role}</div>
                    <div className="testimonial-company">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} aria-label="Previous">←</button>
          <div className="carousel-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button className="carousel-btn" onClick={next} aria-label="Next">→</button>
        </div>
      </div>
    </section>
  );
}
