const nestjsFlashcards = [
  // 1. Introduction & Architecture
  {
    question: "What is NestJS?",
    answer:
      "NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications using TypeScript and modular architecture inspired by Angular.",
    subTopic: "Introduction & Architecture",
  },
  {
    question: "What are the main building blocks of a NestJS application?",
    answer:
      "Modules, Controllers, Providers (Services), and Decorators are the core building blocks.",
    subTopic: "Introduction & Architecture",
  },
  {
    question: "What is the entry file of a NestJS app?",
    answer:
      "The `main.ts` file is the entry point. It bootstraps the app using NestFactory.",
    subTopic: "Introduction & Architecture",
  },
  {
    question: "What is the role of NestFactory?",
    answer:
      "NestFactory is used to create an instance of the NestJS application and bootstrap it.",
    subTopic: "Introduction & Architecture",
  },

  // 2. Modules & Dependency Injection
  {
    question: "What is a Module in NestJS?",
    answer:
      "A module is a class annotated with @Module() that groups related components like controllers and providers.\n\nExample:\n@Module({ controllers: [AppController], providers: [AppService] })\nexport class AppModule {}",
    subTopic: "Modules & Dependency Injection",
  },
  {
    question: "What is Dependency Injection in NestJS?",
    answer:
      "NestJS uses dependency injection to provide instances of services where needed, managed by its IoC container.",
    subTopic: "Modules & Dependency Injection",
  },
  {
    question: "What is the use of `@Injectable()`?",
    answer:
      "It marks a class as a provider that can be injected into other classes using NestJS DI system.",
    subTopic: "Modules & Dependency Injection",
  },
  {
    question: "What is the purpose of `forRoot()` in modules like TypeORM?",
    answer:
      "`forRoot()` configures and initializes the module with global settings, typically called in the root module.",
    subTopic: "Modules & Dependency Injection",
  },

  // 3. Controllers & Routing
  {
    question: "What is a Controller in NestJS?",
    answer:
      "A controller handles incoming HTTP requests and returns responses.\n\nExample:\n@Controller('users')\nexport class UserController {\n  @Get() findAll() { return 'All users'; }\n}",
    subTopic: "Controllers & Routing",
  },
  {
    question: "How do you handle routing in NestJS?",
    answer:
      "Use decorators like @Get(), @Post(), etc., on controller methods to define routes.",
    subTopic: "Controllers & Routing",
  },
  {
    question: "What is the difference between @Param(), @Query(), and @Body()?",
    answer:
      "@Param() gets route parameters, @Query() gets query string parameters, and @Body() gets POST body data.\n\nExample:\n@Get(':id')\ngetUser(@Param('id') id: string)",
    subTopic: "Controllers & Routing",
  },
  {
    question: "What is a DTO in NestJS?",
    answer:
      "DTO (Data Transfer Object) defines the shape of request data using classes and decorators.",
    subTopic: "Controllers & Routing",
  },

  // 4. Services & Business Logic
  {
    question: "What is a Service (Provider) in NestJS?",
    answer:
      "A service is a class with business logic, decorated with @Injectable(), and injected into controllers or other services.",
    subTopic: "Services & Business Logic",
  },
  {
    question: "How is async/await used in NestJS services?",
    answer:
      "Use async/await for asynchronous operations like database queries for cleaner code.\n\nExample:\nasync findAll() {\n  return await this.repo.find();\n}",
    subTopic: "Services & Business Logic",
  },
  {
    question: "How do you connect NestJS to a database like PostgreSQL?",
    answer:
      "Use @nestjs/typeorm or @nestjs/prisma to connect to databases. Configure connection in `TypeOrmModule.forRoot()`.",
    subTopic: "Services & Business Logic",
  },
  {
    question: "Can you use Express middleware in NestJS?",
    answer:
      "Yes. You can apply them via consumer.apply() in the configure() method.",
    subTopic: "Services & Business Logic",
  },

  // 5. Middleware, Pipes, Guards, Interceptors
  {
    question: "What is Middleware in NestJS?",
    answer:
      "Middleware runs before a route handler and is used for logging, auth, etc.",
    subTopic: "Request Lifecycle Tools",
  },
  {
    question: "How do you apply Middleware in NestJS?",
    answer:
      "Implement NestModule and use consumer.apply() in the configure() method.",
    subTopic: "Request Lifecycle Tools",
  },
  {
    question: "What is a Pipe in NestJS?",
    answer:
      "A pipe transforms or validates data before it reaches the handler. Example: ValidationPipe.",
    subTopic: "Request Lifecycle Tools",
  },
  {
    question: "What is a Guard in NestJS?",
    answer:
      "Guards determine whether a request can proceed. Commonly used for authentication and authorization.",
    subTopic: "Request Lifecycle Tools",
  },
  {
    question: "What is an Interceptor in NestJS?",
    answer:
      "Interceptors allow logic before/after method execution, e.g. logging, transforming responses.",
    subTopic: "Request Lifecycle Tools",
  },

  // 6. Validation, Testing & Error Handling
  {
    question: "How do you validate request data in NestJS?",
    answer:
      "Use DTOs with class-validator and apply ValidationPipe globally in main.ts.\n\nExample:\napp.useGlobalPipes(new ValidationPipe());",
    subTopic: "Validation, Testing & Error Handling",
  },
  {
    question: "How do you handle global exception handling in NestJS?",
    answer:
      "Create a custom exception filter and apply it with app.useGlobalFilters().",
    subTopic: "Validation, Testing & Error Handling",
  },
  {
    question: "How do you secure routes in NestJS?",
    answer:
      "Use AuthGuard and strategies like JWT or sessions with Passport.js integration.",
    subTopic: "Validation, Testing & Error Handling",
  },
  {
    question: "How do you test a NestJS application?",
    answer:
      "Use Jest with @nestjs/testing. Create test modules using Test.createTestingModule().",
    subTopic: "Validation, Testing & Error Handling",
  },
];

export default nestjsFlashcards;
