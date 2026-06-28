import { siteConfig } from "@/config/site";

interface HomeSectionProps {
  active: boolean;
  onNavigate: (id: string) => void;
}

export default function MusicHomeSection({ active, onNavigate }: HomeSectionProps) {
  return (
    <div
      data-active-panel={active ? "" : undefined}
      className={`absolute inset-0 overflow-y-auto transition-opacity duration-[220ms] ease-in-out ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="min-h-full flex flex-col justify-center px-5 md:px-[60px]">
        <div className="max-w-[560px]">
          <h1
            className="font-body font-bold leading-none mb-5 text-[var(--text-primary)]"
            style={{ fontSize: "clamp(80px, 10vw, 160px)", letterSpacing: "-4px" }}
          >
            SMT
          </h1>

          <p className="font-code font-semibold text-[11px] tracking-[4px] uppercase mb-5 text-[var(--accent)]">
            DJ · Producer
          </p>

          <div className="w-11 h-0.5 mb-5 bg-[var(--accent)]" />

          <p className="font-body text-[15px] leading-[1.7] mb-9 max-w-[440px] text-[var(--text-muted)]">
            {siteConfig.musicConfig.bio}
          </p>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => onNavigate("mixes")}
              className="font-body font-bold text-[13px] px-6 py-3 rounded-[7px] border-0 cursor-pointer transition-opacity duration-150 bg-[var(--accent)] text-[var(--bg-sidebar)] hover:opacity-85"
            >
              Listen
            </button>

            <button
              onClick={() => onNavigate("links")}
              className="font-body font-semibold text-[13px] px-6 py-3 rounded-[7px] bg-transparent cursor-pointer transition-colors duration-150 text-[var(--accent)] border border-[var(--accent-border)] hover:bg-[var(--accent-muted)]"
            >
              Links
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
