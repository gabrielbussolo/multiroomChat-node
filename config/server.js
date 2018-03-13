//Importando módulos
const express = require('express') //framework web
const consign = require('consign') //auto load de rotas, models, controllers etc...
const bodyParser = require('body-parser')// pegar o body dos formularios
const expressValidator = require('express-validator') // validacao de formularios

//faz o coracao do projeto bater
const app = express()

//setar 
app.set('view engine', 'ejs') //dizendo que vou usar ejs
app.set('views', './app/views') //dizendo onde ta as views pra ele processar

//middlewares
app.use(express.static('./app/public')) //onde ta os arquivos estaticos (html css js)
app.use(bodyParser.urlencoded( { extended:true } )) //usando body-parser 
app.use(expressValidator()) //usando express validator (futuramente nao vou usar isso)

//consing
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

module.exports = app