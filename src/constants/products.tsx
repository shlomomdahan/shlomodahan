import ad_homepage from "public/images/ad_home.png";
import ad_events from "public/images/ad_events.png";
import ad_luxury from "public/images/ad_luxury.png";
import alphaOmegaImage from "public/images/Jenkins-Alpha-Omega.jpeg";
import jenkinsStatsImage from "public/images/landing_page_jenkins.png";
import jenkinsStatsTrendsImage from "public/images/stats_trends.png";
import JenkinsDepGraphImage from "public/images/dep_graph.png";
import pathfinderImage from "public/images/pathfinder.gif";
import vericredsImage from "public/images/vericreds.jpg";
import sortingVisualizerImage from "public/images/sort.gif";
import gameOfLifeImage from "public/images/life.gif";
import networkSimulatorImage from "public/images/ns-3.png";
import worldEditorImage from "public/images/world.png";

export const products = [
  {
    href: "https://www.americandream.com",
    title: "American Dream Fullstack Developer",
    description:
      "Developer for North America's largest retail and entertainment center.",
    thumbnail: ad_homepage,
    images: [ad_homepage, ad_events, ad_luxury],
    stack: ["React", "JavaScript", "Node.js", "AWS"],
    slug: "american-dream",
    github: "",
    live: true,
    content: (
      <div>
        <p>
          As a fullstack developer at{" "}
          <a
            href="https://www.americandream.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            American Dream
          </a>
          , I've contributed to several key projects enhancing the digital
          experience for one of America's largest retail and entertainment
          destinations.
        </p>
        <p>
          Notable achievements include redesigning landing pages, improving
          customer service workflows, building automation tools, and integrating
          internal management systems.
        </p>
      </div>
    ),
  },
  {
    href: "https://www.jenkins.io/blog/2024/11/01/jenkins-csp-project-update/",
    title: "Jenkins CSP Security Initiative",
    description:
      "Led efforts to implement Content Security Policy (CSP) across Jenkins core and top plugins",
    thumbnail: alphaOmegaImage, // you can change this if you want a different thumbnail later
    images: [],
    stack: ["Java", "Jenkins", "Security", "Open Source"],
    slug: "jenkins-csp",
    github: "https://github.com/jenkinsci/jenkins",
    live: true,
    content: (
      <div>
        <p>
          As a software engineer contractor with the Linux Foundation, I led the
          initiative to implement Content Security Policy (CSP) across the
          Jenkins core and top plugins, significantly strengthening platform
          defenses against cross-site scripting (XSS) vulnerabilities.
        </p>
        <p>
          My work involved auditing and refactoring legacy codebases, removing
          inline scripts, updating unsafe event handlers, and modernizing plugin
          architecture to align with CSP requirements—all while maintaining
          backward compatibility.
        </p>
        <p>
          I collaborated closely with the Jenkins core maintainers and broader
          community, contributing to open-source security by enforcing modern
          security standards and improving resilience against injection attacks.
        </p>
        <p>Relevant Links:</p>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://www.jenkins.io/blog/2024/10/04/content-security-policy-grant/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jenkins CSP Grant Announcement (Oct 2024)
            </a>
          </li>
          <li>
            <a
              href="https://www.jenkins.io/blog/2024/11/01/jenkins-csp-project-update/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jenkins CSP Project Update #1 (Nov 2024)
            </a>
          </li>
          <li>
            <a
              href="https://www.jenkins.io/blog/2025/01/16/jenkins-csp-project-update/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jenkins CSP Project Update #2 (Jan 2025)
            </a>
          </li>
          <li>
            <a
              href="https://alpha-omega.dev/wp-content/uploads/sites/22/2025/01/Alpha-Omega-GranteeReport-2024_012925.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alpha-Omega 2024 Grantee Report (PDF)
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    href: "https://stats.jenkins.io",
    title: "Jenkins Infra Statistics UI",
    description:
      "Developed UI for Jenkins Infra Statistics as part of GSoC 2024",
    thumbnail: jenkinsStatsImage,
    images: [jenkinsStatsImage, JenkinsDepGraphImage, jenkinsStatsTrendsImage],
    stack: ["React", "TypeScript", "ECharts", "Material-UI"],
    slug: "jenkins-stats",
    github: "https://github.com/jenkins-infra/stats.jenkins.io",
    live: true,
    content: (
      <div>
        <p>
          As part of Google Summer of Code 2024, I developed the user interface
          for the Jenkins Infrastructure Statistics platform. This project
          visualizes important metrics and data related to the Jenkins
          ecosystem, providing valuable insights to the community.
        </p>
        <p>
          Built with React, TypeScript, and ECharts for visualizations, the
          application leverages Material-UI for a responsive and accessible
          interface. The project involved working closely with the Jenkins
          community to ensure the platform met the needs of its users and
          maintainers.
        </p>
      </div>
    ),
  },
  {
    href: "https://pathfinding-visualizer-phi.vercel.app/",
    title: "Pathfinding Visualizer",
    description: "A web app that visualizes pathfinding algorithms",
    thumbnail: pathfinderImage,
    images: [],
    stack: ["React", "Tailwind CSS"],
    slug: "pathfinder",
    github: "https://github.com/shlomomdahan/pathfinding-visualizer",
    live: true,
    content: (
      <div>
        <p>
          The Pathfinding Visualizer is an interactive web application that
          demonstrates how various pathfinding algorithms work. Users can create
          obstacles, select different algorithms, and watch as the algorithm
          finds the shortest path between two points.
        </p>
        <p>
          This project was built using React and styled with Tailwind CSS. It
          serves as both an educational tool and a demonstration of algorithm
          visualization, helping users understand the differences between
          algorithms like Dijkstra's, A*, and more.
        </p>
      </div>
    ),
  },
  {
    href: "https://devpost.com/software/vericreds",
    title: "VeriCreds",
    description: "Web3 document sharing app created for Hackathon",
    thumbnail: vericredsImage,
    images: [],
    stack: ["React", "Next.js", "Redux", "Axios", "PyMongo", "Flask"],
    slug: "vericreds",
    github: "https://github.com/shlomomdahan/VeriCreds",
    live: false,
    moreInfo: true,
    content: (
      <div>
        <p>
          VeriCreds is a web3 document sharing application developed during a
          hackathon. The platform enables secure document verification and
          sharing using blockchain technology to ensure document authenticity
          and integrity.
        </p>
        <p>
          Built with a React/Next.js frontend and Flask backend, the application
          uses PyMongo for database management and Redux for state management.
          VeriCreds addresses the growing need for secure document verification
          in an increasingly digital world.
        </p>
      </div>
    ),
  },
  {
    href: "https://sorting-visualizer-sigma-eight.vercel.app/",
    title: "Sorting Visualizer",
    description: "A web app that visualizes sorting algorithms",
    thumbnail: sortingVisualizerImage,
    images: [],
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    slug: "sorting-visualizer",
    github: "https://github.com/shlomomdahan/sorting-visualizer",
    live: true,
    content: (
      <div>
        <p>
          The Sorting Visualizer is an interactive web application that
          demonstrates how various sorting algorithms work. Users can generate
          random arrays, select different algorithms, and watch as the elements
          are sorted in real-time.
        </p>
        <p>
          This project was built using React, Next.js, and TypeScript, with
          Tailwind CSS for styling. It serves as both an educational tool and a
          demonstration of algorithm visualization, helping users understand the
          differences between sorting algorithms like Bubble Sort, Quick Sort,
          Merge Sort, and more.
        </p>
      </div>
    ),
  },
  {
    href: "https://game-of-life-gray-gamma.vercel.app/",
    title: "Game of Life",
    description: "A web app that simulates Conway's Game of Life",
    thumbnail: gameOfLifeImage,
    images: [],
    stack: ["Next.js", "React", "Tailwind CSS"],
    slug: "game-of-life",
    github: "https://github.com/shlomomdahan/game-of-life",
    live: true,
    content: (
      <div>
        <p>
          This project is an implementation of Conway's Game of Life, a cellular
          automaton that simulates life evolution based on a few simple rules.
          Users can create initial patterns, start the simulation, and observe
          how the patterns evolve over generations.
        </p>
        <p>
          Built with Next.js and React, with Tailwind CSS for styling, this
          application demonstrates concepts from automata theory and emergence.
          It's a fascinating example of how complex patterns and behaviors can
          emerge from simple rules.
        </p>
      </div>
    ),
  },
  {
    href: "#",
    title: "Advanced Network Simulator",
    description:
      "Course Project - Developed network protocols and a peer-to-peer search engine to optimize network efficiency",
    thumbnail: networkSimulatorImage,
    images: [],
    stack: ["C++", "NS3", "Djikstra", "Bellman-Ford"],
    slug: "network-simulator",
    live: false,
    content: (
      <div>
        <p>
          As part of a course project, I developed network protocols and a
          peer-to-peer search engine designed to optimize network efficiency and
          reduce search time complexity. The project utilized the NS3 simulation
          framework.
        </p>
        <p>
          Implemented in C++, the simulator incorporated algorithm
          implementations including Dijkstra's and Bellman-Ford for route
          optimization. This project demonstrated advanced understanding of
          network principles and algorithm optimization techniques.
        </p>
      </div>
    ),
  },
];
