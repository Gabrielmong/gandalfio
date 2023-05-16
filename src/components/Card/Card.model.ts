import { CardProps as MUICardProps } from '@mui/material';

export interface CardProps extends MUICardProps {
  title: string;
  description: string;
  link: string;
}
