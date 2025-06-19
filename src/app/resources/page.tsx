"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Map, Users, DollarSign, FileText } from "lucide-react";

const resourceTypes = [
  {
    title: "Cheatsheets",
    description:
      "Quick reference guides and essential information at your fingertips",
    icon: BookOpen,
    href: "/resources/cheatsheets",
    gradient: "from-blue-500 to-purple-600",
    hoverGradient: "from-blue-400 to-purple-500",
  },
  {
    title: "Roadmaps",
    description:
      "Step-by-step learning paths to guide your professional journey",
    icon: Map,
    href: "/resources/roadmaps",
    gradient: "from-purple-500 to-blue-600",
    hoverGradient: "from-purple-400 to-blue-500",
  },
  {
    title: "Interview Tips",
    description: "Expert advice and strategies to ace your next interview",
    icon: Users,
    href: "/resources/interview-tips",
    gradient: "from-blue-600 to-purple-500",
    hoverGradient: "from-blue-500 to-purple-400",
  },
  {
    title: "Salary Tips",
    description:
      "Negotiation tactics and market insights for better compensation",
    icon: DollarSign,
    href: "/resources/salary-tips",
    gradient: "from-purple-600 to-blue-500",
    hoverGradient: "from-purple-500 to-blue-400",
  },
  {
    title: "CV/Resume Templates",
    description:
      "Professional templates and guides to create an outstanding resume",
    icon: FileText,
    href: "/resources/resume",
    gradient: "from-blue-500 to-purple-600",
    hoverGradient: "from-blue-400 to-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent mb-6">
            Resources
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover curated resources to accelerate your career growth and
            technical expertise
          </p>
        </motion.div>

        {/* Resource Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {resourceTypes.map((resource) => {
            const IconComponent = resource.icon;

            return (
              <motion.div
                key={resource.title}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                whileTap={{ scale: 0.99 }}
              >
                <Link href={resource.href}>
                  <div className="group relative h-full isolate">
                    {/* Card Background with Gradient Border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm" />

                    {/* Main Card */}
                    <div className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/50 group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      {/* Icon Container */}
                      <div className="relative mb-6">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-r ${resource.gradient} group-hover:bg-gradient-to-r group-hover:${resource.hoverGradient} flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:scale-105`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        {/* Floating particles effect */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-150" />
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {resource.title}
                        </h3>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                          {resource.description}
                        </p>
                      </div>

                      {/* Arrow indicator */}
                      <div className="absolute bottom-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 transform group-hover:scale-105">
                        <svg
                          className="w-4 h-4 text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>

                      {/* Shine effect overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              More resources coming soon
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
