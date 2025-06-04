const nextjsQuestions = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework for building production-ready web apps with features like SSR, SSG, file-based routing, and API routes.",
    subTopic: "Overview",
  },
  {
    question: "What is file-based routing in Next.js?",
    answer:
      "Every file in the pages/ directory automatically becomes a route. Example: pages/about.tsx → /about.",
    subTopic: "Routing",
  },
  {
    question: "What is the difference between SSR and SSG?",
    answer:
      "SSR: Server-Side Rendering — HTML is generated on each request. SSG: Static Site Generation — HTML is generated at build time.",
    subTopic: "Rendering",
  },
  {
    question:
      "What are getStaticProps, getServerSideProps, and getStaticPaths used for?",
    answer:
      "getStaticProps: fetch at build time. getServerSideProps: fetch on each request. getStaticPaths: define dynamic SSG routes.",
    subTopic: "Data Fetching",
  },
  {
    question: "How do you create an API route in Next.js?",
    answer:
      "Create a file in pages/api/. Example: pages/api/hello.ts → /api/hello",
    subTopic: "API Routes",
  },
  {
    question: "What is dynamic routing in Next.js?",
    answer:
      "Use brackets in filenames to create dynamic routes. Example: pages/posts/[id].tsx",
    subTopic: "Routing",
  },
  {
    question: "What is the App component in _app.tsx used for?",
    answer:
      "_app.tsx is the root component for all pages. Use it for layout, global styles, providers, etc.",
    subTopic: "Customization",
  },
  {
    question: "What is the purpose of _document.tsx?",
    answer:
      "Customize the HTML document structure. Useful for setting fonts, meta tags. Runs only on server.",
    subTopic: "Customization",
  },
  {
    question: "How does Next.js handle CSS?",
    answer:
      "Supports CSS Modules, global CSS, Sass, Tailwind via imports in _app.tsx.",
    subTopic: "Styling",
  },
  {
    question: "What are some built-in performance optimizations in Next.js?",
    answer:
      "Image optimization with <Image />, automatic code splitting, ISR, fast refresh, client-side routing.",
    subTopic: "Performance",
  },
  {
    question: "What is ISR (Incremental Static Regeneration)?",
    answer:
      "Allows static pages to be updated after deployment without rebuilding the entire site.",
    subTopic: "Rendering",
  },
];

export default nextjsQuestions;
