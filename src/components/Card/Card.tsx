import {
  Card as MUICard,
  CardContent,
  CardActions,
  ButtonBase,
  CardHeader,
  useTheme,
} from '@mui/material';
import { Typography, Button } from '@mui/material';
import { ReactElement } from 'react';
import { CardProps } from './Card.model';
import { useNavigate } from 'react-router-dom';

export const Card = ({ title, description, link }: CardProps): ReactElement => {
  const navigation = useNavigate();
  const theme = useTheme();

  const handleLinkClick = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigation(path);
    }
  };

  const clickMeTexts: string[] = [
    'Click me to see me',
    'Click me to learn more',
    'Click me to see more',
    'Click me to maybe see a preview, probably not though',
    'Hi, I\'m a clickable card',
    'I just put some random text here',
    'I\'m a card, I\'m clickable',
    'clickclickclick',
    'Touch me',
    'This one is pretty cool',
  ];

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
        <CardHeader
          title={title}
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }}
        />
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            sx={{
              color: theme.palette.secondary.main,
            }}
          >
            {clickMeTexts[Math.floor(Math.random() * clickMeTexts.length)]}
          </Typography>
        </CardActions>
      </MUICard>
    </ButtonBase>
  );
};
