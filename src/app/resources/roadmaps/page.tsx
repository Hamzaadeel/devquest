"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Server, Layers } from "lucide-react";
import { useRouter } from "next/navigation";

// Roadmap data from your file
const roadmaps = {
  frontend: {
    title: "Frontend Development Roadmap",
    slug: "frontend",
    icon: Code,
    gradient: "from-blue-500 to-purple-600",
    image: "../../../../images/roadmaps/frontend.jpeg", // Add your image path here
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
    ],
  },
  backend: {
    title: "Backend Development Roadmap",
    slug: "backend",
    icon: Server,
    gradient: "from-purple-500 to-blue-600",
    image: "../../../../images/roadmaps/backend.jpeg", // Add your image path here
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
    ],
  },
  fullstack: {
    title: "Full Stack Development Roadmap",
    slug: "fullstack",
    icon: Layers,
    gradient: "from-blue-600 to-purple-500",
    image: "../../../../images/roadmaps/fullstack.jpeg", // Add your image path here
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
    ],
  },
};

interface RoadmapStep {
  name: string;
  description: string;
}

interface Roadmap {
  title: string;
  slug: string;
  icon: React.ElementType;
  gradient: string;
  image: string;
  steps: RoadmapStep[];
}

interface RoadmapCardProps {
  roadmap: Roadmap;
  index: number;
}

const RoadmapCard = ({ roadmap, index }: RoadmapCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const Icon = roadmap.icon;

  const handleClick = () => {
    router.push(`/resources/roadmaps/${roadmap.slug}`);
  };

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        onClick={handleClick}
        className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 h-80 md:h-96 cursor-pointer"
      >
        {/* Background gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${roadmap.gradient} opacity-10 dark:opacity-20`}
        />

        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: isHovered
              ? ["0% 0%", "100% 100%"]
              : ["0% 0%", "0% 0%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
          {/* Icon and Title */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className={`p-3 rounded-xl bg-gradient-to-br ${roadmap.gradient} text-white shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Icon size={24} />
            </motion.div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                {roadmap.title.split(" ")[0]}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Development
              </p>
            </div>
          </div>

          {/* Hovered Content - Steps Preview */}
          {isHovered && (
            <motion.div
              className="flex-1 flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Getting Started:
                </h4>
                <div className="space-y-3">
                  {roadmap.steps.map((step, stepIndex) => (
                    <motion.div
                      key={step.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 backdrop-blur-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: stepIndex * 0.1 }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${roadmap.gradient}`}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {step.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click when clicking button
                  handleClick();
                }}
                className={`mt-4 w-full py-3 px-6 rounded-xl bg-gradient-to-r ${roadmap.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span>See Full Roadmap</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </motion.button>
            </motion.div>
          )}

          {/* Default content when not hovered - Image */}
          {!isHovered && (
            <motion.div
              className="flex-1 flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <img
                  src={roadmap.image}
                  alt={`${roadmap.title} illustration`}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${roadmap.gradient} opacity-20`}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                Hover to see the learning path
              </p>
            </motion.div>
          )}
        </div>

        {/* Hover glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${roadmap.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const RoadmapsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Learning
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Roadmaps
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Choose your path to becoming a skilled developer. Each roadmap is
            carefully crafted to guide you from beginner to expert.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {Object.entries(roadmaps).map(([key, roadmap], index) => (
            <RoadmapCard key={key} roadmap={roadmap} index={index} />
          ))}
        </div>

        {/* Footer CTA
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Not sure which path to choose? Start with our recommendations.
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Personalized Recommendation
          </motion.button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default RoadmapsPage;
