import { ReactElement } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { SocialLinks } from 'components/SocialLinks';

export const Footer = (): ReactElement => (
  <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', mt: 8 }}>
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{ py: 4, alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Typography variant="body2" color="text.secondary">
          Gabriel Monge · {new Date().getFullYear()}
        </Typography>
        <SocialLinks variant="icons" />
      </Stack>
    </Container>
  </Box>
);
