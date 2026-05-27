"use client";
import { Mail, Phone, FileText } from "lucide-react";
import { meta } from "../data";

const GhIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const LiIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
  </svg>
);

export default function Contact() {
  return (
    <>
      <section id="contact" style={{ padding: "7rem 0" }}>
        <div className="page-wrap">
          <p className="section-label"><span className="section-label-slash">//</span>contact</p>
          <div className="contact-layout">
            <div>
              <p style={{ fontSize: "16px", color: "#72726d", lineHeight: 1.8, marginBottom: "2rem" }}>
                Open to SDE, backend, and full-stack engineering roles, mid-level to senior.
                I respond to every message, usually within a day.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a href={`mailto:${meta.email}`} className="btn btn-primary">
                  <Mail size={13} />Send email
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <FileText size={13} />Download resume
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-label">find me on</div>
              <div className="contact-links">
                {[
                  { href: `mailto:${meta.email}`, Icon: Mail, label: meta.email },
                  { href: meta.github, Icon: GhIcon, label: "github.com/Utkarsh272" },
                  { href: meta.linkedin, Icon: LiIcon, label: "linkedin.com/in/utkarsh-mittal27" },
                  { href: `tel:${meta.phone.replace(/-/g, "")}`, Icon: Phone, label: meta.phone },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="contact-link"
                  >
                    <span className="contact-link-icon"><Icon /></span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <span>Utkarsh Mittal · Brooklyn, NY</span>
          <span suppressHydrationWarning>
            {(() => {
              const start = new Date(2020, 6, 1);
              const now = new Date();
              let mo = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
              const yr = Math.floor(mo / 12);
              mo = mo % 12;
              return `uptime ${yr}y ${mo}m · 2025`;
            })()}
          </span>
        </div>
      </footer>
    </>
  );
}
