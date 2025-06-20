export const reactCheatSheet = {
  title: "React.js Cheat Sheet",
  sections: [
    {
      title: "1. Core Concepts",
      items: [
        {
          name: "JSX",
          description: "HTML-like syntax used in React components.",
          code: `const element = <h1>Hello, world!</h1>;`,
        },
        {
          name: "Components",
          description: "Reusable UI blocks. Can be functional or class-based.",
          code: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
        },
        {
          name: "Props",
          description: "Read-only inputs to components.",
          code: `<Greeting name=\"John\" />`,
        },
        {
          name: "State",
          description:
            "Local component data that triggers re-renders when updated.",
          code: `const [count, setCount] = useState(0);`,
        },
        {
          name: "Fragment",
          description: "Groups elements without adding extra nodes to the DOM.",
          code: `<>
  <h1>Title</h1>
  <p>Paragraph</p>
</>`,
        },
      ],
    },
    {
      title: "2. React Hooks",
      items: [
        {
          name: "useState",
          description: "Declares state in functional components.",
          code: `const [count, setCount] = useState(0);`,
        },
        {
          name: "useEffect",
          description: "Performs side effects like fetching data.",
          code: `useEffect(() => {
  console.log(\"Component mounted\");
}, []);`,
        },
        {
          name: "useContext",
          description: "Accesses context values.",
          code: `const theme = useContext(ThemeContext);`,
        },
        {
          name: "useMemo",
          description: "Memoizes computed values.",
          code: `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`,
        },
        {
          name: "useCallback",
          description: "Memoizes functions.",
          code: `const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`,
        },
      ],
    },
    {
      title: "3. Event Handling & Forms",
      items: [
        {
          name: "Event Handling",
          description: "Handling user interactions.",
          code: `<button onClick={handleClick}>Click me</button>`,
        },
        {
          name: "Controlled Component",
          description: "Input value is controlled by React state.",
          code: `<input value={value} onChange={e => setValue(e.target.value)} />`,
        },
        {
          name: "Uncontrolled Component",
          description: "Uses ref to access DOM directly.",
          code: `const inputRef = useRef();`,
        },
        {
          name: "Form Submit",
          description: "Handle form submit event.",
          code: `function handleSubmit(e) {
  e.preventDefault();
  console.log(\"Form submitted\");
}`,
        },
      ],
    },
    {
      title: "4. Conditional Rendering",
      items: [
        {
          name: "Ternary Operator",
          description: "Short inline conditionals.",
          code: `{isLoggedIn ? <Dashboard /> : <Login />}`,
        },
        {
          name: "Logical AND",
          description: "Render only when condition is true.",
          code: `{user && <Profile />}`,
        },
      ],
    },
    {
      title: "5. Lists & Keys",
      items: [
        {
          name: "Rendering a List",
          description: "Map through data and use key prop.",
          code: `const items = [\"One\", \"Two\"];
items.map((item, index) => <li key={index}>{item}</li>)`,
        },
        {
          name: "Unique Keys",
          description: "Helps React identify changed elements in a list.",
        },
      ],
    },
    {
      title: "6. Advanced Patterns",
      items: [
        {
          name: "Custom Hooks",
          description: "Encapsulate logic for reuse.",
          code: `function useCounter() {
  const [count, setCount] = useState(0);
  return { count, increment: () => setCount(count + 1) };
}`,
        },
        {
          name: "Error Boundaries",
          description: "Catch JavaScript errors in components.",
          code: `class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    // Handle error
  }
}`,
        },
        {
          name: "React Router",
          description: "Client-side routing library.",
          code: `import { BrowserRouter, Routes, Route } from \"react-router-dom\";

<BrowserRouter>
  <Routes>
    <Route path=\"/\" element={<Home />} />
  </Routes>
</BrowserRouter>`,
        },
      ],
    },
  ],
};

export default reactCheatSheet;
