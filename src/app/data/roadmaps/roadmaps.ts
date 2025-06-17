// data/roadmaps/roadmaps.ts

export type RoadmapStep = {
  name: string;
  description?: string;
  options?: string[];
};

export type Roadmap = {
  title: string;
  slug: string;
  steps: RoadmapStep[];
};

export const roadmaps: Record<string, Roadmap> = {
  frontend: {
    title: "Frontend Development Roadmap",
    slug: "frontend",
    steps: [
      { name: "HTML", description: "Learn the structure of web content." },
      {
        name: "CSS",
        description: "Understand styling, layouts, and responsive design.",
      },
      {
        name: "JavaScript",
        description: "Grasp fundamentals, DOM manipulation, and ES6+ features.",
      },
      {
        name: "Version Control",
        options: ["Git", "GitHub"],
        description: "Track code changes and collaborate with others.",
      },
      {
        name: "CSS Frameworks",
        options: ["Tailwind CSS"],
        description: "Speed up styling with utility-first frameworks.",
      },
      {
        name: "Frontend Frameworks",
        options: ["React", "Vue", "Angular", "Next.js"],
        description: "Choose a modern JS framework to build UIs.",
      },
      {
        name: "State Management",
        options: ["Redux", "Zustand", "Pinia", "NgRx"],
        description: "Manage app-level state efficiently.",
      },
      {
        name: "APIs & Data Fetching",
        options: ["REST", "GraphQL", "Axios", "Fetch API"],
        description: "Work with external data sources.",
      },
      {
        name: "Testing",
        options: ["Jest", "React Testing Library", "Cypress"],
        description: "Write tests to ensure code quality.",
      },
      {
        name: "Deployment",
        options: ["Vercel", "Netlify"],
        description: "Deploy frontend applications.",
      },
    ],
  },

  backend: {
    title: "Backend Development Roadmap",
    slug: "backend",
    steps: [
      {
        name: "JavaScript",
        description: "Understand core JS for server-side programming.",
      },
      {
        name: "Node.js",
        description: "Use JavaScript runtime to build backend services.",
      },
      {
        name: "Express.js",
        description: "Build RESTful APIs using this minimalist framework.",
      },
      {
        name: "Advanced Backend Frameworks",
        options: ["NestJS"],
        description: "Use a structured and scalable framework for large apps.",
      },
      {
        name: "Databases",
        options: ["PostgreSQL", "MongoDB", "MySQL"],
        description: "Learn how to design, query, and manage data.",
      },
      {
        name: "Authentication",
        options: ["JWT", "OAuth2", "Session-based"],
        description: "Implement user login and access control.",
      },
      {
        name: "API Design",
        options: ["REST", "GraphQL"],
        description: "Design clean and scalable APIs.",
      },
      {
        name: "Testing",
        options: ["Jest", "Supertest"],
        description: "Test backend logic and endpoints.",
      },
      {
        name: "Security",
        options: ["Helmet", "Rate Limiting", "CORS"],
        description: "Secure APIs against common threats.",
      },
      {
        name: "Deployment",
        options: ["Render", "Railway", "VPS", "Docker"],
        description: "Host backend services and APIs.",
      },
    ],
  },

  fullstack: {
    title: "Full Stack Development Roadmap",
    slug: "fullstack",
    steps: [
      { name: "HTML", description: "Structure content for the web." },
      {
        name: "CSS",
        description:
          "Style content using layouts, flex, and responsive design.",
      },
      {
        name: "JavaScript",
        description: "Master the language used across the stack.",
      },
      {
        name: "Frontend Frameworks",
        options: ["React", "Vue", "Angular", "Next.js"],
        description: "Choose a modern frontend technology.",
      },
      {
        name: "Backend Technologies",
        options: ["Node.js + Express", "NestJS"],
        description: "Learn to build APIs and server-side logic.",
      },
      {
        name: "Databases",
        options: ["PostgreSQL", "MongoDB", "MySQL"],
        description: "Work with both SQL and NoSQL databases.",
      },
      {
        name: "Authentication",
        options: ["JWT", "OAuth"],
        description: "Implement secure user authentication.",
      },
      {
        name: "API Design",
        options: ["REST", "GraphQL"],
        description: "Connect frontend and backend using APIs.",
      },
      {
        name: "Version Control",
        options: ["Git", "GitHub"],
        description: "Manage your codebase collaboratively.",
      },
      {
        name: "Testing",
        options: ["Jest", "Cypress", "React Testing Library"],
        description: "Test both frontend and backend logic.",
      },
      {
        name: "Deployment",
        options: ["Vercel", "Render", "Netlify", "Docker"],
        description: "Deploy full stack applications.",
      },
    ],
  },
};
