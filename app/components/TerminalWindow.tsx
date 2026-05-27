"use client";
import { useTerminal } from "../hooks/useTerminal";

export default function TerminalWindow() {
  const { lines, currentText, currentType, done } = useTerminal();

  return (
    <div className="term-window">
      <div className="term-titlebar">
        <div className="term-dots">
          <span className="term-dot term-dot-r" />
          <span className="term-dot term-dot-y" />
          <span className="term-dot term-dot-g" />
        </div>
        <span className="term-title">utkarsh@dev ~ zsh</span>
      </div>
      <div className="term-screen">
        {lines.map((line, i) => (
          <div key={i}>
            <span className={line.type === "cmd" ? "term-cmd" : "term-out"}>
              {line.text}
            </span>
          </div>
        ))}
        {!done && (
          <div>
            <span className={currentType === "cmd" ? "term-cmd" : "term-out"}>
              {currentText}
            </span>
            <span className="term-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
