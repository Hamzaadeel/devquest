const reactQuestions = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It uses a component-based architecture and a virtual DOM for efficient rendering.",
    subTopic: "React Basics",
  },
  {
    question: "What are components in React?",
    answer:
      "Components are reusable UI elements. They can be functional or class-based and manage their own state and props.",
    subTopic: "Components",
  },
  {
    question: "What is the difference between props and state?",
    answer:
      "Props: Read-only data passed from parent to child. State: Mutable data managed within the component.",
    subTopic: "Components",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows you to write HTML-like syntax in JavaScript, which React transforms into React.createElement() calls.",
    subTopic: "JSX",
  },
  {
    question: "What is the Virtual DOM?",
    answer:
      "A lightweight JavaScript representation of the real DOM. React updates the virtual DOM and efficiently syncs it with the real DOM via diffing.",
    subTopic: "React Basics",
  },
  {
    question: "What are hooks in React?",
    answer:
      "Hooks are functions that let you use state and lifecycle features in functional components (e.g., useState, useEffect, useContext).",
    subTopic: "Hooks",
  },
  {
    question: "What is useState?",
    answer:
      "A React hook that allows you to add state to functional components: const [count, setCount] = useState(0);",
    subTopic: "Hooks",
  },
  {
    question: "What is useEffect used for?",
    answer:
      "It handles side effects like data fetching, subscriptions, or manually changing the DOM after render.",
    subTopic: "Hooks",
  },
  {
    question: "What is controlled vs uncontrolled components?",
    answer:
      "Controlled: Form data is handled by React state. Uncontrolled: Form data is handled by the DOM (via refs).",
    subTopic: "Forms",
  },
  {
    question: "What is lifting state up in React?",
    answer:
      "Moving state to the closest common ancestor of components that need to share it.",
    subTopic: "State Management",
  },
  {
    question: "What is context in React?",
    answer:
      "Context lets you pass data (like themes or auth) deeply through the component tree without using props at every level.",
    subTopic: "Context",
  },
  {
    question: "How does React handle forms?",
    answer:
      "Through controlled components using onChange handlers to update state as users type.",
    subTopic: "Forms",
  },
  {
    question: "What are keys in React and why are they important?",
    answer:
      "Keys help React identify which items have changed, are added, or removed in a list. They must be unique and stable.",
    subTopic: "Lists",
  },
  {
    question: "What is reconciliation in React?",
    answer:
      "The process of comparing the new virtual DOM with the previous one and applying the minimal set of changes to the real DOM.",
    subTopic: "Performance",
  },
  {
    question:
      "What is the difference between class components and functional components?",
    answer:
      "Class Components: Use ES6 classes, support lifecycle methods, this.state, and this.setState. Functional Components: Use functions and React hooks, preferred in modern React.",
    subTopic: "Components",
  },
  {
    question: "What is memoization in React?",
    answer:
      "Caching the result of expensive computations to avoid recalculating. Used via React.memo, useMemo, and useCallback.",
    subTopic: "Performance",
  },
  {
    question: "What is useMemo and when should you use it?",
    answer: "Memoizes a computed value to avoid recalculating on every render.",
    subTopic: "Hooks",
  },
  {
    question: "What is useCallback and when should you use it?",
    answer:
      "Returns a memoized callback function to avoid unnecessary re-renders.",
    subTopic: "Hooks",
  },
  {
    question: "What is error boundary in React?",
    answer:
      "A class component that catches JavaScript errors in child components during rendering.",
    subTopic: "Error Handling",
  },
  {
    question: "What is the purpose of React.Fragment?",
    answer:
      "Lets you group multiple elements without adding extra nodes to the DOM.",
    subTopic: "JSX",
  },
];

export default reactQuestions;
