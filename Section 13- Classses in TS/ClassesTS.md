# Classes in TS

## Table of Contents

- [Annotating Classes In TypeScript](#annotating-classes-in-typescript)
- [Class Fields In TypeScript](#class-fields-in-typescript)
- [readonly Class Properties](#readonly-class-properties)
- [Public and Private Modifier](#public-and-private-modifier)
- [Parameter Properties Shorthand](#parameter-properties-shorthand)
- [Getters and Setters](#getters-and-setters)
- [The Protected Modifier](#the-protected-modifier)
- [Creating Abstract Classes](#creating-abstract-classes)

***

### Annotating Classes In TypeScript

Annotating classes in TypeScript involves specifying the data types for class properties and method parameters, providing static type checking and ensuring that the code adheres to a consistent data structure. Let's create a `Person` class with two annotated properties, `name` and `age`, in TypeScript:

```typescript
class Person {
  // Annotate the properties with data types
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create an instance of the Person class
const john: Person = new Person("John", 30);

john.sayHello();
```

In this TypeScript example:

- We define a `Person` class with two annotated properties: `name` of type `string` and `age` of type `number`. The annotations indicate the expected data types for these properties.

- In the constructor, we use parameter annotations to specify the expected data types for the `name` and `age` parameters.

- By annotating the class properties and method parameters, TypeScript provides type checking, ensuring that the properties and methods are used consistently with the specified data types.

- We create an instance of the `Person` class named `john`, and TypeScript infers the data types based on the class annotations. This helps catch type-related errors during development.

Annotating classes and their members in TypeScript helps improve code maintainability and catch type-related issues early in the development process. It provides clear expectations for the data structure of the class, making the code more robust and easier to work with.

***

### Class Fields In TypeScript

Class fields in TypeScript allow you to define class properties with default values and data types directly within the class body. These properties are automatically assigned when you create an instance of the class. Let's use the `Person` class as an example, add class fields, and include comments in the code:

```typescript
class Person {
  // Class fields with default values and data types
  name: string = "John";
  age: number = 30;

  constructor(name: string, age: number) {
    // Assign constructor parameters to class fields
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create an instance of the Person class
const john: Person = new Person("John Doe", 35);

john.sayHello(); // Output: "Hello, my name is John Doe and I'm 35 years old."
```

In this TypeScript code example:

- We define class fields within the `Person` class, including `name` and `age`, with default values and data types. These class fields are automatically initialized when creating an instance.

- In the constructor, we assign the values of the constructor parameters to the class fields, overriding the default values. This ensures that when you create an instance with specific `name` and `age` values, those values are used.

- The `sayHello` method remains the same, and it can access the class fields.

- We create an instance of the `Person` class named `john` and specify its type as `Person`. TypeScript infers the data types for `name` and `age` based on the class field annotations.

Class fields in TypeScript simplify the initialization of class properties and improve code readability. By annotating class fields with data types and providing default values, you can have both clear type information and sensible default values for class instances.

***

### readonly Class Properties

Readonly class properties in TypeScript allow you to define properties that can be set only once, typically in the constructor. After their initial assignment, they cannot be modified. Let's use the `Person` class as an example, add readonly properties, and include comments in the code:

```typescript
class Person {
  // Readonly class properties with data types
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    // Assign constructor parameters to readonly properties
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create an instance of the Person class
const john: Person = new Person("John Doe", 35);

john.sayHello(); // Output: "Hello, my name is John Doe and I'm 35 years old."

// Attempt to modify readonly properties (generates a TypeScript error)
// john.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
// john.age = 36;     // Error: Cannot assign to 'age' because it is a read-only property.
```

In this TypeScript code example:

- We define `readonly` class properties within the `Person` class, including `name` and `age`, with data types. These properties are marked as read-only, indicating that their values can only be assigned within the constructor.

- In the constructor, we assign the values of the constructor parameters to the readonly properties. Once these values are set, they cannot be modified.

- The `sayHello` method remains the same, and it can access the readonly properties.

- We create an instance of the `Person` class named `john`, specifying its type as `Person`. TypeScript enforces that the readonly properties are only set once during object creation.

- In the code comments, we show that attempting to modify readonly properties after their initial assignment generates TypeScript errors.

Readonly properties in TypeScript help ensure that specific class properties are immutable after their initial values are set. This is useful for creating objects with properties that should not change throughout their lifecycle.

***

### Public and Private Modifier

In TypeScript, the `public` and `private` modifiers are used to control the visibility and accessibility of class properties and methods. Here's how they work using the `Person` class as an example, with comments explaining each modifier:

```typescript
class Person {
  // Public property
  public name: string;

  // Private property
  private age: number;

  // Constructor to initialize the properties
  constructor(name: string, age: number) {
    // Access public property directly
    this.name = name;

    // Access private property directly within the class
    this.age = age;
  }

  // Public method
  public sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    this.privateMethod(); // Access a private method within the class
  }

  // Private method
  private privateMethod() {
    console.log("This is a private method.");
  }
}

// Create an instance of the Person class
const john: Person = new Person("John Doe", 35);

john.sayHello(); // Output: "Hello, my name is John Doe and I'm 35 years old."

// Access public property from outside the class
console.log(john.name); // Output: "John Doe"

// Attempt to access private property from outside the class (generates a TypeScript error)
// console.log(john.age); // Error: Property 'age' is private and only accessible within class 'Person'.

// Attempt to call private method from outside the class (generates a TypeScript error)
// john.privateMethod(); // Error: Property 'privateMethod' is private and only accessible within class 'Person'.
```

In this TypeScript code example:

- We define a `public` property, `name`, and a `private` property, `age`, within the `Person` class. The `public` modifier allows direct access from both inside and outside the class, while the `private` modifier restricts access to only within the class.

- In the constructor, we initialize both the `name` and `age` properties. The `public` property `name` can be accessed directly within and outside the class, but the `private` property `age` can only be accessed within the class.

- We define a `public` method, `sayHello`, that can be accessed from both inside and outside the class. The method uses the `name` and `age` properties and calls the `privateMethod`, which is a private method.

- We define a `private` method, `privateMethod`, which can only be accessed within the class.

- We create an instance of the `Person` class named `john`.

- We demonstrate that the `name` property can be accessed from outside the class. Attempting to access the `age` property or call the `privateMethod` from outside the class generates TypeScript errors, as private members are not accessible outside the class.

The `public` modifier is the default visibility modifier in TypeScript, so it's often omitted. The `private` modifier restricts access to the class in which it's defined, providing encapsulation and data hiding.

***

### Parameter Properties Shorthand

Parameter properties shorthand in TypeScript is a convenient way to declare and initialize class properties directly within the constructor parameters. It reduces the need for manually defining properties and assigning values in the constructor body. Let's demonstrate this feature using the `Person` class with comments in the code:

```typescript
class Person {
  // Constructor with parameter properties
  constructor(public name: string, private age: number) {
    // The properties 'name' and 'age' are automatically created and initialized
  }

  // Public method
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    this.privateMethod(); // Access a private method within the class
  }

  // Private method
  private privateMethod() {
    console.log("This is a private method.");
  }
}

// Create an instance of the Person class
const john: Person = new Person("John Doe", 35);

john.sayHello(); // Output: "Hello, my name is John Doe and I'm 35 years old."

// Access the 'name' property directly
console.log(john.name); // Output: "John Doe"

// Attempt to access the 'age' property from outside the class (generates a TypeScript error)
// console.log(john.age); // Error: Property 'age' is private and only accessible within class 'Person'.
```

In this TypeScript code example:

- We use the parameter properties shorthand by including the `public` and `private` modifiers directly in the constructor parameters. This automatically creates and initializes the `name` property as a public property and the `age` property as a private property.

- By using parameter properties, we eliminate the need to manually declare and assign values to the class properties in the constructor body. This results in more concise and readable code.

- We define a `public` method, `sayHello`, that can be accessed from both inside and outside the class. The method uses the `name` and `age` properties and calls the `privateMethod`, which is a private method.

- We define a `private` method, `privateMethod`, which can only be accessed within the class.

- We create an instance of the `Person` class named `john`.

- We demonstrate that the `name` property can be accessed directly, both within and outside the class. Attempting to access the `age` property from outside the class generates a TypeScript error, as it is a private member.

Parameter properties provide a concise way to declare and initialize class properties within the constructor, improving code readability and maintaining TypeScript's strong typing features.

***

### Getters and Setters

Getters and setters in TypeScript allow you to control access to the properties of a class, providing a way to get and set their values. They are defined using the `get` and `set` keywords in front of a method in the class. Here's a TypeScript example using a `Person` class with comments to illustrate how getters and setters work:

```typescript
class Person {
  // Private property
  private _age: number;

  constructor(private _name: string) {
    // Initialize the age property
    this._age = 0;
  }

  // Getter for the name property
  get name(): string {
    return this._name;
  }

  // Setter for the name property
  set name(newName: string) {
    // You can add custom logic here if needed
    this._name = newName;
  }

  // Getter for the age property
  get age(): number {
    return this._age;
  }

  // Setter for the age property
  set age(newAge: number) {
    if (newAge >= 0) {
      // Ensure the age is non-negative
      this._age = newAge;
    } else {
      console.error('Age cannot be negative');
    }
  }
}

// Create a new Person instance
const person = new Person('John');

// Access the properties using getters and setters
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);

// Use the setter to update the properties
person.name = 'Jane';
person.age = 25;

console.log(`Updated Name: ${person.name}`);
console.log(`Updated Age: ${person.age}`);
```

In this example, we have a `Person` class with private properties `_name` and `_age`. We define getters and setters for these properties, allowing controlled access. The comments within the code explain the purpose of each getter and setter and show how to use them to get and set the properties. You can add custom logic in the setters to control property values as needed.

***

### The Protected Modifier

The `protected` modifier in TypeScript restricts access to class members to the class itself and its subclasses (i.e., derived classes). Here's how you can use the `protected` modifier with a `Person` class example, along with comments to illustrate its usage:

```typescript
class Person {
  protected _name: string; // Protected property

  constructor(name: string) {
    this._name = name;
  }

  // A public method to access the protected property
  introduceYourself() {
    console.log(`Hello, my name is ${this._name}.`);
    this.sayHello(); // Access a protected method within the class
  }

  // A protected method
  protected sayHello() {
    console.log("This is a protected method.");
  }
}

class Student extends Person {
  private _studentId: number;

  constructor(name: string, studentId: number) {
    super(name);
    this._studentId = studentId;
  }

  // An extended method
  study() {
    console.log(`Student ${this._name} with ID ${this._studentId} is studying.`);
    this.sayHello(); // Access the protected method from the base class
  }
}

// Create instances of Person and Student
const person = new Person('John');
const student = new Student('Alice', 12345);

// Access public methods
person.introduceYourself();
student.introduceYourself();
student.study();
```

In this example:

- The `Person` class has a protected property `_name`, which can be accessed within the class and its subclasses.
- It also has a public method `introduceYourself` and a protected method `sayHello`.
- The `Student` class is a subclass of `Person` and can access the protected property `_name` and the protected method `sayHello`.
- We create instances of both `Person` and `Student` and demonstrate how they can access protected members and methods.
- Comments within the code explain the purpose and usage of the protected modifier in different contexts.

***

### Creating Abstract Classes

In TypeScript, abstract classes provide a way to define common properties and methods that must be implemented by derived classes. Abstract classes cannot be instantiated directly, and they serve as a blueprint for creating classes that inherit their structure and behavior. Here's an example of creating an abstract class using the `Person` class and adding comments to the code:

```typescript
// Define an abstract class named 'Person'
abstract class Person {
  // Properties
  protected name: string; // Accessible within this class and derived classes
  private age: number;    // Accessible only within this class

  // Constructor for initializing properties
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Abstract method declaration
  abstract introduce(): void;

  // Concrete method (implemented in the abstract class)
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Derived class 'Student' extends 'Person'
class Student extends Person {
  // Constructor for the derived class
  constructor(name: string, age: number) {
    super(name, age); // Call the base class constructor
  }

  // Implement the abstract method 'introduce'
  introduce() {
    console.log(`I'm a student named ${this.name}, and I'm ${this.age} years old.`);
  }
}

// Derived class 'Teacher' extends 'Person'
class Teacher extends Person {
  // Constructor for the derived class
  constructor(name: string, age: number) {
    super(name, age); // Call the base class constructor
  }

  // Implement the abstract method 'introduce'
  introduce() {
    console.log(`I'm a teacher named ${this.name}, and I'm ${this.age} years old.`);
  }
}

// Instantiate derived classes
const student = new Student('Alice', 20);
const teacher = new Teacher('Mr. Smith', 35);

// Call methods on instances
student.greet();
student.introduce();

teacher.greet();
teacher.introduce();
```

Explanation:

- We define an abstract class `Person` with properties `name` (protected) and `age` (private).

- The `Person` class has an abstract method `introduce()`. Abstract methods are marked with the `abstract` keyword, indicating that derived classes must provide an implementation for this method.

- The `greet()` method is a concrete method with an implementation in the abstract class.

- We create two derived classes, `Student` and `Teacher`, which extend the abstract class `Person`.

- In the derived classes, we implement the `introduce()` method as required by the abstract class.

- We instantiate objects of the derived classes and call methods on them.

Abstract classes are useful when you want to ensure that certain methods are implemented in derived classes while providing a common structure and behavior shared by those classes.

***