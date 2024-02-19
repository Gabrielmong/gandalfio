import { createTheme, responsiveFontSizes } from '@mui/material';

const lightThemeSpec = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: 'secondary',
          '&::-webkit-scrollbar': {
            width: '0.5rem',
            height: '0.5rem',
          },
          '&::-webkit-scrollbar-track': {
            background: '#0f1c2b',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#314463',
            '&:hover': {
              background: '#345282',
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '3.5rem',
        },
        h2: {
          fontSize: '3rem',
        },
        h3: {
          fontSize: '2.5rem',
        },
        h4: {
          fontSize: '2rem',
        },
        h5: {
          fontSize: '1.5rem',
        },
        h6: {
          fontSize: '1.25rem',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0f1c2b',
    },
    secondary: {
      main: '#123d61',
    },
    background: {
      default: '#ededed',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Segoe UI',
  },
});

const darkThemeSpec = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: 'primary',
          '&::-webkit-scrollbar': {
            width: '0.5rem',
            height: '0.5rem',
          },
          '&::-webkit-scrollbar-track': {
            background: '#323232',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#474747',
            '&:hover': {
              background: '#666666',
            },
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#dddddd',
    },
    secondary: {
      main: '#474747',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: 'Segoe UI',
  },
});

export const lightTheme = responsiveFontSizes(lightThemeSpec);
export const darkTheme = responsiveFontSizes(darkThemeSpec);
