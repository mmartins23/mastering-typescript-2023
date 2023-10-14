# Functions

## Table of Contents

- [Function Parameter Annotations](#function-parameter-annotations)
- [More On Function Parameter Annotations](#more-on-function-parameter-annotations)
- [Working With Default Parameters](#working-with-default-parameters)
- [Return Type Annotations](#return-type-annotations)
- [Anonymous Function Contextual Typing](#anonymous-function-contextual-typing)
- [The Void Type](#the-void-type)
- [The Never Type](#the-never-type)

***

### Function Parameter Annotations

Function parameter annotations in TypeScript allow you to specify the expected data types for function parameters. These annotations provide type checking, making your code more robust and self-documenting. Here are two code examples, one for a `square` function and another for a `greet` function, both demonstrating the use of parameter annotations:

**Example 1: `square` Function**

```typescript
// Function with parameter annotations
function square(number: number): number {
  return number * number;
}

const result = square(5); // Result is inferred as a number
console.log(`Square of 5 is ${result}`); // Output: Square of 5 is 25
```

In this example:

- The `square` function takes one parameter named `number`.
- The `number` parameter is annotated with `: number`, specifying that it should be of type `number`.
- The function returns a value of type `number`.

Type annotations for the function parameters ensure that only numeric values are accepted, and the result is also correctly inferred as a number.

**Example 2: `greet` Function**

```typescript
// Function with parameter annotations
function greet(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

const message = greet("Alice", 30); // Result is inferred as a string
console.log(message); // Output: Hello, Alice! You are 30 years old.
```

In this example:

- The `greet` function has two parameters: `name` (of type `string`) and `age` (of type `number`).
- The function returns a value of type `string`.

By adding parameter annotations, TypeScript enforces that the function is called with the correct types of arguments, making it clear to both developers and the TypeScript compiler what to expect. This helps catch type-related errors early in the development process and provides self-documentation for the code.

***

### More On Function Parameter Annotations

Function parameter annotations in TypeScript are used to specify the expected data types for function parameters, and they can also provide additional information about the function's parameter list. These annotations help TypeScript ensure type correctness and provide documentation for developers using the function.

The order of parameter annotations in a function is significant because it determines the expected order of arguments when the function is called. It's essential to match the order of parameter annotations with the order of the arguments provided during the function call.

Here's a more detailed explanation of function parameter annotations and the significance of parameter order:

1. **Parameter Data Types**:

   Parameter annotations specify the expected data types for each parameter. For example:

   ```typescript
   function add(a: number, b: number): number {
     return a + b;
   }
   ```

   In the `add` function, the parameter `a` is annotated with `number`, indicating that it should receive a numeric value. Similarly, `b` is annotated as `number`.

2. **Parameter Order**:

   The order of parameter annotations must match the order of the arguments when calling the function. In the `add` function, the first argument provided will be assigned to `a`, and the second argument to `b`.

   ```typescript
   const result = add(3, 5); // a=3, b=5
   ```

   If you were to call the function with arguments in the wrong order, TypeScript would raise a type error.

By using function parameter annotations, you make your code more type-safe and self-documenting. Developers can clearly understand the expected arguments and their types, and TypeScript helps catch type-related errors early, ensuring that function calls adhere to the specified parameter order and types.

***

### Working With Default Parameters

Default parameters in TypeScript allow you to assign default values to function parameters. If a function is called without providing a value for a parameter, the default value will be used. This feature is helpful for making your functions more flexible and preventing errors when some arguments are missing. Here's how to work with default parameters in TypeScript:

```typescript
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

const message1 = greet("Alice"); // Uses the default greeting
console.log(message1); // Output: "Hello, Alice!"

const message2 = greet("Bob", "Hi"); // Overrides the default greeting
console.log(message2); // Output: "Hi, Bob!"
```

In the example above:

1. The `greet` function takes two parameters: `name` and `greeting`.

2. The `greeting` parameter has a default value of "Hello". If the `greeting` argument is not provided when calling the function, the default value is used.

3. When you call `greet("Alice")`, the default greeting is used, resulting in "Hello, Alice!"

4. You can also override the default value by providing a different `greeting` argument when calling the function. For example, `greet("Bob", "Hi")` produces "Hi, Bob!".

Default parameters are useful for providing sensible defaults, making your functions more user-friendly, and reducing the need for explicit undefined checks.


***

### Return Type Annotations

Return type annotations in TypeScript are used to specify the expected data type of a function's return value. Here's a concise explanation:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

In this example:

- `add` takes two parameters (`a` and `b`) of type `number`.
- The return type annotation `: number` specifies that the function returns a numeric value.

Return type annotations enhance code clarity and type safety, although they are not mandatory when TypeScript can infer the return type.


***

### Anonymous Function Contextual Typing

Anonymous function contextual typing in TypeScript allows you to write concise and readable code when using anonymous functions, as TypeScript automatically infers the parameter types based on the context in which the function is used. This feature enhances code quality and reduces the need for explicit type annotations, making your code more maintainable and readable.

Suppose you have an array of colors and you want to filter them to create a new array containing only the colors that start with the letter "B." You can achieve this using the `filter` method with an anonymous function.

Here's how it works:

```typescript
const colors: string[] = ["Red", "Blue", "Green", "Yellow", "Brown"];

// Using the filter method with an anonymous function
const filteredColors = colors.filter(color => color.startsWith("B"));

console.log(filteredColors); // Output: ["Blue", "Brown"]
```

In this example:

- We have an array `colors` containing strings.

- The `filter` method is used to create a new array `filteredColors` that includes only the colors that start with the letter "B."

- Inside the `filter` method, we provide an anonymous function as a callback. TypeScript uses contextual typing to infer the parameter type for this anonymous function. In this case, it infers that the parameter `color` should have the type `string` because it is operating on an array of strings.

- The `startsWith` method is used on the `color` parameter, which is a string, to filter colors based on the condition.

This example demonstrates how TypeScript's contextual typing allows you to write concise and readable code. The type of the parameter `color` is automatically inferred based on the array being filtered, which contains strings.

Contextual typing is especially useful when working with arrays, callbacks, and anonymous functions because it simplifies the need for explicit type annotations while maintaining type safety.

***

### The Void Type

In TypeScript, the `void` type represents the absence of a value or the lack of a return value in a function. It's commonly used for functions that perform actions but don't produce a result. Here's a short explanation with code examples:

**Short Explanation:**
- `void` indicates that a function does not return any value.
- It's commonly used for functions that perform side effects, like printing to the console or modifying data, rather than computing a result.

**Code Examples:**

1. Function without a return value:

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

In this example, the `logMessage` function takes a `message` parameter and logs it to the console. It's annotated with `: void` to indicate that it doesn't return a value.

2. Function without an explicit return statement:

```typescript
function noReturnValue(): void {
  // This function doesn't have a return statement.
}
```

The `noReturnValue` function doesn't return a value explicitly. Therefore, it's annotated as returning `void` by TypeScript.
***

### The Never Type

In TypeScript, the `never` type represents values that never occur or functions that never return. It's often used in scenarios where code should not execute further due to an exceptional condition. Here's a short explanation with code examples:

**Short Explanation:**
- `never` represents values or functions that never occur or return.
- It's typically used for situations like infinite loops, throwing errors, or functions that can't reach a return statement.

**Code Examples:**

1. Function that never returns:

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

The `throwError` function throws an error and never reaches a return statement. It's annotated with `: never`.

2. Infinite loop:

```typescript
function infiniteLoop(): never {
  while (true) {
    // This loop never exits.
  }
}
```

The `infiniteLoop` function creates an infinite loop, causing the function to never return.

3. Type guarding with `never`:

```typescript
function assertNever(x: never): never {
  throw new Error("Unexpected value: " + x);
}

function processValue(val: string | number) {
  if (typeof val === "string") {
    // Handle string case
  } else if (typeof val === "number") {
    // Handle number case
  } else {
    assertNever(val); // Ensures exhaustive checking
  }
}
```

The `assertNever` function is used to ensure exhaustive checking in a type guard, preventing unexpected values from slipping through. If it's called, it throws an error and never returns.
***