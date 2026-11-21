import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from '@mui/material/styles';

const fontFamily = [
  '"Segoe UI"',
  'system-ui',
  '-apple-system',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
].join(',');

interface Tokens {
  mode: 'dark' | 'light';
  bg: string;
  paper: string;
  border: string;
  text: string;
  muted: string;
  primary: string;
  scrollThumb: string;
}

const dark: Tokens = {
  mode: 'dark',
  bg: '#0f1c2b',
  paper: '#16283d',
  border: '#22395a',
  text: '#e8eef5',
  muted: '#9fb6d3',
  primary: '#5b8fd6',
  scrollThumb: '#314463',
};

const light: Tokens = {
  mode: 'light',
  bg: '#ededed',
  paper: '#ffffff',
  border: '#d5dbe3',
  text: '#0f1c2b',
  muted: '#4a5d75',
  primary: '#0f1c2b',
  scrollThumb: '#9aa8b8',
};

const build = (t: Tokens): Theme => {
  const options: ThemeOptions = {
    palette: {
      mode: t.mode,
      primary: { main: t.primary },
      secondary: { main: t.muted },
      background: { default: t.bg, paper: t.paper },
      text: { primary: t.text, secondary: t.muted },
      divider: t.border,
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily,
      h1: { fontWeight: 700, letterSpacing: '-0.01em' },
      h2: { fontWeight: 700, letterSpacing: '-0.01em' },
      h3: { fontWeight: 600 },
      overline: { letterSpacing: '0.14em', fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { scrollBehavior: 'smooth' },
          body: {
            scrollbarColor: `${t.scrollThumb} ${t.bg}`,
            transition: 'background-color 0.3s ease',
          },
          '@media (prefers-reduced-motion: reduce)': {
            html: { scrollBehavior: 'auto' },
          },
        },
      },
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: { root: { border: `1px solid ${t.border}` } },
      },
      MuiChip: { styleOverrides: { root: { borderRadius: 6 } } },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: `${t.bg}e6`,
            backdropFilter: 'blur(8px)',
            borderBottom: `1px solid ${t.border}`,
            color: t.text,
          },
        },
      },
      MuiLink: { defaultProps: { underline: 'hover' } },
    },
  };
  return responsiveFontSizes(createTheme(options));
};

export const darkTheme = build(dark);
export const lightTheme = build(light);
