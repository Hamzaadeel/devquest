export const nestjsCheatSheet = {
  title: "NestJS Cheat Sheet",
  sections: [
    {
      title: "1. Project Setup",
      items: [
        {
          name: "Install CLI",
          code: "npm install -g @nestjs/cli",
        },
        {
          name: "Create App",
          code: "nest new my-app",
        },
      ],
    },
    {
      title: "2. Core Concepts",
      items: [
        {
          name: "Module",
          description: "Main building block that organizes related code.",
          code: "@Module({ controllers: [], providers: [] })\nexport class AppModule {}",
        },
        {
          name: "Controller",
          description: "Handles incoming requests.",
          code: "@Controller('cats')\nexport class CatsController {}",
        },
        {
          name: "Service",
          description: "Business logic provider.",
          code: "@Injectable()\nexport class CatsService {}",
        },
      ],
    },
    {
      title: "3. Routing",
      items: [
        {
          name: "GET Route",
          code: "@Get()\nfindAll() { return 'All cats'; }",
        },
        {
          name: "POST Route",
          code: "@Post()\ncreate() { return 'Cat created'; }",
        },
      ],
    },
    {
      title: "4. Dependency Injection",
      items: [
        {
          name: "Inject Service",
          code: "constructor(private catsService: CatsService) {}",
        },
      ],
    },
    {
      title: "5. Middleware & Pipes",
      items: [
        {
          name: "Middleware",
          code: "app.use(loggerMiddleware)",
        },
        {
          name: "Pipe (Validation)",
          code: "@UsePipes(new ValidationPipe())",
        },
      ],
    },
  ],
};

export default nestjsCheatSheet;
