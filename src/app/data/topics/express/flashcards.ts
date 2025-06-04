const expressQuestions = [
  {
    question: "What is Express.js?",
    answer:
      "A minimal and flexible Node.js web framework that provides tools for routing, middleware, and handling HTTP requests/responses.",
    subTopic: "Overview",
  },
  {
    question: "How do you create a basic Express server?",
    answer:
      "const express = require('express'); const app = express(); app.get('/', (req, res) => res.send('Hello')); app.listen(3000);",
    subTopic: "Basics",
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
    question: "How do you handle routes in Express?",
    answer: "Use app.get, app.post, app.put, app.delete to define endpoints.",
    subTopic: "Routing",
  },
  {
    question: "What is req and res in Express?",
    answer: "req = HTTP Request object. res = HTTP Response object.",
    subTopic: "Routing",
  },
  {
    question: "How do you serve static files in Express?",
    answer: "Use app.use(express.static('public')) to serve static assets.",
    subTopic: "Static Files",
  },
  {
    question: "How do you handle errors in Express?",
    answer:
      "Use error-handling middleware: app.use((err, req, res, next) => { res.status(500).send(err.message); });",
    subTopic: "Error Handling",
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
    question: "How do you create RESTful APIs with Express?",
    answer:
      "Use standard HTTP methods with clear endpoints to perform CRUD operations.",
    subTopic: "API Design",
  },
  {
    question: "How do you protect Express routes?",
    answer:
      "Use authentication (JWT, sessions) and middleware to verify tokens or session data.",
    subTopic: "Security",
  },
  {
    question: "What is JWT?",
    answer:
      "JWT (JSON Web Token) is a compact, URL-safe token used to securely transmit information between parties. Commonly used for authentication.",
    subTopic: "Security",
  },
  {
    question: "How does JWT authentication work?",
    answer:
      "User logs in → token is generated and sent → client stores token → client sends token in Authorization header → server verifies token.",
    subTopic: "Security",
  },
  {
    question: "How do you generate a JWT in Node.js?",
    answer:
      "const jwt = require('jsonwebtoken'); const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });",
    subTopic: "Security",
  },
];
export default expressQuestions;
