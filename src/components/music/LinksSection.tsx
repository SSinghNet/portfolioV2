import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function LinksSection({ active }: { active: boolean }) {
  return (
    <div
      data-active-panel={active ? "" : undefined}
      className={`absolute inset-0 overflow-y-auto transition-opacity duration-[220ms] ease-in-out pt-[52px] pb-[100px] px-5 md:px-[60px] ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <h2 className="font-body font-bold text-[38px] mb-2 text-[var(--text-primary)]" style={{ letterSpacing: "-1px" }}>
        Links
      </h2>
      <div className="w-10 h-0.5 mb-10 bg-[var(--accent)]" />

      <div className="flex flex-col gap-2.5 max-w-[460px]">
        {siteConfig.musicConfig.links.map((link, i) => <LinkCard key={i} link={link} />)}
      </div>
    </div>
  );
}

function LinkCard({ link }: { link: (typeof siteConfig.musicConfig.links)[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center gap-3.5 rounded-lg px-5 py-4 no-underline transition-colors duration-150 bg-[var(--bg-card)] ${hovered ? "border border-[var(--accent-border)]" : "border border-[var(--border)]"}`}
    >
      <div className="w-9 h-9 rounded-[7px] flex items-center justify-center flex-shrink-0 bg-[var(--accent-muted)] border border-[var(--accent-border)]">
        <span className="font-code font-bold text-[9px] text-[var(--accent)]">
          {link.platform.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <div className="flex-1">
        <div className="font-body font-semibold text-[14px] text-[var(--text-primary)]">{link.platform}</div>
        <div className="font-code text-[11px] mt-0.5 text-[var(--text-muted)]">{link.handle}</div>
      </div>
      <span className="text-[14px] text-[var(--text-faint)]">→</span>
    </a>
  );
}
