const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Receita = require('../functions/receitasFunc')
const checkLogged = require('../middleware/checkLog').checkLogged


router.post('/menu', checkLogged, async (req, res) => {
   let checkDo = true
    do{
        let listaReceitas
        let ingredientes
        let tempoTotal
        let check = await Receita.buscarPorId(req.body)

        if (check) {
            listaReceitas = listaReceitas + ',\n' + check.nome
            ingredientes = ingredientes + ', \n' + check.ingrediente
            tempoTotal = tempoTotal + check.tdp
            res.json({listaReceitas, msg: ", \n ", ingredientes,msg: ", \n", tempoTotal })         
        } else {
        res.json({msg: "não encontrado"})
        if(req.body < 0){
            checkDo = false
        }
        } 



    }while (checkDo)

})




module.exports = router;
