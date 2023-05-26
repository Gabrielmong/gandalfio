import { IconButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactElement, useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const BackToTop = (): ReactElement => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.3 }, rotate: 180 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            cursor: 'pointer',
            borderRadius: '50%',
            boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.2)',
            backgroundColor: 'white',
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ArrowUpwardIcon color="secondary" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
