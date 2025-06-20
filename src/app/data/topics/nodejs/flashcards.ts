const nodeQuestions = [
  {
    question: "What is Node.js?",
    answer:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server. It is event-driven and non-blocking.",
    subTopic: "Overview",
  },
  {
    question: "What are the advantages of using Node.js?",
    answer:
      "Fast performance (V8 engine), scalable with non-blocking I/O, large npm ecosystem, same language for client and server (JavaScript).",
    subTopic: "Overview",
  },
  {
    question: "What is the difference between Node.js and browser JavaScript?",
    answer:
      "Node.js is server-side and provides access to the filesystem, network, etc. Browser JS is client-side and runs in a sandboxed environment.",
    subTopic: "Overview",
  },
  {
    question: "What is the event-driven model in Node.js?",
    answer:
      "Node.js uses a non-blocking event loop to handle concurrent operations, making it scalable and efficient for I/O-heavy tasks.",
    subTopic: "Concurrency",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous code in Node.js?",
    answer:
      "Synchronous: Blocking, waits for execution to complete. Asynchronous: Non-blocking, continues without waiting (uses callbacks, promises, or async/await).",
    subTopic: "Concurrency",
  },
  {
    question: "How does async/await work in Node.js?",
    answer:
      "It allows writing asynchronous code that looks synchronous. It wraps promises and uses try/catch for error handling.",
    subTopic: "Concurrency",
  },
  {
    question: "Give an example of using async/await in Node.js.",
    answer:
      "async function fetchData() {\n  try {\n    const data = await fetch('https://api.example.com');\n    const json = await data.json();\n    console.log(json);\n  } catch (err) {\n    console.error(err);\n  }\n}",
    subTopic: "Concurrency",
  },
  {
    question: "What is npm?",
    answer:
      "Node Package Manager — used to install, manage, and share JavaScript packages.",
    subTopic: "Package Management",
  },
  {
    question:
      "What is the difference between dependencies and devDependencies?",
    answer:
      "dependencies are required at runtime. devDependencies are only needed during development (e.g., testing, transpiling).",
    subTopic: "Package Management",
  },
  {
    question: "How do you use environment variables in Node.js?",
    answer: "Use dotenv package: require('dotenv').config(); process.env.PORT",
    subTopic: "Environment",
  },
  {
    question: "What is the difference between require and import in Node.js?",
    answer:
      "require: CommonJS. import: ES Modules (requires 'type': 'module' in package.json).",
    subTopic: "Modules & Files",
  },
  {
    question: "What is the file system module in Node.js?",
    answer:
      "The 'fs' module allows interacting with the file system. It supports reading, writing, and watching files.",
    subTopic: "Modules & Files",
  },
  {
    question: "Give an example of reading a file using fs.",
    answer:
      "const fs = require('fs');\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});",
    subTopic: "Modules & Files",
  },
  {
    question: "What is middleware in Node.js (with Express)?",
    answer:
      "Functions that execute during request processing. Example: logging, parsing body, authentication.",
    subTopic: "Web Development",
  },
  {
    question: "How do you create a simple server using Node.js?",
    answer:
      "const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.end('Hello World');\n});\nserver.listen(3000);",
    subTopic: "Web Development",
  },
];

export default nodeQuestions;
