const express = require('express')
const router = express.Router()

const preLoad = require("../init/startingData")
const User = require('../model/user')
const Receita = require("../model/receita")
const Ingrediente = require("../model/ingrediente")


router.get('/install', async (req, res) => {

    await User.sync({ force: true })
    await Receita.sync({ force: true })
    await Ingrediente.sync({ force: true })

    for (var count = 0; count < preLoad.users.length; count++) {
        User.create(preLoad.users[count])
    }
    for (count = 0; count < preLoad.receitas.length; count++) {
        Receita.create(preLoad.receitas[count])
    }
    for (count = 0; count < preLoad.ingredientes.length; count++) {
        Ingrediente.create(preLoad.ingredientes[count])
    }

    res.json({msg:"Sucesso ao inicializar os dados"})

})

module.exports = router