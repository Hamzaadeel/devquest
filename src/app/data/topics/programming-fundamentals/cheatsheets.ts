export const programmingFundamentalsCheatSheet = {
  title: "Programming Fundamentals Cheat Sheet",
  sections: [
    {
      title: "1. Variable Declaration & Initialization",
      items: [
        {
          name: "let",
          description: "Declares a block-scoped variable. Can be reassigned.",
        },
        {
          name: "const",
          description:
            "Declares a block-scoped constant. Cannot be reassigned.",
        },
        {
          name: "var",
          description:
            "Declares a function-scoped or globally-scoped variable (legacy).",
        },
        {
          name: "Naming Rules",
          description:
            "Must begin with a letter, _, or $. Cannot use reserved keywords. Case-sensitive.",
        },
        {
          name: "Best Practices",
          description:
            "Use descriptive names, camelCase for variables, and UPPER_CASE for constants.",
        },
      ],
    },
    {
      title: "2. Variable Scope",
      items: [
        {
          name: "Global Scope",
          description:
            "Declared outside all blocks or functions. Accessible everywhere.",
        },
        {
          name: "Local/Block Scope",
          description:
            "Declared inside a function or block using let/const. Limited visibility.",
        },
        {
          name: "Scope Chain",
          description:
            "Inner scopes can access outer variables. Not the other way around.",
        },
      ],
    },
    {
      title: "3. Functions",
      items: [
        {
          name: "Function Declaration",
          description: "Defines a named function.",
          code: "function greet(name) {\n  return 'Hello ' + name;\n}",
        },
        {
          name: "Function Expression",
          description: "Assigns a function to a variable.",
          code: "const greet = function(name) {\n  return 'Hi ' + name;\n};",
        },
        {
          name: "Arrow Function",
          description: "Shorter syntax for function expressions.",
          code: "const greet = (name) => 'Hey ' + name;",
        },
      ],
    },
    {
      title: "4. Function Parameters",
      items: [
        {
          name: "Default Parameters",
          description: "Assign default values to parameters.",
          code: "function add(a, b = 5) {\n  return a + b;\n}",
        },
        {
          name: "Rest Parameters",
          description: "Accepts multiple values as an array.",
          code: "function sum(...nums) {\n  return nums.reduce((a, b) => a + b);\n}",
        },
        {
          name: "Argument Validation",
          description: "Check types or conditions before using.",
          code: "if (typeof x !== 'number') throw Error('Not a number');",
        },
      ],
    },
    {
      title: "5. Loops",
      items: [
        {
          name: "For Loop",
          description: "Traditional loop with condition and increment.",
          code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
        },
        {
          name: "While Loop",
          description: "Runs while the condition is true.",
          code: "let i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}",
        },
        {
          name: "Do-While Loop",
          description: "Runs at least once, then checks condition.",
          code: "let i = 0;\ndo {\n  console.log(i);\n  i++;\n} while (i < 3);",
        },
        {
          name: "For...of Loop",
          description: "Iterates over iterable values (e.g., arrays).",
          code: "for (const item of array) {\n  console.log(item);\n}",
        },
      ],
    },
    {
      title: "6. Conditionals",
      items: [
        {
          name: "If-Else",
          description: "Executes blocks based on condition.",
          code: "if (score > 90) {\n  grade = 'A';\n} else {\n  grade = 'B';\n}",
        },
        {
          name: "Switch",
          description: "Multiple case matching.",
          code: "switch (value) {\n  case 1: break;\n  default: break;\n}",
        },
        {
          name: "Ternary",
          description: "Short form conditional.",
          code: "const result = age > 18 ? 'Adult' : 'Minor';",
        },
        {
          name: "Guard Clause",
          description: "Early return pattern for cleaner logic.",
          code: "if (!user) return;\nprocessUser(user);",
        },
      ],
    },
    {
      title: "7. Logical Operators",
      items: [
        {
          name: "AND (&&)",
          description: "Returns true only if both operands are true.",
        },
        {
          name: "OR (||)",
          description: "Returns true if at least one operand is true.",
        },
        {
          name: "NOT (!)",
          description: "Inverts a boolean value.",
        },
        {
          name: "Short-Circuiting",
          description: "Stops evaluating if result is already known.",
          code: "user && user.name // safe access",
        },
      ],
    },
    {
      title: "8. Data Types",
      items: [
        {
          name: "Primitive Types",
          description:
            "Number, String, Boolean, Null, Undefined, Symbol, BigInt",
        },
        {
          name: "Reference Types",
          description:
            "Object, Array, Function, Date, RegExp (non-primitive, mutable)",
        },
        {
          name: "Type Checking",
          description: "Use typeof, instanceof, Array.isArray().",
        },
      ],
    },
    {
      title: "9. Type Conversion",
      items: [
        {
          name: "Explicit",
          description: "Number('123'), String(123), Boolean(1), parseInt('42')",
        },
        {
          name: "Implicit",
          description: "'5' + 3 → '53'; '5' - 3 → 2; true + false → 1",
        },
        {
          name: "Falsy Values",
          description:
            "false, 0, '', null, undefined, NaN are all considered false in conditionals.",
        },
      ],
    },
  ],
};

export default programmingFundamentalsCheatSheet;
