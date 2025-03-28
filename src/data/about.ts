import react from 'assets/svg/react.svg';
import typescript from 'assets/svg/typescript.svg';
import vite from 'assets/svg/vite.svg';
import mui from 'assets/svg/mui.svg';
import node from 'assets/svg/node.svg';
import graphql from 'assets/svg/graphql.svg';
import prisma from 'assets/svg/prisma.svg';
import postgres from 'assets/svg/postgres.svg';
import express from 'assets/svg/express.svg';
import { Tech } from 'models';

export interface AboutData {
  title: string;
  description: string;
  paragraphs: string[];
  myStack: Tech[];
  frontend: Tech[];
  otherFrontEnd: Tech[];
  backend: Tech[];
  otherBackend: Tech[];
  other: Tech[];
}

export const aboutData: AboutData = {
  title: 'About',
  description: 'This is where I tell you about myself.',
  paragraphs: [
    `I'm a software engineer, used to React, Node, and TypeScript. I also know
        some Python, Java, PHP, C/C++, C#, Some Dart, and of course, SQL and PL/SQL, I do both frontend
        and backend development, but backend is kind of growing on me.`,
    `I'm a big fan of video games, and at the time of writing this, I'm playing Rainbow Six Siege, BeamNG.drive, and I
        also play lots of Baldur's Gate 3.`,
    `I also happen to play the guitar, I really enjoy music, there's not a time in the day 
        where I don't listen to music, I mainly listen to Metal, like Opeth, Amon Amarth, Tool, etc. but I do enjoy some cumbias from time to time.`,
    `I work as a software engineer at a company called Tiims Revolution, we're a small company, but we're growing, I get to work on frontend and backend, 
        my coworkers are my friends so its an enjoyable time.`,
    `I'm also the developer for Biotopika.com, a startup dedicated to dermo-cosmetics, has a working managment system, front page for information, and currently working
        on the store and the blog.`,
  ],
  myStack: [
    {
      name: 'Database',
      tech: 'PostgreSQL',
      link: 'https://www.postgresql.org/',
      icon: postgres,
    },

    {
      name: 'Backend',
      tech: 'Express',
      link: 'https://expressjs.com/',
      icon: express,
    },
    {
      name: 'Frontend',
      tech: 'React',
      link: 'https://reactjs.org/',
      icon: react,
    },

    {
      name: 'Runtime',
      tech: 'Node',
      link: 'https://nodejs.org/en/',
      icon: node,
    },
  ],
  frontend: [
    {
      name: 'React',
      description:
        'Been using React for over a year now, I have used it for both personal and work projects.',
      icon: react,
    },
    {
      name: 'TypeScript',
      description: `I've been using TS for some time now, really like using types, it makes the development process a lot easier, and actually faster.`,
      icon: typescript,
    },
    {
      name: 'Vite',
      description:
        'Lately I have been using Vite for my React projects, I really like it, it makes the development process a lot faster, and it has a lot of cool features.',
      icon: vite,
    },
    {
      name: 'Material UI',
      description: `MUI is my go-to UI library, the components and their customization are really good.`,
      icon: mui,
    },
  ],
  otherFrontEnd: [
    {
      name: 'PHP',
      link: 'https://www.php.net/',
    },
    {
      name: 'Springboot',
      link: 'https://spring.io/projects/spring-boot',
    },
    {
      name: 'Gatsby',
      link: 'https://www.gatsbyjs.com/',
    },
    {
      name: 'HTML/CSS/JS',
      link: 'https://developer.mozilla.org/en-US/docs/Learn',
    },
    {
      name: 'Bootstrap',
      link: 'https://getbootstrap.com/',
    },
    {
      name: 'SASS',
      link: 'https://sass-lang.com/',
    },
    {
      name: 'Tailwind CSS',
      link: 'https://tailwindcss.com/',
    },
    {
      name: '.NET',
      link: 'https://dotnet.microsoft.com/',
    },
  ],
  backend: [
    {
      name: 'Node.js',
      description:
        'The first JavaScript framework I learned, started as a personal learning project, but now I use it for work. On top of it i use Express.js.',
      icon: node,
    },
    {
      name: 'GraphQL',
      description: `GraphQL has been a great tool for me, I use it for my personal projects, mainly with Apollo, and I also use it for work, it's a great tool for APIs.`,
      icon: graphql,
    },
    {
      name: 'PostreSQL',
      description:
        'My choice of database, I have used it for both personal and work projects, it has been a great experience.',
      icon: postgres,
    },
    {
      name: 'Prisma',
      description: `My favorite ORM, I have used it with Node.js, makes the experience of working with databases a lot easier, and it's really good.`,
      icon: prisma,
    },
  ],
  otherBackend: [
    {
      name: 'Apollo Server',
      link: 'https://www.apollographql.com/docs/apollo-server/',
    },
    {
      name: 'Express',
      link: 'https://expressjs.com/',
    },
    {
      name: '.NET',
      link: 'https://dotnet.microsoft.com/',
    },
    {
      name: 'Oracle',
      link: 'https://www.oracle.com/database/',
    },
    {
      name: 'MySQL',
      link: 'https://www.mysql.com/',
    },
    {
      name: 'MongoDB',
      link: 'https://www.mongodb.com/',
    },
    {
      name: 'Docker',
      link: 'https://www.docker.com/',
    },
    {
      name: 'Insomnia',
      link: 'https://insomnia.rest/',
    },
    {
      name: 'Postman',
      link: 'https://www.postman.com/',
    },
  ],
  other: [
    {
      name: 'Python',
      link: 'https://www.python.org/',
    },
    {
      name: 'Java',
      link: 'https://www.java.com/',
    },
    {
      name: 'C/C++',
      link: 'https://www.cprogramming.com/',
    },
    {
      name: 'C#',
      link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },
    {
      name: 'Unity',
      link: 'https://unity.com/',
    },
    {
      name: 'Figma',
      link: 'https://www.figma.com/',
    },
    {
      name: 'Adobe XD',
      link: 'https://www.adobe.com/products/xd.html',
    },
    {
      name: 'Git',
      link: 'https://git-scm.com/',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/',
    },
    {
      name: 'Linux',
      link: 'https://www.linux.org/',
    },
    {
      name: 'Windows',
      link: 'https://www.microsoft.com/en-us/windows',
    },
    {
      name: 'Scrum',
      link: 'https://www.scrum.org/',
    },
    {
      name: 'Kanban',
      link: 'https://www.atlassian.com/agile/kanban',
    },
    {
      name: 'Jira',
      link: 'https://www.atlassian.com/software/jira',
    },
    {
      name: 'VirtualBox',
      link: 'https://www.virtualbox.org/',
    },
    {
      name: 'CCNA',
      link: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html',
    },
    {
      name: 'Arduino',
      link: 'https://www.arduino.cc/',
    },
    {
      name: 'Firebase',
      link: 'https://firebase.google.com/',
    },
    {
      name: 'AWS',
      link: 'https://aws.amazon.com/',
    },
    {
      name: 'Google Cloud',
      link: 'https://cloud.google.com/',
    },
    {
      name: 'Heroku',
      link: 'https://www.heroku.com/',
    },
    {
      name: 'Render',
      link: 'https://render.com/',
    },
    {
      name: 'Cloudflare',
      link: 'https://www.cloudflare.com/',
    },
    {
      name: 'Railway',
      link: 'https://railway.app/',
    },
    {
      name: 'English Proficiency',
      link: 'https://www.efset.org/cert/DHy8hf',
    },
    {
      name: 'XState',
      link: 'https://xstate.js.org/docs/',
    },
  ],
};
