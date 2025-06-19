// app/roadmaps/[type]/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  Circle,
  Code,
  Server,
  Layers,
  Book,
  Clock,
  Users,
} from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { roadmaps } from "../../../data/roadmaps/roadmaps";

const RoadmapDetailPage = () => {
  const router = useRouter();
  const params = useParams() as { type: string };
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const roadmapData = roadmaps[params.type];

  // If roadmap doesn't exist, show error
  if (!roadmapData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Roadmap Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The roadmap you're looking for doesn't exist.
          </p>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "frontend":
        return Code;
      case "backend":
        return Server;
      case "fullstack":
        return Layers;
      default:
        return Code;
    }
  };

  const getGradient = (type: string) => {
    switch (type) {
      case "frontend":
        return "from-blue-500 to-purple-600";
      case "backend":
        return "from-purple-500 to-blue-600";
      case "fullstack":
        return "from-blue-600 to-purple-500";
      default:
        return "from-blue-500 to-purple-600";
    }
  };

  const Icon = getIcon(params.type);
  const gradient = getGradient(params.type);

  const toggleStepCompletion = (index: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompletedSteps(newCompleted);
  };

  const completionPercentage =
    (completedSteps.size / roadmapData.steps.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div
        className={`bg-gradient-to-br ${gradient} text-white relative overflow-hidden`}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          {/* Back Button */}
          <motion.button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors duration-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            <span>Back to Roadmaps</span>
          </motion.button>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            {/* Title Section */}
            <div className="flex-1">
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <Icon size={32} />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold">
                    {roadmapData.title}
                  </h1>
                  <p className="text-white/80 text-lg mt-2">
                    Complete learning path with {roadmapData.steps.length}{" "}
                    essential topics
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Progress Bar */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/80">Progress</span>
              <span className="text-white font-semibold">
                {Math.round(completionPercentage)}%
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <motion.div
                className="bg-white rounded-full h-3"
                initial={{ width: 0 }}
                animate={{ width: `${completionPercentage}%` }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Roadmap Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {roadmapData.steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                completedSteps.has(index)
                  ? `border-green-500 bg-green-50 dark:bg-green-900/20`
                  : `border-gray-300 dark:border-gray-600`
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                {/* Step Number & Checkbox */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      completedSteps.has(index)
                        ? "bg-green-500 text-white"
                        : `bg-gradient-to-r ${gradient} text-white`
                    }`}
                  >
                    {index + 1}
                  </div>
                  <button
                    onClick={() => toggleStepCompletion(index)}
                    className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                  >
                    {completedSteps.has(index) ? (
                      <CheckCircle size={20} className="text-green-500" />
                    ) : (
                      <Circle size={20} />
                    )}
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      completedSteps.has(index)
                        ? "text-green-700 dark:text-green-400 line-through"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {step.name}
                  </h3>

                  {step.description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {step.description}
                    </p>
                  )}

                  {/* Options */}
                  {step.options && step.options.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Popular Options:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {step.options.map((option, optionIndex) => (
                          <span
                            key={optionIndex}
                            className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${gradient} text-white shadow-sm`}
                          >
                            {option}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Completion Overlay */}
              {completedSteps.has(index) && (
                <motion.div
                  className="absolute inset-0 bg-green-500/5 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Completion Message */}
        {completedSteps.size === roadmapData.steps.length && (
          <motion.div
            className={`mt-12 p-8 rounded-2xl bg-gradient-to-r ${gradient} text-white text-center`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Congratulations! 🎉</h3>
            <p className="text-white/90">
              You've completed the {roadmapData.title}! You're now ready to
              build amazing projects.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RoadmapDetailPage;
