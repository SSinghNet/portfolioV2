# ssingh.net

Personal portfolio site for Sumeet Singh — a Vite + React + TypeScript app with two portfolio themes (dev and music) rendered as a single-page app with route-based pages.

## Stack

- **Vite** — dev server and build (`npm run dev`, `npm run build`)
- **React 18** + **TypeScript**
- **Tailwind CSS** — utility classes; custom CSS vars for theming in `src/styles/globals.css`
- **react-router-dom** — client-side routing (`/`, `/dev`, `/music`)
- **NextUI** — some legacy UI primitives (largely superseded by custom components)

## Project layout

```
src/
  pages/
    index.tsx       # root redirect or landing
    dev.tsx         # dev portfolio page (main)
    music.tsx       # music portfolio page
  layouts/
    AppShell.tsx    # shared shell — sidebar, mobile topbar, scroll nav, portal link
  components/
    dev/            # section components for dev page (Home, Work, Projects, Certs, Blog, Contact)
    music/          # section components for music page
    SectionNavigator.tsx  # prev/next bottom bar
    icons.tsx       # all SVG icons
  config/
    site.ts         # single source of truth for all content (work, projects, certs, education, skills, tagline, music)
  styles/
    globals.css     # CSS custom properties for dev/music themes, base styles
```

## Key conventions

- **All content lives in `src/config/site.ts`** — roles, bullets, chips, tagline, education, blog posts, music data. Edit there, never hardcode in components.
- **Theming** — `data-portfolio="dev"` or `data-portfolio="music"` is set on `<html>` by AppShell. CSS vars in `globals.css` are scoped to these selectors.
- **Section visibility** — sections are hidden by commenting out their entry in the `SECTIONS` array and related import/JSX in `dev.tsx` or `music.tsx`. Search `// HIDDEN` to find them.
- **Portal link** — the coin icon in the sidebar that links between dev↔music is controlled by the optional `portalHref` prop on AppShell. Omit the prop to hide it.
- **Scroll navigation** — AppShell intercepts wheel events; at the top/bottom of a panel it advances to the next/previous section.

## Dev workflow

```bash
npm run dev      # start local dev server (usually http://localhost:5173)
npm run build    # type-check + Vite build
npm run lint     # ESLint with auto-fix
```

## Currently hidden (easy to restore)

Search `// HIDDEN` in `src/pages/dev.tsx`:
- **Blog section** — nav entry, import, and JSX all commented out
- **Music portal link** — `portalHref="/music"` prop commented out on AppShell
