In JavaScript, arrays are used to store collections of values. Arrays are ordered lists of elements, and each element can be of any data type, including other arrays. Here's an overview of JavaScript arrays with some examples:

**Creating Arrays:**

You can create arrays in several ways:

1. **Array Literals:** Define an array by enclosing its elements in square brackets `[]`.

```javascript
let fruits = ['apple', 'banana', 'cherry'];
```

2. **Using the `Array` Constructor:** Create an array using the `Array` constructor.

```javascript
let colors = new Array('red', 'green', 'blue');
```

**Accessing Elements:**

You can access elements in an array using square bracket notation. Arrays are zero-indexed, meaning the first element is at index 0.

```javascript
console.log(fruits[0]); /* Output: 'apple' */
```

**Modifying Arrays:**

You can add, remove, or modify elements in an array.

```javascript
fruits.push('orange');    /* Add an element to the end */
fruits.pop();             /* Remove the last element */
fruits[1] = 'kiwi';       /* Modify an element by index */
```

**Array Methods:**

JavaScript provides various methods to manipulate arrays. Here are some common ones:

- `push()`: Adds one or more elements to the end of an array.
- `pop()`: Removes and returns the last element from an array.
- `shift()`: Removes and returns the first element from an array.
- `unshift()`: Adds one or more elements to the beginning of an array.
- `concat()`: Combines two or more arrays and returns a new array.
- `slice()`: Returns a portion of an array as a new array.
- `splice()`: Adds or removes elements from an array at a specified index.
- `forEach()`: Executes a provided function once for each array element.
- `map()`: Creates a new array by applying a function to each element in the array.
- `filter()`: Creates a new array with elements that pass a test defined by a function.
- `reduce()`: Applies a function to reduce the array to a single value.
- `sort()`: Sorts the elements of an array in place.
- `reverse()`: Reverses the order of elements in an array.
- `join()` : Joins all elements of an array into a string.

**Examples:**

```javascript
/* Using array methods */
fruits.push('grape');
console.log(fruits); /* Output: ['apple', 'kiwi', 'cherry', 'orange', 'grape'] */

fruits.pop();
console.log(fruits); /* Output: ['apple', 'kiwi', 'cherry', 'orange'] */

let numbers = [3, 1, 2, 4, 5];
numbers.sort();
console.log(numbers); /* Output: [1, 2, 3, 4, 5] */

let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers); /* Output: [2, 4] */

let doubledNumbers = numbers.map(function (num) {
  return num * 2;
});
console.log(doubledNumbers); /* Output: [2, 4, 6, 8, 10] */
```

Arrays are versatile data structures in JavaScript and are commonly used for storing and manipulating collections of data. You can perform various operations on arrays to suit your application's needs.

** Contructors: arrays, object, functions, number, string, boolean **
  
```javascript
let arr = new Array();
let obj = new Object();
let func = new Function();
let num = new Number();
let str = new String();
let boo = new Boolean();
let date = new Date();
let sym = new Symbol();
```

**Exercises with Arrays:**

1. Write a JavaScript function to check whether an `input` is an array or not. 
Test Data

```javascript
const is_array = (parameter) => {
  return Array.isArray(parameter);
}
console.log(is_array('w3resource')); /* false */
console.log(is_array([1, 2, 4, 0])); /* true */
```

2. Write a JavaScript function to clone an array. 
Test Data:

```javascript
const array_Clone = (array) => {
  return array.map((element) => {
    if (is_array(element)) {
      return [...element]
    }
    return element;
  })
}
console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]]));
```

3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
Test Data:

```javascript
const first = (array, n = 1) => {
  return array.slice(0, n);
}

console.log(first([7, 9, 0, -2])); /* [7] */
console.log(first([],3)); /* [] */
console.log(first([7, 9, 0, -2],3)); /* [7, 9, 0] */
console.log(first([7, 9, 0, -2],6)); /* [7, 9, 0, -2] */
console.log(first([7, 9, 0, -2],-3)); /* [] */
```

4. Write a simple JavaScript program to join all elements of the following array into a string.

