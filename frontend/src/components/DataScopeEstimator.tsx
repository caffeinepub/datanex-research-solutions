import { useState, useMemo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const websiteTypes = ['E-commerce', 'Business Directory', 'Social Platform', 'News & Media', 'Real Estate', 'Job Boards', 'Custom'];
const outputFormats = ['CSV', 'Excel', 'JSON', 'MySQL'];
const frequencies = ['One-time', 'Weekly', 'Monthly', 'Daily'];

function getComplexity(volume: number, freq: string): { label: string; color: string } {
  if (volume <= 5000 && freq === 'One-time') return { label: 'Simple', color: '#2ECC71' };
  if (volume <= 50000 && (freq === 'One-time' || freq === 'Monthly')) return { label: 'Moderate', color: '#C9A84C' };
  if (volume <= 200000) return { label: 'Complex', color: '#E8C97A' };
  return { label: 'Enterprise', color: '#E74C3C' };
}

function getDelivery(volume: number, freq: string): string {
  if (freq === 'Daily') return '24–48 hours setup + daily delivery';
  if (volume <= 5000) return '1–2 business days';
  if (volume <= 50000) return '3–5 business days';
  if (volume <= 200000) return '5–10 business days';
  return 'Custom timeline — contact us';
}

function getPrice(volume: number, freq: string): string {
  if (freq === 'Daily') return 'Custom quote';
  if (volume <= 5000) return 'From $49';
  if (volume <= 50000) return 'From $149';
  if (volume <= 200000) return 'From $399';
  return 'Custom quote';
}

export default function DataScopeEstimator() {
  const [isVisible, ref] = useScrollAnimation();
  const [websiteType, setWebsiteType] = useState('E-commerce');
  const [volume, setVolume] = useState(10000);
  const [outputFormat, setOutputFormat] = useState('CSV');
  const [frequency, setFrequency] = useState('One-time');

  const complexity = useMemo(() => getComplexity(volume, frequency), [volume, frequency]);
  const delivery = useMemo(() => getDelivery(volume, frequency), [volume, frequency]);
  const price = useMemo(() => getPrice(volume, frequency), [volume, frequency]);

  const formatVolume = (v: number) => {
    if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`;
    if (v >= 1000) return `${(v / 1000).toFixed(0)}K`;
    return v.toString();
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="estimator" className="estimator-section">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`estimator-inner reveal ${isVisible ? 'visible' : ''}`}
      >
        <div className="estimator-header">
          <span className="section-eyebrow">Free Tool</span>
          <h2 className="section-title">Data Scope <em>Estimator</em></h2>
          <p className="section-desc">Configure your data project and get an instant delivery estimate.</p>
        </div>

        <div className="estimator-layout">
          <div className="estimator-controls">
            {/* Website Type */}
            <div className="estimator-field">
              <label className="estimator-label">Target Website Type</label>
              <div className="estimator-options">
                {websiteTypes.map((t) => (
                  <button
                    key={t}
                    className={`estimator-option ${websiteType === t ? 'active' : ''}`}
                    onClick={() => setWebsiteType(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Volume Slider */}
            <div className="estimator-field">
              <label className="estimator-label">
                Data Volume: <span className="estimator-value">{formatVolume(volume)} records</span>
              </label>
              <input
                type="range"
                min={1000}
                max={1000000}
                step={1000}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="estimator-slider"
              />
              <div className="estimator-slider-labels">
                <span>1K</span>
                <span>250K</span>
                <span>500K</span>
                <span>1M</span>
              </div>
            </div>

            {/* Output Format */}
            <div className="estimator-field">
              <label className="estimator-label">Output Format</label>
              <div className="estimator-options">
                {outputFormats.map((f) => (
                  <button
                    key={f}
                    className={`estimator-option ${outputFormat === f ? 'active' : ''}`}
                    onClick={() => setOutputFormat(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency */}
            <div className="estimator-field">
              <label className="estimator-label">Collection Frequency</label>
              <div className="estimator-options">
                {frequencies.map((f) => (
                  <button
                    key={f}
                    className={`estimator-option ${frequency === f ? 'active' : ''}`}
                    onClick={() => setFrequency(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Panel */}
          <div className="estimator-result">
            <div className="estimator-result-header">
              <span className="estimator-result-title">Project Estimate</span>
              <span
                className="complexity-badge"
                style={{ color: complexity.color, borderColor: complexity.color }}
              >
                {complexity.label}
              </span>
            </div>

            <div className="estimator-result-rows">
              <div className="estimator-result-row">
                <span className="er-label">Website Type</span>
                <span className="er-value">{websiteType}</span>
              </div>
              <div className="estimator-result-row">
                <span className="er-label">Volume</span>
                <span className="er-value">{formatVolume(volume)} records</span>
              </div>
              <div className="estimator-result-row">
                <span className="er-label">Format</span>
                <span className="er-value">{outputFormat}</span>
              </div>
              <div className="estimator-result-row">
                <span className="er-label">Frequency</span>
                <span className="er-value">{frequency}</span>
              </div>
            </div>

            <div className="estimator-delivery">
              <div className="estimator-delivery-label">Estimated Delivery</div>
              <div className="estimator-delivery-value">{delivery}</div>
            </div>

            <div className="estimator-price">
              <div className="estimator-price-label">Starting Price</div>
              <div className="estimator-price-value">{price}</div>
            </div>

            <button className="estimator-cta" onClick={scrollToContact}>
              Request This Dataset →
            </button>

            <p className="estimator-note">* Final pricing depends on site complexity and data structure</p>
          </div>
        </div>
      </div>
    </section>
  );
}
