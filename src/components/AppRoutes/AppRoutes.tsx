import { ReactElement, Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { About, Contact, Home } from 'pages';

// pdf.js is large, so the resume viewer loads only when someone opens it.
const Resume = lazy(() =>
  import('pages/Resume').then((m) => ({ default: m.Resume }))
);

/** Page routes with a short cross-fade; scrolls to top on navigation. */
export const AppRoutes = (): ReactElement => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo?.({ top: 0 });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/resume"
            element={
              <Suspense fallback={null}>
                <Resume />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
};
