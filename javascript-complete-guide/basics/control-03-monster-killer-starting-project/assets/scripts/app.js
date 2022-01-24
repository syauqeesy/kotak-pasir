const attackValue = 10
const strongAttackValue = 15
const monsterAttackValue = 14
const healValue = 20

const MODE_ATTACK = 'ATTACK'
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'

const enteredValue = prompt('Maximum life for you and the monster.', '100')

let chosenMaxLife = parseInt(enteredValue)

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100
}

let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife
let hasBonusLife = true

adjustHealthBars(chosenMaxLife)

function reset() {
  currentMonsterHealth = chosenMaxLife
  currentPlayerHealth = chosenMaxLife
  resetGame(chosenMaxLife)
}

function endRound () {
  const initialPlayerHealth = currentPlayerHealth
  const playerDamage = dealPlayerDamage(monsterAttackValue)
  currentPlayerHealth -= playerDamage

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false
    removeBonusLife()
    currentPlayerHealth = initialPlayerHealth
    setPlayerHealth(initialPlayerHealth)
    alert('You would be dead but the bonus life saved you!')
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!')
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!')
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!')
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset()
  }
}

function attackMonster(mode) {
  let maxDamage
  if (mode === MODE_ATTACK) {
    maxDamage = attackValue
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = strongAttackValue
  }

  const damage = dealMonsterDamage(maxDamage)
  currentMonsterHealth -= damage
  endRound()
}

function attackHandler() {
  attackMonster(MODE_ATTACK)
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK)
}

function healPlayerHandler () {
  let currentHealValue;
  if (currentPlayerHealth >= chosenMaxLife - healValue) {
    alert('You can\'t heal to more than your max initial health!')
    currentHealValue = chosenMaxLife - currentPlayerHealth
  } else {
    currentHealValue = healValue
  }

  increasePlayerHealth(currentHealValue)
  currentPlayerHealth += currentHealValue
  endRound()
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)
