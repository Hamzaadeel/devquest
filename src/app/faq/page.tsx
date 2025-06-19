"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is DevQuest?",
    answer:
      "DevQuest is a platform designed to help you prepare for technical interviews, brush up on your concepts, and access curated resources for developers.",
  },
  {
    id: 2,
    question: "Is DevQuest free to use?",
    answer:
      "Yes! DevQuest is completely free to use. All resources, flashcards, and practice problems are accessible without any cost.",
  },
  {
    id: 3,
    question: "How can I contribute to DevQuest?",
    answer:
      "You can contribute by suggesting new topics, reporting issues, or suggesting new features by contacting us through the contact page. We welcome community contributions!",
  },
  {
    id: 4,
    question: "Do I need to create an account?",
    answer:
      "DevQuest does not require you to create an account. You can dive right in by just selecting a topic and start learning!",
  },
  {
    id: 5,
    question: "I can't find the language/framework I am looking for.",
    answer:
      "We are actively adding more resources and topics. If you can't find your desired topic or framework, you can contact us via the contact page and let us know which topics/frameworks to add and we'll try and add them ASAP.",
  },
  {
    id: 6,
    question: "I want to provide feedback and suggest features.",
    answer:
      "You can go to the contact page from the navigation bar and send us an email and we will try our best to improve DevQuest by listening to the community.",
  },
];

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

const FAQPage = () => {
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
            FAQ
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Frequently Asked Questions about DevQuest. Find answers to common
            questions below.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={cardVariants}
              whileHover={{
                x: 8,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 mb-4">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                        <BookOpen className="w-8 h-8 text-white" />{" "}
                        {/* Increased size */}
                      </div>
                      <div className="flex-1">
                        {" "}
                        {/* Added flex-1 to maintain size */}
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
