# Classes in JS

## Table of Contents

- [The Class Keyword](#the-class-keyword)
- [Constructors](#constructors)
- [Class Fields](#class-fields)
- [Private Fields](#private-fields)
- [Getters and Setters](#getters-and-setters)
- [Static Properties](#static-properties)
- [Extending Classes](#extending-classes)
- [The super keyword](#the-super-keyword)

***

### The Class Keyword

In JavaScript, the `class` keyword is used to create classes, which are a way to define object blueprints. Classes encapsulate data (properties) and behavior (methods) that objects created from them can exhibit. Here's how to create a class and initialize it with code examples:

**Creating a Class:**

To create a class, you use the `class` keyword followed by the class name. Inside the class, you define properties and methods. Here's a simple example of a `Person` class:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
```

In this example:

- We define a `Person` class with a constructor method that sets the `name` and `age` properties when a new `Person` object is created.

- The `sayHello` method is defined to display a greeting based on the `name` and `age` properties.

**Initializing and Using a Class:**

Once you've defined a class, you can create objects (instances) of that class using the `new` keyword:

```javascript
const john = new Person("John", 30);
const alice = new Person("Alice", 25);

john.sayHello(); // Output: "Hello, my name is John and I'm 30 years old."
alice.sayHello(); // Output: "Hello, my name is Alice and I'm 25 years old."
```

In this code:

- We create two `Person` objects, `john` and `alice`, using the `new` keyword, passing the required parameters to the constructor.

- We call the `sayHello` method on each object, which displays a personalized greeting based on the object's properties.

This is the basic usage of the `class` keyword in JavaScript. Classes provide a structured way to create and work with objects, and they are widely used in modern JavaScript for building object-oriented code.

***

### Constructors

In JavaScript, a constructor is a special method that is automatically called when an object is created from a class. It's used to initialize the object's properties and perform any setup required. In the example of the `Person` class mentioned earlier, the `constructor` method is the constructor.

Here's the `Person` class with an explanation of the constructor:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
```

- The `constructor` method takes two parameters, `name` and `age`. When a new `Person` object is created, these parameters are used to initialize the `name` and `age` properties of that object.

- Inside the `constructor`, `this.name` and `this.age` refer to the properties of the object being created, so the values provided during object creation are assigned to these properties.

Here's how you create a `Person` object using the constructor:

```javascript
const john = new Person("John", 30);
const alice = new Person("Alice", 25);
```

When you create `john` and `alice` objects, the constructor is automatically called with the values you provided, initializing their `name` and `age` properties.

The `constructor` method is a fundamental part of classes in JavaScript, and it plays a crucial role in setting up objects with their initial state.

***

### Class Fields

In JavaScript, class fields allow you to declare and initialize class-level properties directly within a class without the need for a constructor. Class fields are part of modern JavaScript and make it more concise and convenient to define and initialize properties. Let's see how class fields work in the example of the `Person` class:

```javascript
class Person {
  // Class fields
  name = '';
  age = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Creating objects
const john = new Person("John", 30);
const alice = new Person("Alice", 25);

john.sayHello(); // Output: "Hello, my name is John and I'm 30 years old."
alice.sayHello(); // Output: "Hello, my name is Alice and I'm 25 years old."
```

In this example:

- We declare and initialize class fields directly within the class definition. These fields are `name` and `age` with default values.

- Class fields simplify property initialization. Instead of using a constructor to assign initial values, you can directly set default values within the class.

- When objects are created, the class fields are automatically initialized with the default values, and the constructor is no longer needed for property assignments.

Class fields offer a more concise way to declare and initialize properties, especially when default values are common. They provide a cleaner and more readable class definition in modern JavaScript.

***

### Private Fields

Private fields in JavaScript are a way to encapsulate class properties, making them inaccessible from outside the class. Private fields are indicated by a `#` symbol before their name. Here's an example using private fields in a `Person` class:

```javascript
class Person {
  #name; // Private field
  #age;  // Private field

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.#name} and I'm ${this.#age} years old.`);
  }

  // Getter for private field #name
  getName() {
    return this.#name;
  }

  // Setter for private field #age
  setAge(age) {
    if (age >= 0) {
      this.#age = age;
    } else {
      console.error("Age must be a non-negative number.");
    }
  }
}

// Creating an object
const john = new Person("John", 30);

john.sayHello(); // Output: "Hello, my name is John and I'm 30 years old."

console.log(john.getName()); // Accessing the private field using a getter

john.setAge(35); // Modifying the private field using a setter
john.sayHello(); // Output: "Hello, my name is John and I'm 35 years old."

// Trying to access private fields directly from outside the class will result in an error
console.log(john.#name); // Error
```

In this example:

- Private fields `#name` and `#age` are declared within the `Person` class. They can only be accessed and modified from within the class.

- The constructor initializes the private fields with values passed as parameters.

- The `sayHello` method can access and display the private fields.

- Getter and setter methods, `getName` and `setAge`, provide controlled access to the private fields from outside the class.

- Attempting to access private fields directly from outside the class, as shown with `john.#name`, results in an error.

Private fields enhance encapsulation and data security by making class properties inaccessible from the outside. This helps ensure that properties are modified or accessed only in a controlled manner, improving code reliability and security.

***

### Getters and Setters

Getters and setters are special methods used in JavaScript classes to control the access and modification of object properties. Here's the modified `Person` class example with getters and setters using the hash (`#`) notation for private fields:

```javascript
class Person {
  #name; // Private field
  #age;  // Private field

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // Getter for the 'name' private field
  get name() {
    return this.#name;
  }

  // Setter for the 'name' private field
  set name(newName) {
    if (newName.length >= 2) {
      this.#name = newName;
    } else {
      console.log("Name must be at least 2 characters long.");
    }
  }

  // Getter for the 'age' private field
  get age() {
    return this.#age;
  }

  // Setter for the 'age' private field
  set age(newAge) {
    if (newAge >= 0) {
      this.#age = newAge;
    } else {
      console.log("Age must be a non-negative number.");
    }
  }

  sayHello() {
    console.log(`Hello, my name is ${this.#name} and I'm ${this.#age} years old.`);
  }
}

const john = new Person("John", 30);

// Using getters and setters for private fields
console.log(john.name); // Accessing the 'name' getter
john.name = "J"; // Setting the 'name' property using the setter
john.sayHello(); // Output: "Name must be at least 2 characters long."

// Valid name
john.name = "Johnny"; // Setting the 'name' property using the setter
john.sayHello(); // Output: "Hello, my name is Johnny and I'm 30 years old."

console.log(john.age); // Accessing the 'age' getter
john.age = -5; // Setting the 'age' property using the setter
john.sayHello(); // Output: "Age must be a non-negative number."
```

In this example, getters and setters are used to control access and modification of private fields, providing validation checks to ensure that properties are accessed and modified in a controlled and secure manner. The hash (`#`) notation is used to indicate private fields, enhancing data encapsulation.

***

### Static Properties

Static properties in JavaScript are properties that belong to the class itself, rather than to instances of the class. They are accessed using the class name, and there is only one instance of each static property shared among all instances of the class. Static properties are defined using the `static` keyword.

In the context of the `Person` class, let's add a static property `species` to represent the species of all persons:

```javascript
class Person {
  static species = 'Homo sapiens'; // Static property

  #name; // Private field
  #age;  // Private field

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.#name} and I'm ${this.#age} years old.`);
  }

  static getSpecies() {
    return Person.species; // Accessing the static property
  }
}

const john = new Person("John", 30);

console.log(john.sayHello());

// Accessing the static property and method
console.log(Person.species); // Accessing the static property
console.log(Person.getSpecies()); // Accessing the static method
```

In this example:

- The `species` property is declared as a static property using `static species = 'Homo sapiens';`.

- You can access the static property `species` using the class name, as demonstrated by `Person.species`.

- A static method `getSpecies` is defined to retrieve the static property's value.

- You can access the static method `getSpecies` in a similar way using the class name, as shown by `Person.getSpecies()`.

Static properties are useful for storing shared data or constants related to the class itself, and they are not tied to individual instances of the class.

***

### Extending Classes

Extending classes in JavaScript allows you to create a new class that inherits the properties and methods from an existing class. This is often used to create more specialized classes that build upon the behavior of a base class. In the context of the `Person` class example, let's extend it to create a new class called `Employee`:

```js
class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.#name} and I'm ${this.#age} years old.`);
  }
}

