const is_array = (parameter) => {
  return Array.isArray(parameter);
}
console.log(is_array('w3resource')); // false
console.log(is_array([1, 2, 4, 0])); // true
console.log(is_array({a: 1})); // false


const array_Clone = (array) => {
  return array.map((element) => {
    if (is_array(element)) {
      return [...element]
    }
    return element;
  })
}

console.log(array_Clone([1, 2, 4, 0]));

const a = [1, 2, [4, 0]];
const aux = array_Clone(a)
a[2][0] = 5;
console.log(a)
console.log(aux)


// map, forEach, reduce, join
const joinElements = (array) => {
  // let acc = ''
  // array.forEach(item => {
  //   acc = acc + item
  // })
  // return acc

  // return array.reduce((acc, item) => {
  //   return acc + item
  // }, '')

  return array.join('')
}
const myColor = ["Red", "Green", "White", "Black"]
console.log({aux: joinElements(myColor)})