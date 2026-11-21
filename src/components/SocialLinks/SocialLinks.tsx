import { ReactElement } from 'react';
import { Box, Chip, IconButton, Stack } from '@mui/material';
import { socials } from 'data';

interface SocialLinksProps {
  variant: 'chips' | 'icons' | 'buttons';
}

const external = (url: string) =>
  url.startsWith('http')
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

const Icon = ({ src, size }: { src: string; size: number }) => (
  <Box
    component="img"
    src={src}
    alt=""
    sx={{ width: size, height: size, display: 'block' }}
  />
);

/** GitHub, LinkedIn, Email and WhatsApp, in three visual densities. */
export const SocialLinks = ({ variant }: SocialLinksProps): ReactElement => {
  if (variant === 'icons') {
    return (
      <Stack direction="row" spacing={1}>
        {socials.map((s) => (
          <IconButton
            key={s.name}
            component="a"
            href={s.url}
            aria-label={s.name}
            size="small"
            {...external(s.url)}
          >
            <Icon src={s.icon} size={20} />
          </IconButton>
        ))}
      </Stack>
    );
  }

  return (
    <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: 'wrap' }}>
      {socials.map((s) => (
        <Chip
          key={s.name}
          component="a"
          href={s.url}
          clickable
          variant="outlined"
          label={s.name}
          icon={<Icon src={s.icon} size={variant === 'buttons' ? 22 : 16} />}
          sx={
            variant === 'buttons'
              ? { height: 48, px: 1.5, fontSize: '1rem', borderRadius: 2 }
              : { pl: 0.5 }
          }
          {...external(s.url)}
        />
      ))}
    </Stack>
  );
};
