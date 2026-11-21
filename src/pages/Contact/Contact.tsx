import { ReactElement } from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import FileDownloadOutlined from '@mui/icons-material/FileDownloadOutlined';
import { contactData, cvHref } from 'data';
import { Reveal, SocialLinks } from 'components';

export const Contact = (): ReactElement => (
  <Container maxWidth="md" sx={{ pt: { xs: 8, md: 12 }, pb: 8 }}>
    <Reveal>
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}
      >
        {contactData.title}
      </Typography>
      <Typography
        sx={{
          maxWidth: 560,
          fontSize: '1.125rem',
          lineHeight: 1.7,
          color: 'text.secondary',
        }}
      >
        {contactData.intro}
      </Typography>
      <Box sx={{ mt: 5 }}>
        <SocialLinks variant="buttons" />
      </Box>
      <Stack
        direction="row"
        useFlexGap
        spacing={1.5}
        sx={{ mt: 5, flexWrap: 'wrap' }}
      >
        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/resume"
          startIcon={<DescriptionOutlined />}
        >
          View CV
        </Button>
        <Button
          variant="outlined"
          size="large"
          href={cvHref}
          download
          startIcon={<FileDownloadOutlined />}
        >
          Download CV
        </Button>
      </Stack>
    </Reveal>
  </Container>
);
