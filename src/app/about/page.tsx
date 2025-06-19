"use client";
import React, { useEffect, useRef } from "react";
import {
  Code,
  BookOpen,
  Zap,
  Users,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Layers,
} from "lucide-react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(direction === "down" ? to : from);
    }
  }, [from, to, direction]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === "function") {
        onStart();
      }
      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);
      const durationTimeoutId = setTimeout(() => {
        if (typeof onEnd === "function") {
          onEnd();
        }
      }, delay * 1000 + duration * 1000);
      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    from,
    to,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const options = {
          useGrouping: !!separator,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        };
        const formattedNumber = Intl.NumberFormat("en-US", options).format(
          Number(latest.toFixed(0))
        );
        ref.current.textContent = separator
          ? formattedNumber.replace(/,/g, separator)
          : formattedNumber;
      }
    });
    return () => unsubscribe();
  }, [springValue, separator]);

  return <span className={`${className}`} ref={ref} />;
}

const AboutPage = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Curated Flashcards",
      description:
        "Interactive flashcards covering essential web development concepts from HTML basics to advanced frameworks.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Coding Examples",
      description:
        "Real-world code snippets and examples that demonstrate best practices and common interview patterns.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "MCQ Practice",
      description:
        "Multiple-choice questions designed to test your knowledge and reinforce key concepts.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Cheat Sheets",
      description:
        "Quick reference guides for HTML, CSS, JavaScript, and popular full-stack technologies.",
    },
  ];

  const technologies = [
    {
      name: "CS Basics",
      description:
        "Programming Fundamentals, Object-Oriented Programming, Data Structures, Algorithms",
    },
    { name: "Web Basics", description: "HTML, CSS, JavaScript" },
    { name: "Frontend", description: "React, Next.js, Angular" },
    { name: "Backend", description: "Node.js, Express, Nest" },
    { name: "Database", description: "MySQL, PostgreSQL, MongoDB" },
    { name: "Styling", description: "Tailwind CSS" },
  ];

  const benefits = [
    "No sign-up required - instant access to all content",
    "Lightning-fast performance with static content",
    "Beginner-friendly with progressive difficulty",
    "Mobile-responsive design for learning anywhere",
    "Regular updates with new interview questions",
    "Completely free and open-source",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 backdrop-blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/90">
              Interview Preparation Made Easy
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6">
            About DevQuest
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Your ultimate companion for web development interview preparation.
            Master the fundamentals, practice with real scenarios, and land your
            dream job.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-white">
                <CountUp to={100} duration={2.5} />+
              </div>
              <div className="text-sm text-white/70">Flashcards</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-white">
                <CountUp to={15} duration={2.5} delay={0.2} />+
              </div>
              <div className="text-sm text-white/70">Cheatsheets</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-2xl font-bold text-white">
                <CountUp to={10} duration={2.5} delay={0.4} />+
              </div>
              <div className="text-sm text-white/70">Topics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                DevQuest was born from the frustration of scattered interview
                preparation resources. We believe that high-quality education
                should be accessible to everyone, without barriers or paywalls.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Built with modern web technologies and designed for developers
                by developers, DevQuest provides a streamlined, efficient way to
                prepare for technical interviews in the web development space.
              </p>
              <div className="flex items-center gap-3 text-blue-400">
                <Lightbulb className="w-5 h-5" />
                <span className="font-medium">
                  Fast, Free, and Focused on Results
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-blue-500/15 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Globe className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      Global
                    </div>
                    <div className="text-sm text-white/70">
                      Accessible Anywhere
                    </div>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      Fast
                    </div>
                    <div className="text-sm text-white/70">Instant Loading</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      Community
                    </div>
                    <div className="text-sm text-white/70">
                      Developer Focused
                    </div>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      Proven
                    </div>
                    <div className="text-sm text-white/70">Interview Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-black/30 dark:bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-6">
              Everything You Need
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive resources designed to cover every aspect of web
              development interviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="text-blue-400 group-hover:text-purple-400 mb-4 group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
              Technologies Covered
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From the basics to advanced stacks, DevQuest covers a wide range
              of technologies.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-purple-400/30 hover:from-purple-500/15 hover:to-blue-500/15 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl font-bold text-white mb-2">
                  {tech.name}
                </div>
                <div className="text-sm text-white/70">{tech.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 bg-black/30 dark:bg-black/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-6">
              Why Choose DevQuest?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Designed for learners, by developers. Here&apos;s what makes us
              different:
            </p>
          </div>
          <ul className="space-y-6">
            {benefits.map((benefit, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 text-white/90 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-400/30 group-hover:border-purple-400/50 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Explore topics, practice questions, and ace your next interview with
            DevQuest.
          </p>
          <Link
            href="/topics"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <Zap className="w-5 h-5" />
            Start Learning
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
