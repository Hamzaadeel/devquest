"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Code,
  Brain,
  Zap,
  Target,
  BookOpen,
  Mail,
  User,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const topicsData = [
  {
    category: "Basics",
    items: [
      {
        name: "Programming Fundamentals",
        href: "/topics/programming-fundamentals",
        description: "Core programming concepts",
      },
      {
        name: "OOP",
        href: "/topics/oop",
        description: "Object-Oriented Programming concepts",
      },
      {
        name: "DSA",
        href: "/topics/dsa",
        description: "Data Structures & Algorithms",
      },
      {
        name: "HTML",
        href: "/topics/html",
        description: "Semantic markup & best practices",
      },
      {
        name: "CSS",
        href: "/topics/css",
        description: "Styling & layout fundamentals",
      },
      {
        name: "JavaScript",
        href: "/topics/javascript",
        description: "Modern JS concepts & ES6+",
      },
    ],
  },
  {
    category: "Frontend & Styling",
    items: [
      {
        name: "React",
        href: "/topics/react",
        description: "Components, hooks & state management",
      },
      {
        name: "Next.js",
        href: "/topics/nextjs",
        description: "Full-stack React framework",
      },
      {
        name: "Angular",
        href: "/topics/angular",
        description: "TypeScript-based framework",
      },
      {
        name: "Vue.js",
        href: "/topics/vue",
        description: "Progressive JavaScript framework",
      },
      {
        name: "Tailwind CSS",
        href: "/topics/tailwind",
        description: "Utility-first CSS framework",
      },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      {
        name: "Node.js",
        href: "/topics/nodejs",
        description: "Server-side JavaScript runtime",
      },
      {
        name: "Express.js",
        href: "/topics/express",
        description: "Minimal web framework",
      },
      {
        name: "Nest.js",
        href: "/topics/nestjs",
        description: "Enterprise Node.js framework",
      },
      {
        name: "MongoDB",
        href: "/topics/mongodb",
        description: "NoSQL document database",
      },
      {
        name: "SQL",
        href: "/topics/sql",
        description: "Relational database queries",
      },
    ],
  },
];

const practiceData = [
  {
    category: "Coding Challenges",
    items: [
      {
        name: "Algorithm Problems",
        href: "/practice/algorithms",
        description: "Solve coding interview questions",
      },
      {
        name: "Data Structures",
        href: "/practice/data-structures",
        description: "Master arrays, trees, graphs & more",
      },
      {
        name: "System Design",
        href: "/practice/system-design",
        description: "Large-scale system architecture",
      },
    ],
  },
  {
    category: "Mock Interviews",
    items: [
      {
        name: "Technical Interview",
        href: "/practice/technical",
        description: "Simulate real interview scenarios",
      },
      {
        name: "Behavioral Questions",
        href: "/practice/behavioral",
        description: "Common HR & soft skill questions",
      },
      {
        name: "Code Reviews",
        href: "/practice/code-review",
        description: "Analyze and improve code quality",
      },
    ],
  },
];

