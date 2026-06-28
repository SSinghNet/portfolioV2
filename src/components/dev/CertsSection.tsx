import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function CertsSection({ active }: { active: boolean }) {
  const allSkills = [...siteConfig.skills.languages, ...siteConfig.skills.frameworks, ...siteConfig.skills.dev];

  return (
    <div
      data-active-panel={active ? "" : undefined}
      className={`absolute inset-0 overflow-y-auto transition-opacity duration-[220ms] ease-in-out pt-[52px] pb-[100px] px-5 md:px-[60px] ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <p className="font-code font-semibold text-[10px] tracking-[3px] uppercase mb-2 text-[var(--accent)]">Credentials</p>
      <h2 className="font-body font-bold text-3xl mb-8 text-[var(--text-primary)]" style={{ letterSpacing: "-0.5px" }}>
        Certifications
      </h2>

      <div className="flex flex-col gap-2.5 mb-12">
        {siteConfig.certificates.map((cert, i) => <CertRow key={i} cert={cert} />)}
      </div>

      <p className="font-code font-semibold text-[10px] tracking-[3px] uppercase mb-4 text-[var(--accent)]">Skills</p>
      <div className="flex flex-wrap gap-2">
        {allSkills.map((skill, i) => (
          <span key={i} className="font-body font-medium text-[13px] px-3 py-1.5 rounded-md bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)]">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function CertRow({ cert }: { cert: (typeof siteConfig.certificates)[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center gap-4 rounded-[10px] px-5 py-[18px] no-underline transition-colors duration-150 bg-[var(--bg-card)] ${hovered ? "border border-[var(--accent-border)]" : "border border-[var(--border)]"}`}
    >
      <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 bg-[var(--accent-muted)] border border-[var(--accent-border)]">
        {cert.image
          ? <img src={`./${cert.image}`} alt={cert.name} className="w-9 h-9 object-contain rounded" />
          : <span className="font-code font-bold text-[10px] text-[var(--accent)]">{(cert.provider ?? "C").charAt(0)}</span>
        }
      </div>
      <div className="flex-1">
        <div className="font-body font-semibold text-[14px] text-[var(--text-primary)]">{cert.name}</div>
        <div className="font-body text-[12px] mt-0.5 text-[var(--text-faint)]">
          {cert.provider} · Issued {cert.issueDate}{cert.expiryDate ? ` · Expires ${cert.expiryDate}` : ""}
        </div>
      </div>
      <span className="font-code font-semibold text-[10px] tracking-[1px] uppercase text-[var(--accent)]">Active</span>
    </a>
  );
}
