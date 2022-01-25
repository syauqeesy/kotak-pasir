const startGameBtn = document.getElementById('start-game-btn');

// start() // <- Error

const start = function () {
  console.log('Game is starting...')
}

// const person = {
//   greet: function greet() {
//     console.log('Hello there!')
//   }
// }

// person.greet()

// console.dir(startGame)

startGameBtn.addEventListener('click', start)
