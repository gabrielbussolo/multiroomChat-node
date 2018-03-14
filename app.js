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

    socket.on('msgParaServer', (data) => {
        //envia msg
        socket.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem })
        socket.broadcast.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem })

        //atualiza participantes
        if(parseInt(data.apelidos_atualizados) == 0){
            socket.emit('participantesParaCliente', { apelido: data.apelido })
            socket.broadcast.emit('participantesParaCliente', { apelido: data.apelido })
        }
    });
})