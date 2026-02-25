import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  { icon: '🎯', num: '01', name: 'Target Identification', desc: 'Define data sources, structure, and collection scope with the client.' },
  { icon: '🤖', num: '02', name: 'Automated Scraping', desc: 'Python scripts using Selenium & BeautifulSoup collect data at scale.' },
  { icon: '⚙️', num: '03', name: 'Data Processing', desc: 'Pandas pipelines parse, transform, and structure raw collected data.' },
  { icon: '🧹', num: '04', name: 'Cleaning & Validation', desc: 'Remove duplicates, fix errors, validate — stored in MySQL or CSV.' },
  { icon: '📦', num: '05', name: 'Structured Delivery', desc: 'Clean Excel, CSV, JSON, or MySQL dump delivered on schedule.' },
];

export default function ProcessSection() {
  const [isVisible, ref] = useScrollAnimation();

  return (
    <section id="process" className="process-section">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`process-header reveal ${isVisible ? 'visible' : ''}`}
      >
        <span className="section-eyebrow">How We Work</span>
        <h2 className="section-title">Our Data Collection <em>Process</em></h2>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div key={step.num} className={`process-step reveal d${i + 1} ${isVisible ? 'visible' : ''}`}>
            <div className="step-circle">
              <span>{step.icon}</span>
              <span className="step-num">{step.num}</span>
            </div>
            <div className="step-name">{step.name}</div>
            <div className="step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
