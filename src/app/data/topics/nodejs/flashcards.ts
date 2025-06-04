const nodeQuestions = [
  {
    question: "What is Node.js?",
    answer:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server.",
    subTopic: "Overview",
  },
  {
    question: "What is the difference between Node.js and browser JavaScript?",
    answer:
      "Node.js is server-side and provides access to the filesystem, network, etc. Browser JS is client-side and runs in a sandboxed environment.",
    subTopic: "Environment",
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
    subTopic: "Execution Model",
  },
  {
    question: "What is npm?",
    answer:
      "Node Package Manager — used to install, manage, and share JavaScript packages.",
    subTopic: "Package Management",
  },
  {
    question: "How do you use environment variables in Node.js?",
    answer: "Use dotenv package: require('dotenv').config(); process.env.PORT",
    subTopic: "Configuration",
  },
  {
    question: "What is the difference between require and import in Node.js?",
    answer:
      "require: CommonJS. import: ES Modules (requires 'type': 'module' in package.json).",
    subTopic: "Modules",
  },
];

export default nodeQuestions;
