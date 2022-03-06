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

hobbies[1] = 'Coding'
hobbies[5] = 'Reading'
console.log(hobbies, hobbies[4])
