import { ReactElement } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { homeData } from 'data';
import { ArchiveList, ProjectCard, Reveal, SocialLinks } from 'components';

const SectionLabel = ({ children }: { children: string }) => (
  <Typography
    variant="overline"
    component="h2"
    color="text.secondary"
    sx={{ display: 'block', mb: 2 }}
  >
    {children}
  </Typography>
);

/** First card is wide; so is a last card that would otherwise sit alone in its row. */
const isWide = (i: number, n: number) =>
  i === 0 || (i === n - 1 && (n - 1) % 2 === 1);

export const Home = (): ReactElement => {
  const featured = homeData.projects.filter((p) => p.featured);
  const archive = homeData.projects.filter((p) => !p.featured);

  return (
    <Container maxWidth="lg">
      <Box
        component="section"
        sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 8, md: 12 } }}
      >
        <Reveal>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.75rem', md: '4rem' } }}
          >
            {homeData.name}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ mt: 1, fontWeight: 400 }}
          >
            {homeData.role} · {homeData.location}
          </Typography>
          <Typography
            sx={{ mt: 3, maxWidth: 620, fontSize: '1.125rem', lineHeight: 1.7 }}
          >
            {homeData.intro}
          </Typography>
          <Box sx={{ mt: 3 }}>
            <SocialLinks variant="chips" />
          </Box>
        </Reveal>
      </Box>

      <Box component="section" sx={{ pb: 10 }}>
        <SectionLabel>Featured projects</SectionLabel>
        <Grid container spacing={3}>
          {featured.map((project, i) => (
            <Grid
              key={project.title}
              size={{ xs: 12, md: isWide(i, featured.length) ? 12 : 6 }}
            >
              <Reveal
                delay={isWide(i, featured.length) ? 0 : 0.08 * ((i - 1) % 2)}
              >
                <ProjectCard
                  project={project}
                  wide={isWide(i, featured.length)}
                />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box component="section" sx={{ pb: 6 }}>
        <SectionLabel>Earlier work</SectionLabel>
        <Reveal>
          <ArchiveList projects={archive} />
        </Reveal>
      </Box>
    </Container>
  );
};
