const startGameBtn = document.getElementById('start-game-btn')

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK

const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WINS = 'PLAYER_WINS'
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'

let gameIsRunning = false

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase()
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`)
    return
  }
  return selection
}

const getComputerChoice = () => {
  const randomValue = Math.random() 
  if (randomValue < .34) {
    return ROCK
  } else if (randomValue < .67) {
    return PAPER
  } else {
    return SCISSORS
  }
}

const getWinner = (computerChoice, playerChoice = DEFAULT_USER_CHOICE) => 
    computerChoice === playerChoice ?
      RESULT_DRAW :
      computerChoice === ROCK && playerChoice === PAPER ||
      computerChoice === PAPER && playerChoice === SCISSORS ||
      computerChoice === SCISSORS && playerChoice === ROCK ?
        RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS

  // if (computerChoice === playerChoice) {
  //   return RESULT_DRAW
  // } else if (
  //   computerChoice === ROCK && playerChoice === PAPER ||
  //   computerChoice === PAPER && playerChoice === SCISSORS ||
  //   computerChoice === SCISSORS && playerChoice === ROCK
  // ) {
  //   return RESULT_PLAYER_WINS
  // } else {
  //   return RESULT_COMPUTER_WINS
  // }


startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return
  }
  gameIsRunning = true
  console.log('Game is starting...')
  const playerSelection = getPlayerChoice()
  const computerChoice = getComputerChoice()
  let winner
  if (playerSelection) {
    winner = getWinner(computerChoice, playerSelection)
  } else {
    winner = getWinner(computerChoice)
  }
  let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `
  if (winner === RESULT_DRAW) {
    message += 'had a draw.'
  } else if (winner === RESULT_PLAYER_WINS) {
    message += 'won'
  } else {
    message += 'lost'
  }

  alert(message)
})

// not related to game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number
  }
  let sum = 0
  for (const number of numbers) {
    if (operation === 'SUM') {
      sum += validateNumber(number)
    } else {
      sum -= validateNumber(number)
    }
  }
  resultHandler(sum)
}

// const subtractUp = function (resultHandler, ...numbers) {
//   let sum = 0
//   for (const number of numbers) { // Don't use that
//     sum -= number
//   }
//   resultHandler(sum, 'The result after adding all number is')
// }

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result)
}

combine(showResult.bind(this, 'The result after adding all number is:'), 'ADD', 1, 5, 10, -3)
combine(showResult.bind(this, 'The result after adding all number is:'), 'ADD', 1, 5, 10, -3, 12, 9, 23)
combine(showResult.bind(this, 'The result after subtracting all number is:'), 'SUBTRACT', 1, 5, 10, -3, 12, 9, 23)
