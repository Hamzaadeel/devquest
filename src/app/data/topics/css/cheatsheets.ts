export const cssCheatSheet = {
  title: "CSS Cheat Sheet",
  sections: [
    {
      title: "1. Selectors",
      items: [
        {
          name: "Element",
          description: "Targets elements by name. e.g., `p {}`",
        },
        {
          name: ".class",
          description: "Targets elements with class. e.g., `.box {}`",
        },
        {
          name: "#id",
          description: "Targets element with specific ID. e.g., `#main {}`",
        },
        { name: "*", description: "Universal selector. Targets all elements." },
        {
          name: "Grouping",
          description: "Target multiple elements. e.g., `h1, p {}`",
        },
      ],
    },
    {
      title: "2. Box Model",
      items: [
        { name: "content", description: "The actual text or image." },
        { name: "padding", description: "Space around the content." },
        { name: "border", description: "Border around padding." },
        { name: "margin", description: "Space outside the border." },
      ],
    },
    {
      title: "3. Positioning",
      items: [
        { name: "static", description: "Default positioning." },
        {
          name: "relative",
          description: "Position relative to its normal position.",
        },
        {
          name: "absolute",
          description: "Position relative to the nearest positioned ancestor.",
        },
        { name: "fixed", description: "Fixed to the viewport." },
        {
          name: "sticky",
          description: "Scrolls with page until a threshold is met.",
        },
      ],
    },
    {
      title: "4. Flexbox",
      items: [
        { name: "display: flex", description: "Defines a flex container." },
        { name: "justify-content", description: "Aligns items horizontally." },
        { name: "align-items", description: "Aligns items vertically." },
        { name: "flex-direction", description: "Row or column layout." },
        { name: "flex-wrap", description: "Wraps items onto multiple lines." },
      ],
    },
    {
      title: "5. Grid",
      items: [
        { name: "display: grid", description: "Defines a grid container." },
        {
          name: "grid-template-columns",
          description: "Defines column structure.",
        },
        { name: "grid-template-rows", description: "Defines row structure." },
        { name: "gap", description: "Adds spacing between grid items." },
        {
          name: "grid-column / grid-row",
          description: "Controls item span and placement.",
        },
      ],
    },
    {
      title: "6. Typography",
      items: [
        { name: "font-size", description: "Sets text size." },
        {
          name: "font-weight",
          description: "Sets thickness of text (e.g., bold).",
        },
        { name: "text-align", description: "Aligns text horizontally." },
        { name: "line-height", description: "Sets spacing between lines." },
        {
          name: "text-transform",
          description: "Uppercase, lowercase, capitalize.",
        },
      ],
    },
    {
      title: "7. Colors & Backgrounds",
      items: [
        { name: "color", description: "Text color." },
        { name: "background-color", description: "Background color." },
        { name: "background-image", description: "Sets image background." },
        { name: "background-size", description: "Size of background image." },
        { name: "opacity", description: "Controls transparency." },
      ],
    },
    {
      title: "8. Transitions & Animations",
      items: [
        {
          name: "transition",
          description: "Smooth change between properties.",
        },
        { name: "animation", description: "Keyframe-based animations." },
        {
          name: "@keyframes",
          description: "Defines the animation steps.",
          code: `@keyframes slide {\n  from { transform: translateX(0); }\n  to { transform: translateX(100px); }\n}`,
        },
      ],
    },
    {
      title: "9. Responsive Design",
      items: [
        {
          name: "@media queries",
          description: "Applies styles based on device width.",
          code: `@media (max-width: 600px) {\n  .container { flex-direction: column; }\n}`,
        },
        {
          name: "units",
          description: "Use %, vw, vh, rem for responsiveness.",
        },
      ],
    },
  ],
};

export default cssCheatSheet;
