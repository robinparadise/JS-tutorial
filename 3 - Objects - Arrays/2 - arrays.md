JavaScript provides a variety of useful array methods that allow you to perform common operations on arrays. Here are some of the most commonly used array methods:

**1. Filter Method:**

The `filter()` method creates a new array containing all elements that pass a provided test (specified as a callback function).

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]
```

**2. Map Method:**

The `map()` method creates a new array by applying a specified callback function to each element of the original array.

```javascript
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

**3. Reduce Method:**

The `reduce()` method applies a callback function to reduce an array to a single value. It accumulates the results from left to right.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
```

**4. Find Method:**

The `find()` method returns the first element in an array that satisfies a provided test (specified as a callback function).

```javascript
const numbers = [1, 2, 3, 4, 5];

const found = numbers.find(function (number) {
  return number > 3;
});

console.log(found); // Output: 4
```

**5. Sort Method:**

The `sort()` method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];

fruits.sort();

console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']
```

**6. Chaining Array Methods:**

You can chain array methods together to perform complex operations on arrays.

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(function (number) {
    return number % 2 === 0;
  })
  .map(function (number) {
    return number * 2;
  })
  .reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

console.log(result); // Output: 12
```

**Exercise Examples:**

Here are some exercises that demonstrate the use of array methods:

**Exercise 1: Find the Maximum Number**

```javascript
const numbers = [17, 42, 8, 99, 23];

const maxNumber = numbers.reduce(function (max, number) {
  return number > max ? number : max;
}, -Infinity);

console.log(maxNumber); // Output: 99
```

**Exercise 2: Filter Strings**

```javascript
const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const filteredWords = words.filter(function (word) {
  return word.length >= 6;
});

console.log(filteredWords); // Output: ['banana', 'cherry', 'elderberry']
```

**Exercise 3: Transform and Sum**

```javascript
const numbers = [1, 2, 3, 4, 5];

const sumOfSquares = numbers
  .map(function (number) {
    return number * number;
  })
  .reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

console.log(sumOfSquares); // Output: 55
```

These exercises showcase how array methods can be used to solve a variety of tasks efficiently and elegantly. By mastering these methods, you can manipulate arrays effectively in JavaScript.