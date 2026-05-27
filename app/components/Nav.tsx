"use client";
import { meta } from "../data";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <nav className="site-nav">
      <a href="#" className="nav-logo">UM</a>
      <div className="nav-links-row">
        <ul className="nav-links-list">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="/Utkarsh_Mittal_Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume">
          resume ↗
        </a>
      </div>
    </nav>
  );
}
