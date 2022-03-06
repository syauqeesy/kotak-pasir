const movieList = document.getElementById('movie-list')

movieList.style['background-color'] = 'red'
movieList.style.display = 'block'

let person = {
  'first name': 'Syauqi',
  age: 30,
  hobbies: ['Cooking', 'Coding'],
  greet: function () {
    alert('Hi there!')
  },
  1.5: 'Hello'
}

person.age = 19
person.isAdmin = true
// delete person.age
person.age = null

console.log(person['first name'])
console.log(person[1.5])
console.log(person)
