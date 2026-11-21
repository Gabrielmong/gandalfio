import { HashRouter } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { AppRoutes, Footer, Topbar } from 'components';
import { BackToTop } from 'components/BackToTop/BackToTop';
import { darkTheme, lightTheme, useThemeMode } from 'theme';

function App() {
  const { mode, toggle } = useThemeMode();

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <HashRouter>
        <Box
          sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
        >
          <Topbar mode={mode} onToggleTheme={toggle} />
          <Box sx={{ flex: 1 }}>
            <AppRoutes />
          </Box>
          <Footer />
        </Box>
        <BackToTop />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
