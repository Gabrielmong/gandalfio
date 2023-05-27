import { motion, useAnimation } from 'framer-motion';
import { StaggeredCardProps } from './StaggeredCard.model';
import { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card } from 'components';

export const StaggeredCard = ({
  delay,
  project,
  onAnimationComplete
}: StaggeredCardProps): ReactElement => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 1,
        transition: {
          duration: 0.6,
          delay: delay,
        },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 100}}
      onAnimationComplete={onAnimationComplete}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.1 },
      }}
      style={{ height: '100%' }}
    >
      <Card
        title={project.title}
        description={project.description}
        link={project.link}
      />
    </motion.div>
  );
};
