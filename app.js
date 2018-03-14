//Importa configuracoes do servidor
const app = require('./config/server')

//parametrização da porta de escuta
let server = app.listen(3000, () => {
    console.log('Servidor ON!')
})

let io = require('socket.io').listen(server)
app.set('io', io)

//conexao websocket
io.on('connection', (socket)=> {
    console.log('Usuario conectou')
    socket.on('disconnect', ()=>{
        console.log('usuario desconectou')
    })
})