const htmlFlashcards = [
  {
    question: "What is HTML?",
    answer:
      "HTML stands for HyperText Markup Language. It is used to structure content on the web.\nFor example: You can use HTML to mark headings (`<h1>`), paragraphs (`<p>`), images (`<img>`), and links (`<a>`).",
    subTopic: "Basics",
  },
  {
    question: "What is an HTML element?",
    answer:
      "An HTML element consists of a start tag, content, and an end tag.\nFor example: `<p>Hello!</p>` has a start tag `<p>`, content `Hello!`, and end tag `</p>`.",
    subTopic: "Basics",
  },
  {
    question: "What are semantic HTML elements?",
    answer:
      "Semantic elements clearly describe their meaning, like `<article>`, `<section>`, `<header>`, and `<footer>`.\nFor example: `<header>` usually contains a site title or logo, and `<footer>` often contains copyright info.",
    subTopic: "Semantic & Structure",
  },
  {
    question: "What does the `<head>` tag contain?",
    answer:
      "It contains meta information like title, links to stylesheets, and scripts.\nFor example: `<head><title>My Page</title><link rel='stylesheet' href='style.css'></head>`",
    subTopic: "Semantic & Structure",
  },
  {
    question: "What is the role of the `<body>` tag?",
    answer:
      "It contains all the visible content of a webpage.\nFor example: `<body><h1>Welcome</h1><p>This is my site</p></body>`",
    subTopic: "Semantic & Structure",
  },
  {
    question: "What is the difference between `<div>` and `<span>`?",
    answer:
      "`<div>` is a block-level element, while `<span>` is an inline element.\nFor example: Use `<div>` to wrap a whole section, but use `<span>` to color just a word inside a sentence.",
    subTopic: "Tags & Attributes",
  },
  {
    question: "What is the purpose of the `alt` attribute in images?",
    answer:
      "It provides alternative text for the image if it cannot be displayed and helps with accessibility.\nFor example: `<img src='cat.jpg' alt='A cute cat' />`",
    subTopic: "Tags & Attributes",
  },
  {
    question: "What are self-closing tags in HTML?",
    answer:
      "Tags that don't need a closing tag, like `<img />`, `<br />`, and `<hr />`.\nFor example: `<br />` adds a line break, and `<hr />` adds a horizontal line.",
    subTopic: "Tags & Attributes",
  },
  {
    question: "What is the difference between id and class in HTML?",
    answer:
      "`id` is unique and used for one element, while `class` can be shared by multiple elements.\nFor example: `<div id='main'></div>` vs `<div class='section'></div>`",
    subTopic: "Tags & Attributes",
  },
  {
    question: "What is the `<a>` tag used for?",
    answer:
      "It creates hyperlinks to other web pages or resources.\nFor example: `<a href='https://example.com'>Visit Site</a>`",
    subTopic: "Tags & Attributes",
  },
  {
    question: "How do you link an external CSS file to HTML?",
    answer:
      "Use `<link rel='stylesheet' href='style.css'>` inside the `<head>`.\nFor example: `<head><link rel='stylesheet' href='style.css'></head>`",
    subTopic: "Forms & Styling",
  },
  {
    question: "What is the role of the `<form>` element?",
    answer:
      "It collects user input and submits it to a server.\nFor example: `<form action='/submit'><input type='text' /><button>Send</button></form>`",
    subTopic: "Forms & Styling",
  },
  {
    question: "What is a placeholder attribute in input elements?",
    answer:
      "It displays a short hint inside an input field.\nFor example: `<input type='text' placeholder='Enter your name'>`",
    subTopic: "Forms & Styling",
  },
  {
    question: "What are meta tags used for?",
    answer:
      "They provide metadata like description, keywords, and viewport settings.\nFor example: `<meta name='description' content='A blog about cats'>`",
    subTopic: "Advanced",
  },
  {
    question: "What is the difference between block and inline elements?",
    answer:
      "Block elements start on a new line and take up full width. Inline elements stay within a line.\nFor example: `<div>` is block, `<span>` is inline.",
    subTopic: "Advanced",
  },
];

export default htmlFlashcards;
