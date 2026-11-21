# Resume viewer: design

**Why:** Visitors should be able to read Gabriel's CV on the site without downloading it first. Downloading stays available.

**Approaches considered**
1. Native browser embed (`<iframe>`/`<object>`): no dependency and a full desktop viewer, but blank on Android Chrome and first page only on iOS.
2. **pdf.js through `react-pdf` (chosen by Gabriel):** renders the same everywhere, including phones, and can be styled to match the site. Costs about 1 MB of pdf.js, so it is lazy-loaded on this page only.

**Design**
- New route `#/resume` with a `Resume` page, loaded with `React.lazy` so pdf.js stays out of the main bundle.
- The page has:
  - an `h1` "Resume", plus a "Download CV" button (`href={cvHref} download`) and an "Open PDF" link to the raw file in a new tab;
  - every page of `GabrielsResume.pdf` rendered by `react-pdf`, at the container's width (capped at 900px), each page as a card on the navy background;
  - a loading state while the PDF loads;
  - an error state with the download link if it fails.
- The CV button in the top bar (desktop and drawer) now goes to `#/resume` instead of downloading.
- Contact keeps "Download CV" and adds a "View CV" link to `#/resume`.
- The pdf.js worker comes from `pdfjs-dist` through Vite's `new URL(..., import.meta.url)`, so it is self-hosted with no CDN.

**Constraints:** same as the portfolio refresh: it has to work under the `/gandalfio/` base path, with no horizontal scroll at 375px, and lint, tests and build all green.

**Left to the builder:** loading and error visuals, and the text-layer/annotation CSS.
