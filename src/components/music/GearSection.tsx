import { siteConfig } from "@/config/site";

export default function GearSection({ active }: { active: boolean }) {
  return (
    <div
      data-active-panel={active ? "" : undefined}
      className={`absolute inset-0 overflow-y-auto transition-opacity duration-[220ms] ease-in-out pt-[52px] pb-[100px] px-5 md:px-[60px] ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <h2 className="font-body font-bold text-[38px] mb-2 text-[var(--text-primary)]" style={{ letterSpacing: "-1px" }}>
        Gear
      </h2>
      <div className="w-10 h-0.5 mb-10 bg-[var(--accent)]" />

      <div className="flex flex-col gap-8 max-w-[520px]">
        <GearCategory label="Hardware" items={siteConfig.musicConfig.gear.hardware} />
        <GearCategory label="Software" items={siteConfig.musicConfig.gear.software} />
      </div>
    </div>
  );
}

function GearCategory({ label, items }: { label: string; items: { name: string; type: string }[] }) {
  return (
    <div>
      <p className="font-code font-semibold text-[10px] tracking-[2px] uppercase mb-3 text-[var(--accent)]" style={{ opacity: 0.6 }}>
        {label}
      </p>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-[7px] px-[18px] py-3.5 bg-[var(--bg-card)] border border-[var(--border)]"
          >
            <span className="font-body font-semibold text-[14px] text-[var(--text-primary)]">{item.name}</span>
            <span className="font-code text-[11px] text-[var(--text-muted)]">{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