```javascript
const joinElements = (array) => {
  return array.join('')
}
const myColor = ["Red", "Green", "White", "Black"]
console.log({aux: joinElements(myColor)})
```

5. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
Test Data:

```javascript
const last = (array, n = 1) => {
  return array.slice(-n)
}
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
```

6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
  For example if you accept 025468 the output should be 0-254-6-8.

```javascript
/* Sample Input: 025468 */
/* Expected Output: 0-254-6-8 */
const isEven = (num) => Number(num) % 2 === 0

const insertDash = (str) => {
  return str.split('').reduce((acc, num, index, str) => {
    const actual = str[index]
    const next = str[index + 1]
    if (isEven(num) && isEven(next)) {
      return acc += `${actual}-`
    } else {
      return acc += `${actual}`
    }
  }, '')
}

console.log('025468 => ', insertDash('025468'))
```

7. Write a JavaScript program to sort the items of an array.

```javascript
/* Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]; */
/* Sample Output : -4,-3,1,2,3,5,6,7,8 */
const sortArray = (array) => {
  return [...array].sort()
}
const input = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]
console.log(sortArray(input))
console.log(input)
```

8. Write a JavaScript program to find the most frequent item of an array.

```javascript
/* Sample array : var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; */
/* Sample Output : a ( 5 times ) */
const frequentItem = (array) => {
  let count = 0
  let frequentItem;

  array.forEach((item, index, arr) => {
    const actual = item // 3
    const total = arr.filter((i) => i === actual).length // [3, 3, 3, 3].length = 4
    console.log(`${actual} (${total} times)`)
    if (total > count) {
      count = total // 5
      frequentItem = actual
    }
  })

  return {frequentItem, count}
}
console.log(frequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))

```

9. Write a JavaScript program that prints the elements of the following array.

```javascript
/* Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
Sample Output :
"row 0" 
"1" 
"2" 
"1"
"24"
"row 1" 
"8"
"11"
"9"
"4"
*/
const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
const iterador = (array) => {
  array.forEach((miniArray, index) => {
    console.log('Row', index)
    miniArray.forEach(item => {
      console.log(item)
    })
  })
}
```

10. Write a JavaScript program to find duplicate values in a JavaScript array.

```javascript
/* Sample array : var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]; */
/* Sample Output : [9] */

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]

const logic = (value, array) => {
  return array.filter(item => value === item)
}

/* forEach, map, filter, reduce */
const findDuplicated = (array) => {
  let aux = [null]
  array.forEach((item, index, arr) => {
    if (logic(item, arr).length > 1) {
      aux = [item]
    }
  })
  return aux
}
console.log(findDuplicated(a))

```

11. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.

```javascript
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6]
```

12. Write a JavaScript program to compute the union of two arrays.

```javascript
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
```

13. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

```javascript
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
```

14. Write a JavaScript function to sort the following array of objects by title value.
Sample object:

```javascript
const library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

15. Write a JavaScript function that merges two arrays and removes all duplicate elements.

```javascript
Test data :
const array1 = [1, 2, 3];
const array2 = [2, 30, 1];
console.log(mergeArray(array1, array2));
[3, 2, 30, 1]
```

16. Write a JavaScript program to remove all false values from an object or array.
```javascript
Test Data :
const obj = {
a: null,
b: false,
c: true,
d: 0,
e: 1,
f: '',
g: 'a',
h: [null, false, '', true, 1, 'a'],
i: { j: 0, k: false, l: 'a' }
Expected Output:
{"c":true,"e":1,"g":"a","h":[true,1,"a"],"i":{"l":"a"}}
```

17. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.
```javascript
Test Data :
const arr = [1, 2, 3, "a", "b", 4, "c", true, false, 5];
Expected Output : 15
```

18. Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

```javascript
Test Data :
console.log(isNaN([NaN, 1, 2, 3]));
[0]
console.log(isNaN([1, 2, 3, NaN]));
[3]
console.log(isNaN([NaN, 1, 2, NaN, 3, NaN]));
[0, 3, 5]
```

19. Write a JavaScript program to count the number of arrays inside a given array.
```javascript
Test Data :
([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
Expected Output:
Number of arrays inside the said array: 2
Number of arrays inside the said array: 3
```
