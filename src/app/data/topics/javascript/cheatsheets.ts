export const javascriptCheatSheet = {
  title: "JavaScript Cheat Sheet",
  sections: [
    {
      title: "1. Variables",
      items: [
        {
          name: "var",
          description:
            "Declares a variable globally or locally within a function.",
        },
        {
          name: "let",
          description: "Declares a block-scoped variable.",
        },
        {
          name: "const",
          description: "Declares a block-scoped constant (read-only) variable.",
        },
      ],
    },
    {
      title: "2. Loops",
      items: [
        {
          name: "For Loop",
          description: "This loop will execute 5 times:",
          code: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
        },
        {
          name: "While Loop",
          description: "This loop will execute 5 times:",
          code: "let i = 0;\nwhile (i < 5) {\n  console.log(i);\n  i++;\n}",
        },
      ],
    },
    {
      title: "3. Conditional Statements",
      items: [
        {
          name: "If statement",
          code: "if (age >= 18) {\n  console.log('You are eligible to vote!');\n} else {\n  console.log('You are not eligible to vote yet.');\n}",
        },
      ],
    },
    {
      title: "Switch statement",
      items: [
        {
          code: "let age = 20;\n\nswitch (true) {\n  case age >= 18:\n    console.log('You are eligible to vote!');\n    break;\n  default:\n    console.log('You are not eligible to vote yet.');\n    break;\n}",
        },
      ],
    },
    {
      title: "4. String methods",
      items: [
        { name: "length", description: "Returns the length of a string." },
        {
          name: "toUpperCase()",
          description: "Converts a string to uppercase.",
        },
        {
          name: "toLowerCase()",
          description: "Converts a string to lowercase.",
        },
        {
          name: "charAt(index)",
          description: "Returns the character at a specified index.",
        },
        {
          name: 'includes("Hello")',
          description:
            'Checks if a string contains a specific substring (in this example, "Hello").',
        },
        {
          name: 'split(",")',
          description:
            "Splits a string into an array of substrings based on a separator (in this example, a comma).",
        },
        {
          name: "trim()",
          description: "Removes whitespace from both ends of a string.",
        },
        {
          name: "concat(string1, string2)",
          description: "Joins two or more strings.",
        },
      ],
    },
    {
      title: "5. Array methods",
      items: [
        {
          name: "length",
          description: "Returns the number of elements in an array.",
        },
        {
          name: 'push("Joe")',
          description: "Adds one or more elements to the end of an array.",
        },
        {
          name: "pop()",
          description: "Removes the last element from an array.",
        },
        {
          name: "shift()",
          description: "Removes the first element from an array.",
        },
        {
          name: "unshift()",
          description:
            "Adds one or more elements to the beginning of an array.",
        },
        {
          name: "indexOf()",
          description:
            "Returns the first index at which a specified element is found.",
        },
        {
          name: "forEach()",
          description:
            "Executes a provided function once for each array element. Example:",
          code: "numbers.forEach((number) => {\n  console.log(number);\n});",
        },
        {
          name: "map()",
          description:
            "Creates a new array by performing a function on each array element. Example:",
          code: "const doubledNumbers = numbers.map((number) => {\n  return number * 2;\n});",
        },
      ],
    },
  ],
};

export default javascriptCheatSheet;
