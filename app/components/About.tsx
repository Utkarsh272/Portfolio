"use client";
import { motion } from "framer-motion";
import { skills } from "../data";

export default function About() {
  return (
    <>
      <section id="about" style={{ padding: "7rem 0 2rem" }}>
        <div className="page-wrap">
          <p className="section-label"><span className="section-label-slash">//</span>about</p>
          <div className="about-layout">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="origin-card"
              >
                I got hooked on distributed systems the day a production outage at Dell took down 500K
                daily transactions and the RCA pointed to a single unguarded hot path. I spent a week
                fixing it properly. I never looked at code the same way again.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                className="about-prose"
              >
                <p>
                  I&apos;m a software engineer who cares about the full stack: from the data model and API
                  contract, through the service layer and message queue, to the React UI consuming it.
                  Five years across Dell, Locomex, and Nokia has meant writing C#/.NET microservices,
                  LLM prompt chains, Spring Boot schedulers, and React frontends, sometimes in the same week.
                </p>
                <p>
                  The portfolio projects here are a sprint to build public proof-of-work across four
                  domains: AI retrieval, distributed storage, real-time collaboration, and backend
                  infrastructure. Each ships a deployed demo, a measured benchmark, and a{" "}
                  <a href="https://github.com/Utkarsh272" target="_blank" rel="noopener noreferrer" style={{ color: "#63b3ed" }}>
                    public repo
                  </a>{" "}
                  you can actually run.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  M.S. Computer Engineering, NYU Tandon (May 2026) · GPA 3.963.
                  B.Tech CS, Shiv Nadar University (2020).
                </p>
              </motion.div>
            </div>

            <div className="about-cards">
              {[
                {
                  label: "Education", dot: "dot-blue",
                  items: ["M.S. Computer Engineering · NYU · 2026", "B.Tech Computer Science · SNU · 2020"],
                },
                {
                  label: "I work well across", dot: "dot-yellow",
                  items: ["Backend systems & API design", "Distributed systems & data pipelines", "AI/LLM integration & prompt engineering", "Frontend (React/Next.js)", "Cloud infra & DevOps (AWS, Docker, Terraform)"],
                },
                {
                  label: "Looking for", dot: "dot-green",
                  items: ["SDE / Backend / Full-Stack roles", "Mid-level to senior", "New York area or remote"],
                },
              ].map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4 }}
                  className="about-card"
                >
                  <div className="about-card-label">{card.label}</div>
                  <ul className="about-card-list">
                    {card.items.map((item, i) => (
                      <li key={i} className="about-card-item">
                        <span className={`about-dot ${card.dot}`} />
                        {item.includes("NYU") ? (
                          <>
                            {item}
                            <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#68d391", marginLeft: "6px" }}>
                              3.963
                            </span>
                          </>
                        ) : item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" style={{ padding: "0 0 6rem" }}>
        <div className="page-wrap">
          <p className="section-label"><span className="section-label-slash">//</span>skills</p>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="skill-group">
                <div className="skill-group-title">{group.category}</div>
                <div className="skill-tags">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`skill-tag ${group.highlights.includes(tag) ? "skill-tag-hi" : ""}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
