import {
  Container,
  IconButton,
  Button,
  Box,
  Typography,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactElement, useEffect, useState } from 'react';
import { socialMediaData } from 'data';
import { FooterProps } from './Footer.model';

export const Footer = ({ currentTheme }: FooterProps): ReactElement => {
  const [gradient, setGradient] = useState({
    from: '#FE6B8B',
    to: '#FF8E53',
  });

  useEffect(() => {
    console.log(currentTheme);
    if (currentTheme === 'dark') {
      setGradient({
        from: '#000000',
        to: '#434343',
      });
    } else {
      setGradient({
        from: '#0f1c2b',
        to: '#275882',
      });
    }
  }, [currentTheme]);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh',
        boxShadow: '0px 0px 20px 10px rgba(0,0,0,0.2)',
        background: `linear-gradient(120deg, ${gradient.from}, ${gradient.to})`,
        transition: 'all 0.5s ease-in-out',
      }}
      maxWidth={false}
    >
      <Typography variant="h6">
        Developed by{' '}
        <Link
          to="https://github.com/Gabrielmong"
          style={{ textDecoration: 'none', color: 'grey' }}
        >
          Gabriel Monge
        </Link>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '1rem',
        }}
      >
        <Grid container spacing={2}>
          {socialMediaData.map((item) => (
            <Grid item key={item.name}>
              <Link to={item.url} target="_blank">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '1.2rem',
                    height: '1.2rem',
                  }}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
