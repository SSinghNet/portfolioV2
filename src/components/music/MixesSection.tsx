import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function MixesSection({ active }: { active: boolean }) {
  return (
    <div
      data-active-panel={active ? "" : undefined}
      className={`absolute inset-0 overflow-y-auto transition-opacity duration-[220ms] ease-in-out pt-[52px] pb-[100px] px-5 md:px-[60px] ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <h2 className="font-body font-bold text-[38px] mb-2 text-[var(--text-primary)]" style={{ letterSpacing: "-1px" }}>
        Mixes
      </h2>
      <div className="w-10 h-0.5 mb-10 bg-[var(--accent)]" />

      <div className="flex flex-col gap-2.5 max-w-[640px]">
        {siteConfig.musicConfig.mixes.map((mix, i) => <MixRow key={i} mix={mix} latest={i === 0} />)}
      </div>

      <div className="mt-8 max-w-[640px] rounded-lg px-5 py-[18px] bg-[var(--accent-muted)] border border-[var(--accent-border)]">
        <p className="font-code text-[11px] text-[var(--text-muted)] m-0">
          Available for bookings — <span className="text-[var(--accent)]">reach out via Links</span>
        </p>
      </div>
    </div>
  );
}

function MixRow({ mix, latest }: { mix: (typeof siteConfig.musicConfig.mixes)[number]; latest: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center gap-[18px] rounded-lg px-[22px] py-5 transition-colors duration-150 bg-[var(--bg-card)] ${hovered ? "border border-[var(--accent-border)]" : "border border-[var(--border)]"}`}
    >
      {/* Play button */}
      <div
        className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-150 border border-[var(--accent)] ${hovered ? "bg-[var(--accent-muted)]" : ""}`}
        style={{ opacity: latest ? 1 : 0.5 }}
      >
        <div className="w-0 h-0 ml-[3px]" style={{ borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: "11px solid var(--accent)" }} />
      </div>

      <div className="flex-1">
        <div className="font-body font-semibold text-[15px] mb-1 text-[var(--text-primary)]">{mix.title}</div>
        <div className="font-code text-[11px] text-[var(--text-muted)]">{mix.metadata}</div>
      </div>

      <a
        href={mix.platformUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-code font-semibold text-[10px] px-2.5 py-[5px] rounded-[3px] no-underline flex-shrink-0 text-[var(--accent)] border border-[var(--accent-border)] hover:bg-[var(--accent-muted)] transition-colors duration-150"
      >
        {mix.platform}
      </a>
    </div>
  );
}
