import { screen } from '@testing-library/react';
import { renderWithProviders } from 'test/render';
import { Contact } from './Contact';

it('offers a direct CV download', () => {
  renderWithProviders(<Contact />);
  const cv = screen.getByRole('link', { name: /download cv/i });
  expect(cv).toHaveAttribute(
    'href',
    `${import.meta.env.BASE_URL}GabrielsResume.pdf`
  );
  expect(cv).toHaveAttribute('download');
});

it('links all four socials', () => {
  renderWithProviders(<Contact />);
  for (const n of ['GitHub', 'LinkedIn', 'Email', 'WhatsApp'])
    expect(
      screen.getByRole('link', { name: new RegExp(n, 'i') })
    ).toBeInTheDocument();
});

it('links to the in-page CV viewer', () => {
  renderWithProviders(<Contact />);
  expect(screen.getByRole('link', { name: /view cv/i })).toHaveAttribute(
    'href',
    '/resume'
  );
});
