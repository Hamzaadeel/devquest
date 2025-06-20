export const angularFlashcards = [
  {
    question: "What is Angular?",
    answer:
      "Angular is a TypeScript-based web application framework developed by Google for building dynamic, single-page applications.",
    subTopic: "Core Concepts",
  },
  {
    question: "What are components in Angular?",
    answer:
      "Components are the basic building blocks of Angular apps. Each component consists of a TypeScript class, HTML template, and CSS styles.",
    subTopic: "Core Concepts",
  },
  {
    question: "What is a module in Angular?",
    answer:
      "A module groups related components, directives, pipes, and services. Every Angular app has at least one root module (AppModule).",
    subTopic: "Architecture",
  },
  {
    question: "What is data binding in Angular?",
    answer:
      "Data binding allows communication between the component class and its template using property binding, event binding, and two-way binding.",
    subTopic: "Templates & Binding",
  },
  {
    question: "What is two-way data binding?",
    answer:
      "Two-way binding binds the input field to a property and updates it in both directions using [(ngModel)].",
    subTopic: "Templates & Binding",
  },
  {
    question: "What is a directive in Angular?",
    answer:
      "Directives are used to manipulate the DOM. Structural directives (like *ngIf) change layout, and attribute directives (like ngClass) change appearance.",
    subTopic: "Templates & Binding",
  },
  {
    question: "What is dependency injection in Angular?",
    answer:
      "Angular uses a built-in DI system to manage how services and components are created and shared.",
    subTopic: "Services & DI",
  },
  {
    question: "What is a service in Angular?",
    answer:
      "A service is a reusable class used for business logic, data fetching, etc. It is usually injected into components using DI.",
    subTopic: "Services & DI",
  },
  {
    question: "What is routing in Angular?",
    answer:
      "Routing allows navigation between components using the Angular Router module.",
    subTopic: "Routing & Navigation",
  },
  {
    question: "What is lazy loading in Angular?",
    answer:
      "Lazy loading loads feature modules only when needed, improving initial load time.",
    subTopic: "Routing & Navigation",
  },
  {
    question: "What is an observable in Angular?",
    answer:
      "Observables are used with RxJS for handling async data, such as HTTP requests or user input.",
    subTopic: "RxJS & HTTP",
  },
  {
    question: "How do you make an HTTP request in Angular?",
    answer:
      "Use HttpClient from @angular/common/http and call methods like get() or post().",
    subTopic: "RxJS & HTTP",
  },
  {
    question: "What is lifecycle hook ngOnInit?",
    answer:
      "ngOnInit is called once the component is initialized. It’s commonly used to fetch data.",
    subTopic: "Core Concepts",
  },
  {
    question: "What is Angular CLI?",
    answer:
      "Angular CLI is a command-line tool for scaffolding, building, testing, and deploying Angular apps.",
    subTopic: "Tooling",
  },
  {
    question: "What are pipes in Angular?",
    answer:
      "Pipes transform data in templates. Example: {{ date | date:'short' }}.",
    subTopic: "Templates & Binding",
  },
];

export default angularFlashcards;
