import { ReactElement, useEffect, useState } from 'react';
import { Container, Box, Typography, Grid, useTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { homeData } from 'data';
import { Card } from 'components/Card';
import { motion, useAnimation } from 'framer-motion';
import { keyframes } from '@emotion/react';
import { HomeProps } from './Home.model';
import { useInView } from 'react-intersection-observer';

export const Home = ({ currentTheme }: HomeProps): ReactElement => {
  const navigation = useNavigate();
  const theme = useTheme();
  const [animationDone, setAnimationDone] = useState(false);
  const [gradient, setGradient] = useState({
    from: '#FE6B8B',
    to: '#FF8E53',
  });

  useEffect(() => {
    if (currentTheme === 'dark') {
      setGradient({
        from: '#000000',
        to: '#dddddd',
      });
    } else {
      setGradient({
        from: '#0f1c2b',
        to: '#55a0e0',
      });
    }
  }, [currentTheme]);

  const movingTitle = keyframes`
    to { background-position: 270% center; }
  `;

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 1,
        transition: {
          duration: 1.2,
        },
      });
    }

    if (!inView) {
      setAnimationDone(false);
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Container
        sx={{
          boxShadow: '0px -15px 20px 10px rgba(0,0,0,0.2)',
        }}
        maxWidth="xl"
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            minHeight: 'calc(100vh - 64px)',
          }}
        >
          <Box
            sx={{
              paddingBottom: '2rem',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to}, ${gradient.from})`,
                animation: `${movingTitle} 10s infinite linear`,
                animationFillMode: 'forwards',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1.5',
              }}
            >
              {homeData.title}
            </Typography>
            <Typography variant="h6" color={'secondary'}>
              {homeData.position}
            </Typography>
          </Box>
          <Box
            sx={{
              paddingBottom: '1rem',
            }}
          >
            <Typography variant="h6">
              {homeData.description}{' '}
              <Link
                to="/about"
                style={{
                  textDecoration: 'none',
                  color: theme.palette.secondary.main,
                }}
              >
                Learn more about me
              </Link>
            </Typography>
          </Box>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Box>
              <Typography variant="h6">{homeData.segue}</Typography>
            </Box>
          </motion.div>
        </Container>
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, y: 100 }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
            }}
          >
            <Box
              sx={{
                paddingBottom: '1rem',
              }}
            >
              <Typography variant="h3" gutterBottom>
                Projects
              </Typography>
            </Box>
            <Grid container spacing={2} paddingBottom={15}>
              {homeData.projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={project.title}>
                  {inView ? (
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 1 }}
                      transition={{
                        duration: 0.7,
                        delay: animationDone ? 0 : 0.1 * index,
                      }}
                      style={{ height: '100%' }}
                      onAnimationComplete={() => {
                        if (index === homeData.projects.length - 1) {
                          setAnimationDone(true);
                        }
                      }}
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <Card
                        title={project.title}
                        description={project.description}
                        link={project.link}
                      />
                    </motion.div>
                  ) : (
                    <></>
                  )}
                </Grid>
              ))}
            </Grid>
          </Container>
        </motion.div>
      </Container>
    </motion.div>
  );
};
