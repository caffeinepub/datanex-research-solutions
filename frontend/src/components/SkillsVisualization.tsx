import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import TerminalWindow from './TerminalWindow';

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', pct: 95 },
      { name: 'Pandas', pct: 92 },
      { name: 'NumPy', pct: 88 },
    ],
  },
  {
    title: 'Web Scraping Tools',
    skills: [
      { name: 'Selenium', pct: 94 },
      { name: 'BeautifulSoup', pct: 96 },
      { name: 'Scrapy', pct: 85 },
    ],
  },
  {
    title: 'Data & Databases',
    skills: [
      { name: 'MySQL', pct: 88 },
      { name: 'Excel / Google Sheets', pct: 97 },
      { name: 'CSV / JSON Structuring', pct: 95 },
    ],
  },
];

const techItems = [
  { icon: '🐍', name: 'Python', level: 'Expert', pct: 95 },
  { icon: '🤖', name: 'Selenium', level: 'Expert', pct: 94 },
  { icon: '🍲', name: 'BeautifulSoup', level: 'Expert', pct: 96 },
  { icon: '🕷️', name: 'Scrapy', level: 'Advanced', pct: 85 },
  { icon: '🐼', name: 'Pandas', level: 'Expert', pct: 92 },
  { icon: '🔢', name: 'NumPy', level: 'Advanced', pct: 88 },
  { icon: '🗄️', name: 'MySQL', level: 'Advanced', pct: 88 },
  { icon: '📊', name: 'Excel', level: 'Expert', pct: 97 },
  { icon: '📋', name: 'JSON / CSV', level: 'Expert', pct: 95 },
];

function SkillBar({ name, pct, animate }: { name: string; pct: number; animate: boolean }) {
  return (
    <div className="skill-row">
      <div className="skill-header">
        <span className="skill-name-text">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: animate ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function SkillsVisualization() {
  const [isVisible, ref] = useScrollAnimation();
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !barsAnimated) {
      setTimeout(() => setBarsAnimated(true), 200);
    }
  }, [isVisible, barsAnimated]);

  return (
    <section id="technologies" className="technologies-section">
      <div className="tech-layout">
        <div>
          <span className="section-eyebrow">Expertise</span>
          <h2 className="section-title">Technologies<br />&amp; <em>Skills</em></h2>
          <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
            Built on a solid foundation of industry-leading tools and frameworks for data extraction, processing, and storage.
          </p>

          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="tech-categories"
          >
            {skillCategories.map((cat, ci) => (
              <div key={cat.title} className={`tech-category-card reveal d${ci + 1} ${isVisible ? 'visible' : ''}`}>
                <div className="tcc-title">{cat.title}</div>
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} pct={skill.pct} animate={barsAnimated} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="tech-right-panel">
          <TerminalWindow />
          <div className="tech-stack-panel">
            {techItems.map((item) => (
              <div key={item.name} className="tech-item">
                <div className="tech-item-icon">{item.icon}</div>
                <div className="tech-item-name">{item.name}</div>
                <div className="tech-item-level">{item.level}</div>
                <div className="tech-item-bar">
                  <div className="tech-item-bar-fill" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
