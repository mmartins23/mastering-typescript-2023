# Classes in TS

## Table of Contents

- [Using TypeScript Modules](#using-typeScript-modules)
- [Import and Export Syntax In Depth](#import-and-export-syntax-in-depth)
- [Importing Types](#importing-types)

***

### Using TypeScript Modules

In TypeScript, modules provide a way to organize code into reusable and manageable units. TypeScript supports various module systems, but one of the most commonly used ones is ES6 modules. Here's an explanation with code examples using TypeScript modules:

**1. Creating a Module:**

Let's create a simple module to represent a geometric shape:

```typescript
// shapes.ts
export interface Shape {
  calculateArea(): number;
}

export class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

export class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  calculateArea() {
    return this.width * this.height;
  }
}
```

In this example, we have defined a module in the `shapes.ts` file that exports an interface `Shape`, and two classes, `Circle` and `Rectangle`, which implement the `Shape` interface.

**2. Importing Modules:**

Now, let's create another TypeScript file and import the module we defined:

```typescript
// main.ts
import { Shape, Circle, Rectangle } from './shapes';

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(`Circle Area: ${circle.calculateArea()}`);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
```

Here, we import the `Shape`, `Circle`, and `Rectangle` symbols from the `shapes.ts` module and use them in our `main.ts` file.

**3. Compiling and Running:**

To compile and run this TypeScript code, you'll need a TypeScript compiler. Assuming you have TypeScript installed, you can run the following commands:

```bash
tsc --target ES6 shapes.ts  # Compile the shapes.ts module
tsc --target ES6 main.ts    # Compile the main.ts file
node main.js                # Run the compiled JavaScript
```

**4. Output:**

The output of running `main.js` should be as follows:

```
Circle Area: 78.53981633974483
Rectangle Area: 24
```

In this example:

- We created a module in `shapes.ts` that defines an interface and classes.
- In `main.ts`, we imported symbols from the `shapes.ts` module and used them to create and calculate areas of shapes.

By organizing your code into modules, you can keep your codebase clean, maintainable, and reusable. You can also easily share and import code between different parts of your application or between different projects.

***

### Import and Export Syntax In Depth

In TypeScript, the `import` and `export` statements are used to manage modules, allowing you to create, import, and export pieces of code across different files and projects. Let's dive deeper into the `import` and `export` syntax with code examples and comments:

**1. Exporting from a Module:**

In this example, we'll create a module that exports variables, functions, and classes:

```typescript
// shapes.ts
export const PI = 3.14159;

export function calculateCircleArea(radius: number): number {
  return PI * radius * radius;
}

export class Rectangle {
  constructor(private width: number, private height: number) {}

  calculateArea(): number {
    return this.width * this.height;
  }
}
```

Here, we've exported a constant `PI`, a function `calculateCircleArea`, and a class `Rectangle`.

**2. Importing from a Module:**

Now, let's import and use these exported elements in another file:

```typescript
// main.ts
import { PI, calculateCircleArea, Rectangle } from './shapes';

const circleArea = calculateCircleArea(5);
const rectangle = new Rectangle(4, 6);

console.log(`Circle Area: ${circleArea}`);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
```

In the `main.ts` file, we import the `PI`, `calculateCircleArea`, and `Rectangle` symbols from the `shapes.ts` module and use them.

**3. Default Exports:**

You can also use a default export from a module. Let's modify the `shapes.ts` module to export a class as the default:

```typescript
// shapes.ts
export const PI = 3.14159;

export function calculateCircleArea(radius: number): number {
  return PI * radius * radius;
}

export default class Circle {
  constructor(private radius: number) {}

  calculateArea(): number {
    return PI * this.radius * this.radius;
  }
}
```

Now, in the `main.ts` file, you can import the default export without using curly braces:

```typescript
import Circle from './shapes';

const circle = new Circle(5);
console.log(`Circle Area: ${circle.calculateArea()}`);
```

**4. Aliases in Imports:**

You can also use aliases for imported symbols. For example:

```typescript
import { PI as CirclePI } from './shapes';
```

Here, we've aliased the imported `PI` constant as `CirclePI`.

**5. Re-Exporting:**

In TypeScript, you can re-export elements from one module in another. For instance:

```typescript
// main.ts
export { PI, calculateCircleArea } from './shapes';
```

This `main.ts` file re-exports the `PI` and `calculateCircleArea` symbols from the `shapes.ts` module. You can then import them from `main.ts`.

**6. Importing the Entire Module:**

To import an entire module, you can use the `* as` syntax:

```typescript
import * as Shapes from './shapes';
```

Then, you can access the exported symbols as properties of `Shapes` (e.g., `Shapes.PI`, `Shapes.calculateCircleArea`).

These are the fundamental concepts of importing and exporting in TypeScript. It allows you to organize, share, and reuse code effectively.

***

### Importing Types

In TypeScript, you can import types from other modules, making it easy to reuse complex type definitions across your project. Here's how to import types with code examples:

**1. Exporting a Type:**

Let's create a module that exports a custom type:

```typescript
// types.ts
export type Point = {
  x: number;
  y: number;
};
```

In this example, we've defined a custom type `Point`.

**2. Importing Types:**

You can import this type in another module and use it:

```typescript
// main.ts
import { Point } from './types';

const point: Point = { x: 10, y: 20 };
console.log(`Point: (${point.x}, ${point.y})`);
```

In the `main.ts` file, we import the `Point` type from the `types.ts` module and use it to define a variable.

**3. Default Type Exports:**

You can also export a type as the default export from a module:

```typescript
// types.ts
export default type Point = {
  x: number;
  y: number;
};
```

Then, in the `main.ts` file, you can import the default type like this:

```typescript
// main.ts
import Point from './types';

const point: Point = { x: 10, y: 20 };
console.log(`Point: (${point.x}, ${point.y})`);
```

This is useful when you have a single main type to export from a module.

**4. Re-Exporting Types:**

You can re-export types from one module in another:

```typescript
// main.ts
export { Point } from './types';
```

In this case, you re-export the `Point` type from the `types.ts` module, and you can then import it from `main.ts`.

**5. Using Aliases:**

You can use aliases when importing types to make your code more readable:

```typescript
import { Point as MyPoint } from './types';

const point: MyPoint = { x: 10, y: 20 };
console.log(`Point: (${point.x}, ${point.y})`);
```

Here, we've aliased the `Point` type as `MyPoint` for clarity.

Importing types in TypeScript allows you to create clear and reusable type definitions in one place and use them throughout your project. It's especially helpful when working with complex data structures and APIs.