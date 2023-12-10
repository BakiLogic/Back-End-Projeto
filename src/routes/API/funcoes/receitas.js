const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const Receita = require('../../../functions/receitasFunc')
const {checkLogged} = require('../../../middleware/checkLog')
const {checkAdmin} = require('../../../middleware/checkLog')


router.post('/receita/adicionar', checkLogged, async (req, res) => {
   
        const checkReceita = await Receita.setNovo(req.body)

        if (checkReceita) {
            res.json({answer: "Receita adicionado"})
        } else {
            res.json({answer: "Erro ao adicionar receita"})
        }
    
})

router.put('/receita/editPerId/:id', checkAdmin, async (req, res) => {
    const check = await Receita.editPerName(req.params.id)
    if (check) {
        res.json({answer: "Receita editado"})
    } else {
        res.json({answer: "Falha ao editar"})
    }

})

router.put('/receita/editPerName/:nome', checkAdmin, async (req, res) => {
    const check = await Receita.editPerName(req.params.nome)
    if (check) {
        res.json({answer: "Receita editado"})
    } else {
        res.json({answer: "Falha ao editar"})
    }

})

router.delete('/receita/removePerId/:id', checkAdmin, async (req, res) => {
    const check = await Receita.deletePerId(req.params.id)

    if (check) {
        res.json({answer: "Receita excluido"})
    } else {
        res.json({answer: "Falha ao excluir"})
    }    
 
})
router.delete('/receita/removePerName/:nome', checkAdmin, async (req, res) => {

    const check = await Receita.deletePerName(req.params.nome)

    if (check) {
        res.json({answer: "Receita excluido"})
    } else {
        res.json({answer: "Falha ao excluir"})
    }   

})

router.get('/receita/searchPerId/:id',checkLogged, async (req, res) => {
    
        const check = await Receita.searchId(req.params.id)

        if (check) {
            res.json({check})
        } else {
        res.json({msg: "não encontrado"})
        } 
    
})

router.get('/receita/searchPerName/:nome',checkLogged, async (req, res) => {
    
        const check = await Receita.searchName(req.params.nome)

       
        if (check) {
            res.json({check})
        } else {
            res.json({msg: "não encontrado"})
        } 
})

router.get('/receita/listPerCategoria/:cat',checkLogged, async (req, res) => {
    
    const check = await Receita.listCat(req.params.cat)

   
    if (check) {
        res.json({check})
    } else {
        res.json({msg: "não encontrado"})
    } 
})

router.get('/receita/list/:qtt/:pagina',checkLogged, async (req, res) => {
 
        let {qtt, pagina} = req.params

        const lista = await Receita.listlimited(qtt, pagina)

        if (lista) {
            res.json(lista)
        } else {
            res.json(lista)
        }
})

module.exports = router;
