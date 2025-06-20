const programmingFundamentalsFlashcards = [
  // 1. Variables and Constants
  {
    question: "What is a variable?",
    answer:
      "A storage location paired with a name to hold data. For example: let age = 25; // 'age' is the variable storing 25",
    subTopic: "Variables and Constants",
  },
  {
    question:
      "What is the difference between declaration and initialization of a variable?",
    answer:
      "Declaration is creating the variable; initialization is assigning it a value. For example: let x; // declared, x = 10; // initialized",
    subTopic: "Variables and Constants",
  },
  {
    question: "What is variable scope?",
    answer:
      "Scope is the part of the program where a variable is accessible. For example: variables inside a function can't be used outside it.",
    subTopic: "Variables and Constants",
  },
  {
    question: "What are local and global variables?",
    answer:
      "Local variables exist only inside functions; global variables are accessible throughout the program. For example: let x = 10 (global), function foo() { let y = 5 } (local)",
    subTopic: "Variables and Constants",
  },
  {
    question: "What is a constant?",
    answer:
      "A variable whose value cannot be changed once set. For example: const PI = 3.14;",
    subTopic: "Variables and Constants",
  },

  // 2. Functions and Recursion
  {
    question: "What does 'function' mean in programming?",
    answer:
      "A reusable block of code that performs a task. For example: function greet() { console.log('Hi'); }",
    subTopic: "Functions and Recursion",
  },
  {
    question: "What are function parameters?",
    answer:
      "Placeholders used in a function definition. For example: function greet(name) { console.log('Hi ' + name); }",
    subTopic: "Functions and Recursion",
  },
  {
    question: "What is the difference between parameters and arguments?",
    answer:
      "Parameters are used when defining a function; arguments are values passed when calling it. For example: greet('Hamza'); 'Hamza' is the argument.",
    subTopic: "Functions and Recursion",
  },
  {
    question: "What is a return statement?",
    answer:
      "It ends a function and optionally sends back a value. For example: return x + y; returns the sum.",
    subTopic: "Functions and Recursion",
  },
  {
    question: "What is recursion?",
    answer:
      "A function calling itself to solve smaller parts of a problem. For example: Calculating factorial (n!) using recursion.",
    subTopic: "Functions and Recursion",
  },
  {
    question: "What is function overloading?",
    answer:
      "Defining functions with the same name but different parameters (in languages that support it). For example: in C++, int add(int), float add(float)",
    subTopic: "Functions and Recursion",
  },
  {
    question: "What is a pure function?",
    answer:
      "A function that gives the same output for the same input and has no side effects. For example: function square(x) { return x * x; }",
    subTopic: "Functions and Recursion",
  },

  // 3. Control Flow and Conditionals
  {
    question: "What is control flow?",
    answer:
      "The order in which code is executed. For example: if → then → else → end",
    subTopic: "Control Flow and Conditionals",
  },
  {
    question: "What is a conditional statement?",
    answer:
      "It lets the program make decisions. For example: if (age > 18) { console.log('Adult'); }",
    subTopic: "Control Flow and Conditionals",
  },
  {
    question: "What is the difference between 'if' and 'switch' statements?",
    answer:
      "'If' handles complex conditions; 'switch' handles multiple exact values. For example: switch(day) { case 'Mon': ... }",
    subTopic: "Control Flow and Conditionals",
  },
  {
    question: "What are logical operators?",
    answer:
      "Used to combine conditions. AND (&&), OR (||), NOT (!). For example: if (age > 18 && hasID) {...}",
    subTopic: "Control Flow and Conditionals",
  },
  {
    question: "What is a ternary operator?",
    answer:
      "A shorthand for if-else: condition ? valueIfTrue : valueIfFalse. For example: let result = age >= 18 ? 'Adult' : 'Minor';",
    subTopic: "Control Flow and Conditionals",
  },
  {
    question: "What is short-circuit evaluation?",
    answer:
      "In logical expressions, evaluation stops early if the result is already known. For example: false && doSomething() // doSomething is never called.",
    subTopic: "Control Flow and Conditionals",
  },
  {
    question: "What is exception handling?",
    answer:
      "Mechanism to catch and handle runtime errors. For example: try { riskyCode() } catch(error) { console.log('Error caught') }",
    subTopic: "Control Flow and Conditionals",
  },

  // 4. Loops and Iteration
  {
    question: "What is a loop?",
    answer:
      "A structure that repeats code. For example: for (let i = 0; i < 5; i++) { console.log(i); }",
    subTopic: "Loops and Iteration",
  },
  {
    question: "What are the three main types of loops?",
    answer:
      "For (known times), While (condition), Do-While (executes once before checking).",
    subTopic: "Loops and Iteration",
  },
  {
    question: "What is an infinite loop?",
    answer:
      "A loop that never ends because the condition never becomes false. For example: while(true) { ... }",
    subTopic: "Loops and Iteration",
  },
  {
    question:
      "What is the difference between 'break' and 'continue' statements?",
    answer:
      "'break' exits the loop; 'continue' skips to the next iteration. For example: if (x > 5) break;",
    subTopic: "Loops and Iteration",
  },
  {
    question: "What is a nested loop?",
    answer:
      "A loop inside another loop. For example: used to print matrix patterns or grids.",
    subTopic: "Loops and Iteration",
  },

  // 5. Data Types and Structures
  {
    question: "What are primitive data types?",
    answer:
      "Basic types like number, string, boolean. For example: let x = true;",
    subTopic: "Data Types and Structures",
  },
  {
    question:
      "What is the difference between integer and floating-point numbers?",
    answer:
      "Integers are whole numbers (e.g. 3), floats have decimals (e.g. 3.14).",
    subTopic: "Data Types and Structures",
  },
  {
    question: "What is a boolean data type?",
    answer:
      "It represents true or false values. Used in logic. For example: let isLoggedIn = false;",
    subTopic: "Data Types and Structures",
  },
  {
    question: "What is type casting?",
    answer:
      "Converting one type to another. For example: Number('5') turns '5' into 5.",
    subTopic: "Data Types and Structures",
  },
  {
    question: "What are reference types vs value types?",
    answer:
      "Value types hold actual values (like numbers). Reference types hold memory addresses (like arrays, objects).",
    subTopic: "Data Types and Structures",
  },
  {
    question: "What is an array?",
    answer:
      "A list of values in one variable. For example: let fruits = ['apple', 'banana'];",
    subTopic: "Data Types and Structures",
  },
  {
    question: "What is array indexing?",
    answer:
      "Accessing items by position. Index starts at 0. For example: fruits[0] returns 'apple'",
    subTopic: "Data Types and Structures",
  },
  {
    question: "What is a multidimensional array?",
    answer: "An array of arrays. For example: let matrix = [[1, 2], [3, 4]];",
    subTopic: "Data Types and Structures",
  },
  {
    question: "What are common array operations?",
    answer:
      "Adding, removing, searching, or looping over elements. For example: push(), pop(), indexOf(), forEach().",
    subTopic: "Data Types and Structures",
  },

  // 6. Programming Basics and Best Practices
  {
    question: "What are the three basic control structures?",
    answer:
      "Sequence (run one by one), Selection (if/switch), Iteration (loops).",
    subTopic: "Programming Basics",
  },
  {
    question: "What is pseudocode?",
    answer:
      "A human-readable way to describe what a program does without real code. Example: Start → Get Input → Check → Print Result → End.",
    subTopic: "Programming Basics",
  },
  {
    question: "What is debugging?",
    answer:
      "The process of finding and fixing errors in code. For example: using console.log to trace variables.",
    subTopic: "Programming Basics",
  },
  {
    question: "What is a syntax error?",
    answer:
      "An error caused by writing code that breaks the language rules. For example: missing a closing bracket.",
    subTopic: "Programming Basics",
  },
  {
    question: "What is a logical error?",
    answer:
      "The program runs but gives incorrect results due to wrong logic. Harder to detect than syntax errors.",
    subTopic: "Programming Basics",
  },
];

export default programmingFundamentalsFlashcards;
