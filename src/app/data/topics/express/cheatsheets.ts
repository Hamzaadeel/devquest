export const expressCheatSheet = {
  title: "Express.js Cheat Sheet",
  sections: [
    {
      title: "1. Setup & Basics",
      items: [
        {
          name: "Install Express",
          code: "npm install express",
        },
        {
          name: "Basic Server Setup",
          code: "const express = require('express');\nconst app = express();\napp.listen(3000, () => console.log('Server running'));",
        },
      ],
    },
    {
      title: "2. Routing",
      items: [
        {
          name: "GET Route",
          description: "Handles GET requests.",
          code: "app.get('/', (req, res) => res.send('Hello World'));",
        },
        {
          name: "POST Route",
          description: "Handles POST requests.",
          code: "app.post('/submit', (req, res) => res.send('Data received'));",
        },
      ],
    },
    {
      title: "3. Middleware",
      items: [
        {
          name: "Using Middleware",
          description: "Middleware to parse JSON requests.",
          code: "app.use(express.json());",
        },
        {
          name: "Custom Middleware",
          code: "app.use((req, res, next) => {\n  console.log('Request received');\n  next();\n});",
        },
      ],
    },
    {
      title: "4. Request & Response",
      items: [
        {
          name: "req.params",
          description: "Access route parameters.",
          code: "app.get('/user/:id', (req, res) => {\n  res.send(req.params.id);\n});",
        },
        {
          name: "req.body",
          description: "Access POST body (requires middleware).",
          code: "app.post('/user', (req, res) => {\n  res.send(req.body);\n});",
        },
      ],
    },
    {
      title: "5. Error Handling",
      items: [
        {
          name: "Error Middleware",
          code: "app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something broke!');\n});",
        },
      ],
    },
  ],
};

export default expressCheatSheet;