class Employee extends Person {
  #position; // Private field in the derived class

  constructor(name, age, position) {
    super(name, age); // Call the base class constructor
    this.#position = position;
  }

  introduce() {
    console.log(`I am ${this.#name}, I'm ${this.#age} years old, and I work as a ${this.#position}.`);
  }
}

const john = new Employee("John", 30, "Software Developer");

john.introduce(); // Output: "I am John, I'm 30 years old, and I work as a Software Developer."
john.sayHello(); // Output: "Hello, my name is John and I'm 30 years old."

```

In this example:

- The `Person` class serves as the base class, containing properties and methods for a person.

- The `Employee` class extends `Person` using the `extends` keyword. This means that `Employee` inherits the `Person` class's properties and methods, and you can also add new properties and methods specific to employees.

- In the `Employee` class, a new private field `#position` is added.

- The `super` keyword is used in the `Employee` constructor to call the constructor of the base class (`Person`) and initialize the inherited fields.

- The `introduce` method is added to the `Employee` class to provide additional functionality specific to employees.

- An instance of `Employee`, named `john`, is created and used to demonstrate both the inherited `sayHello` method and the new `introduce` method.

Extending classes is a fundamental concept in object-oriented programming, allowing you to create hierarchies of classes with shared behaviors and specialized features. In this example, `Employee` is a subclass of `Person`, inheriting its properties and methods while adding its own.


***

### The super keyword

In JavaScript, the `super()` keyword is used to call the constructor of a parent class when creating an instance of a child class. It's essential when you extend a class and want to initialize the properties defined in the parent class. In the example of the `Employee` class extending the `Person` class, the `super()` keyword is used to invoke the `Person` constructor to set the `name` and `age` properties. Here's a detailed explanation with the same example:

```javascript
class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.#name} and I'm ${this.#age} years old.`);
  }
}

class Employee extends Person {
  #position;

  constructor(name, age, position) {
    super(name, age); // Call the constructor of the parent class (Person)
    this.#position = position;
  }

  introduce() {
    console.log(`I am ${this.#name}, I'm ${this.#age} years old, and I work as a ${this.#position}.`);
  }
}

const john = new Employee("John", 30, "Software Developer");

john.introduce();
john.sayHello();
```

In this example:

- The `Employee` class extends the `Person` class using the `extends` keyword.

- In the `Employee` constructor, `super(name, age)` is called. This line invokes the constructor of the parent class (`Person`) with the provided `name` and `age` parameters. It ensures that the `name` and `age` properties of the `Person` class are correctly initialized for the `Employee` instance.

- After calling `super()`, you can set the `#position` property specific to the `Employee` class.

- The `introduce` method is added to the `Employee` class, which uses the `#name`, `#age`, and `#position` properties to provide information about the employee.

Using `super()` is essential when you extend a class because it ensures that the properties and behavior defined in the parent class are correctly initialized before adding any additional features specific to the child class. It's a way to maintain the integrity of the parent class's structure while extending it with new functionality.

***