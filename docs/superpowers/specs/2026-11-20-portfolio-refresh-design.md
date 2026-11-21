# Portfolio refresh (gandalf.io) — design

Date: 2026-11-20
Repo: `Gabrielmong/gandalfio`, live at https://gabrielmong.github.io/gandalfio/

## Intent

The portfolio was built in 2023 and has gone stale: libraries are 1–3 majors behind, the project
list stops in 2023, and the About page describes a stack Gabriel has since moved past. It is a
**personal showcase**, not a job-hunt page, though Contact and a CV download stay "just in case".

Gabriel wants it to keep its essence (navy palette, three pages) but feel **polished and
genuine**: built and written by a competent person, not template- or AI-generated.

## Goals

- Upgrade every dependency to current majors and modernise the tooling.
- Keep the look and structure; improve hierarchy, spacing, cards, motion and mobile layout so it
  feels finished.
- Showcase current work: Vaka, Lorestone, SignificantOther, Yggdrasil, Grain featured (Lorestone
  and SignificantOther are the ones Gabriel is proudest of after Vaka); older work in a compact
  list.
- Refresh About copy and stack to match what he actually builds now.
- Replace the commit-`dist/` deploy with a GitHub Actions Pages workflow.

## Non-goals

- No rebrand, no new pages, no single-page conversion, no blog.
- No CMS or GitHub API fetching — content stays in `src/data/*.ts`.
- Writing the new CV (Gabriel will replace `public/GabrielsResume.pdf` himself).

## Anti-goals (fails even if it "works")

