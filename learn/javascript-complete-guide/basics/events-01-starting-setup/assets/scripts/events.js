// const buttons = document.querySelectorAll('button')

// const buttonClickHandler = event => {
//   // event.target.disabled = true
//   console.log(event)
// }

// const anotherButtonClickHandler = () => {
//   alert('button was clicked 2')
// }

// button.onclick = buttonClickHandler

// buttons.forEach(button => {
//   button.addEventListener('mouseenter', buttonClickHandler)
// })

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler)
// }, 2000)

// window.addEventListener('scroll', event => {
//   console.log(event)
// })

const form = document.querySelector('form')

form.addEventListener('submit', event => {
  event.preventDefault()
  console.log(event)
})
