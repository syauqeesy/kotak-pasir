const defaultResult = 0
let currentResult = defaultResult
let logEntries = []

// This is a comment!
// Another line

/**
 * This is also a comment
 */

// Gets input from input field
function getUserNumberInput () {
  return parseInt(usrInput.value)
}

// Generates and write calculation log
function createAndWriteLog (operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription) // From vendor file
}

function add () {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult += enteredNumber
  // currentResult++
  createAndWriteLog('+', initialResult, enteredNumber)
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  }
  logEntries.push(logEntry)
  console.log(logEntries)
}

function subtract () {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult -= enteredNumber
  createAndWriteLog('-', initialResult, enteredNumber)
}

function multiply () {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult *= enteredNumber
  createAndWriteLog('*', initialResult, enteredNumber)
}

function divide () {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult /= enteredNumber
  createAndWriteLog('/', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
