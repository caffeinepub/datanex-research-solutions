import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useActor } from '../hooks/useActor';
import type { SubmitContactMessage } from '../backend';

const services = [
  'Web Scraping & Data Extraction',
  'Data Research & Market Intelligence',
  'Web Research & Data Collection',
  'Automated Data Collection System',
  'Competitor & Business Research',
  'Lead Generation Data',
  'Data Cleaning & Validation',
  'Custom Data Solution',
];

const budgets = ['Under $50', '$50 – $200', '$200 – $500', '$500 – $1,000', '$1,000+'];

export default function ContactSection() {
  const [isVisible, ref] = useScrollAnimation();
  const { actor } = useActor();

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!form.name.trim() || !form.email.trim() || !form.service || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('⚠ Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('error');
      setErrorMsg('⚠ Please enter a valid email address.');
      return;
    }

    if (!actor) {
      setStatus('error');
      setErrorMsg('⚠ Connection error. Please try again.');
      return;
    }

    setSubmitting(true);
    setStatus('idle');

    try {
      const payload: SubmitContactMessage = {
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim() || undefined,
        budget: form.budget || 'Not specified',
        service: [form.service],
        message: form.message.trim(),
      };
      await actor.submitContactMessage(payload);
      setStatus('success');
      setForm({ name: '', email: '', company: '', budget: '', service: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      const msg = err instanceof Error ? err.message : String(err);
      setErrorMsg(`⚠ ${msg || 'Submission failed. Please try again.'}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-layout">
        {/* Info */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`contact-info reveal left ${isVisible ? 'visible' : ''}`}
        >
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">Let's Work<br /><em>Together</em></h2>
          <p className="section-desc">Have a data project in mind? Send a message and we'll get back within 24 hours with a plan tailored to your needs.</p>

          <div className="contact-detail-list">
            {[
              { icon: '✉️', label: 'Email', val: 'contact@datanexresearch.com', href: 'mailto:contact@datanexresearch.com' },
              { icon: '🌐', label: 'Website', val: 'www.datanexresearch.com', href: '#' },
              { icon: '👤', label: 'Founder', val: 'Jay Gohil — Data Research Specialist', href: null },
              { icon: '📍', label: 'Location', val: 'India · Serving Global Clients', href: null },
              { icon: '🕐', label: 'Response Time', val: 'Within 24 hours', href: null },
              { icon: '📅', label: 'Founded', val: '2023 · 3+ Years Experience', href: null },
            ].map((d) => (
              <div key={d.label} className="contact-detail">
                <span className="cd-icon">{d.icon}</span>
                <div>
                  <div className="cd-label">{d.label}</div>
                  <div className="cd-val">
                    {d.href ? <a href={d.href}>{d.val}</a> : d.val}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-social">
            {[
              { label: 'in', title: 'LinkedIn' },
              { label: 'Uw', title: 'Upwork' },
              { label: 'Fv', title: 'Fiverr' },
              { label: '✉', title: 'Email' },
            ].map((s) => (
              <a key={s.title} href="#contact" className="social-btn" title={s.title}>{s.label}</a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className={`contact-form-wrap reveal ${isVisible ? 'visible' : ''}`}>
          <div className="form-title">Send a Message</div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  name="company"
                  className="form-input"
                  placeholder="Your Company"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Budget Range</label>
                <select
                  name="budget"
                  className="form-select"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget...</option>
                  {budgets.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div className="form-group form-group-full">
                <label className="form-label">Service Needed *</label>
                <select
                  name="service"
                  className="form-select"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group form-group-full">
                <label className="form-label">Project Details *</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us about your data needs — target website, volume, format (Excel/CSV/JSON), timeline, and any specific requirements..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className={`form-submit ${submitting ? 'loading' : ''}`}
              disabled={submitting}
            >
              <span>{submitting ? 'Sending...' : 'Send Message →'}</span>
            </button>

            {status === 'success' && (
              <div className="form-msg form-msg-success">
                ✅ Message sent! Jay will get back to you within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="form-msg form-msg-error">{errorMsg}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
