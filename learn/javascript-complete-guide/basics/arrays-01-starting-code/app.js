const numbers = [1, 2, 3]

console.log(numbers)

// const moreNumbers = new Array(5, 2)
// console.log(moreNumbers)

// const yetMoreNumbers = Array.of(1, 2)
// console.log(yetMoreNumbers)

// const listItems = document.querySelectorAll('li')
// console.log(listItems)

// const moreNumbers = Array.from(listItems)
// console.log(moreNumbers)

// const hobbies = ['Cooking', 'Sport']
// const personalData = [19, 'Syauqi', { moreDetail: '' }]
// const analitycsData = [[1, 1.3, 3], [2, -3, 1.3]]

// for (const data of analitycsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint)
//   }
// }

// console.log(personalData[1])

// hobbies.push('Reading')
// hobbies.unshift('Playing Guitar')
// const poppedValue = hobbies.pop()
// hobbies.shift()

// console.log(hobbies)

// // hobbies[1] = 'Coding'
// // hobbies[5] = 'Reading'
// // console.log(hobbies, hobbies[4])

// // hobbies.splice(1, 0, 'Eat')
// // console.log(hobbies)
// // hobbies.splice(0)
// // console.log(hobbies)

// const testResults = [2, 0, -1, 9.3, 4, 9.3, -9]
// console.log(testResults.includes(0))
// // const storedResults = testResults.slice(0, 2)
// const storedResults = testResults.concat([3.99, 2])
// testResults.push(7)
// console.log(testResults, storedResults)
// console.log(testResults.lastIndexOf(9.3))

// const personData = [{ name: 'Syauqi' }, { name: 'Aziz' }]
// console.log(personData.indexOf({ name: 'Syauqi' }))

// const syauqi = personData.find((person, index, persons) => {
//   return person.name === 'Syauqi'
// })

// syauqi.name = 'Anna'

// console.log(personData)
// console.log(syauqi)

// const azizIndex = personData.findIndex((person, index, persons) => {
//   return person.name === 'Aziz'
// })

// console.log(azizIndex)

const prices = [10000, 15000, 7500, 8500, 3000]
const tax = 0.19

const taxAdjustedPrices = prices.map((price, index, prices) => {
  const priceObj = { index,  taxAdjustedPrice: price * (1 + tax)}
  return priceObj
})

// console.log(prices, taxAdjustedPrices)

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1
  } else if (a === b) {
    return 0
  } else {
    return -1
  }
})
console.log(sortedPrices.reverse())

const filteredArray = prices.filter(price => price < 10000)
console.log(filteredArray)

// let sum = 0

// prices.forEach(price => {
//   sum += price
// })

// console.log(sum)

const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue
}, 0)

console.log(sum)

const data = 'New York;10.99;2000'
const transformedData = data.split(';')
console.log(transformedData)

const nameFragments = ['Ahmad', 'Syauqi']
const name = nameFragments.join(' ')
console.log(name)

const copiedNameFragments = [...nameFragments]
nameFragments.push('Mr')
console.log(nameFragments, copiedNameFragments)

console.log(Math.min(...prices))

const persons = [{ name: 'Syauqi', age: 19 }, { name: 'Aziz', age: 20 }]
const copiedPersons = [...persons.map(person => ({ name: person.name, age: person.age }))]

persons.push({ name: 'Anna', age: 22 })
persons[0].age = 12

console.log(persons, copiedPersons)
