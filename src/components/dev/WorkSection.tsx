import { siteConfig } from "@/config/site";

interface WorkSectionProps {
  active: boolean;
}

const opacities = [1, 0.88, 0.68];

export default function WorkSection({ active }: WorkSectionProps) {
  return (
    <div
      data-active-panel={active ? "" : undefined}
      className={`absolute inset-0 overflow-y-auto transition-opacity duration-[220ms] ease-in-out pt-[52px] pb-[100px] px-5 md:px-[60px] ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <p className="font-code font-semibold text-[10px] tracking-[3px] uppercase mb-2 text-[var(--accent)]">
        Experience
      </p>
      <h2 className="font-body font-bold text-3xl mb-12 text-[var(--text-primary)]" style={{ letterSpacing: "-0.5px" }}>
        Work
      </h2>

      {/* Education */}
      <div className="mb-10">
        <p className="font-code font-semibold text-[10px] tracking-[2px] uppercase mb-3 text-[var(--text-faint)]">
          Education
        </p>
        {siteConfig.education.map((e, i) => (
          <div key={i} className="mb-2">
            <div className="font-body font-bold text-[15px] text-[var(--text-primary)]">{e.institution}</div>
            <div className="font-body text-[13px] mt-0.5 text-[var(--text-muted)]">{e.degree}</div>
            <div className="font-code text-[10px] tracking-[1px] mt-1 text-[var(--text-faint)]">{e.dates} · {e.location}</div>
          </div>
        ))}
      </div>

      <div className="w-full h-px mb-10 bg-[var(--border)]" />

      {/* Timeline */}
      <div className="flex flex-col gap-10 pl-8 ml-1 border-l-2 border-[var(--border)]">
        {siteConfig.work.map((job, i) => {
          const isLatest = i === 0;
          const dotSize = isLatest ? 10 : 8;
          const dotBg = isLatest ? "var(--accent)" : "var(--text-faint)";
          const dotShadow = isLatest ? "0 0 0 3px var(--accent-muted)" : "none";

          return (
            <div key={i} className="relative" style={{ opacity: opacities[i] ?? 0.6 }}>
              {/* Dot */}
              <div
                className="absolute rounded-full"
                style={{ left: -(32 + 1 + dotSize / 2), top: 6, width: dotSize, height: dotSize, background: dotBg, boxShadow: dotShadow }}
              />

              <div className={`font-code font-semibold text-[10px] tracking-[2px] uppercase mb-1 ${isLatest ? "text-[var(--accent)]" : "text-[var(--text-faint)]"}`}>
                {job.dates}
              </div>
              <div className="font-body font-bold text-[19px] mb-0.5 text-[var(--text-primary)]">
                {job.role}
              </div>
              <div className="font-body font-medium text-[13px] mb-3.5 text-[var(--text-muted)]">
                {job.company}
              </div>

              <ul className="list-none p-0 m-0 flex flex-col gap-2 mb-3.5">
                {job.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-2.5 items-start">
                    <span className="text-[9px] leading-[1.9] flex-shrink-0 text-[var(--accent-border)]">▸</span>
                    <span className={`font-body leading-[1.65] ${isLatest ? "text-[var(--text-muted)]" : "text-[var(--text-faint)]"}`} style={{ fontSize: isLatest ? 14 : 13 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {job.chips.map((chip, ci) => (
                  <span
                    key={ci}
                    className="font-code font-semibold text-[10px] px-2 py-0.5 rounded-[3px] text-[var(--accent)] bg-[var(--accent-muted)] border border-[var(--accent-border)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
