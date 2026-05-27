"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, decimals = 0, duration = 900) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          function step(now: number) {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(parseFloat((target * eased).toFixed(decimals)));
            if (p < 1) requestAnimationFrame(step);
            else setValue(target);
          }
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals, duration]);

  return { value, ref };
}

// Used in the stats bar (hero)
export function StatBar({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const decimals = value % 1 !== 0 ? 1 : 0;
  const { value: current, ref } = useCountUp(value, decimals);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="stat-item" style={{ padding: "0 2rem" }}>
      <div className="stat-val">
        {decimals ? current.toFixed(decimals) : Math.round(current)}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// Used in project metrics row
export function StatMetric({ value, suffix, decimals, label }: {
  value: number; suffix: string; decimals: number; label: string;
}) {
  const { value: current, ref } = useCountUp(value, decimals);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="metric-val">{current.toFixed(decimals)}{suffix}</div>
      <div className="metric-label">{label}</div>
    </div>
  );
}
