export const javascriptCheatSheet = {
  title: "JavaScript Cheat Sheet",
  sections: [
    {
      title: "1. Variables",
      items: [
        {
          name: "var",
          description:
            "Function-scoped and hoisted. Not recommended for modern code.",
          code: "var x = 10;",
        },
        {
          name: "let",
          description: "Block-scoped variable. Reassignable.",
          code: "let age = 25;",
        },
        {
          name: "const",
          description: "Block-scoped constant. Cannot be reassigned.",
          code: "const name = 'Ali';",
        },
      ],
    },
    {
      title: "2. Loops",
      items: [
        {
          name: "For Loop",
          description: "Loops a fixed number of times.",
          code: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
        },
        {
          name: "While Loop",
          description: "Loops while a condition is true.",
          code: "let i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}",
        },
        {
          name: "For...of Loop",
          description: "Loops over iterable objects.",
          code: "const arr = [1, 2, 3];\nfor (const item of arr) {\n  console.log(item);\n}",
        },
      ],
    },
    {
      title: "3. Conditional Statements",
      items: [
        {
          name: "If-Else",
          description: "Runs different code based on a condition.",
          code: "if (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}",
        },
        {
          name: "Switch",
          description: "Checks one value against multiple cases.",
          code: "const fruit = 'apple';\nswitch (fruit) {\n  case 'apple':\n    console.log('Apple');\n    break;\n  default:\n    console.log('Unknown fruit');\n}",
        },
        {
          name: "Ternary Operator",
          description: "Short syntax for if-else.",
          code: "const access = age >= 18 ? 'Allowed' : 'Denied';",
        },
      ],
    },
    {
      title: "4. Strings & Arrays",
      items: [
        {
          name: "length",
          description: "Returns the length.",
          code: "'Hi'.length // 2",
        },
        {
          name: "toUpperCase()",
          description: "Converts to uppercase.",
          code: "'hello'.toUpperCase() // 'HELLO'",
        },
        {
          name: "split(',')",
          description: "Splits into an array.",
          code: "'a,b,c'.split(',') // ['a','b','c']",
        },
        {
          name: "trim()",
          description: "Removes surrounding whitespace.",
          code: "'  hi  '.trim() // 'hi'",
        },
        {
          name: "push()",
          description: "Adds to end of array.",
          code: "arr.push(4);",
        },
        {
          name: "map()",
          description: "Transforms each item.",
          code: "[1, 2].map(n => n * 2) // [2, 4]",
        },
      ],
    },
    {
      title: "5. Functions & ES6 Features",
      items: [
        {
          name: "Arrow Functions",
          description: "Short syntax & lexical `this`.",
          code: "const greet = name => 'Hi ' + name;",
        },
        {
          name: "Default Parameters",
          description: "Provide default values.",
          code: "function greet(name = 'Guest') { return 'Hi ' + name; }",
        },
        {
          name: "Spread Operator",
          description: "Expands arrays/objects.",
          code: "const arr = [1, 2]; const newArr = [...arr, 3];",
        },
        {
          name: "Rest Parameters",
          description: "Collects arguments.",
          code: "function sum(...nums) { return nums.reduce((a, b) => a + b); }",
        },
        {
          name: "Template Literals",
          description: "Embed expressions in strings.",
          code: "const name = 'Ali';\n`Hello, ${name}`",
        },
      ],
    },
    {
      title: "6. Async JavaScript",
      items: [
        {
          name: "Promises",
          description: "Handle async operations.",
          code: "fetch('/api')\n  .then(res => res.json())\n  .then(data => console.log(data));",
        },
        {
          name: "Async/Await",
          description: "Cleaner syntax for promises.",
          code: "async function getData() {\n  const res = await fetch('/api');\n  const data = await res.json();\n  console.log(data);\n}",
        },
        {
          name: "Event Loop",
          description:
            "Handles async tasks using call stack and callback queue.",
          code: "console.log('Start');\nsetTimeout(() => console.log('Timeout'), 0);\nconsole.log('End'); // Output: Start, End, Timeout",
        },
      ],
    },
  ],
};

export default javascriptCheatSheet;
