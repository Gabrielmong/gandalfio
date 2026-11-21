import { ReactElement, ReactNode } from 'react';
import {
  Box,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { aboutData } from 'data';
import { Reveal } from 'components';
import { Tech } from 'models';
import { externalLinkProps } from 'components/ProjectCard/ProjectCard';

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <Typography
    variant="overline"
    component="h2"
    color="text.secondary"
    sx={{ display: 'block', mb: 2 }}
  >
    {children}
  </Typography>
);

const Paragraphs = ({ items }: { items: string[] }) => (
  <Stack spacing={2} sx={{ maxWidth: 680 }}>
    {items.map((p) => (
      <Typography key={p} sx={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
        {p}
      </Typography>
    ))}
  </Stack>
);

const TechRow = ({ tech }: { tech: Tech }) => (
  <Box
    component="a"
    href={tech.link}
    {...externalLinkProps}
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1.25,
      py: 0.75,
      color: 'text.primary',
      textDecoration: 'none',
      '&:hover': { color: 'primary.main' },
    }}
  >
    {tech.icon ? (
      <Box
        component="img"
        src={tech.icon}
        alt=""
        sx={{ width: 20, height: 20 }}
      />
    ) : (
      <Box
        sx={{ width: 20, height: 20, display: 'grid', placeItems: 'center' }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            bgcolor: 'primary.main',
          }}
        />
      </Box>
    )}
    <Typography variant="body2">{tech.name}</Typography>
  </Box>
);

export const About = (): ReactElement => (
  <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: 8 }}>
    <Reveal>
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 3 }}
      >
        {aboutData.title}
      </Typography>
      <Paragraphs items={aboutData.bio} />
    </Reveal>

    <Box component="section" sx={{ mt: 10 }}>
      <SectionLabel>What I work with</SectionLabel>
      <Grid container spacing={3}>
        {aboutData.stack.map((g, i) => (
          <Grid key={g.group} size={{ xs: 12, sm: 6, md: 3 }}>
            <Reveal delay={0.06 * i}>
              <Card sx={{ p: 2.5, height: '100%' }}>
                <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                  {g.group}
                </Typography>
                {g.items.map((t) => (
                  <TechRow key={t.name} tech={t} />
                ))}
              </Card>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box component="section" sx={{ mt: 6 }}>
      <SectionLabel>Also used</SectionLabel>
      <Reveal>
        <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: 'wrap' }}>
          {aboutData.tools.map((t) => (
            <Chip
              key={t.name}
              label={t.name}
              component="a"
              href={t.link}
              clickable
              variant="outlined"
              {...externalLinkProps}
            />
          ))}
        </Stack>
      </Reveal>
    </Box>

    <Box component="section" sx={{ mt: 10 }}>
      <SectionLabel>A bit more</SectionLabel>
      <Reveal>
        <Paragraphs items={[...aboutData.personal, aboutData.work]} />
      </Reveal>
    </Box>
  </Container>
);
