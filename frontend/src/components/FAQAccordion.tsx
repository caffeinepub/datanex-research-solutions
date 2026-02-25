import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown, Search } from 'lucide-react';

const categories = ['All', 'Services', 'Process', 'Pricing', 'Delivery'];

const faqs = [
  {
    id: 1,
    category: 'Services',
    question: 'What types of research does DataNex specialize in?',
    answer: 'DataNex specializes in data analytics, market research, academic research, business intelligence, and strategic consulting. We serve clients across industries including finance, healthcare, retail, technology, and academia.',
  },
  {
    id: 2,
    category: 'Process',
    question: 'How does your research process work?',
    answer: 'Our process begins with a discovery call to understand your needs, followed by a detailed proposal. Once approved, we assign a dedicated research team, conduct the analysis, and deliver findings through comprehensive reports and presentations.',
  },
  {
    id: 3,
    category: 'Pricing',
    question: 'How is pricing determined for research projects?',
    answer: 'Pricing depends on the scope, complexity, timeline, and type of research required. We offer fixed-price packages for standard projects and custom quotes for complex engagements. Use our calculator above for estimates.',
  },
  {
    id: 4,
    category: 'Delivery',
    question: 'What is the typical turnaround time for a research project?',
    answer: 'Turnaround times vary by project scope. Simple analyses can be completed in 1-2 weeks, while comprehensive market studies may take 4-8 weeks. We also offer rush delivery for time-sensitive projects.',
  },
  {
    id: 5,
    category: 'Services',
    question: 'Do you work with international clients?',
    answer: 'Yes, we work with clients globally. Based in India with a global remote team, we have experience conducting research across Asia, Europe, North America, and Africa. We support multiple languages and time zones.',
  },
  {
    id: 6,
    category: 'Process',
    question: 'How do you ensure data quality and accuracy?',
    answer: 'We follow rigorous quality assurance protocols including peer review, statistical validation, and cross-referencing multiple data sources. All research undergoes a multi-stage review process before delivery.',
  },
  {
    id: 7,
    category: 'Pricing',
    question: 'Do you offer ongoing retainer arrangements?',
    answer: 'Yes, we offer monthly and quarterly retainer packages for clients who need continuous research support. Retainers provide priority access to our team and discounted rates compared to project-based pricing.',
  },
  {
    id: 8,
    category: 'Delivery',
    question: 'What formats do you deliver research in?',
    answer: 'We deliver research in multiple formats including PDF reports, PowerPoint presentations, interactive dashboards (Tableau/Power BI), Excel workbooks, and raw data files. Format preferences are discussed during project scoping.',
  },
];

export default function FAQAccordion() {
  const [isVisible, ref] = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-section-alt section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="divider-gold" />
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Everything you need to know about working with DataNex
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2"
            style={{ color: 'oklch(0.55 0.02 240)' }}
          />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
            style={{
              background: 'oklch(0.16 0.03 240)',
              border: '1px solid oklch(0.26 0.035 240)',
              color: 'oklch(0.88 0.01 240)',
            }}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200"
              style={
                activeCategory === cat
                  ? { background: 'oklch(0.78 0.15 75)', color: 'oklch(0.12 0.025 240)' }
                  : {
                      background: 'oklch(0.20 0.03 240)',
                      color: 'oklch(0.65 0.02 240)',
                      border: '1px solid oklch(0.26 0.035 240)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12" style={{ color: 'oklch(0.55 0.02 240)' }}>
              No questions found matching your search.
            </div>
          ) : (
            filtered.map((faq) => (
              <div
                key={faq.id}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  background: 'oklch(0.16 0.03 240)',
                  border: openId === faq.id
                    ? '1px solid oklch(0.78 0.15 75 / 0.4)'
                    : '1px solid oklch(0.26 0.035 240)',
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span
                      className="flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded"
                      style={{ background: 'oklch(0.78 0.15 75 / 0.12)', color: 'oklch(0.78 0.15 75)' }}
                    >
                      {faq.category}
                    </span>
                    <span
                      className="text-sm font-semibold truncate"
                      style={{ color: 'oklch(0.92 0.01 240)' }}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 ml-3 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}
                    style={{ color: 'oklch(0.78 0.15 75)' }}
                  />
                </button>
                {openId === faq.id && (
                  <div
                    className="px-6 pb-5"
                    style={{ borderTop: '1px solid oklch(0.22 0.03 240)' }}
                  >
                    <p className="text-sm leading-relaxed pt-4" style={{ color: 'oklch(0.72 0.02 240)' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
