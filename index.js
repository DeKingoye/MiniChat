const Express= require('express');
const app = Express();
const server = require('http').createServer(app); 
const io = require("socket.io")(server); 

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/public/index.html`)
})

io.on('connection', (socket) => {
    console.log('un utilisateur s\'est connecté.');


    socket.on('chat message', (msg)=>{
        io.emit('chat message', msg);
    })
})



server.listen(3000, () => {
    console.log('Ecoute sur le port 3000');
})