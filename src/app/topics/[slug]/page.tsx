"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { notFound, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import ReactMarkdown from "react-markdown";

// Example: import your topics metadata from data folder
import { allTopics } from "@/app/data/topics";
import { LiaAngleDoubleRightSolid } from "react-icons/lia";

interface PageProps {
  params: { slug: string };
}

interface Flashcard {
  question: string;
  answer: string;
  subTopic: string;
}

interface Cheatsheet {
  title: string;
  content: string;
  subTopic: string;
}

interface MCQ {
  question: string;
  options: string[];
  correct: number;
  subTopic: string;
}

interface CodingSample {
  title: string;
  code: string;
  explanation: string;
  subTopic: string;
  language?: string;
}

export default function TopicPage() {
  const { slug } = useParams() as { slug: string };
  const [activeTab, setActiveTab] = useState("flashcards");
  const [activeSubTopic, setActiveSubTopic] = useState<string | null>(null);
  const [contentData, setContentData] = useState<{
    flashcards: Flashcard[];
    cheatsheets: Cheatsheet[];
    mcqs: MCQ[];
    codingSamples: CodingSample[];
  }>({
    flashcards: [],
    cheatsheets: [],
    mcqs: [],
    codingSamples: [],
  });
  const [loading, setLoading] = useState(true);
  const pageTopRef = useRef<HTMLDivElement>(null);
  const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);

  // Find topic metadata
  const topic = allTopics.find((t) => t.slug === slug);

  if (!topic) {
    notFound();
  }

  // Dynamic import function
  const loadContent = async (contentType: string) => {
    try {
      // Map the content type to the actual file name
      const fileMap: { [key: string]: string } = {
        flashcards: "flashcards",
        cheatsheets: "cheatsheets",
        mcqs: "mcqs",
        "coding-samples": "coding-samples",
      };

      const fileName = fileMap[contentType] || contentType;
      const module = await import(`../../data/topics/${slug}/${fileName}.ts`);
      return module.default || [];
    } catch (error) {
      console.warn(`No ${contentType} found for topic: ${slug}`);
      return [];
    }
  };

  // Load all content types on component mount or slug change
  useEffect(() => {
    const loadAllContent = async () => {
      setLoading(true);
      try {
        const [flashcards, cheatsheets, mcqs, codingSamples] =
          await Promise.all([
            loadContent("flashcards"),
            loadContent("cheatsheets"),
            loadContent("mcqs"),
            loadContent("coding-samples"),
          ]);

        setContentData({
          flashcards,
          cheatsheets,
          mcqs,
          codingSamples,
        });
      } catch (error) {
        console.error("Error loading content:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAllContent();
  }, [slug]);

  // Get unique subtopics from all content types (ordered by first appearance in flashcards)
  const subTopics = useMemo(() => {
    const topics: string[] = [];
    contentData.flashcards.forEach((item) => {
      if (item.subTopic && !topics.includes(item.subTopic)) {
        topics.push(item.subTopic);
      }
    });
    return topics;
  }, [contentData]);

  // Set default subtopic on initial load for flashcards
  useEffect(() => {
    if (activeTab === "flashcards" && subTopics.length > 0 && !activeSubTopic) {
      setActiveSubTopic(subTopics[0]);
    }
  }, [activeTab, subTopics, activeSubTopic]);

  // Track current subtopic index for pagination
  const currentSubTopicIndex =
    activeSubTopic && activeSubTopic !== "all"
      ? subTopics.indexOf(activeSubTopic)
      : 0;
  const nextSubTopic =
    currentSubTopicIndex >= 0 && currentSubTopicIndex < subTopics.length - 1
      ? subTopics[currentSubTopicIndex + 1]
      : null;

  const handleNextSubTopic = () => {
    if (nextSubTopic) {
      setActiveSubTopic(nextSubTopic);
      // Scroll to top
      if (pageTopRef.current) {
        pageTopRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleTabChange = (tab: string, subTopic?: string) => {
    setActiveTab(tab);
    if (tab === "flashcards" && subTopics.length > 0) {
      setActiveSubTopic(subTopic || subTopics[0]);
    } else {
      setActiveSubTopic(null);
    }
    // Scroll to top
    if (pageTopRef.current) {
      pageTopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getFilteredContent = () => {
    let content: any[] = [];

    switch (activeTab) {
      case "flashcards":
        content = contentData.flashcards;
        break;
      case "cheatsheets":
        // Show all cheatsheets, do not filter by subtopic
        content = contentData.cheatsheets;
        break;
      case "mcqs":
        content = contentData.mcqs;
        break;
      case "coding-samples":
        content = contentData.codingSamples;
        break;
      default:
        return [];
    }

    return activeTab === "flashcards" &&
      activeSubTopic &&
      activeSubTopic !== "all"
      ? content.filter((item) => item.subTopic === activeSubTopic)
      : content;
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600 dark:text-gray-300">
            Loading content...
          </span>
        </div>
      );
    }

    const content = getFilteredContent();

    switch (activeTab) {
      case "flashcards":
        return (
          <div className="space-y-8">
            {(content as Flashcard[]).map((flashcard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium rounded-full">
                    {flashcard.subTopic}
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Question */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-start">
                      <span className="bg-blue-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        Q
                      </span>
                      {flashcard.question}
                    </h3>
                  </div>

                  {/* Answer */}
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                      <span className="bg-green-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                        A
                      </span>
                      Answer:
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-9">
                      {flashcard.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Pagination Button */}
            {nextSubTopic && (
              <div className="flex justify-end pt-4">
                <button
                  onClick={handleNextSubTopic}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                  Next: {nextSubTopic}
                </button>
              </div>
            )}
          </div>
        );

      case "cheatsheets":
        // Support new cheatsheet structure (sections/items) for any topic
        const structuredCheatSheet =
          Array.isArray(content) && content.length > 0 && content[0].sections
            ? content[0]
            : (content as any)?.sections
            ? (content as any)
            : null;
        if (structuredCheatSheet) {
          return (
            <div className="space-y-8">
              {structuredCheatSheet.sections.map(
                (section: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 sm:p-6"
                  >
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.items.map((item: any, i: number) => (
                        <li key={i} className="">
                          {item.name && (
                            <div className="font-semibold text-gray-800 dark:text-gray-200">
                              {item.name}
                            </div>
                          )}
                          {item.description && (
                            <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                              {item.description}
                            </div>
                          )}
                          {item.code && (
                            <pre className="bg-gray-100 dark:bg-gray-800 rounded-md p-3 text-xs overflow-x-auto mt-1 text-gray-800 dark:text-gray-100">
                              <code>{item.code}</code>
                            </pre>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          );
        }
        // fallback for other topics (old format)
        return (
          <div className="space-y-6">
            {(content as Cheatsheet[]).map((sheet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800"
              >
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm font-medium rounded-full">
                    {sheet.subTopic}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {sheet.title}
                </h3>
                <div className="prose max-w-none text-gray-700 dark:text-gray-200 dark:prose-invert">
                  <ReactMarkdown>{sheet.content}</ReactMarkdown>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "mcqs":
        return (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-6xl mb-4">⏳</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              MCQs section is under development. Stay tuned!
            </p>
          </div>
        );

      case "coding-samples":
        return (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-6xl mb-4">⏳</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Coding Samples section is under development. Stay tuned!
            </p>
          </div>
        );

      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-3 left-3 z-50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-2 shadow-lg"
        onClick={() => setSidebarMobileOpen(true)}
        aria-label="Open sidebar"
      >
        <LiaAngleDoubleRightSolid className="h-6 w-6 text-gray-700 dark:text-gray-200" />
      </button>

      <Sidebar
        topicSlug={slug}
        activeTab={activeTab}
        activeSubTopic={activeSubTopic}
        onTabChange={(tab, subTopic) => {
          handleTabChange(tab, subTopic);
          setSidebarMobileOpen(false);
        }}
        subTopics={subTopics}
        mobileOpen={sidebarMobileOpen}
        onCloseMobile={() => setSidebarMobileOpen(false)}
      />

      <div className="flex-1 overflow-hidden md:ml-2">
        <div ref={pageTopRef} />
        <div className="p-4 sm:p-6 md:p-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {topic.title.charAt(0)}
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {topic.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {topic.description}
                </p>
              </div>
            </div>

            {/* Active Filter Indicator */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500 dark:text-gray-300">
                Currently viewing:
              </span>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium rounded-full">
                {activeTab.charAt(0).toUpperCase() +
                  activeTab.slice(1).replace("-", " ")}
              </span>
              {activeSubTopic && activeSubTopic !== "all" && (
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">
                  {activeSubTopic}
                </span>
              )}
            </div>
          </div>

          {/* Content Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeSubTopic}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {/* {!loading && getFilteredContent().length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-600 text-6xl mb-4">
                📚
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                No content available
              </h3>
              <p className="text-gray-500 dark:text-gray-300">
                Content for {activeTab.replace("-", " ")}{" "}
                {activeSubTopic &&
                  activeSubTopic !== "all" &&
                  `in ${activeSubTopic}`}{" "}
                is not available yet.
              </p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
