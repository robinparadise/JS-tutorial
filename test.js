// console.log function JSON.stringify(value, null, 2)
const log = (...values) => {
  values.map(value => console.log(JSON.stringify(value, null, 2)))
}

const obj1 = { value: 'Ana' }
const obj2 = obj1

obj2.age = 32
console.log(obj1)

const obj3 = { ...obj1 }
console.log(obj3)
obj3.lang = 'es'
console.log(obj3, obj1)


const obj4 = {
  person: {
    name: 'Ana',
    lang: 'es',
    age: 32
  },
  value: 1
}

const obj5 = { ...obj4, person: {...obj4.person} }
obj5.value = 5
log(obj4, obj5)
obj5.person.name = 'Paula'
log(obj4, obj5)


/*******************************************/
const clone = obj => JSON.parse(JSON.stringify(obj))

const obj6 = {
  person: {
    name: 'Ana',
    lang: 'es',
    age: 32
  },
  value: 1
}
const obj7 = clone(obj6)
obj7.value = 7
obj7.person.name = 'Felipe'
log(obj6, obj7)
