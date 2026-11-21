import { ReactElement, useState } from 'react';
import { NavLink } from 'react-router';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import { ThemeMode } from 'theme';

interface TopbarProps {
  mode: ThemeMode;
  onToggleTheme: () => void;
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Topbar = ({ mode, onToggleTheme }: TopbarProps): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

  const themeToggle = (
    <IconButton
      onClick={onToggleTheme}
      color="inherit"
      aria-label={
        mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
    >
      {mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
    </IconButton>
  );

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 1 }}>
          <Typography
            component={NavLink}
            to="/"
            sx={{
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              mr: 'auto',
            }}
          >
            gandalf.io
          </Typography>

          {isMobile ? (
            <>
              {themeToggle}
              <IconButton
                color="inherit"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 240, pt: 2 }} role="navigation">
                  <List>
                    {navItems.map((item) => (
                      <ListItemButton
                        key={item.path}
                        component={NavLink}
                        to={item.path}
                        end
                        onClick={() => setOpen(false)}
                      >
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    ))}
                  </List>
                  <Divider />
                  <Box sx={{ p: 2 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      component={NavLink}
                      to="/resume"
                      onClick={() => setOpen(false)}
                      startIcon={<DescriptionOutlined />}
                    >
                      CV
                    </Button>
                  </Box>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  end
                  color="inherit"
                  sx={{
                    color: 'text.secondary',
                    '&.active': {
                      color: 'text.primary',
                      boxShadow: `inset 0 -2px 0 ${theme.palette.primary.main}`,
                    },
                    borderRadius: 0,
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="outlined"
                size="small"
                component={NavLink}
                to="/resume"
                startIcon={<DescriptionOutlined />}
                sx={{ ml: 1, color: 'text.primary', borderColor: 'divider' }}
              >
                CV
              </Button>
              {themeToggle}
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
