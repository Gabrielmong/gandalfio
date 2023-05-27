import { CardProps } from 'components';
import { Project } from 'models/Project';

export interface StaggeredCardProps {
  delay: number;
  onAnimationComplete?: () => void;
  project: Project;
}
