const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post')
const form = document.querySelector('#new-post form')
const fetchButton = document.querySelector('#available-posts button')

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = 'json'
    xhr.onload = function () {
      resolve(xhr.response)
      // const posts = JSON.parse(xhr.response)
    }
    xhr.send(JSON.stringify(data))
  })

  return promise
}

async function fetchPosts() {
  const response = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
  const posts = response
  for (const post of posts) {
    const postElement = document.importNode(postTemplate.content, true)
    postElement.querySelector('h2').textContent = post.title
    postElement.querySelector('p').textContent = post.body
    listElement.append(postElement)
  }
}

async function createPost(title, body) {
  const userId = Math.random()
  const post = {
    title,
    body,
    userId
  }

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post)
}

fetchButton.addEventListener('click', fetchPosts)
form.addEventListener('submit', event => {
  event.preventDefault()

  const enteredTitle = event.currentTarget.querySelector('#title').value
  const enteredBody = event.currentTarget.querySelector('#content').value
  createPost(enteredTitle, enteredBody)
})
