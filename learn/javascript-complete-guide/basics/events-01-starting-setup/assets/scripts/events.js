const button = document.querySelector('button')

const buttonClickHandler = () => {
  alert('button was clicked')
}

const anotherButtonClickHandler = () => {
  alert('button was clicked 2')
}

// button.onclick = buttonClickHandler

button.addEventListener('click', buttonClickHandler)

setTimeout(() => {
  button.removeEventListener('click', buttonClickHandler)
}, 2000);
