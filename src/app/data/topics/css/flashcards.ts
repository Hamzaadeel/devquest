const cssFlashcards = [
  {
    question: "What is CSS?",
    answer:
      "CSS stands for Cascading Style Sheets. It is used to style HTML content.\nFor example: You can use CSS to change text color (`color`), size (`font-size`), layout (`display`, `position`), etc.",
    subTopic: "Basics",
  },
  {
    question: "What are the different types of CSS?",
    answer:
      "Inline (written inside an HTML element), Internal (inside `<style>` tags), and External (linked using `<link>` tag).\nExample: Inline - `<p style='color:red;'>Hello</p>`, Internal - `<style>p { color: red; }</style>`, External - `<link rel='stylesheet' href='style.css'>`",
    subTopic: "Basics",
  },
  {
    question: "What is the box model in CSS?",
    answer:
      "The box model consists of content, padding, border, and margin.\nExample: Think of a box. The content is inside, padding gives space inside the border, border wraps the content, and margin is space outside the box.",
    subTopic: "Box Model & Positioning",
  },
  {
    question: "What is specificity in CSS?",
    answer:
      "Specificity defines which CSS rule is applied when there are conflicting rules.\nExample: `#id` has more power than `.class`, which has more power than element selectors like `p`.",
    subTopic: "Selectors & Specificity",
  },
  {
    question: "What is the difference between `class` and `id` selectors?",
    answer:
      "`.class` can be reused on multiple elements, while `#id` is unique to one element.\nExample: `<div class='box'></div>`, `<div id='main'></div>`",
    subTopic: "Selectors & Specificity",
  },
  {
    question: "What is Flexbox?",
    answer:
      "Flexbox is a layout model that arranges items in a flexible row or column.\nExample: Use `display: flex;` on a container and `justify-content` or `align-items` to align items.",
    subTopic: "Layout",
  },
  {
    question: "What is Grid in CSS?",
    answer:
      "Grid is a layout system for placing items into rows and columns.\nExample: `display: grid; grid-template-columns: 1fr 1fr;` makes 2 equal columns.",
    subTopic: "Layout",
  },
  {
    question:
      "What is the difference between relative and absolute positioning?",
    answer:
      "`relative` positions an element relative to its normal spot. `absolute` places it based on the nearest positioned ancestor.\nExample: `top: 10px` in `position: relative` moves it 10px from original; `position: absolute` moves it relative to container.",
    subTopic: "Box Model & Positioning",
  },
  {
    question: "What is the difference between `em` and `rem` units?",
    answer:
      "`em` is relative to the parent’s font size. `rem` is relative to the root font size.\nExample: If root is 16px, `2rem` = 32px. If parent is 20px, `2em` = 40px.",
    subTopic: "Units & Responsive Design",
  },
  {
    question: "How do media queries work?",
    answer:
      "They apply styles based on screen size or device type.\nExample: `@media (max-width: 600px) { body { font-size: 14px; } }`",
    subTopic: "Units & Responsive Design",
  },
  {
    question: "What is `z-index` in CSS?",
    answer:
      "`z-index` controls which element appears on top when elements overlap.\nExample: `z-index: 2` will appear above `z-index: 1` if both are overlapping.",
    subTopic: "Box Model & Positioning",
  },
  {
    question: "What are pseudo-classes in CSS?",
    answer:
      "Pseudo-classes define a special state of an element.\nExample: `a:hover` changes link style when you hover over it.",
    subTopic: "Selectors & Specificity",
  },
  {
    question: "What are pseudo-elements in CSS?",
    answer:
      "Pseudo-elements style specific parts of an element.\nExample: `p::first-line` styles only the first line of a paragraph.",
    subTopic: "Selectors & Specificity",
  },
];

export default cssFlashcards;
