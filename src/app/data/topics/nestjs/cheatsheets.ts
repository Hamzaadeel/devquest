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
        {
          name: "Run App",
          description: "Start the development server.",
          code: "npm run start:dev",
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
          code: "@Controller('cats')\nexport class CatsController {\n  @Get()\n  findAll() { return 'All cats'; }\n}",
        },
        {
          name: "Service",
          description: "Business logic provider.",
          code: "@Injectable()\nexport class CatsService {\n  findAll() { return ['cat1', 'cat2']; }\n}",
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
          code: "@Post()\ncreate(@Body() catDto: CreateCatDto) { return 'Cat created'; }",
        },
        {
          name: "Route Parameters",
          code: "@Get(':id')\nfindOne(@Param('id') id: string) { return `Cat ${id}`; }",
        },
        {
          name: "Query Parameters",
          code: "@Get()\nsearch(@Query('name') name: string) { return `Searching for ${name}`; }",
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
        {
          name: "Inject Repository (TypeORM)",
          code: "constructor(@InjectRepository(Cat) private catRepo: Repository<Cat>) {}",
        },
      ],
    },
    {
      title: "5. Middleware & Pipes",
      items: [
        {
          name: "Middleware",
          description: "Runs before route handlers.",
          code: "export function logger(req, res, next) {\n  console.log(`Request...`);\n  next();\n}",
        },
        {
          name: "Apply Middleware",
          code: "app.use(logger);",
        },
        {
          name: "Pipe (Validation)",
          code: "@UsePipes(new ValidationPipe())",
        },
        {
          name: "Custom Pipe",
          code: "@Pipe()\nexport class ParseIntPipe implements PipeTransform {\n  transform(value: string) {\n    const val = parseInt(value, 10);\n    if (isNaN(val)) throw new BadRequestException('Validation failed');\n    return val;\n  }\n}",
        },
      ],
    },
    {
      title: "6. Exception Filters & Guards",
      items: [
        {
          name: "Exception Filter",
          code: "@Catch(HttpException)\nexport class HttpErrorFilter implements ExceptionFilter {\n  catch(exception: HttpException, host: ArgumentsHost) {\n    const ctx = host.switchToHttp();\n    const response = ctx.getResponse();\n    const status = exception.getStatus();\n    response.status(status).json({ statusCode: status, message: exception.message });\n  }\n}",
        },
        {
          name: "Guard (Role Based)",
          code: "@Injectable()\nexport class RolesGuard implements CanActivate {\n  canActivate(context: ExecutionContext): boolean {\n    const request = context.switchToHttp().getRequest();\n    return request.user?.role === 'admin';\n  }\n}",
        },
        {
          name: "Apply Guard",
          code: "@UseGuards(RolesGuard)\n@Get('admin')\ngetAdminData() { return 'Admin data'; }",
        },
      ],
    },
  ],
};

export default nestjsCheatSheet;
