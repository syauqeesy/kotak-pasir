const buttons = document.querySelectorAll('button')

const buttonClickHandler = event => {
  event.target.disabled = true
  alert('button was clicked')
}

const anotherButtonClickHandler = () => {
  alert('button was clicked 2')
}

// button.onclick = buttonClickHandler

buttons.forEach(button => {
  button.addEventListener('click', buttonClickHandler)
})

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler)
// }, 2000)
