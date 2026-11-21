import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from 'theme';

/** Render inside the app's theme and a router, optionally at a given route. */
export const renderWithProviders = (
  ui: ReactElement,
  { route = '/' }: { route?: string } = {}
) =>
  render(
    <ThemeProvider theme={darkTheme}>
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
    </ThemeProvider>
  );
