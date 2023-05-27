import { motion, useAnimation } from 'framer-motion';
import { StaggeredChipProps } from './StaggeredChip.model';
import { Chip } from '@mui/material';
import { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const StaggeredChip = ({
  delay,
  ready,
  ...props
}: StaggeredChipProps): ReactElement => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && ready) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 0.7,
          delay: delay,
        },
      });
    }
  }, [controls, inView, ready]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}
      style={{ display: 'inline-block' }}
    >
      <Chip
        {...props}
      />
    </motion.div>
  );
};
