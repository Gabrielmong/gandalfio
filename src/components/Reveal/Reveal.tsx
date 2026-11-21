import { ReactElement, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

/** Fades and lifts its children in the first time they scroll into view. */
export const Reveal = ({ children, delay = 0 }: RevealProps): ReactElement => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      style={{ height: '100%' }}
    >
      {children}
    </motion.div>
  );
};
