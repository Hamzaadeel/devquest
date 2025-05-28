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
    <Link href={href}>
      <div className="bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 cursor-pointer">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}
