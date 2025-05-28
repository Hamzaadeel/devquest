"use client";
import React, { useState, useEffect } from "react";

// Feature Card Component
const FeatureCard = ({ icon, title, description, href }) => (
  <a
    href={href}
    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-blue-200"
  >
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </a>
);

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
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
      bgClass: "bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600",
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
          className={`absolute inset-0 ${currentSlideData.bgClass} transition-all duration-1000`}
        >
          {/* Grid Pattern using Tailwind */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3e%3cpath d='m 10 0 l 0 0 0 10' fill='none' stroke='white' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)' /%3e%3c/svg%3e")`,
            }}
          />

          {/* Floating Elements with Tailwind Animations */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-lg rotate-45 animate-bounce" />
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping" />
          <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-pulse" />
        </div>

        {/* Content with Custom Animation Classes */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-white">
          {/* Welcome Section */}
          {currentSlide === 0 && (
            <div className="text-center mb-8 hero-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
                Welcome to DevQuest
              </h1>
              <p className="text-2xl md:text-3xl font-light tracking-wide opacity-90">
                Prepare, Practice, Prevail!
              </p>
            </div>
          )}

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
              className="inline-flex items-center gap-3 bg-white text-gray-800 font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 group hero-slide-in-delay-2"
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
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 bg-white/20 rounded-full h-1">
            <div
              className="bg-white rounded-full h-1 transition-all duration-300"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 z-30"
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
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 z-30"
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
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and resources designed to accelerate your tech
              journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="🧑‍💻"
              title="Explore Topics"
              description="Master HTML, CSS, JS, MERN stack and cutting-edge technologies with structured learning paths."
              href="/topics"
            />
            <FeatureCard
              icon="📝"
              title="Practice Questions"
              description="Sharpen your problem-solving skills with thousands of curated MCQs and coding challenges."
              href="/practice"
            />
            <FeatureCard
              icon="📘"
              title="Cheat Sheets"
              description="Quick-reference guides and visual aids to boost retention and speed up your workflow."
              href="/resources"
            />
            <FeatureCard
              icon="🎲"
              title="Random Quiz"
              description="Challenge yourself with surprise questions across different topics and difficulty levels."
              href="/random"
            />
          </div>
        </div>
      </section>
    </>
  );
}
