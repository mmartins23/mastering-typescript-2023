# Type Narrowing

## Table of Contents

- [Typeof Guards](#typeof-guards)
- [Truthiness Guards](#truthiness-guards)
- [Equality Narrowing](#equality-narrowing)
- [Narrowing With The In Operator](#narrowing-with-the-in-operator)
- [Instanceof Narrowing](#instanceof-narrowing)
- [Working With Type Predicates](#working-with-type-predicates)
- [Discriminated Unions](#discriminated-unions)
- [Exhaustiveness Checks With Never](#exhaustiveness-checks-with-never)


***

### Typeof Guards

Typeof guards in TypeScript are a way to conditionally narrow down the type of a variable based on the `typeof` operator. This is particularly useful when dealing with variables that could have multiple types. The TypeScript compiler leverages typeof guards to provide more accurate type checking. Here's an explanation of your code example:

```typescript
function triple(value: number | string): number | string {
  if (typeof value === "string") {
    return value.repeat(3); // Use `return` to return the modified string
  } else if (typeof value === "number") {
    return value * 3; // Use `return` to return the result of the multiplication
  } else {
    return value; // Return the original value if it's neither a string nor a number
  }
}
```

In this code:

1. `triple` is a function that takes an argument `value` with a type of `number | string`. It means `value` can be either a number or a string.

2. Inside the function, `typeof value` is used in an `if...else if...else` block to determine the type of `value`.

3. If `value` is a string (`typeof value === "string"`), it calls the `repeat` method on the string to repeat it three times, and the result is returned as a string.

4. If `value` is a number (`typeof value === "number"`), it multiplies the number by 3, and the result is returned as a number.

5. If `value` is neither a string nor a number, the `else` block is executed, and the original `value` is returned.

This code illustrates type guards using `typeof` to refine the type of `value` within different branches of the `if...else` statement. TypeScript tracks these type guards and correctly infers the types of `result1` and `result2` based on the conditions.

Usage of the `triple` function:

- When you call `triple("Hello")`, the `typeof value` is `"string," so it repeats the string "Hello" three times and returns it as a string: `"HelloHelloHello"`.

- When you call `triple(5)`, the `typeof value` is `"number," so it multiplies the number 5 by 3 and returns it as a number: `15`.

Typeof guards ensure that the return type of the function matches the determined type, enhancing type safety in TypeScript.


***

### Truthiness Guards

Truthiness guards in TypeScript involve using conditional checks to ensure that a variable or expression evaluates to a truthy value (i.e., a value that is considered as "true" in a boolean context) before performing a specific operation. This technique is particularly useful when working with values that can be of different types or might be null or undefined.

The primary idea behind truthiness guards is to avoid errors that might occur when working with variables that can be falsy (e.g., null, undefined, false, 0, empty string) and may lead to unexpected behavior if not handled properly.

Here's how you can use truthiness guards in TypeScript:

1. Using Conditional Statements:
   You can use `if` statements to check whether a value is truthy before performing an operation. For example:

   ```typescript
   function greet(name: string | null) {
     if (name) {
       console.log(`Hello, ${name}!`);
     } else {
       console.log("Hello, Guest!");
     }
   }

   greet("Alice"); // Output: "Hello, Alice!"
   greet(null);    // Output: "Hello, Guest!"
   ```

   In this example, the `if (name)` check ensures that the `name` variable has a truthy value before printing a greeting.

2. Using Logical Operators:
   You can use logical operators such as `&&` and `||` to perform operations based on the truthiness of a value. For example:

   ```typescript
   function divide(a: number, b: number) {
     const result = (b && a / b) || 0;
     console.log(`Result: ${result}`);
   }

   divide(10, 2);  // Output: "Result: 5"
   divide(8, 0);   // Output: "Result: 0"
   ```

   In this example, the `(b && a / b) || 0` expression checks if `b` is truthy and calculates the division. If `b` is falsy (e.g., zero), it returns zero as the result.

Truthiness guards help prevent runtime errors and improve code robustness by ensuring that variables have valid values before performing operations on them.


The provided code defines a TypeScript function called `printLetters` that accepts a `word` as its parameter. This function prints each letter of the word if it's provided, and it shows an alert if the `word` is null or not provided. Here's an explanation of the code with comments:

```typescript
function printLetters(word: string | null) {
  // Check if the 'word' is null or not provided
  if (!word) {
    alert("There is no letters inside the function");
  } else {
    // If 'word' is not null, split it into individual letters and iterate over them
    word.split('').forEach(w => console.log(w));
  }
}

// Call the 'printLetters' function with a word
printLetters('hello world'); // This will print each letter of 'hello world'

// Call the 'printLetters' function without providing a word
printLetters(); // This will show an alert with the message about no letters
```

In this code:

1. The `printLetters` function takes a parameter `word`, which can be either a string or `null`.

2. Inside the function, it checks whether `word` is falsy (in this case, `null` or undefined) using `if (!word)`. If it's falsy, it shows an alert message indicating that there are no letters.

3. If `word` is not falsy, it proceeds to the `else` block. In this block, it splits the `word` into individual letters using the `split('')` method, and then it uses `forEach` to iterate over each letter. During the iteration, it prints each letter to the console.

4. The function is called twice: once with the word 'hello world,' and once without providing any word. The first call will print each letter of 'hello world,' and the second call will display the alert message.

This code demonstrates how to handle cases when a value might be null or missing, ensuring that the code is robust and doesn't produce unexpected errors.

***

### Equality Narrowing

Equality narrowing in TypeScript is a feature that allows you to narrow down the type of a variable or parameter based on comparisons and checks. Let's explore equality narrowing with a function that takes two parameters:

```typescript
function printIfEqual(value1: string | number, value2: string | number): void {
  if (value1 === value2) {
    // TypeScript knows that value1 and value2 are equal and of the same type here.
    console.log(`${value1} is equal to ${value2}`);
  } else {
    // TypeScript knows that value1 and value2 are not equal or have different types here.
    console.log(`${value1} is not equal to ${value2}`);
  }
}

printIfEqual(5, 5); // TypeScript knows both values are equal and of type number.
printIfEqual("hello", "world"); // TypeScript knows both values are equal and of type string.
printIfEqual(5, "5"); // TypeScript knows the values are not equal or have different types.
```

In this example, `printIfEqual` is a function that takes two parameters, `value1` and `value2`, both of which can be either a string or a number. Inside the function, the `if` statement checks if `value1` is equal to `value2`. TypeScript automatically narrows the types based on this check:

- When `value1` and `value2` are equal and of the same type (e.g., both are numbers or both are strings), TypeScript knows this inside the `if` block. This allows you to safely perform operations or log messages related to equal values.

- When `value1` and `value2` are not equal or have different types, TypeScript knows this inside the `else` block. This allows you to handle cases where the values are not equal or have different types.

Equality narrowing helps you write more type-safe code by automatically inferring narrower types based on your equality checks. It improves code correctness and can prevent runtime errors by ensuring that you work with compatible and equal types.

***

### Narrowing With The In Operator

In TypeScript, you can narrow down the type of a variable using the `in` operator. This operator checks if a property exists within an object and can be used to determine the type of the object based on that property. Let's explore narrowing with the `in` operator with code examples:

```typescript
function printPet(pet: Dog | Cat) {
  if ("bark" in pet) {
    // Narrowed to Dog type if "bark" property exists
    console.log(`This is a dog that barks: ${pet.bark}`);
  } else {
    // Narrowed to Cat type if "bark" property doesn't exist
    console.log(`This is a cat that meows: ${pet.meow}`);
  }
}

interface Dog {
  bark: string;
}

interface Cat {
  meow: string;
}

const dog: Dog = { bark: "Woof!" };
const cat: Cat = { meow: "Meow!" };

printPet(dog); // Outputs: This is a dog that barks: Woof!
printPet(cat); // Outputs: This is a cat that meows: Meow!
```

In this example, we have two interfaces, `Dog` and `Cat`, representing objects with properties specific to dogs and cats. The `printPet` function takes a parameter `pet` that can be either a `Dog` or a `Cat`. Inside the function, we use the `in` operator to check if the property `"bark"` exists within the `pet` object.

- If the `"bark"` property exists, TypeScript narrows down the type of `pet` to `Dog`, and we can safely access the `bark` property.

- If the `"bark"` property doesn't exist, TypeScript narrows down the type of `pet` to `Cat`, and we can safely access the `meow` property.

Narrowing with the `in` operator allows you to work with different object shapes and safely access properties specific to each object type. It helps improve type safety and catch potential errors during development.

***

### Instanceof Narrowing

In TypeScript, you can narrow down the type of an object using the `instanceof` operator. This operator is used to check whether an object is an instance of a particular class or constructor function. When used in conditional statements, it can help narrow the type of an object, making it safer to work with. Let's explore `instanceof` narrowing with code examples:

```typescript
class Animal {
  speak() {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks.");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Cat meows.");
  }
}

function makeSound(animal: Animal) {
  if (animal instanceof Dog) {
    // Narrowed to Dog type if it's an instance of Dog
    animal.bark();
  } else if (animal instanceof Cat) {
    // Narrowed to Cat type if it's an instance of Cat
    animal.meow();
  } else {
    // Animal is of type Animal
    animal.speak();
  }
}

const dog = new Dog();
const cat = new Cat();
const genericAnimal = new Animal();

makeSound(dog); // Outputs: Dog barks.
makeSound(cat); // Outputs: Cat meows.
makeSound(genericAnimal); // Outputs: Animal makes a sound.
```

In this example, we have three classes: `Animal`, `Dog`, and `Cat`. `Dog` and `Cat` extend the `Animal` class, inheriting the `speak` method and adding their specific methods (`bark` and `meow`, respectively).

The `makeSound` function accepts a parameter `animal` of type `Animal`. Inside the function, we use the `instanceof` operator to check the type of `animal`.

- If `animal` is an instance of `Dog`, TypeScript narrows the type to `Dog`, and we can safely call the `bark` method.

- If `animal` is an instance of `Cat`, TypeScript narrows the type to `Cat`, and we can safely call the `meow` method.

- If `animal` is neither a `Dog` nor a `Cat`, it's treated as an `Animal`, and we call the `speak` method.

Narrowing with `instanceof` is particularly useful when dealing with class hierarchies, allowing you to handle objects of specific derived classes differently based on their types. It improves type safety and helps catch potential errors during development.

***

### Working With Type Predicates

Type predicates in TypeScript are a way to narrow down the type of a variable within a conditional block. They help you work with more specific types, making your code more readable and less error-prone. To define a type predicate, you typically create a user-defined type guard function. Let's explore type predicates with code examples:

```typescript
// Type predicate function for checking if a value is a string
function isString(value: any): value is string {
  return typeof value === 'string';
}

// Type predicate function for checking if a value is a number
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

// Using type predicates in a function
function processData(data: string | number) {
  if (isString(data)) {
    // Inside this block, TypeScript knows 'data' is a string
    console.log(`Received a string: ${data.toUpperCase()}`);
  } else if (isNumber(data)) {
    // Inside this block, TypeScript knows 'data' is a number
    console.log(`Received a number: ${data * 2}`);
  } else {
    // Inside this block, TypeScript knows 'data' has some other type (e.g., boolean)
    console.log(`Received data of unknown type: ${data}`);
  }
}

// Usage
processData('Hello, TypeScript'); // Output: Received a string: HELLO, TYPESCRIPT
processData(42); // Output: Received a number: 84
processData(true); // Output: Received data of unknown type: true
```

In this example, we have defined two type predicate functions: `isString` and `isNumber`. These functions use the `value is Type` syntax, where `Type` is the type you want to narrow down to. When these functions return `true`, TypeScript narrows the type of the variable within the conditional block.

In the `processData` function, we take a parameter `data`, which can be either a string or a number. We use the `isString` and `isNumber` type predicates to check the type of `data` inside conditional blocks. TypeScript uses the information from these type predicates to provide accurate type checking and autocompletion within each block.

Using type predicates enhances code readability and helps prevent type-related errors. These predicates can be especially valuable when dealing with union types, where you need to discriminate between the possible types to perform type-specific operations.

***

### Discriminated Unions

Discriminated unions in TypeScript are a way to work with complex types that have a shared, discriminative property. Discriminated unions help you create type-safe code when working with objects that can be of multiple subtypes, but each subtype is distinguishable by a common property. This property is often referred to as the "discriminant."

Here's an explanation with code examples:

Consider a scenario where you're working with shapes that can be circles or rectangles. Each shape has its properties, but you want to have a single type that can represent both circles and rectangles. You can use a discriminated union for this:

```typescript
// Shape interface with a discriminant property
interface Shape {
  kind: 'circle' | 'rectangle'; // Discriminant property
}

// Circle type with its properties
interface Circle extends Shape {
  kind: 'circle'; // Discriminant value
  radius: number;
}

// Rectangle type with its properties
interface Rectangle extends Shape {
  kind: 'rectangle'; // Discriminant value
  width: number;
  height: number;
}

// Function that computes the area of a shape
function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      // Inside this block, TypeScript knows that 'shape' is a 'Circle'
      return Math.PI * shape.radius ** 2;
    case 'rectangle':
      // Inside this block, TypeScript knows that 'shape' is a 'Rectangle'
      return shape.width * shape.height;
    default:
      return 0;
  }
}

// Usage
const myCircle: Circle = { kind: 'circle', radius: 5 };
const myRectangle: Rectangle = { kind: 'rectangle', width: 4, height: 3 };

console.log(getArea(myCircle)); // Output: 78.53981633974483
console.log(getArea(myRectangle)); // Output: 12
```

In this example:

1. We define the `Shape` interface with a `kind` property, which serves as the discriminant. It can have the values `'circle'` or `'rectangle'`.

2. We create two subtypes, `Circle` and `Rectangle`, each of which extends the `Shape` interface. In each subtype, we specify the discriminant value corresponding to the type. For the `Circle`, it's `'circle'`, and for the `Rectangle`, it's `'rectangle'`.

3. The `getArea` function takes a `Shape` as an argument. Inside the function, we use a `switch` statement to check the `kind` property of the shape to determine its subtype. TypeScript infers the correct type inside each case branch, ensuring type safety.

4. When we use `getArea` with a `Circle`, TypeScript knows that `shape` is a `Circle` inside the `'circle'` case block and similarly for `Rectangle`.

Discriminated unions are particularly useful when working with complex data structures, such as JSON payloads from APIs, where you want to safely handle different types of objects within the same structure. They help ensure type safety and make your code more maintainable.

***

### Exhaustiveness Checks With Never

Exhaustiveness checks with `never` in TypeScript are used in conjunction with discriminated unions to ensure that you've handled all possible cases when working with union types. When you have a discriminated union, TypeScript can help you detect situations where you haven't accounted for all the possible subtypes, providing safety against runtime errors. To make exhaustiveness checks, you typically use a `switch` statement.

Here's an explanation with code examples:

Let's revisit the discriminated union example with shapes:

```typescript
// Shape interface with a discriminant property
interface Shape {
  kind: 'circle' | 'rectangle'; // Discriminant property
}

// Circle type with its properties
interface Circle extends Shape {
  kind: 'circle'; // Discriminant value
  radius: number;
}

// Rectangle type with its properties
interface Rectangle extends Shape {
  kind: 'rectangle'; // Discriminant value
  width: number;
  height: number;
}

// Function that computes the area of a shape
function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'rectangle':
      return shape.width * shape.height;
    default:
      // TypeScript knows this branch should never be reached
      const exhaustivenessCheck: never = shape;
      return exhaustivenessCheck;
  }
}
```

In this example:

1. We define a `Shape` interface with a discriminant property, `kind`.

2. We create `Circle` and `Rectangle` subtypes with their specific properties.

3. The `getArea` function takes a `Shape` and uses a `switch` statement to handle the cases of `kind` ('circle' and 'rectangle').

4. At the end of the `switch`, we include a `default` case. However, since we're using a discriminated union and handling all cases, TypeScript knows that this branch should never be reached. It assigns `shape` to a variable of type `never`, called `exhaustivenessCheck`, which will trigger a compile-time error if we ever add a new subtype to the union without handling it in the `switch`.

This is valuable because it ensures that your code is always up to date with the current set of subtypes and prevents accidental omissions when dealing with union types. If you later add a new shape subtype without handling it in the `switch`, TypeScript will report an error at compile time.

***