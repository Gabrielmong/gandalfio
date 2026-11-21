import { screen } from '@testing-library/react';
import { renderWithProviders } from 'test/render';
import { setViewportWidth } from 'test/setup';
import { Topbar } from 'components/Topbar';
import { Footer } from 'components/Footer';
import { AppRoutes } from 'components/AppRoutes';

it('links the CV under the base path', () => {
  renderWithProviders(<Topbar mode="dark" onToggleTheme={() => {}} />);
  const cv = screen.getAllByRole('link', { name: /cv/i })[0];
  expect(cv).toHaveAttribute(
    'href',
    `${import.meta.env.BASE_URL}GabrielsResume.pdf`
  );
  expect(cv).toHaveAttribute('download');
});

it('shows the nav links inline on desktop', () => {
  renderWithProviders(<Topbar mode="dark" onToggleTheme={() => {}} />);
  for (const name of ['Home', 'About', 'Contact'])
    expect(screen.getByRole('link', { name })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Open menu' })).toBeNull();
});

it('collapses nav into a menu on phones', () => {
  setViewportWidth(375);
  renderWithProviders(<Topbar mode="dark" onToggleTheme={() => {}} />);
  expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'About' })).toBeNull();
});

it('offers a theme toggle', () => {
  renderWithProviders(<Topbar mode="dark" onToggleTheme={() => {}} />);
  expect(
    screen.getByRole('button', { name: /light mode/i })
  ).toBeInTheDocument();
});

it('footer shows exactly the four socials', () => {
  renderWithProviders(<Footer />);
  expect(
    screen.getAllByRole('link').map((a) => a.getAttribute('aria-label'))
  ).toEqual(['GitHub', 'LinkedIn', 'Email', 'WhatsApp']);
});

it('renders About on a deep link', () => {
  renderWithProviders(<AppRoutes />, { route: '/about' });
  expect(
    screen.getAllByRole('heading', { name: /about/i }).length
  ).toBeGreaterThan(0);
});
