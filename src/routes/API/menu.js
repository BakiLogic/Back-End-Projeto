const express = require('express')
const router = express.Router()
const Receita = require('../../functions/receitasFunc')
const ingredientes = require('../../model/ingrediente')

const {checkLogged} = require('../../middleware/checkLog')
const {numberException} = require('../../functions/exceptions')
let listaReceitas = ''
let ingredienteList = ''
let ingredienteVolume = 0
let tempoTotal = 0
router.get('/menu/:id', checkLogged, async (req, res) => { 
    if(numberException(parseInt(req.params.id))){
       let check = (await Receita.searchId(req.params.id)).receita           
       if (check) {
        let estado = true
        let c = 0
        let a = 0
        
        listaReceitas = listaReceitas + check.nome + ', ' 
        let ingredienteCheck = await ingredientes.findAll({where: {idReceita: check.id} })
        do
            if (ingredienteCheck[c] != null){
                ingredienteList = ingredienteList + ingredienteCheck[c].nome + ', '
                c++
            } else {
                estado = false
            }
        while(estado)
        estado = true
        do
            if (ingredienteCheck[a] != null){
                ingredienteVolume = ingredienteVolume + ingredienteCheck[a].volume
                a++
            } else {
                estado = false
            }
        while(estado)

        tempoTotal = tempoTotal + parseInt(check.tdp)
       
           res.json({listaReceitas, tempoTotal, ingredienteList, ingredienteVolume })         
        } else {
            
        res.json({msg:"valor indisponível"})
        
     } 
    } else {
        res.json({msg: "id tem que ser um número"})
    }

})

router.get('/menureset', checkLogged, (req, res) => { 
    listaReceitas = ''
    ingredienteList = ''
    ingredienteVolume = 0
    tempoTotal = 0
    res.json({mgs: "resetado"})
})




module.exports = router;
