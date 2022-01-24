const attackValue = 10
const strongAttackValue = 15
const monsterAttackValue = 14

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

function attackMonster(mode) {
  let maxDamage
  if (mode === 'ATTACK') {
    maxDamage = attackValue
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = strongAttackValue
  }

  const damage = dealMonsterDamage(maxDamage)
  currentMonsterHealth -= damage

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

function attackHandler() {
  attackMonster('ATTACK')
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK')
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
