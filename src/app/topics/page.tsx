"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BookOpen, Clock } from "lucide-react";
import { categories, allTopics, type Topic } from "@/app/data/topics";

const TopicsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const router = useRouter();

  const filteredTopics =
    selectedCategory === "all"
      ? allTopics
      : categories.find((cat) => cat.id === selectedCategory)?.topics || [];

  const handleMouseMove = (e: React.MouseEvent, cardId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mousePosition.current = { x, y };

    const card = e.currentTarget as HTMLElement;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleTopicClick = (topic: Topic) => {
    router.push(`/topics/${topic.slug}/flashcards`);
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      dark: {
        Beginner: "text-green-400 bg-green-400/10 border-green-400/20",
        Intermediate: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
        Advanced: "text-red-400 bg-red-400/10 border-red-400/20",
      },
      light: {
        Beginner: "text-green-600 bg-green-50 border-green-200",
        Intermediate: "text-yellow-600 bg-yellow-50 border-yellow-200",
        Advanced: "text-red-600 bg-red-50 border-red-200",
      },
    };

    return colors.light[difficulty as keyof typeof colors.light];
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-slate-900 dark:to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl pb-2 font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Explore Topics
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Concise flashcards, quick-reference cheat sheets, challenging MCQs,
            and practical code snippets — all in one place.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap  justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-3 cursor-pointer rounded-full font-medium transition-all duration-300 ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm"
            }`}
          >
            All Topics
          </button>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 cursor-pointer rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Topics Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseMove={(e) => handleMouseMove(e, topic.id)}
                  onMouseEnter={() => setHoveredCard(topic.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleTopicClick(topic)}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl bg-white dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent hover:shadow-purple-500/20"
                >
                  {/* Spotlight Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.1), transparent 40%)`,
                    }}
                  />

                  {/* Border Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${topic.borderColor}20, transparent)`,
                    }}
                  />

                  {/* Topic Image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      fill
                      className="object-fill transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-gray-800/80 to-transparent" />

                    {/* Icon and Difficulty Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-white/90 dark:bg-gray-900/50 backdrop-blur-sm">
                        <IconComponent
                          size={20}
                          className="text-blue-600 dark:text-blue-400"
                        />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                          topic.difficulty
                        )}`}
                      >
                        {topic.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 p-6">
                    {/* Title & Description */}
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {topic.title}
                    </h3>
                    <p className="text-sm mb-4 line-clamp-2 text-gray-600 dark:text-gray-300">
                      {topic.description}
                    </p>

                    {/* Category */}
                    <div className="inline-block px-2 py-1 rounded-md text-xs font-medium mb-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      {
                        categories.find((cat) => cat.id === topic.category)
                          ?.name
                      }
                    </div>

                    {/* Stats
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <BookOpen size={12} />
                        {topic.lessonsCount} lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {topic.estimatedTime}
                      </span>
                    </div> */}

                    {/* Progress Bar */}
                    <div className="mt-4 h-2 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                        initial={{ width: "0%" }}
                        animate={{
                          width: hoveredCard === topic.id ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="rounded-2xl p-6 text-center transition-colors duration-300 bg-white dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {allTopics.length}
            </div>
            <div className="mt-1 text-gray-600 dark:text-gray-300">
              Total Topics
            </div>
          </div>
          <div className="rounded-2xl p-6 text-center transition-colors duration-300 bg-white dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {allTopics.reduce((sum, topic) => sum + topic.lessonsCount, 0)}
            </div>
            <div className="mt-1 text-gray-600 dark:text-gray-300">
              Total Lessons
            </div>
          </div>
          <div className="rounded-2xl p-6 text-center transition-colors duration-300 bg-white dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {categories.length}
            </div>
            <div className="mt-1 text-gray-600 dark:text-gray-300">
              Categories
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TopicsPage;
