//Importa configuracoes do servidor
const app = require('./config/server')

//parametrização da porta de escuta
app.listen(3000, () => {
    console.log('Servidor ON!')
})