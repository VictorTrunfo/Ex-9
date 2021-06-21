const express = require ('express')
const router = express.Router()

    router.get('/', function(req, res){
        const informacao = {
            "nome": "Victor Trunfo",
            "disciplina" : "PPW II"
        }
        res.json(informacao)
})
module.exports = router