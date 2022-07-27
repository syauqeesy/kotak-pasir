const socket = io('10.16.3.121:8010')

const form = document.getElementById('chat')
const inputMessage = document.getElementById('message')

socket.emit('join-room', {
  room_id: 'aca18fac-a730-4959-9e00-ce667e2814e0'
})

form.addEventListener('submit', event => {
  event.preventDefault()

  socket.emit('send-message-to-server', {
    chat_message: inputMessage.value,
    chat_sender_id: '6abfafef-6b96-41e7-887c-9a26277b916f',
    chat_receiver_id: 'CGKNRL',
    chat_created_at: new Date().toISOString()
  })
})

socket.on('send-message-to-receiver', data => {
  console.log(data)
})
