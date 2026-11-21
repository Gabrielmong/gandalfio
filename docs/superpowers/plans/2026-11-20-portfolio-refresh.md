# Portfolio Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade gandalf.io to current libraries and give it a polished, content-current version of its existing navy three-page design, deployed by GitHub Actions.

**Architecture:** Same Vite + React SPA with `HashRouter` and MUI theming. Content stays in `src/data/*.ts`, typed by `src/models`. Pages compose small presentational components; a Vitest + Testing Library suite pins data rules and component behaviour.

**Tech Stack:** Vite, React 19, TypeScript 5, MUI 7 + Emotion, `motion`, react-router 7, Vitest + @testing-library/react + jsdom, eslint 9 flat config, prettier 3, yarn (classic, existing `yarn.lock`).

**Spec:** `docs/superpowers/specs/2026-11-20-portfolio-refresh-design.md` (read it first; it carries the project table, copy rules and anti-goals).

## Global Constraints

- Work on `main` in small commits; **never push** — Gabriel pushes after flipping Pages to "GitHub Actions".
- Versions: install the latest stable of each package with floors Vite ≥7, React ≥19, @mui/material ≥7, motion ≥12, react-router ≥7, eslint ≥9, prettier ≥3, typescript ≥5.5, vitest ≥3. If a newer *major* than the floor exists (e.g. MUI 8), stop and ask before adopting it.
- Keep `base: '/gandalfio/'`, `HashRouter`, the path aliases in `vite.config.ts`, and yarn.
- No mention of AI anywhere in user-facing copy (a "Claude API" stack tag on Yggdrasil is allowed).
- No personal photos; `Headshot.jpeg` is deleted and not used as OG image.
- Social set everywhere (topbar, hero, footer, contact): GitHub, LinkedIn, Email, WhatsApp — nothing else.
- Copy: plain first-person, no buzzwords ("passionate", "leveraging", "cutting-edge", "innovative", "seamless"), no sparkle icons, no glowing gradient hero. Gabriel's personal paragraphs keep his wording.
- Visual: direction A — navy, recognisably the current site. Reference: `.superpowers/brainstorm/843-1795235985/content/home-polished-v3.html`.
- Dark mode is the default; light mode stays available via the toggle.

## Review Focus

