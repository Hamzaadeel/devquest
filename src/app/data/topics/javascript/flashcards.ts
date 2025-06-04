const javascriptQuestions = [
  {
    question: "What are let, const, and var?",
    answer:
      "var: Function-scoped, hoisted. let: Block-scoped, no hoisting bugs. const: Block-scoped, immutable binding (not immutable value).",
    subTopic: "Variable Declarations",
  },
  {
    question: "What are arrow functions?",
    answer: "A shorter syntax for functions. They don’t bind their own this.",
    subTopic: "Functions",
  },
  {
    question: "What is destructuring?",
    answer: "Extracting values from arrays or objects.",
    subTopic: "Syntax",
  },
  {
    question: "What is the spread operator ...?",
    answer: "Expands or clones arrays/objects.",
    subTopic: "Syntax",
  },
  {
    question: "What is the rest parameter ...?",
    answer: "Gathers remaining arguments into an array.",
    subTopic: "Functions",
  },
  {
    question: "What is template literal syntax?",
    answer: "Allows embedded expressions with backticks `.",
    subTopic: "Strings",
  },
  {
    question: "What are default parameters?",
    answer: "Allows setting default values for function parameters.",
    subTopic: "Functions",
  },
  {
    question: "What is object shorthand?",
    answer: "When key and value have the same name.",
    subTopic: "Objects",
  },
  {
    question: "What is a Promise?",
    answer: "An object representing an asynchronous operation.",
    subTopic: "Asynchronous JavaScript",
  },
  {
    question: "What is async/await?",
    answer: "Syntax sugar for Promises, makes async code look synchronous.",
    subTopic: "Asynchronous JavaScript",
  },
  {
    question: "What is the difference between == and ===?",
    answer:
      "==: Loose equality, allows type coercion. ===: Strict equality, no type coercion.",
    subTopic: "Comparison",
  },
  {
    question: "What is the difference between null and undefined?",
    answer:
      "undefined: Variable declared but not assigned. null: Assigned value that represents 'no value'.",
    subTopic: "Data Types",
  },
  {
    question: "What is hoisting in JavaScript?",
    answer:
      "Variable and function declarations are moved to the top of their scope before code execution.",
    subTopic: "Scope & Execution",
  },
  {
    question: "What is a closure?",
    answer:
      "A function that remembers variables from its outer scope even after that scope has closed.",
    subTopic: "Functions",
  },
  {
    question: "What are modules in ES6?",
    answer: "Allow splitting code across files. Use export and import.",
    subTopic: "Modules",
  },
  {
    question: "What is the event loop in JavaScript?",
    answer:
      "Handles async operations by executing callbacks from the queue when the call stack is empty.",
    subTopic: "Asynchronous JavaScript",
  },
  {
    question: "What is the call stack?",
    answer:
      "A stack that stores function execution contexts. The top is the currently executing function.",
    subTopic: "Execution Model",
  },
  {
    question: "What is the 'this' keyword in JavaScript?",
    answer:
      "Refers to the object that is calling the function. In arrow functions, it is lexically bound.",
    subTopic: "Context",
  },
  {
    question: "How does 'this' behave in arrow vs regular functions?",
    answer: "Regular: dynamic this. Arrow: lexical this.",
    subTopic: "Functions",
  },
  {
    question: "What is optional chaining ?.?",
    answer:
      "A safe way to access deeply nested properties without errors if something is null or undefined.",
    subTopic: "Syntax",
  },
  {
    question: "What is the nullish coalescing operator ???",
    answer:
      "Returns the right-hand operand when the left-hand operand is null or undefined.",
    subTopic: "Operators",
  },
  {
    question: "What is debounce in JavaScript?",
    answer:
      "Delays function execution until after a pause in events. Useful for inputs or resize.",
    subTopic: "Performance",
  },
  {
    question: "What is throttle in JavaScript?",
    answer:
      "Limits how often a function can run. Ensures it runs at most once every X ms.",
    subTopic: "Performance",
  },
];

export default javascriptQuestions;
