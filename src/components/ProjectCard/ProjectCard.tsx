import { ReactElement } from 'react';
import {
  alpha,
  Box,
  Card,
  Chip,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import LockOutlined from '@mui/icons-material/LockOutlined';
import { Project } from 'models';

interface ProjectCardProps {
  project: Project;
  /** Spans the full row with the image beside the text (md and up). */
  wide?: boolean;
}

export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

const Media = ({ project }: { project: Project }) => {
  const theme = useTheme();
  if (project.image) {
    return (
      <Box
        component="img"
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        sx={{
          width: '100%',
          height: '100%',
          aspectRatio: '16 / 9',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    );
  }
  const main = theme.palette.primary.main;
  return (
    <Box
      data-testid="project-fallback"
      sx={{
        aspectRatio: '16 / 9',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 3,
        backgroundColor: alpha(main, 0.08),
        backgroundImage: `radial-gradient(${alpha(main, 0.25)} 1px, transparent 1px), linear-gradient(135deg, ${alpha(main, 0.22)}, transparent 70%)`,
        backgroundSize: '18px 18px, 100% 100%',
      }}
    >
      <Typography variant="h4" component="span" sx={{ fontWeight: 700 }}>
        {project.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {project.stack.slice(0, 3).join(' · ')}
      </Typography>
    </Box>
  );
};

export const ProjectCard = ({
  project,
  wide = false,
}: ProjectCardProps): ReactElement => (
  <Card
    data-testid="project-card"
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: { xs: 'column', md: wide ? 'row' : 'column' },
      overflow: 'hidden',
      transition: 'border-color 0.2s ease, transform 0.2s ease',
      '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)' },
      '@media (prefers-reduced-motion: reduce)': {
        '&:hover': { transform: 'none' },
      },
    }}
  >
    <Box
      sx={{
        flex: wide ? { md: '0 0 55%' } : undefined,
        borderBottom: { xs: 1, md: wide ? 0 : 1 },
        borderColor: 'divider',
      }}
    >
      <Media project={project} />
    </Box>
    <Stack
      spacing={1.5}
      sx={{
        p: 2.5,
        flex: 1,
        justifyContent: wide ? { md: 'center' } : undefined,
      }}
    >
      <Stack
        direction="row"
        sx={{ alignItems: 'baseline', justifyContent: 'space-between', gap: 2 }}
      >
        <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
          {project.title}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ flexShrink: 0 }}>
          {project.live && (
            <Link href={project.live} variant="body2" {...externalLinkProps}>
              Live ↗
            </Link>
          )}
          {project.repo && (
            <Link href={project.repo} variant="body2" {...externalLinkProps}>
              Code ↗
            </Link>
          )}
          {project.private && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
            >
              <LockOutlined sx={{ fontSize: 14 }} /> Private repo
            </Typography>
          )}
        </Stack>
      </Stack>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1.6 }}
      >
        {project.description}
      </Typography>
      <Stack
        direction="row"
        useFlexGap
        spacing={0.75}
        sx={{ flexWrap: 'wrap', pt: 0.5 }}
      >
        {project.stack.map((tech) => (
          <Chip key={tech} label={tech} size="small" />
        ))}
      </Stack>
    </Stack>
  </Card>
);
