import { motion, useAnimation } from 'framer-motion';
import { StaggeredListItemProps } from './StaggeredListItem.model';
import { Chip, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const StaggeredListItem = ({
  delay,
  skill,
  direction,
  onAnimationComplete,
  ...props
}: StaggeredListItemProps): ReactElement => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
          delay: delay,
        },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
      onAnimationComplete={onAnimationComplete}
    >
      <ListItem {...props}>
        <ListItemIcon>
          <img src={skill.icon} alt={skill.name} width={40} height={40} />
        </ListItemIcon>

        <ListItemText primary={skill.name} secondary={skill.description} />
      </ListItem>
    </motion.div>
  );
};
