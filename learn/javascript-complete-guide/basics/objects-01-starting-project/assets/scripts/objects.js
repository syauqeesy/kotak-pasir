let person = {
  name: 'Syauqi',
  age: 30,
  hobbies: ['Cooking', 'Coding'],
  greet: function () {
    alert('Hi there!')
  }
}

person.age = 19
person.isAdmin = true
// delete person.age
person.age = null

console.log(person)
