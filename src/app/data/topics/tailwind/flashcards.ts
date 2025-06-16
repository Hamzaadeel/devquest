const tailwindFlashcards = [
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework that lets you style elements using class names directly in your HTML or JSX.",
    subTopic: "Basics",
  },
  {
    question: "How is Tailwind different from traditional CSS?",
    answer:
      "Tailwind uses utility classes instead of writing custom CSS, so you style in the markup instead of creating separate stylesheets.",
    subTopic: "Basics",
  },
  {
    question: "What is the purpose of the `@apply` directive?",
    answer:
      "It allows you to use Tailwind utility classes inside your CSS files by applying them to custom class names.",
    subTopic: "Directives",
  },
  {
    question: "How do you enable dark mode in Tailwind?",
    answer:
      "Set `darkMode: 'class'` in `tailwind.config.js` and use the `dark:` variant in your class names.",
    subTopic: "Dark Mode",
  },
  {
    question: "What is the use of `tailwind.config.js`?",
    answer:
      "It lets you customize Tailwind's default design system like colors, spacing, fonts, and enable variants or plugins.",
    subTopic: "Configuration",
  },
  {
    question: "How do you center an element using Tailwind?",
    answer:
      "Use `flex justify-center items-center` on a container to center its child element.",
    subTopic: "Layout",
  },
  {
    question: "What are responsive variants in Tailwind?",
    answer:
      "They let you apply styles conditionally based on screen size using prefixes like `sm:`, `md:`, `lg:`, and `xl:`.",
    subTopic: "Responsive Design",
  },
  {
    question: "What is a utility class in Tailwind?",
    answer:
      "A utility class is a single-purpose class that does one thing like `p-4`, `text-center`, or `bg-blue-500`.",
    subTopic: "Utilities",
  },
  {
    question: "How do you create a custom color in Tailwind?",
    answer:
      "Extend the `colors` property in `tailwind.config.js` under `theme.extend`.",
    subTopic: "Customization",
  },
  {
    question: "How do you hide an element in Tailwind?",
    answer: "Use the class `hidden` to remove an element from the layout.",
    subTopic: "Visibility",
  },
];

export default tailwindFlashcards;
