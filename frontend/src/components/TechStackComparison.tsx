import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const technologies = [
  {
    name: 'Selenium',
    icon: '🤖',
    features: ['JavaScript rendering', 'Browser automation', 'Dynamic content', 'Login handling'],
    pros: ['Handles complex JS sites', 'Full browser control', 'AJAX support', 'Screenshot capability'],
    cons: ['Slower execution', 'Resource intensive', 'Requires browser driver', 'Higher complexity'],
    useCases: ['JavaScript-heavy sites', 'Login-protected pages', 'Dynamic content', 'Interactive elements']
  },
  {
    name: 'BeautifulSoup',
    icon: '🍲',
    features: ['HTML parsing', 'Fast extraction', 'Simple syntax', 'Lightweight'],
    pros: ['Very fast', 'Easy to learn', 'Low resource usage', 'Great for static sites'],
    cons: ['No JS rendering', 'Static content only', 'No browser automation', 'Limited for complex sites'],
    useCases: ['Static HTML sites', 'Simple data extraction', 'Fast parsing needs', 'Lightweight projects']
  },
  {
    name: 'Scrapy',
    icon: '🕷️',
    features: ['Framework-based', 'Async requests', 'Built-in pipelines', 'Middleware support'],
    pros: ['Very scalable', 'Fast async crawling', 'Built-in features', 'Production-ready'],
    cons: ['Steeper learning curve', 'Overkill for small projects', 'No JS rendering', 'More setup required'],
    useCases: ['Large-scale scraping', 'Multiple sites', 'Production pipelines', 'Complex workflows']
  }
];

export default function TechStackComparison() {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <AnimatedSection className="bg-navy-2">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-xs text-gold uppercase tracking-[0.25em] block mb-3">Technology Comparison</span>
          <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
            Choosing the Right <em className="text-gold italic">Tool</em>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-8">
            Compare different web scraping approaches to understand which technology best fits your project needs.
          </p>
          
          <div className="inline-flex gap-2 bg-card border border-gold/10 p-1">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-6 py-2 text-xs uppercase tracking-wider transition-all ${
                viewMode === 'cards' ? 'bg-gold text-navy' : 'text-white hover:text-gold'
              }`}
            >
              Card View
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-6 py-2 text-xs uppercase tracking-wider transition-all ${
                viewMode === 'table' ? 'bg-gold text-navy' : 'text-white hover:text-gold'
              }`}
            >
              Table View
            </button>
          </div>
        </div>

        {viewMode === 'cards' ? (
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-card border border-gold/10 p-8 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10 transition-all">
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-display mb-6">{tech.name}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs text-gold uppercase tracking-wider mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {tech.features.map((feature, i) => (
                        <li key={i} className="text-sm text-white/70 flex items-center gap-2">
                          <span className="text-gold">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs text-green uppercase tracking-wider mb-3">Advantages</h4>
                    <ul className="space-y-2">
                      {tech.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-white/70 flex items-center gap-2">
                          <span className="text-green">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs text-red uppercase tracking-wider mb-3">Limitations</h4>
                    <ul className="space-y-2">
                      {tech.cons.map((con, i) => (
                        <li key={i} className="text-sm text-white/70 flex items-center gap-2">
                          <span className="text-red">✗</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs text-gold uppercase tracking-wider mb-3">Best For</h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.useCases.map((useCase, i) => (
                        <span key={i} className="px-3 py-1 bg-gold/10 border border-gold/20 text-xs text-gold">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-7xl mx-auto overflow-x-auto">
            <table className="w-full bg-card border border-gold/10">
              <thead>
                <tr className="border-b border-gold/10">
                  <th className="px-6 py-4 text-left text-xs text-gold uppercase tracking-wider">Feature</th>
                  {technologies.map((tech, idx) => (
                    <th key={idx} className="px-6 py-4 text-center">
                      <div className="text-3xl mb-2">{tech.icon}</div>
                      <div className="text-sm font-medium">{tech.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gold/10">
                  <td className="px-6 py-4 text-sm font-medium">JavaScript Rendering</td>
                  <td className="px-6 py-4 text-center text-green">✓</td>
                  <td className="px-6 py-4 text-center text-red">✗</td>
                  <td className="px-6 py-4 text-center text-red">✗</td>
                </tr>
                <tr className="border-b border-gold/10">
                  <td className="px-6 py-4 text-sm font-medium">Speed</td>
                  <td className="px-6 py-4 text-center text-sm text-white/70">Slow</td>
                  <td className="px-6 py-4 text-center text-sm text-white/70">Very Fast</td>
                  <td className="px-6 py-4 text-center text-sm text-white/70">Fast</td>
                </tr>
                <tr className="border-b border-gold/10">
                  <td className="px-6 py-4 text-sm font-medium">Scalability</td>
                  <td className="px-6 py-4 text-center text-sm text-white/70">Medium</td>
                  <td className="px-6 py-4 text-center text-sm text-white/70">Low</td>
                  <td className="px-6 py-4 text-center text-sm text-white/70">Very High</td>
                </tr>
                <tr className="border-b border-gold/10">
                  <td className="px-6 py-4 text-sm font-medium">Learning Curve</td>
                  <td className="px-6 py-4 text-center text-sm text-white/70">Medium</td>
                  <td className="px-6 py-4 text-center text-sm text-white/70">Easy</td>
                  <td className="px-6 py-4 text-center text-sm text-white/70">Steep</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">Resource Usage</td>
                  <td className="px-6 py-4 text-center text-sm text-white/70">High</td>
                  <td className="px-6 py-4 text-center text-sm text-white/70">Low</td>
                  <td className="px-6 py-4 text-center text-sm text-white/70">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
