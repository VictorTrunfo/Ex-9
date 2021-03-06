const express = require ('express')
const router = express.Router()
const dados = require('../dados/dados.json')

router.get('/', function(req, res){
    const personagem = {
        "nome": dados.nomes[Math.floor(Math.random() * dados.nomes.length)],
        "Idioma": dados.idioma[Math.floor(Math.random() * dados.idioma.length)],
        "poder": Math.floor(Math.random() * 69420) + 5001,
        "idade" : Math.floor(Math.random() * (40 - 17 + 1) + 17),
        "vivo": Math.random() > 0.5
    }
    res.json(personagem)
})

module.exports = router