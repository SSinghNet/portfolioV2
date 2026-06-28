import { useState } from "react";
import { siteConfig } from "@/config/site";

const contactLinks = [
  { platform: "Email",    handle: siteConfig.links.email,        url: `mailto:${siteConfig.links.email}`, label: "GML" },
  { platform: "GitHub",   handle: "SSinghNet",                   url: siteConfig.links.github,             label: "GH"  },
  { platform: "LinkedIn", handle: "sumeet-singh-net",            url: siteConfig.links.linkedin,           label: "LI"  },
];

export default function ContactSection({ active }: { active: boolean }) {
  return (
    <div
      data-active-panel={active ? "" : undefined}
      className={`absolute inset-0 overflow-y-auto transition-opacity duration-[220ms] ease-in-out pt-[52px] pb-[100px] px-5 md:px-[60px] ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <p className="font-code font-semibold text-[10px] tracking-[3px] uppercase mb-2 text-[var(--accent)]">Get in touch</p>
      <h2 className="font-body font-bold text-3xl mb-3 text-[var(--text-primary)]" style={{ letterSpacing: "-0.5px" }}>
        Contact
      </h2>
      <p className="font-body text-[15px] leading-[1.7] mb-8 max-w-[440px] text-[var(--text-muted)]">
        Open to new opportunities, collaborations, and interesting conversations.
      </p>

      <div className="flex flex-col gap-2.5 max-w-[460px] mb-8">
        {contactLinks.map((link, i) => <ContactCard key={i} {...link} />)}
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg no-underline font-body font-semibold text-[13px] transition-colors duration-150 bg-[var(--text-primary)] text-[var(--bg-card)] hover:bg-[var(--accent-strong)]"
      >
        Download Resume
      </a>
    </div>
  );
}

function ContactCard({ platform, handle, url, label }: { platform: string; handle: string; url: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center gap-3.5 rounded-[10px] px-[18px] py-[15px] no-underline transition-all duration-150 bg-[var(--bg-card)] ${hovered ? "border border-[var(--accent-border)] shadow-[0_2px_12px_var(--accent-muted)]" : "border border-[var(--border)]"}`}
    >
      <div className="w-[34px] h-[34px] rounded-[7px] flex items-center justify-center flex-shrink-0 bg-[var(--accent-muted)] border border-[var(--accent-border)]">
        <span className="font-code font-bold text-[9px] text-[var(--accent)]">{label}</span>
      </div>
      <div className="flex-1">
        <div className="font-body font-semibold text-[13px] text-[var(--text-primary)]">{platform}</div>
        <div className="font-code text-[11px] mt-0.5 text-[var(--text-faint)]">{handle}</div>
      </div>
      <span className="text-[14px] text-[var(--text-faint)]">→</span>
    </a>
  );
}
