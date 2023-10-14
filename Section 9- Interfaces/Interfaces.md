# Interfaces

## Table of Contents

- [Introducing Interfaces](#introducing-interfaces)
- [Readonly and Optional Interface Properties](#readonly-and-optional-interface-properties)
- [Interface Methods](#interface-methods)
- [Interface Method Parameters](#interface-method-parameters)
- [Reopening Interfaces](#reopening-interfaces)
- [Extending Interfaces](#extending-interfaces)
- [Interface Multiple Inheritance](#interface-multiple-inheritance)
- [Interfaces and Type Aliases](#interfaces-and-type-aliases)

***

### Introducing Interfaces

Interfaces in TypeScript are used to define the structure of objects or classes, specifying which properties and methods they should have. They provide a blueprint for creating objects that adhere to a certain shape. Let's create an `Person` interface as an example and explain it:

**Creating an `Person` Interface:**

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; // Optional property
}

// Usage
const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const jane: Person = {
  firstName: "Jane",
  lastName: "Smith",
  age: 25,
  email: "jane@example.com",
};
```

In this code:

- We define an `Person` interface that represents the structure of a person.
- The `Person` interface specifies that objects of this type should have properties for `firstName`, `lastName`, and `age`.
- The `email` property is marked as optional with `?`, meaning it's not required when creating a `Person` object.
- We then create two `Person` objects, `john` and `jane`, that adhere to the interface's structure.

**Explanation:**

- An interface defines a contract for an object, specifying which properties and methods it should have.
- The `Person` interface here represents the expected structure of a person object.
- Interfaces enhance code readability and maintainability by providing a clear and standardized way to define the shape of data structures.
- When you create objects based on an interface, TypeScript checks if the objects adhere to the interface's structure, enforcing type safety.

Interfaces are a fundamental feature of TypeScript that play a crucial role in creating robust and well-structured code. They are used to define contracts, ensure consistency, and facilitate collaboration when working on larger projects.

***

### Readonly and Optional Interface Properties

In TypeScript, you can use the `readonly` and `?` modifiers to define readonly and optional properties in an interface, respectively. Let's explain both concepts with the `Person` interface:

**Readonly Interface Properties:**

The `readonly` modifier is used to create properties that cannot be modified once they are assigned a value. These properties are read-only.

Here's how to use `readonly` in the `Person` interface:

```typescript
interface Person {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly email?: string; // Optional property
}
```

With `readonly` properties in the `Person` interface, you can create objects with properties that cannot be changed:

```typescript
const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

john.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.
```

**Optional Interface Properties:**

The `?` modifier is used to create optional properties in an interface, which means that these properties may or may not be present in objects that implement the interface.

Here's how to use optional properties in the `Person` interface:

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; // Optional property
}
```

With the `email?` property being optional, you can create `Person` objects with or without the `email` property:

```typescript
const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const jane: Person = {
  firstName: "Jane",
  lastName: "Smith",
  age: 25,
  email: "jane@example.com",
};
```

Optional properties in an interface allow you to create more flexible objects, as they don't require every property to be present.

By combining `readonly` and optional properties in your interfaces, you can create more precise and flexible definitions for your data structures, ensuring that certain properties are immutable while others remain optional.

***

### Interface Methods

In TypeScript, interfaces can define methods in addition to properties. Let's extend the `Person` interface to include a method, and I'll explain how it works:

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
  getFullName(): string; // Method declaration
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const jane: Person = {
  firstName: "Jane",
  lastName: "Smith",
  age: 25,
  email: "jane@example.com",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(john.getFullName()); // Output: "John Doe"
console.log(jane.getFullName()); // Output: "Jane Smith"
```

In this example:

- We extend the `Person` interface to include a method `getFullName` that returns a string.
- The `getFullName` method is defined within the `john` and `jane` objects, following the structure defined in the interface.
- The `getFullName` method retrieves the `firstName` and `lastName` properties of the objects to construct and return the full name.

Interfaces in TypeScript can define method signatures, specifying the method's name, parameters, and return type. Objects or classes that implement the interface must provide an implementation of the method. This ensures that objects conform to a specific shape, including both properties and methods, enhancing type safety and code consistency.


***

### Interface Method Parameters

In TypeScript, when defining methods in an interface, you can also specify the method's parameters, similar to how you define parameters in regular function or method signatures. Let's extend the `Person` interface to include a method with parameters, and I'll explain how it works:

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
  greet(greeting: string): string; // Method declaration with a parameter
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet(greeting: string) {
    return `${greeting}, ${this.firstName} ${this.lastName}`;
  },
};

const jane: Person = {
  firstName: "Jane",
  lastName: "Smith",
  age: 25,
  email: "jane@example.com",
  greet(greeting: string) {
    return `${greeting}, ${this.firstName} ${this.lastName}`;
  },
};

console.log(john.greet("Hello")); // Output: "Hello, John Doe"
console.log(jane.greet("Hi")); // Output: "Hi, Jane Smith"
```

In this example:

- We extend the `Person` interface to include a method `greet` that takes a parameter `greeting` of type string and returns a string.
- The `greet` method is defined within the `john` and `jane` objects, and it follows the method signature specified in the interface.
- When calling the `greet` method, we pass a string as the `greeting` parameter to construct a personalized greeting message.

This demonstrates how interface methods can define parameters, and objects implementing the interface must provide an implementation of the method that matches the parameter types and return type specified in the interface. This ensures type safety and consistency in your code.

***

### Reopening Interfaces

In TypeScript, you can reopen interfaces to add new properties or methods. This lets you extend existing interfaces without modifying their original definition. Here's a shorter example:


```typescript
// Original interface
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
};

// Reopened interface to add a new property
interface Person {
  address: string;
}

const jane: Person = {
  firstName: "Jane",
  lastName: "Smith",
  age: 25,
  email: "jane@example.com",
  address: "123 Main St",
};
```

In this example:

- We start with the original `Person` interface, which defines properties such as `firstName`, `lastName`, `age`, and `email`.

- Later, we reopen the `Person` interface to add a new property, `address`, which was not present in the original definition.

- We can now create `Person` objects with the updated structure, like `jane` with an `address` property.

Reopening interfaces allows you to adapt and extend existing interface definitions as needed in your code without modifying the initial interface.

***

### Extending Interfaces

In TypeScript, you can extend an existing interface by creating a new interface that inherits its properties and methods. This concept is known as extending interfaces. Let's illustrate how to extend the `Person` interface:

```typescript
// Original interface
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Extending the original interface
interface Employee extends Person {
  employeeId: string;
  role: string;
}

const jane: Employee = {
  firstName: "Jane",
  lastName: "Smith",
  age: 25,
  employeeId: "EMP123",
  role: "Developer",
};
```

Here's the explanation:

- We start with the original `Person` interface, which defines properties such as `firstName`, `lastName`, `age`, and `email`.

- We then extend the original interface by creating a new `Employee` interface. This new interface inherits all the properties from `Person` and adds two new properties, `employeeId` and `role`.

- We can create objects like `jane` using the extended `Employee` interface. These objects have all the properties defined in both the original and the extended interfaces.

Extending interfaces is a powerful mechanism for building complex and structured type hierarchies, ensuring that objects implementing the extended interface include all properties and methods defined in both the parent and child interfaces.

***

### Interface Multiple Inheritance

In TypeScript, interface multiple inheritance allows you to combine the properties and methods from multiple interfaces into a single interface. You can do this by listing the parent interfaces separated by commas. Here's how you can use interface multiple inheritance with the `Person` interface:

```typescript
// Original interface
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

// Another interface
interface Addressable {
  address: string;
}

// Interface multiple inheritance
interface Employee extends Person, Addressable {
  employeeId: string;
  role: string;
}

const jane: Employee = {
  firstName: "Jane",
  lastName: "Smith",
  age: 25,
  employeeId: "EMP123",
  role: "Developer",
  address: "123 Main St",
};
```

In this example:

- We start with the original `Person` interface, which defines properties like `firstName`, `lastName`, `age`, and `email`.

- We introduce another interface named `Addressable` with an `address` property.

- To achieve interface multiple inheritance, we create an `Employee` interface by extending both `Person` and `Addressable` using a comma to separate them.

- The `Employee` interface inherits all the properties and methods from both `Person` and `Addressable`, allowing you to create objects like `jane` that include properties from both parent interfaces.

This is a powerful way to build complex interfaces by reusing and combining existing interface definitions. It provides flexibility and maintainability when dealing with more comprehensive object structures.

***

### Interfaces and Type Aliases

Interfaces and type aliases in TypeScript serve similar purposes by defining custom data structures, but they have some differences. Here's a comparison of the two:

**Interfaces:**

1. **Declaration Keyword:** Interfaces are defined using the `interface` keyword.

2. **Extending:** Interfaces can be extended using the `extends` keyword to create new interfaces that inherit properties and methods from other interfaces.

3. **Implementing:** Classes can implement interfaces using the `implements` keyword, ensuring that the class adheres to the structure defined in the interface.

4. **Instance Methods:** Interfaces can only define the shape of instance methods, making them suitable for describing object structures and class instances.

5. **Declaration Merging:** Interfaces can be merged by defining multiple interfaces with the same name, combining their properties and methods into a single interface definition.

6. **Naming Convention:** Interfaces are commonly named using PascalCase (e.g., `Person`, `Car`).

**Type Aliases:**

1. **Declaration Keyword:** Type aliases are defined using the `type` keyword.

2. **Combining Types:** Type aliases allow you to create custom types by combining existing types, including union types, intersections, and more.

3. **No Extending:** Type aliases do not support inheritance or extending other types. They are stand-alone type definitions.

4. **Object Shapes:** Type aliases can define the shape of objects, but they can also define other types, such as unions, intersections, and custom types.

5. **Declaration Merging:** Type aliases do not support declaration merging like interfaces do. If you declare multiple types with the same name, the last one takes precedence.

6. **Naming Convention:** Type aliases typically use PascalCase or camelCase, just like variable names (e.g., `Person`, `MyType`, `UserPreferences`).

In practice, the choice between interfaces and type aliases often depends on the specific use case. Use interfaces when you want to define the shape of objects or classes, especially when dealing with classes that implement the interface. Use type aliases when you need to create custom, reusable types by combining existing types or when you need to define complex types that are not tied to a specific object or class structure.

Ultimately, the choice between interfaces and type aliases depends on the needs of your TypeScript project and the level of reusability and abstraction you require for your types.