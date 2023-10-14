# Generics

## Table of Contents

- [Generics](#generics)
- [Generics Code Example](#generics-code-example)

***

### Generics

Generics in TypeScript provide a way to create reusable components, functions, or classes that can work with different types while maintaining type safety. They allow you to specify types dynamically, making your code more flexible and reusable. Here's an explanation of generics with code examples:

### 1. Generic Functions:

```typescript
// A simple generic function to echo the input value
function echo<T>(value: T): T {
  return value;
}

// Usage with different types
const result1: number = echo(42);
const result2: string = echo("Hello, TypeScript");

console.log(result1); // 42
console.log(result2); // "Hello, TypeScript"
```

In the above example, the `echo` function uses the generic type `T`. It can be called with different types of values, and TypeScript infers and enforces the return type.

### 2. Generic Classes:

```typescript
// A generic class for a simple key-value pair
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

// Usage with different types
const pair1 = new KeyValuePair<number, string>(1, "One");
const pair2 = new KeyValuePair<string, boolean>("isTrue", true);

console.log(pair1.key, pair1.value); // 1, "One"
console.log(pair2.key, pair2.value); // "isTrue", true
```

In this example, `KeyValuePair` is a generic class that can store key-value pairs with different types.

### 3. Generic Interfaces:

```typescript
// A generic interface for a simple logger
interface Logger<T> {
  log(message: T): void;
}

// Implementation with different types
class ConsoleLogger implements Logger<string> {
  log(message: string) {
    console.log(message);
  }
}

const logger = new ConsoleLogger();
logger.log("Logging a message"); // "Logging a message"
```

Here, `Logger` is a generic interface, and `ConsoleLogger` implements it with a specific type for the message parameter.

### 4. Generic Constraints:

You can add constraints to restrict the types that can be used with generics.

```typescript
// A generic function with a constraint
function length<T extends { length: number }>(arg: T): number {
  return arg.length;
}

const strLength = length("Hello"); // OK
const arrLength = length([1, 2, 3]); // OK
const numLength = length(42); // Error: 'number' does not have 'length' property
```

In this example, `T` is constrained to types that have a `length` property, ensuring type safety.

Generics are a powerful feature in TypeScript that can help you write more flexible and reusable code while maintaining strong type checking. They are commonly used in libraries and frameworks to provide generic solutions for various types of data and operations.

***

### Generics Code Example

The provided code example demonstrates the use of generics in TypeScript for creating a `useState` function that allows you to manage state with type safety. Let's break down the code and add comments to explain it:

```typescript
/*
Docs for generics: https://www.typescriptlang.org/docs/handbook/generics.html

Some patterns named for generics
S => State
T => Type
K => Key
V => Value
E => Element 
*/

// Define a union type that can be either number or string
type numberOrString = number | string;

// Create a generic function called useState with a default generic type of string
function useState<S extends numberOrString = string>() {
  let state: S;

  // Define a function to get the current state
  function getState() {
    return state;
  }

  // Define a function to set a new state
  function setState(newState: S) {
    state = newState;
  }

  // Return an object with functions to get and set state
  return { getState, setState };
}

// Create a state variable myState with a specific type of number
const myState = useState<number>();

// Set the state to a number
myState.setState(1);

// Get and log the current state (number)
console.log(myState.getState());

// Attempting to set the state to a string results in a type error
// myState.setState("World"); <== Error because it changes the previously set type (number)

// If the <TYPE> is not provided when using useState, it defaults to string
const otherState = useState();
otherState.setState("Hello");
console.log(otherState.getState());
```

In this code:

1. Generics are used to make the `useState` function flexible regarding the type of state it manages.
2. `numberOrString` is a type alias representing a value that can be either a number or a string.
3. The `useState` function is defined with a generic type `S`, which has a default type of `string`. This means if no type is explicitly provided when calling `useState()`, it defaults to string.
4. The function includes `getState` and `setState` methods for retrieving and updating the state.
5. A specific state variable `myState` is created with a type of `number`.
6. The code demonstrates that when `myState` is used, it enforces the use of numbers for its state. Attempting to set a string state would result in a type error.
7. A second state variable `otherState` is created without specifying the type, so it defaults to `string`.
8. This showcases the default type behavior of the `useState` function, allowing you to set and get a state of type string.

This example demonstrates how TypeScript generics can make your code more flexible while providing strong type checking.

***
