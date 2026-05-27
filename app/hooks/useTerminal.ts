"use client";
import { useEffect, useRef, useState } from "react";
import { terminalLines } from "../data";

type Line = { type: "cmd" | "out"; text: string };

export function useTerminal() {
  const [lines, setLines] = useState<{ type: "cmd" | "out"; text: string }[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [currentType, setCurrentType] = useState<"cmd" | "out">("cmd");
  const [done, setDone] = useState(false);
  const lineRef = useRef(0);
  const charRef = useRef(0);

  useEffect(() => {
    const seq: Line[] = terminalLines;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const li = lineRef.current;
      if (li >= seq.length) {
        setDone(true);
        return;
      }
      const item = seq[li];
      const ci = charRef.current;

      if (ci === 0) {
        setCurrentType(item.type);
        setCurrentText("");
      }

      if (ci < item.text.length) {
        setCurrentText(item.text.slice(0, ci + 1));
        charRef.current = ci + 1;
        const delay = item.type === "cmd" ? 35 + Math.random() * 25 : 8 + Math.random() * 7;
        timeout = setTimeout(tick, delay);
      } else {
        setLines((prev) => [...prev, { type: item.type, text: item.text }]);
        setCurrentText("");
        charRef.current = 0;
        lineRef.current = li + 1;
        const pause = item.type === "cmd" ? 280 : 180;
        timeout = setTimeout(tick, pause);
      }
    }

    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  return { lines, currentText, currentType, done };
}
