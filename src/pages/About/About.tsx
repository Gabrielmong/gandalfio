import { Container, Button, Box, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { aboutData } from 'data/about';
import { motion } from 'framer-motion';

export const About = (): ReactElement => {
  const handleClick = () => {
    window.open('https://github.com/Gabrielmong', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: '100vh',
          paddingTop: '2rem',
          boxShadow: '0px -15px 20px 10px rgba(0,0,0,0.2)',
        }}
        maxWidth="xl"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Box
              sx={{
                paddingBottom: '2rem',
              }}
            >
              <Typography variant="h2">{aboutData.title}</Typography>
              <Typography variant="h6">{aboutData.description}</Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.7, type: 'spring' }}
          >
            {aboutData.paragraphs.map((paragraph, index) => (
              <Box
                sx={{
                  paddingBottom: '1rem',
                }}
                key={index}
              >
                <Typography variant="h6">{paragraph}</Typography>
              </Box>
            ))}
          </motion.div>
          <Box
            sx={{
              paddingBottom: '1rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              <Button variant="outlined" onClick={handleClick}>
                Look at my github profile
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Container>
    </motion.div>
  );
};
