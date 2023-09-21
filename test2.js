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


function add(obj) {
  obj.value = obj.x + obj.y
  return obj
}

let obj1 = {x: 1, y: 2}
let obj2 = obj1
obj2.y = 5

add(obj1)
add(obj2)

console.log(obj1) // {x: 1, y: 2, value: 3}
console.log(obj2) // {x: 1, y: 5, value: 6}



/* advance exersice */

function calcChars(obj) {
  const aux = { chars: 0 }
  aux.chars = obj.str.length
  return aux
  // return { chars: obj.str.length }
}
const obj = { str: 'hello' }
const aux = calcChars(obj)
console.log(obj) // {str: 'hello'}
console.log(aux) // {chars: 5}


/****************************************/

function upper(strings, ...values) {
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += values[i].toUpperCase();
    }
  }
  return result;
}
const name = 'Alice';
const age = 30;


const message = upper`Hello, ${name}! You are ${age} years old.`;


console.log(message);
// Output: HELLO, ALICE! YOU ARE 30 YEARS OLD.

/****************************************/

function outputObj(obj, name) {
  obj.name = name;
  obj.items.push(4);
}
const obj1 = { name: "John", items: [1, 2, 3] };
const aux = outputObj(obj1, 'Jame');
console.log(obj1)
console.log(aux)
