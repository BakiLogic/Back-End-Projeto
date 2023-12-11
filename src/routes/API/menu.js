const express = require('express')
const router = express.Router()
const Receita = require('../../functions/receitasFunc')
const ingredienteList = require('../../model/ingrediente')

const {checkLogged} = require('../../middleware/checkLog')


router.get('/menu/:id', checkLogged, async (req, res) => {
   
   
        let listaReceitas
        let tempoTotal
        let check = await Receita.searchId(req.params.id)

        if (check) {
           listaReceitas = listaReceitas + ',\n' + check.nome
            let ingredientes = await ingredienteList.findAll({where: {idReceita: check.id} })
            tempoTotal = tempoTotal + check.tdp
           res.json({listaReceitas, msg: ", \n ", ingredientes, msg: ", \n", tempoTotal })         
        } else {
        res.json({msg: "não encontrado"})
        
      } 

    

})




module.exports = router;
