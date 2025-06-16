export const nodeCheatSheet = {
  title: "Node.js Cheat Sheet",
  sections: [
    {
      title: "1. Introduction",
      items: [
        {
          name: "Node.js",
          description: "JavaScript runtime built on Chrome's V8 engine.",
        },
        {
          name: "npm",
          description: "Node package manager used to install libraries.",
        },
        {
          name: "CommonJS",
          description: "Uses `require()` for importing modules.",
        },
      ],
    },
    {
      title: "2. Modules",
      items: [
        {
          name: "Export & Import",
          code: `// utils.js\nmodule.exports = add;\n\n// main.js\nconst add = require('./utils');`,
        },
      ],
    },
    {
      title: "3. File System (fs)",
      items: [
        {
          name: "Read File",
          code: `fs.readFile('file.txt', 'utf8', (err, data) => {\n  console.log(data);\n});`,
        },
        {
          name: "Write File",
          code: `fs.writeFile('file.txt', 'Hello World', err => {\n  if (!err) console.log('Saved');\n});`,
        },
      ],
    },
    {
      title: "4. HTTP Server",
      items: [
        {
          name: "Create Server",
          code: `const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.end('Hello');\n});\nserver.listen(3000);`,
        },
      ],
    },
    {
      title: "5. Express.js",
      items: [
        {
          name: "Basic Setup",
          code: `const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => res.send('Hello'));\napp.listen(3000);`,
        },
        {
          name: "Middleware",
          code: `app.use(express.json()); // Parse JSON bodies`,
        },
        {
          name: "Route Params",
          code: `app.get('/user/:id', (req, res) => {\n  res.send(req.params.id);\n});`,
        },
      ],
    },
    {
      title: "6. Environment Variables",
      items: [
        {
          name: "dotenv",
          code: `require('dotenv').config();\nconsole.log(process.env.PORT);`,
        },
      ],
    },
    {
      title: "7. Package.json",
      items: [
        { name: "Scripts", description: "Define npm run commands." },
        { name: "Dependencies", description: "Lists production packages." },
        { name: "DevDependencies", description: "Lists dev-only packages." },
      ],
    },
    {
      title: "8. Common Libraries",
      items: [
        { name: "axios", description: "HTTP client for making API requests." },
        { name: "cors", description: "Enable Cross-Origin Resource Sharing." },
        { name: "mongoose", description: "ODM for MongoDB." },
        { name: "jsonwebtoken", description: "JWT-based authentication." },
        { name: "bcrypt", description: "Password hashing." },
      ],
    },
  ],
};

export default nodeCheatSheet;
