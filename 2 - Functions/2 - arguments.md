In JavaScript, "arguments" and "parameters" are related concepts, but they have distinct meanings and purposes when working with functions.

**Parameters:**

Parameters are placeholders in a function's definition that allow you to pass values into the function when it's called. Parameters act as local variables within the function's scope, and they specify what kind of data the function expects as input.

Here's an example of a function with parameters:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!
```

In the `greet` function, `name` is a parameter that represents the name of the person to be greeted. When you call the function with specific values, such as `greet("Alice")`, the value `"Alice"` is passed as an argument to the `name` parameter.

**Arguments:**

Arguments are the actual values that are passed to a function when it's called. They are the concrete values that correspond to the parameters defined in the function's declaration.

In the example above, `"Alice"` and `"Bob"` are the arguments passed to the `greet` function when it's called. These arguments are used to populate the `name` parameter inside the function.

Here's another example:

```javascript
function add(a, b) {
  return a + b;
}

const result = add(3, 5); // The values 3 and 5 are arguments
console.log(result); // Output: 8
```

In the `add` function, `a` and `b` are parameters, and `3` and `5` are arguments passed to those parameters when the function is called.

**Default Parameters (ES6):**

In ECMAScript 2015 (ES6) and later versions of JavaScript, you can specify default values for function parameters. These default values are used if the corresponding argument is not provided when the function is called.

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
```

In this example, the `name` parameter has a default value of `"Guest"`. If no argument is provided when calling `greet()`, it uses the default value.

**Rest Parameters (ES6):**

Rest parameters allow you to represent an indefinite number of arguments as an array within a function. This is helpful when you don't know how many arguments will be passed to the function.

```javascript
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); // Output: 15
```

In the `sum` function, `...numbers` is a rest parameter that collects all the arguments into an array called `numbers`. This allows you to pass any number of arguments to the function, and they will be summed together.

Understanding the distinction between parameters and arguments is crucial when working with functions in JavaScript, as it helps you define the function's behavior and pass data into it effectively.