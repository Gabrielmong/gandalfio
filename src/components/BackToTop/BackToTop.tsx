import { ReactElement, useEffect, useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

/** Floating "back to top" button, shown after scrolling down a screen. */
export const BackToTop = (): ReactElement => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Zoom in={show}>
      <Fab
        size="small"
        color="primary"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};
