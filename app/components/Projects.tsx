"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { StatMetric } from "./StatTile";
import { projects } from "../data";

const GhSvg = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const badgeClass: Record<string, string> = {
  live: "badge-live", building: "badge-building", planned: "badge-planned",
};
const badgeLabel: Record<string, string> = {
  live: "Live", building: "Building", planned: "Planned",
};
const nameClass: Record<string, string> = {
  green: "pname-green", blue: "pname-blue", purple: "pname-purple", yellow: "pname-yellow",
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 0" }}>
      <div className="page-wrap">
        <p className="section-label"><span className="section-label-slash">//</span>projects</p>
        <div className="projects-list">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="project-card"
            >
              <div className="project-top">
                <div>
                  <div className="project-meta">
                    <span className="project-num">{p.num} /</span>
                    <span className={`project-badge ${badgeClass[p.status]}`}>{badgeLabel[p.status]}</span>
                  </div>
                  <div className={`project-name ${nameClass[p.gradient]}`}>{p.name}</div>
                </div>
                <div className="project-links">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                      <ExternalLink size={12} />Live demo
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <GhSvg />Source
                  </a>
                </div>
              </div>

              <div className="project-body">
                <div className="project-insights">
                  {(["solves", "matters", "works"] as const).map((key) => (
                    <div key={key} className="insight-card">
                      <div className="insight-label">
                        {key === "solves" ? "What it solves" : key === "matters" ? "Why it matters" : "How it works"}
                      </div>
                      <p className="insight-text">{p.insights[key]}</p>
                    </div>
                  ))}
                </div>
                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {(p.metrics || p.target) && (
                <div className="project-metrics">
                  {p.metrics
                    ? p.metrics.map((m) => (
                        <StatMetric key={m.label} value={m.value} suffix={m.suffix} decimals={m.decimals} label={m.label} />
                      ))
                    : <p className="metric-note">{p.target}</p>
                  }
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
