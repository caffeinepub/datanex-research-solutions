import { useEffect, useRef, useState } from 'react';
import TypewriterEffect from './TypewriterEffect';
import DataPipelineSVG from './DataPipelineSVG';

interface HeroSectionProps {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

interface Particle {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  o: number;
}

export default function HeroSection({ onCursorEnter, onCursorLeave }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  const stats = [
    { id: 'c1', value: 2.4, suffix: 'M+', label: 'Records Scraped', decimals: 1 },
    { id: 'c2', value: 60, suffix: '+', label: 'Projects Delivered', decimals: 0 },
    { id: 'c3', value: 99, suffix: '%', label: 'Data Accuracy', decimals: 0 },
    { id: 'c4', value: 3, suffix: '+', label: 'Years Experience', decimals: 0 },
  ];

  const [statValues, setStatValues] = useState(stats.map(() => 0));
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    particlesRef.current = Array.from({ length: 70 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particlesRef.current.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.o})`;
        ctx.fill();
      });

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.strokeStyle = `rgba(201,168,76,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  useEffect(() => {
    if (statsAnimated) return;
    const timer = setTimeout(() => {
      setStatsAnimated(true);
      stats.forEach((stat, idx) => {
        const duration = 1800;
        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 4);
          const val = stat.value * ease;
          setStatValues((prev) => {
            const next = [...prev];
            next[idx] = val;
            return next;
          });
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      });
    }, 1400);
    return () => clearTimeout(timer);
  }, [statsAnimated]);

  const formatVal = (val: number, decimals: number) =>
    decimals > 0 ? val.toFixed(1) : Math.floor(val).toString();

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-grid-bg" />
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span className="badge-text">Available for Projects · India · Global Remote · Est. 2023</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-line">DataNex</span>
          <span className="hero-line hero-gold-italic">Research</span>
          <span className="hero-line">Solutions</span>
        </h1>

        <div className="hero-typewriter">
          <span className="hero-typewriter-prefix">Specializing in </span>
          <TypewriterEffect
            strings={['Web Scraping', 'Data Research', 'Lead Generation', 'Market Intelligence', 'Data Automation']}
            typingSpeed={80}
            deleteSpeed={50}
            pauseDuration={2000}
          />
        </div>

        <p className="hero-sub-tech">
          <span>Python</span> · <span>Selenium</span> · <span>BeautifulSoup</span> · <span>Pandas</span> · <span>MySQL</span>
        </p>

        <p className="hero-desc">
          We transform raw, unstructured web data into clean, structured, and analysis-ready datasets that power business intelligence and strategic decision-making for companies worldwide.
        </p>

        <div className="hero-btns">
          <button
            className="btn-primary"
            onClick={() => scrollToSection('#services')}
            onMouseEnter={onCursorEnter}
            onMouseLeave={onCursorLeave}
          >
            <span>Explore Services</span>
          </button>
          <button
            className="btn-ghost"
            onClick={() => scrollToSection('#contact')}
            onMouseEnter={onCursorEnter}
            onMouseLeave={onCursorLeave}
          >
            Start a Project
          </button>
        </div>
      </div>

      {/* SVG Pipeline Visual */}
      <div className="hero-pipeline-wrap">
        <DataPipelineSVG />
      </div>

      {/* Stats Panel */}
      <div className="hero-stats-panel">
        {stats.map((stat, idx) => (
          <div
            key={stat.id}
            className="stat-item"
            onMouseEnter={onCursorEnter}
            onMouseLeave={onCursorLeave}
          >
            <div className="stat-val">
              <span>{formatVal(statValues[idx], stat.decimals)}</span>
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <div className="stat-lbl">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[
            'Python Web Scraping', 'Selenium Automation', 'BeautifulSoup Extraction',
            'Pandas Data Processing', 'MySQL Database', 'Structured CSV & Excel',
            'B2B Lead Generation', 'Market Intelligence', 'Data Cleaning & Validation',
            'Automated Pipelines', 'Founded 2023', '3+ Years Experience',
            'Python Web Scraping', 'Selenium Automation', 'BeautifulSoup Extraction',
            'Pandas Data Processing', 'MySQL Database', 'Structured CSV & Excel',
            'B2B Lead Generation', 'Market Intelligence', 'Data Cleaning & Validation',
            'Automated Pipelines', 'Founded 2023', '3+ Years Experience',
          ].map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
