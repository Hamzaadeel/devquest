const nestjsFlashcards = [
  {
    question: "What is NestJS?",
    answer:
      "NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications using TypeScript and the modular architecture of Angular.",
    subTopic: "Introduction",
  },
  {
    question: "What are the main building blocks of a NestJS application?",
    answer:
      "Modules, Controllers, Providers (Services), and Decorators are the core building blocks.",
    subTopic: "Architecture",
  },
  {
    question: "What is a Module in NestJS?",
    answer:
      "A module is a class annotated with the @Module() decorator that groups related components (controllers, services, etc.).",
    subTopic: "Modules",
  },
  {
    question: "What is a Controller in NestJS?",
    answer:
      "A controller handles incoming HTTP requests and returns responses to the client.",
    subTopic: "Controllers",
  },
  {
    question: "What is a Service (Provider) in NestJS?",
    answer:
      "A service is a class with business logic, marked with @Injectable(), and injected into controllers or other services.",
    subTopic: "Providers",
  },
  {
    question: "How does dependency injection work in NestJS?",
    answer:
      "Services are injected into constructors using TypeScript types. Nest automatically handles injection via its IoC container.",
    subTopic: "Dependency Injection",
  },
  {
    question: "What decorators are commonly used in NestJS?",
    answer:
      "@Module(), @Controller(), @Get(), @Post(), @Put(), @Delete(), @Injectable(), @Body(), @Param(), @Query(), @Req(), @Res()",
    subTopic: "Decorators",
  },
  {
    question: "How do you handle routing in NestJS?",
    answer:
      "Use decorators like @Get(), @Post(), etc., on methods inside controllers. NestJS maps these to HTTP routes.",
    subTopic: "Routing",
  },
  {
    question: "What is the entry file of a NestJS app?",
    answer:
      "The `main.ts` file is the entry point. It bootstraps the app using NestFactory.",
    subTopic: "App Bootstrap",
  },
  {
    question: "How do you validate request data in NestJS?",
    answer:
      "Use DTOs with class-validator and class-transformer decorators. Enable validation in main.ts using ValidationPipe.",
    subTopic: "Validation",
  },
  {
    question: "How do you connect NestJS to a database like PostgreSQL?",
    answer:
      "Use packages like @nestjs/typeorm or @nestjs/prisma to integrate with PostgreSQL or other databases.",
    subTopic: "Database Integration",
  },
  {
    question: "What is a Pipe in NestJS?",
    answer:
      "Pipes transform or validate data before it reaches the handler. Example: ValidationPipe.",
    subTopic: "Pipes",
  },
  {
    question: "What is a Guard in NestJS?",
    answer:
      "Guards decide whether a request is allowed to proceed. Useful for authentication and authorization.",
    subTopic: "Guards",
  },
  {
    question: "What is an Interceptor in NestJS?",
    answer:
      "Interceptors can bind extra logic before or after method execution. Example: logging, caching, or transforming responses.",
    subTopic: "Interceptors",
  },
  {
    question: "How do you handle global exception handling in NestJS?",
    answer:
      "Create a custom exception filter and apply it globally using `app.useGlobalFilters()`.",
    subTopic: "Error Handling",
  },
  {
    question: "What is Middleware in NestJS?",
    answer:
      "Middleware is a function executed before a request reaches the route handler. Use for logging, authentication, etc.",
    subTopic: "Middleware",
  },
  {
    question: "How do you apply Middleware in NestJS?",
    answer:
      "Use `configure()` in a module class that implements `NestModule` and apply middleware via `consumer.apply()`.",
    subTopic: "Middleware",
  },
  {
    question: "What is a DTO in NestJS?",
    answer:
      "DTO stands for Data Transfer Object. It's used to define the shape of request data using classes and decorators.",
    subTopic: "DTOs",
  },
  {
    question: "What is the difference between @Param(), @Query(), and @Body()?",
    answer:
      "@Param() gets route parameters, @Query() gets query string parameters, and @Body() gets POST body data.",
    subTopic: "Decorators",
  },
  {
    question: "What is the use of `@Injectable()`?",
    answer:
      "It marks a class as a provider that can be injected into other classes using NestJS dependency injection.",
    subTopic: "Providers",
  },
  {
    question: "How do you test a NestJS application?",
    answer:
      "Use Jest for unit and integration testing. Test individual providers, controllers, and modules using Test.createTestingModule().",
    subTopic: "Testing",
  },
  {
    question: "What is the use of async/await in NestJS services?",
    answer:
      "Async/await handles asynchronous code like database queries in a clean and readable way.",
    subTopic: "Async Handling",
  },
  {
    question: "How do you secure routes in NestJS?",
    answer:
      "Use guards like AuthGuard, and implement JWT or session-based strategies using Passport.js.",
    subTopic: "Authentication",
  },
  {
    question: "What is the purpose of `forRoot()` in modules like TypeORM?",
    answer:
      "forRoot() is used to configure and initialize modules globally with default settings.",
    subTopic: "Module Configuration",
  },
  {
    question: "Can you use Express middleware in NestJS?",
    answer:
      "Yes, NestJS supports Express middleware using consumer.apply() or by directly importing them.",
    subTopic: "Middleware",
  },
];

export default nestjsFlashcards;
