import { useState } from "react";
import { siteConfig } from "@/config/site";

const BAR_HEIGHTS = [10, 28, 18, 36, 14, 24, 32, 16, 28, 20, 36, 12];
const BAR_OPACITIES = [0.35, 1, 0.6, 1, 0.45, 0.8, 0.95, 0.5, 0.85, 0.65, 1, 0.4];

export default function ProductionsSection({ active }: { active: boolean }) {
  return (
    <div
      data-active-panel={active ? "" : undefined}
      className={`absolute inset-0 overflow-y-auto transition-opacity duration-[220ms] ease-in-out pt-[52px] pb-[100px] px-5 md:px-[60px] ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <h2 className="font-body font-bold text-[38px] mb-2 text-[var(--text-primary)]" style={{ letterSpacing: "-1px" }}>
        Productions
      </h2>
      <div className="w-10 h-0.5 mb-10 bg-[var(--accent)]" />

      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
        {siteConfig.musicConfig.productions.map((track, i) => <TrackCard key={i} track={track} />)}
      </div>
    </div>
  );
}

function TrackCard({ track }: { track: (typeof siteConfig.musicConfig.productions)[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-lg p-5 transition-colors duration-150 bg-[var(--bg-card)] ${hovered ? "border border-[var(--accent-border)]" : "border border-[var(--border)]"}`}
    >
      {/* Waveform */}
      <div className="flex items-end gap-0.5 h-10 mb-3.5">
        {BAR_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="w-[3px] rounded-[1px] bg-[var(--accent)] flex-shrink-0"
            style={{ height: h, opacity: BAR_OPACITIES[i] }}
          />
        ))}
      </div>
      <div className="font-body font-bold text-[15px] mb-1.5 text-[var(--text-primary)]">{track.title}</div>
      <div className="font-code text-[11px] text-[var(--text-muted)]">{track.bpm} BPM · {track.key} · {track.duration}</div>
    </div>
  );
}
