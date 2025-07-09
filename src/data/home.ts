import { Project } from 'models/Project';

export interface HomeData {
  title: string;
  position: string;
  description: string;
  segue: string;
  projects: Project[];
}

export const homeData = {
  title: 'Gabriel Monge',
  position: 'Software Engineer',
  description: `I'm a Fullstack Developer @ Track Star excelling in JavaScript, TypeScript, React.js, and Node.js. I hold a bachelor's degree in Computer Systems Engineering. Proven expertise in developing web applications from inception to deployment, optimizing processes, and enhancing software functionality. Proficient in GitHub-based collaboration and CI/CD.`,
  segue: `Anyways, this is what I'm currently capable of.`,
  projects: [
    {
      title: 'Gandalf.io',
      description: `Portfolio website, made with React, TypeScript and Vite.`,
      link: 'https://github.com/Gabrielmong/gandalfio',
    },
    {
      title: 'Berserker',
      description: `A videogame developed on Unity and C# as final project for the course 'Estructura y Arquitectura de Videojuegos', learning the basics of Unity and how game development works.`,
      link: 'https://github.com/Gabrielmong/berserker',
    },
    {
      title: 'Tracker',
      description: `A webpage im currently working on, it's a finance tracker so I can stop using an excel sheet to keep track of my expenses.`,
      link: 'https://github.com/Gabrielmong/tracker',
    },
    {
      title: 'Tracker Backend',
      description: `Server and database for the tracker project, made with Node.js and PostgreSQL., using Express, TS and Apollo Server.`,
      link: 'https://github.com/Gabrielmong/tracker-backend',
    },
    {
      title: 'Algo Visualizer Pyton',
      description: `Visualizes some sorting algorithms, made on Python`,
      link: 'https://github.com/Gabrielmong/Code-Playground/blob/master/Python/algosVisualizer.py',
    },
    {
      title: 'Algo Visualizer JS',
      description: `Visualizes some sorting algorithms, made on JavaScript`,
      link: 'https://gabrielmong.github.io/algo-visualizer/',
    },
    {
      title: 'The Crops Chronicles',
      description: `This is a game made in Unity and C#, it's a 3d "farming" game, that actually has fighting mechanics for some reason, assigned as a final project for "Diseño de Videojuegos" course.`,
      link: 'https://github.com/Gabrielmong/diseno-videojuegos-g2',
    },
    {
      title: 'Biotopika',
      description: `A website I'm currently working on, it's a store for dermo-cosmetics, made with React, TypeScript, Node.js, PostgreSQL, and Express.`,
      link: 'https://github.com/Biotopika',
    },
    {
      title: 'Hogar Infantil Brotes de Olivo',
      description: `A webpage I made for a children's home, as part of a social service project, made with React, TypeScript, Node.js, PostgreSQL, and Express.`,
      link: 'https://github.com/Brotes-de-Olivo',
    },
  ],
};
