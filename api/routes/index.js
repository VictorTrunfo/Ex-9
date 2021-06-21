const express = require ('express')
const router = express.Router()
const personagem = require('./personagem')
const info = require('./info')

router.use('/personagem', personagem)
router.use('/info', info)

module.exports = router