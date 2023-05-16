import { ReactElement } from 'react';
import {
  Container,
  IconButton,
  Button,
  Box,
  Typography,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { homeData } from 'data';
import { Card } from 'components/Card';
import { motion } from 'framer-motion';

export const Home = (): ReactElement => {
  const navigation = useNavigate();

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
            <Typography variant="h2">{homeData.title}</Typography>
          </Box>
          <Box
            sx={{
              paddingBottom: '1rem',
            }}
          >
            <Typography variant="h6">{homeData.description}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">{homeData.segue}</Typography>
          </Box>
        </Container>
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
            <Typography variant="h3">Projects</Typography>
          </Box>
          <Grid container spacing={2} paddingBottom={5}>
            {homeData.projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={project.title}>
                <Card
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </motion.div>
  );
};
