import { useEffect } from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'test/render';
import { AppRoutes } from 'components/AppRoutes';
import { Resume } from './Resume';

// pdf.js needs canvas and a worker, neither of which jsdom has; stand in for it.
vi.mock('react-pdf', () => ({
  pdfjs: { GlobalWorkerOptions: {} },
  Document: ({
    file,
    onLoadSuccess,
    children,
  }: {
    file: string;
    onLoadSuccess: (doc: { numPages: number }) => void;
    children: React.ReactNode;
  }) => {
    useEffect(() => onLoadSuccess({ numPages: 2 }), [onLoadSuccess]);
    return (
      <div data-testid="pdf-document" data-file={file}>
        {children}
      </div>
    );
  },
  Page: ({ pageNumber }: { pageNumber: number }) => (
    <div data-testid="pdf-page">page {pageNumber}</div>
  ),
}));

const pdf = `${import.meta.env.BASE_URL}GabrielsResume.pdf`;

it('renders every page of the CV', async () => {
  renderWithProviders(<Resume />);
  expect(screen.getByTestId('pdf-document')).toHaveAttribute('data-file', pdf);
  expect(await screen.findAllByTestId('pdf-page')).toHaveLength(2);
});

it('keeps a direct download next to the viewer', () => {
  renderWithProviders(<Resume />);
  const dl = screen.getByRole('link', { name: /download cv/i });
  expect(dl).toHaveAttribute('href', pdf);
  expect(dl).toHaveAttribute('download');
});

it('is reachable at #/resume', async () => {
  renderWithProviders(<AppRoutes />, { route: '/resume' });
  expect(
    await screen.findByRole('heading', { level: 1, name: 'Resume' })
  ).toBeInTheDocument();
});
