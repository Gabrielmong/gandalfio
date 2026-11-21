import { ReactElement } from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import { Project, ProjectLink } from 'models';
import { externalLinkProps } from 'components/ProjectCard/ProjectCard';

interface ArchiveListProps {
  projects: Project[];
}

const linksOf = (p: Project): ProjectLink[] => [
  ...(p.live ? [{ label: 'Live', url: p.live }] : []),
  ...(p.repo ? [{ label: 'Code', url: p.repo }] : []),
  ...(p.repos ?? []),
];

/** Compact "title · description … links · year" rows, newest first. */
export const ArchiveList = ({ projects }: ArchiveListProps): ReactElement => {
  const sorted = [...projects].sort((a, b) => b.year - a.year);
  return (
    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
      {sorted.map((p) => (
        <Box
          component="li"
          key={p.title}
          data-testid="archive-row"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr auto', sm: '1fr auto auto' },
            columnGap: 3,
            rowGap: 0.5,
            alignItems: 'baseline',
            py: 1.75,
            borderTop: 1,
            borderColor: 'divider',
          }}
        >
          <Typography
            sx={{
              gridColumn: { xs: '1', sm: '1' },
              gridRow: { xs: '1', sm: '1' },
            }}
          >
            <Box component="span" sx={{ fontWeight: 600 }}>
              {p.title}
            </Box>
            <Box component="span" sx={{ color: 'text.secondary' }}>
              {' · '}
              {p.description}
            </Box>
          </Typography>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              gridRow: { xs: '2', sm: '1' },
              gridColumn: { xs: '1', sm: '2' },
            }}
          >
            {linksOf(p).map((l) => (
              <Link
                key={l.url}
                href={l.url}
                variant="body2"
                {...externalLinkProps}
              >
                {l.label} ↗
              </Link>
            ))}
          </Stack>
          <Typography
            data-testid="archive-year"
            variant="body2"
            color="text.secondary"
            sx={{
              fontVariantNumeric: 'tabular-nums',
              gridRow: '1',
              gridColumn: { xs: '2', sm: '3' },
            }}
          >
            {p.year}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
