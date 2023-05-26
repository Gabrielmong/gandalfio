import {
  Card as MUICard,
  CardContent,
  CardActions,
  ButtonBase,
} from '@mui/material';
import { Typography, Button } from '@mui/material';
import { ReactElement } from 'react';
import { CardProps } from './Card.model';
import { useNavigate } from 'react-router-dom';

export const Card = ({ title, description, link }: CardProps): ReactElement => {
  const navigation = useNavigate();

  const handleLinkClick = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigation(path);
    }
  };
  return (
    <ButtonBase
      onClick={() => handleLinkClick(link)}
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <MUICard
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant="outlined"
            onClick={() => handleLinkClick(link)}
            sx={{
              textTransform: 'none',
            }}
          >
            View
          </Button>
        </CardActions>
      </MUICard>
    </ButtonBase>
  );
};
