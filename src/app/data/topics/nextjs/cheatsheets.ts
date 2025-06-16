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
          name: "API Routes",
          description: "Create backend endpoints.",
          code: "pages/api/hello.ts → GET /api/hello",
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
      ],
    },
  ],
};

export default nextjsCheatSheet;
