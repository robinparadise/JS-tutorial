# Javascript

In JavaScript, data types can be categorized into two main groups: primitive data types and reference data types. Here's an overview of the common data types in JavaScript:

**Primitive Data Types:**

1. **Number:** Represents numeric values, both integers and floating-point numbers.
   Example: `let num = 42;`

2. **String:** Represents sequences of characters enclosed in single or double quotes.
   Example: `let name = "John";`

3. **Boolean:** Represents a true or false value.
   Example: `let isTrue = true;`

4. **Undefined:** Represents a variable that has been declared but has not been assigned a value.
   Example: `let x; // x is undefined`

5. **Null:** Represents the intentional absence of any object value or no value at all.
   Example: `let y = null;`

6. **NaN:** Not a number. Represents a value that is not a valid number.
   Example: `let z = NaN;`
   Another example using NaN: `let result = 100 / "Apple"; // result is NaN`

7. **Symbol (ES6):** Represents a unique and immutable value, often used as object properties.
   Example: `const uniqueSymbol = Symbol('description');`
   Examples of Symbol manipulation:
    ```javascript
    let id = Symbol("id");
    let user = {
      name: "John",
      age: 30,
      [id]: 123
    };
    console.log(user); // {name: "John", age: 30, Symbol(id): 123}
    console.log(user[id]); // 123
    ```

8. **BigInt (ES11):** Represents large integers that cannot be represented by the `Number` type.
   Example: `const bigIntValue = 1234567890123456789012345678901234567890n;`

9. **Invalid Date:** Represents an invalid date.
   Example: `let invalidDate = new Date('invalid');`

**Reference Data Types:**

8. **Object:** Represents a collection of key-value pairs where values can be of any data type, including other objects.
   Example: 
   ```javascript
   let person = {
       firstName: "John",
       lastName: "Doe"
   };
   ```

9. **Array:** Represents an ordered collection of values, often of the same data type.
   Example: `let numbers = [1, 2, 3, 4, 5];`

10. **Function:** A callable object that can execute a block of code.
    Example:
    ```javascript
    function add(a, b) {
        return a + b;
    }
    ```

11. **Date:** Represents date and time values.
    Example: `let currentDate = new Date();`

12. **RegExp:** Represents regular expressions for pattern matching and manipulation.
    Example: `let regex = /pattern/;`

These are the basic data types in JavaScript. Additionally, JavaScript is dynamically typed, meaning that variables can change their data type during runtime, which is important to keep in mind when working with JavaScript code. ES6 (ECMAScript 2015) and later versions of JavaScript introduced new data types like `Symbol` and `BigInt`.

**Comparisons & exercises with undefined, null & NaN:**

```javascript
let x; // x is undefined
console.log(x); // undefined

let y = null; // y is null
console.log(y); // null

let z = NaN; // z is NaN
console.log(z); // NaN

console.log(x == y); // false
console.log(x === y); // false
console.log(x == z); // false
console.log(x === z); // false
console.log(y == z); // false
console.log(y === z); // false
console.log(x == undefined); // true
console.log(x === undefined); // true
console.log(y == null); // true
console.log(y === null); // true
console.log(z == NaN); // false
console.log(z === NaN); // false
```

** More exercises **
```javascript
console.log(1 / 0); // Infinity
console.log(1 / -0); // -Infinity
console.log(Infinity === -Infinity); // false
console.log(0 / 0); // NaN
console.log(Infinity / Infinity); // NaN
console.log(Infinity / -Infinity); // NaN
console.log(Infinity / 0); // Infinity
console.log(-Infinity / 0); // -Infinity
console.log(Infinity / 10); // Infinity
console.log(Infinity / -10); // -Infinity
console.log(Infinity / Infinity); // NaN
console.log(1 / Infinity); // 0
console.log(1 / -Infinity); // -0
console.log(1 / 0 === 1 / -0); // false
console.log(0 / 1); // 0
console.log(0 / -1); // -0
console.log(0 / 1 === 0 / -1); // true
console.log(0 / 0 === 0 / -0); // false
console.log(0 / 0); // NaN
console.log(-0 / 0); // NaN
console.log(0 / 0 === -0 / 0); // false
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
console.log(NaN === undefined); // false
console.log(NaN === null); // false
console.log(NaN == undefined); // false
console.log(NaN == null); // false
console.log(undefined === undefined); // true
console.log(undefined === null); // false
console.log(undefined == null); // true
console.log(null === null); // true
```

**Show an exersice for primitive and reference data:**
  
```javascript
let a = 10;
let b = a;
console.log(a); // 10
console.log(b); // 10
a = 20;
console.log(a); // 20
console.log(b); // 10
```

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
```
  
```javascript
let obj1 = { name: "John" };
let obj2 = obj1;
console.log(obj1); // {name: "John"}
console.log(obj2); // {name: "John"}
obj1.name = "Jane";
console.log(obj1); // {name: "Jane"}
console.log(obj2); // {name: "Jane"}
```

```javascript
let obj1 = { name: "John", items: [1, 2, 3] };
let obj2 = obj1;
function changeObj(obj, name) {
  obj.name = name;
  obj.items.push(4);
}
changeObj(obj1, 'Jame');
changeObj(obj2, 'Max');
```

**Show an advance exersice for primitive and reference data with nested objects:**
  

```javascript
let obj1 = { name: "John", items: {1: 1, 2: 2, 3: 3} };
let obj2 = obj1;
function changeObj(obj, name) {
  obj.name = name;
  obj.items['4'] = name
}
changeObj(obj1, 'Jame');
changeObj(obj2, 'Max');

console.log(obj1)
console.log(obj2)
```

**Show an advance exersice with functions with primitive and reference arguments that need to be fixed in order to not modify the original objects**

```javascript
const obj1 = { name: "Hello" };
const obj2 = obj1;
function greetObj(obj, name) {
  obj.name += name;
}
greetObj(obj1, 'World');
greetObj(obj2, 'Adam');


console.log(obj1)
console.log(obj2)
console.log(greetObj(obj1, 'Eva'))
```
