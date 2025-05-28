// components/FeatureCard.tsx
import React from "react";
import Link from "next/link";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
}: FeatureCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="relative h-full bg-gradient-to-br from-white via-gray-50 to-blue-50/30 dark:from-zinc-900 dark:via-zinc-800/50 dark:to-blue-950/20 border border-gray-200/60 dark:border-zinc-700/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer overflow-hidden backdrop-blur-sm">
        {/* Animated background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 dark:from-blue-400/10 dark:via-transparent dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 dark:from-blue-400/30 dark:via-purple-400/30 dark:to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with enhanced styling */}
          <div className="relative mb-6">
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
              {icon}
            </div>
            {/* Icon glow effect */}
            <div className="absolute top-0 left-0 text-5xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md text-blue-500 dark:text-blue-400">
              {icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          {/* Animated arrow indicator */}
          <div className="flex items-center mt-6 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
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
    </Link>
  );
}
