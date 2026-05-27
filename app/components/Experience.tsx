"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data";

const roleLabel = (role: string) =>
  role.includes("Co-op") ? "Co-op"
  : role.includes("Intern") ? "Intern"
  : role.includes("II") ? "SWE II"
  : "SWE I";

export default function Experience() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const exp = experience[active];
  const isExpanded = expanded[exp.id] ?? false;
  const visibleBullets = exp.collapse > 0 && !isExpanded
    ? exp.bullets.slice(0, exp.bullets.length - exp.collapse)
    : exp.bullets;

  function select(i: number) {
    setActive(i);
    setExpanded({});
  }

  return (
    <section id="experience" style={{ padding: "7rem 0" }}>
      <div className="page-wrap">
        <p className="section-label">
          <span className="section-label-slash">//</span>experience
        </p>

        <div className="exp-layout">
          {/* Sidebar */}
          <div className="exp-sidebar">
            {experience.map((e, i) => (
              <button key={e.id} onClick={() => select(i)} className="exp-nav-btn">
                <div className={`exp-nav-company ${i === active ? "active" : "inactive"}`}>
                  {e.company}
                </div>
                <div className="exp-nav-role">
                  {roleLabel(e.role)} · {e.period.split(" – ")[1]}
                </div>
                <div className={`exp-nav-dot ${i === active ? "active" : "inactive"}`} />
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="exp-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}, {exp.location}</div>
                <div className="exp-period">{exp.period}</div>

                <ul className="exp-bullets">
                  {visibleBullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="exp-bullet"
                    >
                      <span dangerouslySetInnerHTML={{
                        __html: bullet.replace(
                          /(\d[\d,]*[\+%KxX]+|\d+\.\d+s|15\+|500K\+|100\+)/g,
                          "<strong>$1</strong>"
                        )
                      }} />
                    </motion.li>
                  ))}
                </ul>

                {exp.collapse > 0 && (
                  <button
                    onClick={() => setExpanded(prev => ({ ...prev, [exp.id]: !isExpanded }))}
                    className="exp-expand-btn"
                  >
                    <span style={{
                      fontSize: "10px",
                      display: "inline-block",
                      transition: "transform 0.2s",
                      transform: isExpanded ? "rotate(180deg)" : "none",
                    }}>▾</span>
                    {isExpanded ? "show less" : `+${exp.collapse} more`}
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
