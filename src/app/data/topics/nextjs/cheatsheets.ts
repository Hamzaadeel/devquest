export const nextjsCheatSheet = {
  title: "Next.js Cheat Sheet",
  sections: [
    {
      title: "1. Project Setup",
      items: [
        {
          name: "Create App",
          description: "Bootstraps a new Next.js project.",
          code: "npx create-next-app@latest my-app",
        },
        {
          name: "Development Server",
          code: "npm run dev",
        },
        {
          name: "Build for Production",
          description: "Builds the app for production.",
          code: "npm run build",
        },
      ],
    },
    {
      title: "2. Pages & Routing",
      items: [
        {
          name: "Pages",
          description: "Each file in the `pages/` directory becomes a route.",
          code: "pages/about.tsx → /about",
        },
        {
          name: "Dynamic Routes",
          code: "pages/posts/[id].tsx → /posts/1",
        },
        {
          name: "Catch-All Routes",
          description: "Match all routes under a path.",
          code: "pages/posts/[...slug].tsx → /posts/a/b/c",
        },
      ],
    },
    {
      title: "3. Data Fetching",
      items: [
        {
          name: "getServerSideProps",
          description: "Fetch data on each request.",
          code: "export async function getServerSideProps(context) {\n  return { props: { data } }\n}",
        },
        {
          name: "getStaticProps",
          description: "Fetch data at build time.",
          code: "export async function getStaticProps() {\n  return { props: { data } }\n}",
        },
        {
          name: "getStaticPaths",
          description: "Generate dynamic routes at build time.",
          code: "export async function getStaticPaths() {\n  return { paths: [{ params: { id: '1' } }], fallback: false }\n}",
        },
      ],
    },
    {
      title: "4. Navigation & Links",
      items: [
        {
          name: "Link Component",
          code: "<Link href='/about'><a>About</a></Link>",
        },
        {
          name: "Router Push",
          code: "import { useRouter } from 'next/router'\nconst router = useRouter()\nrouter.push('/about')",
        },
        {
          name: "Programmatic Navigation",
          description: "Navigate programmatically after an action.",
          code: "const handleSubmit = () => { router.push('/success'); }",
        },
      ],
    },
    {
      title: "5. Assets & Metadata",
      items: [
        {
          name: "Static Assets",
          code: "public/logo.png → /logo.png",
        },
        {
          name: "Head Component",
          code: "import Head from 'next/head'\n<Head><title>My App</title></Head>",
        },
        {
          name: "Image Optimization",
          code: "import Image from 'next/image'\n<Image src='/image.jpg' alt='My Image' width={500} height={300} />",
        },
      ],
    },
    {
      title: "6. Next.js Interview Questions",
      items: [
        {
          name: "What is Next.js?",
          description:
            "Next.js is a React framework that enables server-side rendering and static site generation.",
        },
        {
          name: "What are the benefits of using Next.js?",
          description:
            "Benefits include improved performance, SEO, and developer experience.",
        },
        {
          name: "How does Next.js handle routing?",
          description:
            "Next.js uses a file-based routing system where the file structure in the `pages` directory defines the routes.",
        },
        {
          name: "What is the difference between getStaticProps and getServerSideProps?",
          description:
            "getStaticProps is used for static generation at build time, while getServerSideProps is used for server-side rendering on each request.",
        },
        {
          name: "What is API Routes in Next.js?",
          description:
            "API Routes allow you to create API endpoints within your Next.js application.",
        },
      ],
    },
  ],
};

export default nextjsCheatSheet;
