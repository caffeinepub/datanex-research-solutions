import { useEffect, useState } from 'react';

export function useCounterAnimation(
  target: number,
  trigger: boolean,
  duration: number = 1800,
  decimals: number = 0
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const eased = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (target - startValue) * eased;

      setValue(decimals ? parseFloat(currentValue.toFixed(decimals)) : Math.floor(currentValue));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, trigger, duration, decimals]);

  return value;
}
