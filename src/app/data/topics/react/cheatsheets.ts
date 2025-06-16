export const reactCheatSheet = {
  title: "React.js Cheat Sheet",
  sections: [
    {
      title: "1. Core Concepts",
      items: [
        {
          name: "JSX",
          description: "HTML-like syntax used in React components.",
        },
        {
          name: "Components",
          description: "Reusable UI blocks. Can be functional or class-based.",
        },
        { name: "Props", description: "Read-only inputs to components." },
        {
          name: "State",
          description:
            "Local component data that triggers re-renders when updated.",
        },
      ],
    },
    {
      title: "2. Functional Components",
      items: [
        {
          name: "Basic Function Component",
          code: `function Hello() {\n  return <h1>Hello, world!</h1>;\n}`,
        },
        {
          name: "Arrow Function Component",
          code: `const Hello = () => <h1>Hello, world!</h1>;`,
        },
      ],
    },
    {
      title: "3. useState",
      items: [
        {
          name: "Example",
          code: `const [count, setCount] = useState(0);`,
          description: "Declares a state variable.",
        },
      ],
    },
    {
      title: "4. useEffect",
      items: [
        {
          name: "Component Did Mount",
          code: `useEffect(() => {\n  console.log("Mounted");\n}, []);`,
        },
        {
          name: "Component Did Update",
          code: `useEffect(() => {\n  console.log("Updated");\n}, [value]);`,
        },
      ],
    },
    {
      title: "5. Event Handling",
      items: [
        {
          name: "Example",
          code: `<button onClick={handleClick}>Click me</button>`,
        },
      ],
    },
    {
      title: "6. Conditional Rendering",
      items: [
        {
          name: "Ternary Operator",
          code: `{isLoggedIn ? <Dashboard /> : <Login />}`,
        },
        {
          name: "Logical AND",
          code: `{hasAccess && <SecretPanel />}`,
        },
      ],
    },
    {
      title: "7. Lists & Keys",
      items: [
        {
          name: "Rendering a List",
          code: `items.map(item => <li key={item.id}>{item.name}</li>)`,
        },
      ],
    },
    {
      title: "8. Forms",
      items: [
        {
          name: "Controlled Input",
          code: `<input value={value} onChange={e => setValue(e.target.value)} />`,
        },
      ],
    },
    {
      title: "9. React Router",
      items: [
        { name: "<BrowserRouter>", description: "Wraps your app for routing." },
        {
          name: "<Routes> & <Route>",
          description: "Defines route paths and components.",
        },
        { name: "useNavigate()", description: "Programmatic navigation." },
        { name: "useParams()", description: "Access dynamic URL params." },
      ],
    },
    {
      title: "10. Custom Hooks",
      items: [
        {
          name: "Basic Example",
          code: `function useCounter() {\n  const [count, setCount] = useState(0);\n  return { count, increment: () => setCount(count + 1) };\n}`,
        },
      ],
    },
  ],
};

export default reactCheatSheet;
