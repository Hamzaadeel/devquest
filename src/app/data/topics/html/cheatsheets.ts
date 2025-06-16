export const htmlCheatSheet = {
  title: "HTML Cheat Sheet",
  sections: [
    {
      title: "1. Basic Structure",
      items: [
        {
          name: "HTML Boilerplate",
          description: "Basic structure of an HTML document.",
          code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <!-- Content here -->\n</body>\n</html>`,
        },
      ],
    },
    {
      title: "2. Common Tags",
      items: [
        {
          name: "<h1> to <h6>",
          description: "Heading tags from largest to smallest.",
        },
        { name: "<p>", description: "Paragraph tag." },
        { name: "<a>", description: "Defines a hyperlink." },
        { name: "<img>", description: "Embeds an image." },
        { name: "<br>", description: "Inserts a line break." },
        { name: "<hr>", description: "Creates a horizontal line." },
        { name: "<strong>", description: "Bold text." },
        { name: "<em>", description: "Italic text." },
      ],
    },
    {
      title: "3. Lists",
      items: [
        { name: "<ul>", description: "Unordered list (bullets)." },
        { name: "<ol>", description: "Ordered list (numbers)." },
        { name: "<li>", description: "List item." },
      ],
    },
    {
      title: "4. Forms",
      items: [
        { name: "<form>", description: "Container for form elements." },
        {
          name: "<input>",
          description: "Input field (text, radio, checkbox, etc).",
        },
        { name: "<label>", description: "Label for input." },
        { name: "<textarea>", description: "Multiline text input." },
        { name: "<button>", description: "Clickable button." },
        { name: "<select>", description: "Dropdown menu." },
        { name: "<option>", description: "Item in a dropdown." },
      ],
    },
    {
      title: "5. Media",
      items: [
        { name: "<img>", description: "Displays an image." },
        { name: "<audio>", description: "Embeds audio content." },
        { name: "<video>", description: "Embeds video content." },
        { name: "<source>", description: "Specifies media source." },
      ],
    },
    {
      title: "6. Semantic Tags",
      items: [
        { name: "<header>", description: "Defines the header section." },
        { name: "<footer>", description: "Defines the footer section." },
        { name: "<nav>", description: "Navigation links." },
        { name: "<article>", description: "Independent content." },
        { name: "<section>", description: "Thematic grouping of content." },
        { name: "<main>", description: "Main content area." },
        { name: "<aside>", description: "Sidebar content." },
      ],
    },
    {
      title: "7. Tables",
      items: [
        { name: "<table>", description: "Defines a table." },
        { name: "<tr>", description: "Table row." },
        { name: "<td>", description: "Table cell." },
        { name: "<th>", description: "Table header cell." },
        { name: "<thead>, <tbody>, <tfoot>", description: "Table sections." },
      ],
    },
    {
      title: "8. Attributes",
      items: [
        { name: "href", description: "Specifies URL for links." },
        { name: "src", description: "Specifies media/image source." },
        { name: "alt", description: "Alternative text for images." },
        { name: "class", description: "Defines class name(s)." },
        { name: "id", description: "Defines a unique identifier." },
        { name: "style", description: "Inline CSS styles." },
        { name: "title", description: "Tooltip text." },
      ],
    },
  ],
};

export default htmlCheatSheet;
