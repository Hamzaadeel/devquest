"use client";
import { Book, File, Laptop, Dice6Icon } from "lucide-react";
import React, { useState, useEffect } from "react";
import HowItWorksStepper from "./Stepper";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
};

// Enhanced Feature Card Component
const FeatureCard = ({ icon, title, description, href }: FeatureCardProps) => (
  <a href={href} className="group block h-full">
    <div className="relative h-full bg-gradient-to-br from-white via-gray-50/80 to-blue-50/40 dark:from-zinc-900/90 dark:via-zinc-800/60 dark:to-blue-950/30 border border-gray-200/70 dark:border-zinc-700/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/30 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] cursor-pointer overflow-hidden backdrop-blur-sm">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-purple-600/8 dark:from-blue-400/15 dark:via-transparent dark:to-purple-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 dark:from-blue-400/40 dark:via-purple-400/40 dark:to-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with enhanced styling */}
        <div className="relative mb-6">
          <div className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-2xl w-fit group-hover:scale-110 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20 dark:group-hover:from-blue-400/30 dark:group-hover:to-purple-400/30">
            <div className="group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
          {/* Icon glow effect */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 mb-6">
          {description}
        </p>

        {/* Animated arrow indicator */}
        <div className="flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
          <span className="text-sm font-semibold mr-2">Explore</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 0 0 60' fill='none' stroke='%23000' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='60' height='60' fill='url(%23grid)' /%3e%3c/svg%3e")`,
          }}
        />
      </div>
    </div>
  </a>
);

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to DevQuest",
      description:
        "Prepare, Practice, Prevail! Your ultimate tech learning companion.",
      bgClass: "bg-gradient-to-br from-blue-600 via-sky-400 to-blue-800",
      button: { text: "Get Started", href: "/topics" },
    },
    {
      title: "Prepare",
      description:
        "Master your skills with our comprehensive learning resources. Access flashcards, detailed notes, and cheat sheets to build a strong foundation for your tech career.",
      bgClass: "bg-gradient-to-br from-blue-600 via-sky-400 to-blue-800",
      button: { text: "Explore Preparation", href: "/resources" },
    },
    {
      title: "Practice",
      description:
        "Put your knowledge to the test with our extensive collection of MCQs, Q&A sessions, and hands-on coding exercises. Practice makes perfect!",
      bgClass: "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700",
      button: { text: "Start Practicing", href: "/practice" },
    },
    {
      title: "Prevail",
      description:
        "Land your dream job or internship with confidence. Our platform helps you showcase your skills and prepare for real-world tech interviews.",
      bgClass: "bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700",
      button: { text: "See Success Stories", href: "/success" },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <>
      {/* Hero Section with Pure Tailwind */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Dynamic Background with Tailwind Transitions */}
        <div
          className={`absolute inset-0 ${currentSlideData.bgClass} dark:${
            currentSlide === 0
              ? "bg-gradient-to-br from-blue-900 via-sky-800 to-blue-950"
              : currentSlide === 1
              ? "bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"
              : "bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-950"
          } transition-all duration-1000`}
        >
          {/* Grid Pattern using Tailwind */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3e%3cpath d='m 10 0 l 0 0 0 10' fill='none' stroke='white' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)' /%3e%3c/svg%3e")`,
            }}
          />

          {/* Floating Elements with Tailwind Animations */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 dark:bg-white/5 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 dark:bg-white/5 rounded-lg rotate-45 animate-bounce" />
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/10 dark:bg-white/5 rounded-full animate-ping" />
          <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-white/10 dark:bg-white/5 rounded-full animate-pulse" />
        </div>

        {/* Content with Custom Animation Classes */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-white">
          {/* Slide Content */}
          <div className="text-center max-w-4xl transition-all duration-700 transform">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg hero-slide-in">
              {currentSlideData.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90 max-w-2xl mx-auto hero-slide-in-delay">
              {currentSlideData.description}
            </p>

            {/* CTA Button */}
            <a
              href={currentSlideData.button.href}
              className="inline-flex items-center gap-3 bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 group hero-slide-in-delay-2 border border-gray-200 dark:border-gray-700"
            >
              <span>{currentSlideData.button.text}</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 bg-white/20 dark:bg-white/10 rounded-full h-1">
            <div
              className="bg-white dark:bg-blue-400 rounded-full h-1 transition-all duration-300"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-700/60 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 z-30"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-700/60 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 z-30"
        >
          <svg
            width="24"
            height="24"
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
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "bg-white dark:bg-blue-400 scale-125"
                  : "bg-white/50 dark:bg-white/30 hover:bg-white/70 dark:hover:bg-blue-400/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Feature Cards Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Enhanced Background with Multiple Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-950 dark:via-blue-950/20 dark:to-indigo-950/30"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 dark:from-cyan-800/10 dark:to-blue-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/10 to-pink-200/10 dark:from-purple-800/5 dark:to-pink-800/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='smallgrid' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3cpath d='m 20 0 l 0 0 0 20' fill='none' stroke='%23000' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23smallgrid)' /%3e%3c/svg%3e")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block p-2  rounded-2xl mb-6">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent">
                Everything You Need to Succeed
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive tools and resources designed to accelerate your tech
              journey with professional-grade learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={
                <Laptop className="text-blue-600 dark:text-blue-400 w-10 h-10" />
              }
              title="Explore Topics"
              description="Master HTML, CSS, JS, MERN stack and cutting-edge technologies with structured learning paths and hands-on projects."
              href="/topics"
            />
            <FeatureCard
              icon={
                <Book className="text-emerald-600 dark:text-emerald-400 w-10 h-10" />
              }
              title="Practice Questions"
              description="Sharpen your problem-solving skills with thousands of curated MCQs, coding challenges, and real-world scenarios."
              href="/practice"
            />
            <FeatureCard
              icon={
                <File className="text-purple-600 dark:text-purple-400 w-10 h-10" />
              }
              title="Cheat Sheets"
              description="Quick-reference guides, visual aids, and comprehensive documentation to boost retention and workflow efficiency."
              href="/resources"
            />
            <FeatureCard
              icon={
                <Dice6Icon className="text-orange-600 dark:text-orange-400 w-12 h-12" />
              }
              title="Random Quiz"
              description="Challenge yourself with surprise questions across different topics, difficulty levels, and adaptive learning algorithms."
              href="/random"
            />
          </div>
          {/* How It Works Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <HowItWorksStepper />
          </section>
        </div>
      </section>
    </>
  );
}
