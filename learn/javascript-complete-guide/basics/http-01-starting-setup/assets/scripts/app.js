const xhr = new XMLHttpRequest()
const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post')

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
xhr.responseType = 'json'
xhr.onload = function () {
  // const posts = JSON.parse(xhr.response)
  const posts = xhr.response
  for (const post of posts) {
    const postElement = document.importNode(postTemplate.content, true)
    postElement.querySelector('h2').textContent = post.title
    postElement.querySelector('p').textContent = post.body
    listElement.append(postElement)
  }
}
xhr.send()

