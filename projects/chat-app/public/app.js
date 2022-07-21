const socket = io('localhost:5000')

const form = document.getElementById('chat')
const inputMessage = document.getElementById('message')

socket.emit('join-room', {
  room_id: 'room-id-1'
})

form.addEventListener('submit', event => {
  event.preventDefault()

  socket.emit('send-message-to-server', {
    message: inputMessage.value,
    sender_id: 'user-id-1',
    receiver_id: 'room-id-1',
    created_at: new Date().toDateString()
  })
})

socket.on('send-message-to-receiver', data => {
  console.log(data)
})
