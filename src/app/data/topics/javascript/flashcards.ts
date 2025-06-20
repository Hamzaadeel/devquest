const javascriptQuestions = [
  {
    question: "What are let, const, and var?",
    answer:
      "`var` is function-scoped and hoisted (can cause bugs), `let` is block-scoped and safer, and `const` is also block-scoped but cannot be reassigned.\nExample: `let age = 25; const name = 'Ali'; var city = 'Lahore';`",
    subTopic: "Variables & Declarations",
  },
  {
    question: "What is hoisting in JavaScript?",
    answer:
      "JavaScript moves variable and function declarations to the top before execution.\nExample: `console.log(x); var x = 5;` logs undefined due to hoisting.",
    subTopic: "Variables & Declarations",
  },
  {
    question: "What is a closure?",
    answer:
      "A closure is when a function remembers variables from its outer scope even after the outer function has finished executing.\nExample: `function outer() { let count = 0; return function() { count++; return count; }; }`",
    subTopic: "Functions & Scope",
  },
  {
    question: "What are arrow functions?",
    answer:
      "A shorter syntax for functions that do not have their own `this`.\nExample: `const greet = (name) => 'Hi ' + name;`",
    subTopic: "Functions & Scope",
  },
  {
    question: "How does 'this' behave in arrow vs regular functions?",
    answer:
      "Regular functions have dynamic `this` depending on how they’re called. Arrow functions inherit `this` from the parent scope.\nExample: In arrow functions inside a method, `this` refers to the object not the function itself.",
    subTopic: "Functions & Scope",
  },
  {
    question: "What is destructuring?",
    answer:
      "Extracting values from arrays or objects into variables.\nExample: `const [a, b] = [1, 2]; const { name } = user;`",
    subTopic: "ES6 Syntax",
  },
  {
    question: "What is the spread operator ...?",
    answer:
      "Used to expand elements from arrays/objects.\nExample: `const arr = [1, 2]; const newArr = [...arr, 3];`",
    subTopic: "ES6 Syntax",
  },
  {
    question: "What is the rest parameter ...?",
    answer:
      "Gathers remaining parameters into an array.\nExample: `function sum(...nums) { return nums.reduce((a,b)=>a+b); }`",
    subTopic: "ES6 Syntax",
  },
  {
    question: "What is template literal syntax?",
    answer:
      "A way to embed variables in strings using backticks.\nExample: ``Hello, ${name}``",
    subTopic: "ES6 Syntax",
  },
  {
    question: "What is object shorthand?",
    answer:
      "Allows you to omit the value if the key is the same name.\nExample: `const name = 'Ali'; const user = { name };`",
    subTopic: "ES6 Syntax",
  },
  {
    question: "What is optional chaining ?.?",
    answer:
      "Access nested properties safely without errors.\nExample: `user?.profile?.name`",
    subTopic: "Operators",
  },
  {
    question: "What is the nullish coalescing operator ???",
    answer:
      "Returns the right side only if the left is null or undefined.\nExample: `null ?? 'default' // returns 'default'`",
    subTopic: "Operators",
  },
  {
    question: "What is the difference between == and ===?",
    answer:
      "`==` allows type coercion, `===` checks both value and type.\nExample: `'5' == 5 // true`, `'5' === 5 // false`",
    subTopic: "Operators",
  },
  {
    question: "What is debounce in JavaScript?",
    answer:
      "It limits function calls until a delay is passed.\nExample: Used in search bars to wait for user to stop typing before searching.",
    subTopic: "Performance",
  },
  {
    question: "What is throttle in JavaScript?",
    answer:
      "Ensures a function runs at most once per time interval.\nExample: Useful for limiting scroll or resize events.",
    subTopic: "Performance",
  },
  {
    question: "What is a Promise?",
    answer:
      "An object representing a future value from an async operation.\nExample: `fetch('/api')` returns a promise.",
    subTopic: "Async JavaScript",
  },
  {
    question: "What is async/await?",
    answer:
      "Syntactic sugar for promises.\nExample: Think of ordering food at a restaurant. You `await` your meal to be ready while doing other things in the meantime.",
    subTopic: "Async JavaScript",
  },
  {
    question: "What is the event loop in JavaScript?",
    answer:
      "The system that handles async tasks.\nExample: Like a chef (call stack) who completes one dish (task) before checking the order queue (callback queue).",
    subTopic: "Async JavaScript",
  },
  {
    question: "What is the call stack?",
    answer:
      "The structure that tracks function calls.\nExample: If one function calls another, it’s placed on top of the stack.",
    subTopic: "Async JavaScript",
  },
  {
    question: "What are default parameters?",
    answer:
      "Lets you assign default values in function declarations.\nExample: `function greet(name = 'Guest') {}`",
    subTopic: "Functions & Scope",
  },
  {
    question: "What are modules in ES6?",
    answer:
      "Modules let you split code.\nExample: `export default x; import x from './file.js';`",
    subTopic: "ES6 Syntax",
  },
  {
    question: "What is the 'this' keyword in JavaScript?",
    answer:
      "Refers to the object calling the function.\nExample: In `obj.sayHi = function() { console.log(this); }`, `this` refers to `obj`.",
    subTopic: "Functions & Scope",
  },
  {
    question: "What is the difference between null and undefined?",
    answer:
      "`undefined`: declared but not assigned. `null`: assigned intentionally to indicate 'no value'.\nExample: `let a; // undefined`, `let b = null;`",
    subTopic: "Variables & Declarations",
  },
];

export default javascriptQuestions;
