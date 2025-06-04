const programmingFundamentalsCheatsheets = [
  {
    title: "Variable Declaration & Initialization",
    content: `**Declaration Syntax:**
  • let variableName;           // Declaration only
  • let variableName = value;   // Declaration + Initialization
  • const CONSTANT = value;     // Constant declaration
  
  **Naming Rules:**
  • Must start with letter, underscore, or $
  • Can contain letters, numbers, underscores
  • Case-sensitive
  • Cannot use reserved keywords
  
  **Best Practices:**
  • Use descriptive names (userName vs u)
  • Use camelCase for variables
  • Use UPPER_CASE for constants
  • Initialize variables when declaring`,
    subTopic: "Variables",
  },
  {
    title: "Variable Scope Rules",
    content: `**Global Scope:**
  • Declared outside all functions
  • Accessible from anywhere in program
  • Exists for entire program lifetime
  
  **Local Scope:**
  • Declared inside functions/blocks
  • Only accessible within that scope
  • Destroyed when scope ends
  
  **Block Scope:**
  • Variables declared with let/const in {}
  • Limited to that specific block
  • Prevents variable hoisting issues
  
  **Scope Chain:**
  Inner scopes can access outer scope variables
  Outer scopes cannot access inner scope variables`,
    subTopic: "Variables",
  },
  {
    title: "Function Syntax & Structure",
    content: `**Function Declaration:**
  function functionName(parameter1, parameter2) {
      // function body
      return result; // optional
  }
  
  **Function Expression:**
  const functionName = function(parameters) {
      // function body
  };
  
  **Arrow Function (ES6):**
  const functionName = (parameters) => {
      // function body
  };
  
  **Key Components:**
  • Function keyword
  • Function name
  • Parameters (inputs)
  • Function body
  • Return statement (optional)`,
    subTopic: "Functions",
  },
  {
    title: "Function Parameters & Arguments",
    content: `**Parameter Types:**
  • Required parameters: function(a, b)
  • Default parameters: function(a, b = 10)
  • Rest parameters: function(...args)
  
  **Argument Handling:**
  • Arguments object (legacy)
  • Spread operator for arrays
  • Destructuring assignment
  
  **Parameter Validation:**
  if (typeof param !== 'number') {
      throw new Error('Invalid parameter type');
  }
  
  **Best Practices:**
  • Limit parameters (max 3-4)
  • Use objects for multiple parameters
  • Validate inputs
  • Provide default values`,
    subTopic: "Functions",
  },
  {
    title: "Loop Types & Usage",
    content: `**For Loop:**
  for (initialization; condition; increment) {
      // code block
  }
  
  **While Loop:**
  while (condition) {
      // code block
      // update condition
  }
  
  **Do-While Loop:**
  do {
      // code block
  } while (condition);
  
  **For...of Loop (arrays):**
  for (const element of array) {
      // process element
  }
  
  **For...in Loop (objects):**
  for (const key in object) {
      // process key-value pair
  }`,
    subTopic: "Loops",
  },
  {
    title: "Loop Control Statements",
    content: `**Break Statement:**
  • Exits loop immediately
  • Control goes to statement after loop
  • Use in switch statements too
  
  **Continue Statement:**
  • Skips current iteration
  • Jumps to next iteration
  • Only affects current loop level
  
  **Labeled Statements:**
  outer: for (let i = 0; i < 3; i++) {
      inner: for (let j = 0; j < 3; j++) {
          if (condition) break outer;
      }
  }
  
  **Best Practices:**
  • Avoid deep nesting
  • Use meaningful loop variables
  • Prevent infinite loops
  • Consider forEach/map for arrays`,
    subTopic: "Loops",
  },
  {
    title: "Conditional Statement Patterns",
    content: `**If-Else Chain:**
  if (condition1) {
      // code
  } else if (condition2) {
      // code
  } else {
      // default code
  }
  
  **Switch Statement:**
  switch (expression) {
      case value1:
          // code
          break;
      case value2:
          // code
          break;
      default:
          // default code
  }
  
  **Ternary Operator:**
  result = condition ? valueIfTrue : valueIfFalse;
  
  **Guard Clauses:**
  if (!condition) return; // early exit
  // main logic here`,
    subTopic: "Conditional Statements",
  },
  {
    title: "Logical Operators & Truth Tables",
    content: `**AND Operator (&&):**
  true && true = true
  true && false = false
  false && anything = false
  
  **OR Operator (||):**
  false || false = false
  false || true = true
  true || anything = true
  
  **NOT Operator (!):**
  !true = false
  !false = true
  !0 = true (falsy values)
  
  **Short Circuit Evaluation:**
  • && stops at first false
  • || stops at first true
  • Used for conditional execution:
    user && user.name // safe property access`,
    subTopic: "Conditional Statements",
  },
  {
    title: "Array Declaration & Access",
    content: `**Array Creation:**
  • Literal: let arr = [1, 2, 3, 4, 5];
  • Constructor: let arr = new Array(5);
  • From string: let arr = "hello".split("");
  
  **Accessing Elements:**
  • By index: arr[0] // first element
  • Last element: arr[arr.length - 1]
  • Safe access: arr[index] ?? defaultValue
  
  **Array Properties:**
  • length: arr.length
  • Check if array: Array.isArray(arr)
  
  **Common Patterns:**
  • Initialize: new Array(size).fill(0)
  • Copy: [...originalArray]
  • Check empty: arr.length === 0`,
    subTopic: "Arrays",
  },
  {
    title: "Essential Array Methods",
    content: `**Mutating Methods (change original):**
  • push(item) - add to end
  • pop() - remove from end
  • shift() - remove from start
  • unshift(item) - add to start
  • splice(start, deleteCount, ...items)
  
  **Non-Mutating Methods (return new):**
  • concat(arr2) - join arrays
  • slice(start, end) - extract portion
  • map(callback) - transform elements
  • filter(callback) - select elements
  • find(callback) - find first match
  
  **Iteration Methods:**
  • forEach(callback) - execute for each
  • reduce(callback, initial) - accumulate
  • some(callback) - test if any match
  • every(callback) - test if all match`,
    subTopic: "Arrays",
  },
  {
    title: "Data Type Categories",
    content: `**Primitive Types:**
  • Number: 42, 3.14, NaN, Infinity
  • String: "text", 'text', \`template\`
  • Boolean: true, false
  • Undefined: undefined
  • Null: null
  • Symbol: Symbol('description')
  • BigInt: 123n
  
  **Reference Types:**
  • Object: {key: value}
  • Array: [1, 2, 3]
  • Function: function() {}
  • Date: new Date()
  • RegExp: /pattern/flags
  
  **Type Checking:**
  • typeof operator
  • instanceof operator
  • Array.isArray()
  • Object.prototype.toString.call()`,
    subTopic: "Data Types",
  },
  {
    title: "Type Conversion & Coercion",
    content: `**Explicit Conversion:**
  • Number("123") → 123
  • String(123) → "123"
  • Boolean(1) → true
  • parseInt("123px") → 123
  • parseFloat("12.34") → 12.34
  
  **Implicit Conversion:**
  • "5" + 3 → "53" (string concatenation)
  • "5" - 3 → 2 (numeric subtraction)
  • "5" * 3 → 15 (numeric multiplication)
  • !"" → true (falsy to boolean)
  
  **Falsy Values:**
  false, 0, "", null, undefined, NaN
  
  **Type Guards:**
  if (typeof x === 'string') { /* x is string */ }
  if (Array.isArray(x)) { /* x is array */ }`,
    subTopic: "Data Types",
  },
];

export default programmingFundamentalsCheatsheets;
