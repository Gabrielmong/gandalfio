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
  description: `I'm a software engineer, finished my courses at the Fidélitas University and just my final communal work left. I'm currently working as a full stack web developer at Tiims Revolution.`,
  segue: `Anyways, this is what I'm currently capable of.`,
  projects: [
    {
      title: 'Tenzies',
      description: `Roll as fast as you can to match all 10 of your dice. Made as a useState and useEffect practice.`,
      link: 'https://github.com/Gabrielmong/tenzies',
    },
    {
      title: 'Shooting Game',
      description: `Shooting game I made on Python a while back, no pygame used.`,
      link: 'https://github.com/Gabrielmong/dumbgame',
    },
    {
      title: 'EmpanadaReview',
      description: `A web app developed as a final project for the course 'Ambiente Web Cliente/Servidor'. Developed on React, with an Oracle database and Node.js backend.`,
      link: 'https://github.com/Gabrielmong/main-project-front',
    },
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
      title: 'Code Playground',
      description: `Stupid little scripts i do to practice, contains Python and JavaScript scripts mainly, but also some C/C++, Java, Markdown, Powershell and shell scripts. `,
      link: 'https://github.com/Gabrielmong/Code-Playground',
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
  ],
};
