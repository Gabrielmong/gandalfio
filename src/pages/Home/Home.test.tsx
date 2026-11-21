import { screen, within } from '@testing-library/react';
import { renderWithProviders } from 'test/render';
import { homeData } from 'data';
import { Home } from 'pages/Home';
import { ProjectCard } from 'components/ProjectCard';
import { ArchiveList } from 'components/ArchiveList';

const byTitle = (title: string) =>
  homeData.projects.find((p) => p.title === title)!;

it('leads with the name as the page heading', () => {
  renderWithProviders(<Home />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'Gabriel Monge' })
  ).toBeInTheDocument();
});

it('shows six featured cards and the archive', () => {
  renderWithProviders(<Home />);
  expect(screen.getAllByTestId('project-card')).toHaveLength(6);
  expect(
    screen.getByRole('heading', { name: /earlier work/i })
  ).toBeInTheDocument();
});

it('uses the fallback header and no Live link when a project has no image or live url', () => {
  const significantOther = { ...byTitle('SignificantOther'), image: undefined };
  renderWithProviders(<ProjectCard project={significantOther} />);
  expect(screen.getByTestId('project-fallback')).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /live/i })).toBeNull();
  expect(screen.getByRole('link', { name: /code/i })).toHaveAttribute(
    'href',
    significantOther.repo
  );
});

it('shows a private project with a Live link, no Code link, and a label', () => {
  renderWithProviders(<ProjectCard project={byTitle('Lorestone')} />);
  expect(screen.getByRole('link', { name: /live/i })).toHaveAttribute(
    'href',
    'https://lorestone.app/landing'
  );
  expect(screen.queryByRole('link', { name: /code/i })).toBeNull();
  expect(screen.getByText(/private repo/i)).toBeInTheDocument();
});

it('opens project links in a new tab', () => {
  renderWithProviders(<ProjectCard project={byTitle('Vaka')} />);
  for (const link of screen.getAllByRole('link')) {
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
  }
});

it('lists archive rows newest first with years', () => {
  renderWithProviders(
    <ArchiveList projects={homeData.projects.filter((p) => !p.featured)} />
  );
  const years = screen
    .getAllByTestId('archive-year')
    .map((e) => Number(e.textContent));
  expect(years.length).toBe(7);
  expect(years).toEqual([...years].sort((a, b) => b - a));
});

it('links every repo of a multi-repo archive project', () => {
  renderWithProviders(<ArchiveList projects={[byTitle('Tracker')]} />);
  const row = screen.getByTestId('archive-row');
  expect(within(row).getByRole('link', { name: /frontend/i })).toHaveAttribute(
    'href',
    'https://github.com/Gabrielmong/tracker'
  );
  expect(within(row).getByRole('link', { name: /backend/i })).toHaveAttribute(
    'href',
    'https://github.com/Gabrielmong/tracker-backend'
  );
});

it('shows no photo', () => {
  renderWithProviders(<Home />);
  expect(screen.queryByRole('img', { name: /headshot|gabriel/i })).toBeNull();
});

it('links Home Control to its public repo with no Live link', () => {
  renderWithProviders(<ProjectCard project={byTitle('Home Control')} />);
  expect(screen.getByRole('link', { name: /code/i })).toHaveAttribute(
    'href',
    'https://github.com/Gabrielmong/iot'
  );
  expect(screen.queryByRole('link', { name: /live/i })).toBeNull();
});
