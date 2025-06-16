export const oopCheatSheet = {
  title: "OOP (Object-Oriented Programming) Cheat Sheet",
  sections: [
    {
      title: "1. OOP Concepts",
      items: [
        {
          name: "Class",
          description:
            "A blueprint for creating objects with shared structure and behavior.",
          code: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n}",
        },
        {
          name: "Object",
          description: "An instance of a class containing data and methods.",
          code: "const dog = new Animal('Buddy');",
        },
        {
          name: "Encapsulation",
          description:
            "Hiding internal details and exposing only what’s necessary via public methods.",
        },
        {
          name: "Abstraction",
          description:
            "Simplifying complex systems by exposing only relevant parts.",
        },
        {
          name: "Inheritance",
          description:
            "A class can inherit properties and methods from another class.",
          code: "class Dog extends Animal {\n  bark() {\n    console.log('Woof!');\n  }\n}",
        },
        {
          name: "Polymorphism",
          description:
            "Objects can take on many forms depending on the context (e.g., method overriding).",
        },
      ],
    },
    {
      title: "2. Constructors",
      items: [
        {
          name: "constructor()",
          description:
            "Special method for initializing new objects of a class.",
          code: "class Car {\n  constructor(brand) {\n    this.brand = brand;\n  }\n}",
        },
      ],
    },
    {
      title: "3. Methods",
      items: [
        {
          name: "Instance Method",
          description: "Defined inside a class and called on an object.",
          code: "drive() {\n  console.log(`${this.brand} is driving.`);\n}",
        },
        {
          name: "Static Method",
          description: "Called on the class itself, not an instance.",
          code: "static info() {\n  return 'Car class';\n}",
        },
      ],
    },
    {
      title: "4. Inheritance",
      items: [
        {
          name: "extends",
          description: "Keyword used to inherit from another class.",
          code: "class ElectricCar extends Car {\n  charge() {\n    console.log('Charging...');\n  }\n}",
        },
        {
          name: "super()",
          description: "Calls the constructor of the parent class.",
          code: "constructor(brand, battery) {\n  super(brand);\n  this.battery = battery;\n}",
        },
      ],
    },
    {
      title: "5. Access Modifiers (Conceptual)",
      items: [
        {
          name: "Public",
          description: "Accessible from anywhere. Default in JavaScript.",
        },
        {
          name: "Private (# or _)",
          description: "Accessible only within the class (e.g., #name in JS).",
          code: "class User {\n  #password;\n  constructor(pw) {\n    this.#password = pw;\n  }\n}",
        },
        {
          name: "Protected (via convention)",
          description:
            "Not enforced in JavaScript; use '_' as naming convention (e.g., _id).",
        },
      ],
    },
    {
      title: "6. Encapsulation in Practice",
      items: [
        {
          name: "Getter",
          description: "Method to safely access a property.",
          code: "get name() {\n  return this._name;\n}",
        },
        {
          name: "Setter",
          description: "Method to safely set a property with validation.",
          code: "set name(value) {\n  if (value.length > 0) this._name = value;\n}",
        },
      ],
    },
    {
      title: "7. Polymorphism",
      items: [
        {
          name: "Method Overriding",
          description: "Subclass redefines a method from the parent class.",
          code: "class Bird {\n  fly() { console.log('Flying'); }\n}\nclass Penguin extends Bird {\n  fly() { console.log('Can’t fly'); }\n}",
        },
        {
          name: "Method Overloading (Not native in JS)",
          description:
            "Multiple methods with same name but different parameters (simulated with conditions).",
        },
      ],
    },
    {
      title: "8. Composition vs Inheritance",
      items: [
        {
          name: "Composition",
          description:
            "Combining behaviors from different sources instead of extending a class.",
          code: "const canSwim = { swim() { console.log('Swimming'); } };\nconst fish = Object.assign({}, canSwim);",
        },
        {
          name: "Favor Composition",
          description:
            "In complex scenarios, prefer composition over deep inheritance chains.",
        },
      ],
    },
    {
      title: "9. Object Creation Patterns",
      items: [
        {
          name: "Factory Function",
          description: "Returns a new object. Useful for dynamic creation.",
          code: "function createUser(name) {\n  return { name, greet() { console.log('Hi'); } };\n}",
        },
        {
          name: "Constructor Function",
          description:
            "Defines a reusable blueprint using function + new keyword.",
          code: "function Person(name) {\n  this.name = name;\n}",
        },
      ],
    },
  ],
};

export default oopCheatSheet;
