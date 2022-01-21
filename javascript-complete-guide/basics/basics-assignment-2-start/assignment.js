const task3Element = document.getElementById('task-3');

function sayHello() {
  alert('Hello gaes')
}

function greetMe(name) {
  alert('Hello ' + name)
}

sayHello()
greetMe('Ahmad Syauqi')

task3Element.addEventListener('click', sayHello)

async function saySomething(firstWord, secondWord, lastWord) {
  return firstWord + secondWord + lastWord
}


alert(saySomething('Hello, ', 'my name is ', 'Ahmad Sayuqi'))
