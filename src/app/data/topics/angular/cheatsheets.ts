export const angularCheatSheet = {
  title: "Angular Cheat Sheet",
  sections: [
    {
      title: "1. Component Basics",
      items: [
        {
          name: "Component Decorator",
          description: "Defines a component.",
          code: "@Component({ selector: 'app-root', templateUrl: './app.component.html' })",
        },
        {
          name: "Data Binding",
          description: "Interpolation and property binding.",
          code: '<h1>{{ title }}</h1>\n<img [src]="imageUrl">',
        },
        {
          name: "Event Binding",
          description: "Handle DOM events.",
          code: '<button (click)="handleClick()">Click</button>',
        },
      ],
    },
    {
      title: "2. Directives",
      items: [
        {
          name: "*ngIf",
          description: "Conditionally render elements.",
          code: '<p *ngIf="isVisible">Visible!</p>',
        },
        {
          name: "*ngFor",
          description: "Loop through lists.",
          code: '<li *ngFor="let item of items">{{ item }}</li>',
        },
        {
          name: "[ngClass]",
          description: "Apply CSS classes dynamically.",
          code: '<div [ngClass]="{ active: isActive }"></div>',
        },
      ],
    },
    {
      title: "3. Services & Dependency Injection",
      items: [
        {
          name: "Injectable Service",
          description: "Create and use services.",
          code: "@Injectable({ providedIn: 'root' })\nexport class MyService { }",
        },
        {
          name: "Dependency Injection",
          description: "Inject services into components.",
          code: "constructor(private myService: MyService) {}",
        },
      ],
    },
    {
      title: "4. Routing",
      items: [
        {
          name: "RouterModule",
          description: "Enable routing in your app.",
          code: "RouterModule.forRoot([{ path: 'home', component: HomeComponent }])",
        },
        {
          name: "Router Outlet",
          description: "Display routed views.",
          code: "<router-outlet></router-outlet>",
        },
        {
          name: "RouterLink",
          description: "Navigation link.",
          code: "<a routerLink='/home'>Home</a>",
        },
      ],
    },
    {
      title: "5. Forms",
      items: [
        {
          name: "Template-driven",
          description: "Simple form syntax.",
          code: '<input [(ngModel)]="user.name">',
        },
        {
          name: "Reactive Forms",
          description: "Use FormBuilder for structured forms.",
          code: "this.form = this.fb.group({ name: [''] });",
        },
      ],
    },
  ],
};

export default angularCheatSheet;
