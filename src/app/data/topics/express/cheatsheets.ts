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
        {
          name: "Environment Variables",
          description: "Load .env config using dotenv.",
          code: "require('dotenv').config();\nconst PORT = process.env.PORT || 3000;",
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
        {
          name: "Route Parameters",
          description: "Capture dynamic values from the URL.",
          code: "app.get('/user/:id', (req, res) => res.send(req.params.id));",
        },
        {
          name: "express.Router()",
          description: "Create modular route handlers.",
          code: "const router = express.Router();\nrouter.get('/users', handler);\napp.use('/api', router);",
        },
      ],
    },
    {
      title: "3. Middleware",
      items: [
        {
          name: "Using Middleware",
          description: "Parse incoming JSON data.",
          code: "app.use(express.json());",
        },
        {
          name: "Custom Middleware",
          code: "app.use((req, res, next) => {\n  console.log('Request received');\n  next();\n});",
        },
        {
          name: "Third-Party Middleware",
          description: "Example: enable CORS.",
          code: "const cors = require('cors');\napp.use(cors());",
        },
      ],
    },
    {
      title: "4. Request & Response",
      items: [
        {
          name: "req.params",
          description: "Access route parameters.",
          code: "app.get('/user/:id', (req, res) => res.send(req.params.id));",
        },
        {
          name: "req.body",
          description: "Access POST body (requires middleware).",
          code: "app.post('/user', (req, res) => res.send(req.body));",
        },
        {
          name: "res.status()",
          description: "Set HTTP status code.",
          code: "res.status(404).send('Not found');",
        },
        {
          name: "res.json()",
          description: "Send JSON response.",
          code: "res.json({ success: true });",
        },
      ],
    },
    {
      title: "5. File Handling & Static Assets",
      items: [
        {
          name: "Serve Static Files",
          description: "Serve files from a public directory.",
          code: "app.use(express.static('public'));",
        },
        {
          name: "Handle File Uploads",
          description: "Use multer for uploading files.",
          code: "const multer = require('multer');\nconst upload = multer({ dest: 'uploads/' });\napp.post('/upload', upload.single('file'), (req, res) => {\n  res.send('File uploaded');\n});",
        },
      ],
    },
    {
      title: "6. Error Handling & Security",
      items: [
        {
          name: "Error Middleware",
          code: "app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something broke!');\n});",
        },
        {
          name: "JWT Authentication",
          description: "Protect routes using JWT.",
          code: "const jwt = require('jsonwebtoken');\nconst token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });",
        },
        {
          name: "Verify JWT Middleware",
          description: "Check token in protected routes.",
          code: "const verifyToken = (req, res, next) => {\n  const token = req.headers['authorization'];\n  if (!token) return res.status(403).send('No token');\n  jwt.verify(token, 'secretKey', (err, decoded) => {\n    if (err) return res.status(401).send('Invalid token');\n    req.user = decoded;\n    next();\n  });\n};",
        },
      ],
    },
  ],
};

export default expressCheatSheet;
