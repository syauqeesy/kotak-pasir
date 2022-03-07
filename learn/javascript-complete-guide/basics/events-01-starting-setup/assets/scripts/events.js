const button = document.querySelector('button')

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

const div = document.querySelector('div')

div.addEventListener('click', event => {
  console.log('CLICKED DIV')
  console.log(event)
})

button.addEventListener('click', event => {
  event.stopPropagation()
  console.log('CLICKED BUTTON')
  console.log(event)
})

const listItems = document.querySelectorAll('li')
const list = document.querySelector('ul')

list.addEventListener('click', event => {
  // event.target.classList.toggle('highlight')
  event.target.closest('li').classList.toggle('highlight')
})

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight')
//   })
// })
