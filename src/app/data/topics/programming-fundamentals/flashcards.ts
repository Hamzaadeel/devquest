const programmingFundamentalsFlashcards = [
  // Variables
  {
    question: "What is a variable?",
    answer:
      "A storage location paired with a symbolic name, which contains some known or unknown value.",
    subTopic: "Variables",
  },
  {
    question:
      "What is the difference between declaration and initialization of a variable?",
    answer:
      "Declaration creates a variable and reserves memory, while initialization assigns an initial value to the variable.",
    subTopic: "Variables",
  },
  {
    question: "What is variable scope?",
    answer:
      "The region of code where a variable can be accessed. It determines the visibility and lifetime of variables.",
    subTopic: "Variables",
  },
  {
    question: "What are local and global variables?",
    answer:
      "Local variables are declared inside a function and can only be accessed within that function. Global variables are declared outside functions and can be accessed from anywhere in the program.",
    subTopic: "Variables",
  },
  {
    question: "What is a constant?",
    answer:
      "A constant is a variable whose value cannot be changed once it's assigned during program execution.",
    subTopic: "Variables",
  },

  // Functions
  {
    question: "What does 'function' mean in programming?",
    answer: "A block of code designed to perform a particular task.",
    subTopic: "Functions",
  },
  {
    question: "What are function parameters?",
    answer:
      "Variables listed in the function definition that act as placeholders for values passed to the function when it's called.",
    subTopic: "Functions",
  },
  {
    question: "What is the difference between parameters and arguments?",
    answer:
      "Parameters are variables in the function definition, while arguments are the actual values passed to the function when it's called.",
    subTopic: "Functions",
  },
  {
    question: "What is a return statement?",
    answer:
      "A statement that exits a function and optionally passes a value back to the caller.",
    subTopic: "Functions",
  },
  {
    question: "What is function overloading?",
    answer:
      "The ability to define multiple functions with the same name but different parameters (number, type, or order).",
    subTopic: "Functions",
  },
  {
    question: "What is recursion?",
    answer:
      "A programming technique where a function calls itself to solve a problem by breaking it down into smaller, similar subproblems.",
    subTopic: "Functions",
  },

  // Loops
  {
    question: "What is a loop?",
    answer:
      "A control structure that repeats a block of code while a condition is true.",
    subTopic: "Loops",
  },
  {
    question: "What are the three main types of loops?",
    answer:
      "For loop (known number of iterations), While loop (condition-based), and Do-while loop (executes at least once).",
    subTopic: "Loops",
  },
  {
    question: "What is an infinite loop?",
    answer:
      "A loop that continues indefinitely because its terminating condition never becomes false.",
    subTopic: "Loops",
  },
  {
    question:
      "What is the difference between 'break' and 'continue' statements?",
    answer:
      "'Break' exits the loop completely, while 'continue' skips the rest of the current iteration and moves to the next iteration.",
    subTopic: "Loops",
  },
  {
    question: "What is a nested loop?",
    answer:
      "A loop inside another loop. The inner loop executes completely for each iteration of the outer loop.",
    subTopic: "Loops",
  },

  // Conditional Statements
  {
    question: "What is a conditional statement?",
    answer:
      "A control structure that allows the program to make decisions based on certain conditions.",
    subTopic: "Conditional Statements",
  },
  {
    question: "What is the difference between 'if' and 'switch' statements?",
    answer:
      "'If' statements evaluate boolean expressions and can handle complex conditions, while 'switch' statements compare a variable against multiple constant values.",
    subTopic: "Conditional Statements",
  },
  {
    question: "What are logical operators?",
    answer:
      "Operators that combine or modify boolean expressions: AND (&&), OR (||), and NOT (!).",
    subTopic: "Conditional Statements",
  },
  {
    question: "What is a ternary operator?",
    answer:
      "A shorthand conditional operator that evaluates a condition and returns one of two values: condition ? value_if_true : value_if_false.",
    subTopic: "Conditional Statements",
  },
  {
    question: "What is short-circuit evaluation?",
    answer:
      "An optimization where the second operand of a logical operator is not evaluated if the result can be determined from the first operand alone.",
    subTopic: "Conditional Statements",
  },

  // Arrays
  {
    question: "What is an array?",
    answer:
      "A collection of elements of the same type stored in contiguous memory locations.",
    subTopic: "Arrays",
  },
  {
    question: "What is array indexing?",
    answer:
      "The method of accessing array elements using their position number, typically starting from 0 (zero-based indexing).",
    subTopic: "Arrays",
  },
  {
    question: "What is the difference between static and dynamic arrays?",
    answer:
      "Static arrays have a fixed size determined at compile time, while dynamic arrays can change size during runtime.",
    subTopic: "Arrays",
  },
  {
    question: "What is a multidimensional array?",
    answer:
      "An array that contains other arrays as elements, creating a matrix-like structure with rows and columns.",
    subTopic: "Arrays",
  },
  {
    question: "What are common array operations?",
    answer:
      "Insertion, deletion, searching, sorting, traversal, and accessing elements by index.",
    subTopic: "Arrays",
  },

  // Data Types
  {
    question: "What are primitive data types?",
    answer:
      "Basic data types provided by a programming language, such as integers, floating-point numbers, characters, and booleans.",
    subTopic: "Data Types",
  },
  {
    question:
      "What is the difference between integer and floating-point numbers?",
    answer:
      "Integers are whole numbers without decimal points, while floating-point numbers can represent decimal values.",
    subTopic: "Data Types",
  },
  {
    question: "What is a boolean data type?",
    answer:
      "A data type that can only hold two values: true or false, used for logical operations.",
    subTopic: "Data Types",
  },
  {
    question: "What is type casting?",
    answer:
      "The process of converting a value from one data type to another, either implicitly (automatic) or explicitly (manual).",
    subTopic: "Data Types",
  },
  {
    question: "What are reference types vs value types?",
    answer:
      "Value types store the actual data, while reference types store a reference (address) to the data in memory.",
    subTopic: "Data Types",
  },

  // Control Flow
  {
    question: "What is control flow?",
    answer:
      "The order in which individual statements, instructions, or function calls are executed in a program.",
    subTopic: "Control Flow",
  },
  {
    question: "What is sequential execution?",
    answer:
      "The default flow where statements are executed one after another in the order they appear.",
    subTopic: "Control Flow",
  },
  {
    question: "What are the three basic control structures?",
    answer:
      "Sequence (linear execution), Selection (conditional branching), and Iteration (loops).",
    subTopic: "Control Flow",
  },
  {
    question: "What is exception handling?",
    answer:
      "A programming construct that allows programs to respond to exceptional circumstances during execution by transferring control to special handlers.",
    subTopic: "Control Flow",
  },
];

export default programmingFundamentalsFlashcards;
