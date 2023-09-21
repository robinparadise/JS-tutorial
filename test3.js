const obj1 = { name: "Hello" };
const obj2 = { ...obj1 };
function greetObj(obj, name) {
  obj.name += ` ${name}`;
  return {
    name: `Hello ${name}`
  }
}
greetObj(obj1, 'World'); // Hello World
greetObj(obj2, 'Adam'); // Hello Adam


console.log(obj1) // Hello World
console.log(obj2) // Hello Adam
console.log(greetObj(obj1, 'Eva')) // Hello Eva
