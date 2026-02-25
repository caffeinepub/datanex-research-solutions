import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const reasons = [
  { num: '01', title: 'High Accuracy & Verified Data', desc: 'Every dataset undergoes rigorous multi-step validation. We guarantee 99.2%+ accuracy on all deliverables — no exceptions.' },
  { num: '02', title: 'Scalable Automated Collection', desc: 'Python-based pipelines handle millions of records — from 1,000 to 1,000,000+ — scaling seamlessly with your data needs.' },
  { num: '03', title: 'Fast Turnaround & Reliable Delivery', desc: 'We commit to deadlines and deliver structured, analysis-ready datasets on time — every single time, no excuses.' },
  { num: '04', title: 'Custom Solutions for Every Business', desc: 'No one-size-fits-all. We design tailored data workflows for your specific industry, format, and use case requirements.' },
  { num: '05', title: 'Global Remote Service Support', desc: 'Based in India, serving worldwide — remote-first, async-friendly, and accessible across all time zones with quick communication.' },
];

export default function WhyChooseUs() {
  const [isVisible, ref] = useScrollAnimation();
  const [accVal, setAccVal] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !animated) {
      setAnimated(true);
      const duration = 1800;
      const startTime = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        setAccVal(99.2 * ease);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, animated]);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="why" className="why-section">
      <div className="why-layout">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`why-left reveal left ${isVisible ? 'visible' : ''}`}
        >
          <span className="section-eyebrow">Our Advantage</span>
          <h2 className="section-title">Why Choose<br /><em>DataNex?</em></h2>
          <p className="section-desc">We don't just collect data — we engineer reliable, scalable data systems that your business can depend on.</p>
          <div className="why-big-stat">
            <div className="why-big-num">{accVal.toFixed(1)}%</div>
            <div className="why-big-lbl">Average Data Accuracy Across All Projects</div>
          </div>
          <button className="btn-primary" onClick={scrollToContact}>
            <span>Work With Us</span>
          </button>
        </div>

        <div className="why-right">
          {reasons.map((r, i) => (
            <div key={r.num} className={`why-card reveal d${i + 1} ${isVisible ? 'visible' : ''}`}>
              <div className="why-num-badge">{r.num}</div>
              <div>
                <div className="why-card-title">{r.title}</div>
                <div className="why-card-desc">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
