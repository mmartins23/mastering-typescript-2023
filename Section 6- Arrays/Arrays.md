# Arrays

## Table of Contents

- [Working With Array Types](#working-with-array-types)
- [Multidimensional Arrays](#multidimensional-arrays)

***

### Working with Arrays Types

In TypeScript, arrays are ordered lists of elements that can be of the same or different data types. You can define arrays using various syntaxes, including generic array types and array literals. Here are some code examples to illustrate working with arrays in TypeScript:

**1. Basic Array:**

```typescript
// Defining an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Accessing array elements
const firstNumber: number = numbers[0]; // Accessing the first element (1)
console.log(firstNumber);
```

**2. Array with Mixed Data Types:**

```typescript
// Defining an array with mixed data types
const mixedArray: (string | number | boolean)[] = ['Hello', 42, true];

// Accessing array elements
const secondElement: string | number | boolean = mixedArray[1]; // Accessing the second element (42)
console.log(secondElement);
```

**3. Array Methods:**

```typescript
// Using array methods
const fruits: string[] = ['apple', 'banana', 'cherry'];

// Adding an element to the end of the array
fruits.push('date');

// Removing the last element from the array
fruits.pop();

// Checking if an element exists in the array
const hasBanana: boolean = fruits.includes('banana');

console.log(fruits);     // ['apple', 'banana']
console.log(hasBanana);  // true
```

**4. Generic Array Type:**

```typescript
// Using generic array type
function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

const numbersArray: number[] = [1, 2, 3, 4, 5];
const reversedNumbers: number[] = reverseArray(numbersArray);

console.log(reversedNumbers); // [5, 4, 3, 2, 1]
```

**5. Iterating Over Arrays:**

```typescript
// Iterating over an array
const colors: string[] = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color);
}

// Using forEach
colors.forEach((color) => {
  console.log(color);
});
```

These examples demonstrate how to create, access, manipulate, and iterate through arrays in TypeScript. Arrays are a fundamental data structure that TypeScript enhances with type annotations and checking, providing greater type safety and code clarity.

***

### Multidimensional Arrays

In TypeScript, multidimensional arrays are arrays of arrays, which allow you to create matrices or grids of data. You can think of them as an array where each element is also an array. Multidimensional arrays are useful for representing two-dimensional data structures, such as grids, tables, or matrices. Here's how you can work with multidimensional arrays in TypeScript:

**1. Creating a Multidimensional Array:**

```typescript
// Define a 2D array (matrix)
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

In this example, `matrix` is a 2D array with three rows and three columns.

**2. Accessing Elements:**

You can access elements in a multidimensional array using two sets of square brackets:

```typescript
// Accessing elements
const element = matrix[1][2]; // Accessing the element in the second row and third column (6)
console.log(element);
```

**3. Iterating Over a Multidimensional Array:**

You can use nested loops to iterate through the elements of a multidimensional array:

```typescript
// Iterating through a 2D array
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(matrix[row][col]);
  }
}
```

**4. Initializing a Multidimensional Array:**

You can initialize a multidimensional array with default values:

```typescript
// Initialize a 3x3 array with zeros
const zerosMatrix: number[][] = Array.from({ length: 3 }, () => Array(3).fill(0));
```

This code creates a 3x3 array filled with zeros.

**5. Using Type Annotations:**

You can use type annotations to specify the types of elements in a multidimensional array:

```typescript
// Define a 2D array with type annotations
const chessboard: string[][] = [
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  // ...
];
```

In this example, `chessboard` is a 2D array of strings.

Multidimensional arrays are versatile for representing structured data and are commonly used in various applications, such as games, simulations, and data analysis. They provide a convenient way to work with grid-like data structures.