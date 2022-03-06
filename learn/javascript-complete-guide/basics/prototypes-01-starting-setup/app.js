// class Person {
//   name = 'Syauqi'

//   constructor () {
//     this.age = 19
//   }

//   greet () {
//     console.log('Hi I\'m ' + this.name + ' and I\'m ' + this.age + ' years old.')
//   }
// }

function Person () {
  this.age = 19
  this.name = 'Syauqi'
  this.greet = function () {
    console.log('Hi I\'m ' + this.name + ' and I\'m ' + this.age + ' years old.')
  }
}

const person = new Person()
person.greet()
