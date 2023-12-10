const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const Admin = require('../../../functions/userFunc')
const {checkAdmin} = require('../middleware/checkLog')

router.post('/admin/adicionar', checkAdmin, async (req, res) => {
   
        const checkUser = await User.setNovo(req.body)

        if (checkUser) {
            res.json({answer: "Admin adicionado"})
        } else {
            res.json({answer: "Erro ao adicionar ingrediente"})
        }
    
})

router.put('admin/editPerId/:id', checkAdmin, async (req, res) => {
    const check = await Admin.editPerName(req.params.id)
    if (check) {
        res.json({answer: "Admin editado"})
    } else {
        res.json({answer: "Falha ao editar"})
    }

})


router.delete('admin/removePerId/:id', checkAdmin, async (req, res) => {
    const check = await Admin.deletePerId(req.params.id)

    if (check) {
        res.json({answer: "Admin excluido"})
    } else {
        res.json({answer: "Falha ao excluir"})
    }    
 
})



module.exports = router;
