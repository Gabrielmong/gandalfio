import { homeData, socials, aboutData, contactData } from 'data';

const allCopy = JSON.stringify({ homeData, aboutData, contactData });
const featured = homeData.projects.filter((p) => p.featured);

it('features exactly these six, in this order', () => {
  expect(featured.map((p) => p.title)).toEqual([
    'Vaka',
    'Lorestone',
    'SignificantOther',
    'Yggdrasil',
    'Grain',
    'Home Control',
  ]);
});

it('gives every featured project a stack and either a public repo or private flag', () => {
  for (const p of featured) {
    expect(p.stack.length).toBeGreaterThan(0);
    if (p.private) expect(p.repo).toBeUndefined();
    else expect(p.repo).toMatch(/^https:\/\/github\.com\//);
  }
});

it('never links the private Lorestone repo', () => {
  expect(allCopy).not.toMatch(/dndcompanion/i);
});

it('has live links only for Vaka, Lorestone, Yggdrasil, Grain and Algo Visualizer', () => {
  expect(
    homeData.projects
      .filter((p) => p.live)
      .map((p) => p.title)
      .sort()
  ).toEqual(['Algo Visualizer', 'Grain', 'Lorestone', 'Vaka', 'Yggdrasil']);
});

it('drops removed projects', () => {
  expect(allCopy).not.toMatch(
    /Crops Chronicles|diseno-videojuegos|Gandalf\.io/i
  );
});

it('uses only the four professional socials', () => {
  expect(socials.map((s) => s.name)).toEqual([
    'GitHub',
    'LinkedIn',
    'Email',
    'WhatsApp',
  ]);
});

it('never mentions AI in copy', () => {
  const copyWithoutUrls = allCopy
    .replace(/https?:\/\/[^"]+/g, '')
    .replace('Claude API', '');
  expect(copyWithoutUrls).not.toMatch(
    /\bAI\b|artificial intelligence|\bLLM|Claude|ChatGPT|Copilot/i
  );
});

it('avoids buzzwords', () => {
  expect(allCopy).not.toMatch(
    /passionate|leverag|cutting-edge|innovative|seamless|synerg/i
  );
});

it('lists archive projects newest first', () => {
  const years = homeData.projects.filter((p) => !p.featured).map((p) => p.year);
  expect(years).toEqual([...years].sort((a, b) => b - a));
});

it('has a screenshot for every featured project', () => {
  for (const p of featured) expect(p.image, p.title).toBeTruthy();
});
