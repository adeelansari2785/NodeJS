const io=require('socket.io')(3000);//set to port 3000

const users={}

io.on('connection', socket =>{
    //console.log('new User')
    socket.on('new-user',name=>{
        users[socket.id]=name
        socket.broadcast.emit('user-connected',name)
    })
    //socket.emit('chat-message','Hello World')
    socket.on('send-chat-message',message=>{
        socket.broadcast.emit('chat-message',{message:message,name:users[socket.id]})
    })
    socket.on('disconnect',()=>{
        socket.broadcast.emit('user-disconnected',users[socket.id])
        delete users[socket.id]
    })
})