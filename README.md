# Mylena Santos — Portfolio

React · TypeScript · Tailwind CSS · Framer Motion · Lucide

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build
```

## Editing content
All copy lives in `src/data/content.ts` (case studies, skills, leadership, experience, education).

- **Portrait:** put a photo in `public/` and set `profile.portrait` (e.g. `'/mylena.jpg'`). It gets a duotone treatment inside the arch frame automatically.
- **Resume:** replace `public/Mylena-Santos-Resume.pdf` with your own file (keep the name, or update `profile.resume`).
- **Junior role dates:** set `period` on the Xplor Junior Software Developer entry once verified.

## Structure
- `src/sections/` — one component per page section
- `src/components/` — shared UI (nav, reveal animations, diagrams, case-study dialog, cursor)
- `src/lib/accent.ts` — accessible colour pairings (pink/coral/butter carry plum text; violet/cobalt/plum carry cream)

Motion respects `prefers-reduced-motion` globally (`MotionConfig reducedMotion="user"` + CSS fallback).
