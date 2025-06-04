const programmingFundamentalsMCQs = [
  // Variables
  {
    question:
      "Which of the following is a valid variable name in most programming languages?",
    options: ["2variable", "_variable", "variable-name", "var iable"],
    correct: 1,
    subTopic: "Variables",
  },
  {
    question:
      "What happens when you declare a variable without initializing it?",
    options: [
      "Compilation error",
      "Runtime error",
      "Gets default value",
      "Undefined behavior",
    ],
    correct: 2,
    subTopic: "Variables",
  },
  {
    question: "Which variable has the longest lifetime?",
    options: [
      "Local variable",
      "Global variable",
      "Static variable",
      "Automatic variable",
    ],
    correct: 1,
    subTopic: "Variables",
  },
  {
    question: "What is the scope of a variable declared inside a function?",
    options: ["Global scope", "Local scope", "Block scope", "Module scope"],
    correct: 1,
    subTopic: "Variables",
  },
  {
    question: "Which keyword is typically used to declare a constant?",
    options: ["var", "let", "const", "final"],
    correct: 2,
    subTopic: "Variables",
  },

  // Functions
  {
    question: "What is the main purpose of functions in programming?",
    options: ["Store data", "Reuse code", "Display output", "Handle errors"],
    correct: 1,
    subTopic: "Functions",
  },
  {
    question: "What are the values passed to a function called?",
    options: ["Parameters", "Arguments", "Variables", "Constants"],
    correct: 1,
    subTopic: "Functions",
  },
  {
    question:
      "What does a function return if no return statement is specified?",
    options: ["null", "0", "undefined", "false"],
    correct: 2,
    subTopic: "Functions",
  },
  {
    question: "Which of the following best describes recursion?",
    options: [
      "A function calling another function",
      "A function calling itself",
      "A function with multiple parameters",
      "A function without return value",
    ],
    correct: 1,
    subTopic: "Functions",
  },
  {
    question: "What is function overloading?",
    options: [
      "Calling functions repeatedly",
      "Having multiple functions with same name but different parameters",
      "Functions that take too many parameters",
      "Functions that return multiple values",
    ],
    correct: 1,
    subTopic: "Functions",
  },

  // Loops
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for loop", "while loop", "do-while loop", "foreach loop"],
    correct: 2,
    subTopic: "Loops",
  },
  {
    question: "What does the 'break' statement do in a loop?",
    options: [
      "Skips current iteration",
      "Exits the loop",
      "Pauses the loop",
      "Restarts the loop",
    ],
    correct: 1,
    subTopic: "Loops",
  },
  {
    question: "What does the 'continue' statement do in a loop?",
    options: [
      "Exits the loop",
      "Skips to next iteration",
      "Pauses execution",
      "Breaks out of nested loops",
    ],
    correct: 1,
    subTopic: "Loops",
  },
  {
    question: "Which loop is best for iterating through arrays?",
    options: [
      "while loop",
      "do-while loop",
      "for loop",
      "All are equally good",
    ],
    correct: 2,
    subTopic: "Loops",
  },
  {
    question: "What causes an infinite loop?",
    options: [
      "Missing break statement",
      "Condition never becomes false",
      "Too many iterations",
      "Nested loops",
    ],
    correct: 1,
    subTopic: "Loops",
  },

  // Conditional Statements
  {
    question: "Which operator is used for logical AND?",
    options: ["&", "&&", "and", "AND"],
    correct: 1,
    subTopic: "Conditional Statements",
  },
  {
    question: "What is the ternary operator syntax?",
    options: [
      "if ? then : else",
      "condition ? true : false",
      "test ? yes : no",
      "All of the above",
    ],
    correct: 3,
    subTopic: "Conditional Statements",
  },
  {
    question: "Which statement is best for checking multiple distinct values?",
    options: [
      "if-else if chain",
      "switch statement",
      "nested if",
      "ternary operator",
    ],
    correct: 1,
    subTopic: "Conditional Statements",
  },
  {
    question: "What is short-circuit evaluation?",
    options: [
      "Fast execution of conditions",
      "Skipping evaluation when result is determined",
      "Using shortcuts in code",
      "Optimizing conditional statements",
    ],
    correct: 1,
    subTopic: "Conditional Statements",
  },
  {
    question: "Which logical operator has the highest precedence?",
    options: ["&&", "||", "!", "=="],
    correct: 2,
    subTopic: "Conditional Statements",
  },

  // Arrays
  {
    question:
      "What is the index of the first element in most programming languages?",
    options: ["1", "0", "-1", "Depends on language"],
    correct: 1,
    subTopic: "Arrays",
  },
  {
    question: "How do you find the length of an array?",
    options: ["array.size", "array.length", "size(array)", "len(array)"],
    correct: 1,
    subTopic: "Arrays",
  },
  {
    question: "What happens when you access an array index that doesn't exist?",
    options: [
      "Compilation error",
      "Runtime error",
      "Returns undefined/null",
      "Creates new element",
    ],
    correct: 2,
    subTopic: "Arrays",
  },
  {
    question: "Which of these is a two-dimensional array?",
    options: ["array[5]", "array[5][3]", "array(5,3)", "array<5,3>"],
    correct: 1,
    subTopic: "Arrays",
  },
  {
    question: "What is the difference between static and dynamic arrays?",
    options: [
      "Static arrays can change size",
      "Dynamic arrays have fixed size",
      "Static arrays have fixed size",
      "No difference",
    ],
    correct: 2,
    subTopic: "Arrays",
  },

  // Data Types
  {
    question: "Which of these is NOT a primitive data type?",
    options: ["int", "float", "boolean", "array"],
    correct: 3,
    subTopic: "Data Types",
  },
  {
    question: "What type of data does a boolean variable store?",
    options: ["Numbers", "Text", "True/False values", "Memory addresses"],
    correct: 2,
    subTopic: "Data Types",
  },
  {
    question: "What is type casting?",
    options: [
      "Creating new types",
      "Converting between data types",
      "Checking variable types",
      "Declaring type variables",
    ],
    correct: 1,
    subTopic: "Data Types",
  },
  {
    question: "Which data type is used to store decimal numbers?",
    options: ["int", "float", "char", "boolean"],
    correct: 1,
    subTopic: "Data Types",
  },
  {
    question: "What is the difference between value types and reference types?",
    options: [
      "Value types store data, reference types store addresses",
      "No difference",
      "Reference types are faster",
      "Value types use more memory",
    ],
    correct: 0,
    subTopic: "Data Types",
  },

  // Control Flow
  {
    question: "What is the default execution order of statements?",
    options: ["Random", "Sequential", "Parallel", "Conditional"],
    correct: 1,
    subTopic: "Control Flow",
  },
  {
    question: "Which is NOT a basic control structure?",
    options: ["Sequence", "Selection", "Iteration", "Compilation"],
    correct: 3,
    subTopic: "Control Flow",
  },
  {
    question: "What is exception handling used for?",
    options: [
      "Normal program flow",
      "Handling unexpected errors",
      "Optimizing performance",
      "Managing memory",
    ],
    correct: 1,
    subTopic: "Control Flow",
  },
  {
    question: "Which control structure represents decision making?",
    options: ["Sequence", "Selection", "Iteration", "Declaration"],
    correct: 1,
    subTopic: "Control Flow",
  },
  {
    question: "What happens when an exception is not handled?",
    options: [
      "Program continues normally",
      "Program terminates",
      "Exception is ignored",
      "Program restarts",
    ],
    correct: 1,
    subTopic: "Control Flow",
  },
];

export default programmingFundamentalsMCQs;
