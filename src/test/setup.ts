import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach } from 'vitest';

// jsdom has no IntersectionObserver; elements are simply never "in view".
class IntersectionObserverStub {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
globalThis.IntersectionObserver ??=
  IntersectionObserverStub as unknown as typeof IntersectionObserver;

// Minimal matchMedia that evaluates (min-width) / (max-width) against a settable width.
let viewportWidth = 1280;

/** Simulate a viewport width for components using useMediaQuery. Call before rendering. */
export const setViewportWidth = (px: number) => {
  viewportWidth = px;
};

const evaluate = (query: string): boolean => {
  const min = /min-width:\s*([\d.]+)px/.exec(query);
  const max = /max-width:\s*([\d.]+)px/.exec(query);
  if (!min && !max) return false; // e.g. prefers-reduced-motion
  return (
    (!min || viewportWidth >= Number(min[1])) &&
    (!max || viewportWidth <= Number(max[1]))
  );
};

window.matchMedia = (query: string) =>
  ({
    media: query,
    matches: evaluate(query),
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }) as MediaQueryList;

beforeEach(() => {
  viewportWidth = 1280;
});

window.scrollTo = () => {};

afterEach(() => {
  cleanup();
  localStorage.clear();
});
