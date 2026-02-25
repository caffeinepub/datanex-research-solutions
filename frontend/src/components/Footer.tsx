export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'datanex-research');

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <div className="logo-badge-circle">DN</div>
            <div className="logo-info">
              <span className="logo-name-text">DATANEX</span>
              <span className="logo-tagline-text">Research Solutions</span>
            </div>
          </div>
          <p className="footer-desc">
            Transforming unstructured web data into structured business intelligence. Founded by Jay Gohil — India · Serving Global Clients.
          </p>
          <div className="footer-founded-badge">
            <span>🗓</span> Founded 2023 · 3+ Years Experience
          </div>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <div className="footer-links">
            {['Web Scraping', 'Data Research', 'Lead Generation', 'Data Cleaning', 'Automation'].map((s) => (
              <a key={s} href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>{s}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-col-title">Technologies</div>
          <div className="footer-links">
            {['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'MySQL'].map((t) => (
              <a key={t} href="#technologies" onClick={(e) => { e.preventDefault(); scrollTo('#technologies'); }}>{t}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <div className="footer-links">
            <a href="mailto:contact@datanexresearch.com">contact@datanexresearch.com</a>
            <a href="#">www.datanexresearch.com</a>
            <a href="#">India · Global Remote</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>Hire Us</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2023–{year} DataNex Research Solutions · Jay Gohil · All Rights Reserved</span>
        <span className="footer-made">
          Built with <span className="footer-heart">♥</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-caffeine-link"
          >
            caffeine.ai
          </a>
        </span>
      </div>
    </footer>
  );
}
