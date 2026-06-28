import React, { useEffect, useRef, useCallback } from "react";
import { CoinPortalIcon } from "@/components/icons";
import SectionNavigator from "@/components/SectionNavigator";

export interface NavSection {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface AppShellProps {
  theme: "dev" | "music";
  sections: NavSection[];
  active: string;
  onSelect: (id: string) => void;
  portalHref?: string;
  children: React.ReactNode;
}

export default function AppShell({ theme, sections, active, onSelect, portalHref, children }: AppShellProps) {
  const mainRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    document.documentElement.dataset.portfolio = theme;
    return () => { delete document.documentElement.dataset.portfolio; };
  }, [theme]);

  const handleWheel = useCallback((e: WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 800) return;

    const panel = mainRef.current?.querySelector("[data-active-panel]") as HTMLElement | null;
    if (!panel) return;

    const atBottom = panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 2;
    const atTop = panel.scrollTop <= 0;
    const idx = sections.findIndex((s) => s.id === active);

    if (e.deltaY > 0 && atBottom && idx < sections.length - 1) {
      lastScrollTime.current = now;
      onSelect(sections[idx + 1].id);
    } else if (e.deltaY < 0 && atTop && idx > 0) {
      lastScrollTime.current = now;
      onSelect(sections[idx - 1].id);
    }
  }, [active, sections, onSelect]);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: true });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const isActive = (id: string) => id === active;

  const navBtn = (s: NavSection) => (
    <button
      key={s.id}
      title={s.label}
      onClick={() => onSelect(s.id)}
      className={`flex items-center justify-center w-9 h-9 rounded-lg border-0 cursor-pointer transition-all duration-150 ${
        isActive(s.id)
          ? "bg-[var(--accent-muted)] text-[var(--accent)]"
          : "bg-transparent text-[var(--text-faint)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent-strong)]"
      }`}
    >
      {s.icon}
    </button>
  );

  const coinPortal = portalHref ? (
    <a
      href={portalHref}
      title={theme === "dev" ? "Music Portfolio" : "Dev Portfolio"}
      className="flex items-center justify-center w-9 h-9 text-[var(--accent-border)] hover:text-[var(--accent)] transition-colors duration-[350ms]"
    >
      <CoinPortalIcon size={18} />
    </a>
  ) : null;

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-page-gradient font-body">
      {/* Mobile top bar */}
      <div
        className="flex md:hidden items-center justify-around flex-shrink-0 px-3 bg-[var(--bg-sidebar)]"
        style={{ height: 52 }}
      >
        {sections.map(navBtn)}
        {coinPortal}
      </div>

      {/* Desktop sidebar */}
      <div
        className="hidden md:flex flex-col items-center flex-shrink-0 py-5 gap-1.5 bg-[var(--bg-sidebar)]"
        style={{ width: 56 }}
      >
<div className="flex flex-col gap-1.5">
          {sections.map(navBtn)}
        </div>
        <div className="flex-1" />
        {coinPortal}
      </div>

      {/* Main content */}
      <main ref={mainRef} className="flex-1 relative overflow-hidden bg-page-gradient">
        {children}
        <SectionNavigator sections={sections} active={active} onSelect={onSelect} theme={theme} />
      </main>
    </div>
  );
}
