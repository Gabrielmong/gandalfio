import { Container, Button, Box, Typography, Grid } from '@mui/material';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { contactData } from 'data';
import { motion } from 'framer-motion';

export const Contact = (): ReactElement => {
  const navigation = useNavigate();

  const handleLinkClick = (path: string) => {
    window.open(path, '_blank');
  };

  const handleDownloadClick = () => {
    fetch('GabrielsResume.pdf').then((response) => {
      response.blob().then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'GabrielsResume.pdf';
        link.click();
      });
    });
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
          boxShadow: '0px -15px 20px 10px rgba(0,0,0,0.2)',
        }}
        maxWidth="xl"
      >
        <Container>
          <Box
            sx={{
              paddingBottom: '2rem',
            }}
          >
            <Typography variant="h2">{contactData.title}</Typography>
            <Typography variant="h6">{contactData.description}</Typography>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            {contactData.socialMedia.map((item, index) => (
              <Box
                key={item.name}
                sx={{
                  paddingBottom: '1rem',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 * index }}
                >
                  <Button
                    sx={{
                      marginLeft: '1rem',
                      marginRight: '1rem',
                      textTransform: 'none',
                      color: 'inherit',
                      fontSize: '2rem',
                    }}
                    onClick={() => handleLinkClick(item.url)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '2rem',
                        height: '2rem',
                        marginRight: '1rem',
                      }}
                    />
                    {item.name}
                  </Button>
                </motion.div>
              </Box>
            ))}
          </Grid>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.6 }}
          >
            <Box
              sx={{
                paddingBottom: '1rem',
              }}
            >
              <Typography variant="h6">
                Or you can download my resume here:
              </Typography>
              <Button
                variant="outlined"
                onClick={handleDownloadClick}
                sx={{
                  marginTop: '1rem',
                  color: 'inherit',
                  marginRight: '1rem',
                }}
              >
                Download Resume
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Container>
    </motion.div>
  );
};
