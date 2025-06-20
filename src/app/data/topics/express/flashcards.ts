const expressQuestions = [
  {
    question: "What is Express.js?",
    answer:
      "A minimal and flexible Node.js web framework that provides tools for routing, middleware, and handling HTTP requests/responses.",
    subTopic: "Overview",
  },
  {
    question: "What are some advantages of using Express.js?",
    answer:
      "Fast and minimalist, powerful routing system, robust middleware support, large community and ecosystem.",
    subTopic: "Overview",
  },
  {
    question: "How do you create a basic Express server?",
    answer:
      "const express = require('express'); const app = express(); app.get('/', (req, res) => res.send('Hello')); app.listen(3000);",
    subTopic: "Overview",
  },
  {
    question: "What is middleware in Express?",
    answer:
      "Functions that run between receiving a request and sending a response. Example: app.use(express.json())",
    subTopic: "Middleware",
  },
  {
    question: "What are the types of middleware in Express?",
    answer:
      "Application-level, Router-level, Built-in, Error-handling, Third-party",
    subTopic: "Middleware",
  },
  {
    question: "What is next() in Express middleware?",
    answer:
      "A function to pass control to the next middleware or route handler.",
    subTopic: "Middleware",
  },
  {
    question: "How do you handle JSON data in Express?",
    answer: "Use middleware: app.use(express.json())",
    subTopic: "Middleware",
  },
  {
    question: "How do you define routes in Express?",
    answer: "Use app.get(), app.post(), app.put(), and app.delete() methods.",
    subTopic: "Routing",
  },
  {
    question: "What is req and res in Express?",
    answer: "req = HTTP Request object, res = HTTP Response object.",
    subTopic: "Routing",
  },
  {
    question: "What is the purpose of express.Router()?",
    answer:
      "To create modular, mountable route handlers. Useful for separating routes by feature or resource.",
    subTopic: "Routing",
  },
  {
    question: "How do you serve static files in Express?",
    answer: "Use app.use(express.static('public')) to serve static assets.",
    subTopic: "Utilities",
  },
  {
    question: "How do you handle file uploads in Express?",
    answer: "Use middleware like multer to handle multipart/form-data.",
    subTopic: "Utilities",
  },
  {
    question: "How do you handle errors in Express?",
    answer:
      "Use error-handling middleware: app.use((err, req, res, next) => { res.status(500).send(err.message); });",
    subTopic: "Error Handling",
  },
  {
    question: "How do you create a RESTful API in Express?",
    answer:
      "Define routes for CRUD operations using HTTP methods: GET, POST, PUT, DELETE.",
    subTopic: "API Design",
  },
  {
    question: "How do you use route parameters in Express?",
    answer:
      "Route parameters are defined using a colon. Example: app.get('/user/:id', (req, res) => res.send(req.params.id));",
    subTopic: "API Design",
  },
  {
    question: "How do you protect Express routes?",
    answer:
      "Use authentication middleware (like JWT verification) to restrict access.",
    subTopic: "Security",
  },
  {
    question: "What is JWT?",
    answer:
      "JWT (JSON Web Token) is a compact, URL-safe token used to securely transmit information. Commonly used for authentication.",
    subTopic: "Security",
  },
  {
    question: "How does JWT authentication work in Express?",
    answer:
      "User logs in → server generates token → client stores token → client sends token in Authorization header → server verifies token.",
    subTopic: "Security",
  },
  {
    question: "How do you generate a JWT in Node.js?",
    answer:
      "const jwt = require('jsonwebtoken'); const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });",
    subTopic: "Security",
  },
  {
    question: "What is CORS and how do you enable it in Express?",
    answer:
      "CORS (Cross-Origin Resource Sharing) is a security feature. Use the 'cors' middleware: const cors = require('cors'); app.use(cors());",
    subTopic: "Security",
  },
];

export default expressQuestions;
