const attackValue = 10
const strongAttackValue = 15
const monsterAttackValue = 14
const healValue = 20

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

function endRound () {
  const playerDamage = dealPlayerDamage(monsterAttackValue)
  currentPlayerHealth -= playerDamage
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!')
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!')
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!')
  }
}

function attackMonster(mode) {
  let maxDamage
  if (mode === 'ATTACK') {
    maxDamage = attackValue
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = strongAttackValue
  }

  const damage = dealMonsterDamage(maxDamage)
  currentMonsterHealth -= damage
  endRound()
}

function attackHandler() {
  attackMonster('ATTACK')
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK')
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
