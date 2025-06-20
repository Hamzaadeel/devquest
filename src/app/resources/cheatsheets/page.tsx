"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories, allTopics } from "../../data/topics";
import { BookOpen, ArrowRight } from "lucide-react";

const CheatSheetsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter buttons data
  const filterButtons = [
    { id: "All", label: "All", count: allTopics.length },
    ...categories.map((cat) => ({
      id: cat.id,
      label: cat.name,
      count: cat.topics.length,
    })),
  ];

  // Get filtered topics based on active filter
  const getFilteredTopics = () => {
    if (activeFilter === "All") {
      return allTopics;
    }
    const category = categories.find((cat) => cat.id === activeFilter);
    return category ? category.topics : [];
  };

  const filteredTopics = getFilteredTopics();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            CheatSheets
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Quick reference guides and comprehensive cheatsheets for all
            programming topics. Master the essentials with our curated
            collection of developer resources.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterButtons.map((filter, index) => (
            <motion.button
              key={filter.id}
              variants={filterVariants}
              custom={index}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {filter.label}
              <span
                className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeFilter === filter.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                }`}
              >
                {filter.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Topics List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter} // Re-trigger animation when filter changes
          className="max-w-4xl mx-auto"
        >
          {filteredTopics.map((topic) => (
            <motion.div
              key={topic.id}
              variants={cardVariants}
              whileHover={{
                x: 8,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <Link href={`/topics/${topic.slug}/cheatsheets`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 mb-4">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ background: topic.gradient }}
                        >
                          <topic.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {topic.title}
                            </h3>
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                topic.difficulty === "Beginner"
                                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                  : topic.difficulty === "Intermediate"
                                  ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                              }`}
                            >
                              {topic.difficulty}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {topic.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredTopics.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No cheatsheets found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category filter.
            </p>
          </motion.div>
        )}

        {/* Stats Section
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Resources Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {allTopics.length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Total Topics
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {allTopics.reduce((acc, topic) => acc + topic.lessonsCount, 0)}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Total Lessons
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {categories.length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Categories</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default CheatSheetsPage;
