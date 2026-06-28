import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function ProjectsSection({ active }: { active: boolean }) {
  return (
    <div
      data-active-panel={active ? "" : undefined}
      className={`absolute inset-0 overflow-y-auto transition-opacity duration-[220ms] ease-in-out pt-[52px] pb-[100px] px-5 md:px-[60px] ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <p className="font-code font-semibold text-[10px] tracking-[3px] uppercase mb-2 text-[var(--accent)]">Portfolio</p>
      <h2 className="font-body font-bold text-3xl mb-8 text-[var(--text-primary)]" style={{ letterSpacing: "-0.5px" }}>
        Projects
      </h2>

      <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {siteConfig.projects.map((proj, i) => <ProjectCard key={i} proj={proj} />)}
      </div>
    </div>
  );
}

function ProjectCard({ proj }: { proj: (typeof siteConfig.projects)[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex flex-col gap-3 rounded-[10px] p-5 transition-all duration-150 bg-[var(--bg-card)] ${hovered ? "border border-[var(--accent-border)] shadow-[0_4px_20px_var(--accent-muted)]" : "border border-[var(--border)]"}`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="font-body font-bold text-[15px] text-[var(--text-primary)]">{proj.title}</span>
        <div className="flex gap-1.5 flex-shrink-0">
          {proj.github && (
            <a href={proj.github} target="_blank" rel="noopener noreferrer"
              className="font-code font-semibold text-[10px] px-[7px] py-0.5 rounded-[3px] no-underline text-[var(--accent)] border border-[var(--accent-border)] hover:bg-[var(--accent-muted)]">
              GitHub
            </a>
          )}
          {proj.demo && (
            <a href={proj.demo} target="_blank" rel="noopener noreferrer"
              className="font-code font-semibold text-[10px] px-[7px] py-0.5 rounded-[3px] no-underline text-[var(--accent)] border border-[var(--accent-border)] hover:bg-[var(--accent-muted)]">
              Demo
            </a>
          )}
        </div>
      </div>

      <ul className="list-none p-0 m-0 flex flex-col gap-1.5">
        {proj.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className="text-[9px] leading-[1.9] flex-shrink-0 text-[var(--accent-border)]">▸</span>
            <span className="font-body text-[13px] leading-[1.6] text-[var(--text-muted)]">{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {proj.chips.map((chip, ci) => (
          <span key={ci} className="font-code font-semibold text-[10px] px-2 py-0.5 rounded-[3px] text-[var(--accent)] bg-[var(--accent-muted)] border border-[var(--accent-border)]">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
