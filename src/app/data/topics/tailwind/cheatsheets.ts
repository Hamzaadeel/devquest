export const tailwindCheatSheet = {
  title: "Tailwind CSS Cheat Sheet",
  sections: [
    {
      title: "1. Layout",
      items: [
        {
          name: "Container",
          description: "Centers the content.",
          code: "className='container mx-auto'",
        },
        {
          name: "Flex",
          description: "Applies flex layout.",
          code: "className='flex'",
        },
        {
          name: "Grid",
          description: "Applies grid layout.",
          code: "className='grid grid-cols-3 gap-4'",
        },
      ],
    },
    {
      title: "2. Spacing",
      items: [
        {
          name: "Padding",
          description: "Adds padding.",
          code: "className='p-4'",
        },
        {
          name: "Margin",
          description: "Adds margin.",
          code: "className='m-4'",
        },
        {
          name: "Gap",
          description: "Adds space between grid/flex items.",
          code: "className='gap-2'",
        },
      ],
    },
    {
      title: "3. Typography",
      items: [
        {
          name: "Text Size",
          description: "Changes text size.",
          code: "className='text-xl'",
        },
        {
          name: "Font Weight",
          description: "Changes font weight.",
          code: "className='font-bold'",
        },
        {
          name: "Text Align",
          description: "Aligns text.",
          code: "className='text-center'",
        },
      ],
    },
    {
      title: "4. Colors",
      items: [
        {
          name: "Text Color",
          description: "Sets text color.",
          code: "className='text-blue-500'",
        },
        {
          name: "Background Color",
          description: "Sets background color.",
          code: "className='bg-gray-100'",
        },
      ],
    },
    {
      title: "5. Borders & Shadows",
      items: [
        {
          name: "Rounded Corners",
          description: "Adds border radius.",
          code: "className='rounded-lg'",
        },
        {
          name: "Box Shadow",
          description: "Adds shadow to elements.",
          code: "className='shadow-md'",
        },
      ],
    },
  ],
};

export default tailwindCheatSheet;
