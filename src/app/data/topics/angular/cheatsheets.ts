export const angularCheatSheet = {
  title: "Angular Cheat Sheet",
  sections: [
    {
      title: "1. Components & Templates",
      items: [
        {
          name: "Component Decorator",
          description: "Defines a class as an Angular component.",
          code: "@Component({ selector: 'app-root', templateUrl: './app.component.html' })",
        },
        {
          name: "Interpolation",
          description: "Display component data in template.",
          code: "<h1>{{ title }}</h1>",
        },
        {
          name: "Property & Event Binding",
          description: "Bind values and events between class and DOM.",
          code: '<img [src]="imageUrl">\n<button (click)="handleClick()">Click</button>',
        },
      ],
    },
    {
      title: "2. Directives",
      items: [
        {
          name: "*ngIf",
          description: "Conditionally include elements in the DOM.",
          code: '<p *ngIf="isVisible">Visible!</p>',
        },
        {
          name: "*ngFor",
          description: "Repeat element for each item in a list.",
          code: '<li *ngFor="let item of items">{{ item }}</li>',
        },
        {
          name: "[ngClass]",
          description: "Add/remove classes dynamically.",
          code: '<div [ngClass]="{ active: isActive }"></div>',
        },
      ],
    },
    {
      title: "3. Services & Dependency Injection",
      items: [
        {
          name: "Injectable Service",
          description: "Define a service to be injected.",
          code: "@Injectable({ providedIn: 'root' })\nexport class MyService { }",
        },
        {
          name: "Inject Service",
          description: "Use service inside component.",
          code: "constructor(private myService: MyService) {}",
        },
      ],
    },
    {
      title: "4. Routing",
      items: [
        {
          name: "RouterModule Setup",
          description: "Configure routes in your app.",
          code: "RouterModule.forRoot([{ path: 'home', component: HomeComponent }])",
        },
        {
          name: "Router Outlet",
          description: "Placeholder for routed component view.",
          code: "<router-outlet></router-outlet>",
        },
        {
          name: "RouterLink",
          description: "Create navigation links.",
          code: "<a routerLink='/home'>Home</a>",
        },
      ],
    },
    {
      title: "5. Forms",
      items: [
        {
          name: "Template-driven Form",
          description: "Simple two-way binding using ngModel.",
          code: '<input [(ngModel)]="user.name">',
        },
        {
          name: "Reactive Form",
          description: "Structured and scalable form building.",
          code: "this.form = this.fb.group({ name: [''] });",
        },
      ],
    },
    {
      title: "6. HTTP & Observables",
      items: [
        {
          name: "HttpClient Service",
          description: "Make HTTP requests using Angular service.",
          code: "constructor(private http: HttpClient) {}\ngetData() {\n  this.http.get('/api/data').subscribe(data => console.log(data));\n}",
        },
        {
          name: "Observable",
          description: "Used to handle asynchronous operations.",
          code: "this.observable$.subscribe(value => console.log(value));",
        },
      ],
    },
  ],
};

export default angularCheatSheet;
