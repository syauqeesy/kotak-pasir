// const ids = new Set(['Hi', 'From', 'Set'])
// ids.add(2)
// if (ids.has('Hi'))
//   ids.delete('Hi')

// for (const entry of ids.values()) {
//   console.log(entry)
// }
// console.log(ids)

const person1 = { name: 'Ahmad' }
const person2 = { name: 'Aziz' }

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]])
console.log(personData.get(person1));

personData.set(person2, [{ date: '2 weeks ago', price: 9 }])
console.log(personData)

for (const [key, value] of personData.entries()) {
  console.log(key, value)
}

for (const key of personData.keys()) {
  console.log(key)
}

for (const value of personData.values()) {
  console.log(value)
}

console.log(personData.size)
