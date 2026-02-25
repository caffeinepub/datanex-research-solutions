import { useEffect, useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import LiveDataFeed from './components/LiveDataFeed';
import AboutSection from './components/AboutSection';
import ServicesShowcase from './components/ServicesShowcase';
import DataScopeEstimator from './components/DataScopeEstimator';
import ProjectGallery from './components/ProjectGallery';
import SkillsVisualization from './components/SkillsVisualization';
import IndustriesSection from './components/IndustriesSection';
import ProcessSection from './components/ProcessSection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialCarousel from './components/TestimonialCarousel';
import PricingPackages from './components/PricingPackages';
import DataCounterDashboard from './components/DataCounterDashboard';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuickContactPill from './components/QuickContactPill';

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const rxRef = useRef(0);
  const ryRef = useRef(0);
  const mxRef = useRef(0);
  const myRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mxRef.current = e.clientX;
      myRef.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', handleMouseMove);

    let animId: number;
    const animCursor = () => {
      rxRef.current += (mxRef.current - rxRef.current) * 0.12;
      ryRef.current += (myRef.current - ryRef.current) * 0.12;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = rxRef.current + 'px';
        cursorRingRef.current.style.top = ryRef.current + 'px';
      }
      animId = requestAnimationFrame(animCursor);
    };
    animId = requestAnimationFrame(animCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setShowBackTop(scrolled > 600);
      setNavScrolled(scrolled > 80);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((sec) => {
        const el = sec as HTMLElement;
        const top = el.offsetTop - 120;
        const bot = top + el.offsetHeight;
        if (scrolled >= top && scrolled < bot) {
          setActiveSection(el.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCursorEnter = () => {
    cursorRef.current?.classList.add('cursor-active');
    cursorRingRef.current?.classList.add('cursor-ring-active');
  };
  const handleCursorLeave = () => {
    cursorRef.current?.classList.remove('cursor-active');
    cursorRingRef.current?.classList.remove('cursor-ring-active');
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#technologies', label: 'Technologies' },
    { href: '#industries', label: 'Industries' },
    { href: '#process', label: 'Process' },
  ];

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-root">
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorRingRef} className="custom-cursor-ring" />

      {/* Progress Bar */}
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className={`site-nav ${navScrolled ? 'scrolled' : ''}`}>
        <a
          href="#"
          className="nav-logo"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
        >
          <div className="logo-badge-circle">DN</div>
          <div className="logo-info">
            <span className="logo-name-text">DATANEX</span>
            <span className="logo-tagline-text">Research Solutions</span>
          </div>
        </a>

        <ul className="nav-links-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="nav-cta-btn"
          onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
        >
          Hire Us
        </a>

        <button
          className={`burger-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-menu-link"
            onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="mobile-menu-link"
          onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
        >
          Contact
        </a>
      </div>

      {/* Main Content */}
      <main>
        <HeroSection onCursorEnter={handleCursorEnter} onCursorLeave={handleCursorLeave} />
        <LiveDataFeed />
        <AboutSection />
        <ServicesShowcase />
        <DataScopeEstimator />
        <ProjectGallery />
        <SkillsVisualization />
        <IndustriesSection />
        <ProcessSection />
        <WhyChooseUs />
        <TestimonialCarousel />
        <PricingPackages />
        <DataCounterDashboard />
        <ContactSection />
      </main>

      <Footer />

      {/* Back to Top */}
      <button
        className={`back-to-top ${showBackTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onMouseEnter={handleCursorEnter}
        onMouseLeave={handleCursorLeave}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* Quick Contact Pill */}
      <QuickContactPill />
    </div>
  );
}

export default App;
