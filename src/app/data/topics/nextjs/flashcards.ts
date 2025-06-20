const nextjsQuestions = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework for building production-ready web apps with features like SSR, SSG, file-based routing, and API routes.",
    subTopic: "Core Concepts",
  },
  {
    question: "What is file-based routing in Next.js?",
    answer:
      "Every file in the pages/ directory automatically becomes a route. Example: pages/about.tsx → /about.",
    subTopic: "Routing",
  },
  {
    question: "What is dynamic routing in Next.js?",
    answer:
      "Use brackets in filenames to create dynamic routes. Example: pages/posts/[id].tsx",
    subTopic: "Routing",
  },
  {
    question: "What is the difference between SSR and SSG?",
    answer:
      "SSR (Server-Side Rendering): HTML is generated on each request.\nSSG (Static Site Generation): HTML is generated at build time.",
    subTopic: "Rendering",
  },
  {
    question: "What is ISR (Incremental Static Regeneration)?",
    answer:
      "ISR allows static pages to be updated after deployment without rebuilding the entire site. Example: Use `revalidate` in getStaticProps.",
    subTopic: "Rendering",
  },
  {
    question:
      "What are getStaticProps, getServerSideProps, and getStaticPaths used for?",
    answer: `getStaticProps: Fetch data at build time.\ngetServerSideProps: Fetch data on every request.\ngetStaticPaths: Predefine dynamic paths for SSG.`,
    subTopic: "Data Fetching",
  },
  {
    question: "How do you fetch data client-side in Next.js?",
    answer:
      "Use React hooks like useEffect and fetch. For example:\n\nuseEffect(() => {\n  fetch('/api/data').then(res => res.json()).then(setData);\n}, []);",
    subTopic: "Data Fetching",
  },
  {
    question: "How do you create an API route in Next.js?",
    answer:
      "Create a file in pages/api/. Example: pages/api/hello.ts → /api/hello",
    subTopic: "API Routes",
  },
  {
    question: "How does Next.js handle CSS?",
    answer:
      "Supports CSS Modules, global CSS, Sass, and libraries like Tailwind. Import global styles in _app.tsx.",
    subTopic: "Styling",
  },
  {
    question: "How do you add metadata like title and description in Next.js?",
    answer:
      "Use the <Head> component from 'next/head'. Example:\n\n<Head>\n  <title>My Page</title>\n  <meta name='description' content='This is my page.' />\n</Head>",
    subTopic: "Core Concepts",
  },
  {
    question: "What is the App component in _app.tsx used for?",
    answer:
      "_app.tsx is the root component for all pages. Use it for layouts, global CSS, and providers.",
    subTopic: "Customization",
  },
  {
    question: "What is the purpose of _document.tsx?",
    answer:
      "_document.tsx lets you customize the HTML document structure. Useful for fonts and meta tags. Runs only on the server.",
    subTopic: "Customization",
  },
  {
    question: "What is middleware in Next.js?",
    answer:
      "Middleware runs before a request is completed and can be used for auth, redirects, and headers. Export it from middleware.ts.",
    subTopic: "Core Concepts",
  },
  {
    question: "How do you deploy a Next.js app?",
    answer:
      "Deploy easily on Vercel or other platforms like Netlify or a Node.js server. Just build and export or run with next start.",
    subTopic: "Deployment",
  },
];

export default nextjsQuestions;
