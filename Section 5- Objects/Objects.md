# Objects

## Table of Contents

- [Working With Object Types](#working-with-object-types)
- [Creating Type Aliases](#creating-type-aliases)
- [Nested Objects](#nested-objects)
- [Optional Properties](#optional-properties)
- [The readonly Modifier](#the-readonly-modifier)
- [Intersection Types](#intersection-types)

***

### Working With Object Types

In TypeScript, objects are a fundamental data type that allows you to represent structured data with properties and values. Objects are instances of classes, or they can be represented using interfaces or type aliases to define their shapes and types. Let's use a `Person` example to illustrate objects in TypeScript:

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
```

In this example:

1. **Interface Definition**: We define an `interface` called `Person` to specify the structure of a person object. It has three properties: `firstName`, `lastName`, and `age`.

2. **Object Creation**: We create a `person` object that adheres to the `Person` interface. It includes values for each property.

3. **Type Annotation**: The `const person: Person` line provides a type annotation for the `person` variable, ensuring that it matches the structure defined by the `Person` interface.

Key points about objects in TypeScript:

- Objects are created by specifying property-value pairs within curly braces `{}`.
- TypeScript allows you to define object types using interfaces, type aliases, or classes.
- Object properties have specific types, which provide strong type checking.
- You can use object types to enforce a specific structure for your data, making your code more robust and self-documenting.

Using object types in TypeScript helps ensure that your data is correctly shaped and typed, which can lead to more reliable and maintainable code.

***

### Creating Type Aliases

Type aliases in TypeScript allow you to create custom names for types, making your code more readable and maintainable. They help define the structure of complex data types or provide descriptive names for types you use frequently.

**Creating a `Person` Type Alias:**

Here's an example of creating a `Person` type alias:

```typescript
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; // Optional property
};
```

In this type alias:

- `Person` is a custom type representing an individual person.
- It defines properties such as `firstName`, `lastName`, and `age`, each with a specified data type.
- The `email` property is optional, denoted by the `?` modifier.

**Using the `Person` Type Alias:**

You can now use the `Person` type alias to define and work with objects representing people:

```typescript
const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
};

const jane: Person = {
  firstName: "Jane",
  lastName: "Smith",
  age: 25,
};

function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);
}

greet(john); // Output: Hello, John Doe!
greet(jane); // Output: Hello, Jane Smith!
```

**Advantages of Type Aliases:**

- Improved Code Readability: Type aliases make your code self-explanatory by providing descriptive names for types.

- Reusability: You can reuse type aliases throughout your code, making it easier to maintain and refactor.

- Encapsulation: Type aliases allow you to encapsulate complex types within a single, recognizable name.

- Type Compatibility: Type aliases are interchangeable with built-in TypeScript types, making it easier to integrate custom types into your code.

In summary, type aliases in TypeScript are a valuable feature that enhances code organization, readability, and type safety. They are particularly useful when working with custom or complex data structures, providing a structured and consistent way to define and work with objects.

***

### Nested Objects 

Nested objects in TypeScript involve defining objects within other objects. This is useful when you have structured data with hierarchical relationships. Let's illustrate this with a `Person` example that includes a nested `Address` object:

```typescript
type Address = {
  street: string;
  city: string;
  zipCode: string;
};

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  address: Address; // Nested Address object
};

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
};

console.log(`Name: ${john.firstName} ${john.lastName}`);
console.log(`Age: ${john.age}`);
console.log(`Address: ${john.address.street}, ${john.address.city}, ${john.address.zipCode}`);
```

In this example:

- We have defined two type aliases, `Address` and `Person`.

- The `Address` type represents an address with properties like `street`, `city`, and `zipCode`.

- The `Person` type includes a property called `address`, which is of type `Address`. This creates a nested object structure within the `Person` object.

- When creating a `Person` object (e.g., `john`), you can include an `address` object as a property. This allows you to represent both personal information and address details within a single `Person` object.

- You can access nested object properties using dot notation (e.g., `john.address.street`).

Nested objects are valuable when you need to represent complex data structures with relationships between different parts of the data. They help you organize and access information in a structured and readable manner.

***

### Optional Properties

Optional properties in TypeScript allow you to define properties in an object type that may or may not be present when creating objects of that type. Here's a short explanation with code examples:

**Short Explanation:**
- Optional properties are properties in an object type that may or may not be included in the object.
- They are denoted by the `?` modifier after the property name.

**Code Examples:**

1. **Defining an Optional Property:**

```typescript
type Person = {
  name: string;
  age?: number; // Optional property
};

const john: Person = {
  name: "John",
  age: 30,
};

const jane: Person = {
  name: "Jane",
  // 'age' property is omitted (optional)
};
```

In this example, the `age` property is optional, so you can include it when creating a `Person` object (as in `john`) or omit it (as in `jane`).

2. **Function with Optional Parameter:**

```typescript
function greet(name: string, message?: string) {
  if (message) {
    console.log(`Hello, ${name}! ${message}`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greet("Alice"); // Uses the default message
greet("Bob", "How are you?"); // Includes a custom message
```

In this example, the `message` parameter is optional, so you can call the `greet` function with or without providing a custom message.

Optional properties and parameters are valuable when you have data structures or functions where some information is not always required. They provide flexibility in working with objects and functions, making your code more versatile and user-friendly.

***

### The readonly Modifier

The `readonly` modifier in TypeScript is used to make properties or fields of an object immutable, meaning their values cannot be changed once they are set. This ensures that the object's properties retain their initial values. Here's a short explanation with a code example using a `Person` object:

**Short Explanation:**
- The `readonly` modifier makes properties of an object immutable, preventing their values from being modified after they are set.
- It is often used to enforce immutability for specific fields within an object.

**Code Example with a `Person` Object:**

```typescript
class Person {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const john = new Person("John", 30);

// Attempting to modify 'name' or 'age' properties will result in an error.
john.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
john.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.
```

In this example:

- The `Person` class has `name` and `age` properties marked as `readonly`.
- The constructor sets the initial values for these properties.
- Once the `john` object is created, attempting to modify the `name` or `age` properties will result in an error, as they are marked as `readonly`.

Using `readonly` in this context ensures that the `name` and `age` properties of a `Person` object cannot be accidentally changed, making the object's state more predictable and maintaining immutability.

***

### Intersection Types

Intersection types in TypeScript allow you to combine multiple types into a single type. Let's create an example using `Circle` and `Colorful` types to demonstrate intersection types:

**Explanation:**
- Intersection types combine multiple types into a single type.
- The resulting type includes all properties and methods from each of the original types.

**Code Example:**

Suppose you have a `Circle` type representing a geometric circle and a `Colorful` type representing an object with a color property. You can use an intersection type to create an object that represents a colorful circle:

```typescript
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const myColorfulCircle: ColorfulCircle = {
  radius: 5,
  color: "blue",
};

console.log(`Radius: ${myColorfulCircle.radius}, Color: ${myColorfulCircle.color}`);
```

In this example:

- The `Circle` type represents a circle with a `radius` property.
- The `Colorful` type represents an object with a `color` property.
- The `ColorfulCircle` type is an intersection of `Circle` and `Colorful`, combining both properties.

The `myColorfulCircle` object is an instance of the `ColorfulCircle` type, and it has both the `radius` and `color` properties. Intersection types are useful for creating objects that share properties and methods from different types, allowing you to express complex data structures in a more organized manner.

***