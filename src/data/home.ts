import { Project } from 'models';
import vakaShot from 'assets/projects/vaka.jpg';
import lorestoneShot from 'assets/projects/lorestone.jpg';
import yggdrasilShot from 'assets/projects/yggdrasil.jpg';
import grainShot from 'assets/projects/grain.jpg';
import significantOtherShot from 'assets/projects/significantother.jpg';
import homeControlShot from 'assets/projects/homecontrol.jpg';

export interface HomeData {
  name: string;
  role: string;
  location: string;
  intro: string;
  projects: Project[];
}

const gh = (repo: string) => `https://github.com/Gabrielmong/${repo}`;

export const homeData: HomeData = {
  name: 'Gabriel Monge',
  role: 'Software Engineer',
  location: 'San José, Costa Rica',
  intro:
    "I build web, mobile and desktop apps, mostly TypeScript, React and Node, with some C# when the hardware calls for it. These are the things I've made lately.",
  projects: [
    // Featured, in display order
    {
      title: 'Vaka',
      description:
        'A hardware monitor for a small dedicated screen. It ships with an installer, twelve ready-made layouts and a layout editor that runs in the browser with a live preview.',
      year: 2026,
      featured: true,
      stack: ['C#', 'TypeScript', 'Windows', 'LibreHardwareMonitor'],
      repo: gh('vaka'),
      live: 'https://gabrielmong.github.io/vaka/',
      image: vakaShot,
    },
    {
      title: 'Lorestone',
      description:
        'A campaign manager for Dungeon Masters: characters, branching decision trees, session logs, combat encounters and faction reputation, plus a spoiler-free view for the players.',
      year: 2026,
      featured: true,
      stack: [
        'React',
        'TypeScript',
        'GraphQL',
        'Prisma',
        'PostgreSQL',
        'ReactFlow',
      ],
      live: 'https://lorestone.app/landing',
      image: lorestoneShot,
      private: true,
    },
    {
      title: 'SignificantOther',
      description:
        'A mobile app for couples: countdowns, a shared mood calendar, a journal and wishlist, places on a map and home-screen widgets.',
      year: 2024,
      featured: true,
      stack: ['React Native', 'Expo', 'Firebase', 'Mapbox'],
      repo: gh('SignificantOther'),
      image: significantOtherShot,
    },
    {
      title: 'Yggdrasil',
      description:
        "A reading tracker with a social side. Scan a book's barcode to add it, log your progress and see what friends are reading.",
      year: 2026,
      featured: true,
      stack: ['Next.js', 'Prisma', 'PostgreSQL', 'S3', 'Claude API'],
      repo: gh('yggdrasil'),
      live: 'https://yggdrasil-phi-lac.vercel.app',
      image: yggdrasilShot,
    },
    {
      title: 'Grain',
      description:
        'Project and cost manager for woodworkers in Costa Rica. It measures lumber in varas, prices in colones or dollars, and speaks English, Spanish and Portuguese.',
      year: 2025,
      featured: true,
      stack: ['React', 'GraphQL', 'Prisma', 'PostgreSQL'],
      repo: gh('Grain'),
      live: 'https://woodwork-24u.pages.dev/',
      image: grainShot,
    },
    {
      title: 'Home Control',
      description:
        'A self-hosted control panel for the lights, plugs and cameras in my house. It talks to Tuya, Kasa, Govee and Swann devices over the local network, with routines, per-user layouts and a wall-tablet mode.',
      year: 2026,
      featured: true,
      stack: ['React', 'GraphQL', 'Prisma', 'PostgreSQL', 'WebRTC'],
      repo: gh('iot'),
      image: homeControlShot,
    },

    // Earlier work, newest first
    {
      title: 'WeightTracker',
      description:
        'A friendly weight-loss competition with charts, built for a group of friends.',
      year: 2026,
      featured: false,
      stack: ['Next.js', 'GraphQL', 'Prisma'],
      repo: gh('weighttracker'),
    },
    {
      title: 'Hogar Infantil Brotes de Olivo',
      description:
        "Website for a children's home, built as a social service project.",
      year: 2024,
      featured: false,
      stack: ['React', 'Node.js', 'PostgreSQL'],
      repo: 'https://github.com/Brotes-de-Olivo',
    },
    {
      title: 'breed-classifier',
      description:
        'Upload a dog photo and it tells you the breed, right in the browser.',
      year: 2023,
      featured: false,
      stack: ['React', 'TensorFlow.js'],
      repo: gh('breed-classifier'),
    },
    {
      title: 'Tracker',
      description:
        'Personal finance tracker that replaced my expenses spreadsheet.',
      year: 2023,
      featured: false,
      stack: ['React', 'GraphQL', 'Express', 'PostgreSQL'],
      repos: [
        { label: 'Frontend', url: gh('tracker') },
        { label: 'Backend', url: gh('tracker-backend') },
      ],
    },
    {
      title: 'Biotopika',
      description: 'Store and management system for a dermo-cosmetics startup.',
      year: 2023,
      featured: false,
      stack: ['React', 'Node.js', 'PostgreSQL'],
      repo: 'https://github.com/Biotopika',
    },
    {
      title: 'Algo Visualizer',
      description: 'Sorting algorithms, animated step by step.',
      year: 2023,
      featured: false,
      stack: ['TypeScript', 'Python'],
      repos: [
        { label: 'JS', url: gh('algo-visualizer') },
        {
          label: 'Python',
          url: gh('Code-Playground/blob/master/Python/algosVisualizer.py'),
        },
      ],
      live: 'https://gabrielmong.github.io/algo-visualizer/',
    },
    {
      title: 'Berserker',
      description:
        'A Unity game made as the final project for a game architecture course.',
      year: 2022,
      featured: false,
      stack: ['Unity', 'C#'],
      repo: gh('berserker'),
    },
  ],
};
