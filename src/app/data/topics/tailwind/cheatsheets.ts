export const tailwindCheatSheet = {
  title: "Tailwind CSS Cheat Sheet",
  sections: [
    {
      title: "1. Layout & Flexbox",
      items: [
        {
          name: "Container",
          description: "Centers content and applies responsive padding.",
          code: 'className="container mx-auto px-4"',
        },
        {
          name: "Flex",
          description: "Makes an element a flex container.",
          code: 'className="flex"',
        },
        {
          name: "Flex Center",
          description:
            "Horizontally and vertically centers items in a flex container.",
          code: 'className="flex justify-center items-center"',
        },
        {
          name: "Grid",
          description: "Applies grid layout.",
          code: 'className="grid grid-cols-3 gap-4"',
        },
      ],
    },
    {
      title: "2. Spacing",
      items: [
        {
          name: "Padding",
          description:
            "Adds padding to an element. `p` for all sides, `px` for horizontal, `py` for vertical.",
          code: 'className="p-4 px-2 py-3"',
        },
        {
          name: "Margin",
          description:
            "Adds margin to an element. Similar variations as padding.",
          code: 'className="m-4 mt-2 mb-1"',
        },
        {
          name: "Gap",
          description: "Sets spacing between grid/flex items.",
          code: 'className="gap-4"',
        },
      ],
    },
    {
      title: "3. Typography",
      items: [
        {
          name: "Text Size",
          description: "Adjusts font size from extra small to extra large.",
          code: 'className="text-sm text-lg text-2xl"',
        },
        {
          name: "Font Weight",
          description: "Controls font thickness.",
          code: 'className="font-light font-bold"',
        },
        {
          name: "Text Align",
          description: "Aligns text within an element.",
          code: 'className="text-left text-center text-right"',
        },
      ],
    },
    {
      title: "4. Colors & Backgrounds",
      items: [
        {
          name: "Text Color",
          description: "Sets text color.",
          code: 'className="text-red-500"',
        },
        {
          name: "Background Color",
          description: "Sets background color.",
          code: 'className="bg-blue-100"',
        },
        {
          name: "Dark Mode",
          description: "Applies styles in dark mode using the `dark:` variant.",
          code: 'className="dark:bg-gray-800 dark:text-white"',
        },
      ],
    },
    {
      title: "5. Borders & Effects",
      items: [
        {
          name: "Rounded Corners",
          description: "Adds border radius.",
          code: 'className="rounded rounded-lg rounded-full"',
        },
        {
          name: "Box Shadow",
          description: "Applies shadow to create depth.",
          code: 'className="shadow shadow-md shadow-lg"',
        },
        {
          name: "Ring",
          description: "Adds outline-like border outside the element.",
          code: 'className="ring ring-blue-500 ring-offset-2"',
        },
      ],
    },
    {
      title: "6. Responsive & Utilities",
      items: [
        {
          name: "Responsive Variants",
          description: "Apply utilities based on screen size.",
          code: 'className="sm:text-sm md:text-base lg:text-lg"',
        },
        {
          name: "Visibility",
          description: "Control visibility of elements.",
          code: 'className="hidden md:block"',
        },
        {
          name: "Custom Class with @apply",
          description: "Use utility classes in CSS files using `@apply`.",
          code: "@apply p-4 text-white bg-blue-500;",
        },
        {
          name: "Custom Colors",
          description:
            "Extend theme in `tailwind.config.js` to add custom color palettes.",
          code: "module.exports = { theme: { extend: { colors: { brand: '#1DA1F2' } } } }",
        },
      ],
    },
  ],
};

export default tailwindCheatSheet;
