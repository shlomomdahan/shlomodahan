interface Project {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly technologies: ReadonlyArray<string>;
  readonly link?: string;
  readonly github?: string;
  readonly image?: string;
  readonly live?: boolean;
}

export const projectsData: ReadonlyArray<Project> = [
  {
    id: 2,
    title: "Sorting Visualizer",
    description: "A web app that visualizes sorting algorithms",
    technologies: ["React", "next.JS", "Tailwind CSS", "TypeScript"],
    link: "https://sorting-visualizer-sigma-eight.vercel.app/",
    github: "https://github.com/shlomomdahan/sorting-visualizer",
    image: "/images/sort.gif", // Updated path
    live: true,
  },
  {
    id: 7,
    title: "Game of Life",
    description: "A web app that simulates Conway's Game of Life",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    link: "https://game-of-life-gray-gamma.vercel.app/",
    github: "https://github.com/shlomomdahan/game-of-life",
    image: "/images/life.gif",
    live: true,
  },
  {
    id: 3,
    title: "Pathfinding Visualizer",
    description: "A web app that visualizes pathfinding algorithms",
    technologies: ["React", "Tailwind CSS"],
    link: "https://pathfinding-visualizer-phi.vercel.app/",
    github: "https://github.com/shlomomdahan/pathfinding-visualizer",
    image: "/images/pathfinder.gif",
    live: true,
  },
  {
    id: 4,
    title: "VeriCreds",
    description: "PoC web3 document sharing app created for UPenn Hackathon",
    technologies: [
      "React",
      "Next.js",
      "Redux",
      "Axios",
      "PyMongo",
      "Flask",
      "Postman",
    ],
    github: "https://github.com/shlomomdahan/VeriCreds",
    image: "/images/vericreds.jpg",
    link: "https://devpost.com/software/vericreds",
    live: false,
  },
  {
    id: 1,
    title: "shlomodahan.com",
    description: "Personal Website built with Next.js and Tailwind CSS",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    link: "https://www.shlomodahan.com",
    github: "https://github.com/shlomomdahan/shlomodahan",
    image: "/images/shlomo.png", // Updated path
    live: true,
  },
  {
    id: 5,
    title: "Advanced Network Simulator",
    description:
      "Course Project - Developed network protocols and a peer-to-peer search engine to optimize network efficiency and reduce search time complexity.",
    technologies: ["C++", "NS3", "Djikstra", "Bellman-Ford"],
    image: "/images/ns-3.png",
  },
  {
    id: 6,
    title: "3D World Editor",
    description:
      "Refactored a JavaScript based 3D interactive world editor to C++ and SFML.",
    technologies: ["C++", "IMGUI", "SFML"],
    github: "https://github.com/open-autosim",
    image: "/images/world.png",
  },
] as const;

interface Experience {
  readonly id: number;
  readonly title: string;
  readonly company: string;
  readonly date: string;
  readonly description: string;
  readonly image?: string;
}

export const experienceData: ReadonlyArray<Experience> = [
  {
    id: 1,
    title: "CS",
    company: "University of Pennsylvania",
    date: "2022 - Present",
    description:
      "Currently pursuing a Master's in Computer and Information Technology at the University of Pennsylvania.",
    image: "/images/penn.png",
  },
  {
    id: 2,
    title: "Banking Analyst",
    company: "J.P. Morgan",
    date: "2019-2022",
    description:
      "Worked with a team of bankers and investors to provide financial services for UHNW clients. Managed over $2B in assets.",
    image: "/images/jpm.jpg",
  },
  {
    id: 3,
    title: "Student",
    company: "University of Miami",
    date: "2015-2019",
    description: "Stuidied Finance and Accounting at the University of Miami.",
    image: "/images/um.jpg",
  },
] as const;
