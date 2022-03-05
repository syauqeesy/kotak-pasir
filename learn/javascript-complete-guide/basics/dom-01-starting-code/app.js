const h1 = document.getElementById('main-title')

console.dir(h1)

h1.textContent = 'mantap sekali'
h1.style.color = 'red'
h1.style.backgroundColor = 'black'

const li = document.querySelector('li:last-of-type')

li.textContent = li.textContent + 'mantap'

const lists = document.querySelectorAll('li')

for (const list of lists) {
  console.dir(list)
}
