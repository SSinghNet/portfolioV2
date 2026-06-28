import { useState } from "react";
import AppShell, { NavSection } from "@/layouts/AppShell";
import {
  NavHomeIcon,
  NavHeadphonesIcon,
  NavWaveformIcon,
  NavMixerIcon,
  NavShareIcon,
} from "@/components/icons";
import MusicHomeSection from "@/components/music/HomeSection";
import MixesSection from "@/components/music/MixesSection";
import ProductionsSection from "@/components/music/ProductionsSection";
import GearSection from "@/components/music/GearSection";
import LinksSection from "@/components/music/LinksSection";

const SECTIONS: NavSection[] = [
  { id: "home", label: "Home", icon: <NavHomeIcon /> },
  { id: "mixes", label: "Mixes", icon: <NavHeadphonesIcon /> },
  { id: "productions", label: "Productions", icon: <NavWaveformIcon /> },
  { id: "gear", label: "Gear", icon: <NavMixerIcon /> },
  { id: "links", label: "Links", icon: <NavShareIcon /> },
];

export default function MusicPage() {
  const [active, setActive] = useState("home");

  return (
    <AppShell
      theme="music"
      sections={SECTIONS}
      active={active}
      onSelect={setActive}
      portalHref="/dev"
    >
      <MusicHomeSection active={active === "home"} onNavigate={setActive} />
      <MixesSection active={active === "mixes"} />
      <ProductionsSection active={active === "productions"} />
      <GearSection active={active === "gear"} />
      <LinksSection active={active === "links"} />
    </AppShell>
  );
}
