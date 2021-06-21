const express = require('express')
const app = express()
const host = '0.0.0.0';
const port = process.env.PORT || 8080;
const dados = require('./dados.json')

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
