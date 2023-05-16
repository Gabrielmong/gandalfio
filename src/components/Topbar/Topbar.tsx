import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Button,
  Box,
  Typography,
  Menu,
  MenuItem,
  Switch,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { TopbarProps } from './Topbar.model';

export const Topbar = ({
  navAnchor,
  handleNavAnchor,
  onDismiss,
  title,
  navItems,
  currentTheme,
  themeSwich,
}: TopbarProps): ReactElement => {
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const navigation = useNavigate();

  const handleLinkClick = (path: string) => {
    navigation(path);
    onDismiss();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  window.onscroll = () => {
    if (navRef.current) {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  return (
    <AppBar
      position="sticky"
      ref={navRef}
      color={scrolled ? 'primary' : 'secondary'}
      sx={{
        transition: 'background-color 0.5s ease',
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            color="inherit"
            onClick={() => handleLinkClick('/')}
            sx={{ textTransform: 'none' }}
          >
            <Typography variant="h6">{title}</Typography>
          </Button>
        </Box>

        <Switch
          checked={currentTheme === 'dark'}
          onChange={themeSwich}
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleNavAnchor}
            >
              {navAnchor ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <Menu
              anchorEl={navAnchor}
              open={Boolean(navAnchor)}
              onClose={onDismiss}
              onClick={onDismiss}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => handleLinkClick(item.path)}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => handleLinkClick(item.path)}
                sx={{ textTransform: 'none' }}
              >
                {item.label}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
