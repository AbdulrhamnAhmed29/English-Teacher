#  Portfolio

A production-ready portfolio website for Rahma Elsadek, English Language Teacher,
built with **React 19 + Vite + JavaScript (no TypeScript)**.

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- Framer Motion
- react-i18next (English / Arabic, with automatic RTL switching)
- React Context API
- Lucide React icons
- PropTypes for runtime component validation

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Architecture — Feature-Based

```
src/
  app/                     # App shell: root App.jsx + layout (Navbar, Footer)
  features/                # One folder per page section, owns its own components/data
    hero/
    about/
    journey/
    strengths/
    philosophy/
    contact/
  shared/                  # Cross-feature reusable code
    components/ui/         # Button, Card, SectionHeading, StarMark, LanguageSwitch
    context/                # LanguageProvider (Context API)
    hooks/                  # useScrollReveal, useActiveSection
    lib/                    # i18n.js
  locales/                 # en.json, ar.json translation resources
  index.css
  main.jsx
```

### Conventions

- Every feature owns its own `components/` (and `data/` where relevant) —
  no cross-feature imports of internals; only `shared/` is imported across features.
- Reusable UI primitives live in `shared/components/ui` and are documented with JSDoc + PropTypes.
- Copy lives in `src/locales/*.json`, not hardcoded in components, so the site
  is fully bilingual (EN/AR) out of the box, including automatic `dir="rtl"` for Arabic.
- File extensions are strictly `.js` / `.jsx` — no TypeScript anywhere in this project.

## Design System

- **Palette:** warm cream background, deep ink-green for headings/dark sections,
  a coral accent for emphasis, and a gold accent reserved for the signature "star" mark.
- **Type:** Fraunces (display serif) + Inter/General Sans (body) + a handwritten
  accent face (Caveat) for the philosophy quote and small annotations, echoing
  a teacher's notebook.
- **Signature element:** a hand-drawn gold star mark (`StarMark.jsx`), referencing
  the stars a kindergarten teacher gives on a child's work — used sparingly.

## Customizing Content

- Edit `src/locales/en.json` / `src/locales/ar.json` for all page copy.
- Edit `src/features/journey/data/journeyData.js` to add/reorder timeline milestones.
- Edit `src/features/strengths/data/strengthsData.js` to add/reorder strength cards.
- Replace the placeholder email/phone in `Footer.jsx` and `Contact.jsx` with real contact details.
