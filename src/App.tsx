import { useEffect, useMemo, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Topbar, Footer } from 'components';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AnimatedRoutes } from 'components/AnimatedRoutes';
import { BackToTop } from 'components/BackToTop/BackToTop';
import { darkTheme, lightTheme } from 'theme';

function App() {
  const [navAnchor, setNavAnchor] = useState<null | HTMLElement>(null);
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('dark');

  const theme = useMemo(() => {
    return currentTheme === 'light' ? lightTheme : darkTheme;
  }, [currentTheme]);

  const handleNavAnchor = (event: React.MouseEvent<HTMLElement>) => {
    setNavAnchor(navAnchor ? null : event.currentTarget);
  };

  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setCurrentTheme(theme as 'dark' | 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Topbar
          navAnchor={navAnchor}
          handleNavAnchor={handleNavAnchor}
          onDismiss={() => setNavAnchor(null)}
          currentTheme={currentTheme}
          themeSwich={handleThemeChange}
          title="Gandalfio"
          navItems={[
            { label: 'Home', path: '/' },
            { label: 'About', path: '/about' },
            { label: 'Contact', path: '/contact' },
          ]}
        />
        <AnimatedRoutes currentTheme={currentTheme} />

        <BackToTop />
        <Footer currentTheme={currentTheme} />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
