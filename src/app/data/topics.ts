// data/topics.ts
import {
  Code,
  Layers,
  GitBranch,
  FileText,
  Palette,
  Zap,
  Atom,
  ArrowRight,
  Repeat,
  Paintbrush2,
  Server,
  Globe,
  Box,
  Database,
  Table,
} from "lucide-react";
import React from "react";

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  lessonsCount: number;
  category: string;
  gradient: string;
  borderColor: string;
  image: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  topics: Topic[];
}

export const categories: Category[] = [
  {
    id: "basics",
    name: "Web Basics and CS Foundation",
    description: "Core programming concepts and computer science fundamentals",
    color: "from-blue-500 to-purple-600",
    topics: [
      {
        id: "programming-fundamentals",
        title: "Programming Fundamentals",
        description:
          "Master the core concepts of programming and problem-solving",
        icon: Code,
        difficulty: "Beginner",
        estimatedTime: "40 min",
        lessonsCount: 15,
        category: "basics",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderColor: "#667eea",
        image: "/images/topics/pf.jpeg",
        slug: "programming-fundamentals",
      },
      {
        id: "oop",
        title: "Object-Oriented Programming",
        description:
          "Learn OOP principles and design patterns for better code structure",
        icon: Layers,
        difficulty: "Intermediate",
        estimatedTime: "60 min",
        lessonsCount: 20,
        category: "basics",
        gradient: "linear-gradient(135deg, #5B73F0 0%, #667eea 100%)",
        borderColor: "#5B73F0",
        image: "/images/topics/oop.png",
        slug: "oop",
      },
      {
        id: "dsa",
        title: "Data Structures & Algorithms",
        description:
          "Essential data structures and algorithmic thinking for efficient solutions",
        icon: GitBranch,
        difficulty: "Advanced",
        estimatedTime: "120 min",
        lessonsCount: 35,
        category: "basics",
        gradient: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
        borderColor: "#4F46E5",
        image: "/images/topics/dsa.webp",
        slug: "dsa",
      },
      {
        id: "html",
        title: "HTML",
        description: "Structure web content with semantic HTML elements",
        icon: FileText,
        difficulty: "Beginner",
        estimatedTime: "30 min",
        lessonsCount: 12,
        category: "frontend",
        gradient: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",
        borderColor: "#8B5CF6",
        image: "/images/topics/html.jpeg",
        slug: "html",
      },
      {
        id: "css",
        title: "CSS",
        description: "Style and layout web pages with modern CSS techniques",
        icon: Palette,
        difficulty: "Beginner",
        estimatedTime: "45 min",
        lessonsCount: 18,
        category: "frontend",
        gradient: "linear-gradient(135deg, #7C3AED 0%, #C084FC 100%)",
        borderColor: "#7C3AED",
        image: "/images/topics/css.jpeg",
        slug: "css",
      },
      {
        id: "javascript",
        title: "JavaScript",
        description:
          "Add dynamic behavior and interactivity to web applications",
        icon: Zap,
        difficulty: "Intermediate",
        estimatedTime: "80 min",
        lessonsCount: 25,
        category: "frontend",
        gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
        borderColor: "#6366F1",
        image: "/images/topics/js.png",
        slug: "javascript",
      },
    ],
  },
  {
    id: "frontend",
    name: "Frontend & Styling",
    description: "Build modern, responsive user interfaces",
    color: "from-purple-500 to-pink-600",
    topics: [
      {
        id: "react",
        title: "React",
        description: "Build component-based user interfaces with React library",
        icon: Atom,
        difficulty: "Intermediate",
        estimatedTime: "100 min",
        lessonsCount: 30,
        category: "frontend",
        gradient: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
        borderColor: "#3B82F6",
        image: "/images/topics/react.png",
        slug: "react",
      },
      {
        id: "nextjs",
        title: "Next.js",
        description:
          "Full-stack React framework for production-ready applications",
        icon: ArrowRight,
        difficulty: "Advanced",
        estimatedTime: "120 min",
        lessonsCount: 28,
        category: "frontend",
        gradient: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)",
        borderColor: "#1E40AF",
        image: "/images/topics/next.jpg",
        slug: "nextjs",
      },
      {
        id: "angular",
        title: "Angular",
        description:
          "Enterprise-grade TypeScript framework for scalable applications",
        icon: Repeat,
        difficulty: "Advanced",
        estimatedTime: "140 min",
        lessonsCount: 32,
        category: "frontend",
        gradient: "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)",
        borderColor: "#DC2626",
        image: "/images/topics/angular.png",
        slug: "angular",
      },
      {
        id: "vue",
        title: "Vue.js",
        description:
          "Progressive framework for building interactive user interfaces",
        icon: Globe,
        difficulty: "Intermediate",
        estimatedTime: "90 min",
        lessonsCount: 24,
        category: "frontend",
        gradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
        borderColor: "#059669",
        image: "/images/topics/vue.webp",
        slug: "vue",
      },
      {
        id: "tailwind",
        title: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development",
        icon: Paintbrush2,
        difficulty: "Beginner",
        estimatedTime: "35 min",
        lessonsCount: 14,
        category: "frontend",
        gradient: "linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)",
        borderColor: "#0891B2",
        image: "/images/topics/tailwind.png",
        slug: "tailwind",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend & Databases",
    description: "Server-side development and data management",
    color: "from-blue-600 to-indigo-700",
    topics: [
      {
        id: "nodejs",
        title: "Node.js",
        description:
          "JavaScript runtime for building scalable server-side applications",
        icon: Server,
        difficulty: "Intermediate",
        estimatedTime: "75 min",
        lessonsCount: 22,
        category: "backend",
        gradient: "linear-gradient(135deg, #16A34A 0%, #22C55E 100%)",
        borderColor: "#16A34A",
        image: "/images/topics/node.png",
        slug: "nodejs",
      },
      {
        id: "express",
        title: "Express.js",
        description:
          "Fast and minimalist web framework for Node.js applications",
        icon: Zap,
        difficulty: "Intermediate",
        estimatedTime: "60 min",
        lessonsCount: 18,
        category: "backend",
        gradient: "linear-gradient(135deg, #374151 0%, #4B5563 100%)",
        borderColor: "#374151",
        image: "/images/topics/express.jpeg",
        slug: "express",
      },
      {
        id: "nestjs",
        title: "NestJS",
        description:
          "Progressive Node.js framework for building efficient server-side apps",
        icon: Box,
        difficulty: "Advanced",
        estimatedTime: "110 min",
        lessonsCount: 26,
        category: "backend",
        gradient: "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)",
        borderColor: "#DC2626",
        image: "/images/topics/nest.svg",
        slug: "nestjs",
      },
      {
        id: "mongodb",
        title: "MongoDB",
        description:
          "NoSQL document database for flexible and scalable data storage",
        icon: Database,
        difficulty: "Intermediate",
        estimatedTime: "70 min",
        lessonsCount: 20,
        category: "backend",
        gradient: "linear-gradient(135deg, #16A34A 0%, #22C55E 100%)",
        borderColor: "#16A34A",
        image: "/images/topics/mongodb.png",
        slug: "mongodb",
      },
      {
        id: "sql",
        title: "SQL",
        description:
          "Query and manage relational databases with structured data",
        icon: Table,
        difficulty: "Beginner",
        estimatedTime: "55 min",
        lessonsCount: 16,
        category: "backend",
        gradient: "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)",
        borderColor: "#2563EB",
        image: "/images/topics/sql.png",
        slug: "sql",
      },
    ],
  },
];

export const allTopics = categories.flatMap((cat) => cat.topics);
