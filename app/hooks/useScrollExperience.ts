"use client";
import { useEffect, useRef, useState } from "react";

export function useScrollExperience(count: number) {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const locked = useRef(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    function onWheel(e: WheelEvent) {
      const rect = section!.getBoundingClientRect();
      const inView = rect.top <= 80 && rect.bottom >= window.innerHeight - 80;
      if (!inView) return;

      const now = Date.now();
      if (now - lastScroll.current < 600) return; // debounce
      lastScroll.current = now;

      const dir = e.deltaY > 0 ? 1 : -1;

      setActive((prev) => {
        const next = prev + dir;
        if (next < 0 || next >= count) {
          // release lock — let page scroll naturally
          locked.current = false;
          return prev;
        }
        // lock scroll
        locked.current = true;
        e.preventDefault();
        e.stopPropagation();
        return next;
      });
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [count]);

  return { active, setActive, sectionRef };
}
