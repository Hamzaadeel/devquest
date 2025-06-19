"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  DocumentTextIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

interface SidebarProps {
  topicSlug: string;
  activeTab: string;
  activeSubTopic: string | null;
  onTabChange: (tab: string, subTopic?: string) => void;
  subTopics: string[];
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

const tabConfig = [
  {
    id: "flashcards",
    label: "Flashcards",
    icon: AcademicCapIcon,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: "cheatsheets",
    label: "Cheatsheet",
    icon: DocumentTextIcon,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: "mcqs",
    label: "MCQs",
    icon: CheckCircleIcon,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    id: "coding-samples",
    label: "Coding Samples",
    icon: CodeBracketIcon,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
];

export default function Sidebar({
  topicSlug,
  activeTab,
  activeSubTopic,
  onTabChange,
  subTopics,
  mobileOpen = false,
  onCloseMobile,
}: SidebarProps) {
  const [expandedTabs, setExpandedTabs] = useState<Set<string>>(
    new Set([activeTab])
  );
  const router = useRouter();

  const toggleTab = (tabId: string) => {
    const newExpanded = new Set(expandedTabs);
    if (newExpanded.has(tabId)) {
      newExpanded.delete(tabId);
    } else {
      newExpanded.add(tabId);
    }
    setExpandedTabs(newExpanded);
  };

  const handleSubTopicClick = (tabId: string, subTopic: string) => {
    onTabChange(tabId, subTopic);
    router.push(`/topics/${topicSlug}/flashcards`);
  };

  const handleTabClick = (tabId: string) => {
    if (tabId === "flashcards") {
      // For flashcards, expand the dropdown and navigate
      setExpandedTabs(new Set([tabId]));
      router.push(`/topics/${topicSlug}/flashcards`);
    } else {
      router.push(`/topics/${topicSlug}/${tabId}`);
    }
  };

  // Sidebar content as a function for reuse
  const sidebarContent = (
    <>
      {/* Mobile close button */}
      <div className="md:hidden flex justify-end p-4">
        <button
          onClick={onCloseMobile}
          className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl"
          aria-label="Close sidebar"
        >
          &times;
        </button>
      </div>
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Study Materials
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {topicSlug.charAt(0).toUpperCase() + topicSlug.slice(1)}
        </p>
      </div>
      <div className="p-4 space-y-2">
        {tabConfig.map((tab) => {
          const isExpanded = expandedTabs.has(tab.id);
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          if (
            tab.id === "cheatsheets" ||
            tab.id === "mcqs" ||
            tab.id === "coding-samples"
          ) {
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 ${
                  isActive
                    ? `${tab.bgColor} ${tab.borderColor} border dark:border-gray-700 dark:bg-opacity-80`
                    : "border border-transparent"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${
                    isActive ? tab.color : "text-gray-500 dark:text-gray-400"
                  }`}
                />
                <span
                  className={`ml-3 font-medium ${
                    isActive ? tab.color : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          }

          return (
            <div key={tab.id} className="space-y-1">
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 ${
                  isActive
                    ? `${tab.bgColor} ${tab.borderColor} border dark:border-gray-700 dark:bg-opacity-80`
                    : "border border-transparent"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon
                    className={`h-5 w-5 ${
                      isActive ? tab.color : "text-gray-500 dark:text-gray-400"
                    }`}
                  />
                  <span
                    className={`font-medium ${
                      isActive ? tab.color : "text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRightIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="ml-8 space-y-1 pb-2">
                      {subTopics.length > 0 ? (
                        subTopics.map((subTopic, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleSubTopicClick(tab.id, subTopic)
                            }
                            className={`w-full text-left p-2 rounded-md text-sm transition-all duration-150 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                              activeTab === tab.id &&
                              activeSubTopic === subTopic
                                ? `${tab.bgColor} ${tab.color} font-medium dark:bg-opacity-80`
                                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                            }`}
                          >
                            {subTopic}
                          </button>
                        ))
                      ) : (
                        <button
                          onClick={() => handleSubTopicClick(tab.id, "all")}
                          className={`w-full text-left p-2 rounded-md text-sm transition-all duration-150 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                            activeTab === tab.id
                              ? `${tab.bgColor} ${tab.color} font-medium dark:bg-opacity-80`
                              : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                          }`}
                        >
                          All {tab.label}
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 mt-auto">
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          <p>Study with focus</p>
          <p>Learn at your pace</p>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:block w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen sticky top-0 overflow-y-auto z-40">
        {sidebarContent}
      </div>
      {/* Mobile sidebar and overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
            onClick={onCloseMobile}
          />
          <div className="fixed inset-0 w-64 max-w-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen overflow-y-auto z-40 md:hidden transition-transform duration-300">
            {sidebarContent}
          </div>
        </>
      )}
    </>
  );
}