const resourcesData = [
  {
    category: "Study Materials",
    items: [
      {
        name: "Cheat Sheets",
        href: "/resources/cheat-sheets",
        description: "Quick reference guides",
      },
      {
        name: "Interview Tips",
        href: "/resources/interview-tips",
        description: "Expert advice & strategies",
      },
      {
        name: "Salary Guides",
        href: "/resources/salary-guides",
        description: "Market rates & negotiation tips",
      },
    ],
  },
  {
    category: "Career Path",
    items: [
      {
        name: "Roadmaps",
        href: "/resources/roadmaps",
        description: "Step-by-step learning paths",
      },
      {
        name: "Company Guides",
        href: "/resources/companies",
        description: "FAANG & startup interview prep",
      },
      {
        name: "Portfolio Tips",
        href: "/resources/portfolio",
        description: "Showcase your best work",
      },
    ],
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const { theme, setTheme } = useTheme();

  const handleMouseEnter = (dropdown: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(dropdown);
  };
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
    setHoverTimeout(timeout);
  };

  const renderMegaMenu = (data: typeof topicsData) => (
    <div className="p-8 overflow-y-auto max-h-96">
      <div className="flex flex-wrap gap-8">
        {data.map((category) => (
          <div key={category.category} className="min-w-[200px] flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm uppercase tracking-wide">
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-200 group"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                    {item.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <nav className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/70 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Code className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-200 dark:text-blue-400" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-200 blur"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-300 dark:via-purple-400 dark:to-indigo-400">
                DevQuest
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex  items-center space-x-1 relative">
            {/* Topics Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("topics")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <Brain className="h-4 w-4" />
                <span>Topics</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "topics" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "topics" && (
                <div className="fixed left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 animate-in slide-in-from-top-2 duration-200">
                  {renderMegaMenu(topicsData)}
                </div>
              )}
            </div>

            {/* Practice Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("practice")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <Target className="h-4 w-4" />
                <span>Practice</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "practice" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "practice" && (
                <div className="fixed left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 animate-in slide-in-from-top-2 duration-200">
                  {renderMegaMenu(practiceData)}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <BookOpen className="h-4 w-4" />
                <span>Resources</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "resources" && (
                <div className="fixed left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 animate-in slide-in-from-top-2 duration-200">
                  {renderMegaMenu(resourcesData)}
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link
              href="/about"
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <User className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 dark:from-blue-500 dark:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-800"
            >
              <Link
                href="/interview-prep"
                className="flex items-center space-x-2"
              >
                <Zap className="h-4 w-4" />
                <span>Start Interview Prep</span>
              </Link>
            </Button>
            {/* Dark Mode Toggle */}
            <button
              aria-label="Toggle Dark Mode"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-4 pb-6 space-y-2">
              <MobileDropdown
                title="Topics"
                icon={<Brain className="h-5 w-5" />}
              >
                {topicsData.map((category) => (
                  <div key={category.category} className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 text-sm uppercase tracking-wide">
                      {category.category}
                    </h4>
                    <div className="space-y-1">
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </MobileDropdown>

              <MobileDropdown
                title="Practice"
                icon={<Target className="h-5 w-5" />}
              >
                {practiceData.map((category) => (
                  <div key={category.category} className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 text-sm uppercase tracking-wide">
                      {category.category}
                    </h4>
                    <div className="space-y-1">
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </MobileDropdown>

              <MobileDropdown
                title="Resources"
                icon={<BookOpen className="h-5 w-5" />}
              >
                {resourcesData.map((category) => (
                  <div key={category.category} className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 text-sm uppercase tracking-wide">
                      {category.category}
                    </h4>
                    <div className="space-y-1">
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </MobileDropdown>

              {/* About Button */}
              <MobileDropdown title="About" icon={<User className="h-5 w-5" />}>
                <Link
                  href="/about"
                  className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </MobileDropdown>

              {/* Contact Button */}
              <MobileDropdown
                title="Contact"
                icon={<Mail className="h-5 w-5" />}
              >
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </MobileDropdown>

              <div className="pt-4 border-t border-gray-200/50 dark:border-gray-800 mt-6">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg dark:from-blue-500 dark:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-800"
                >
                  <Link
                    href="/interview-prep"
                    className="flex items-center justify-center space-x-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Zap className="h-4 w-4" />
                    <span>Start Interview Prep</span>
                  </Link>
                </Button>
                {/* Dark Mode Toggle */}
                <div className="flex justify-center mt-4">
                  <button
                    aria-label="Toggle Dark Mode"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <Moon className="w-5 h-5 text-gray-700" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function MobileDropdown({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          <div className="text-blue-600">{icon}</div>
          <span>{title}</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-2 pl-4 space-y-1 animate-in slide-in-from-top-1 duration-200 overflow-y-auto max-h-60 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
}