1. **CV link under the `/gandalfio/` base path** — must resolve on Pages, not only on `localhost:5173/`. Pinned in Task 4 (`href` equals `${import.meta.env.BASE_URL}GabrielsResume.pdf`).
2. **Phone width (~375px)** — the top bar must collapse into a menu and nothing may scroll horizontally. Pinned in Task 4 (menu button test) and Task 9 (manual check).
3. **Bad or unavailable `localStorage`** (garbage `theme` value, or access throws) — the site must still render in dark mode. Pinned in Task 4.
4. **Featured project without a screenshot, live URL or public repo** (SignificantOther; Lorestone's private repo) — must show the intentional fallback header and only a "Code" link, never an empty image or dead "Live" link. Pinned in Task 5.
5. **Deep link reload** (`/gandalfio/#/about`) — must render About directly. Pinned in Task 4 (router test with `initialEntries`).

---

## File Structure

```
src/
  main.tsx                     (modify: React 19 root)
  App.tsx                      (modify: theme state via useThemeMode, layout shell)
  test/setup.ts                (create: jest-dom matchers)
  models/Project.ts            (modify: new fields)
  models/Social.ts             (create)
  data/home.ts                 (rewrite: hero copy + projects table)
  data/about.ts                (rewrite: bio, stack groups, personal paragraphs)
  data/contact.ts              (modify: uses socials)
  data/socialmedia.ts          (rewrite: 4 socials)
  data/data.test.ts            (create: content rules)
  theme/theme.ts               (rewrite: navy tokens, typography, component overrides)
  theme/useThemeMode.ts        (create: persisted dark/light)
  components/Topbar/*          (rewrite)
  components/Footer/*          (rewrite)
  components/ProjectCard/*     (create, replaces Card + StaggeredCard)
  components/ArchiveList/*     (create)
  components/SocialLinks/*     (create)
  components/Reveal/*          (create: one motion wrapper, replaces Staggered*)
  pages/Home|About|Contact/*   (rewrite)
  assets/projects/vaka.png, yggdrasil.png   (create: screenshots)
public/og-image.png            (create) ; public/Headshot.jpeg (delete)
.github/workflows/deploy.yml   (create)
eslint.config.js               (create; delete .eslintrc.json)
vitest config inside vite.config.ts
```

Delete when no longer referenced: `components/Card`, `StaggeredCard`, `StaggeredChip`, `StaggeredListItem`, `src/assets/images/{Facebook,Instagram,Twitter}.png`, `public/vite.svg`.

---

### Task 1: Toolchain upgrade with a passing smoke test

The current site, unchanged visually, running on the new toolchain.

**Files:**
- Modify: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `src/main.tsx`, every file importing `framer-motion`, `react-router-dom`, or MUI `Grid`
- Create: `eslint.config.js`, `src/test/setup.ts`, `src/App.test.tsx`
- Delete: `.eslintrc.json`

**Interfaces:**
- Produces: `yarn test` (vitest run), `yarn lint`, `yarn build` all working; alias imports resolve in tests.

- [ ] **Step 1:** Upgrade dependencies with yarn per Global Constraints. Runtime deps: react, react-dom, @mui/material, @mui/icons-material, @emotion/react, @emotion/styled, motion, react-router, react-intersection-observer. Everything else (types, eslint + typescript-eslint + eslint-plugin-react + eslint-config-prettier, prettier, typescript, vite, @vitejs/plugin-react, vitest, jsdom, @testing-library/react, @testing-library/jest-dom, @testing-library/user-event) goes to devDependencies. Remove `path`, `react-router-dom`, `framer-motion`, `react-scroll`, `react-transition-group`, `@types/node` from dependencies (re-add `@types/node` as dev if vite.config needs it).
- [ ] **Step 2:** Code migrations: `framer-motion` → `motion/react`; `react-router-dom` → `react-router`; MUI `Grid item xs/sm/md` → v7 `Grid size={{ xs, sm, md }}`; `tsconfig` `moduleResolution: "bundler"`. Add scripts `"test": "vitest run"`, `"test:watch": "vitest"`; remove `"deploy"`. Add `test: { environment: 'jsdom', setupFiles: './src/test/setup.ts', globals: true }` to `vite.config.ts` (use `vitest/config`'s `defineConfig`).
- [ ] **Step 3:** `eslint.config.js`: flat config with `typescript-eslint` recommended, `eslint-plugin-react` recommended + `jsx-runtime`, `eslint-config-prettier` last; ignore `dist`, `.superpowers`.
- [ ] **Step 4: Write the smoke test** `src/App.test.tsx`:

```tsx
it('renders the app shell', () => {
  render(<App />);
  expect(screen.getAllByText(/Gabriel Monge/).length).toBeGreaterThan(0);
});
```

- [ ] **Step 5:** Run `yarn test` → PASS; `yarn lint` → 0 errors; `yarn build` → succeeds. `yarn start` and click through all three pages: they look as before.
- [ ] **Step 6: Commit** `chore: upgrade to React 19, MUI 7, Vite, motion, router 7, eslint 9; add vitest`

---

### Task 2: Content model and data

**Files:**
- Modify: `src/models/Project.ts`, `src/models/index.ts`, `src/data/contact.ts`, `src/data/index.ts`
- Create: `src/models/Social.ts`, `src/data/data.test.ts`
- Rewrite: `src/data/home.ts`, `src/data/socialmedia.ts`, `src/data/about.ts`
- Delete: `src/assets/images/{Facebook,Instagram,Twitter}.png`

**Interfaces:**
- Produces:
  ```ts
  // models/Project.ts
  export interface Project {
    title: string; description: string; year: number; featured: boolean;
    stack: string[]; repo?: string; repos?: { label: string; url: string }[];
    live?: string; image?: string; private?: boolean;
  }
  // models/Social.ts
  export type SocialName = 'GitHub' | 'LinkedIn' | 'Email' | 'WhatsApp';
  export interface Social { name: SocialName; url: string; icon: string }
  // data
  export const homeData: { name: string; role: string; location: string; intro: string; projects: Project[] };
  export const socials: Social[];            // order: GitHub, LinkedIn, Email, WhatsApp
  export const aboutData: { bio: string[]; stack: { group: 'Web'|'Mobile'|'Backend'|'Desktop'; items: Tech[] }[]; tools: Tech[]; personal: string[]; work: string };
  export const contactData: { title: string; intro: string; cvFile: 'GabrielsResume.pdf' };
  ```
  `repos` is only for Tracker (frontend + backend) and Algo Visualizer (JS + Python links); others use `repo`.

- [ ] **Step 1: Write the failing tests** `src/data/data.test.ts`:

```ts
const allCopy = JSON.stringify({ homeData, aboutData, contactData });

it('features exactly these five, in this order', () => {
  expect(homeData.projects.filter(p => p.featured).map(p => p.title))
    .toEqual(['Vaka', 'Lorestone', 'SignificantOther', 'Yggdrasil', 'Grain']);
});
it('gives every featured project a stack and either a public repo or private flag', () => {
  for (const p of homeData.projects.filter(p => p.featured)) {
    expect(p.stack.length).toBeGreaterThan(0);
    if (p.private) expect(p.repo).toBeUndefined();
    else expect(p.repo).toMatch(/^https:\/\/github\.com\//);
  }
});
it('never links the private Lorestone repo', () => {
  expect(allCopy).not.toMatch(/dndcompanion/i);
});
it('has live links only for Vaka, Lorestone, Yggdrasil, Grain and Algo Visualizer', () => {
  expect(homeData.projects.filter(p => p.live).map(p => p.title).sort())
    .toEqual(['Algo Visualizer', 'Grain', 'Lorestone', 'Vaka', 'Yggdrasil']);
});
it('drops removed projects', () => {
  expect(allCopy).not.toMatch(/Crops Chronicles|diseno-videojuegos|Gandalf\.io/i);
});
it('uses only the four professional socials', () => {
  expect(socials.map(s => s.name)).toEqual(['GitHub', 'LinkedIn', 'Email', 'WhatsApp']);
});
it('never mentions AI in copy', () => {
  expect(allCopy.replace('Claude API', '')).not.toMatch(/\bAI\b|artificial intelligence|\bLLM|Claude|ChatGPT|Copilot/i);
});
it('avoids buzzwords', () => {
  expect(allCopy).not.toMatch(/passionate|leverag|cutting-edge|innovative|seamless|synerg/i);
});
```

- [ ] **Step 2:** `yarn test src/data` → FAIL (new fields/exports missing).
- [ ] **Step 3:** Implement the models and data. Project list, links and years: copy the table in the spec's "Project links and years" section. Archive order: year descending. Descriptions: 1–2 plain sentences each, drafted from the spec and the old `home.ts` text (Vaka: hardware monitor for a small dedicated screen, installer, twelve templates, browser layout editor; Lorestone: campaign manager for Dungeon Masters — characters, branching decision trees, sessions, encounters, faction reputation, spoiler-free player view; stack React, TypeScript, GraphQL, Prisma, PostgreSQL, ReactFlow; year 2026; `private: true`, no `repo`, `live: 'https://lorestone.app/landing'`; Yggdrasil: reading tracker with social features and barcode scanning; Grain: woodworking project and cost manager for Costa Rican woodworkers — varas, CRC/USD, EN/ES/PT; SignificantOther: mobile app for couples). Hero: name "Gabriel Monge", role "Software Engineer @ Track Star", location "San José, Costa Rica", intro ≈ "I build web, mobile and desktop apps, mostly TypeScript, React and Node, with some C# when the hardware calls for it. These are the things I've made lately." About: stack groups per spec; `tools` = pruned chip list from old `other`/`otherBackend`/`otherFrontEnd` (drop VirtualBox, Adobe XD, Heroku, Insomnia, Windows, CCNA, Bootstrap, Gatsby, Springboot; keep the rest that still apply); `personal` = old games/guitar/music paragraphs verbatim, with `// TODO(Gabriel): refresh the games list` above the games line; `work` = Track Star line. Biotopika removed from About.
- [ ] **Step 4:** `yarn test src/data` → PASS. Fix compile errors in pages minimally (old pages may temporarily render less) so `yarn build` passes.
- [ ] **Step 5: Commit** `feat: new project/social data model and refreshed content`

---

### Task 3: Theme refresh

**Files:**
- Rewrite: `src/theme/theme.ts`
- Create: `src/theme/useThemeMode.ts`, `src/theme/theme.test.ts`

**Interfaces:**
- Produces:
  ```ts
  export const darkTheme: Theme; export const lightTheme: Theme;
  export type ThemeMode = 'dark' | 'light';
  export function useThemeMode(): { mode: ThemeMode; toggle: () => void };
  ```
  Navy tokens (dark): background default `#0f1c2b`, paper `#16283d`, divider/borders `#22395a`, text secondary `#9fb6d3`, primary `#5b8fd6`. Light mode keeps the current navy-on-light palette (`#ededed` / `#fff` / primary `#0f1c2b`). Shape radius 12; MUI Card/Chip/Button overrides so cards have the 1px border look of the mockup. Typography: keep a neutral sans (Segoe UI stack or one Google font); remove the custom `h1–h6` px overrides in favour of `responsiveFontSizes`.

- [ ] **Step 1: Write the failing tests** `theme.test.ts`:

```ts
it('defaults to dark', () => { expect(renderHook(useThemeMode).result.current.mode).toBe('dark'); });
it('ignores a garbage stored value', () => {
  localStorage.setItem('theme', 'purple');
  expect(renderHook(useThemeMode).result.current.mode).toBe('dark');
});
it('survives localStorage throwing', () => {
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked'); });
  expect(renderHook(useThemeMode).result.current.mode).toBe('dark');
});
it('toggles and persists', () => {
  const { result } = renderHook(useThemeMode);
  act(() => result.current.toggle());
  expect(result.current.mode).toBe('light');
  expect(localStorage.getItem('theme')).toBe('light');
});
it('uses the navy background in dark mode', () => {
  expect(darkTheme.palette.background.default).toBe('#0f1c2b');
});
```

- [ ] **Step 2:** `yarn test src/theme` → FAIL.
- [ ] **Step 3:** Implement; wrap every storage access in try/catch. Wire `App.tsx` to `useThemeMode`.
- [ ] **Step 4:** `yarn test` → PASS.
- [ ] **Step 5: Commit** `feat: navy theme refresh and safe persisted theme mode`

---

### Task 4: App shell — Topbar, Footer, routing

**Files:**
- Rewrite: `src/components/Topbar/*`, `src/components/Footer/*`, `src/components/AnimatedRoutes/*`, `src/App.tsx`
- Create: `src/components/SocialLinks/*`, `src/components/Reveal/*`, `src/components/Shell.test.tsx`, `src/test/render.tsx`
- Modify: `src/test/setup.ts` (add `matchMedia` mock + exported `setViewportWidth(px)`)
- Modify: `src/components/BackToTop/BackToTop.tsx` (restyle only)

**Interfaces:**
- Consumes: `socials`, `contactData.cvFile`, `useThemeMode`.
- Produces:
  ```ts
  Topbar(props: { mode: ThemeMode; onToggleTheme: () => void }): ReactElement
  Footer(): ReactElement
  SocialLinks(props: { variant: 'chips' | 'icons' }): ReactElement   // renders `socials`, external links with target=_blank rel=noopener
  Reveal(props: { children: ReactNode; delay?: number }): ReactElement // fade+rise on first view, respects prefers-reduced-motion
  AppRoutes(): ReactElement                                          // replaces AnimatedRoutes; exported for tests
  export const cvHref: string;   // `${import.meta.env.BASE_URL}${contactData.cvFile}` in src/data/contact.ts
  ```
  Topbar: brand "gandalf.io" left; Home / About / Contact links, outlined "CV" button (`<a href={cvHref} download>`), theme toggle right. Below `md`, the links and CV collapse into a menu button (`aria-label="Open menu"`). Footer: "Gabriel Monge · {year}" plus `SocialLinks variant="icons"`; no animated gradient.

- [ ] **Step 1: Write the failing tests** `Shell.test.tsx`:

```tsx
it('links the CV under the base path', () => {
  renderWithProviders(<Topbar mode="dark" onToggleTheme={() => {}} />);
  const cv = screen.getAllByRole('link', { name: /cv/i })[0];
  expect(cv).toHaveAttribute('href', `${import.meta.env.BASE_URL}GabrielsResume.pdf`);
  expect(cv).toHaveAttribute('download');
});
it('collapses nav into a menu on phones', () => {
  setViewportWidth(375); // matchMedia mock helper in test/setup.ts
  renderWithProviders(<Topbar mode="dark" onToggleTheme={() => {}} />);
  expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument();
});
it('footer shows exactly the four socials', () => {
  renderWithProviders(<Footer />);
  expect(screen.getAllByRole('link').map(a => a.getAttribute('aria-label')))
    .toEqual(['GitHub', 'LinkedIn', 'Email', 'WhatsApp']);
});
it('renders About on a deep link', () => {
  renderWithProviders(<AppRoutes />, { route: '/about' }); // MemoryRouter initialEntries
  expect(screen.getAllByRole('heading', { name: /about/i }).length).toBeGreaterThan(0);
});
```

`renderWithProviders(ui, { route? })` lives in `src/test/render.tsx` (ThemeProvider + MemoryRouter).

- [ ] **Step 2:** `yarn test src/components` → FAIL.
- [ ] **Step 3:** Implement. `App.tsx` keeps `HashRouter`; route transitions via `AnimatePresence` + `motion.div` fade only.
- [ ] **Step 4:** `yarn test` → PASS; `yarn build` → OK.
- [ ] **Step 5: Commit** `feat: refreshed top bar, footer and app shell`

---

### Task 5: Home page — hero, featured cards, earlier work

**Files:**
- Rewrite: `src/pages/Home/*`
- Create: `src/components/ProjectCard/*`, `src/components/ArchiveList/*`, `src/pages/Home/Home.test.tsx`
- Delete: `src/components/Card`, `StaggeredCard`

**Interfaces:**
- Consumes: `homeData`, `Project`, `SocialLinks`, `Reveal`.
- Produces:
  ```ts
  ProjectCard(props: { project: Project }): ReactElement   // featured card
  ArchiveList(props: { projects: Project[] }): ReactElement // "Title · description … year" rows
  ```
  Card layout per mockup: image (16:9, `object-fit: cover`) or fallback header (navy gradient panel with the title and first three stack items — must look deliberate), title, "Live ↗" (only if `live`) and "Code ↗" (only if `repo`) links — with a small "Private repo" label in the Code link's place when `private` — description, stack chips. Grid ≥ `md`: the first featured card (Vaka) spans both columns with image beside the text; the remaining four form a 2×2 grid. Below `md`: one column. Hero: name as `h1`, role · location line, intro, `SocialLinks variant="chips"`. No photo, no animated gradient title.

- [ ] **Step 1: Write the failing tests** `Home.test.tsx`:

```tsx
it('shows a private project with a Live link, no Code link, and a label', () => {
  renderWithProviders(<ProjectCard project={lorestone} />);
  expect(screen.getByRole('link', { name: /live/i })).toHaveAttribute('href', 'https://lorestone.app/landing');
  expect(screen.queryByRole('link', { name: /code/i })).toBeNull();
  expect(screen.getByText(/private repo/i)).toBeInTheDocument();
});
it('shows five featured cards and the archive', () => {
  renderWithProviders(<Home />);
  expect(screen.getAllByTestId('project-card')).toHaveLength(5);
  expect(screen.getByRole('heading', { name: /earlier work/i })).toBeInTheDocument();
});
it('uses the fallback header and no Live link when a project has no image or live url', () => {
  renderWithProviders(<ProjectCard project={significantOther} />); // = homeData.projects.find(...)
  expect(screen.getByTestId('project-fallback')).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /live/i })).toBeNull();
  expect(screen.getByRole('link', { name: /code/i })).toHaveAttribute('href', significantOther.repo);
});
it('lists archive rows newest first with years', () => {
  renderWithProviders(<ArchiveList projects={homeData.projects.filter(p => !p.featured)} />);
  const years = screen.getAllByTestId('archive-year').map(e => Number(e.textContent));
  expect(years).toEqual([...years].sort((a, b) => b - a));
});
it('shows no photo', () => {
  renderWithProviders(<Home />);
  expect(screen.queryByRole('img', { name: /headshot|gabriel/i })).toBeNull();
});
```

- [ ] **Step 2:** `yarn test src/pages/Home` → FAIL.
- [ ] **Step 3:** Implement.
- [ ] **Step 4:** `yarn test` → PASS. `yarn start`: compare against the reference mockup at desktop and 375px.
- [ ] **Step 5: Commit** `feat: new home page with featured projects and earlier work`

---

### Task 6: Project screenshots

**Files:**
- Create: `src/assets/projects/vaka.png`, `lorestone.png`, `yggdrasil.png`, `grain.png`
- Modify: `src/data/home.ts` (set `image` for Vaka, Lorestone, Yggdrasil and Grain)

- [ ] **Step 1:** Capture 1600×900 screenshots with `npx playwright screenshot --viewport-size=1600,900 <url> <file>` of https://gabrielmong.github.io/vaka/, https://lorestone.app/landing, https://yggdrasil-phi-lac.vercel.app and https://woodwork-24u.pages.dev/. A sign-in screen is only used if it looks presentable; otherwise that project stays on the fallback header and is noted for Gabriel. If Yggdrasil only shows a sign-in screen, use it only if it looks presentable; otherwise leave Yggdrasil on the fallback header and note it for Gabriel. Compress to < 300 KB each (WebP is fine; update extensions accordingly).
- [ ] **Step 2:** Import them in `home.ts`; `yarn test && yarn build` → PASS; check the cards in `yarn start`.
- [ ] **Step 3: Commit** `feat: add project screenshots`

---

### Task 7: About and Contact pages

**Files:**
- Rewrite: `src/pages/About/*`, `src/pages/Contact/*`
- Create: `src/pages/About/About.test.tsx`, `src/pages/Contact/Contact.test.tsx`
- Delete: `StaggeredChip`, `StaggeredListItem`, `src/assets/svg/php.svg` and any other svg no longer referenced

**Interfaces:**
- Consumes: `aboutData`, `contactData`, `cvHref`, `socials`, `SocialLinks`, `Reveal`.
  About: `h1` "About", bio paragraphs, stack as four grouped sections (Web / Mobile / Backend / Desktop) with icons where an svg exists, `tools` as one chip row, then personal paragraphs and the work line. Contact: `h1` "Contact", short intro, the four socials as large buttons, and a contained "Download CV" button (`<a href={cvHref} download>`) — no fetch/blob.

- [ ] **Step 1: Write the failing tests:**

```tsx
it('shows the four stack groups', () => {
  renderWithProviders(<About />);
  for (const g of ['Web', 'Mobile', 'Backend', 'Desktop'])
    expect(screen.getByRole('heading', { name: g })).toBeInTheDocument();
});
it('offers a direct CV download', () => {
  renderWithProviders(<Contact />);
  const cv = screen.getByRole('link', { name: /download cv/i });
  expect(cv).toHaveAttribute('href', `${import.meta.env.BASE_URL}GabrielsResume.pdf`);
  expect(cv).toHaveAttribute('download');
});
```

- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement. **Step 4:** `yarn test && yarn lint && yarn build` → PASS.
- [ ] **Step 5: Commit** `feat: refreshed about and contact pages`

---

### Task 8: Meta, OG image, deploy workflow, repo cleanup

**Files:**
- Modify: `index.html`, `.gitignore`, `package.json` (version → `3.0.0`)
- Create: `public/og-image.png`, `.github/workflows/deploy.yml`
- Delete: `public/Headshot.jpeg`, `public/vite.svg`, `dist/` from git (`git rm -r --cached dist`)

- [ ] **Step 1:** `index.html`: single `<title>Gabriel Monge — Software Engineer</title>`; description "Gabriel Monge, software engineer in Costa Rica. Web, mobile and desktop projects."; keywords trimmed to current stack (no "Tiims Revolution", MongoDB, Tailwind); og/twitter image → `https://gabrielmong.github.io/gandalfio/og-image.png`; favicon href fixed to a `public/` path.
- [ ] **Step 2:** Make `og-image.png` (1200×630): navy `#0f1c2b` background, "Gabriel Monge" large, "Software Engineer · Costa Rica" below, in the site font. Render a throwaway HTML file from the scratchpad with Playwright `screenshot`; don't commit the HTML.
- [ ] **Step 3:** `deploy.yml`: on push to `main` + `workflow_dispatch`; permissions `pages: write`, `id-token: write`, `contents: read`; jobs: checkout → setup-node (LTS, cache yarn) → `yarn install --frozen-lockfile` → `yarn lint` → `yarn test` → `yarn build` → `actions/upload-pages-artifact` (path `dist`) → `actions/deploy-pages`. Use current major versions of each action.
- [ ] **Step 4:** Add `dist` to `.gitignore`; `git rm -r --cached dist`.
- [ ] **Step 5:** Verify: `grep -ri headshot index.html src` → nothing; `yarn build` → OK; `git status` shows `dist/` no longer tracked.
- [ ] **Step 6: Commit** `chore: update meta and OG image, deploy via GitHub Actions, stop tracking dist`

---

### Task 9: Final verification

- [ ] **Step 1:** `yarn lint && yarn test && yarn build` → all green; paste the output summary.
- [ ] **Step 2:** `yarn preview` (served at `/gandalfio/`). In a browser, check at 1440px and 375px in dark and light: Home, About, Contact, deep link `#/about` reload, CV downloads, every project and social link opens the right page, no horizontal scroll, menu works on mobile. Fix anything found (commit as `fix: …`).
- [ ] **Step 3:** Delete unused components and assets (`git grep` each before deleting); rerun step 1.
- [ ] **Step 4:** Hand off to Gabriel with:
  - Settings → Pages → Source = "GitHub Actions", then `git push`.
  - Things for him to update: CV PDF, games line TODO in `src/data/about.ts`, a screenshot for SignificantOther (`src/assets/projects/`, set `image` in `home.ts`), review drafted copy.
  - The old `gh-pages` branch can be deleted once the new deploy is live.
