const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const Ingrediente = require('../functions/igFunc')
const checkLogged = require('../middleware/checkLog').checkLogged
const checkAdmin = require('../middleware/checkLog').checkAdmin

router.post('/ingrediente/adicionar', checkLogged, async (req, res) => {
   
        const checkIngrediente = await Ingrediente.set(req.body)

        if (checkIngrediente) {
            res.json({answer: "Ingrediente adicionado"})
        } else {
            res.json({answer: "Erro ao adicionar ingrediente"})
        }
    
})

router.put('ingrediente/editPerId/:id', checkAdmin, async (req, res) => {
    const check = await Ingrediente.editPerName(req.params.id)
    if (check) {
        res.json({answer: "Ingrediente editado"})
    } else {
        res.json({answer: "Falha ao editar"})
    }

})

router.put('ingrediente/editPerName/:nome', checkAdmin, async (req, res) => {
    const check = await Ingrediente.editPerName(req.params.nome)
    if (check) {
        res.json({answer: "Ingrediente editado"})
    } else {
        res.json({answer: "Falha ao editar"})
    }

})

router.delete('ingrediente/removePerId/:id', checkAdmin, async (req, res) => {
    const check = await Ingrediente.deletePerId(req.params.id)

    if (check) {
        res.json({answer: "Ingrediente excluido"})
    } else {
        res.json({answer: "Falha ao excluir"})
    }    
 
})
router.delete('ingrediente/removePerName/:nome', checkAdmin, async (req, res) => {

    const check = await Ingrediente.deletePerName(req.params.nome)

    if (check) {
        res.json({answer: "Ingrediente excluido"})
    } else {
        res.json({answer: "Falha ao excluir"})
    }   

})

router.get('ingrediente/searchPerId/:id', async (req, res) => {
    
        const check = await Ingrediente.buscarPorId(req.params.id)

        if (check) {
            res.json({check})
        } else {
        res.json({msg: "não encontrado"})
        } 
    
})

router.get('ingrediente/searchPerName/:nome', async (req, res) => {
    
        const check = await Ingrediente.buscarPorNome(req.params.nome)

       
        if (check) {
            res.json({check})
        } else {
            res.json({msg: "não encontrado"})
        } 
})

router.get('ingrediente/list/:qtt/:pagina', async (req, res) => {
 
        let {qtt, pagina} = req.params

        const lista = await Ingrediente.listLimited(qtt, pagina)

        if (lista) {
            res.json(lista)
        } else {
            res.json(lista)
        }
})

module.exports = router;
