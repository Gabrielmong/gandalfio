import { About, Contact, Home } from 'pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AnimatedRoutesProps } from './AnimatedRoutes.Model';

export const AnimatedRoutes = ({
  currentTheme,
}: AnimatedRoutesProps) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/">
          <Route path="/" element={<Home 
            currentTheme={currentTheme}
          />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
