import { useState } from "react";
import AppShell, { NavSection } from "@/layouts/AppShell";
import {
  NavHomeIcon,
  NavWorkIcon,
  NavProjectsIcon,
  NavCertsIcon,
  // NavBlogIcon, // HIDDEN
  NavContactIcon,
} from "@/components/icons";
import HomeSection from "@/components/dev/HomeSection";
import WorkSection from "@/components/dev/WorkSection";
import ProjectsSection from "@/components/dev/ProjectsSection";
import CertsSection from "@/components/dev/CertsSection";
// import BlogSection from "@/components/dev/BlogSection"; // HIDDEN
import ContactSection from "@/components/dev/ContactSection";

const SECTIONS: NavSection[] = [
  { id: "home", label: "Home", icon: <NavHomeIcon /> },
  { id: "work", label: "Work", icon: <NavWorkIcon /> },
  { id: "projects", label: "Projects", icon: <NavProjectsIcon /> },
  { id: "certs", label: "Certs", icon: <NavCertsIcon /> },
  // { id: "blog", label: "Blog", icon: <NavBlogIcon /> }, // HIDDEN
  { id: "contact", label: "Contact", icon: <NavContactIcon /> },
];

export default function DevPage() {
  const [active, setActive] = useState("home");

  return (
    <AppShell
      theme="dev"
      sections={SECTIONS}
      active={active}
      onSelect={setActive}
      // portalHref="/music" // HIDDEN - music portal
    >
      <HomeSection active={active === "home"} onNavigate={setActive} />
      <WorkSection active={active === "work"} />
      <ProjectsSection active={active === "projects"} />
      <CertsSection active={active === "certs"} />
      {/* <BlogSection active={active === "blog"} /> */}{/* HIDDEN */}
      <ContactSection active={active === "contact"} />
    </AppShell>
  );
}
