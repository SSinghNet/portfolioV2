import { NavSection } from "@/layouts/AppShell";

interface SectionNavigatorProps {
  sections: NavSection[];
  active: string;
  onSelect: (id: string) => void;
  theme: "dev" | "music";
}

export default function SectionNavigator({ sections, active, onSelect }: SectionNavigatorProps) {
  const idx = sections.findIndex((s) => s.id === active);
  const prev = idx > 0 ? sections[idx - 1] : null;
  const next = idx < sections.length - 1 ? sections[idx + 1] : null;

  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between h-14 px-5 md:px-[60px]"
      style={{ background: "var(--nav-gradient)" }}
    >
      <button
        disabled={!prev}
        onClick={() => prev && onSelect(prev.id)}
        className="font-code font-semibold text-[11px] tracking-wide border-0 bg-transparent cursor-pointer transition-colors duration-150 disabled:invisible text-[var(--text-muted)] hover:text-[var(--text-primary)]"
      >
        ← {prev?.label.toUpperCase()}
      </button>

      <button
        disabled={!next}
        onClick={() => next && onSelect(next.id)}
        className="font-code font-semibold text-[11px] tracking-wide border-0 bg-transparent cursor-pointer transition-colors duration-150 disabled:invisible text-[var(--accent)] hover:text-[var(--accent-strong)]"
      >
        {next?.label.toUpperCase()} →
      </button>
    </div>
  );
}
