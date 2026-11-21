export const contactData = {
  title: 'Contact',
  intro:
    'Email or LinkedIn is the quickest way to reach me. My CV is here too if you want the long version.',
  cvFile: 'GabrielsResume.pdf',
} as const;

/** CV download URL; respects the `/gandalfio/` base path on GitHub Pages. */
export const cvHref = `${import.meta.env.BASE_URL}${contactData.cvFile}`;
