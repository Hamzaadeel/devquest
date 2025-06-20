export const programmingFundamentalsCheatSheet = {
  title: "Programming Fundamentals Cheat Sheet",
  sections: [
    {
      title: "1. Variable Declaration & Initialization",
      items: [
        {
          name: "let",
          description:
            "Declares a variable that can change. Like using a labeled box where you can swap the item inside.",
          code: "let age = 5;\nage = 6;",
        },
        {
          name: "const",
          description:
            "Declares a variable that cannot change. Like labeling a jar permanently and sealing it.",
          code: "const PI = 3.14;\n// PI = 3.14159; // Error",
        },
        {
          name: "var",
          description:
            "Old way to declare a variable. Function-scoped. Behaves differently than let/const.",
          code: "var name = 'Ali';\nname = 'Sara';",
        },
        {
          name: "Naming Rules",
          description: "Start with letter, _ or $. No spaces. Case-sensitive.",
          code: "let userName = 'Ali';\nlet $total = 100;\nlet _count = 5;",
        },
        {
          name: "Best Practices",
          description:
            "Use camelCase for variables and UPPER_CASE for constants.",
          code: "let userAge = 25;\nconst MAX_USERS = 100;",
        },
      ],
    },
    {
      title: "2. Variable Scope",
      items: [
        {
          name: "Global Scope",
          description:
            "Available everywhere. Like writing something on a billboard.",
          code: "let color = 'blue';\nfunction showColor() {\n  console.log(color);\n}",
        },
        {
          name: "Local/Block Scope",
          description:
            "Only inside a block. Like writing on a whiteboard in your room.",
          code: "if (true) {\n  let message = 'Hi';\n  console.log(message);\n}\n// console.log(message); // Error",
        },
        {
          name: "Scope Chain",
          description:
            "Inner scopes can access outer variables, not the other way around.",
          code: "let outer = 'visible';\nfunction parent() {\n  console.log(outer);\n}",
        },
      ],
    },
    {
      title: "3. Functions",
      items: [
        {
          name: "Function Declaration",
          description:
            "Reusable block of code. Like a machine that takes input and gives output.",
          code: "function greet(name) {\n  return 'Hello ' + name;\n}",
        },
        {
          name: "Function Expression",
          description: "Function stored in a variable.",
          code: "const greet = function(name) {\n  return 'Hi ' + name;\n};",
        },
        {
          name: "Arrow Function",
          description: "Shorter way to write a function.",
          code: "const greet = (name) => 'Hey ' + name;",
        },
      ],
    },
    {
      title: "4. Function Parameters",
      items: [
        {
          name: "Default Parameters",
          description: "Use a default value if none provided.",
          code: "function greet(name = 'Guest') {\n  return 'Hello ' + name;\n}",
        },
        {
          name: "Rest Parameters",
          description: "Accept multiple values as an array.",
          code: "function sum(...nums) {\n  return nums.reduce((a, b) => a + b);\n}",
        },
        {
          name: "Argument Validation",
          description: "Check inputs before using them.",
          code: "function printAge(age) {\n  if (typeof age !== 'number') throw Error('Not a number');\n  console.log(age);\n}",
        },
      ],
    },
    {
      title: "5. Loops",
      items: [
        {
          name: "For Loop",
          description: "Repeat a block of code a fixed number of times.",
          code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
        },
        {
          name: "While Loop",
          description: "Run as long as a condition is true.",
          code: "let i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}",
        },
        {
          name: "Do-While Loop",
          description: "Run once, then check condition.",
          code: "let i = 0;\ndo {\n  console.log(i);\n  i++;\n} while (i < 3);",
        },
        {
          name: "For...of Loop",
          description: "Iterate over items in a collection.",
          code: "const fruits = ['apple', 'banana'];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}",
        },
      ],
    },
    {
      title: "6. Conditionals",
      items: [
        {
          name: "If-Else",
          description: "Choose between actions.",
          code: "if (age > 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}",
        },
        {
          name: "Switch",
          description: "Match one of several options.",
          code: "let fruit = 'apple';\nswitch (fruit) {\n  case 'apple':\n    console.log('Apple');\n    break;\n  default:\n    console.log('Other');\n}",
        },
        {
          name: "Ternary",
          description: "Short form of if-else.",
          code: "let result = score > 90 ? 'A' : 'B';",
        },
        {
          name: "Guard Clause",
          description: "Exit early to avoid deep nesting.",
          code: "function process(user) {\n  if (!user) return;\n  console.log(user.name);\n}",
        },
      ],
    },
    {
      title: "7. Logical Operators",
      items: [
        {
          name: "AND (&&)",
          description: "True if both sides are true.",
          code: "true && false // false",
        },
        {
          name: "OR (||)",
          description: "True if at least one side is true.",
          code: "true || false // true",
        },
        {
          name: "NOT (!)",
          description: "Inverts true/false.",
          code: "!true // false",
        },
        {
          name: "Short-Circuiting",
          description: "Skip checking if already determined.",
          code: "user && user.name",
        },
      ],
    },
    {
      title: "8. Data Types",
      items: [
        {
          name: "Primitive Types",
          description: "Simple values like numbers or strings.",
          code: "let age = 20;\nlet name = 'Ali';\nlet isAdult = true;",
        },
        {
          name: "Reference Types",
          description: "More complex structures like objects and arrays.",
          code: "let user = { name: 'Sara' };\nlet scores = [100, 90];",
        },
        {
          name: "Type Checking",
          description: "Check value type.",
          code: "typeof 'Ali' // 'string'\nArray.isArray([]) // true",
        },
      ],
    },
    {
      title: "9. Type Conversion",
      items: [
        {
          name: "Explicit",
          description: "You convert types manually.",
          code: "Number('5') // 5\nString(5) // '5'",
        },
        {
          name: "Implicit",
          description: "JavaScript auto-converts values.",
          code: "'5' + 2 // '52'\n'5' - 2 // 3",
        },
        {
          name: "Falsy Values",
          description: "Values treated as false in logic.",
          code: "false, 0, '', null, undefined, NaN",
        },
      ],
    },
  ],
};

export default programmingFundamentalsCheatSheet;
