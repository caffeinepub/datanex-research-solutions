import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ProfileCard() {
  const [isVisible, ref] = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`profile-card-wrap reveal left ${isVisible ? 'visible' : ''}`}
    >
      <div className="profile-card">
        <div className="profile-ring-outer">
          <div className="profile-ring-inner">
            <div className="profile-avatar">
              <span className="profile-initials">JG</span>
            </div>
          </div>
        </div>

        <div className="profile-info">
          <h3 className="profile-name">Jay Gohil</h3>
          <p className="profile-title">Data Research Specialist & Founder</p>
          <div className="profile-badges">
            <span className="profile-badge founded">Est. 2023</span>
            <span className="profile-badge experience">3+ Years</span>
            <span className="profile-badge location">🇮🇳 India</span>
          </div>
        </div>

        <div className="profile-platforms">
          <span className="platform-label">Available on</span>
          <div className="platform-icons">
            <a href="#contact" className="platform-btn upwork" title="Upwork">
              <span>Uw</span>
            </a>
            <a href="#contact" className="platform-btn fiverr" title="Fiverr">
              <span>Fv</span>
            </a>
            <a href="#contact" className="platform-btn linkedin" title="LinkedIn">
              <span>in</span>
            </a>
          </div>
        </div>

        <div className="profile-stats-row">
          <div className="profile-stat">
            <span className="profile-stat-val">60+</span>
            <span className="profile-stat-lbl">Projects</span>
          </div>
          <div className="profile-stat-divider" />
          <div className="profile-stat">
            <span className="profile-stat-val">2.4M+</span>
            <span className="profile-stat-lbl">Records</span>
          </div>
          <div className="profile-stat-divider" />
          <div className="profile-stat">
            <span className="profile-stat-val">7+</span>
            <span className="profile-stat-lbl">Industries</span>
          </div>
        </div>
      </div>

      <div className="about-deco-card">
        <div className="about-deco-val">99.2%</div>
        <div className="about-deco-lbl">Data Accuracy</div>
      </div>
    </div>
  );
}
