import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  id: number;
  category: string;
  filterKey: string;
  title: string;
  desc: string;
  result: string;
  tech: string[];
  bgClass: string;
  codeLines: string[];
}

const projects: Project[] = [
  {
    id: 1,
    category: 'E-commerce · Python · Selenium',
    filterKey: 'E-commerce',
    title: 'E-commerce Product Data Extraction System',
    desc: 'Automated scraper extracting 500K+ product listings — pricing, specs, availability, SKU, and seller data from major e-commerce platforms across 10+ countries.',
    result: '500,000+ records extracted with 99%+ accuracy',
    tech: ['Python', 'Selenium', 'Scrapy', 'Pandas', 'Excel'],
    bgClass: 'pv1',
    codeLines: [
      "import scrapy, pandas as pd",
      "from selenium import webdriver",
      "class EcomScraper(scrapy.Spider):",
      "  name = 'product_extractor'",
      "  def parse(self, response):",
      "    yield {'title': ..., 'price': ...}",
      "df = pd.DataFrame(data)",
      "# Records: 500,000+ ✓",
    ],
  },
  {
    id: 2,
    category: 'B2B Research · BeautifulSoup · MySQL',
    filterKey: 'B2B Research',
    title: 'Company Intelligence Research Dataset',
    desc: 'Compiled 10,000+ structured B2B company profiles — revenue, headcount, leadership, LinkedIn, and contact data — stored in MySQL and delivered as Excel/CSV.',
    result: '10,000+ company profiles, investment-ready',
    tech: ['BeautifulSoup', 'Pandas', 'MySQL', 'CSV'],
    bgClass: 'pv2',
    codeLines: [
      "from bs4 import BeautifulSoup",
      "import pandas as pd, mysql",
      "def extract_company(url):",
      "  soup = BeautifulSoup(html)",
      "  return {'name': ..., 'rev': ...}",
      "cursor.execute(INSERT_SQL, row)",
      "df.to_csv('b2b_data.csv')",
      "# Profiles: 10,000+ ✓",
    ],
  },
  {
    id: 3,
    category: 'Lead Gen · Automation · JSON',
    filterKey: 'Lead Gen',
    title: 'Automated Lead Data Collection Platform',
    desc: 'End-to-end automated lead pipeline delivering 50K+ verified B2B leads monthly — emails, phone numbers, LinkedIn profiles, with full validation and MySQL storage.',
    result: '50,000+ verified leads delivered monthly',
    tech: ['Python', 'Selenium', 'MySQL', 'JSON', 'Automation'],
    bgClass: 'pv3',
    codeLines: [
      "import schedule, time",
      "from scraper import LeadScraper",
      "def run_pipeline():",
      "  leads = LeadScraper().run()",
      "  validated = validate(leads)",
      "  db.insert_many(validated)",
      "schedule.every().day.do(run)",
      "# Leads/month: 50K+ ✓",
    ],
  },
  {
    id: 4,
    category: 'Real Estate · Python · Pandas',
    filterKey: 'Automation',
    title: 'Real Estate Listing Intelligence System',
    desc: 'Scraped 80K+ property listings from major real estate portals — price, location, specs, agent contacts, and market trends — updated weekly for investment analysis.',
    result: '80,000+ listings tracked weekly',
    tech: ['Python', 'BeautifulSoup', 'Pandas', 'PostgreSQL', 'Excel'],
    bgClass: 'pv4',
    codeLines: [
      "from bs4 import BeautifulSoup",
      "import requests, pandas as pd",
      "def scrape_listings(city):",
      "  props = fetch_all_pages(city)",
      "  return clean_data(props)",
      "df = pd.concat(all_cities)",
      "df.to_excel('listings.xlsx')",
      "# Properties: 80,000+ ✓",
    ],
  },
  {
    id: 5,
    category: 'News & Media · NLP · Automation',
    filterKey: 'Automation',
    title: 'News & Media Sentiment Dataset',
    desc: 'Collected 200K+ news articles from 50+ global sources, tagged with sentiment scores, topics, and entities — delivered as structured JSON for NLP model training.',
    result: '200,000+ articles with sentiment tags',
    tech: ['Scrapy', 'Python', 'JSON', 'NLP', 'MySQL'],
    bgClass: 'pv5',
    codeLines: [
      "import scrapy, json",
      "from textblob import TextBlob",
      "class NewsSpider(scrapy.Spider):",
      "  def parse(self, response):",
      "    sentiment = TextBlob(text)",
      "    yield {'article': ..., 'score': ...}",
      "with open('news.json', 'w') as f:",
      "# Articles: 200,000+ ✓",
    ],
  },
];

const filterTabs = ['All', 'E-commerce', 'B2B Research', 'Lead Gen', 'Automation'];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, ref] = useScrollAnimation();

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.filterKey === activeFilter);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="projects" className="projects-section">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`projects-header reveal ${isVisible ? 'visible' : ''}`}
      >
        <div>
          <span className="section-eyebrow">Selected Work</span>
          <h2 className="section-title">Featured <em>Projects</em></h2>
        </div>
        <button className="btn-ghost" onClick={scrollToContact}>
          Start Your Project →
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="project-filter-tabs">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            className={`filter-tab ${activeFilter === tab ? 'active' : ''}`}
            onClick={() => setActiveFilter(tab)}
          >
            {tab}
            {tab === 'All' && <span className="filter-count">{projects.length}</span>}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project, i) => (
          <div
            key={project.id}
            className="project-card"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className={`project-visual ${project.bgClass}`}>
              <div className="code-anim">
                {project.codeLines.map((line, li) => (
                  <div key={li} className="code-line" style={{ transitionDelay: `${li * 0.05}s` }}>
                    {line}
                  </div>
                ))}
              </div>
              <div className="project-overlay" />
              <div className="project-num-badge">{String(project.id).padStart(2, '0')}</div>
              <div className="project-num-bg">{String(project.id).padStart(2, '0')}</div>
            </div>
            <div className="project-info">
              <div className="project-cat">{project.category}</div>
              <div className="project-title">{project.title}</div>
              <div className="project-desc">{project.desc}</div>
              <div className="project-result">{project.result}</div>
              <div className="project-tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
