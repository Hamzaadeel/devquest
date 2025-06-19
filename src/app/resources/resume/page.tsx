"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Eye,
  Lightbulb,
  Target,
  TrendingUp,
  FileText,
  CheckCircle,
  Star,
  ArrowDown,
} from "lucide-react";
import DocxViewer from "@/components/DocxViewer";

interface CVTip {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples?: string[];
}

const CVTemplatePage: React.FC = () => {
  const cvTips: CVTip[] = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Keep It Concise",
      description:
        "Limit your CV to 1-2 pages. Recruiters spend only 6-8 seconds on initial screening.",
      examples: [
        "Use bullet points",
        "Prioritize recent experience",
        "Remove outdated skills",
      ],
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tailor for Each Job",
      description:
        "Customize your CV for each application by highlighting relevant skills and experience.",
      examples: [
        "Match keywords from job description",
        "Reorder sections by relevance",
        "Adjust summary statement",
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Show Impact with Numbers",
      description:
        "Quantify your achievements whenever possible to demonstrate your value.",
      examples: [
        "Increased sales by 25%",
        "Managed team of 10 developers",
        "Reduced loading time by 40%",
      ],
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Use Action Verbs",
      description:
        "Start bullet points with strong action verbs to make your experience more dynamic.",
      examples: [
        "Developed, Implemented, Led",
        "Optimized, Collaborated, Achieved",
        "Designed, Streamlined, Launched",
      ],
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Highlight Key Skills",
      description:
        "Place your most relevant technical skills prominently and keep them current.",
      examples: [
        "List 8-12 core skills",
        "Group by category",
        "Include proficiency levels",
      ],
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Professional Summary",
      description:
        "Write a compelling 2-3 line summary that captures your value proposition.",
      examples: [
        "Mention years of experience",
        "Highlight key expertise",
        "State career objectives",
      ],
    },
  ];

  const handleDownload = () => {
    // In a real implementation, this would trigger the actual file download
    const link = document.createElement("a");
    link.href = "/CV-Template.docx"; // This would be the actual file path
    link.download = "Professional-CV-Template.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const templatePreviewRef = React.useRef<HTMLDivElement>(null);

  const scrollToPreview = () => {
    if (templatePreviewRef.current) {
      templatePreviewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero/Header Section */}
      <section className="relative h-screen overflow-hidden px-6 py-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-800 to-blue-900 dark:from-blue-900 dark:via-purple-900 dark:to-blue-950"></div>
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/90">
              Stand Out With Your CV
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-200 via-blue-300 to-purple-400 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-6">
            Professional CV Template
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 dark:text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            A modern, clean template to showcase your professional experience
            and land your dream job
          </p>
          <div
            className="mt-16 animate-bounce cursor-pointer"
            onClick={scrollToPreview}
          >
            <ArrowDown className="w-10 h-10 text-white rounded-full border dark:border-gray-300 mx-auto" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* CV Preview Section */}
        <motion.div
          ref={templatePreviewRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 flex justify-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden w-full max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  Template Preview
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow hover:from-blue-600 hover:to-purple-600 dark:from-blue-700 dark:to-purple-800 dark:hover:from-blue-800 dark:hover:to-purple-900 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download Template
                </motion.button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-center">
                <DocxViewer
                  url="/CV-Template.pdf"
                  height="h-full"
                  className="max-w-4xl w-full overflow-y-auto border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CV Writing Tips */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              CV Writing Tips
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Expert advice to make your CV stand out from the crowd and get
              noticed by employers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cvTips.map((tip, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white flex-shrink-0">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {tip.title}
                  </h3>
                </div>

                <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {tip.description}
                </p>

                {tip.examples && (
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600">
                    <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                      Examples:
                    </p>
                    <ul className="text-sm space-y-1">
                      {tip.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                            •
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {example}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-lg text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Perfect CV?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Download our professional template and follow these expert tips to
            craft a CV that gets you noticed by employers and lands you
            interviews.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-600 dark:from-blue-700 dark:to-purple-800 dark:hover:from-blue-800 dark:hover:to-purple-900 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CVTemplatePage;
