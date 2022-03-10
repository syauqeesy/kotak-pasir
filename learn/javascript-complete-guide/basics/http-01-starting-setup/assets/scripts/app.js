const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post')
const form = document.querySelector('#new-post form')
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul')

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest()
  // xhr.setRequestHeader('Content-Type', 'application/json')
  //   xhr.open(method, url)
  //   xhr.responseType = 'json'
  //   xhr.onload = function () {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response)
  //     }
  //     reject(new Error('Something went wrong'))
  //     // const posts = JSON.parse(xhr.response)
  //   }
  //   xhr.onerror = function () {
  //     reject(new Error('Failed to send request'))
  //   }
  //   xhr.send(JSON.stringify(data))

  return fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  })
  // })

  // return promise
}

async function fetchPosts() {
  // try {
    const response = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    const posts = response
    for (const post of posts) {
      const postElement = document.importNode(postTemplate.content, true)
      postElement.querySelector('h2').textContent = post.title
      postElement.querySelector('p').textContent = post.body
      postElement.querySelector('li').id = post.id
      listElement.append(postElement)
    }
  // } catch (error) {
  //   alert(error.message)
  // }
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

postList.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id
    sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`)
  }
})
