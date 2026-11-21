import react from 'assets/svg/react.svg';
import typescript from 'assets/svg/typescript.svg';
import mui from 'assets/svg/mui.svg';
import node from 'assets/svg/node.svg';
import graphql from 'assets/svg/graphql.svg';
import prisma from 'assets/svg/prisma.svg';
import postgres from 'assets/svg/postgres.svg';
import dotnet from 'assets/svg/dotnet.svg';
import { Tech } from 'models';

export type StackGroupName = 'Web' | 'Mobile' | 'Backend' | 'Desktop';

export interface StackGroup {
  group: StackGroupName;
  items: Tech[];
}

export interface AboutData {
  title: string;
  bio: string[];
  stack: StackGroup[];
  tools: Tech[];
  personal: string[];
  work: string;
}

export const aboutData: AboutData = {
  title: 'About',
  bio: [
    `I'm a software engineer in San José, Costa Rica. I build for the web, for phones and for the
      desktop, mostly in TypeScript, React and Node, and I reach for C# when a project needs to talk
      to hardware.`,
    `A lot of what I build starts as a tool I wanted for myself, like a sensor panel for my PC or a
      manager for the tabletop campaign I run. Backend work keeps growing on me: GraphQL, Prisma and
      PostgreSQL are where I feel most at home.`,
  ],
  stack: [
    {
      group: 'Web',
      items: [
        { name: 'React', link: 'https://react.dev/', icon: react },
        {
          name: 'TypeScript',
          link: 'https://www.typescriptlang.org/',
          icon: typescript,
        },
        { name: 'Next.js', link: 'https://nextjs.org/' },
        { name: 'Material UI', link: 'https://mui.com/', icon: mui },
      ],
    },
    {
      group: 'Mobile',
      items: [
        { name: 'React Native', link: 'https://reactnative.dev/', icon: react },
        { name: 'Expo', link: 'https://expo.dev/' },
        { name: 'Firebase', link: 'https://firebase.google.com/' },
      ],
    },
    {
      group: 'Backend',
      items: [
        { name: 'Node.js', link: 'https://nodejs.org/', icon: node },
        {
          name: 'GraphQL / Apollo',
          link: 'https://www.apollographql.com/',
          icon: graphql,
        },
        { name: 'Prisma', link: 'https://www.prisma.io/', icon: prisma },
        {
          name: 'PostgreSQL',
          link: 'https://www.postgresql.org/',
          icon: postgres,
        },
      ],
    },
    {
      group: 'Desktop',
      items: [
        {
          name: 'C# / .NET',
          link: 'https://dotnet.microsoft.com/',
          icon: dotnet,
        },
      ],
    },
  ],
  tools: [
    { name: 'Vite', link: 'https://vite.dev/' },
    { name: 'Express', link: 'https://expressjs.com/' },
    { name: 'Redux Toolkit', link: 'https://redux-toolkit.js.org/' },
    { name: 'XState', link: 'https://stately.ai/docs/xstate' },
    { name: 'Docker', link: 'https://www.docker.com/' },
    { name: 'MySQL', link: 'https://www.mysql.com/' },
    { name: 'MongoDB', link: 'https://www.mongodb.com/' },
    { name: 'Oracle', link: 'https://www.oracle.com/database/' },
    { name: 'AWS', link: 'https://aws.amazon.com/' },
    { name: 'Google Cloud', link: 'https://cloud.google.com/' },
    { name: 'Cloudflare', link: 'https://www.cloudflare.com/' },
    { name: 'Vercel', link: 'https://vercel.com/' },
    { name: 'Railway', link: 'https://railway.com/' },
    { name: 'Render', link: 'https://render.com/' },
    { name: 'Python', link: 'https://www.python.org/' },
    { name: 'Java', link: 'https://www.java.com/' },
    { name: 'C/C++', link: 'https://isocpp.org/' },
    { name: 'Unity', link: 'https://unity.com/' },
    { name: 'Arduino', link: 'https://www.arduino.cc/' },
    { name: 'Git & GitHub', link: 'https://github.com/' },
    { name: 'Linux', link: 'https://www.linux.org/' },
    { name: 'Figma', link: 'https://www.figma.com/' },
    { name: 'Jira', link: 'https://www.atlassian.com/software/jira' },
    { name: 'Scrum & Kanban', link: 'https://www.scrum.org/' },
    {
      name: 'English (EF SET certificate)',
      link: 'https://www.efset.org/cert/DHy8hf',
    },
  ],
  personal: [
    // TODO(Gabriel): refresh the games list
    `I'm a big fan of video games, and at the time of writing this, I'm playing Rainbow Six Siege, BeamNG.drive, and I
        also play lots of Roadcraft`,
    `I also happen to play the guitar, I really enjoy music, there's not a time in the day
        where I don't listen to music, I mainly listen to Metal, like Opeth, Amon Amarth, Tool, etc. but I do enjoy some cumbias from time to time.`,
  ],
  work: `I work as a software engineer.`,
};
