const socket = io()

const form = document.getElementById('chat')
const inputMessage = document.getElementById('message')

form.addEventListener('submit', event => {
  event.preventDefault()

  socket.emit('send-message', {
    message: inputMessage.value
  })
})
