In JavaScript, you can define functions using two primary methods: function declarations and function expressions. Each has its own syntax and use cases. Here's an explanation of both:

**Function Declaration:**

A function declaration defines a named function with a specified set of parameters. Function declarations are hoisted, meaning they can be used before they are defined in the code.

Syntax:

```javascript
function functionName(parameters) {
  // Function body
  // Code to be executed
  return result; // Optional
}
```

Example of a function declaration:

```javascript
function add(a, b) {
  return a + b;
}

const sum = add(3, 5); // Calling the function
console.log(sum); // Output: 8
```

**Function Expression:**

A function expression defines a function as part of an expression. In other words, you assign a function to a variable or pass it as an argument to another function. Function expressions are not hoisted and must be defined before they are used.

Syntax:

```javascript
const functionName = function(parameters) {
  // Function body
  // Code to be executed
  return result; // Optional
};
```

Example of a function expression:

```javascript
const subtract = function(a, b) {
  return a - b;
};

const difference = subtract(8, 3); // Calling the function expression
console.log(difference); // Output: 5
```

**Named Function Expression:**

A named function expression is a function expression that has a name, which can be used for self-reference (recursion) or for debugging purposes. The function name is only accessible within the function itself.

Syntax:

```javascript
const functionName = function(parameters) {
  // Function body
  // Code to be executed
  return result; // Optional
};
```

Example of a named function expression:

```javascript
const factorial = function calcFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * calcFactorial(n - 1); // Recursive call using the function name
};

const result = factorial(5);
console.log(result); // Output: 120
```

**Arrow Function Expression (ES6):**

Arrow functions are a concise way to write function expressions introduced in ES6. They have a shorter syntax and lexically bind the `this` keyword, making them suitable for many scenarios.

Syntax:

```javascript
const functionName = (parameters) => {
  // Function body
  // Code to be executed
  return result; // Optional
};
```

Example of an arrow function expression:

```javascript
const square = (x) => x * x;
const squaredValue = square(4);
console.log(squaredValue); // Output: 16
```

Function declarations and function expressions serve similar purposes, but their usage depends on your specific requirements. Function declarations are often used when you want to define a named function that's hoisted, while function expressions, including arrow functions, are used when you need more flexibility, such as anonymous functions or when defining functions as values within objects or arrays.