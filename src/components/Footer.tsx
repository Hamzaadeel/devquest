// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t dark:border-zinc-800 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>
        © {new Date().getFullYear()} DevQuest. Built with ❤️ to help developers
        prepare, practice, and prevail.
      </p>
    </footer>
  );
}
