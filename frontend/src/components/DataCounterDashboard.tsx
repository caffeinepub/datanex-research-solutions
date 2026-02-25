import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface StatCardProps {
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
  animate: boolean;
}

function StatCard({ target, suffix, label, decimals = 0, animate }: StatCardProps) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (animate && !started) {
      setStarted(true);
      const duration = 2000;
      const startTime = performance.now();
      const run = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        setValue(target * ease);
        if (progress < 1) requestAnimationFrame(run);
      };
      requestAnimationFrame(run);
    }
  }, [animate, started, target]);

  const display = decimals > 0 ? value.toFixed(1) : Math.floor(value).toString();

  return (
    <div className="counter-item">
      <div className="counter-num">
        {display}<span className="counter-suffix">{suffix}</span>
      </div>
      <div className="counter-lbl">{label}</div>
    </div>
  );
}

export default function DataCounterDashboard() {
  const [isVisible, ref] = useScrollAnimation();

  const stats = [
    { target: 2.4, suffix: 'M+', label: 'Records Scraped', decimals: 1 },
    { target: 60, suffix: '+', label: 'Projects Delivered', decimals: 0 },
    { target: 99.2, suffix: '%', label: 'Data Accuracy Rate', decimals: 1 },
    { target: 7, suffix: '+', label: 'Industries Served', decimals: 0 },
  ];

  return (
    <section id="counter" className="counter-section">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="counter-grid"
      >
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
            decimals={stat.decimals}
            animate={isVisible}
          />
        ))}
      </div>
    </section>
  );
}
