const oopFlashcards = [
  {
    question: "What is Object-Oriented Programming (OOP)?",
    answer:
      "A programming style where code is organized around objects — like real-world items — that have data (properties) and behavior (methods). For example: A car object can have data like color and speed, and behaviors like drive() or stop().",
    subTopic: "OOP Basics",
  },
  {
    question: "Why use OOP?",
    answer:
      "To write cleaner code, reuse parts of the code easily, and better model real-world problems. For example: Instead of rewriting 'car' code for every car, just make one car class and create multiple car objects.",
    subTopic: "OOP Basics",
  },
  {
    question: "What is a class?",
    answer:
      "A blueprint to create objects. It defines what data and behaviors the objects will have. For example: A class 'Dog' can have name, breed, and methods like bark().",
    subTopic: "Classes and Objects",
  },
  {
    question: "What is an object?",
    answer:
      "An object is a real-world instance of a class. For example: From the 'Dog' class, we can make an object like 'myDog' with name='Buddy' and breed='Labrador'.",
    subTopic: "Classes and Objects",
  },
  {
    question: "What is the difference between a class and an object?",
    answer:
      "A class is the design; an object is the product. For example: A class is like a cookie cutter, and an object is the cookie made with it.",
    subTopic: "Classes and Objects",
  },
  {
    question: "What is encapsulation?",
    answer:
      "Hiding the internal details of how something works and only showing the necessary parts. For example: A TV remote hides the complex wiring inside — you just use the buttons.",
    subTopic: "Encapsulation and Access Modifiers",
  },
  {
    question: "What are access modifiers?",
    answer:
      "They define what can be accessed from outside a class. For example: 'Public' means anyone can access, 'private' means only inside the class. Like private diary pages vs. public blog posts.",
    subTopic: "Encapsulation and Access Modifiers",
  },
  {
    question: "What is the 'this' keyword?",
    answer:
      "'this' refers to the current object in a class method. For example: If Dog has a method sayName(), this.name means the name of that specific dog object.",
    subTopic: "Encapsulation and Access Modifiers",
  },
  {
    question: "What is inheritance?",
    answer:
      "A way for one class to use code from another. For example: A 'Bird' class can be extended by a 'Parrot' class to inherit flying ability.",
    subTopic: "Inheritance and Reusability",
  },
  {
    question: "What is multiple inheritance?",
    answer:
      "When a class inherits from more than one class. For example: If 'FlyingCar' inherits from both 'Car' and 'Plane'. Some languages (like Java) don't support this directly.",
    subTopic: "Inheritance and Reusability",
  },
  {
    question: "What is method overriding?",
    answer:
      "When a subclass provides its own version of a method from the parent class. For example: A generic Animal class may have a makeSound() method, and Dog overrides it to bark.",
    subTopic: "Inheritance and Reusability",
  },
  {
    question: "What is polymorphism?",
    answer:
      "The ability of different objects to respond to the same method in their own way. For example: A 'draw()' method can draw a circle, square, or triangle based on the object.",
    subTopic: "Polymorphism and Flexibility",
  },
  {
    question: "What is method overloading?",
    answer:
      "Defining multiple methods with the same name but different parameters. For example: An 'add()' method might add two or three numbers depending on how it's called.",
    subTopic: "Polymorphism and Flexibility",
  },
  {
    question: "What is abstraction?",
    answer:
      "Hiding complex logic and showing only essential features. For example: You use a coffee machine by pressing a button — no need to know the internal process.",
    subTopic: "Abstraction and Design",
  },
  {
    question: "What is an abstract class?",
    answer:
      "A class that can't create objects directly and may contain abstract methods. For example: 'Shape' might be abstract — you can't draw a generic shape but can draw a Circle or Square.",
    subTopic: "Abstraction and Design",
  },
  {
    question: "What is an interface?",
    answer:
      "A list of methods a class must implement. It's like a contract. For example: A 'Drivable' interface may require a drive() method, and any vehicle must define it.",
    subTopic: "Abstraction and Design",
  },
  {
    question: "What is a constructor?",
    answer:
      "A special method that runs when an object is created, used to initialize values. For example: When creating a Dog object, the constructor sets the name and breed.",
    subTopic: "Classes and Objects",
  },
  {
    question: "What is a static method?",
    answer:
      "A method that belongs to the class itself, not to an object. For example: Math.sqrt() is a static method — you don’t create a Math object to use it.",
    subTopic: "Classes and Objects",
  },
  {
    question: "What is a method?",
    answer:
      "A function inside a class that defines a behavior. For example: A 'bark()' method in the Dog class makes the dog bark.",
    subTopic: "Classes and Objects",
  },
  {
    question: "What is a property (or attribute)?",
    answer:
      "A variable inside a class that holds data. For example: A Dog class might have a 'name' property.",
    subTopic: "Classes and Objects",
  },
  {
    question: "What is composition in OOP?",
    answer:
      "A design principle where objects are made from other objects. For example: A 'Car' object can have an 'Engine' object inside it, instead of inheriting from Engine.",
    subTopic: "Abstraction and Design",
  },
  {
    question: "What is the difference between composition and inheritance?",
    answer:
      "Inheritance is 'is-a', composition is 'has-a'. For example: A Dog is an Animal (inheritance), a Car has an Engine (composition).",
    subTopic: "Abstraction and Design",
  },
];

export default oopFlashcards;
