import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  FileText,
  CheckCircle,
  Code,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  textColor: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Flashcards",
    description: "Start with key concepts and definitions to build your base.",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Cheat Sheets",
    description: "Reinforce learning with quick-reference guides.",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    id: 3,
    title: "MCQs",
    description: "Test your understanding with multiple-choice questions.",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    id: 4,
    title: "Coding Exercises",
    description: "Apply your knowledge with real-world problems.",
    icon: Code,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
];

export default function HowItWorksStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);

  const handleStepClick = (stepId: number) => {
    setDirection(stepId > currentStep ? 1 : -1);
    setCurrentStep(stepId);
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
          Master your learning journey in 4 simple steps
        </p>
      </div>

      {/* Stepper Navigation */}
      <div className="relative mb-8 md:mb-10">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0" />
        <motion.div
          className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transform -translate-y-1/2 z-10"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Step Indicators */}
        <div className="relative flex justify-between items-center z-20">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <motion.button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border-4 transition-all duration-300 ${
                  isActive || isCompleted
                    ? "bg-white dark:bg-zinc-800 border-transparent shadow-lg"
                    : "bg-white dark:bg-zinc-800 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {(isActive || isCompleted) && (
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color}`}
                    layoutId="activeBackground"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon
                  className={`w-5 h-5 md:w-6 md:h-6 relative z-10 ${
                    isActive || isCompleted
                      ? "text-white"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                />
                <motion.div
                  className={`absolute -bottom-7 md:-bottom-8 left-1/2 transform -translate-x-1/2 text-xs md:text-sm font-medium whitespace-nowrap ${
                    isActive
                      ? step.textColor
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                  animate={{
                    scale: isActive ? 1 : 0.9,
                    opacity: isActive ? 1 : 0.7,
                  }}
                >
                  Step {step.id}
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="relative h-48 md:h-56 overflow-hidden rounded-2xl bg-gray-50 dark:bg-zinc-800 transition-colors duration-300">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className={`absolute inset-0 flex flex-col justify-center items-center text-center rounded-2xl transition-colors duration-300 ${
              steps[currentStep - 1].bgColor
            } dark:bg-zinc-800`}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className={`w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${
                steps[currentStep - 1].color
              } flex items-center justify-center mb-4 md:mb-6 shadow-lg`}
            >
              {React.createElement(steps[currentStep - 1].icon, {
                className: "w-7 h-7 md:w-10 md:h-10 text-white",
              })}
            </motion.div>

            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className={`text-xl md:text-2xl font-bold ${
                steps[currentStep - 1].textColor
              } mb-2 md:mb-4`}
            >
              {steps[currentStep - 1].title}
            </motion.h3>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="text-sm md:text-base text-gray-700 dark:text-gray-200 max-w-md leading-relaxed"
            >
              {steps[currentStep - 1].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-6 md:mt-8">
        <motion.button
          onClick={handlePrev}
          disabled={currentStep === 1}
          className={`flex items-center px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all ${
            currentStep === 1
              ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          whileHover={currentStep !== 1 ? { scale: 1.05 } : {}}
          whileTap={currentStep !== 1 ? { scale: 0.95 } : {}}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </motion.button>

        <div className="flex space-x-2">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className={`w-2 h-2 rounded-full ${
                step.id === currentStep
                  ? step.textColor.replace("text-", "bg-")
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              animate={{
                scale: step.id === currentStep ? 1.2 : 1,
              }}
            />
          ))}
        </div>

        <motion.button
          onClick={handleNext}
          disabled={currentStep === steps.length}
          className={`flex items-center px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all ${
            currentStep === steps.length
              ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          whileHover={currentStep !== steps.length ? { scale: 1.05 } : {}}
          whileTap={currentStep !== steps.length ? { scale: 0.95 } : {}}
        >
          Next
          <ChevronRight className="w-5 h-5 ml-2" />
        </motion.button>
      </div>
    </div>
  );
}
