# Tuples and Enums

## Table of Contents

- [Introducing Tuples](#introducing-tuples)
- [Introducing Enums](#introducing-enums)

***

### Introducing Tuples

In TypeScript, a tuple is a data structure that allows you to store a fixed number of elements of potentially different types in a specific order. Unlike arrays, where you can have a dynamic number of elements of the same type, tuples provide a way to define a structured collection with a predefined number of elements and specific data types for each element.

Here's an explanation of tuples with code examples:

**Defining Tuples:**

To define a tuple, you specify the types for each element in the order they should appear within square brackets `[]`. You can also use type annotations.

```typescript
// Defining a tuple with two elements: a string and a number
let person: [string, number] = ["John Doe", 30];
```

In this example, `person` is a tuple with two elements: a string representing a name and a number representing an age.

**Accessing Tuple Elements:**

You can access elements in a tuple using numerical indices, similar to arrays.

```typescript
let name: string = person[0]; // Accessing the first element
let age: number = person[1];  // Accessing the second element
```

**Tuple Type Inference:**

TypeScript provides type inference for tuples, meaning it can automatically infer the tuple's type based on its initial values.

```typescript
let coordinates = [50, 60]; // TypeScript infers the type as [number, number]
coordinates[0] = "x";       // Error: Type '"x"' is not assignable to type 'number'.
```

**Tuple Rest Elements:**

You can use the rest element (`...`) to capture multiple values of a specific type in a tuple.

```typescript
let team: [string, number, ...string[]] = ["Team A", 3, "Alice", "Bob", "Charlie"];
```

In this example, `team` is a tuple with a fixed string and number at the beginning, followed by an arbitrary number of string elements.

**Destructuring Tuples:**

You can destructure tuples to extract individual elements easily.

```typescript
let [teamName, teamSize] = team;
console.log(teamName);  // Outputs: "Team A"
console.log(teamSize);  // Outputs: 3
```

Tuples are useful when you want to work with structured data with a known and fixed number of elements, each having a specific type. They can provide type safety and code clarity, especially when dealing with functions or methods that return multiple values in a well-defined order.

***

### Introducing Enums

In TypeScript, an `enum` (short for "enumeration") is a user-defined data type that consists of a set of named values, often referred to as "enumerators" or "members." Enums are a way to create a named collection of related constants, making the code more readable, self-documenting, and type-safe.

Here's an explanation of enums in TypeScript with code examples:

**Defining an Enum:**

You define an enum using the `enum` keyword followed by a name for the enum and a set of named values enclosed in curly braces `{}`.

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

In this example, `Direction` is an enum with four named values: `Up`, `Down`, `Left`, and `Right`. By default, enums are zero-based, so `Up` is assigned a value of `0`, `Down` is `1`, `Left` is `2`, and `Right` is `3`.

**Using Enum Values:**

You can use enum values by referencing them using the enum name followed by a dot `.`.

```typescript
let playerDirection: Direction = Direction.Up;
console.log(playerDirection); // Outputs: 0
```

You can also assign enum values to variables and compare them:

```typescript
if (playerDirection === Direction.Right) {
  console.log("Player is moving right.");
}
```

**Custom Enum Values:**

You can assign custom values to enum members if you want specific numeric or string values.

```typescript
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}
```

In this example, `Color.Red` is `1`, `Color.Green` is `2`, and `Color.Blue` is `3`.

**String Enums:**

Enums can have string values, providing more meaningful names:

```typescript
enum LogLevel {
  Error = "ERROR",
  Warning = "WARNING",
  Info = "INFO",
}
```

**Reverse Mapping:**

Enums in TypeScript provide reverse mapping, allowing you to convert values to their corresponding enum names.

```typescript
let levelName: string = LogLevel.Error;
console.log(levelName); // Outputs: "ERROR"
```

**Iterating Over Enum Values:**

You can iterate over enum values using loops:

```typescript
for (let dir in Direction) {
  if (isNaN(Number(dir))) {
    console.log(dir);
  }
}
```

Enums are a powerful way to define a set of related constants, improving code readability and maintainability. They also help catch type-related errors at compile time, making your code more robust and self-documenting.