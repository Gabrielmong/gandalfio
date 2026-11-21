import { screen } from '@testing-library/react';
import { renderWithProviders } from 'test/render';
import { About } from './About';

it('shows the four stack groups', () => {
  renderWithProviders(<About />);
  for (const g of ['Web', 'Mobile', 'Backend', 'Desktop'])
    expect(screen.getByRole('heading', { name: g })).toBeInTheDocument();
});

it('has a single page heading', () => {
  renderWithProviders(<About />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'About' })
  ).toBeInTheDocument();
});
