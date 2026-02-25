import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#blog' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-900/95 backdrop-blur-md shadow-navy-lg border-b border-navy-700'
            : 'bg-navy-950/80 backdrop-blur-sm'
        }`}
        style={{ height: '72px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="DataNex Research Solutions - Home"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-navy-900 text-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, oklch(0.85 0.16 80), oklch(0.70 0.14 70))' }}
            >
              DN
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span
                className="font-bold text-sm tracking-widest uppercase"
                style={{ color: 'oklch(0.85 0.16 80)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                DataNex
              </span>
              <span
                className="text-xs tracking-wider uppercase"
                style={{ color: 'oklch(0.65 0.02 240)', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Research Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-3 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded-sm ${
                    isActive
                      ? 'text-gold-400'
                      : 'text-foreground/70 hover:text-gold-400'
                  }`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{ background: 'oklch(0.85 0.16 80)' }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#blog'); }}
              className="ml-4 btn-gold text-xs"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md transition-colors duration-200 hover:bg-navy-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen
              ? <X size={22} style={{ color: 'oklch(0.85 0.16 80)' }} />
              : <Menu size={22} style={{ color: 'oklch(0.85 0.16 80)' }} />
            }
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-40 transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'oklch(0.12 0.025 240 / 0.98)', backdropFilter: 'blur(12px)' }}
      >
        <nav className="flex flex-col px-4 py-4 gap-1 border-b border-navy-700" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-4 py-3 text-sm font-semibold tracking-widest uppercase rounded-md transition-all duration-200 ${
                  isActive
                    ? 'text-gold-400 bg-navy-700'
                    : 'text-foreground/70 hover:text-gold-400 hover:bg-navy-800'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2 pb-1">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#blog'); setMobileOpen(false); }}
              className="btn-gold w-full text-center block"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-navy-950/60 lg:hidden"
          style={{ top: '72px' }}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
