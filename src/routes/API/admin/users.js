const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const User = require('../../../functions/userFunc')
const {checkAdmin} = require('../../../middleware/checkLog')

router.post('/user/adicionar', checkAdmin, async (req, res) => {
   
        const checkUser = await User.setAdm(req.body)

        if (checkUser) {
            res.json({answer: "Usuário adicionado"})
        } else {
            res.json({answer: "Erro ao adicionar ingrediente"})
        }
    
})

router.put('user/editPerId/:id', checkAdmin, async (req, res) => {
    const check = await User.editPerName(req.params.id)
    if (check) {
        res.json({answer: "Usuário editado"})
    } else {
        res.json({answer: "Falha ao editar"})
    }

})


router.delete('user/removePerId/:id', checkAdmin, async (req, res) => {
    const check = await User.deletePerId(req.params.id)

    if (check) {
        res.json({answer: "Usuário excluido"})
    } else {
        res.json({answer: "Falha ao excluir"})
    }    
 
})

router.get('user/searchPerId/:id', checkAdmin, async (req, res) => {
    
        const check = await User.buscarPorId(req.params.id)

        if (check) {
            res.json({check})
        } else {
        res.json({msg: "não encontrado"})
        } 
    
})

router.get('user/list/:qtt/:pagina', checkAdmin, async (req, res) => {
 
        let {qtt, pagina} = req.params

        const lista = await User.listlimited(qtt, pagina)

        if (lista) {
            res.json(lista)
        } else {
            res.json(lista)
        }
})

module.exports = router;
