import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Future of AI in Market Research: Trends to Watch in 2025',
    excerpt: 'Artificial intelligence is reshaping how companies gather and analyze market data. Here are the key trends that will define the industry.',
    category: 'Market Research',
    readTime: '6 min read',
    date: 'Jan 15, 2025',
    image: '/assets/generated/blog-thumb-1.dim_600x400.png',
    featured: true,
  },
  {
    id: 2,
    title: 'Building Robust Data Pipelines for Research Analytics',
    excerpt: 'A practical guide to designing scalable ETL pipelines that can handle the demands of modern research analytics workflows.',
    category: 'Data Engineering',
    readTime: '8 min read',
    date: 'Jan 8, 2025',
    image: '/assets/generated/blog-thumb-2.dim_600x400.png',
    featured: false,
  },
  {
    id: 3,
    title: 'Qualitative vs Quantitative Research: Choosing the Right Approach',
    excerpt: 'Understanding when to use qualitative versus quantitative methods is crucial for research success. This guide helps you decide.',
    category: 'Research Methods',
    readTime: '5 min read',
    date: 'Dec 28, 2024',
    image: '/assets/generated/blog-thumb-3.dim_600x400.png',
    featured: false,
  },
];

export default function BlogPreview() {
  const [isVisible, ref] = useScrollAnimation();

  return (
    <div className="bg-section-main section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <div className="divider-gold" style={{ margin: '0 0 1rem 0' }} />
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
              Latest Insights
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Research trends, methodologies, and industry perspectives
            </p>
          </div>
          <button className="btn-outline-gold flex items-center gap-2 flex-shrink-0">
            View All Posts
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Post */}
          <div
            className="lg:col-span-2 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-md"
            style={{ background: 'oklch(0.16 0.03 240)', border: '1px solid oklch(0.26 0.035 240)' }}
          >
            <div className="relative overflow-hidden h-56">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: 'oklch(0.78 0.15 75)', color: 'oklch(0.12 0.025 240)' }}
              >
                Featured
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <span
                  className="flex items-center gap-1 text-xs font-semibold"
                  style={{ color: 'oklch(0.78 0.15 75)' }}
                >
                  <Tag size={11} />
                  {posts[0].category}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: 'oklch(0.55 0.02 240)' }}>
                  <Clock size={11} />
                  {posts[0].readTime}
                </span>
                <span className="text-xs" style={{ color: 'oklch(0.55 0.02 240)' }}>
                  {posts[0].date}
                </span>
              </div>
              <h3
                className="text-xl font-bold mb-3 leading-snug"
                style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.95 0.01 240)' }}
              >
                {posts[0].title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.65 0.02 240)' }}>
                {posts[0].excerpt}
              </p>
              <button
                className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                style={{ color: 'oklch(0.78 0.15 75)' }}
              >
                Read More <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Side Posts */}
          <div className="flex flex-col gap-6">
            {posts.slice(1).map((post) => (
              <div
                key={post.id}
                className="rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-sm flex-1"
                style={{ background: 'oklch(0.16 0.03 240)', border: '1px solid oklch(0.26 0.035 240)' }}
              >
                <div className="relative overflow-hidden h-36">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="flex items-center gap-1 text-xs font-semibold"
                      style={{ color: 'oklch(0.78 0.15 75)' }}
                    >
                      <Tag size={10} />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: 'oklch(0.55 0.02 240)' }}>
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="text-sm font-bold mb-2 leading-snug"
                    style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.95 0.01 240)' }}
                  >
                    {post.title}
                  </h3>
                  <button
                    className="flex items-center gap-1 text-xs font-semibold transition-all duration-200 hover:gap-2"
                    style={{ color: 'oklch(0.78 0.15 75)' }}
                  >
                    Read More <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
