module.exports = (app) => {
    app.get('/',(req,res)=>{
        //express.pastaapp.pastacontrollers.arquivoindex.funcaoindex
        app.app.controllers.index.index(app, req, res)
    })
}