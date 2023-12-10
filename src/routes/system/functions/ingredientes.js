const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const Ingrediente = require('../functions/ingredientesFunc')
const checkLogged = require('../middleware/checkLog')

router.post('/addIngrediente', checkLogged, async (req, res) => {
   
        const checkIngrediente = await Ingrediente.set(req.body)

        if (checkIngrediente) {
            res.json({answer: "Ingrediente adicionado"})
        } else {
            res.json({answer: "Erro ao adicionar ingrediente"})
        }
    
})

router.delete('/removePerId/:id', checkAdmin, async (req, res) => {
    const check = await Ingrediente.deletar(req.params.id)

    if (check) {
        res.json({answer: "Ingrediente excluido"})
    } else {
        res.json({answer: "Falha ao excluir"})
    }    
 =
})
router.delete('/removePerName/:nome', checkAdmin, async (req, res) => {
    const check = await Ingrediente.deletar(req.params.nome)

    if (check) {
        res.json({answer: "Ingrediente excluido"})
    } else {
        res.json({answer: "Falha ao excluir"})
    }   
=
})

module.exports = router;
