import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    icon: '🎯',
    name: 'Target Identification',
    desc: 'Define data sources, structure, and collection scope with the client.',
    details: 'We analyze target websites, identify data points, discuss format requirements, and establish success criteria.',
    deliverables: ['Project scope document', 'Data structure schema', 'Timeline estimate'],
    timeline: '1-2 days'
  },
  {
    icon: '🤖',
    name: 'Automated Scraping',
    desc: 'Python scripts using Selenium & BeautifulSoup collect data at scale.',
    details: 'We build custom scrapers with error handling, proxy rotation, and anti-detection measures for reliable data collection.',
    deliverables: ['Working scraper code', 'Initial data sample', 'Progress reports'],
    timeline: '3-7 days'
  },
  {
    icon: '⚙️',
    name: 'Data Processing',
    desc: 'Pandas pipelines parse, transform, and structure raw collected data.',
    details: 'Raw data is cleaned, normalized, and transformed into the requested format with proper data types and structure.',
    deliverables: ['Processed dataset', 'Data quality report', 'Transformation logs'],
    timeline: '2-4 days'
  },
  {
    icon: '🧹',
    name: 'Cleaning & Validation',
    desc: 'Remove duplicates, fix errors, validate — stored in MySQL or CSV.',
    details: 'Multi-step validation ensures accuracy, completeness, and consistency. Duplicates removed, formats standardized.',
    deliverables: ['Clean dataset', 'Validation report', 'Quality metrics'],
    timeline: '1-3 days'
  },
  {
    icon: '📦',
    name: 'Structured Delivery',
    desc: 'Clean Excel, CSV, JSON, or MySQL dump delivered on schedule.',
    details: 'Final dataset delivered in requested format with documentation, data dictionary, and ongoing support if needed.',
    deliverables: ['Final dataset', 'Documentation', 'Support access'],
    timeline: '1 day'
  }
];

export default function ProcessTimeline() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [isVisible, ref] = useScrollAnimation();

  return (
    <AnimatedSection id="process" className="bg-navy-2">
      <div className="container mx-auto px-6 py-20" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-xs text-gold uppercase tracking-[0.25em] block mb-3">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-display font-light">
            Our Data Collection <em className="text-gold italic">Process</em>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:grid grid-cols-5 gap-0 relative mb-20">
            <div className="absolute top-11 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
            
            {steps.map((step, idx) => (
              <div key={idx} className="text-center px-4 relative">
                <div
                  className={`w-13 h-13 rounded-full bg-card border-2 border-gold/30 flex items-center justify-center mx-auto mb-5 text-2xl transition-all duration-500 relative z-10 cursor-pointer ${
                    isVisible ? 'animate-fadeIn' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                  onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
                >
                  <span>{step.icon}</span>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-gold rounded-full flex items-center justify-center text-navy text-xs font-mono font-medium">
                    {idx + 1}
                  </div>
                </div>
                <div className="text-sm font-medium mb-2">{step.name}</div>
                <div className="text-xs text-slate leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="lg:hidden space-y-6 mb-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="w-13 h-13 rounded-full bg-card border-2 border-gold/30 flex items-center justify-center text-2xl relative cursor-pointer"
                    onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
                  >
                    <span>{step.icon}</span>
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-gold rounded-full flex items-center justify-center text-navy text-xs font-mono font-medium">
                      {idx + 1}
                    </div>
                  </div>
                  {idx < steps.length - 1 && <div className="w-px h-full bg-gold/20 mt-2" />}
                </div>
                <div className="flex-1 pb-6">
                  <div className="text-sm font-medium mb-2">{step.name}</div>
                  <div className="text-xs text-slate leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Expanded Details */}
          {expandedStep !== null && (
            <div className="bg-card border border-gold/20 p-10 animate-fadeIn">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{steps[expandedStep].icon}</div>
                <div>
                  <h3 className="text-2xl font-display mb-1">{steps[expandedStep].name}</h3>
                  <div className="text-sm text-gold font-mono">Timeline: {steps[expandedStep].timeline}</div>
                </div>
              </div>
              
              <p className="text-white/70 leading-relaxed mb-8">{steps[expandedStep].details}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-gold mb-4">Deliverables</h4>
                  <ul className="space-y-2">
                    {steps[expandedStep].deliverables.map((item, i) => (
                      <li key={i} className="text-sm text-white/70 flex items-center gap-2">
                        <span className="text-gold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-navy-2 p-6 border-l-3 border-gold">
                  <div className="text-xs text-gold uppercase tracking-wider mb-2">Estimated Duration</div>
                  <div className="text-3xl font-display text-white">{steps[expandedStep].timeline}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
