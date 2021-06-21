const express = require('express')
const app = express()
const dados = require('./dados.json')

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
app.get('/api/personagem', function(req, res){
    const personagem = {
        "nome": dados.nomes[Math.floor(Math.random() * dados.nomes.length)],
        "Idioma": dados.idioma[Math.floor(Math.random() * dados.idioma.length)],
        "poder": Math.floor(Math.random() * 69420) + 5001,
        "idade" : Math.floor(Math.random() * (40 - 17 + 1) + 17),
        "vivo": Math.random() > 0.5
    }
    res.json(personagem)
})
    app.get('/api/info', function(req, res){
        const personagem = {
            "nome": "Victor Trunfo",
            "disciplina" : "PPW II"
        }
        res.json(personagem)
})

app.listen(PORT, function(){
    console.log("Servidor iniciado")
})
