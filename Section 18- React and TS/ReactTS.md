# React and TS

## Table of Contents

- [Create React App With TypeScript](#create-react-app-with-typeScript)
- [Creating Components](#creating-components)
- [Props With TypeScript](#props-with-typescript)
- [useState With TypeScript](#usestate-with-typescript)
- [useRef With TypeScript](#useref-with-typescript)


***

### Create React App With TypeScript

Sure, here are the simplified steps to create a React app with TypeScript, excluding the Node.js installation and deployment:

**Step 1: Install Create React App with TypeScript**

Open your terminal and run the following command to create a React app with TypeScript:

```bash
npx create-react-app my-ts-app --template typescript
```

Replace `my-ts-app` with the desired name for your app. The `--template typescript` flag specifies that you want to use TypeScript.

**Step 2: Navigate to Your Project**

Change to your project's directory:

```bash
cd my-ts-app
```

**Step 3: Start the Development Server**

To launch the development server, run:

```bash
npm start
```

Your React app with TypeScript is now up and running. You can begin developing your application using TypeScript's features for strong typing and improved tooling.


***

### Creating Components

**Step 1: Set Up Your React App**
Create a new React app with TypeScript.

**Step 2: Create a TypeScript Component**

Let's create a functional component using a normal function:

```tsx
// components/Message.tsx

import React from 'react';

interface MessageProps {
  text: string;
}

function Message({ text }: MessageProps): JSX.Element {
  return <div>{text}</div>;
}

export default Message;
```

In this example, we've defined a functional component `Message` using a regular function. It takes a `text` prop of type `string`, and we use the `MessageProps` interface to specify the prop's type.

**Step 3: Use the Component in Your App**

Now, you can use the `Message` component in your application:

```tsx
// App.tsx

import React from 'react';
import Message from './components/Message';

function App() {
  return (
    <div>
      <Message text="Hello, World!" />
      <Message text="Welcome to TypeScript!" />
    </div>
  );
}

export default App;
```

**Step 4: Running Your App**
You can run your app using `npm start` or your preferred method.

This example demonstrates how to create a functional component in TypeScript using `JSX.Element` with a regular function. The key is to specify the return type of your component as `JSX.Element`.


***

In TypeScript, props are used to pass data from a parent component to a child component. You define the structure of the props using interfaces, ensuring type safety in your React components. Here's an explanation of props in TypeScript with code examples.

**Step 1: Set Up Your React App**

Create a new React app with TypeScript.

**Step 2: Define a Props Interface**

Start by defining an interface for your component's props. In this example, we'll create a simple `Message` component that takes a `text` prop.

```tsx
// components/Message.tsx

import React from 'react';

interface MessageProps {
  text: string;
}
```

The `MessageProps` interface specifies that the `Message` component expects a prop called `text`, which is of type `string`.

**Step 3: Create a Component**

Now, create your functional component using the defined props interface:

```tsx
// components/Message.tsx

import React from 'react';

interface MessageProps {
  text: string;
}

function Message(props: MessageProps): JSX.Element {
  return <div>{props.text}</div>;
}
```

### Props With TypeScript

In the `Message` component, we receive the `MessageProps` as the `props` argument in the function. We can access the `text` prop using `props.text` and render it within the component.

**Step 4: Use the Component with Props**

You can use the `Message` component in your application, passing the `text` prop:

```tsx
// App.tsx

import React from 'react';
import Message from './components/Message';

function App() {
  return (
    <div>
      <Message text="Hello, World!" />
      <Message text="Welcome to TypeScript!" />
    </div>
  );
}

export default App;
```

In this example, we use the `Message` component and provide the `text` prop with different values.

**Step 5: Running Your App**

You can run your app using `npm start` or your preferred method.

This example demonstrates how to define and use props with TypeScript in a React component. The use of interfaces for props helps ensure type safety and provides clear documentation for your components.


***

### useState With TypeScript

In TypeScript, when you use React's `useState` hook, it's important to provide type information for the state variable and the function that updates it. Here's an explanation of how to use `useState` with TypeScript along with a code example:

**Step 1: Set Up Your React App**

First, make sure you have a TypeScript-enabled React app set up. You can use a tool like Create React App with TypeScript support or configure TypeScript manually in your project.

**Step 2: Define the State Type**

Start by defining a type for your state variable. You can use TypeScript's built-in types or create custom types. In this example, we'll use a simple counter:

```tsx
// components/Counter.tsx

import React, { useState } from 'react';

type CounterState = number;
```

Here, we've defined a `CounterState` type, which is just a number representing the counter's value.

**Step 3: Create a Component with useState**

Now, create your functional component using the `useState` hook and specify the state type:

```tsx
// components/Counter.tsx

import React, { useState } from 'react';

type CounterState = number;

function Counter() {
  const [count, setCount] = useState<CounterState>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

In this component, we use the `useState` hook to initialize the `count` state variable with a default value of `0`. We explicitly provide the `CounterState` type to the `useState` hook to ensure type safety.

**Step 4: Use the Component**

You can use the `Counter` component in your application:

```tsx
// App.tsx

import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;
```

**Step 5: Running Your App**

You can run your app using `npm start` or your preferred method.

This example demonstrates how to use the `useState` hook with TypeScript. Providing type information for the state variable ensures type safety, and you can easily work with React state in a strongly typed manner.


***

### useRef With TypeScript

In TypeScript, you can use the `useRef` hook to create a mutable ref object that can hold a reference to a DOM element or any other mutable value. Here's an explanation of how to use `useRef` with TypeScript along with a code example:

**Step 1: Set Up Your React App**

First, make sure you have a TypeScript-enabled React app set up. You can use a tool like Create React App with TypeScript support or configure TypeScript manually in your project.

**Step 2: Import `useRef`**

Import the `useRef` hook from React in your TypeScript component:

```tsx
import React, { useRef } from 'react';
```

**Step 3: Create a Component**

Define your functional component, and within it, create a ref using the `useRef` hook. Specify the type of the ref variable:

```tsx
function MyComponent() {
  // Create a ref for an input element
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    // Access and manipulate the DOM element using ref.current
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

In this example, we created a ref named `inputRef`, which can hold a reference to an `HTMLInputElement` or `null`. We use this ref to access the input element and focus it when the "Focus Input" button is clicked.

**Step 4: Using the Component**

You can use the `MyComponent` component within your application:

```tsx
function App() {
  return (
    <div>
      <h1>Using useRef with TypeScript</h1>
      <MyComponent />
    </div>
  );
}
```

**Step 5: Running Your App**

You can run your app using `npm start` or your preferred method.

This example demonstrates how to use the `useRef` hook with TypeScript. It allows you to work with DOM elements or mutable values in a type-safe manner. The `useRef` hook's `current` property holds the mutable value or the reference to the DOM element, and TypeScript helps ensure type safety throughout your application.

***