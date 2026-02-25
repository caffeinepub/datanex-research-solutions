import { useEffect, useState } from 'react';

export default function QuickContactPill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button
      className={`quick-contact-pill ${visible ? 'visible' : ''}`}
      onClick={scrollToContact}
      aria-label="Get a free quote"
    >
      <span className="pill-dot" />
      Get a Free Quote
    </button>
  );
}
