import { Container, Box, Typography, Grid, keyframes } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactElement, useEffect, useState } from 'react';
import { socialMediaData } from 'data';
import { FooterProps } from './Footer.model';

export const Footer = ({ currentTheme }: FooterProps): ReactElement => {
  const [gradient, setGradient] = useState({
    from: '#FE6B8B',
    to: '#FF8E53',
  });

  const [otherGradient, setOtherGradient] = useState({
    from: '#FE6B8B',
    to: '#FF8E53',
  });

  useEffect(() => {
    if (currentTheme === 'dark') {
      setGradient({
        from: '#000000',
        to: '#434343',
      });

      setOtherGradient({
        from: '#444444',
        to: '#ffffff',
      });
    } else {
      setGradient({
        from: '#0f1c2b',
        to: '#275882',
      });

      setOtherGradient({
        from: '#12253b',
        to: '#ffffff',
      });
    }
  }, [currentTheme]);

  const movingTitle = keyframes`
    to { background-position: 270% center; }
`;

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
          <Typography
            variant="h6"
            sx={{
              display: 'inline',
              color: 'white',
              textDecoration: 'none',
              background: `linear-gradient(90deg, ${otherGradient.from}, ${otherGradient.to}, ${otherGradient.from})`,
              animation: `${movingTitle} 10s infinite linear`,
              animationFillMode: 'forwards',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.5',
            }}
          >
            Gabriel Monge
          </Typography>
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
