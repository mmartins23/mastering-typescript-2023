# Union Types

## Table of Contents

- [Introducing Union Types](#introducing-union-types)
- [Type Narrowing](#type-narrowing)
- [Literal Types](#literal-types)

***

### Introducing Union Types

Union types in TypeScript allow you to specify that a value can have one of several possible types. They provide flexibility when a variable or parameter can accept different types. Here are some code examples to introduce union types:

**Example 1: Basic Union Types**

You can define a variable that can accept values of multiple types using a union type.

```typescript
// A variable that can be a string or a number
let value: string | number;

value = "Hello, TypeScript"; // Valid
value = 42; // Valid
value = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
```

In this example, `value` can be assigned either a string or a number but not other types.

**Example 2: Function Parameters with Union Types**

Union types are useful for function parameters that can accept different input types.

```typescript
function displayValue(value: string | number) {
  console.log(value);
}

displayValue("Hello, TypeScript"); // Valid
displayValue(42); // Valid
displayValue(true); // Error: Type 'boolean' is not assignable to type 'string | number'.
```

The `displayValue` function accepts either a string or a number as its parameter.

**Example 3: Using Union Types with Arrays**

Union types can be used with arrays to specify that an array can contain elements of different types.

```typescript
let mixedArray: (string | number)[] = ["apple", 42, "banana", 7];
```

In this example, `mixedArray` can contain both strings and numbers.

**Example 4: Union Types in Object Properties**

You can use union types to specify that an object property can have different types.

```typescript
type Person = {
  name: string;
  age: number | string;
};

const person: Person = {
  name: "Alice",
  age: 30,
};

const anotherPerson: Person = {
  name: "Bob",
  age: "Unknown",
};
```

In this example, the `age` property in the `Person` type can be a number or a string.

Union types provide flexibility in handling different types of data within TypeScript, making your code more adaptable and robust.

***

### Type Narrowing

Type narrowing in TypeScript allows you to narrow down the possible types of a variable within a specific code block. This is particularly useful when you're working with union types and want to perform operations that are specific to a particular type within that union. Type narrowing helps you ensure that your code is type-safe and avoids runtime errors.

Here's an explanation of type narrowing with code examples:

**Using Type Guards:**

Type narrowing is often achieved using type guards. Type guards are functions or checks that determine the actual type of a value. Some common type guards include `typeof`, `instanceof`, and custom functions that perform checks based on your application's logic.

```typescript
// Define a union type
type MyType = string | number;

// Function to perform type narrowing using typeof
function printValue(value: MyType) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // Here, value is narrowed to string
  } else {
    console.log(value.toFixed(2));   // Here, value is narrowed to number
  }
}

printValue("hello"); // Output: "HELLO"
printValue(3.14159); // Output: 3.14
```

In this example, `typeof value === "string"` and `typeof value === "number"` are type guards that narrow down the possible types of the `value` parameter.

**Custom Type Guards:**

You can create custom type guards using functions. These functions return a boolean indicating whether the value is of a particular type.

```typescript
// Custom type guard for checking if a value is an array
function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

const data: string[] | number[] = ["apple", "banana"];

if (isArray(data)) {
  console.log(data.join(", ")); // Here, data is narrowed to string[]
} else {
  console.log(data.reduce((a, b) => a + b, 0)); // Here, data is narrowed to number[]
}
```

In this example, the `isArray` function acts as a type guard that checks if a value is an array. Depending on the result of the check, the `data` variable is narrowed to either `string[]` or `number[]`.

Type narrowing is essential for making your code more precise and avoiding type-related runtime errors when dealing with union types. It allows you to leverage the strengths of TypeScript's static typing while working with values that can have multiple potential types.


***

### Literal Types

Literal types in TypeScript allow you to specify exact values that a variable, parameter, or property can have. Literal types restrict the set of possible values to a specific, predefined set of values. They are often used to ensure that a variable only accepts a certain set of constant values.

Here's an explanation of literal types with code examples:

**String Literal Types:**

```typescript
// Defining a string literal type
let status: "success" | "error";

// Assigning values to a variable with string literal type
status = "success"; // Valid
status = "error";   // Valid
status = "warning"; // Error: Type '"warning"' is not assignable to type '"success" | "error"'.
```

In this example, `status` can only hold the values `"success"` or `"error"`. Any other string value assignment will result in a TypeScript error.

**Numeric Literal Types:**

```typescript
// Defining a numeric literal type
let score: 0 | 1 | 2 | 3;

// Assigning values to a variable with numeric literal type
score = 0; // Valid
score = 1; // Valid
score = 2; // Valid
score = 4; // Error: Type '4' is not assignable to type '0 | 1 | 2 | 3'.
```

Here, `score` can only hold the values 0, 1, 2, or 3.

**Boolean Literal Types:**

```typescript
// Defining a boolean literal type
let isDone: true | false;

// Assigning values to a variable with boolean literal type
isDone = true;  // Valid
isDone = false; // Valid
isDone = 1;     // Error: Type '1' is not assignable to type 'true | false'.
```

`isDone` can only be `true` or `false`.

**Literal Types with Object Properties:**

You can also use literal types with object properties:

```typescript
type Color = "red" | "green" | "blue";

let primaryColor: Color;

primaryColor = "red";   // Valid
primaryColor = "green"; // Valid
primaryColor = "pink";  // Error: Type '"pink"' is not assignable to type 'Color'.
```

Here, `primaryColor` can only be one of the specified colors.

Literal types are valuable for cases where you want to explicitly specify and enforce certain constant values in your code. They provide compile-time type checking to ensure that your code is less error-prone and adheres to strict constraints.