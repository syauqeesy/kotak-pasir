const numbers = [1, 2, 3]

console.log(numbers)

// const moreNumbers = new Array(5, 2)
// console.log(moreNumbers)

// const yetMoreNumbers = Array.of(1, 2)
// console.log(yetMoreNumbers)

const listItems = document.querySelectorAll('li')
console.log(listItems)

const moreNumbers = Array.from(listItems)
console.log(moreNumbers)

const hobbies = ['Cooking', 'Sport']
const personalData = [19, 'Syauqi', { moreDetail: '' }]
const analitycsData = [[1, 1.3, 3], [2, -3, 1.3]]

for (const data of analitycsData) {
  for (const dataPoint of data) {
    console.log(dataPoint)
  }
}

console.log(personalData[1])

hobbies.push('Reading')
hobbies.unshift('Playing Guitar')
const poppedValue = hobbies.pop()
hobbies.shift()

console.log(hobbies)

// hobbies[1] = 'Coding'
// hobbies[5] = 'Reading'
// console.log(hobbies, hobbies[4])

// hobbies.splice(1, 0, 'Eat')
// console.log(hobbies)
// hobbies.splice(0)
// console.log(hobbies)

const testResults = [2, 0, -1, 9.3, 4, 9.3, -9]
// const storedResults = testResults.slice(0, 2)
const storedResults = testResults.concat([3.99, 2])
testResults.push(7)
console.log(testResults, storedResults)
console.log(testResults.lastIndexOf(9.3))

const personData = [{ name: 'Syauqi' }, { name: 'Aziz' }]
console.log(personData.indexOf({ name: 'Syauqi' }))

const syauqi = personData.find((person, index, persons) => {
  return person.name === 'Syauqi'
})

syauqi.name = 'Anna'

console.log(personData)
console.log(syauqi)

const azizIndex = personData.findIndex((person, index, persons) => {
  return person.name === 'Aziz'
})

console.log(azizIndex)
