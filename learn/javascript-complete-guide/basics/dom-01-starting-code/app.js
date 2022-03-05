const ul = document.body.firstElementChild.nextElementSibling

const li = ul.firstElementChild

console.log(li)

const section = document.querySelector('section')

// section.style.backgroundColor = 'blue'
section.className = 'red-bg'

const button = document.querySelector('button')

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible'
  // } else {
  //   section.className = 'red-bg visible'
  // }

  // section.classList.toggle('visible')
  section.classList.toggle('invisible')
})
