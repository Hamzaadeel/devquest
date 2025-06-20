export const oopCheatSheet = {
  title: "OOP (Object-Oriented Programming) Cheat Sheet",
  sections: [
    {
      title: "1. OOP Concepts",
      items: [
        {
          name: "Class",
          description:
            "A blueprint for creating objects with shared structure and behavior. For example: A class 'Car' defines properties like brand and color, and methods like drive().",
          code: "class Car {\n  constructor(brand) {\n    this.brand = brand;\n  }\n  drive() {\n    console.log(`${this.brand} is driving.`);\n  }\n}",
        },
        {
          name: "Object",
          description:
            "An instance of a class containing data and methods. For example: Using the Car class: const car1 = new Car('Toyota');",
          code: "const car1 = new Car('Toyota');\ncar1.drive(); // Output: Toyota is driving.",
        },
        {
          name: "Encapsulation",
          description:
            "Hiding internal details and exposing only what’s necessary via public methods. For example: You use a remote control without knowing the wiring inside.",
        },
        {
          name: "Abstraction",
          description:
            "Simplifying complex systems by exposing only relevant parts. For example: You send a message on WhatsApp without knowing how it's transmitted over the internet.",
        },
        {
          name: "Inheritance",
          description:
            "A class can inherit properties and methods from another class. For example: class Dog extends Animal allows Dog to use Animal's methods.",
          code: "class Animal {\n  eat() {\n    console.log('Eating');\n  }\n}\nclass Dog extends Animal {}\nconst dog = new Dog();\ndog.eat(); // Output: Eating",
        },
        {
          name: "Polymorphism",
          description:
            "Objects can take on many forms depending on the context. For example: A 'draw()' method behaves differently in Circle, Square, or Triangle classes.",
        },
        {
          name: "Benefits of OOP",
          description:
            "OOP promotes modularity, reusability, scalability, and real-world modeling. For example: You can build large apps like games by reusing character classes.",
        },
      ],
    },
    {
      title: "2. Constructors",
      items: [
        {
          name: "constructor()",
          description:
            "Special method for initializing new objects of a class. For example: Set initial values when an object is created.",
          code: "class User {\n  constructor(name) {\n    this.name = name;\n  }\n}",
        },
      ],
    },
    {
      title: "3. Methods",
      items: [
        {
          name: "Instance Method",
          description:
            "Defined inside a class and called on an object. For example: user.sayHello()",
          code: "class User {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHello() {\n    console.log(`Hi, I’m ${this.name}`);\n  }\n}",
        },
        {
          name: "Static Method",
          description:
            "Called on the class itself, not an instance. For example: Math.random()",
          code: "class Utils {\n  static greet() {\n    console.log('Hello!');\n  }\n}\nUtils.greet(); // Output: Hello!",
        },
        {
          name: "'this' keyword",
          description:
            "'this' refers to the current object. It helps access properties within methods. For example: this.name inside sayHello() refers to the name of that specific object.",
        },
        {
          name: "Instance vs Class Members",
          description:
            "Instance members belong to each object. Class (static) members belong to the class. For example: car1.color vs Car.totalCars.",
        },
      ],
    },
    {
      title: "4. Inheritance",
      items: [
        {
          name: "extends",
          description:
            "Keyword used to inherit from another class. For example: class Cat extends Animal",
          code: "class Animal {\n  move() { console.log('Moving'); }\n}\nclass Cat extends Animal {}\nnew Cat().move(); // Output: Moving",
        },
        {
          name: "super()",
          description:
            "Calls the constructor of the parent class. For example: Used to pass values to the base constructor.",
          code: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n}\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);\n    this.breed = breed;\n  }\n}",
        },
      ],
    },
    {
      title: "5. Access Modifiers (Conceptual)",
      items: [
        {
          name: "Public",
          description:
            "Accessible from anywhere. Default in JavaScript. For example: this.name is public.",
        },
        {
          name: "Private (# or _)",
          description:
            "Accessible only within the class. For example: #password hides it from outside.",
          code: "class User {\n  #password;\n  constructor(pw) {\n    this.#password = pw;\n  }\n}",
        },
        {
          name: "Protected (via convention)",
          description:
            "Not enforced in JavaScript; use '_' as naming convention. For example: _id indicates it shouldn't be accessed directly.",
        },
      ],
    },
    {
      title: "6. Encapsulation in Practice",
      items: [
        {
          name: "Getter",
          description:
            "Method to safely access a private property. For example: get name() returns this._name",
          code: "get name() {\n  return this._name;\n}",
        },
        {
          name: "Setter",
          description:
            "Method to safely set a private property with validation.",
          code: "set name(value) {\n  if (value.length > 0) this._name = value;\n}",
        },
      ],
    },
    {
      title: "7. Polymorphism",
      items: [
        {
          name: "Method Overriding",
          description:
            "Subclass redefines a method from the parent class. For example: A Bird may override fly() in a Penguin class.",
          code: "class Bird {\n  fly() { console.log('Flying'); }\n}\nclass Penguin extends Bird {\n  fly() { console.log('Can’t fly'); }\n}",
        },
        {
          name: "Method Overloading (Not native in JS)",
          description:
            "Multiple methods with same name but different parameters. Simulated using conditions.",
          code: "function greet(name, time) {\n  if (time) console.log(`Good ${time}, ${name}`);\n  else console.log(`Hello, ${name}`);\n}",
        },
      ],
    },
    {
      title: "8. Abstraction & Interfaces",
      items: [
        {
          name: "Abstract Class (Not native in JS)",
          description:
            "Defines methods but doesn’t provide full implementation. Cannot be instantiated. Used as a base class.",
          code: "// Pseudo-JS with comments\nclass Shape {\n  // draw() is abstract\n}\nclass Circle extends Shape {\n  draw() {\n    console.log('Drawing circle');\n  }\n}",
        },
        {
          name: "Interface (Concept in JS)",
          description:
            "A contract that ensures a class provides specific methods. For example: A Drivable interface may require drive() and stop().",
        },
      ],
    },
    {
      title: "9. Composition vs Inheritance",
      items: [
        {
          name: "Composition",
          description:
            "Combining behaviors from different sources instead of extending a class. For example: A fish object uses canSwim mixin.",
          code: "const canSwim = { swim() { console.log('Swimming'); } };\nconst fish = Object.assign({}, canSwim);\nfish.swim();",
        },
        {
          name: "Favor Composition",
          description:
            "In complex systems, prefer composition over deep inheritance chains to reduce tight coupling.",
        },
      ],
    },
    {
      title: "10. Object Creation Patterns",
      items: [
        {
          name: "Factory Function",
          description:
            "Returns a new object. Useful when creating multiple similar objects. For example: createUser('Ali') returns a new user object.",
          code: "function createUser(name) {\n  return {\n    name,\n    greet() {\n      console.log(`Hi, I’m ${name}`);\n    }\n  };\n}",
        },
        {
          name: "Constructor Function",
          description:
            "Defines reusable structure using function and 'new' keyword.",
          code: "function Person(name) {\n  this.name = name;\n}\nconst p = new Person('Hamza');",
        },
      ],
    },
  ],
};

export default oopCheatSheet;