- **Any mention of AI** in copy — he takes it as given; no "How I work" section, no AI notes on
  cards. (A factual "Claude API" tag in Yggdrasil's stack is acceptable as a tech tag.)
- **Generic/AI-slop feel**: buzzword bios ("passionate about leveraging…"), sparkle icons,
  gradient-glow heroes, filler copy. Keep his voice — the games/guitar/"metal and some cumbias"
  lines stay in his own words.
- **Personal photos** anywhere (judged unprofessional). The headshot is removed, including as the
  Open Graph image.
- Looking like a different site — must stay recognisably the current one.

## Approaches considered

| | Approach | Trade-off |
|---|---|---|
| **A (chosen)** | Upgrade in place on the same stack (React + MUI + motion + Vite), redesign within it | Some migration care (MUI 5→7, framer-motion→motion, router 6→7); keeps familiar code and matches his other projects (Grain, Yggdrasil use React 19 / MUI 7). |
| B | Rebuild static in Astro | Fastest/lightest, but a rewrite on a tool he doesn't use elsewhere. |
| C | Libs + content only | Quickest, but doesn't deliver the polish he asked for. |

Visual direction: of three mockups (A clean evolution, B editorial, C hardware/terminal), Gabriel
picked **A — clean evolution** of the current navy look.

## Decided design

### Stack & tooling
- Vite (current major) + `@vitejs/plugin-react`, React 19, TypeScript 5.x, MUI 7 + Emotion,
  `motion` (successor of framer-motion), react-router 7, eslint 9 flat config, prettier 3.
- Move dev-only packages (eslint, prettier, `@types/*`) to `devDependencies`; drop unused ones
  (`path`, `react-transition-group`, `react-scroll` if no longer used).
- Keep `HashRouter`-style routing (GitHub Pages has no SPA fallback) and `base: '/gandalfio/'`.
- Keep the import aliases (`components`, `data`, `models`, …).
- Package manager stays **yarn** (existing `yarn.lock`).

### Deploy
- Add `.github/workflows/deploy.yml`: on push to `main`, install, `yarn build`, upload `dist/`,
  deploy with `actions/deploy-pages`.
- Remove `dist/` from git and add it to `.gitignore`; remove the `deploy` subtree script.
- **Manual step for Gabriel:** repo Settings → Pages → Source = "GitHub Actions" (replaces the
  `gh-pages` branch).
- Work happens directly on `main` (Gabriel's convention for small projects), in small commits;
  nothing is pushed without his go-ahead. Order: build and verify locally → Gabriel flips the
  Pages setting → push to `main` triggers the first workflow deploy. The old `gh-pages` branch is
  left alone; Gabriel can delete it once the new deploy is confirmed.

### Pages

Global: top bar `gandalf.io · Home · About · Contact · [CV ↓] · theme toggle`; dark (navy) default
with light mode kept; footer with social links. Remove the headshot from `public/` and from the
OG/Twitter meta.

**Home**
1. Hero (text only): name large, "Software Engineer @ Track Star · San José, Costa Rica", a
   2-line intro, chips for GitHub / LinkedIn / Email.
2. **Featured projects** — five cards, in this order. Vaka is a wide card spanning the top;
   the other four sit in a 2×2 grid (everything is 1 column on mobile). Card: screenshot (or
   fallback header), title, Live ↗ / Code ↗ links, 1–2 sentence description, stack tags.
   - Vaka — hardware monitor panel + browser layout editor. C#, TypeScript, Windows.
     Live: https://gabrielmong.github.io/vaka/ · Code: repo.
   - Lorestone — TTRPG campaign manager for Dungeon Masters: characters, branching decision
     trees, session logs, combat encounters, faction reputation, and a spoiler-free player view.
     React, TypeScript, GraphQL, Prisma, PostgreSQL, ReactFlow. Live: https://lorestone.app/landing.
     **Private repo:** no Code link; the card shows a small "Private repo" label in its place.
   - SignificantOther — couples mobile app. React Native / Expo, Firebase, Mapbox. Code only.
   - Yggdrasil — reading tracker with social features, barcode scanning. Next.js, Prisma,
     PostgreSQL, S3, Claude API. Live: https://yggdrasil-phi-lac.vercel.app · Code: repo.
   - Grain — woodworking project/cost manager for Costa Rican woodworkers (varas, CRC/USD,
     EN/ES/PT). React 19, GraphQL, Prisma, PostgreSQL. Live: https://woodwork-24u.pages.dev/ ·
     Code: repo.
3. **Earlier work** — compact rows "Title · one-liner ... year", linked: WeightTracker,
   breed-classifier, Tracker (+ backend), Algo Visualizer (JS, Python), Berserker,
   Biotopika, Hogar Infantil Brotes de Olivo. The portfolio itself is not
   listed.

**About**
- Rewritten bio: web, mobile and desktop; TS/React/Node core; C#/.NET for hardware/desktop.
- Stack grouped: Web (Next.js, React 19, MUI 7), Mobile (React Native/Expo, Firebase), Backend
  (Node, GraphQL/Apollo, Prisma, PostgreSQL), Desktop (C#/.NET). The long "other" list collapses
  to one compact chip row (prune obviously dated items).
- Personal paragraphs kept in his wording; the games list gets a `// TODO(Gabriel): refresh` for
  him to update. Track Star work line stays; Biotopika moves to projects.

**Contact**
- LinkedIn, Email, WhatsApp, plus a prominent "Download CV" button.
- CV path unchanged: `public/GabrielsResume.pdf` (swap the file, no code change). Use a plain
  `<a href download>` instead of the current fetch/blob workaround.

### Project links and years (all repos verified public on 2026-11-20)

| Project | Repo | Live | Year |
|---|---|---|---|
| Vaka | https://github.com/Gabrielmong/vaka | https://gabrielmong.github.io/vaka/ | 2026 |
| Lorestone | private (`Gabrielmong/dndcompanion`) — do not link | https://lorestone.app/landing | 2026 |
| Yggdrasil | https://github.com/Gabrielmong/yggdrasil | https://yggdrasil-phi-lac.vercel.app | 2026 |
| Grain | https://github.com/Gabrielmong/Grain | https://woodwork-24u.pages.dev/ | 2025 |
| SignificantOther | https://github.com/Gabrielmong/SignificantOther | — | 2024 |
| WeightTracker | https://github.com/Gabrielmong/weighttracker | — | 2026 |
| breed-classifier | https://github.com/Gabrielmong/breed-classifier | — | 2023 |
| Tracker (+ backend) | https://github.com/Gabrielmong/tracker, https://github.com/Gabrielmong/tracker-backend | — | 2023 |
| Algo Visualizer (JS / Python) | https://github.com/Gabrielmong/algo-visualizer, Code-Playground link from current data | https://gabrielmong.github.io/algo-visualizer/ | 2023 |
| Biotopika | https://github.com/Biotopika | — | 2023 |
| Hogar Infantil Brotes de Olivo | https://github.com/Brotes-de-Olivo | — | 2024 |
| Berserker | https://github.com/Gabrielmong/berserker | — | 2022 |
The Crops Chronicles is **removed** (Gabriel deleted its repo, `diseno-videojuegos-g2`).

### Footer and social
*(Call made in review)* Footer, hero chips and Contact use the same professional set: GitHub,
LinkedIn, Email, WhatsApp. Facebook, Instagram and Twitter are dropped, along with their icon
assets, in line with the "keep it professional" stance.

### Data model
- `Project` gains: `stack: string[]`, `repo?: string`, `live?: string`, `image?: string`,
  `year: number`, `featured: boolean`, `private?: boolean`. Featured and archive render from the
  same array. A featured project has either a `repo` or `private: true`.

### Screenshots
- Builder captures screenshots of the four live projects (Vaka page, Lorestone landing,
  Yggdrasil, Grain) into `src/assets/projects/`. SignificantOther (mobile, not on the web) uses
  the fallback header (name + stack) until Gabriel adds an image. Fallback must look intentional, not broken.

### SEO / meta
- Fix the `<title>` duplication; update description/keywords (drop "Tiims Revolution", MongoDB,
  Tailwind etc. that are no longer representative); replace the OG image with a simple generated
  text card (name + title on navy), 1200×630, in `public/`.

## Left to the builder
- Exact spacing scale, type sizes, card styling, and motion details within direction A
  (reference mockup: `.superpowers/brainstorm/*/content/home-polished-v3.html`).
- Font choice (current: Segoe UI) — may switch to a self-hosted/Google font if it clearly helps
  polish; keep it neutral.
- Component restructuring and removal of dead components.
- First-draft copy for the bio and project one-liners, in plain, first-person, non-buzzword voice,
  for Gabriel to review.
- Which dated items to prune from the "other" tech list.

## Verification
- `yarn lint` and `yarn build` clean; `yarn preview` checked at desktop and ~375px widths in both
  themes; all project/social links resolve; CV downloads; deployed via the workflow.
